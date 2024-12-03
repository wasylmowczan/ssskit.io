<script>
	import { SectionContainer } from '..';
	import heroImage from '$lib/assets/hero.svg';
	import heroImageDark from '$lib/assets/hero-dark.svg';
	import { mode } from 'mode-watcher';
	import * as m from '$lib/paraglide/messages.js';

	const title = m.LP_Demo_Title();
	const subtitle = m.LP_Demo_Subtitle();
</script>

<SectionContainer {title} {subtitle} id="demo">
	<div class="w-full max-w-3xl mx-auto">
		<div
			class="overflow-hidden rounded-lg shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.15)] transition-shadow duration-300"
		>
			<div class="aspect-video">
				<video
					controls
					class="w-full h-full object-cover"
					preload="metadata"
					poster={$mode === 'dark' ? heroImageDark : heroImage}
				>
					<!-- Replace image poster -->
					<source src="/video/text-to-image.webm" type="video/webm" />
					<!-- TODO: Replace video -->
				</video>
			</div>
		</div>
	</div>
</SectionContainer>
