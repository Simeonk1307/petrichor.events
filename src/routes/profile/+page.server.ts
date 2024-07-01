import { API, POST } from "$lib"
import { get } from "svelte/store";
import type { Actions, PageServerLoad } from './$types';
import { invalidate, user } from "$lib/stores";

export const load: PageServerLoad  = async ({fetch, cookies}) => {

    const accesstoken = cookies.get("session_id")
    let response;
    if (accesstoken == undefined || get(invalidate)){
        response = await POST(API.whoami,{
            "getUser":true,
            "getEvents":true
        },accesstoken)
        .then(res => res.json())
        .then(res => {
            if (res.status == 200){
                user.set(res)
                invalidate.set(false)
                return {
                    "success":true,
                    "data": res
                }
            }else{
                invalidate.set(true)
                return {
                    "success":false,
                    "message":res.message,
                    "data":{}
                }
            }
        })
        .catch(err => {
            invalidate.set(true)
            return {
                "success":false,
                "message":err.toString(),
                "data":{}
            }
        })
    }else{
        response = {
            "success":true,
            "data": get(user)
        }
    }
    return response
}

export const actions = {
    logout: async ({request,cookies})=> {
        cookies.delete('session_id')
        return {
            "success":true,
            "message":"Logged out"
        }
    }

} satisfies Actions;