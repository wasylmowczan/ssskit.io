import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { i18n } from '$lib/i18n';
import { languageTag } from '$lib/paraglide/runtime.js';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		redirect(303, '/dashboard');
	}
};
