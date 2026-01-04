import type { PageLoad } from './$types';
import { events_data } from '$lib/new_data';
import { error } from '@sveltejs/kit';


export const load: PageLoad = ({ params, url }) => {
    let eventID = url.searchParams.get('id')
    const event_type = params.slug.at(0)?.toUpperCase()
    if (eventID == null) {
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