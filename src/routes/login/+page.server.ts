import { API, POST } from "$lib";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { rss } from "svelte-awesome/icons";

export const load: PageServerLoad = async ({url,cookies}) => {
    let nextpg = url.searchParams.get('to')
    // console.log(nextpg)
    if (nextpg != null){
        if (!["/CA/welcome?generate=true","/profile","/CA/profile"].includes(nextpg)){
            nextpg = null
        }
    }
    // console.log(nextpg)

    const accesstoken = cookies.get('session_id')
	return {
        "nextpg" : nextpg,
        "accessToken": (accesstoken == undefined) ? null : accesstoken
	};
};

const MAX_AGE = 30 * 24 * 3600 // 30 days expiry. 

export const actions = {
    
    login: async ({request,cookies}) => {
        
        const data = await request.formData();
        const accesstoken = cookies.get("session_id")

        const response = await POST(API.login,{
            "username":data.get("email"),
            "password":data.get("password")
        },accesstoken)
        .then(res => res.json())
        .then(res => {
            if (res.status == 200){
                if (res.success){
                    const currTime = new Date();
                    currTime.setSeconds(currTime.getSeconds() + MAX_AGE)
                    cookies.set("session_id",res.token,{
                        secure:true,
                        // httpOnly:true,
                        maxAge: MAX_AGE,
                        expires:currTime
                    })
                    return res
                }else{
                    return fail(400,{...res,"err":res.message})
                }
            }else{
                return fail(400,{...res,"err":res.message})
            }
        })
        .catch(err => {
            return fail(400,{
                "success":false,
                "err":err.toString(),
            })
        })

        return response

    }
} satisfies Actions;