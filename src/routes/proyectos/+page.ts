import type { PageLoad } from './$types';

import type { card } from "../+page"

export const load: PageLoad = async ({ fetch, params }) => {
    const cards = await fetch('http://localhost:3000/proyectos');
    const fetchCategories = await fetch('http://localhost:3000/proyectos/categorias')
    let projects: Array<card> = await cards.json();
    let categories: Array<string> = await fetchCategories.json();
    return { projects, categories };
};