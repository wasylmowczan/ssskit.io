<script lang="ts">
	import UsersStats from './UserStatistics.svelte';
	import UsersTable from './UsersTable.svelte';
	import { Search } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { RotateCw as RefreshIcon } from 'lucide-svelte';

	// Search query for filtering users
	let searchQuery: string = $state('');
	let { data } = $props();

	function refreshData(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
		event.preventDefault();
		event.stopPropagation();
		window.location.reload();
	}
</script>

<div class="flex min-h-screen w-full flex-col bg-background text-foreground">
	<!-- Main content -->
	<main class="flex-1 space-y-4 p-4 sm:p-6 md:p-8">
		<!-- Stats cards -->
		<UsersStats {data} />

		<!-- Users table section -->
		<div class="space-y-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<h2 class="text-2xl font-bold tracking-tight">All Users</h2>
					<button onclick={refreshData}>
						<RefreshIcon class="h-4 w-4 text-muted-foreground" />
					</button>
				</div>
				<div class="relative w-full max-w-sm">
					<Search class="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input bind:value={searchQuery} placeholder="Search users..." class="pl-8" />
				</div>
			</div>
			<UsersTable {data} {searchQuery} />
		</div>
	</main>
</div>
