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
	showComingSoon: false,
	comingSoonDate: '2026-01-01', // TODO: Configure coming soon date
	adminEmail: env.PUBLIC_ADMIN_EMAILs
};
