import { API, POST } from "$lib";
import { error, fail, type Actions } from "@sveltejs/kit";


export const actions = {
    feedback: async ({request,cookies}) => {
        const data = await request.formData();

        const response = await POST(API.feedback,{
            "name":data.get("name"),
            "email":data.get("email"),
            "content":data.get("content")
        },undefined)
        .then(res => res.json())
        .then((res)=> {
            // console.log(res)
            if (res.status == 200){
                return {
                    "success":true
                }
            }else{
                return fail(400,{
                    "success":false,
                    "err":res.message
                }
                )
            }

        })
        .catch((err)=> fail(400,{
                "success":false,
                "err":"Unable to resolve the response. Please re-try after sometime",
            })
        )

        return response
    }
} satisfies Actions