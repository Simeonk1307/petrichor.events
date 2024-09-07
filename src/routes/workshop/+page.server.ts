import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url,cookies}) => {
    // console.log(nextpg)

    const accesstoken = cookies.get('session_id')
	return {
        "accessToken": (accesstoken == undefined) ? null : accesstoken
	};
};