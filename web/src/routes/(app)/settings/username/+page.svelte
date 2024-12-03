<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { FormControl, FormField } from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { LoaderCircle } from 'lucide-svelte';
	import { zod } from 'sveltekit-superforms/adapters';
	import { UpdateUsernameSchema } from '$lib/schemas.js';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import FormLabel from '$lib/components/ui/form/form-label.svelte';
	import FormFieldErrors from '$lib/components/ui/form/form-field-errors.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import type { PageData } from './$types';
	import * as m from '$lib/paraglide/messages.js';

	export let data: PageData;
	let loading = false;

	const form = superForm(data.form, {
		validators: zod(UpdateUsernameSchema),
		resetForm: false,
		onSubmit: () => {
			loading = true;
		},
		onResult: async ({ result }) => {
			loading = false;
			if (result.type === 'success') {
				toast.success(m.App_Toast_Username_Success());
			} else {
				toast.error(m.App_Toast_Username_Failed());
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<Card>
	<form action="?/updateUsername" method="POST" use:enhance>
		<CardHeader>
			<CardTitle>{m.App_Settings_ChangeUsername()}</CardTitle>
		</CardHeader>
		<CardContent>
			<FormField {form} name="username">
				<FormControl let:attrs>
					<FormLabel>{m.App_Settings_Username()}</FormLabel>
					<Input autofocus {...attrs} bind:value={$formData.username} />
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
