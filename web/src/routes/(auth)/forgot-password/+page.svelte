<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { toast } from 'svelte-sonner';
	import { defaultValues, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { ForgotPasswordSchema } from '$lib/schemas.js';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';

	let loading = $state(false);

	const form = superForm(defaultValues(zod(ForgotPasswordSchema)), {
		validators: zod(ForgotPasswordSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'success') {
				toast.success(m.ForgotPassword_Toast_Success());
			} else {
				toast.error(m.ForgotPassword_Toast_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Seo
	title={`Forgot Password - ${config.appName}`}
	description={`Forgot Password for ${config.appName}`}
	keywords="forgot password, forgot password for ai image generator"
/>

<Card class="mx-auto max-w-sm w-full">
	<CardHeader>
		<CardTitle class="text-2xl">{m.ForgotPassword_Title()}</CardTitle>
	</CardHeader>
	<CardContent>
		<form action="?/forgotPassword" method="POST" use:enhance>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<FormField {form} name="email">
						<FormControl >
							{#snippet children({ props })}
														<FormLabel>{m.ForgotPassword_Email()}</FormLabel>
								<Input {...props} bind:value={$formData.email} type="email" />
																				{/snippet}
												</FormControl>
						<FormFieldErrors />
					</FormField>
				</div>
				<Button disabled={loading} type="submit" class="w-full"
					>{m.ForgotPassword_SendEmail()}</Button
				>
			</div>
			<div class="mt-4 text-sm text-muted-foreground text-center">
				{m.ForgotPassword_GoBackTo()}
			</div>
			<div class="text-center">
				<a href="/login" class="underline">{m.Login_Title()}</a>
			</div>
		</form>
	</CardContent>
</Card>
