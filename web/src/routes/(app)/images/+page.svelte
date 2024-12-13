<script lang="ts">
	import { TextGenerateEffect } from '$lib/components/aceternityui/TextGenerateEffect';
	import { CardBody, CardContainer, CardItem } from '$lib/components/aceternityui/ThreeDCardEffect';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import ToggleConfetti from '$lib/components/modules/Confetti/ToggleConfetti.svelte';
	import { Confetti } from 'svelte-confetti';
	import { Download } from 'lucide-svelte';
	import { Eye } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import { config } from '$lib/config-client.js';
	import { writable } from 'svelte/store';
	import { Jumper } from 'svelte-loading-spinners';
	import { onMount } from 'svelte';

	const words = `Generate images with your prompt`;
	const cards = [
		{
			image:
				'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto.format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			prompt: '"Forest with a river"'
		}
	];

	export let data;

	let lastGeneratedImages: string | any[] = [];

	async function fetchImages() {
		const images = await data.images;
		lastGeneratedImages = images.slice(0, 3).map((image) => ({
			url: `${config.pbUrl}/api/files/images/${image.id}/${image.image}?thumb=100x300f`,
			prompt: image.prompt
		}));
	}

	const loading = writable(false);
	let userInput = '';
	let isMouseEntered = false;

	function handleSubmit() {
		loading.set(true);
	}

	function handleReset() {
		loading.set(false);
		userInput = '';
		fetchImages();
	}

	onMount(() => {
		fetchImages();
	});
</script>

<div class="grid grid-cols-3 gap-4">
	<div class="col-span-3 text-center">
		<TextGenerateEffect {words} />

		<div class="col-span-3 flex flex-wrap justify-center md:flex-nowrap md:flex-row">
			{#each cards as card}
				<CardContainer bind:isMouseEntered className="inter-var">
					<CardBody
						className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
					>
						<CardItem
							{isMouseEntered}
							translateZ="50"
							className="text-xl font-bold text-neutral-600 dark:text-white text-center justify-center"
						>
							Try this prompt to get started
						</CardItem>
						<CardItem
							{isMouseEntered}
							translateZ="60"
							className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
						>
							Forest with many trees and green grass
						</CardItem>
						<CardItem {isMouseEntered} translateZ="100" className="w-full mt-4">
							<img
								src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								height="1000"
								width="1000"
								class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
								alt="thumbnail"
							/>
						</CardItem>
						<div class="mt-2 flex items-center justify-between">
							<CardItem
								{isMouseEntered}
								translateZ={20}
								className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
							>
								Try now →
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			{/each}
		</div>

		<div class="col-span-3 flex flex-col items-center">
			<form
				class="flex flex-col md:flex-row gap-4 w-full md:w-1/2"
				method="POST"
				action="?/new"
				use:enhance
				on:submit|preventDefault={handleSubmit}
				on:reset|preventDefault={() => {
					handleReset();
					window.location.reload();
				}}
			>
				<Input
					bind:value={userInput}
					name="prompt"
					type="text"
					placeholder="e.g. A cat in a hat"
					class="flex-1 shadow-lg"
				/>
				<ToggleConfetti>
					<Button size="lg" class="text-lg shadow-lg" slot="label" type="submit"
						>Generate <span class="ml-4">→</span></Button
					>
					<Confetti
						y={[-0.8, 0.8]}
						x={[-0.8, 0.8]}
						colorRange={[20, 80]}
						amount={100}
						fallDistance="0px"
						duration={2000}
						size={6}
					/>
				</ToggleConfetti>
			</form>

			{#if $loading}
				<div class="flex justify-center items-center pt-20">
					<Jumper size="60" color="#080808" unit="px" duration="1s" />
				</div>
			{:else if lastGeneratedImages.length > 0}
				<h2 class="text-2xl font-bold mb-4 pt-20">Last generated Images:</h2>
				<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 pb-4">
					{#each lastGeneratedImages as { url, prompt }}
						<div class="mt-4">
							<p class="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300 truncate">
								"{prompt}"
							</p>
							<img
								src={url}
								class="h-96 w-full rounded-xl object-cover shadow-xl"
								alt="Last Generated Image: {prompt}"
							/>
							<div class="flex flex-row justify-center items-center gap-12 pt-2">
								<a href={url} download target="_blank"><Eye class="text-neutral-500" /></a>
								<a
									href={url.replace('?thumb=100x300f', '?download=1')}
									download={prompt + '.png'}
									target="_blank"
									aria-label="Download image"
								>
									<Download class="text-neutral-500 hover:text-black" />
								</a>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>
