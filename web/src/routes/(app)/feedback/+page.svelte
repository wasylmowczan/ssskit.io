<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { Textarea } from '$lib/components/ui/textarea';
	import * as Form from '$lib/components/ui/form/index.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { feedbackSchema } from '$lib/schemas.js';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(feedbackSchema),
		onResult: async ({ result }) => {
			if (result.type === 'success') {
				toast.success(m.App_Feedback_Toast_Success());
			} else {
				toast.error(m.App_Feedback_Toast_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="w-full h-full pt-24 bg-background text-foreground flex items-center justify-center p-4">
	<Card class="w-full max-w-2xl">
		<CardHeader>
			<CardTitle>{m.App_Feedback_Title()}</CardTitle>
			<CardDescription>{m.App_Feedback_Subtitle()}</CardDescription>
		</CardHeader>
		<CardContent>
			<form action="?/submit" method="POST" class="space-y-4" use:enhance>
				<div class="space-y-3">
					<div class="flex flex-col">
						<label for="name" class="text-sm font-medium mb-1.5">{m.App_Feedback_Name()}</label>
						<p class="text-muted-foreground">{data.user?.name || data.user?.username}</p>
					</div>
					<div class="flex flex-col">
						<label for="email" class="text-sm font-medium mb-1.5">{m.App_Feedback_Email()}</label>
						<p class="text-muted-foreground">{data.user?.email}</p>
					</div>
				</div>
				<!-- Feedback Section -->
				<Form.Field {form} name="feedback">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>{m.App_Feedback_Feedback()}</Form.Label>
							<Textarea
								{...props}
								bind:value={$formData.feedback}
								placeholder={m.App_Feedback_Placeholder()}
								required
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Button>{m.App_Feedback_Submit()}</Form.Button>
			</form>
		</CardContent>
	</Card>
</div>
