<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { toast } from 'svelte-sonner';
	import { defaultValues, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { RequestVerificationSchema } from '$lib/schemas.js';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';

	let loading = $state(false);

	const form = superForm(defaultValues(zod(RequestVerificationSchema)), {
		validators: zod(RequestVerificationSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'success') {
				toast.success(m.RequestVerification_Toast_Success());
			} else {
				toast.error(m.RequestVerification_Toast_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Seo
	title={`Request Verification - ${config.appName}`}
	description={`Request Verification for ${config.appName}`}
	keywords="request verification, request verification to ai image generator"
/>

<Card class="mx-auto max-w-sm w-full">
	<CardHeader>
		<CardTitle class="text-2xl">{m.RequestVerification_Title()}</CardTitle>
	</CardHeader>
	<CardContent>
		<form action="?/verifyEmail" method="POST" use:enhance>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<FormField {form} name="email">
						<FormControl >
							{#snippet children({ props })}
														<FormLabel>Email</FormLabel>
								<Input {...props} bind:value={$formData.email} type="email" />
																				{/snippet}
												</FormControl>
						<FormFieldErrors />
					</FormField>
				</div>
				<Button disabled={loading} type="submit" class="w-full"
					>{m.RequestVerification_SendEmail()}</Button
				>
			</div>
			<div class="mt-4 text-sm text-muted-foreground">{m.RequestVerification_GoBackTo()}</div>
			<div>
				<a href="/login" class="underline">{m.Login_Title()}</a>
			</div>
		</form>
	</CardContent>
</Card>
