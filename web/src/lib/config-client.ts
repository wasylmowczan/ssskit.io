import { env } from '$env/dynamic/public';

export const config = {
	baseUrl: env.PUBLIC_BASE_URL,
	pbUrl: env.PUBLIC_PB_URL,
	googleAnalyticsId: env.PUBLIC_GOOGLE_ANALYTICS_ID,
	plausibleSrc: env.PUBLIC_PLAUSIBLE_SRC,
	plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN,
	appName: env.PUBLIC_APP_NAME,
	showStickyCountdown: false, // TODO: Configure sticky countdown
	stickyCountdownDate: '2024-12-31',
	stickyCountdownText: 'Early-Bird',
	// Stripe
	stripePublicKey: env.PUBLIC_STRIPE_PUBLIC_KEY
};
