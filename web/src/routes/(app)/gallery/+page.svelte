<script lang="ts">
	import { config } from '$lib/config-client';
	import { Download } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { ImagePlus } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	let urls: any[] = $state([]);
	let prompts: any[] = $state([]);

	async function fetchImages() {
		let images = await data.images;
		const imageUrls: any[] = images.map((image) => ({
			url: `${config.pbUrl}/api/files/images/${image.id}/${image.image}?thumb=100x300f`,
			prompt: image.prompt
		}));

		urls = imageUrls.map((image) => image.url);
		prompts = imageUrls.map((image) => image.prompt);
	}

	onMount(() => {
		fetchImages();
	});
</script>

{#if urls.length === 0}
	<div class="mb-2 flex flex-col items-center justify-center text-muted-foreground gap-4 pt-20">
		<ImagePlus size={50} />
		<p>No images yet</p>
		<a href="/dashboard">Generate some images in the <span class="font-bold">Dashboard</span></a>
	</div>
{/if}
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
	{#each urls as url, index}
		<div class="flex flex-col p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
			<div class="mb-2 flex flex-col items-center justify-center">
				<HoverCard.Root>
					<HoverCard.Trigger class="max-w-full truncate text-muted-foreground"
						>{prompts[index]}</HoverCard.Trigger
					>
					<HoverCard.Content>"{prompts[index]}"</HoverCard.Content>
				</HoverCard.Root>
			</div>
			<img src={url} alt={prompts[index]} class="w-full aspect-auto rounded-lg shadow-xl" />
			<div class="mt-2 flex items-center justify-center">
				<Button
					variant="outline"
					href={url.replace('?thumb=100x300f', '?download=1')}
					download={prompts[index] + '.png'}
					target="_blank"
					aria-label="Download image"
				>
					<Download color="#64748B" />
					<span class="text-muted-foreground">PNG</span>
				</Button>
			</div>
		</div>
	{/each}
</div>
