import type { PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { setError, superValidate } from 'sveltekit-superforms';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { feedbackSchema } from '$lib/schemas';
import { ClientResponseError } from 'pocketbase';
import FeedbackEmail from '$lib/emails/feedback.svelte';
import { sendEmail } from '$lib/mailer';
import { config as configServer } from '$lib/config-server';
import { config as configClient } from '$lib/config-client';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		redirect(303, '/login');
	}

	return {
		form: await superValidate(zod(feedbackSchema))
	};
};

export const actions: Actions = {
	submit: async ({ request, locals }) => {
		if (!locals.pb.authStore.isValid || !locals.user) {
			throw error(401, 'Unauthorized');
		}
		const formData = await request.formData();
		const form = await superValidate(formData, zod(feedbackSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await locals.pb.collection('feedback').create({
				name: locals.user?.id,
				feedback: form.data.feedback
			});
			sendEmail({
				to: configServer.adminEmail || 'onboarding@resend.dev',
				subject:
					'Feedback from ' +
					(locals.user.name || locals.user.username) +
					' on ' +
					configClient.appName,
				from: locals.user.email || 'delivered@resend.dev',
				template: FeedbackEmail,
				props: {
					name: locals.user.name || locals.user.username,
					feedback: form.data.feedback
				}
			});
			return { form };
		} catch (err) {
			if (err instanceof ClientResponseError) {
				// eslint-disable-next-line no-console
				console.error('PB error: ', err);
				if (err.response?.data?.feedback) {
					return setError(form, 'feedback', err.response.data.feedback.message);
				}
			} else {
				// eslint-disable-next-line no-console
				console.error('Unexpected error:', err);
			}
			return fail(400, { form });
		}
	}
};
