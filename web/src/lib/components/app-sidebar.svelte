<script lang="ts" module>
	import Logo from '$lib/components/layouts/LandingLayout/components/Logo.svelte';
	import ThemeSwitcher from '$lib/components/modules/ThemeSwitcher/index.svelte';
	import LanguageSwitcher from '$lib/components/modules/LanguageSwitcher/index.svelte';
</script>

<script lang="ts">
	import NavMain from '$lib/components/nav-main.svelte';
	import NavAdmin from '$lib/components/nav-admin.svelte';
	import NavSecondary from '$lib/components/nav-secondary.svelte';
	import NavUser from '$lib/components/nav-user.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		menu,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & { menu: any } = $props();
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/" {...props}>
							<Logo />
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={menu.navMain} />
		<!-- <NavAdmin items={menu.navAdmin} /> -->
		<!-- <NavSecondary items={menu.navSecondary} class="mt-auto" /> -->
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="flex items-center justify-center gap-2">
			<ThemeSwitcher />
			<LanguageSwitcher />
		</div>
		<NavUser user={menu.user} />
	</Sidebar.Footer>
</Sidebar.Root>
