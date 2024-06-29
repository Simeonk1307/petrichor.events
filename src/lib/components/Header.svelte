<script>
    export let data;
    let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<header>
    <div class="title">{data.title}</div>
    <nav class="menu">
        {#each data.links as link}
            <a href={link.url} aria-label={link.linkText}>{link.linkText}</a>
        {/each}
    </nav>
    <button class="menu-icon" on:click={toggleMenu} aria-label="Toggle menu">
        <img src={data.menuIcon} alt="Menu Icon" />
    </button>
</header>

<div class="popup-menu {showMenu ? 'show' : ''}">
    <nav class="popup-nav">
        {#each data.links as link}
            <a href={link.url} aria-label={link.linkText} on:click={() => showMenu = false}>{link.linkText}</a>
        {/each}
    </nav>
</div>

<style>
    header {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        z-index: 1000;
        padding: 1.8rem 3rem;
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
    }

    .menu {
        display: flex;
        gap: 1.5rem;
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
</style>
