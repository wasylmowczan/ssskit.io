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
	title={`Privacy Policy - ${config.appName}`}
	description={`Privacy Policy for ${config.appName}`}
	keywords="privacy, policy, privacy policy, privacy policy for ai image generator"
/>

<section class="mb-12 p-6">
	<h2 class="text-2xl font-semibold mb-4 text-center">Privacy Policy 🔒</h2>
	<div class="space-y-4">
		<div>
			<h3 class="text-xl font-medium">Information Collection</h3>
			<p class="text-muted-foreground">
				We collect information you provide directly to us, such as when you create an account,
				generate images using our AI model, or contact us for support. This may include your name,
				email address, and the content of your image generation requests.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Use of Information</h3>
			<p class="text-muted-foreground">
				We use the information we collect to provide, maintain, and improve our services, including:
			</p>
			<ul class="list-disc list-inside mt-2">
				We use the information we collect for various purposes, including to process and generate
				images, improve our AI model, communicate with you, and enhance your overall experience.
			</ul>
		</div>
		<div>
			<h3 class="text-xl font-medium">Information Sharing</h3>
			<p class="text-muted-foreground">
				We do not sell or share your personal information with third parties except as described in
				this policy or with your consent. We may share anonymized, aggregated data for analytical
				purposes.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Data Security</h3>
			<p class="text-muted-foreground">
				We implement reasonable security measures to protect the security of your personal
				information, including the encryption of sensitive data and regular security audits.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Your Rights</h3>
			<p class="text-muted-foreground">
				Depending on your location, you may have certain rights regarding your personal information,
				such as the right to access, correct, or delete your data. You can exercise these rights by
				contacting us through our support channels.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Cookies</h3>
			<p class="text-muted-foreground">
				We use cookies and similar tracking technologies to track activity on our service and hold
				certain information. You can control cookies through your browser settings.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Third-Party Services</h3>
			<p class="text-muted-foreground">
				We may employ third-party companies and individuals to facilitate our service, including for
				hosting, analytics, and AI model training. These third parties have access to your personal
				information only to perform specific tasks on our behalf and are obligated not to disclose
				or use it for any other purpose.
			</p>
		</div>
		<div>
			<h3 class="text-xl font-medium">Changes to This Policy</h3>
			<p class="text-muted-foreground">
				We may update this privacy policy from time to time. We will notify you of any changes by
				posting the new privacy policy on this page and updating the "Last updated" date.
			</p>
		</div>
	</div>
	<p class="mt-4 text-sm text-muted-foreground font-bold">Last updated: {lastUpdated}</p>
</section>
