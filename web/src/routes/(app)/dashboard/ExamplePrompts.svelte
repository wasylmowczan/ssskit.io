<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { Card, CardContent } from '$lib/components/ui/card';

	// Define props type
	type Prompt = {
		icon: ComponentType;
		text: string;
		color: string;
	};

	// Component props using $props rune
	let { prompts }: { prompts: Prompt[] } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	{#each prompts as prompt}
		<Card class="cursor-pointer hover:bg-accent/50 transition-colors">
			<CardContent class="p-4 space-y-2">
				<div class="flex items-center gap-2 text-muted-foreground text-center justify-center">
					<svelte:component this={prompt.icon} class={prompt.color} size={14} />
					<p class="font-medium">{prompt.text}</p>
				</div>
			</CardContent>
		</Card>
	{/each}
</div>
