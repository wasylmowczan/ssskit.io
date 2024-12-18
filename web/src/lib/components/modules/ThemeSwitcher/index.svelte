<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import { Moon, Sun } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';

	let checked = false;

	// Wrap the theme toggle in a View Transition
	function handleToggleMode() {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				toggleMode();
				checked = !checked;
			});
		} else {
			toggleMode(); // Fallback for unsupported browsers
			checked = !checked;
		}
	}
</script>

<div class="flex items-center space-x-2">
	<Sun class="h-4 w-4 transition-all" />
	<Switch {checked} onCheckedChange={handleToggleMode}>
		<span class="sr-only">Toggle theme</span>
	</Switch>
	<Moon class="h-4 w-4 transition-all" />
</div>
