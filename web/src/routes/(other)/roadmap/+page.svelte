<script lang="ts">
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';
	import { writable } from 'svelte/store';
	import * as m from '$lib/paraglide/messages.js';

	enum Status {
		Pending = 'pending',
		Approved = 'approved',
		InProgress = 'in-progress',
		Done = 'done'
	}

	enum Tag {
		Enhancement = 'enhancement',
		BigFeature = 'big-feature',
		Suggestions = 'suggestions'
	}

	interface RoadmapFeature {
		title: string;
		description: string;
		status: Status;
		tags: Tag[];
	}

	interface StatusColumn {
		title: string;
		status: Status;
		icon: string;
	}

	const statusColumns: StatusColumn[] = [
		{ title: m.LP_Roadmap_Pending(), status: Status.Pending, icon: '👀' },
		{ title: m.LP_Roadmap_Approved(), status: Status.Approved, icon: '👍' },
		{ title: m.LP_Roadmap_InProgress(), status: Status.InProgress, icon: '🛠' },
		{ title: m.LP_Roadmap_Done(), status: Status.Done, icon: '✅' }
	];

	const tagStyles: Record<Tag, { label: string; className: string }> = {
		enhancement: {
			label: m.LP_Roadmap_Enhancement(),
			className: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
		},
		'big-feature': {
			label: m.LP_Roadmap_BigFeature(),
			className: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
		},
		suggestions: {
			label: m.LP_Roadmap_Suggestions(),
			className: 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100'
		}
	};

	const initialFeatures: RoadmapFeature[] = [
		{
			title: 'AI Image Generation',
			description: 'I would like to be able to create images with AI.',
			status: Status.Done,
			tags: [Tag.BigFeature, Tag.Suggestions]
		},
		{
			title: 'i18n support',
			description: 'I would like to be able to have i18n support.',
			status: Status.InProgress,
			tags: [Tag.Enhancement]
		}
	];

	let features = writable<RoadmapFeature[]>(initialFeatures);
</script>

<Seo
	title={`Roadmap - ${config.appName}`}
	description={`Roadmap for ${config.appName}`}
	keywords="roadmap, roadmap for ai image generator"
/>
<section class="mb-8 p-6 w-full">
	<div class="container relative mx-auto overflow-hidden py-8">
		<h1 class="mb-12 text-3xl font-bold text-center">{m.LP_Roadmap_Title()}</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each statusColumns as column}
				<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
					<div class="flex items-center gap-2 mb-4">
						<span class="text-lg">{column.icon}</span>
						<h2 class="font-semibold">{column.title}</h2>
					</div>

					<div class="space-y-4">
						{#each $features.filter((f) => f.status === column.status) as feature}
							<div
								class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
							>
								<div class="flex items-start justify-between">
									<div class="flex items-start gap-2">
										<h3 class="font-medium">{feature.title}</h3>
									</div>
								</div>

								<p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
									{feature.description}
								</p>

								<div class="flex flex-wrap gap-2 mt-3">
									{#each feature.tags as tag}
										<span
											class="px-2 py-1 text-xs font-semibold rounded-full {tagStyles[tag]
												.className}"
										>
											{tagStyles[tag].label}
										</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
