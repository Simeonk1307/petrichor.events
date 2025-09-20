import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({cookies}) => {
    const accesstoken = cookies.get('session_id')
    return { 
        "accessToken": (accesstoken == undefined) ? null : accesstoken
    }
}
