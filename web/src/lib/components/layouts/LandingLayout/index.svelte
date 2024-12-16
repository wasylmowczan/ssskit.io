<script lang="ts">
	import { Footer, Header } from './components';
	import * as m from '$lib/paraglide/messages.js';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const menuItems = [
		{ name: m.LP_Header_Home(), href: '/' },
		{ name: m.LP_Header_Demo(), href: '/#demo' },
		{ name: m.LP_Header_Features(), href: '/#features' },
		{ name: m.LP_Header_Pricing(), href: '/#pricing' },
		{ name: m.LP_Header_FAQ(), href: '/#faq' }
	];
</script>

<div class="flex min-h-screen w-full flex-col dotted-background">
	<Header {menuItems} />
	<main class="flex-1 flex flex-col">
		{@render children?.()}
	</main>
	<Footer {menuItems} />
</div>

<style>
	.dotted-background {
		background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1%, transparent 15%);
		background-size: 15px 15px; /* Adjust size as needed */
	}
</style>
