<script lang="ts">
	import { ArrowUpIcon, ArrowDownIcon, Users, UserPlus, UserMinus } from 'lucide-svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	const totalUsers = data.data.length;

	const getNewUsersCount = () =>
		data.data.filter(
			(user: { created: string }) => Date.parse(user.created) > Date.now() - 1000 * 60 * 60 * 24 * 7
		).length;

	const getUnverifiedUsersCount = () =>
		data.data.filter((user: { verified: boolean }) => !user.verified).length;

	const calculateChange = (current: number, total: number) =>
		total > 0 ? parseFloat(((current / total) * 100).toFixed(1)) : 0;

	let newUsers = getNewUsersCount();
	let unverifiedUsers = getUnverifiedUsersCount();

	// Stats data
	interface StatsItem {
		title: string;
		value: number;
		change: number;
		icon: any;
	}

	let stats: StatsItem[] = [
		{
			title: m.App_Admin_Users_TotalUsers(),
			value: totalUsers,
			change: calculateChange(newUsers, totalUsers),
			icon: Users
		},
		{
			title: m.App_Admin_Users_NewUsers(),
			value: newUsers,
			change: calculateChange(newUsers, totalUsers),
			icon: UserPlus
		},
		{
			title: m.App_Admin_Users_UnverifiedUsers(),
			value: unverifiedUsers,
			change: calculateChange(unverifiedUsers, totalUsers),
			icon: UserMinus
		}
	];
</script>

<div class="grid gap-4 md:grid-cols-3">
	{#each stats as stat}
		<Card>
			<CardContent class="p-6">
				<div class="flex items-center justify-between">
					<div class="space-y-1">
						<p class="text-sm font-medium text-muted-foreground">
							{stat.title}
						</p>
						<h3 class="text-2xl font-bold">{stat.value}</h3>
					</div>
					{#if stat.icon}
						<stat.icon class="h-6 w-6 text-muted-foreground" />
					{/if}
				</div>
				<div class="flex items-center gap-1 text-sm">
					{#if stat.change > 0}
						<ArrowUpIcon class="h-4 w-4 text-emerald-500" />
						<span class="text-emerald-500">+{stat.change}%</span>
					{:else}
						<ArrowDownIcon class="h-4 w-4 text-red-500" />
						<span class="text-red-500">{stat.change}%</span>
					{/if}
					<span class="text-muted-foreground">{m.App_Admin_Users_LastMonth()}</span>
				</div>
			</CardContent>
		</Card>
	{/each}
</div>
