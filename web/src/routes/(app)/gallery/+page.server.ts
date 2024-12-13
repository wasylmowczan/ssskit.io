import { config } from '$lib/config-server';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase(config.pocketbaseUrl);

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const images =
		(await pb.collection('images').getFullList({
			filter: `owner = "${locals.user?.id}"`,
			sort: '-created'
		})) || [];

	return {
		images
	};
};
