
import type { PageServerLoad } from "../profile/$types";


export const load:PageServerLoad= async ({url,cookies}) =>  {
    const param = url.searchParams.get('generate')
    const accesstoken = cookies.get('session_id')
    return {
        "generate": (param == "true") ? true : (param == "false") ? false : null ,
        "access_token":(accesstoken == undefined) ? null : accesstoken
    };
}