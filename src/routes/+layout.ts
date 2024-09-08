import type { PageServerLoad } from "./home/$types"

export const load : PageServerLoad = ({ url }) => {
    return {
      url: url.pathname,
    }
  }