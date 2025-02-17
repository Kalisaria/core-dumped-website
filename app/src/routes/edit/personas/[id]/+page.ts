import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { person } from '../../../(main)/about/+page.server';


export const load: PageLoad = async ({ fetch, params }) => {
    if (params.id.length != 24) {
        throw error(404, {
            message: "Not found"
        });
    }
    const response = await fetch(API_URI + '/personas/' + params.id);
    if (response.ok) {
        let data: person = await response.json();

        return { data };
    }
    else {
        throw error(response.status, {
            message: response.statusText
        });
    }

};
