<script lang="ts">
	import '../app.postcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { config } from '$lib/config-client';
	import { ComingSoonPage } from '$lib/components/pages';
	import { Seo } from '$lib/components/modules';
	import { ModeWatcher } from 'mode-watcher';
	import { posthog } from 'posthog-js';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}

	let { children } = $props();
</script>

<ModeWatcher />
{#if config.showComingSoon}
	<Seo />
	<ComingSoonPage />
{:else}
	<ParaglideJS {i18n}>
		<Toaster richColors />
		{@render children?.()}
	</ParaglideJS>
{/if}
