<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { invalidate, loggedIn } from "$lib/stores";
    import type { Link } from '../../types';
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import ellipsisV from 'svelte-awesome/icons/ellipsisV';
    import userO from 'svelte-awesome/icons/userO';

    export let title: string;
    export let links: Array<Link> = [];

    let showMenu: boolean = false;
    let popupMenuPosition: { top: number, right: number } = { top: 0, right: 0 };

    function toggleMenu() {
        showMenu = !showMenu;
        updatePopupMenuPosition();
    }

    function handleScroll() {
        if (showMenu) {
            showMenu = false;
            updatePopupMenuPosition();
        }
    }

    function handleClickOutside(event: MouseEvent) {
        const menuButton = document.querySelector('.menu-icon');
        const popupMenu = document.querySelector('.popup-menu');
        if (showMenu && !popupMenu?.contains(event.target as Node) && !menuButton?.contains(event.target as Node)) {
            showMenu = false;
            updatePopupMenuPosition();
        }
    }

    function updatePopupMenuPosition() {
        const menuButton = document.querySelector('.menu-icon');
        if (menuButton) {
            const rect = menuButton.getBoundingClientRect();
            popupMenuPosition = { top: rect.bottom + 40, right: window.innerWidth - rect.right - 10 };
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    });

    $: {
        if (showMenu) {
            updatePopupMenuPosition();
        }
    }
</script>

{#if links.length > 0}
<header>
    <a class="title" href="/home">{title}</a>
    <nav class="menu">
        {#each links as link}
            <a href={link.url} aria-label={link.linkText}>{link.linkText}</a>
        {/each}
    </nav>
    <a class="account" href={($invalidate || !$loggedIn) ? `/login/?to=${($page).url.pathname}` : '/profile'}>
        <Icon data={userO} scale={1.5}/>
    </a>
    <button class="menu-icon" on:click={toggleMenu} aria-label="Toggle menu">
        <Icon data={ellipsisV} scale={1.6}/>
    </button>
</header>

<div class="popup-menu {showMenu ? 'show' : 'hide'}" style={`top: ${popupMenuPosition.top}px; right: ${popupMenuPosition.right}px;`}>
    <nav class="popup-nav">
        {#each links as link}
            <a href={link.url} aria-label={link.linkText} on:click={() => showMenu = false}>{link.linkText}</a>
        {/each}
    </nav>
</div>

{:else}
<header>
    <div class="title">{title}</div>
</header>
{/if}

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
        flex: 6;
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

    .account {
        flex: 1;
        display: flex;
        justify-content: center;
        transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1), filter 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .account:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
    }

    @media (max-width: 900px) {
        header {
            justify-content: left;
        }

        .menu {
            display: none;
        }
        
        .menu-icon {
            display: flex;
            padding-left: 10px;
            color: #fff;
            margin-right: 10px;
            justify-content: center;
            transition: filter 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .menu-icon:hover {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
        }

        .title {
            flex: 8;
            padding-left: 2rem;
        }

        .account {
            flex: 1;
            padding-right: 10px;
        }

    }

    .popup-menu {
        display: flex;
        position: fixed;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        z-index: 1001;
        border-radius: 10px;
        padding: 10px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    }

    .popup-menu.show {
        max-height: 500px;
        padding: 10px;
    }

    .popup-menu.hide {
        max-height: 0;
        padding: 0;
    }

    .popup-nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .popup-nav a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        padding: 10px 0;
        font-size: 1.2rem;
        color: #fff;
        font-weight: bolder;
        position: relative;
        width: 100%;
    }

    .popup-nav a:not(:last-child)::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.3);
        position: absolute;
        bottom: 0;
    }

    .popup-nav a:hover {
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
    }
</style>