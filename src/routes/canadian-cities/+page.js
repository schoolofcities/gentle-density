import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(301, 'https://schoolofcities.github.io/gentle-density/adu-development-in-canadian-cities');
}