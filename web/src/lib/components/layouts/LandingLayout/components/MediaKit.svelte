<script lang="ts">
	import * as ContextMenu from '$lib/components/ui/context-menu';
	import { ImageDown, Download } from 'lucide-svelte';

	function downloadSvg(filename: string) {
		const link = document.createElement('a');
		link.href = `/${filename}`;
		link.download = filename;
		link.click();
	}
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger><slot /></ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item on:click={() => downloadSvg('logo.svg')}>
			<ImageDown class="w-4 h-4 mr-2" /> Download Logo SVG
		</ContextMenu.Item>
		<ContextMenu.Item on:click={() => downloadSvg('seo-image.png')}>
			<Download class="w-4 h-4 mr-2" /> Download SEO Image
		</ContextMenu.Item>
		<ContextMenu.Item on:click={() => downloadSvg('favicon.png')}>
			<Download class="w-4 h-4 mr-2" /> Download Favicon
		</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
