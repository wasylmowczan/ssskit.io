<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className: string;
		children?: import('svelte').Snippet;
	}

	let { className, children }: Props = $props();
</script>

<div
	class={cn(
		'h-86 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] flex flex-col items-center justify-center ',
		className
	)}
>
	{@render children?.()}
</div>
