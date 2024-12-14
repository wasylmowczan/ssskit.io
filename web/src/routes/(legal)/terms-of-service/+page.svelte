<script>
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';
	import * as m from '$lib/paraglide/messages.js';

	const lastUpdated = new Date(2024, 11, 31).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	}); // TODO: update last updated date
</script>

<Seo
	title={`Terms of Service - ${config.appName}`}
	description={`Terms of Service for ${config.appName}`}
	keywords="terms, of, service, terms of service, terms of service for ai image generator"
/>

<section class="mb-12 p-6">
	<h2 class="text-2xl font-semibold mb-4 text-center">{m.LP_ToS_Title()}</h2>
	<div class="space-y-4">
		<div>
			<h3 class="text-xl font-medium">{m.LP_ToS_AcceptanceOfTerms()}</h3>
			<p class="text-muted-foreground">
				{m.LP_ToS_AcceptanceOfTerms_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_ToS_UserAccounts()}</h3>
			<p class="text-muted-foreground">
				{m.LP_ToS_UserAccounts_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_ToS_UpdatesToTerms()}</h3>
			<p class="text-muted-foreground">
				{m.LP_ToS_UpdatesToTerms_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_ToS_SubscriptionPlans()}</h3>
			<p class="text-muted-foreground">
				{m.LP_ToS_SubscriptionPlans_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_ToS_UserResponsibility()}</h3>
			<p class="text-muted-foreground">
				{m.LP_ToS_UserResponsibility_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_ToS_ContactInformation()}</h3>
			<p class="text-muted-foreground">
				{m.LP_ToS_ContactInformation_Description()}
				<!-- TODO: add email -->
			</p>
		</div>
	</div>
	<p class="mt-4 text-sm text-muted-foreground font-bold">
		Last updated: {lastUpdated}
	</p>
</section>
