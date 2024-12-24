import { env } from '$env/dynamic/private';

export const config = {
	pocketbaseUrl: env.POCKETBASE_URL,
	pocketbaseAdminEmail: env.POCKETBASE_ADMIN_EMAIL,
	pocketbaseAdminPassword: env.POCKETBASE_ADMIN_PASSWORD,
	stabilityApiKey: env.STABILITY_API_KEY,
	resendApiKey: env.PRIVATE_RESEND_API_KEY,
	resendAudienceId: env.PRIVATE_RESEND_AUDIENCE_ID,
	adminEmail: env.PRIVATE_ADMIN_EMAIL,
	posthogApiKey: env.PRIVATE_POSTHOG_PROJECT_API_KEY,
	posthogApiHost: env.PRIVATE_POSTHOG_API_HOST
};
