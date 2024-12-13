import { env } from '$env/dynamic/private';

export const config = {
	pocketbaseUrl: env.POCKETBASE_URL,
	pocketbaseAdminEmail: env.POCKETBASE_ADMIN_EMAIL,
	pocketbaseAdminPassword: env.POCKETBASE_ADMIN_PASSWORD,
	stabilityApiKey: env.STABILITY_API_KEY
};
