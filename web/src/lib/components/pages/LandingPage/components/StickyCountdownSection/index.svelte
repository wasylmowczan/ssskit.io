<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Clock, ArrowRight } from 'lucide-svelte';
	import { config } from '$lib/config-client';
	let days = $state(0),
		hours = $state(0),
		minutes = $state(0),
		seconds = $state(0);

	function updateCountdown() {
		const launchDate = new Date(config.stickyCountdownDate).getTime();
		const now = new Date().getTime();
		const distance = launchDate - now;

		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);
	}

	function scrollToMainCTA() {
		const mainCTA = document.getElementById('cta');
		mainCTA?.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<div
	class="z-50 fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg flex items-center justify-between p-2 pr-4 space-x-4 border border-gray-200 dark:border-gray-700"
>
	<div class="bg-primary text-primary-foreground rounded-full p-2">
		<Clock class="w-5 h-5" />
	</div>
	<div class="flex space-x-2 text-sm font-medium">
		<span>{days}d</span>
		<span>{hours}h</span>
		<span>{minutes}m</span>
		<span>{seconds}s</span>
	</div>
	<Button onclick={scrollToMainCTA} variant="ghost" size="sm" class="text-primary">
		{config.stickyCountdownText}
		<ArrowRight class="w-4 h-4 ml-1" />
	</Button>
</div>
