// import {technical, workshops, cultural, informals} from '$lib/data'
import type { Schedule } from '$lib/types';
import type { HeaderLink, Link } from "./types";
import { facebookSquare, twitterSquare, envelopeSquare, linkedinSquare, youtubeSquare,instagram } from 'svelte-awesome/icons'

const mediumSquare = {
    'medium': {
        width: 72,
        height: 72,
        paths: [
            {
                d: 'm49.22,4.88c17.54,0 18.91,1.4 18.91,19.33l0,27.02c0,17.93 -1.37,19.33 -18.91,19.33l-26.44,0c-17.54,0 -18.91,-1.4 -18.91,-19.33l0,-27.02c0,-17.93 1.37,-19.33 18.91,-19.33l26.44,0zm-22.4,45.01c6.59,0 11.9,-5.45 11.9,-12.17c0,-6.72 -5.32,-12.17 -11.9,-12.17c-6.57,0 -11.9,5.45 -11.9,12.17c0,6.72 5.33,12.17 11.9,12.17zm18.99,-0.58c3.26,0 5.9,-5.19 5.9,-11.58c0,-6.39 -2.64,-11.58 -5.9,-11.58c-3.26,0 -5.89,5.19 -5.89,11.58c0,6.39 2.63,11.58 5.89,11.58zm9.16,-1.24c1.12,0 2.04,-4.63 2.04,-10.34s-0.92,-10.34 -2.04,-10.34c-1.14,0 -2.04,4.63 -2.04,10.34s0.91,10.34 2.04,10.34z'
            }
        ]
    }
};

export const closed_workshops = [
    "WP01",
    "WP02",
    "WP03",
]

export const closed_events = [
    "TP06",
    "TP07",
    "TP04"
]
// export function getEventDataJS(eventID: string){
//     const Tresult = technical.events.filter((e) => e.id == eventID)
//     if (Tresult.length > 0){
//         return Tresult[0]
//     }
//     const Cresult = cultural.events.filter((e) => e.id == eventID)
//     if (Cresult.length > 0){
//         return Cresult[0]
//     }
//     const Wresult = workshops.workshops.filter((e) => e.id == eventID)
//     if (Wresult.length > 0){
//         return Wresult[0]
//     }
//     const Iresult = informals.filter((e) => e.id == eventID)
//     if (Iresult.length > 0){
//         return Iresult[0]
//     }
// }


export const footerLinks: Array<Link> = [
    {
        url: 'https://instagram.com/petrichor.iitpkd',
        linkText: 'Instagram',
        linkIcon: instagram
    },
    {
        url: 'https://x.com/Petrichor_IIT',
        linkText: 'Twitter',
        linkIcon: twitterSquare
    },
    {
        url: 'https://www.linkedin.com/company/petrichor-iitpkd',
        linkText: 'Linkedin',
        linkIcon: linkedinSquare
    },
    {
        url: 'https://youtube.com/@petrichoriitpalakkad173?si=hn8YHyfXVcJ_KZUr',
        linkText: 'Youtube',
        linkIcon: youtubeSquare
    },
    {
        url: '/contactUs',
        linkText: 'Contact',
        linkIcon: envelopeSquare
    }
]

export const headerLinks: Array<HeaderLink> = [
    {
        url: '/home?to=2',
        linkText: 'About Us',
        childLinks: [{
            url: "/contactUs",
            linkText: "Contact Us"
        }],
        show: false
    },
    {
        url: '/home?to=3',
        linkText: 'Event',
        childLinks: []
        ,
        show: false
    },
    {
        url: '/workshop',
        linkText: 'Workshop',
        childLinks: []
        ,
        show: false
    },
    {
        url: '/schedule',
        linkText: 'Schedule',
        childLinks: []
        ,
        show: false
    },
    {
        url: '/merch',
        linkText: 'Merch',
        childLinks: []
        ,
        show: false
    }
]


export const schedule: { [key: string]: Schedule } = {
    '18th January 2025': {
        Cultural: [
            {
                event_name: 'Voicestra',
                timing: '9:00AM - 11:15AM',
                venue: 'Agora'
            },
            {
                event_name: 'Sound Clash',
                timing: '11:30AM - 1:30PM & 2:00PM - 4:00PM',
                venue: 'Agora'
            },
            {
                event_name: 'Two of a Rhythm',
                timing: '4:00PM - 5:30PM',
                venue: 'Agora'
            }
        ],
        Technical: [
            {
                event_name: 'RubikVerse',
                timing: '10:00AM - 1:00PM',
                venue: 'S-301'
            },
            {
                event_name: 'The Kirchoff Code',
                timing: '10:30AM - 12:30PM & 1:30PM - 4:30PM',
                venue: 'Electronics Lab Nila'
            },
            {
                event_name: 'Quizzanaire: School Quiz Edition',
                timing: '11:30AM - 1:30PM',
                venue: 'S-308'
            },
            {
                event_name: 'RoboWars: The Clash Of Titans',
                timing: '2:00PM - 5:00PM',
                venue: 'Agora (Back)'
            }
        ],
        Workshop: [
            {
                event_name: 'Digital Image Processing',
                timing: '10:00AM - 1:00PM, 2:00PM - 5:00PM',
                venue: 'Samgatha Classroom'
            },
            {
                event_name: 'The Web Workshop',
                timing: '10:00AM - 1:00PM, 2:00PM - 5:00PM',
                venue: 'Samgatha Classroom'
            },
            {
                event_name: 'Ethical Hacking',
                timing: '10:00AM - 1:00PM, 2:00PM - 5:00PM',
                venue: 'Samgatha Classroom'
            }
        ],
        Informals: [
            {
                event_name: 'Body Zorbing',
                timing: '10:00AM - 5:00PM',
                venue: 'In Front of Manogata'
            },
            {
                event_name: 'Target Shooting',
                timing: '10:00AM - 5:00PM',
                venue: 'In Front of Tilang A'
            },
            {
                event_name: 'Car Console',
                timing: '10:00AM - 5:00PM',
                venue: 'At Entrance'
            },
            {
                event_name: 'PS-5',
                timing: '10:00AM - 5:00PM',
                venue: 'At Entrance'
            }
        ],
        Bookfair: [
            {
                event_name: 'Bookfair by IIT Palakkad Library',
                timing: '10:00AM - 5:30PM',
                venue: 'Samgatha 203 (S-203)'
            }
        ],
        Proshow: [
            {
                event_name: 'Proshow',
                timing: '6:00PM - 8:45PM',
                venue: 'Nila Football Ground'
            }
        ]
    },
    '19th January 2025': {
        Cultural: [
            {
                event_name: 'Step Sync Surge',
                timing: '9:00AM - 11:30AM',
                venue: 'Agora'
            },
            {
                event_name: 'Face Painting',
                timing: '11:00AM - 12:00PM',
                venue: 'Infront of Tilang B'
            },
            {
                event_name: 'Craft Event',
                timing: '1:00PM - 2:00PM',
                venue: 'Infront of Tilang B'
            },
            {
                event_name: 'Solo Streak',
                timing: '1:30PM - 4:00PM',
                venue: 'Agora'
            },
            {
                event_name: 'SyncFix: Dance Battle',
                timing: '4:00PM - 5:30PM',
                venue: 'Agora'
            }
        ],
        Technical: [
            {
                event_name: 'Labyrinth: The MazeXplorer',
                timing: '10:00AM - 1:00PM',
                venue: 'S-301'
            },
            {
                event_name: 'Bridge Bonanza',
                timing: '10:00AM - 1:00PM',
                venue: 'Manogatha Quadrangle'
            },
            {
                event_name: 'Quizzanaire: General Quiz Edition',
                timing: '2:00PM - 5:00PM',
                venue: 'S-308'
            },
            {
                event_name: 'DroneDash',
                timing: '2:00PM - 5:00PM',
                venue: 'Nila Ground'
            }
        ],
        Workshop: [
            {
                event_name: 'Digital Image Processing',
                timing: '10:00AM - 1:00PM, 2:00PM - 5:00PM',
                venue: 'Samgatha Classroom'
            },
            {
                event_name: 'The Web Workshop',
                timing: '10:00AM - 1:00PM, 2:00PM - 5:00PM',
                venue: 'Samgatha Classroom'
            },
            {
                event_name: 'Ethical Hacking',
                timing: '10:00AM - 1:00PM, 2:00PM - 5:00PM',
                venue: 'Samgatha Classroom'
            }
        ],
        Informals: [
            {
                event_name: 'Body Zorbing',
                timing: '10:00AM - 5:00PM',
                venue: 'In Front of Manogata'
            },
            {
                event_name: 'Target Shooting',
                timing: '10:00AM - 5:00PM',
                venue: 'In Front of Tilang A'
            },
            {
                event_name: 'Car Console',
                timing: '10:00AM - 5:00PM',
                venue: 'At Entrance'
            },
            {
                event_name: 'PS-5',
                timing: '10:00AM - 5:00PM',
                venue: 'At Entrance'
            }
        ],
        Bookfair: [
            {
                event_name: 'Bookfair by IIT Palakkad Library',
                timing: '10:00AM - 5:30PM',
                venue: 'Samgatha 203 (S-203)'
            }
        ],
        Proshow: [
            {
                event_name: 'Proshow',
                timing: '6:00PM - 8:45PM',
                venue: 'Nila Football Ground'
            }
        ]
    }
};