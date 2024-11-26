<script lang="ts">
	import { LandingLayout } from '$lib/components/layouts';
	import Logo from '$lib/components/layouts/LandingLayout/components/Logo.svelte';
</script>

<LandingLayout>
	<div class="flex flex-col gap-8 items-center justify-center h-screen">
		<Logo />
		<slot />
	</div>
</LandingLayout>
