import { API, POST } from "$lib";
import { invalidate, refreshCount } from "$lib/stores";
import { get } from "svelte/store";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({cookies}) => {
    
}