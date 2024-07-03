import { get } from "svelte/store"
import { invalidate, refreshCount } from "./stores"

const backend_url = 'http://127.0.0.1:8000/'
// const backend_url = 'https://petrichor-backend.vercel.app/'

export const API = {
    login: backend_url + 'api/login/',
    register: backend_url + 'api/register/',
    // logout: backend_url + 'web/logout/',
    events_apply_paid: backend_url + 'api/events/apply/paid',
    events_apply_free: backend_url + 'api/events/apply/free',
    feedback: backend_url + 'api/send_grievance',
    // user: backend_url + "web/user/",
    whoami: backend_url + "api/auth/",
    event: backend_url + "api/event/",
    // verifyCA: "https://pcap-back-production.up.railway.app/api/events/verify",
    generateCA: backend_url + 'api/auth/CA/create/',
    
    hasAddress: backend_url + 'hasaddress/',
    addAddress: backend_url + 'address/add/',
    getAddress: backend_url + 'address/get/',
    merchPay: backend_url + 'payment/make/',
}


export const readID = (id: string) => {
    return {
        // TF01
        'type': id[0],
        'paid': id[1] == 'P',
        'index': Number(id[2] + id[3])
    }
}


export const readToken = () => {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        if (cookie.startsWith('token=')) {
            return cookie.substring(6);
        }
    }
    
    return null;
}

export const setToken = (token: string, expirationDays: number) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    const expires = expirationDays ? `expires=${expirationDate.toUTCString()}` : '';

    document.cookie = `token=${token}; ${expires}; path=/`;
   
}

export const deleteToken = () =>{
    try {
        document.cookie="token=;expires=Thu, 01 Jan 2000 00:00:01 GMT"
    } catch (error) {
        console.log(error)
    }
}


/**
 * 
 * @param url 
 * @param body 
 * @param accesstoken the access token from cookie. 
 * This is easier as cookie is sent to page.server.ts actions so on can 
 * easily retrieve the token from there
 * @returns 
 */
export async function POST(url: string, body: any,accesstoken:string | undefined) {
    
    
    return await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Authorization': (accesstoken != null && accesstoken != undefined) ?
                     `Bearer ${accesstoken}` : ""
        },
        mode:'cors',
        body: JSON.stringify(body)
    })
}


export function titleCase(inputString: string) {
    // return inputString
    // Split the input string into an array of sentences
    const sentences = inputString.split('.');
  
    // Capitalize the first word of each sentence
    const titleSentences = sentences.map(sentence => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1)
    });
  
    // Join the sentences back into a single string
    const titleString = titleSentences.join('. ');
  
    return titleString;
}


export const tmp_data = {
        title: 'Petrichor25',
        links:[
            {
                url: '#',
                linkText: 'About Us',
                linkIcon: 'none'
            },
            {
                url: '#',
                linkText: 'Event',
                linkIcon: 'none'
            },
            {
                url: '#',
                linkText: 'Workshop',
                linkIcon: 'none'
            },
            {
                url: '#',
                linkText: 'Schedule',
                linkIcon: 'none'
            },
            {
                url: '#',
                linkText: 'Merch',
                linkIcon: 'none'
            },
        ],
        btpIcon:'none'
    }


export const footer = {
    title: 'Petrichor25',
    links:[
        {
            url: '#',
            linkText: 'Facebook',
            linkIcon: ''
        },
        {
            url: '#',
            linkText: 'Twitter',
            linkIcon: ''
        },
        {
            url: '#',
            linkText: 'Contact',
            linkIcon: ''
        }
    ],
    btpIcon:'none'
}

/**
 * Invalidates Login and returns false if not loggedIn else returns true
 * @param accesstoken: acccess token from the cookie
 */
export async function invalidateLogin(accesstoken:string | undefined | null) {
    let response = false
    refreshCount.update((n) => n+1)
    if (accesstoken === undefined || accesstoken === null){
        response = false
        invalidate.set(true)
    }else if (get(refreshCount) < 6){
        // @ts-ignore
        response = true
    }else{
        refreshCount.set(1)
        response  = await POST(API.whoami,{
            "getUser":false,
            "getEvents":false
        },accesstoken)
        .then(res => res.json())
        .then((res) => {
            if (res.status == 200){
                // invalidate 
                invalidate.set(false)
                return true
            }else{
                invalidate.set(true)
                return false
            }
        })
        .catch ((err) => {
            // console.log(err.toString())
            invalidate.set(true)
            return false
        })
    }
    return response
}