<script lang="ts">
    import type { Link } from '../../types';
    import Icon from 'svelte-awesome/components/Icon.svelte';

    export let title: string;
    export let links: Array<Link> = [];
</script>

<footer>
    <div class='title'>{title}</div>

    <div class="footer-social">
        {#each links as link, index}
            <a href={link.url} aria-label={link.linkText} target="_blank">
                {#if link.linkIcon}
                    <div class="footer-icon">
                        <Icon data={link.linkIcon} scale={1.5} />
                    </div>
                {/if}
                <span class="text">{link.linkText}</span>
            </a>
            {#if index < links.length - 1}
                <span class="separator">|</span>
            {/if}
        {/each}
    </div>
</footer>

<style>
    footer {
        /* background-color: transparent; */
        background-color: rgb(19, 0, 30);
        color: #fff;
        margin: 20px 20px;
        box-sizing: border-box;
        z-index: 11;
        width: 100vw;
        mix-blend-mode: hard-light;
        position: relative;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        font-size: 2rem;
        font-weight: bolder;
        /* color: #fff; */
        font-family: var(--wfont);
        padding-left: 10px;
        margin-bottom: 20px;
    }

    .footer-social {
        /* float: left; */
        display: flex;
        gap: 0.5rem;
    }

    .footer-social a {
        color: #cfd2d6;
        text-decoration: none;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        font-weight: bolder;
        padding-left: 10px;
        padding-right: 10px;
        transition: color 0.3s ease;
    }

    .footer-social a:hover {
        color: #910cea;
    }

    .separator {
        /* color: #cfd2d6; */
        font-size: 2rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .footer-icon {
            display: none;
            background-color: transparent;
    }

    @media (max-width: 820px) {
        footer{
            padding: 10px;
            width: unset;
        }
        .title{
            margin-bottom: 10px;
        }
        .footer-social a {
            font-size: 1rem;
        }

        .footer-social a .text {
            display: none;
        }

        .separator {
            display: none;
        }

        .footer-icon {
            display: inline;
        }
    }

</style>
