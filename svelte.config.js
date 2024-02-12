import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import vercelAdapter from '@sveltejs/adapter-vercel';
import nodeAdapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let selectedAdapter;

if (process.env.DEPLOY_TARGET === 'NETLIFY') {
  selectedAdapter = netlifyAdapter();
} else if (process.env.DEPLOY_TARGET === 'VERCEL') {
  selectedAdapter = vercelAdapter();
} else if (process.env.DEPLOY_TARGET === 'NODE') {
  selectedAdapter = nodeAdapter();
} else if (process.env.DEPLOY_TARGET === 'STATIC') {
  selectedAdapter = staticAdapter();
} else {
  selectedAdapter = autoAdapter();
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		env: {
			dir: './'
		},
		alias: {
			'$src/*': 'src/*',
		},
		prerender: {
			handleMissingId: 'ignore',
			crawl: true,
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: selectedAdapter,
	}
};

export default config;