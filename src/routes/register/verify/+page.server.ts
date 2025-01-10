import { API, POST } from "$lib";
import type { PageServerLoad } from "./$types";
import {  fail, type Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async ({url,cookies}) => {
    let email = url.searchParams.get('email')
    
    // console.log(email)
    return {
        "email" : email
    };
};

export const actions = {
    default: async ({request,cookies}) => {
        console.log("hello");
        const data = await request.formData();

        const response = await POST(API.reverify,{"email":data.get("email")}, undefined)
        .then(res => res.json())
        .then(res => {
            if (res.status == 200) {
                return res
            } else {
                return fail(400, {"message": res.message})
            }
        })
        .catch(err => {
            return fail(400,{
                "success":false,
                "err":"Unable to resolve the response. Please re-try after sometime"
            })
        })

        return response;
    }
} satisfies Actions;