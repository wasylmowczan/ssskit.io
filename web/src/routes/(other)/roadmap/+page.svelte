<script lang="ts">
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

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
		id: string;
		title: string;
		description: string;
		votes: number;
		status: Status;
		tags: Tag[];
		date?: string;
	}

	interface StatusColumn {
		title: string;
		status: Status;
		icon: string;
	}

	const statusColumns: StatusColumn[] = [
		{ title: 'Pending', status: Status.Pending, icon: '👀' },
		{ title: 'Approved', status: Status.Approved, icon: '👍' },
		{ title: 'In Progress', status: Status.InProgress, icon: '🛠' },
		{ title: 'Done', status: Status.Done, icon: '✅' }
	];

	const tagStyles: Record<Tag, { label: string; className: string }> = {
		enhancement: {
			label: 'Enhancement',
			className: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
		},
		'big-feature': {
			label: 'Big Feature',
			className: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
		},
		suggestions: {
			label: 'Suggestions',
			className: 'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100'
		}
	};

	const initialFeatures: RoadmapFeature[] = [
		{
			id: 'images',
			title: 'Possibility to create images with AI',
			description: 'I would like to be able to create images with AI.',
			votes: 0,
			status: Status.Pending,
			tags: [Tag.BigFeature]
		}
	];

	let features = writable<RoadmapFeature[]>(initialFeatures);
	let votedFeatures = writable<Set<string>>(new Set());
	let sortByVotes = writable<boolean>(false);
	let isBrowser = writable<boolean>(false);

	onMount(() => {
		isBrowser.set(true);

		if (typeof window !== 'undefined') {
			const savedFeatures = window.localStorage.getItem('roadmapFeatures');
			const savedVotes = window.localStorage.getItem('roadmapVotes');

			if (savedFeatures) {
				features.set(JSON.parse(savedFeatures));
			}

			if (savedVotes) {
				votedFeatures.set(new Set(JSON.parse(savedVotes)));
			}
		}
	});

	$: if ($isBrowser) {
		window.localStorage.setItem('roadmapFeatures', JSON.stringify($features));
		window.localStorage.setItem('roadmapVotes', JSON.stringify(Array.from($votedFeatures)));
	}

	function handleVote(featureId: string) {
		if ($votedFeatures.has(featureId)) return;

		features.update((prev) =>
			prev.map((feature) =>
				feature.id === featureId ? { ...feature, votes: feature.votes + 1 } : feature
			)
		);
		votedFeatures.update((prev) => {
			prev.add(featureId);
			return prev;
		});
	}

	$: sortedFeatures = $sortByVotes ? [...$features].sort((a, b) => b.votes - a.votes) : $features;

	function resetVotes() {
		features.set(initialFeatures);
		votedFeatures.set(new Set());
		if ($isBrowser) {
			window.localStorage.removeItem('roadmapFeatures');
			window.localStorage.removeItem('roadmapVotes');
		}
	}
</script>

<Seo title={`Roadmap - ${config.appName}`} description={`Roadmap for ${config.appName}`} />
<div class="w-full">
	<div class="flex justify-between items-center mb-6">
		<h1 class="text-2xl font-bold">Roadmap</h1>
		<div class="flex gap-4">
			<button
				class="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
				on:click={() => sortByVotes.update((v) => !v)}
			>
				Sort by Votes {$sortByVotes ? '(on)' : '(off)'}
			</button>
			<button
				class="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
				on:click={resetVotes}
			>
				Reset Votes
			</button>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{#each statusColumns as column}
			<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
				<div class="flex items-center gap-2 mb-4">
					<span class="text-lg">{column.icon}</span>
					<h2 class="font-semibold">{column.title}</h2>
					<span
						class="ml-auto bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded"
					>
						{sortedFeatures.filter((f) => f.status === column.status).length}
					</span>
				</div>

				<div class="space-y-4">
					{#each sortedFeatures.filter((f) => f.status === column.status) as feature (feature.id)}
						<div
							class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
						>
							<div class="flex items-start justify-between">
								<div class="flex items-start gap-2">
									<div class="bg-gray-100 dark:bg-gray-700 rounded p-1 text-center min-w-[2rem]">
										{feature.votes}
									</div>
									<h3 class="font-medium">{feature.title}</h3>
								</div>
							</div>

							<p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
								{feature.description}
							</p>

							<div class="flex flex-wrap gap-2 mt-3">
								{#each feature.tags as tag}
									<span
										class="px-2 py-1 text-xs font-semibold rounded-full {tagStyles[tag].className}"
									>
										{tagStyles[tag].label}
									</span>
								{/each}
								{#if feature.date}
									<span
										class="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 ml-auto"
									>
										{feature.date}
									</span>
								{/if}
							</div>

							<button
								on:click={() => handleVote(feature.id)}
								disabled={$votedFeatures.has(feature.id)}
								class="w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4 inline-block mr-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
									/>
								</svg>
								{$votedFeatures.has(feature.id) ? 'Voted' : 'Vote'}
							</button>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
