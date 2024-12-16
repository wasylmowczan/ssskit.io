<script lang="ts">
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import { config } from '$lib/config-client.js';
	import AltAvatar from '$lib/assets/alt-avatar.svg';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import HomeIcon from '$lib/components/icons/common/home.svelte';
	import GridIcon from '$lib/components/icons/common/grid.svelte';
	import LifeBuoy from 'lucide-svelte/icons/life-buoy';
	import Send from 'lucide-svelte/icons/send';
	import { ChartPie, Frame } from 'lucide-svelte';
	import { ThemeSwitcher } from '$lib/components/modules';

	const { data, children } = $props();
	let currentAvatarUrl = $derived(
		data.user?.avatar
			? `${config.pbUrl}/api/files/${data.user.collectionId}/${data.user.id}/${data.user.avatar}`
			: AltAvatar
	);

	let menu = {
		navMain: [
			{
				title: 'Dashboard',
				url: i18n.route(`${languageTag()}/dashboard`),
				icon: HomeIcon,
				isActive: true
			},
			{
				title: 'Gallery',
				url: i18n.route(`${languageTag()}/gallery`),
				icon: GridIcon
			}
		],
		navAdmin: [
			{
				name: 'Design Engineering',
				url: '#',
				icon: Frame
			},
			{
				name: 'Sales & Marketing',
				url: '#',
				icon: ChartPie
			},
			{
				name: 'Travel',
				url: '#',
				icon: Map
			}
		],
		navSecondary: [
			{
				title: 'Support',
				url: '#',
				icon: LifeBuoy
			},
			{
				title: 'Feedback',
				url: '#',
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
		<header class="flex h-16 shrink-0 items-center gap-2">
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
			</div>
		</header>
		{@render children?.()}
	</Sidebar.Inset>
</Sidebar.Provider>
