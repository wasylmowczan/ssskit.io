<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { toast } from 'svelte-sonner';
	import { defaultValues, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { LoginUserSchema } from '$lib/schemas.js';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { i18n } from '$lib/i18n.js';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';
	import { EyeOff, Eye } from 'lucide-svelte';

	let loading = false;
	let showVerificationPrompt = false;

	const form = superForm(defaultValues(zod(LoginUserSchema)), {
		validators: zod(LoginUserSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'success') {
				toast.success(m.Login_Toast_Success());
			}

			if (result.type === 'failure') {
				if (result.data?.form?.errors?.login[0] === 'Please verify your email address.') {
					showVerificationPrompt = true;
				}
				toast.error(m.Login_Toast_Failed());
			}
		}
	});

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	const { form: formData, enhance } = form;
</script>

<Seo
	title={`Login - ${config.appName}`}
	description={`Login to ${config.appName}`}
	keywords="login, login for ai image generator"
/>

<Card class="mx-auto max-w-sm w-full">
	<CardHeader>
		<CardTitle class="text-2xl">{m.Login_Title()}</CardTitle>
	</CardHeader>
	<CardContent>
		<form action="?/login" lang={languageTag()} method="POST" use:enhance>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<FormField {form} name="login">
						<FormControl let:attrs>
							<FormLabel>{m.Login_Email()}</FormLabel>
							<Input {...attrs} bind:value={$formData.login} />
						</FormControl>
						<FormFieldErrors />
						{#if showVerificationPrompt}
							<div class="text-sm mt-2 text-muted-foreground">
								<a href="/request-verification" class="hover:underline"
									>{m.Login_ResendVerificationEmail()}</a
								>
							</div>
						{/if}
					</FormField>
				</div>
				<div class="grid gap-2">
					<FormField {form} name="password">
						<FormControl let:attrs>
							<FormLabel>{m.Login_Password()}</FormLabel>
							<div class="relative">
								<Input
									{...attrs}
									bind:value={$formData.password}
									type={showPassword ? 'text' : 'password'}
								/>
								<Button
									type="button"
									variant="ghost"
									size="icon"
									class="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
									on:click={togglePasswordVisibility}
								>
									{#if showPassword}
										<EyeOff class="h-4 w-4" />
									{:else}
										<Eye class="h-4 w-4" />
									{/if}
									<span class="sr-only">
										{showPassword ? 'Hide password' : 'Show password'}
									</span>
								</Button>
							</div>
						</FormControl>
						<FormFieldErrors />
						<div class="flex flex-col">
							<a href="/forgot-password" class="text-sm text-muted-foreground underline">
								{m.Login_ForgotPassword()}
							</a>
						</div>
					</FormField>
				</div>
				<Button disabled={loading} type="submit" class="w-full">{m.Login_Login()}</Button>
			</div>
			<div class="mt-4 text-sm text-center">
				{m.Login_DontHaveAccount()}
				<a href={i18n.route('register')} class="underline">{m.Login_Register()}</a>
			</div>
		</form>
	</CardContent>
</Card>
