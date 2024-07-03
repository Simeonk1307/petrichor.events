<script>
	import { page } from "$app/stores";
	import { invalidate } from "$lib/stores";

    export let data;
    let showMenu = false;
    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<header>
    <a class="title" href="/home">{data.title}</a>
    <nav class="menu">
        {#each data.links as link}
            <a href={link.url} aria-label={link.linkText}>{link.linkText}</a>
        {/each}
    </nav>
    <button class="menu-icon" on:click={toggleMenu} aria-label="Toggle menu">
        <img src={data.menuIcon} alt="Menu Icon" />
    </button>
    <a class="account" href={$invalidate ? `/login/?to=${($page).url.pathname}` : '/profile'}>
        <svg width="20px" height="20px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" >

            <g id="Shopicon">
                <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
                    c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
                    s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"
                    stroke="white" fill="white"/>
            </g>
            </svg>
    </a>
</header>

<div class="popup-menu {showMenu ? 'show' : 'close'}">
    <nav class="popup-nav">
        {#each data.links as link}
            <a href={link.url} aria-label={link.linkText} on:click={() => showMenu = false}>{link.linkText}</a>
        {/each}
    </nav>
</div>

<style>
    header {
        position: fixed;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        top: 0;
        z-index: 1000;
        padding: 1.2rem 0;
        padding-right: 3rem;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        margin: 0 1.5rem;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .title {
        font-size: 1.5rem;
        font-weight: bolder;
        color: #fff;
        padding-left: 3rem;
        flex: 1;
    }

    .menu {
        display: flex;
        justify-content: space-evenly;
        padding: 0 5em;
        flex: 5;
    }
    .account{
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .menu a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        position: relative;
        height: 100%;
        width: 100px;
        text-align: center;
        font-size: 15px;
        color: #fff;
        font-weight: 400;
        transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
        transform-origin: center;
    }

    .menu a:hover {
        transform: scale(1.2);
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        font-weight: bolder;
    }

    .menu-icon {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .menu {
            display: none;
        }
        
        .menu-icon {
            display: block;
        }
    }

    .popup-menu {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
        z-index: 1001;
        justify-content: center;
        align-items: center;
    }

    .popup-menu.show {
        display: flex;
    }

    .popup-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .popup-nav a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        margin: 1rem 0;
        font-size: 2rem;
        color: #fff;
        font-weight: bolder;
        transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .popup-nav a:hover {
        transform: scale(1.2);
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
    }

    @media (max-width:900px){
        header{
            padding: 0.6rem 0;
        }
        .title{
            font-size: 15px;
        }
        .menu{
            gap: 5px;
            padding-right: 1em;
        }
        .title{
            padding-left: 1.5em;
        }
        .menu a{
            font-size: 11px;
        }
    }
</style>
