<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	import ExamplePrompts from './ExamplePrompts.svelte';
	import type { PageData } from './$types';
	import { zod } from 'sveltekit-superforms/adapters';
	import { promptSchema } from '$lib/schemas.js';
	import { superForm } from 'sveltekit-superforms';
	import * as m from '$lib/paraglide/messages.js';

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
		}
	});

	// Example prompts data
	const prompts = [
		{ text: 'Cute Spiderman on a bike' },
		{ text: 'Cute ninja karate' },
		{ text: 'Symmetrical Mandala art, diamonds design' },
		{ text: 'Dinosaur riding a bike' }
	];

	const { form: formData, enhance } = form;
</script>

<main class="w-full bg-background text-foreground p-4 md:p-8">
	<div class="max-w-4xl mx-auto space-y-8">
		<!-- Header -->
		<div class="text-center space-y-4">
			<h1 class="text-3xl md:text-4xl font-bold">{m.App_Dashboard_Title()}</h1>
			<p class="text-muted-foreground">
				{m.App_Dashboard_Example_Title()}
				<Button variant="link" href="/gallery" class="w-full"
					>{m.App_Dashboard_Example_Link()}</Button
				>
			</p>
		</div>

		<!-- Example Prompts Section -->
		<div>
			<ExamplePrompts {prompts} />
		</div>

		<!-- Generator Form -->
		<Card>
			<form class="space-y-6" method="POST" action="?/new" use:enhance>
				<CardContent class="p-6">
					<FormField {form} name="prompt">
						<FormControl>
							{#snippet children({ props })}
								<FormLabel>{m.App_Dashboard_Input_Label()}</FormLabel>
								<Input
									type="text"
									autofocus
									{...props}
									bind:value={$formData.prompt}
									placeholder={m.App_Dashboard_Input_Placeholder()}
								/>
							{/snippet}
						</FormControl>
						<FormFieldErrors />
					</FormField>
					<Button type="submit" class="w-full mt-2" disabled={loading}>
						{#if loading}
							<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						{m.App_Dashboard_Generate()}
					</Button>
				</CardContent>
			</form>
		</Card>
	</div>
</main>
