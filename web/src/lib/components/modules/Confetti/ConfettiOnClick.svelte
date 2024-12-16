<script lang="ts">
	import { Confetti } from 'svelte-confetti';

	const duration = 2000;

	// @ts-ignore
	let things: any[] = $state([]);
	let timeout: any;

	// @ts-ignore
	async function moveConfetti(event) {
		const { target, clientX, clientY } = event;

		const elementY = target.getBoundingClientRect().top;
		const elementX = target.getBoundingClientRect().left;

		const x = clientX - elementX;
		const y = clientY - elementY;

		// @ts-ignore
		things = [...things, { x, y }];

		clearTimeout(timeout);

		timeout = setTimeout(() => (things = []), duration);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="box" onclick={moveConfetti}>
	<span>Click in me</span>

	{#each things as thing}
		<div class="mover" style="left: {thing.x}px; top: {thing.y}px">
			<Confetti y={[-0.5, 0.5]} fallDistance="20px" amount={10} {duration} />
		</div>
	{/each}
</div>

<style>
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 10rem;
		width: 100%;
		border: 1px solid lightgray;
		border-radius: 0.5rem;
		background: white;
		user-select: none;
	}

	.mover {
		position: absolute;
	}

	span {
		pointer-events: none;
	}
</style>
