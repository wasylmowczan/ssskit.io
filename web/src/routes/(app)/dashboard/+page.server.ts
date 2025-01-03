import { config } from '$lib/config-server';
import { promptSchema } from '$lib/schemas';
import { error, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	return {
		form: await superValidate(zod(promptSchema))
	};
};

export const actions: Actions = {
	new: async ({ request, locals }) => {
		// call the Stability AI endpoint and generate the image
		const formData = await request.formData();
		const prompt = formData.get('prompt');

		const engineId = 'stable-diffusion-xl-1024-v1-0';
		const apiHost = 'https://api.stability.ai';
		const apiKey = config.stabilityApiKey;

		const res = await fetch(`${apiHost}/v1/generation/${engineId}/text-to-image`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'image/png',
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				text_prompts: [
					{
						text: prompt,
						weight: 1
					}
				],
				disable_safety_checker: true,
				negative_prompt:
					'color, ugly, low-res, deformed, mutation, blurry, malformed, disgusting, mutilated, mangled, old, color, dark, black',
				cfg_scale: 10,
				clip_guidance_preset: 'FAST_BLUE',
				sampler: 'DDIM',
				height: 1216,
				width: 832,
				steps: 50,
				samples: 1
			})
		});
		const imageBlob = await res.blob();

		// save the blob to pocketbase
		try {
			await locals.pb.collection('images').create({
				image: imageBlob,
				owner: locals.user?.id,
				prompt: prompt
			});
		} catch (e) {
			console.error('Error saving image to PocketBase:', e);
			error(500, 'Error saving image to PocketBase');
		}
	}
};
