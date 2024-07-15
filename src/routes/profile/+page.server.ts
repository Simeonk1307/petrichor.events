import { API, POST } from "$lib"
import { get } from "svelte/store";
import type { Actions, PageServerLoad } from './$types';
import { invalidate, loggedIn, user } from "$lib/stores";

export const load: PageServerLoad  = async ({fetch, cookies}) => {

    const accesstoken = cookies.get("session_id")
    return {
        "accessToken": (accesstoken == undefined) ? null : accesstoken
    }
}

export const actions = {
    logout: async ({request,cookies})=> {
        cookies.delete('session_id')
        return {
            "success":true,
            "message":"Logged out"
        }
    }

} satisfies Actions;