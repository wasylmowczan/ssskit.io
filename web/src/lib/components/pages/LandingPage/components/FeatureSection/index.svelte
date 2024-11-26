<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { SectionContainer } from '..';

	let features = [
		{
			video: 'video/text-to-image.webm',
			title: 'Text to Image',
			description:
				'Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks.'
		},
		{
			video: 'video/realtime-text.webm',
			title: 'Real Time Generation',
			description:
				'Witness your ideas blended with Imagine AI Image Generator as Real-Time Generation lets you sketch and see your creation come to life before your eyes. Refine as you go for a seamless experience.'
		},
		{
			video: 'video/text-to-video.webm',
			title: 'AI Video Generator',
			description:
				'Ditch the filming crew as Imagine AI Art Creates HD Videos Instantly. Convert scripts or ideas into stunning 4K videos with just a few clicks. Forget time consuming filming, editing, and acting as the AI does it all in seconds.'
		},
		{
			video: 'video/canvas.webm',
			title: 'Ideate',
			description:
				'Imagine AI Image Generator brings you Ideate that empowers you to paint with an intelligent brush. Simply describe elements, watch them appear instantly, and refine your artwork for an intuitive creative experience.'
		},
		{
			video: 'video/enhance-video.webm',
			title: 'Creative Upscaler',
			description:
				'From Blurry to Beautiful: Imagine AI Image Generator Creative Upscaler. The image enhancement tool instantly transforms them into crisp, high-definition masterpieces. Imagine AI Art Generator makes it fast and easy.'
		},
		{
			video: 'video/character.webm',
			title: 'Character Creator',
			description:
				'Maintain uniformity in your storytelling with Character Consistency, which ensures all generated images consistently reflect your characters. Experience seamless and coherent visual narratives effortlessly.'
		}
	];
</script>

<SectionContainer title="Features" id="features">
	<div class="mx-auto max-w-6xl px-4 py-8">
		<!-- Header Section -->
		<div class="mb-8">
			<div class="text-sm font-semibold text-blue-600">Our AI Tools Suite</div>
			<h1 class="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
				A complete AI tools suite with all the features you need.
			</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				Imagine is packed with amazing features that enable you to better understand your website
				traffic.
			</p>
		</div>
		<!-- Features Section -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<Card>
					<div class="p-6">
						<div class="aspect-square w-full overflow-hidden rounded-lg">
							<video
								src={feature.video}
								class="size-full object-cover"
								muted
								loop
								autoplay
								playsinline
							></video>
						</div>
						<div class="mt-6 space-y-4">
							<h2 class="text-xl font-semibold">{feature.title}</h2>
							<p class="text-sm text-muted-foreground">
								{feature.description}
							</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	</div>
</SectionContainer>
