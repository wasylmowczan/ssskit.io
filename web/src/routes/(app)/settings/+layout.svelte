<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { Trash, Lock, User, Mail, Images } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	const navigation = [
		{
			title: m.App_Settings_Avatar(),
			href: i18n.route('/settings/avatar'),
			icon: Images
		},
		{
			title: m.App_Settings_Email(),
			href: i18n.route('/settings/email'),
			icon: Mail
		},
		{
			title: m.App_Settings_Username(),
			href: i18n.route('/settings/username'),
			icon: User
		},
		{
			title: m.App_Settings_Password(),
			href: i18n.route('/settings/password'),
			icon: Lock
		},
		{
			title: m.App_Settings_DeleteAccount(),
			href: i18n.route('/settings/delete-account'),
			icon: Trash
		}
	];
</script>

<div
	class="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"
>
	<nav class="grid items-start text-sm font-medium">
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
					<Icon class="h-4 w-4" />
				{/if}
				{title}
			</a>
		{/each}
	</nav>
	<div class="grid gap-6">
		<slot />
	</div>
</div>
