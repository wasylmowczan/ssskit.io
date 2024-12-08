<script lang="ts">
	import '../app.postcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { config } from '$lib/config-client';
	import { ComingSoonPage } from '$lib/components/pages';
	import { Seo } from '$lib/components/modules';
</script>

{#if config.showComingSoon}
	<Seo />
	<ComingSoonPage />
{:else}
	<ParaglideJS {i18n}>
		<Toaster richColors />
		<slot />
	</ParaglideJS>
{/if}
