import { API } from '$lib/index'
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

/** @type {import('./$types').Actions} */

export const actions = {	
    register: async ({request}) => {

      const data = await request.formData();
      let gradyear = data.get('gradyear')?.valueOf()
      if (data.get('institype') == 'school'){
         gradyear = 2025 + (12 - Number(gradyear))
      }

      if (data.get('institype') == 'neither'){
        gradyear = 0;
      }

      const username = data.get('username')
      const length = username?.toString().length ?? 26
      if (length > 25){
        return fail(400,{"err":`Username cannot be greater than 9 characters. Given length: ${length}`})
      }

      const response = await fetch(API.register,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          "username":data.get('username'),
          "email":data.get('email'),
          "password":data.get('password'),
          "phone":data.get('phone'),
          "college":data.get('college'),
          "gradyear":gradyear,
          "institype":data.get('institype'),
          "stream":data.get('stream')
        }) 
      })
      .then(res => res.json())
        .then(res => {
            if (res.status == 200){
                if (res.success){
                }else{
                    return fail(400,{...res,"err":res.message})
                }
            }else{
                return fail(400,{...res,"err":res.message})
            }
            return res
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