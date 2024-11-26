<script lang="ts">
	import { Footer, Header } from './components';

	const menuItems = [
		{ name: 'Demo', href: '/#demo' },
		{ name: 'Features', href: '/#features' },
		{ name: 'Pricing', href: '/#pricing' },
		{ name: 'FAQ', href: '/#faq' }
	];
</script>

<div class="flex min-h-screen w-full flex-col dotted-background">
	<Header {menuItems} />
	<main class="flex-1 flex flex-col">
		<slot />
	</main>
	<Footer {menuItems} />
</div>

<style>
	.dotted-background {
		background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1%, transparent 15%);
		background-size: 15px 15px; /* Adjust size as needed */
	}
</style>
