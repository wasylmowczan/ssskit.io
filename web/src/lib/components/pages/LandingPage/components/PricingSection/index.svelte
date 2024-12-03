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
	import * as m from '$lib/paraglide/messages.js';
	import { i18n } from '$lib/i18n';
	let isAnnual = false;

	const title = m.LP_Pricing_Title();
	const subtitle = m.LP_Pricing_Subtitle();

	$: pricingTiers = [
		{
			name: 'Free',
			description: m.LP_Pricing_Free_Description(),
			monthlyPrice: 0,
			billingPeriod: m.LP_Pricing_Forever(),
			features: [
				{ text: m.LP_Pricing_Description_1({ value: 5 }), icon: Target },
				{ text: m.LP_Pricing_Description_2(), icon: BadgePlus },
				{ text: m.LP_Pricing_Description_PersonalUse(), icon: Signature }
			],
			ctaText: 'Get Started',
			ctaLink: i18n.route('/login')
		},
		{
			name: 'Pro',
			description: m.LP_Pricing_Pro_Description(),
			monthlyPrice: 79,
			monthlyPriceDiscounted: 39,
			annualPrice: 474,
			annualPriceDiscounted: 234,
			billingPeriod: isAnnual ? m.LP_Pricing_Year() : m.LP_Pricing_Month(),
			features: [
				{ text: m.LP_Pricing_Description_1({ value: 50 }), icon: Target },
				{ text: m.LP_Pricing_Description_2(), icon: BadgePlus },
				{ text: m.LP_Pricing_Description_CommercialUse(), icon: Signature }
			],
			highlighted: true,
			ctaText: 'Get Started',
			ctaLink: i18n.route('/login')
		},
		{
			name: 'Premium',
			description: m.LP_Pricing_Premium_Description(),
			monthlyPrice: 99,
			monthlyPriceDiscounted: 49,
			annualPrice: 594,
			annualPriceDiscounted: 294,
			billingPeriod: isAnnual ? m.LP_Pricing_Year() : m.LP_Pricing_Month(),
			features: [
				{ text: m.LP_Pricing_Unlimited(), icon: Infinity },
				{ text: m.LP_Pricing_Description_2(), icon: BadgePlus },
				{ text: m.LP_Pricing_Description_CommercialUse(), icon: Signature }
			],
			ctaText: m.LP_Pricing_Action(),
			ctaLink: i18n.route('/login')
		}
	];
</script>

<SectionContainer {title} {subtitle} id="pricing">
	<p class="font-bold w-full flex justify-center gap-2 items-center">
		{m.LP_Pricing_Month()}
		<Switch includeInput bind:checked={isAnnual} />
		{m.LP_Pricing_Year()}
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
							<Badge class="ml-2">{m.LP_Pricing_Recommended()}</Badge>
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
					<h4 class="text-sm font-medium">{m.LP_Pricing_Includes()}</h4>
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
