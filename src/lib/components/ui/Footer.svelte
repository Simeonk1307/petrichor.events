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
            <a href={link.url} aria-label={link.linkText}>
                {#if link.linkIcon}
                    <div class="footer-icon">
                        <Icon data={link.linkIcon} scale={2.5} />
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
        background-color: #000;
        color: #fff;
        padding: 20px;
    }

    .title {
        font-size: 3rem;
        font-weight: bolder;
        color: #fff;
        padding-left: 20px;
        margin-bottom: 30px;
    }

    .footer-social {
        float: left;
        margin-bottom: 20px;
        display: flex;
        gap: 0.5rem;
    }

    .footer-social a {
        color: #cfd2d6;
        text-decoration: none;
        font-size: 2rem;
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
        color: #cfd2d6;
        font-size: 2rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .footer-icon {
            display: none;
    }

    @media (max-width: 820px) {
        .footer-social a {
            font-size: 1.5rem;
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
