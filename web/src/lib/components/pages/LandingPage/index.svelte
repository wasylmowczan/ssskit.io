<script lang="ts">
	import { config } from '$lib/config-client';
	import {
		HeroSection,
		PricingSection,
		FeatureSection,
		FaqSection,
		StickyCountdownSection,
		FeedbackSection,
		FeaturedInSection,
		DemoSection
	} from './components';
</script>

<HeroSection />
<DemoSection />
<FeaturedInSection />
<FeatureSection />
{#if config.showStickyCountdown}
	<StickyCountdownSection />
{/if}
<FeedbackSection />
<PricingSection />
<FaqSection />
