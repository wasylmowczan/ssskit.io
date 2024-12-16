<script lang="ts">
	// import { Sparkles, Zap, Paw, Heart } from "lucide-svelte";
	import { fade } from "svelte/transition";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Card, CardContent } from "$lib/components/ui/card";
	import { FormControl, FormField } from '$lib/components/ui/form';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
	import ExamplePrompts from "./ExamplePrompts.svelte";
	import type { PageData } from './$types';
	import { zod } from 'sveltekit-superforms/adapters';
	import { promptSchema } from '$lib/schemas.js';
	import { superForm } from 'sveltekit-superforms';

	let { data }: Props = $props();

	interface Props {
		data: PageData;
	}
	
	let loading = $state(false);

	const form = superForm(data.form, {
		validators: zod(promptSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: async ({ result }) => {
			loading = false;
			isGenerated = true;
		}
	});

	// State to track if image was generated
	let isGenerated = $state(false);
	// Input values for the form
	let prompt = $state("");

	// Example prompts data
	const prompts = [
		{ text: "Cute Spiderman on a bike", color: "text-pink-100" },
		{ text: "Cute ninja karate", color: "text-green-500" },
		{ text: "Symmetrical Mandala art, diamonds design", color: "text-yellow-500" },
		{ text: "Dinosaur riding a bike", color: "text-blue-500" },
	];

	const { form: formData, enhance } = form;
</script>

<main class="w-full bg-background text-foreground p-4 md:p-8">
	<div class="max-w-4xl mx-auto space-y-8">
		<!-- Header -->
		<div class="text-center space-y-4">
			<h1 class="text-3xl md:text-4xl font-bold">Generate personalised colouring page</h1>
			<p class="text-muted-foreground">Try one of these prompts to get started</p>
		</div>

		<!-- Example Prompts Section -->
		<div transition:fade>
			<ExamplePrompts {prompts} />
		</div>

		<!-- Generator Form -->
		<Card>
			<form class="space-y-6" method="POST" action="?/new" use:enhance>
				<CardContent class="p-6">
					<FormField {form} name="prompt">
						<FormControl>
							{#snippet children({ props })}
								<FormLabel>Prompt</FormLabel>
								<Input type="text" autofocus {...props} bind:value={$formData.prompt} placeholder="e.g. Spiderman on a bike" />
							{/snippet}
						</FormControl>
						<FormFieldErrors />
					</FormField>
					<Button type="submit" class="w-full mt-2" disabled={loading}>
						{#if loading}
							<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						Generate Image
					</Button>
			</CardContent>
		</form>
		</Card>
	</div>
</main>
