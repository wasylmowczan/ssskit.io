<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Instagram from '$lib/components/icons/brands/Instagram.svelte';
	import X from '$lib/components/icons/brands/X.svelte';
	import Bluesky from '$lib/components/icons/brands/BlueSky.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import demoImage from '$lib/assets/demo.png';

	import { Confetti } from 'svelte-confetti';
	import { config } from '$lib/config-client';
	import { ToggleConfetti } from './ToggleConfetti';
	import { ThemeSwitcher } from '$lib/components/modules';

	let timeLeft: { [key: string]: number } = $state({});
	let timer: NodeJS.Timeout;

	const title = 'Coming Soon';
	const stickyCountdownDate = config.comingSoonDate;
	const socialLinks = [
		{ name: 'Instagram', url: 'https://instagram.com', icon: Instagram }, // TODO: add your Instagram link
		{ name: 'Bluesky', url: 'https://bsky.app', icon: Bluesky }, // TODO: add your Bluesky link
		{ name: 'X', url: 'https://twitter.com', icon: X } // TODO: add your X link
	];

	function calculateTimeLeft() {
		const difference = +new Date(stickyCountdownDate) - +new Date();
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60)
			};
		} else {
			timeLeft = {};
		}
	}

	onMount(() => {
		calculateTimeLeft();
		timer = setInterval(calculateTimeLeft, 1000);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="min-h-screen flex items-center justify-center">
	<div class="text-center p-8 max-w-4xl">
		<h1 class="text-5xl font-bold mb-4">{title}</h1>
		<p class="text-xl mb-8">
			We are working hard to bring you something
			<span class="font-bold text-blue-500">
				<HoverCard.Root>
					<HoverCard.Trigger>amazing.</HoverCard.Trigger>
					<HoverCard.Content>
						<!-- svelte-ignore a11y_img_redundant_alt -->
						<img src={demoImage} alt="Demo Image" />
					</HoverCard.Content>
				</HoverCard.Root>
			</span>
			Stay tuned and celebrate with us!
			<ToggleConfetti toggleOnce relative={false}>
				{#snippet label()}
								<button  class="text-lg font-bold pt-6"> Click to Celebrate 🥳 </button>
							{/snippet}

				<div
					style="position: fixed; top: -50px; left: 0; height: 100vh; width: 100vw; display: flex; justify-content: center; overflow: hidden;"
				>
					<Confetti
						x={[-5, 5]}
						y={[0, 0.1]}
						delay={[500, 2000]}
						infinite
						duration={5000}
						amount={200}
						fallDistance="100vh"
					/>
				</div>
			</ToggleConfetti>
		</p>
		<div class="flex justify-center space-x-4 mb-8">
			{#each Object.entries(timeLeft) as [unit, value]}
				<div class="text-center">
					<div class="text-4xl font-bold">{value}</div>
					<div class="text-sm uppercase">{unit}</div>
				</div>
			{/each}
		</div>

		<div class="mt-8 flex justify-center space-x-6">
			{#each socialLinks as { name, url, icon }}
				{@const SvelteComponent = icon}
				<a href={url} target="_blank" rel="noopener noreferrer">
					<SvelteComponent customClass="w-6 h-6" />
					<span class="sr-only">{name}</span>
				</a>
			{/each}
		</div>
		<div class="mt-8">
			<ThemeSwitcher />
		</div>
	</div>
</div>
