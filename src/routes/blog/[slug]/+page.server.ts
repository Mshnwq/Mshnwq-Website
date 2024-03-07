import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// export const prerender = 'auto';
export const prerender = true;
// /** @type {import('./$types').EntryGenerator} */
// export function entries() {
//     return [
//         { slug: '' },
//     ];
// }

export function load(pageData: PageServerLoad) {
  const slug = pageData.params.slug;
  if (slug === '404') {
    throw error(404);
  }
  return {
    slug,
  };
}