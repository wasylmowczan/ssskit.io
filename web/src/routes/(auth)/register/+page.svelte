<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { toast } from 'svelte-sonner';
	import { defaultValues, superForm } from 'sveltekit-superforms';
	import { RegisterUserSchema } from '$lib/schemas.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';

	let loading = $state(false);

	const form = superForm(defaultValues(zod(RegisterUserSchema)), {
		validators: zod(RegisterUserSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'redirect') {
				toast.success(m.Register_Toast_Success());
			} else {
				toast.error(m.Register_Toast_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Seo
	title={`Register - ${config.appName}`}
	description={`Register to ${config.appName}`}
	keywords="register, register to ai image generator"
/>

<Card class="mx-auto max-w-sm w-full">
	<CardHeader>
		<CardTitle class="text-2xl">{m.Register_Title()}</CardTitle>
	</CardHeader>
	<CardContent>
		<form action="?/register" method="POST" use:enhance>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<FormField {form} name="email">
						<FormControl >
							{#snippet children({ props })}
														<FormLabel>{m.Register_Email()}</FormLabel>
								<Input {...props} bind:value={$formData.email} type="email" />
																				{/snippet}
												</FormControl>
						<FormFieldErrors />
					</FormField>
				</div>
				<div class="grid gap-2">
					<FormField {form} name="password">
						<FormControl >
							{#snippet children({ props })}
														<FormLabel>{m.Register_Password()}</FormLabel>
								<Input {...props} bind:value={$formData.password} type="password" />
																				{/snippet}
												</FormControl>
						<FormFieldErrors />
					</FormField>
				</div>
				<div class="grid gap-2">
					<FormField {form} name="passwordConfirm">
						<FormControl >
							{#snippet children({ props })}
														<FormLabel>{m.Register_ConfirmPassword()}</FormLabel>
								<Input {...props} bind:value={$formData.passwordConfirm} type="password" />
																				{/snippet}
												</FormControl>
						<FormFieldErrors />
					</FormField>
				</div>
				<Button disabled={loading} type="submit" class="w-full">{m.Register_CreateAccount()}</Button
				>
			</div>
			<div class="mt-4 text-sm text-center">
				{m.Register_AlreadyHaveAccount()} <a href="/login" class="underline">{m.Login_Title()}</a>
			</div>
		</form>
	</CardContent>
</Card>
