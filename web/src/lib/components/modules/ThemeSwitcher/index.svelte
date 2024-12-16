<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Moon, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';

	// Wrap the theme toggle in a View Transition
	function handleToggleMode() {
		if (document.startViewTransition) {
			document.startViewTransition(() => toggleMode());
		} else {
			toggleMode(); // Fallback for unsupported browsers
		}
	}
</script>

<Button onclick={handleToggleMode} variant="outline" size="icon">
	<Sun
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
