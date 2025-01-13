import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({cookies, url}) => {
    const accesstoken = cookies.get('session_id')
    let go_to = url.searchParams.get('to')
    if (!["2","3"].includes(go_to)) {
        go_to = null
    }
    return {
        "accessToken": (accesstoken == undefined) ? null : accesstoken,
        "goto": go_to
    };
}