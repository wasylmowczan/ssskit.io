<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import {
		BadgePlus,
		Bot,
		Headphones,
		Infinity,
		TrendingUp,
		Target,
		Flag,
		Signature
	} from 'lucide-svelte';
	import { SectionContainer } from '..';
	import Switch from '$lib/components/ui/switch/switch.svelte';

	let isAnnual = false;

	const title = 'Pricing Plans';
	const subtitle =
		'Choose the perfect plan for your needs. Start with Free and upgrade to Pro as you grow.';

	$: pricingTiers = [
		{
			name: 'Free',
			description: 'Free Forever',
			monthlyPrice: 0,
			billingPeriod: 'forever',
			features: [
				{ text: 'Create up to 5 Images', icon: Target },
				{ text: 'Early access to new models & features', icon: BadgePlus },
				{ text: 'Personal use', icon: Signature }
			],
			ctaText: 'Get Started',
			ctaLink: '/login'
		},
		{
			name: 'Pro',
			description: 'Higher limits for demanding artists.',
			monthlyPrice: 79,
			monthlyPriceDiscounted: 39,
			annualPrice: 474,
			annualPriceDiscounted: 234,
			billingPeriod: isAnnual ? 'year' : 'month',
			features: [
				{ text: 'Create up to 50 Images', icon: Target },
				{ text: 'Early access to new models & features', icon: BadgePlus },
				{ text: 'Commercial use', icon: Signature }
			],
			highlighted: true,
			ctaText: 'Get Started',
			ctaLink: '/login'
		},
		{
			name: 'Premium',
			description: 'Best for those looking to sell their creations.',
			monthlyPrice: 99,
			monthlyPriceDiscounted: 49,
			annualPrice: 594,
			annualPriceDiscounted: 294,
			billingPeriod: isAnnual ? 'year' : 'month',
			features: [
				{ text: 'Unlimited Images', icon: Infinity },
				{ text: 'Early access to new models & features', icon: BadgePlus },
				{ text: 'Commercial use', icon: Signature }
			],
			ctaText: 'Get Started',
			ctaLink: '/login'
		}
	];
</script>

<SectionContainer {title} {subtitle} id="pricing">
	<p class="font-bold w-full flex justify-center gap-2 items-center">
		Monthly
		<Switch includeInput bind:checked={isAnnual} />
		Annually
	</p>
	<div class="mt-12 space-y-4 sm:space-y-0 sm:grid md:grid-cols-3 sm:gap-6 lg:max-w-7xl lg:mx-auto">
		{#each pricingTiers as tier}
			<div
				class="flex flex-col border border-border rounded-lg shadow-sm divide-y divide-border {tier.highlighted
					? 'border-primary border-2'
					: ''}"
			>
				<div class="p-6">
					<div class="flex gap-2">
						<h3 class="text-2xl font-semibold leading-6">{tier.name}</h3>
						{#if tier.highlighted}
							<Badge class="ml-2">Recommended</Badge>
						{/if}
					</div>
					<p class="mt-4 text-muted-foreground">{tier.description}</p>
					<p class="mt-8">
						{#if tier.name === 'Free'}
							<span class="text-4xl font-extrabold">${tier.monthlyPrice}</span>
						{:else}
							<span class="text-4xl font-extrabold"
								>${isAnnual ? tier.annualPriceDiscounted : tier.monthlyPriceDiscounted}</span
							>
							<span class="text-base font-medium line-through ml-2">
								${isAnnual ? tier.annualPrice : tier.monthlyPrice}
							</span>
						{/if}
						<span class="text-base font-medium text-muted-foreground">/{tier.billingPeriod}</span>
					</p>
					<Button href={tier.ctaLink} size="lg" class="mt-8 w-full">
						{tier.ctaText}
					</Button>
				</div>
				<div class="flex-1 pt-6 pb-8 px-6">
					<h4 class="text-sm font-medium">What's included:</h4>
					<ul class="mt-6 space-y-4">
						{#each tier.features as feature}
							<li class="flex items-start space-x-3">
								<svelte:component
									this={feature.icon}
									class="flex-shrink-0 h-5 w-5 text-primary mt-0.5"
								/>
								<span class="text-base">{feature.text}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</SectionContainer>
