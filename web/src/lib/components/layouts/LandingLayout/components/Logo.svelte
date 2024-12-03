<script lang="ts">
	import { config } from '$lib/config-client';
	import { cn } from '$lib/utils';
	import { mode } from 'mode-watcher';
</script>

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
		<span>AI</span>
	</div>
	<span class="text-lg font-bold">{config.appName}</span>
</div>

<!-- If you want to use logo as image, uncomment the following code and comment the previous code -->
<!-- 
<a href="/" class="flex items-center gap-2">
	{#if $mode === 'dark'}
		<img src="/logo.svg" alt="Logo" class="w-8 h-8" style="filter: invert(100%);" />
	{:else}
		<img src="/logo.svg" alt="Logo" class="w-8 h-8" />
	{/if}
	<span class="text-lg font-semibold">{config.appName}</span>
</a> -->
