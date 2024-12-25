import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { cultural, technical } from '$lib/data';


export const load: PageLoad = ({ params, url }) => {
    const url_parts = url.pathname.split('/')
    let eventID = url_parts[url_parts.length - 1] 
    if (eventID == "technical") {
        eventID = Object.keys(technical.events)[0]
    } else if (eventID == "cultural") {
        eventID = Object.keys(cultural.events)[0]
    } 
    console.log(eventID)

    if (params.slug == 'technical'){
        return {'events':technical, 'eventID': eventID, "type": 'technical'}
    } else if (params.slug == 'cultural'){
        // console.log(cultural)
        return {'events':cultural.events, 'eventID': eventID, "type": 'cultural'}
    }

    throw error(404)
    
};