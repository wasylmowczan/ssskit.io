<script lang="ts">
	import { SectionContainer } from '..';

	import LogoReddit from './logos/reddit.svelte';
	import LogoHackerNews from './logos/hackernews.svelte';
	import LogoProductHunt from './logos/producthunt.svelte';
	import LogoX from './logos/x.svelte';
	import LogoBlueSky from './logos/bluesky.svelte';
	import * as m from '$lib/paraglide/messages.js';

	const logos = [
		{ src: LogoProductHunt, alt: 'Product Hunt', url: 'https://www.producthunt.com/' },
		{ src: LogoReddit, alt: 'Reddit', url: 'https://www.reddit.com/' },
		{ src: LogoHackerNews, alt: 'Hacker News', url: 'https://news.ycombinator.com/' },
		{ src: LogoX, alt: 'X', url: 'https://x.com/' },
		{ src: LogoBlueSky, alt: 'BlueSky', url: 'https://bsky.social/' }
	];

	const title = m.LP_FeaturedIn_Title();
	const subtitle = m.LP_FeaturedIn_Subtitle();
</script>

<SectionContainer {title} {subtitle} id="seen-in" contentClass="max-w-6xl pb-12">
	<div class="flex flex-wrap justify-center items-center gap-12 md:gap-16">
		{#each logos as logo}
			<a
				href={logo?.url}
				target="_blank"
				rel="noopener noreferrer"
				class="w-32 h-32 flex items-center justify-center relative"
			>
				<svelte:component this={logo?.src} customClass="h-16 hover:text-primary" />
			</a>
		{/each}
	</div>
</SectionContainer>
