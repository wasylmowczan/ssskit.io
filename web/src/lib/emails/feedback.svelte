<script>
	import { config } from '$lib/config-client';

	export let name;
	export let feedback;
</script>

<table
	style="font-family: Arial, sans-serif; width: 100%; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;"
>
	<tbody>
		<tr>
			<td style="padding: 24px; text-align: center;">
				<h1 style="margin: 0; font-size: 24px; color: #333;">
					You've got feedback from {config.appName}!
				</h1>
				<p style="font-size: 16px; color: #555;">
					Hi, you've got feedback from user : <b>{name}</b>!
					<br />
					<br />
					Here's the feedback:
					<br />
					<br />
					<b>{feedback}</b>
				</p>
			</td>
		</tr>
	</tbody>
</table>
