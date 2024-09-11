import { API, POST } from "$lib";
import {  fail, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({params}) => {
    return {"message":params.m}
}
