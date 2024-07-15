import { API, POST } from "$lib";
import { invalidate } from "$lib/stores";
import { get } from "svelte/store";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({cookies}) => {
    const accesstoken = cookies.get('session_id')
	return {
        "accessToken": (accesstoken == undefined) ? null : accesstoken
	};
}