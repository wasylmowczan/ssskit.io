<script lang="ts">
	import { Menu } from 'lucide-svelte/icons';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { ThemeSwitcher } from '$lib/components/modules/index';
	import { LanguageSwitcher } from '$lib/components/modules';
	import Logo from '../Logo.svelte';
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		menuItems: {
			name: string;
			href: string;
		}[];
	}

	let { menuItems }: Props = $props();
</script>

<header
	class="z-50 bg-background sticky top-0 flex h-16 justify-between items-center gap-4 border-b px-4 md:px-6 w-full"
>
	<div class="flex gap-2 items-center">
		<Sheet.Root>
			<Sheet.Trigger>
				<Button variant="outline" size="icon" class="shrink-0 md:hidden">
					<Menu class="h-5 w-5" />
					<span class="sr-only">Toggle navigation menu</span>
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side="left">
				<nav class="grid gap-6 text-lg font-medium">
					<Logo />
					{#each menuItems as { name, href }}
						<a {href} class="text-muted-foreground hover:text-foreground">
							{name}
						</a>
					{/each}
				</nav>
			</Sheet.Content>
		</Sheet.Root>
		<Logo />
	</div>
	<nav class="hidden flex-col text-lg font-medium md:flex md:flex-row">
		{#each menuItems as { name, href }}
			<Button
				variant="ghost"
				{href}
				class="font-bold text-muted-foreground hover:text-foreground transition-colors"
			>
				{name}
			</Button>
		{/each}
	</nav>
	<div class="flex items-center gap-4 md:gap-2 lg:gap-4">
		<Button href="/login">{m.LP_Header_GetStarted()}</Button>
		<ThemeSwitcher />
		<LanguageSwitcher />
	</div>
</header>
