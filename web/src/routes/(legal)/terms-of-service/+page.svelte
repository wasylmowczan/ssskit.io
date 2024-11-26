<script>
	import { Seo } from '$lib/components/modules';
	import { config } from '$lib/config-client';
	const lastUpdated = new Date(2024, 11, 31).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}); // TODO: update last updated date
</script>

<Seo
	title={`Terms of Service - ${config.appName}`}
	description={`Terms of Service for ${config.appName}`}
/>

<section class="mb-12 p-6">
	<h2 class="text-2xl font-semibold mb-4 text-center">Terms & Conditions 📜</h2>
	<div class="space-y-4">
		<div>
			<h3 class="text-xl font-medium">Acceptance of Terms</h3>
			<p class="text-muted-foreground">
				We are not liable for any indirect damages resulting from your use or inability to use our
				site. We reserve the right to change prices and policies at any time and will notify you of
				significant changes via email.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">User Accounts</h3>
			<p class="text-muted-foreground">
				Some services require an account. Keep your account details confidential. Providing false
				information may result in account termination. Abusing the platform by creating multiple
				free accounts may also lead to account termination.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Updates to Terms</h3>
			<p class="text-muted-foreground">
				We reserve the right to update these terms and conditions, including provisions related to
				commercial use, with notice to users.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Subscription Plans</h3>
			<p class="text-muted-foreground">
				With the exception of the Free plan, all images created with {config.appName} are for personal,
				non-commercial use. Personal, non-commercial use means using the images for enjoyment or educational
				purposes. You may not resell, distribute, or sublicense these images. Commercial use, defined
				as using the images for profit or financial gain, is only granted for images created by accounts
				subscribed to the "Pro" and "Premium" plans.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">User Responsibility and Indemnification</h3>
			<p class="text-muted-foreground">
				The Company provides tools and resources for users to create coloring pages using images. We
				shall not be liable for any use of these images created by users, including their use for
				personal or commercial purposes. Users are solely responsible for ensuring that their use of
				the images complies with applicable laws, regulations, and third-party rights. By using the
				Company's services, users agree to indemnify, defend, and hold harmless the Company, its
				affiliates, and their respective officers, directors, employees, and agents from and against
				any claims, damages, liabilities, losses, costs, or expenses (including reasonable
				attorneys' fees) arising out of or relating to the user's use of the images, including but
				not limited to any claims of copyright infringement or violation of intellectual property
				rights. The Company reserves the right, at its own expense, to assume the exclusive defense
				and control of any matter otherwise subject to indemnification by the user, in which event
				the user will cooperate with the Company in asserting any available defenses.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">6. Contact Information</h3>
			<p class="text-muted-foreground">
				If you have questions about these terms, please contact me via email at name@gmail.com
				<!-- TODO: add email -->
			</p>
		</div>
	</div>
	<p class="mt-4 text-sm text-muted-foreground font-bold">
		Last updated: {lastUpdated}
	</p>
</section>
