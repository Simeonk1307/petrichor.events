
import type { Schedule } from '$lib/types';

export const schedule: { [key: string]: Schedule } = {
    '17th January 2026': {
        Cultural: [
            {
                event_name: 'Voicestra - Solo Singing',
                timing: '9:00AM - 11:00AM',
                venue: 'Agora Auditorium'
            },
            {
                event_name: 'Face Painting + Theme Painting',
                timing: '9:00AM - 1:00PM',
                venue: 'Front of Tilang A'
            },
            {
                event_name: 'Two of a Rhythm - Pair on  Stage',
                timing: '11:00AM - 1:00PM',
                venue: 'Agora Auditorium'
            },
            {
                event_name: 'Breaking Bands - Battle of Bands',
                timing: '2:00PM - 5:00PM',
                venue: 'Agora Auditorium'
            }
        ],
        Technical: [
            {
                event_name: 'Source Code',
                timing: '9:00AM - 12:00PM',
                venue: 'Nila CS Lab'
            },
            {
                event_name: 'Reverse Engineering',
                timing: '9:00AM - 1:00PM',
                venue: 'Nila Electronics Lab'
            },
            {
                event_name: 'Line Follower',
                timing: '2:00PM - 4:00PM',
                venue: 'Samgatha 302'
            },
            {
                event_name: 'Shake It Off',
                timing: '3:00PM - 5:30PM',
                venue: 'Manogatha'
            },
            {
                event_name: 'Robo Wars',
                timing: '2:00PM - 6:00PM',
                venue: 'Backside of Agora'
            }
        ],
        // Workshop: [
        //     {
        //         event_name: 'Digital Image Processing',
        //         timing: '9:00am - 12:00pm, 2:00PM - 5:00PM',
        //         venue: 'Samgatha Classroom'
        //     },
        //     {
        //         event_name: 'The Web Workshop',
        //         timing: '9:00am - 12:00pm, 2:00PM - 5:00PM',
        //         venue: 'Samgatha Classroom'
        //     },
        //     {
        //         event_name: 'Ethical Hacking',
        //         timing: '9:00am - 12:00pm, 2:00PM - 5:00PM',
        //         venue: 'Samgatha Classroom'
        //     }
        // ],
        // Informals: [
        //     {
        //         event_name: 'Body Zorbing',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'Agora Back'
        //     },
        //     {
        //         event_name: 'Target Shooting',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'In Front of Tilang A'
        //     },
        //     {
        //         event_name: 'Car Console',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'Nila Entrance'
        //     },
        //     {
        //         event_name: 'PS-5',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'Nila Entrance'
        //     }
        // ],
        Bookfair: [
            {
                event_name: 'Bookfair by IIT Palakkad Library',
                timing: '9:00AM - 5:00PM',
                venue: 'Next to Nila Gate'
            }
        ],
        Proshow: [
            {
                event_name: 'DJ Night',
                timing: '6:00PM - 10:00PM',
                venue: 'Nila Football Ground'
            }
        ]
    },
    '18th January 2026': {
        Cultural: [
            {
                event_name: 'Solo Dance',
                timing: '9:00AM - 11:00AM',
                venue: 'Agora Auditorium'
            },
            {
                event_name: 'QUIZ',
                timing: '9:00AM - 10:30AM',
                venue: 'Samgatha 302'
            },
            {
                event_name: 'Group Dance',
                timing: '11:00AM - 1:00PM',
                venue: 'Agora Auditorium'
            },
            {
                event_name: 'Street Battle',
                timing: '2:00PM - 3:30PM',
                venue: 'Agora Auditorium'
            },
            {
                event_name: 'Vogue Wars - Fashion',
                timing: '3:30PM - 5:00PM',
                venue: 'Agora Auditorium'
            }
        ],
        Technical: [
            {
                event_name: 'World Guessor',
                timing: '9:00AM - 10:30AM',
                venue: 'Nila CS Lab'
            },
            {
                event_name: 'Robo Soccer',
                timing: '10:00AM - 1:30PM',
                venue: 'Right Foyer of Agora'
            },
            {
                event_name: 'CADvCAD',
                timing: '10:45AM - 12:30PM',
                venue: 'Nila CC Lab'
            },
            {
                event_name: 'Robo Wars',
                timing: '2:00PM - 4:00PM',
                venue: 'Backside of Agora'
            },
            {
                event_name: 'CODEWARS',
                timing: '2:00PM - 5:00PM',
                venue: 'Nila CS Lab'
            },
            {
                event_name: 'Riptide',
                timing: '3:00PM - 5:00PM',
                venue: 'Backside of Agora'
            },
        ],
        // Workshop: [
        //     {
        //         event_name: 'Digital Image Processing',
        //         timing: '9:00AM - 12:00PM, 2:00PM - 5:00PM',
        //         venue: 'Samgatha Classroom'
        //     },
        //     {
        //         event_name: 'The Web Workshop',
        //         timing: '9:00AM - 12:00PM, 2:00PM - 5:00PM',
        //         venue: 'Samgatha Classroom'
        //     },
        //     {
        //         event_name: 'Ethical Hacking',
        //         timing: '9:00AM - 12:00PM, 2:00PM - 5:00PM',
        //         venue: 'Samgatha Classroom'
        //     }
        // ],
        // Informals: [
        //     {
        //         event_name: 'Body Zorbing',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'Agora Back'
        //     },
        //     {
        //         event_name: 'Target Shooting',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'In Front of Tilang A'
        //     },
        //     {
        //         event_name: 'Car Console',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'Nila Entrance'
        //     },
        //     {
        //         event_name: 'PS-5',
        //         timing: '10:00AM - 5:00PM',
        //         venue: 'Nila Entrance'
        //     }
        // ],
        Bookfair: [
            {
                event_name: 'Bookfair by IIT Palakkad Library',
                timing: '9:00AM - 5:00PM',
                venue: 'Next to Nila Gate'
            }
        ],
        Proshow: [
            {
                event_name: 'Proshow',
                timing: '6:00PM - 10:00PM',
                venue: 'Nila Football Ground'
            }
        ]
    }
};