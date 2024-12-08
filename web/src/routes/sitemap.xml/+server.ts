import { config } from '$lib/config-client';
import { languageTag } from '$lib/paraglide/runtime.js';

const site = config.baseUrl; // TODO: SITEMAP: 	Change this to reflect your domain
const pages: string[] = ['privacy-policy', 'terms-of-service', 'changelog', 'roadmap', 'contact']; // TODO: SITEMAP: populate this with all the slugs you wish to include
const languages = ['en', 'pl']; // TODO: SITEMAP: Add list of languages to include in the sitemap

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(pages, languages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: string[], languages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
		.map((page) =>
			languages
				.map(
					(language) => `
  <url>
    <loc>${language === 'en' ? site : `${site}/${language}`}\/${page}</loc>
    ${languages
			.map(
				(alternateLanguage) => `
    <xhtml:link rel="alternate" hreflang="${alternateLanguage}" href="${alternateLanguage === 'en' ? site : `${site}/${alternateLanguage}`}\/${page}" />`
			)
			.join('')}
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
				)
				.join('')
		)
		.join('')}
</urlset>`;
