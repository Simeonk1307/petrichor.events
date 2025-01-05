import type { PageLoad } from './$types';
import { events_data } from '$lib/new_data';


export const load: PageLoad = ({ params, url }) => {
    const url_parts = url.pathname.split('/')
    let eventID = url_parts[url_parts.length - 1] 
    const event_type = params.slug.at(0)?.toUpperCase()
    if (eventID == params.slug) {
        eventID = Object.keys(events_data[event_type].events)[0]
    }

    return {'events':events_data[event_type].events, 'eventID': eventID, "type": 'technical'}
    // if (params.slug == 'technical'){
    // } else if (params.slug == 'cultural'){
    //     // console.log(cultural)
    //     return {'events':cultural.events, 'eventID': eventID, "type": 'cultural'}
    // }

    // throw error(404)
    
};