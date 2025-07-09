import { writable, type Writable } from 'svelte/store';
import type { User, UserData } from './types';

export const user = writable<User>({
    "user_data":{
        "email":"",gradYear:0,institute:"",phone:"09043",stream:"",username:"","CACode":"","registrations":-1
    },
    "user_events":[
    ]
})
export const invalidate = writable<boolean>(false);
export const loggedIn = writable<boolean>(false);
export const access_token = writable<string|null>(null);
