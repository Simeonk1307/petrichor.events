import type { PageServerLoad } from "../profile/$types";


export const load:PageServerLoad= ({url,cookies}) => {
    return {
        "generate":(url.searchParams.get('generate') == "true") ?? false,
        "access_token":cookies.get('session_id')
    };
}