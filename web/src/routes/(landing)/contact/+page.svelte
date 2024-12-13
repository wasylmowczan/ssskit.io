<script lang="ts">
	import X from '$lib/components/icons/brands/X.svelte';
	import Instagram from '$lib/components/icons/brands/Instagram.svelte';
	import BlueSky from '$lib/components/icons/brands/BlueSky.svelte';
	import AnimatedTooltip from '$lib/components/aceternityui/AnimatedTooltip/AnimatedTooltip.svelte';

	// TODO:[CONTACT] Update with actual contact information
	const email = 'contact@imagin.ai';
	const phone = '+1 (800) 123 XX21';
	const supportEmail = 'support@imagin.ai';

	const socialMediaLinks = [
		{
			platform: 'Twitter',
			url: 'https://x.com/imaginai',
			icon: X,
			alt: 'Twitter'
		},
		{
			platform: 'BlueSky',
			url: 'https://bsky.app/profile/imagin.ai',
			icon: BlueSky,
			alt: 'BlueSky'
		},
		{
			platform: 'Instagram',
			url: 'https://www.instagram.com/imaginai',
			icon: Instagram,
			alt: 'Instagram'
		}
	];

	const people = [
		{
			id: 1,
			name: 'John Doe',
			designation: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
		},
		{
			id: 2,
			name: 'Robert Johnson',
			designation: 'Product Manager',
			image:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 3,
			name: 'Jane Smith',
			designation: 'Data Scientist',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 4,
			name: 'Emily Davis',
			designation: 'UX Designer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 5,
			name: 'Tyler Durden',
			designation: 'Soap Developer',
			image:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'
		},
		{
			id: 6,
			name: 'Dora',
			designation: 'The Explorer',
			image:
				'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80'
		}
	];
</script>

<div class="min-h-screen py-12 flex items-center justify-center">
	<div class="grid md:grid-cols-2">
		<div class="p-8 md:p-12 flex flex-col">
			<div class="max-w-md mx-auto space-y-8 text-center">
				<div class="space-y-2">
					<h1 class="text-3xl font-bold">Contact Us</h1>
					<p class="text-gray-500 dark:text-gray-400">
						Please reach out to us and we will get back to you at the speed of light.
					</p>
				</div>
				<div class="space-y-8 pt-8">
					<div class="space-y-2">
						<h2 class="text-gray-400">Email</h2>
						<p>{email}</p>
					</div>

					<div class="space-y-2">
						<h2 class="text-gray-400">Phone</h2>
						<p>{phone}</p>
					</div>

					<div class="space-y-2">
						<h2 class="text-gray-400">Support</h2>
						<p>{supportEmail}</p>
					</div>
				</div>
				<div class="flex justify-center gap-4">
					{#each socialMediaLinks as { platform, url, icon }}
						<a href={url} target="_blank" rel="noopener noreferrer">
							<svelte:component this={icon} customClass="w-6 h-6" />
							<span class="sr-only">{platform}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="relative p-12 flex flex-col items-center justify-center">
			<AnimatedTooltip items={people} />
			<div class="text-center pt-8">
				<h2 class="text-2xl font-bold">Every voice matters</h2>
				<p class="text-gray-500 dark:text-gray-400">We hear our clients, we hear our users.</p>
			</div>
		</div>
	</div>
</div>
