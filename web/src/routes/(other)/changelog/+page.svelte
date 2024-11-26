<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import FlameIcon from 'lucide-svelte/icons/flame';
	import WrenchIcon from 'lucide-svelte/icons/wrench';
	import BugIcon from 'lucide-svelte/icons/bug';
	import FileTextIcon from 'lucide-svelte/icons/file-text';
	import HammerIcon from 'lucide-svelte/icons/hammer';
	import { Seo } from '$lib/components/modules';

	type LogType = 'New Feature' | 'Maintenance' | 'Bugs' | 'Start' | 'Improvement';

	interface Log {
		type: LogType;
		items: string[];
	}

	interface ChangelogEntry {
		date: string;
		logs: Log[];
	}

	const changelog: ChangelogEntry[] = [
		{
			date: '2024-11-26',
			logs: [
				{
					type: 'New Feature',
					items: [
						'Initial release of the starter kit with PocketBase backend, landing page, user authentication.'
					]
				}
			]
		}
	];

	function getTimeAgo(dateString: string): string {
		const date = new Date(dateString);
		const now = new Date();
		const diffTime = Math.max(0, now.getTime() - date.getTime());
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		const diffMonths = Math.floor(diffDays / 30);
		const diffYears = Math.floor(diffDays / 365);

		if (diffYears > 0) return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
		if (diffMonths > 0) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
		if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
		return 'Today';
	}

	const logTypeIcons: Record<LogType, typeof FlameIcon> = {
		'New Feature': FlameIcon,
		Maintenance: WrenchIcon,
		Bugs: BugIcon,
		Start: FileTextIcon,
		Improvement: HammerIcon
	};

	function getLogTypeIcon(type: LogType) {
		return logTypeIcons[type] || FileTextIcon;
	}
</script>

<Seo title="Changelog" description="Imagine Changelog" />

<section class="mb-12 p-6">
	<div class="container relative mx-auto overflow-hidden py-8 h-full max-w-3xl">
		<h1 class="mb-8 text-3xl font-bold text-center">Changelog</h1>
		{#each changelog as entry}
			<Card class="mb-8 border border-gray-700/70 bg-background">
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<Badge variant="outline">
							{new Date(entry.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</Badge>
						<span class="text-sm text-muted-foreground">
							{getTimeAgo(entry.date)}
						</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					{#each entry.logs as log}
						<div class="mb-4">
							<h3 class="mb-2 flex items-center gap-2 text-lg font-semibold">
								<svelte:component this={getLogTypeIcon(log.type)} class="h-5 w-5" />
								{log.type}
							</h3>
							<ul class="list-inside list-disc pl-4">
								{#each log.items as item}
									<li class="text-sm text-muted-foreground">{item}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</CardContent>
			</Card>
		{/each}
	</div>
</section>
