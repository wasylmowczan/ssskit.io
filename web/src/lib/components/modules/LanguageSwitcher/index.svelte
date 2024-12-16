<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import * as Select from '$lib/components/ui/select';
	import LanguageIcon from '$lib/components/icons/common/language.svelte';

	let currentPathWithoutLanguage = $derived(i18n.route($page.url.pathname));
</script>

<div class="flex gap-2 items-center">
	<Select.Root>
		<Select.Trigger>
			<LanguageIcon />
		</Select.Trigger>
		<Select.Content>
			{#each availableLanguageTags as lang}
				<div class="p-2 text-center">
					<a
						href={currentPathWithoutLanguage}
						hreflang={lang}
						aria-current={lang === languageTag() ? 'page' : undefined}
					>
						{lang.toUpperCase()}
					</a>
				</div>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
