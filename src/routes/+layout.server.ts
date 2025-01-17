import type { PageServerLoad } from "./home/$types"

export const load : PageServerLoad = ({ url, cookies}) => {
    let token = null
    if (cookies != null) {  
      token = cookies.get('session_id')
    } 
    return {
      url: url.pathname,
      access_token: token
    }
  }