import { workshops } from "$lib/data/workshop";
import { error } from "@sveltejs/kit";

export function load({ params }){
    if(Object.keys(workshops).indexOf(params.workshop) == -1){
        error(404, "Not Found")
    }
    return {
        id: params.workshop,
        workshop: workshops[params.workshop]
    };
}