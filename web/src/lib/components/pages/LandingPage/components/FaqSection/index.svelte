<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index';
	import { SectionContainer } from '..';
	import * as m from '$lib/paraglide/messages.js';

	const title = m.LP_FAQ_Title();
	const subtitle = m.LP_FAQ_Subtitle();

	const faqs = [
		{
			question: m.LP_FAQ_Question_1(),
			answer: m.LP_FAQ_Answer_1()
		},
		{
			question: m.LP_FAQ_Question_2(),
			answer: m.LP_FAQ_Answer_2()
		},
		{
			question: m.LP_FAQ_Question_3(),
			answer: m.LP_FAQ_Answer_3()
		},
		{
			question: m.LP_FAQ_Question_4(),
			answer: m.LP_FAQ_Answer_4()
		},
		{
			question: m.LP_FAQ_Question_5(),
			answer: m.LP_FAQ_Answer_5()
		},
		{
			question: m.LP_FAQ_Question_6(),
			answer: m.LP_FAQ_Answer_6()
		}
	];
</script>

<SectionContainer {title} {subtitle} id="faq" contentClass="max-w-3xl">
	<Accordion.Root type="single" class="w-full space-y-2">
		{#each faqs as faq, index}
			<Accordion.Item value={`item-${index}`} class="border rounded-lg">
				<Accordion.Trigger
					class="text-left items-start px-4 hover:no-underline hover:bg-muted/50 transition-colors"
				>
					<span>{faq.question}</span>
				</Accordion.Trigger>
				<Accordion.Content>
					<div class="p-4 text-muted-foreground">
						{faq.answer}
					</div>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</SectionContainer>
