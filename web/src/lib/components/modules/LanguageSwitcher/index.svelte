<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import * as Select from '$lib/components/ui/select/index.js';
	import LanguageIcon from '$lib/components/icons/common/language.svelte';

	const languages = availableLanguageTags.map((lang) => ({
		value: lang,
		label: lang.toUpperCase()
	}));

	let value = $state(languageTag());

	const triggerContent = $derived(
		languages.find((l) => l.value === value)?.label ?? 'Select a language'
	);

	let currentPathWithoutLanguage = $derived(i18n.route($page.url.pathname));
</script>

<Select.Root type="single" name="language" bind:value>
	<Select.Trigger class="w-20">
		<LanguageIcon />
		{triggerContent}
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each languages as lang}
				<a
					href={currentPathWithoutLanguage}
					hreflang={lang.value}
					aria-current={lang.value === languageTag() ? 'page' : undefined}
				>
					<Select.Item value={lang.value} label={lang.label}>{lang.label}</Select.Item>
				</a>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
