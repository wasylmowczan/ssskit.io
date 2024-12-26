<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { ChevronLeft, ChevronRight, X } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	// Define props with types before using runes
	type Step = {
		target: string;
		title: string;
		description: string;
	};

	// Component props
	let {
		steps,
		onComplete,
		onSkip
	}: {
		steps: Step[];
		onComplete: () => void;
		onSkip: () => void;
	} = $props();

	// Current step index
	let currentStep = $state(0);

	// Get current target element position
	const getTargetPosition = () => {
		const target = document.querySelector(steps[currentStep].target);
		if (!target) return null;
		const rect = target.getBoundingClientRect();
		return {
			top: rect.top + window.scrollY,
			left: rect.left + window.scrollX,
			width: rect.width,
			height: rect.height
		};
	};

	// Handle next step
	const handleNext = () => {
		if (currentStep < steps.length - 1) {
			currentStep++;
		} else {
			onComplete();
		}
	};

	// Handle previous step
	const handlePrevious = () => {
		if (currentStep > 0) {
			currentStep--;
		}
	};

	// Create a derived state for position
	const position = $derived(getTargetPosition());
</script>

<div class="fixed inset-0 z-50 bg-background/50">
	<!-- Highlight current target element -->
	{#if position}
		<div
			in:fly={{ y: 20, duration: 300 }}
			out:fade
			class="absolute border-2 border-primary rounded-lg"
			style="top: {position.top}px; left: {position.left}px; width: {position.width}px; height: {position.height}px;"
		>
			<div class="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
		</div>
	{/if}

	<!-- Tour guide card -->
	<div in:fly={{ y: -20, duration: 300 }} out:fade>
		<Card class="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-md shadow-lg">
			<CardContent class="p-6">
				<div class="flex items-start justify-between">
					<div class="space-y-1">
						<h3 class="font-semibold">{steps[currentStep].title}</h3>
						<p class="text-sm text-muted-foreground">
							{steps[currentStep].description}
						</p>
					</div>
					<Button
						variant="ghost"
						size="icon"
						onclick={onSkip}
						class="h-6 w-6 hover:bg-destructive/10 hover:text-destructive"
					>
						<X class="h-4 w-4" />
					</Button>
				</div>

				<div class="flex items-center justify-between mt-4">
					<div class="flex items-center gap-2">
						{#each steps as _, i}
							<div
								class={cn('w-2 h-2 rounded-full bg-primary/20', i === currentStep && 'bg-primary')}
							></div>
						{/each}
					</div>
					<div class="flex items-center gap-2">
						{#if currentStep > 0}
							<Button
								variant="outline"
								size="sm"
								onclick={handlePrevious}
								class="hover:bg-primary/5"
							>
								<ChevronLeft class="h-4 w-4 mr-1" />
								Previous
							</Button>
						{/if}
						<Button size="sm" onclick={handleNext} class="hover:bg-primary/90">
							{currentStep === steps.length - 1 ? 'Finish' : 'Next'}
							{#if currentStep < steps.length - 1}
								<ChevronRight class="h-4 w-4 ml-1" />
							{/if}
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</div>
