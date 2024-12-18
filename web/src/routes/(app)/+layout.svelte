<script lang="ts">
	import altAvatar from '$lib/assets/alt-avatar.svg';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { LanguageSwitcher, ThemeSwitcher } from '$lib/components/modules';
	import { Command } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Frame from 'lucide-svelte/icons/frame';
	import LifeBuoy from 'lucide-svelte/icons/life-buoy';
	import Send from 'lucide-svelte/icons/send';
	import HomeIcon from '$lib/components/icons/common/home.svelte';
	import GridIcon from '$lib/components/icons/common/grid.svelte';
	import { config } from '$lib/config-client';
	import * as m from '$lib/paraglide/messages.js';

	let { data, children } = $props();

	const currentAvatarUrl = data.user?.avatar
		? `${config.pbUrl}/api/files/${data.user.collectionId}/${data.user.id}/${data.user.avatar}`
		: altAvatar;

	const menu = {
		navMain: [
			{
				title: m.App_Dashboard(),
				url: '/dashboard',
				icon: HomeIcon,
				isActive: true
			},
			{
				title: m.App_Gallery(),
				url: '/gallery',
				icon: GridIcon
			}
		],
		navAdmin: [
			{
				name: 'Users',
				url: '#',
				icon: Frame
			}
		],
		navSecondary: [
			{
				title: m.LP_Footer_Contact(),
				url: '/contact',
				icon: LifeBuoy
			},
			{
				title: m.LP_Footer_Roadmap(),
				url: '/roadmap',
				icon: Send
			}
		],
		user: {
			name: data.user?.name || data.user?.username,
			email: data.user?.email,
			avatar: currentAvatarUrl
		}
	};
</script>

<Sidebar.Provider>
	<AppSidebar {menu} />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center justify-between gap-2">
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-6" />
				<Command size={16} /> + B
			</div>
			<div class="flex items-center gap-4 px-4">
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>
		</header>
		<div class="px-6">
			{@render children?.()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
