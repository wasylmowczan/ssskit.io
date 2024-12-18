import { redirect, type Handle } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { i18n } from '$lib/i18n';
import { languageTag } from '$lib/paraglide/runtime';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		redirect(303, '/login');
	}

	if (locals.user) {
		return {
			user: locals.user
		};
	}
	return {
		user: undefined
	};
};
