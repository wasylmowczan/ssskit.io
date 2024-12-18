import type { AvailableLanguageTag } from '../../lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User } from '$lib/types';
import PocketBase from 'pocketbase';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>;

			pb: PocketBase;
			user: User | null;
		}
		//interface PageData {}
		// interface Platform {}
	}
}

export {};
