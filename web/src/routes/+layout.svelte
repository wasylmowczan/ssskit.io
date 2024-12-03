<script lang="ts">
	import '../app.postcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />
	<slot />
</ParaglideJS>
