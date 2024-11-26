<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { LandingLayout } from '$lib/components/layouts';
</script>

<LandingLayout>
	<div class="w-full">
		<main class="max-w-7xl mx-auto">
			<div class=" mx-auto px-4 py-8">
				<slot />
				<div class="mb-6 pt-10">
					<Button variant="secondary" href="/" class="flex items-center max-w-3xl mx-auto">
						<ArrowLeft class="mr-2 h-4 w-4" />
						Back to Home
					</Button>
				</div>
			</div>
		</main>
	</div>
</LandingLayout>
