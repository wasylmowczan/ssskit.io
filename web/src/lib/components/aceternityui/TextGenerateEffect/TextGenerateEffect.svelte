<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { cn } from '$lib/utils';

	interface Props {
		words: string;
		className?: string | undefined;
	}

	let { words, className = undefined }: Props = $props();

	const variants = {
		visible: (i: number) => ({
			opacity: 1,
			transition: {
				delay: i * 0.2,
				duration: 2
			}
		}),
		hidden: { opacity: 0 }
	};
</script>

<div class={cn('font-bold', className)}>
	<div class="mt-4">
		<div class=" text-4xl leading-snug tracking-wide text-black dark:text-white">
			<Motion  custom={0} {variants} initial="hidden" animate={'visible'}>
				{#snippet children({ motion })}
								<div use:motion>
						{#each words.split(' ') as word, idx (`${word}${idx}`)}
							<Motion  {variants} custom={idx + 1} initial="hidden" animate={'visible'}>
								{#snippet children({ motion })}
														<span use:motion class="text-black dark:text-white">
										{word}{' '}
									</span>
																					{/snippet}
												</Motion>
						{/each}
					</div>
											{/snippet}
						</Motion>
		</div>
	</div>
</div>
