<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import { HelpCircle, LoaderCircle } from 'lucide-svelte';
	import ExamplePrompts from './ExamplePrompts.svelte';
	import type { PageData } from './$types';
	import { zod } from 'sveltekit-superforms/adapters';
	import { promptSchema } from '$lib/schemas.js';
	import { superForm } from 'sveltekit-superforms';
	import * as m from '$lib/paraglide/messages.js';
	import { Confetti } from 'svelte-confetti';
	import { Tour } from '$lib/components/modules';
	import { fade } from 'svelte/transition';

	let { data }: Props = $props();

	interface Props {
		data: PageData;
	}

	// Tour steps
	const steps = $state([
		{
			target: '#example-prompts',
			title: m.App_Dashboard_Tour_Step1(),
			description: m.App_Dashboard_Tour_Description1()
		},
		{
			target: '#prompt',
			title: m.App_Dashboard_Tour_Step2(),
			description: m.App_Dashboard_Tour_Description2()
		},
		{
			target: '#generate',
			title: m.App_Dashboard_Tour_Step3(),
			description: m.App_Dashboard_Tour_Description3()
		}
	]);

	let showTour = $state(false);

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
		{ text: m.App_Dashboard_EP1() },
		{ text: m.App_Dashboard_EP2() },
		{ text: m.App_Dashboard_EP3() },
		{ text: m.App_Dashboard_EP4() }
	];

	const { form: formData, enhance } = form;
</script>

<main class="w-full bg-background text-foreground p-4 md:p-8">
	<!-- Tour control button -->
	<Button
		size="icon"
		onclick={() => (showTour = true)}
		variant="secondary"
		class="fixed bottom-4 right-4 z-40 hover:scale-105 transition-transform"
	>
		<HelpCircle class="h-5 w-5" />
	</Button>

	{#if showTour}
		<div transition:fade={{ duration: 200 }}>
			<Tour {steps} onComplete={() => (showTour = false)} onSkip={() => (showTour = false)} />
		</div>
	{/if}

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
		<div id="example-prompts">
			<ExamplePrompts {prompts} />
		</div>

		<!-- Generator Form -->
		<Card>
			<form class="space-y-6" method="POST" action="?/new" use:enhance>
				<CardContent class="p-6">
					<FormField {form} name="prompt" id="prompt">
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
					<Button type="submit" id="generate" class="w-full mt-2" disabled={loading}>
						{#if loading}
							<Confetti />
							<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						{m.App_Dashboard_Generate()}
					</Button>
				</CardContent>
			</form>
		</Card>
	</div>
</main>
