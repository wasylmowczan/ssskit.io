<script lang="ts">
	import { goto } from '$app/navigation';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime';
	// TODO [FIX] i18n routing doesn't work
</script>

<div class="h-screen flex items-center justify-center flex-col">
	<h1 class="text-6xl font-bold">404</h1>
	<p class="text-lg mt-4">Oops, it looks like the page you're looking for doesn't exist.</p>
	<button
		class="mt-6 px-4 py-2 bg-black text-white rounded"
		onclick={() => goto(i18n.route(`/${languageTag()}`))}
	>
		Go to Homepage
	</button>
</div>
