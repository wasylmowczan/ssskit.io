<script lang="ts">
	import { SectionContainer } from '..';
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { faker } from '@faker-js/faker';
	import * as m from '$lib/paraglide/messages.js';

	const title = m.LP_Feedback_Title();
	const subtitle = m.LP_Feedback_Subtitle();

	const testimonials = [
		{
			name: 'Sarah Johnson',
			role: 'Marketing Guru',
			company: 'TechCorp',
			content: `The Imagine AI app has been a game-changer for our marketing campaigns. The quality of the images is unparalleled, and the customization options are endless. We've seen a significant increase in engagement and conversions since incorporating these images into our ads.`,
			avatar: faker.image.avatar()
		},
		{
			name: 'Michael Chen',
			role: 'Design Wizard',
			company: 'Freelance Land',
			content: `As a designer, I was blown away by the capabilities of this app. The AI-generated images are not only visually stunning but also incredibly realistic. It's opened up new possibilities for my clients and has allowed me to take my designs to the next level.`,
			avatar: faker.image.avatar()
		},
		{
			name: 'Emma Rodriguez',
			role: 'Startup Queen',
			company: 'InnovateTech',
			content: `This app has been instrumental in helping us create a unique brand identity. The AI-generated images have allowed us to stand out in a crowded market and have contributed significantly to our brand recognition.`,
			avatar: faker.image.avatar()
		},
		{
			name: 'David Kim',
			role: 'Product Mastermind',
			company: 'GlobalSoft',
			content: `The AI in this thing? It's like having a crystal ball for product development. We're fixing problems before they even happen. Spooky stuff!`,
			avatar: faker.image.avatar()
		},
		{
			name: 'Olivia Patel',
			role: 'HR Superhero',
			company: 'TalentForce',
			content: `Our HR department went from 'The Office' to 'The Avengers'. Performance reviews? More like victory laps now!`,
			avatar: faker.image.avatar()
		},
		{
			name: 'Thomas Müller',
			role: 'Sales Rockstar',
			company: 'EuroTech Solutions',
			content: `The AI image generation feature has been a game-changer for our sales team. It's allowed us to create engaging visuals that resonate with our customers, resulting in increased conversions and a significant boost to our sales.`,
			avatar: faker.image.avatar()
		}
	];

	const stats = [
		{ value: '10,000+', label: m.LP_Feedback_ActiveUsers() },
		{ value: '1M+', label: m.LP_Feedback_ImagesGenerated() },
		{ value: '4.8/5', label: m.LP_Feedback_Score() }
	];
</script>

<SectionContainer {title} {subtitle} id="testimonials" contentClass="max-w-6xl">
	<div class="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each testimonials as testimonial}
			<Card.Root class="shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
				<Card.Content class="p-6">
					<div class="mb-4 flex items-center space-x-4">
						<Avatar.Root>
							<Avatar.Image src={testimonial.avatar} alt={testimonial.name} />
							<Avatar.Fallback>{testimonial.name[0]}</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<p class="font-semibold">{testimonial.name}</p>
							<p class="text-sm text-muted-foreground">
								{testimonial.role} at {testimonial.company}
							</p>
						</div>
					</div>
					<p class="text-muted-foreground">"{testimonial.content}"</p>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
	<div class="grid gap-8 md:grid-cols-3">
		{#each stats as stat}
			<div class="text-center">
				<p class="text-3xl font-bold text-primary">{stat.value}</p>
				<p class="text-muted-foreground">{stat.label}</p>
			</div>
		{/each}
	</div>
</SectionContainer>
