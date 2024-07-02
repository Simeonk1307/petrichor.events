import menuIcon from '$lib/assets/svgs/menu.svg';
import arrowUpIcon from '$lib/assets/svgs/arrowup.svg';
import facebookIcon from '$lib/assets/svgs/facebook.svg';
import twitterIcon from '$lib/assets/svgs/twitter.svg';
import mediumIcon from '$lib/assets/svgs/medium.svg';
import contactIcon from '$lib/assets/svgs/contact.svg';

export const headerItems = {
    title: 'Petrichor',
    menuIcon: menuIcon,
    links: [
        {
            url: '#about-us',
            linkText: 'About Us'
        },
        {
            url: '#events',
            linkText: 'Event'
        },
        {
            url: '#workshop',
            linkText: 'Workshop'
        },
        {
            url: 'schedule',
            linkText: 'Schedule'
        },
        {
            url: 'merch',
            linkText: 'Merch'
        },
    ]
}


export const footerItems = {
    title: 'Petrichor 25',
    btpIcon: arrowUpIcon,
    links: [
        {
            url: 'https://www.facebook.com',
            linkText: 'Facebook',
            linkIcon: facebookIcon
        },
        {
            url: 'https://www.twitter.com',
            linkText: 'Twitter',
            linkIcon: twitterIcon
        },
        {
            url: 'https://www.medium.com',
            linkText: 'Medium',
            linkIcon: mediumIcon
        },
        {
            url: 'contact',
            linkText: 'Contact',
            linkIcon: contactIcon
        }
    ]
}