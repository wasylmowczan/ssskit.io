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
	title={`Privacy Policy - ${config.appName}`}
	description={`Privacy Policy for ${config.appName}`}
	keywords="privacy, policy, privacy policy, privacy policy for ai image generator"
/>

<section class="mb-12 p-6">
	<h2 class="text-2xl font-semibold mb-4 text-center">{m.LP_PP_Title()}</h2>
	<div class="space-y-4">
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_InformationCollection()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_InformationCollection_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_InformationUse()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_InformationUse_Description()}
			</p>
			<ul class="list-disc list-inside mt-2">
				{m.LP_PP_InformationUse_Description()}
			</ul>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_InformationSharing()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_InformationSharing_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_InformationSecurity()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_InformationSecurity_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_YourRights()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_YourRights_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_Cookies()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_Cookies_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_ThirdPartyServices()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_ThirdPartyServices_Description()}
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">{m.LP_PP_Changes()}</h3>
			<p class="text-muted-foreground">
				{m.LP_PP_Changes_Description()}
			</p>
		</div>
	</div>
	<p class="mt-4 text-sm text-muted-foreground font-bold">{m.LP_LastUpdated()}: {lastUpdated}</p>
</section>
