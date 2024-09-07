import type { Actions, PageServerLoad } from "./$types"

export const load: PageServerLoad  = async ({url, cookies}) => {
    const id = url.searchParams.get("id")

    const accesstoken = cookies.get("session_id")
    return {
        "id" : id,
        "accessToken": (accesstoken == undefined) ? null : accesstoken
    }
}

export const actions = {
    "pay": async ( {request,cookies} ) => {
        // call apply event Paid here
        // check for transactionId. and CAcode is taken only if verified
        console.log("Payed");

    }
} satisfies Actions;
