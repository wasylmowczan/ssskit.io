<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { defaultValues, superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { DeleteUserSchema } from '$lib/schemas.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import * as m from '$lib/paraglide/messages.js';

	let loading = false;

	const form = superForm(defaultValues(zod(DeleteUserSchema)), {
		validators: zod(DeleteUserSchema),
		onSubmit: () => {
			loading = true;
		},
		onResult: ({ result }) => {
			loading = false;
			if (result.type === 'redirect') {
				toast.success(m.App_Toast_DeleteAccount_Success());
			} else {
				toast.error(m.App_Toast_DeleteAccount_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Card>
	<form action="?/deleteAccount" method="POST" use:enhance>
		<CardHeader>
			<CardTitle>{m.App_Settings_DeleteAccount()}</CardTitle>
		</CardHeader>
		<CardContent>
			<FormField {form} name="word">
				<FormControl let:attrs>
					<FormLabel>{m.App_Settings_TypeDelete()}</FormLabel>
					<Input {...attrs} autofocus bind:value={$formData.word} disabled={loading} />
				</FormControl>
				<FormFieldErrors />
			</FormField>
		</CardContent>
		<CardFooter class="border-t px-6 py-4">
			<Button
				type="submit"
				on:click={(e) => !confirm('Are you sure?') && e.preventDefault()}
				disabled={loading || $formData.word !== 'DELETE'}
			>
				{#if loading}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				{m.App_Settings_Delete()}
			</Button>
		</CardFooter>
	</form>
</Card>
