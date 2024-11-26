import { fail, redirect, type Actions } from '@sveltejs/kit';
import { RegisterUserSchema } from '$lib/schemas';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const form = await superValidate(formData, zod(RegisterUserSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			formData.set('subscription', 'free');
			await locals.pb.collection('users').create(formData);
			await locals.pb.collection('users').requestVerification(form.data.email);
		} catch (err) {
			if (err instanceof ClientResponseError) {
				// eslint-disable-next-line no-console
				console.error('PB error: ', err);
				if (err.response.data.email) {
					setError(form, 'email', err.response.data.email.message);
				}
			} else {
				// eslint-disable-next-line no-console
				console.error('Unexpected error:', err);
			}

			return fail(400, { form });
		}

		redirect(303, '/login');
	}
};
