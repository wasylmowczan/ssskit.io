<script lang="ts">
	import { config } from '$lib/config-client';
	import { cn } from '$lib/utils';
	import { mode } from 'mode-watcher';
	import MediaKit from './MediaKit.svelte';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime';
</script>

<!-- If you want to use logo as text, uncomment the following code and comment the previous code -->
<MediaKit>
	<div class="flex items-center gap-4">
		<div
			role="img"
			aria-label="Imagine AI logo"
			class={cn(
				'aspect-square size-8',
				'flex items-center justify-center',
				'bg-primary text-primary-foreground',
				'-rotate-12 rounded font-bold',
				'text-lg', // Changed from 'text-xs' to 'text-lg' for larger text
				'[&_*]:mt-[-1px] [&_*]:leading-[0.85]'
			)}
		>
			<a href={i18n.route(`${languageTag()}/dashboard`)}>
				<span>AI</span>
			</a>
		</div>
		<a href={i18n.route(`${languageTag()}/dashboard`)}>
			<span class="text-lg font-bold">{config.appName}</span>
		</a>
	</div>
</MediaKit>

<!-- If you want to use logo as image, uncomment the following code and comment the previous code -->

<!-- <MediaKit>
	<a href={i18n.route(`${languageTag()}/dashboard`)} class="flex items-center gap-2">
		{#if $mode === 'dark'}
			<img src="/logo.svg" alt="Logo" class="w-32 h-24" style="filter: invert(100%);" />
		{:else}
			<img src="/logo.svg" alt="Logo" class="w-32 h-24" />
		{/if}
	</a>
</MediaKit> -->
