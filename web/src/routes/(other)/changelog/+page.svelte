<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';

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
			date: '2024-12-08',
			logs: [
				{
					type: 'New Feature',
					items: [
						'Added Coming Soon page to the app.',
						'Added sitemap.xml to the app to improve SEO.'
					]
				}
			]
		},
		{
			date: '2024-12-06',
			logs: [
				{
					type: 'New Feature',
					items: ['Added View Transitions to the app to improve the theme switching experience.']
				}
			]
		},
		{
			date: '2024-12-03',
			logs: [
				{
					type: 'New Feature',
					items: [
						'Added possibility to download app brand assets by right-clicking on the logo.',
						'Added initial version of i18n support for the app.'
					]
				}
			]
		},
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

	const logTypeIcons: Record<LogType, string> = {
		'New Feature': '🔥',
		Maintenance: '🔧',
		Bugs: '🐛',
		Start: '📄',
		Improvement: '🔨'
	};

	function getLogTypeIcon(type: LogType) {
		return logTypeIcons[type] || '📄';
	}
</script>

<Seo
	title={`Changelog - ${config.appName}`}
	description={`Changelog for ${config.appName}`}
	keywords="changelog, changelog for ai image generator"
/>

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
								{getLogTypeIcon(log.type)}
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
