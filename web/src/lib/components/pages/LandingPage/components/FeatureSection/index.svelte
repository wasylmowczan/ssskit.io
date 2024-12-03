<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { SectionContainer } from '..';
	import * as m from '$lib/paraglide/messages.js';

	const title = m.LP_Features_Title();
	const subtitle = m.LP_Features_Subtitle();
	const description = m.LP_Features_Description();

	let features = [
		{
			video: 'video/text-to-image.webm',
			title: m.LP_Features_TextToImage(),
			description: m.LP_Features_TextToImage_Description()
		},
		{
			video: 'video/realtime-text.webm',
			title: m.LP_Features_RealTimeGeneration(),
			description: m.LP_Features_RealTimeGeneration_Description()
		},
		{
			video: 'video/text-to-video.webm',
			title: m.LP_Features_AIVideoGenerator(),
			description: m.LP_Features_AIVideoGenerator_Description()
		},
		{
			video: 'video/canvas.webm',
			title: m.LP_Features_Ideate(),
			description: m.LP_Features_Ideate_Description()
		},
		{
			video: 'video/enhance-video.webm',
			title: m.LP_Features_CreativeUpscaler(),
			description: m.LP_Features_CreativeUpscaler_Description()
		},
		{
			video: 'video/character.webm',
			title: m.LP_Features_CharacterCreator(),
			description: m.LP_Features_CharacterCreator_Description()
		}
	];

</script>

<SectionContainer {title}  id="features">
	<div class="mx-auto max-w-6xl px-4 py-8">
		<!-- Header Section -->
		<div class="mb-8">
			<div class="text-sm font-semibold text-blue-600">Our AI Tools Suite</div>
			<h1 class="mt-2 text-3xl font-bold tracking-tight lg:text-4xl">
				{subtitle}
			</h1>
			<p class="mt-4 text-lg text-muted-foreground">
				{description}
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
