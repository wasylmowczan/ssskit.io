<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className?: string | undefined;
		containerClassName?: string | undefined;
		isMouseEntered?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		className = undefined,
		containerClassName = undefined,
		isMouseEntered = $bindable(false),
		children
	}: Props = $props();

	let containerRef: HTMLDivElement = $state();

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef) return;
		const { left, top, width, height } = containerRef.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = (e: MouseEvent) => {
		isMouseEntered = true;
		if (!containerRef) return;
	};

	const handleMouseLeave = (e: MouseEvent) => {
		if (!containerRef) return;
		isMouseEntered = false;
		containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};
</script>

<div
	class={cn('flex items-center justify-center py-10 ', containerClassName)}
	style="perspective: 1000px;"
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={containerRef}
		onmouseenter={handleMouseEnter}
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		class={cn(
			'relative flex items-center justify-center transition-all duration-200 ease-linear',
			className
		)}
		style="transform-style: preserve-3d;"
	>
		{@render children?.()}
	</div>
</div>
