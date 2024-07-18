
// const backend_url = 'http://127.0.0.1:8000/'
const backend_url = 'https://petri-back.vercel.app/'
// const backend_url = 'https://petrichor-backend.vercel.app/'

export const API = {
    login: backend_url + 'api/login/',
    register: backend_url + 'api/register/',
    forgotpassword: backend_url + 'api/forget-password/',
    changepassword: backend_url + 'api/change-password/',
    events_apply_paid: backend_url + 'api/events/apply/paid',
    events_apply_free: backend_url + 'api/events/apply/free',
    feedback: backend_url + 'api/send_grievance',
    whoami: backend_url + "api/auth/",
    event: backend_url + "api/event/",
    // verifyCA: "https://pcap-back-production.up.railway.app/api/events/verify",
    generateCA: backend_url + 'api/auth/CA/create/',

    hasAddress: backend_url + 'hasaddress/',
    addAddress: backend_url + 'address/add/',
    getAddress: backend_url + 'address/get/',
    merchPay: backend_url + 'payment/make/',
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
export async function POST(url: string, body: any, accesstoken: string | undefined) {

    return await fetch(url, {
        method: 'POST',
        // @ts-ignore
        headers: {
            'Content-type': 'application/json',
            'Authorization': (accesstoken != null && accesstoken != undefined) ?
                `Bearer ${accesstoken}` : ""
        },
        credentials: 'include',
        mode: 'cors',
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
    links: [
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
    btpIcon: 'none'
}


export const footer = {
    title: 'Petrichor25',
    links: [
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
    btpIcon: 'none'
}

export const defaultUser = {user_data:{email:"",CACode:"",gradYear:0,institute:"",phone:"",registrations:-1,stream:"",username:""},user_events:[]}


