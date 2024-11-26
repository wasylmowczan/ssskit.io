<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import heroImage from '$lib/assets/hero.svg';
	import { SectionContainer } from '..';
</script>

<SectionContainer
	sectionClass="min-h-screen flex items-start justify-center pt-10 md:pt-60"
	id="hero"
	contentClass="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto"
>
	<div class="flex flex-col items-center text-center gap-8 lg:items-start lg:text-start">
		<h1 class="text-4xl font-extrabold tracking-tight md:text-7xl">
			Imagine AI<br />
			<span class="relative inline-block">
				<span class="text-white relative z-10 whitespace-nowrap rounded-sm">Art Generator App</span>
				<span
					class="absolute inset-y-0 -left-3 -right-3 bg-primary transform -skew-y-1 rounded-sm"
					style="z-index: 0;"
				></span>
			</span>
		</h1>
		<p class="text-lg text-muted-foreground md:text-xl">
			Create AI Art and turn your imaginations into reality with Imagine's AI Art Generator and
			produce stunning visuals to cover up your artistic thoughts.
		</p>
		<div class="flex gap-4 justify-center lg:justify-start">
			<Button href="#pricing" size="lg">Create ✨</Button>
			<Button href="#features" variant="outline" size="lg">Learn More</Button>
		</div>
	</div>
	<div class="flex justify-center items-center w-full">
		<img src={heroImage} alt="App mockup" class="h-auto rounded-lg p-8" />
	</div>
	<div class="absolute bottom-0 left-0 right-0 flex justify-center items-end mb-8">
		<p class="text-4xl bounce">👇</p>
	</div>
</SectionContainer>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.bounce {
		animation: bounce 2s infinite;
	}
</style>
