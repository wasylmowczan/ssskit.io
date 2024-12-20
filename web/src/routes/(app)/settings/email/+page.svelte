<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { UpdateEmailSchema } from '$lib/schemas.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	let loading = $state(false);

	const form = superForm(data.form, {
		validators: zod(UpdateEmailSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'success') {
				toast.success('Please check your email to verify your new email address');
			} else {
				toast.error(m.App_Toast_Email_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Card>
	<form action="?/updateEmail" method="POST" use:enhance>
		<CardHeader>
			<CardTitle>{m.App_Settings_ChangeEmail()}</CardTitle>
		</CardHeader>
		<CardContent>
			<FormField {form} name="email">
				<FormControl>
					{#snippet children({ props })}
						<FormLabel>{m.App_Settings_Email()}</FormLabel>
						<Input
							{...props}
							autofocus
							bind:value={$formData.email}
							type="email"
							disabled={loading}
						/>
					{/snippet}
				</FormControl>
				<FormFieldErrors errorClasses={m.App_PB_Email_Error()} />
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
