import { invalidateLogin } from "$lib";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({cookies}) => {
    // @ts-ignore
    return { "loggedIn" :await invalidateLogin(cookies.get('session_id')) }
}