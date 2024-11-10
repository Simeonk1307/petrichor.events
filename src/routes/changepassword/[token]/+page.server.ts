import { API, POST } from "$lib";
import {  fail, type Actions } from "@sveltejs/kit";


export const actions = {
    
    change: async ({request,cookies, params}) => {
        
        const data = await request.formData();
        const accesstoken = cookies.get("session_id")

        const password = data.get('password')
        const confirm_password = data.get('confirm_pass')
        if (confirm_password != password){
            return fail(400,{"err":"Password doesn't match with confirm password"})
        }

        const response = await POST(`${API.changepassword}${params.token}/`,{
            "new_password":data.get("password")
        },accesstoken)
        .then(res => res.json())
        .then(res => {
            if (res.status == 200){
                if (res.success){
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