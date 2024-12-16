<script lang="ts">
	import XIcon from '$lib/components/icons/brands/X.svelte';
	import InstagramIcon from '$lib/components/icons/brands/Instagram.svelte';
	import BlueSkyIcon from '$lib/components/icons/brands/BlueSky.svelte';
	import * as m from '$lib/paraglide/messages.js';

	import { config } from '$lib/config-client';
	import Logo from '../Logo.svelte';

	interface Props {
		menuItems: {
		name: string;
		href: string;
	}[];
	}

	let { menuItems }: Props = $props();

	let socialLinks = [
		{ name: 'X', href: 'https://x.com', icon: XIcon },
		{ name: 'BlueSky', href: 'https://bsky.app/profile/imagin.ai', icon: BlueSkyIcon },
		{ name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon }
	];

	const legal = [
		{ name: m.LP_Footer_PrivacyPolicy(), href: '/privacy-policy' },
		{ name: m.LP_Footer_TermsOfService(), href: '/terms-of-service' }
	];

	const other = [
		{ name: m.LP_Footer_Changelog(), href: '/changelog' },
		{ name: m.LP_Footer_Roadmap(), href: '/roadmap' },
		{ name: m.LP_Footer_Contact(), href: '/contact' }
	];
</script>

<footer class="bg-gray-100 dark:bg-gray-800 rounded-tl-3xl rounded-tr-3xl">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 pb-24">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<!-- 1 column -->
			<div class="space-y-8">
				<Logo />
				<p class="text-gray-500 dark:text-gray-400 text-base">{m.LP_Footer_Slogan()}</p>
				<div class="flex space-x-6">
					{#each socialLinks as { name, href, icon }}
						{@const SvelteComponent = icon}
						<a {href} class="text-gray-400 hover:text-gray-500" target="_blank">
							<span class="sr-only">{name}</span>
							<SvelteComponent customClass="w-6 h-6" />
						</a>
					{/each}
				</div>
			</div>
			<!-- 2 column -->
			<div>
				<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
					{m.LP_Footer_Product()}
				</h3>
				<ul class="mt-4 space-y-4">
					{#each menuItems as { name, href }}
						<li>
							<a
								{href}
								class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
							>
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<!-- 3 column -->
			<div>
				<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
					{m.LP_Footer_Legal()}
				</h3>
				<ul class="mt-4 space-y-4">
					{#each legal as { name, href }}
						<li>
							<a
								{href}
								class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
							>
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<!-- 4 column -->
			<div>
				<h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
					{m.LP_Footer_Other()}
				</h3>
				<ul class="mt-4 space-y-4">
					{#each other as { name, href }}
						<li>
							<a
								{href}
								class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
							>
								{name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<!-- Footer Copyright -->
	<div class="mb-8 border-t border-gray-200 pt-8">
		<p class="text-base text-gray-400 text-center">
			&copy; {new Date().getFullYear()}
			{config.appName}. {m.LP_Footer_Rights()}
		</p>
	</div>
</footer>
