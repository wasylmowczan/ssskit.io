<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { zod } from 'sveltekit-superforms/adapters';
	import { UpdatePasswordSchema } from '$lib/schemas.js';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	let loading = $state(false);

	const form = superForm(data.form, {
		validators: zod(UpdatePasswordSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'success') {
				toast.success(m.App_Toast_Password_Success());
			} else {
				toast.error(m.App_Toast_Password_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Card>
	<form action="?/updatePassword" method="POST" use:enhance>
		<CardHeader>
			<CardTitle>{m.App_Settings_ChangePassword()}</CardTitle>
			<!-- TODO: Add warning message that user would be logged out after changing password -->
		</CardHeader>
		<CardContent>
			<FormField {form} name="oldPassword">
				<FormControl >
					{#snippet children({ props })}
						<FormLabel>{m.App_Settings_OldPassword()}</FormLabel>
						<Input
							autofocus
							{...props}
							bind:value={$formData.oldPassword}
							type="password"
							disabled={loading}
						/>
					{/snippet}
				</FormControl>
				<FormFieldErrors />
			</FormField>
			<FormField {form} name="password">
				<FormControl >
					{#snippet children({ props })}
						<FormLabel>{m.App_Settings_NewPassword()}</FormLabel>
						<Input {...props} bind:value={$formData.password} type="password" disabled={loading} />
					{/snippet}
				</FormControl>
				<FormFieldErrors />
			</FormField>
			<FormField {form} name="passwordConfirm">
				<FormControl>
					{#snippet children({ props })}
						<FormLabel>{m.App_Settings_ConfirmNewPassword()}</FormLabel>
						<Input
							{...props}
							bind:value={$formData.passwordConfirm}
							type="password"
							disabled={loading}
						/>
					{/snippet}
				</FormControl>
				<FormFieldErrors />
			</FormField>
		</CardContent>
		<CardFooter class="border-t px-6 py-4">
			<Button type="submit" disabled={loading}>
				{#if loading}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				{m.App_Settings_Save()}
			</Button>
		</CardFooter>
	</form>
</Card>
