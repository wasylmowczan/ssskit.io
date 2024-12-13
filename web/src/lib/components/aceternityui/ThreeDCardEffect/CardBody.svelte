<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string;
</script>

<div
	class={cn(
		'h-86 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] flex flex-col items-center justify-center ',
		className
	)}
>
	<slot />
</div>
