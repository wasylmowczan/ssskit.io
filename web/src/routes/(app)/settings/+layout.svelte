<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';
	import { i18n } from '$lib/i18n';
	import BookImageIcon from '$lib/components/icons/common/book-image.svelte';
	import MailCheckIcon from '$lib/components/icons/common/mail-check.svelte';
	import UserRoundPenIcon from '$lib/components/icons/common/user-round-pen.svelte';
	import KeyboardIcon from '$lib/components/icons/common/keyboard.svelte';
	import TrashIcon from '$lib/components/icons/common/trash-2.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const navigation = [
		{
			title: m.App_Settings_Avatar(),
			href: i18n.route('/settings/avatar'),
			icon: BookImageIcon
		},
		{
			title: m.App_Settings_Email(),
			href: i18n.route('/settings/email'),
			icon: MailCheckIcon
		},
		{
			title: m.App_Settings_Username(),
			href: i18n.route('/settings/username'),
			icon: UserRoundPenIcon
		},
		{
			title: m.App_Settings_Password(),
			href: i18n.route('/settings/password'),
			icon: KeyboardIcon
		},
		{
			title: m.App_Settings_DeleteAccount(),
			href: i18n.route('/settings/delete-account'),
			icon: TrashIcon
		}
	];
</script>

<div
	class="mx-auto grid w-full items-start gap-12 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] px-12"
>
	<nav class="grid items-start text-sm font-medium gap-4">
		{#each navigation as { title, href, icon }}
			{@const isActive = $page.url.pathname === href}

			<a
				{href}
				class={cn(
					isActive && 'bg-muted',
					'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
				)}
			>
				{#if icon}
					{@const Icon = icon}
					<Icon />
				{/if}
				{title}
			</a>
		{/each}
	</nav>
	<div class="grid gap-6">
		{@render children?.()}
	</div>
</div>
