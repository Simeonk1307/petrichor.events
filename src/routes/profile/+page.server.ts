import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad  = async ({fetch, cookies}) => {

    const accesstoken = cookies.get("session_id")
    return {
        "accessToken": (accesstoken == undefined) ? null : accesstoken
    }
}

export const actions = {
    logout: async ({request,cookies})=> {
        cookies.delete('session_id',{path:'/'})
        return {
            "success":true,
            "message":"Logged out"
        }
    }

} satisfies Actions;