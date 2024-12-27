<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';
	import * as m from '$lib/paraglide/messages.js';

	const LogType = {
		NewFeature: m.LP_Changelog_NewFeature(),
		Maintenance: m.LP_Changelog_Maintenance(),
		Bugs: m.LP_Changelog_Bugs(),
		Start: m.LP_Changelog_Start(),
		Improvement: m.LP_Changelog_Improvement()
	} as const;

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
			date: '2024-12-27',
			logs: [
				{
					type: LogType.NewFeature,
					items: ['Added Admin Dashboard with Users table.']
				}
			]
		},
		{
			date: '2024-12-24',
			logs: [
				{
					type: LogType.NewFeature,
					items: ['Added integration with PostHog for analytics.']
				}
			]
		},
		{
			date: '2024-12-21',
			logs: [
				{
					type: LogType.NewFeature,
					items: [
						'Added Feedback page to the app.',
						'Added email handling using Resend.',
						'Added email template for feedback.'
					]
				}
			]
		},
		{
			date: '2024-12-16',
			logs: [
				{
					type: LogType.Improvement,
					items: [
						'Migrated to Svelte from v4 to v5.',
						'Migrated Shadcn-UI and with Formsnap to v5.',
						'Updated Dashboard Page.'
					]
				}
			]
		},
		{
			date: '2024-12-14',
			logs: [
				{
					type: LogType.Improvement,
					items: ['Refactored Roadmap page.', 'Added Dashboard page as default page.']
				},
				{
					type: LogType.NewFeature,
					items: ['Added Gallery page.']
				},
				{
					type: LogType.Maintenance,
					items: ['Added rest of translations.']
				}
			]
		},
		{
			date: '2024-12-13',
			logs: [
				{
					type: LogType.NewFeature,
					items: [
						'Added functionality to generate AI images from text prompts.',
						'Refactored user settings pages. '
					]
				}
			]
		},
		{
			date: '2024-12-10',
			logs: [
				{
					type: LogType.NewFeature,
					items: ['Added Contact page to the app.']
				}
			]
		},
		{
			date: '2024-12-08',
			logs: [
				{
					type: LogType.NewFeature,
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
					type: LogType.NewFeature,
					items: ['Added View Transitions to the app to improve the theme switching experience.']
				}
			]
		},
		{
			date: '2024-12-03',
			logs: [
				{
					type: LogType.NewFeature,
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
					type: LogType.NewFeature,
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

		if (diffYears > 0)
			return `${diffYears} year${diffYears > 1 ? 's' : ''} ${m.LP_Changelog_Ago()}`;
		if (diffMonths > 0)
			return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ${m.LP_Changelog_Ago()}`;
		if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ${m.LP_Changelog_Ago()}`;
		return m.LP_Changelog_Today();
	}

	const logTypeIcons: Record<LogType, string> = {
		[LogType.NewFeature]: '🔥',
		[LogType.Maintenance]: '🔧',
		[LogType.Bugs]: '🐛',
		[LogType.Start]: '📄',
		[LogType.Improvement]: '🔨'
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
		<h1 class="mb-8 text-3xl font-bold text-center">{m.LP_Changelog_Title()}</h1>
		{#each changelog as entry}
			<Card class="mb-8 border border-gray-700/70 bg-background">
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<Badge variant="outline">
							{new Date(entry.date).toLocaleDateString('pl-PL', {
								year: 'numeric',
								month: 'numeric',
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
