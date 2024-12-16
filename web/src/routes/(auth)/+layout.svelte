<script lang="ts">
	import { LandingLayout } from '$lib/components/layouts';
	import Logo from '$lib/components/layouts/LandingLayout/components/Logo.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<LandingLayout>
	<div class="flex flex-col gap-8 items-center justify-center h-screen">
		<Logo />
		{@render children?.()}
	</div>
</LandingLayout>
