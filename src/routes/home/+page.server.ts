import { API, POST } from "$lib";
import { invalidate, refreshCount } from "$lib/stores";
import { get } from "svelte/store";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({cookies}) => {

    const accesstoken = cookies.get("session_id")
    let response = false
    refreshCount.update((n) => n+1)
    if (accesstoken === undefined){
        response = true
        invalidate.set(true)
    }else if (get(refreshCount) >= 6){
        refreshCount.set(1)
        invalidate.set(false)
    }else{
        response  = await POST(API.whoami,{
            "getUser":false,
            "getEvents":false
        },accesstoken)
        .then(res => res.json())
        .then((res) => {
            if (res.status == 200){
                // invalidate 
                invalidate.set(false)
                return false
            }else{
                invalidate.set(true)
                return true
            }
        })
        .catch ((err) => {
            console.log(err.toString())
            invalidate.set(true)
            return true
        })
    }
    return {
        "invalidate" : response
    }
}