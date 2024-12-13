<script lang="ts">
	import { config } from '$lib/config-client';
	import { Download } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

	export let data;

	let urls: any[] = [];
	let prompts: any[] = [];

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

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	{#each urls as url, index}
		<div class="flex flex-col p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
			<div class="mb-2 flex flex-col items-center justify-center">
				<p class="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300 truncate">
					"{prompts[index]}"
				</p>
			</div>
			<img src={url} alt={prompts[index]} class="w-full aspect-square rounded-lg" />
			<div class="mt-2 flex items-center justify-center">
				<Button
					variant="outline"
					href={url.replace('?thumb=100x300f', '?download=1')}
					download={prompts[index] + '.png'}
					target="_blank"
					aria-label="Download image"
				>
					<Download />
					<span class="ml-2">PNG</span>
				</Button>
			</div>
		</div>
	{/each}
</div>
