import { Resend } from 'resend';
import { config } from '$lib/config-server';
import { render } from 'svelte/server';
import type { Component } from 'svelte';

export const sendEmail = async ({
	to,
	subject,
	from,
	template,
	props = {}
}: {
	to: string[] | string;
	subject: string;
	from: string;
	template: Component<any>;
	props?: Record<string, any>;
}) => {
	try {
		const resend = new Resend(config.resendApiKey);

		// Render component with props
		const { html } = render(template, { props });

		const resp = await resend.emails.send({
			from: from,
			to: to,
			subject: subject,
			html: html
		});

		if (resp.error) {
			console.error('Failed to send user email, error:', resp.error);
		} else {
			console.log('Email sent successfully:', resp.data);
		}
	} catch (e) {
		console.error('Unexpected error while sending email:', e);
	}
};
