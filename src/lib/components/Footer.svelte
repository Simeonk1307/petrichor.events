<script lang="ts">
	import type { data } from "$lib/types";
	import { onMount } from "svelte";

    export let data: data;

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<footer>
    <div class='title'>{data.title}</div>

    <div class='footer-links'>
        <div class="footer-social">
            {#each data.links as link}
                <a href={link.url} aria-label={link.linkText}>
                    {link.linkText}
                </a>
            {/each}
        </div>
        <a class='footer-back-to-top' href="#top" on:click={scrollToTop}>
            Back To The Top
        </a>
    </div>
</footer>

<style>
    footer {
        background-color: #000;
        color: #fff;
        padding: 10px 0;
        margin: 10px 0;
    }

    .title {
        font-size: 1.5rem;
        font-weight: bolder;
        color: #fff;
        padding-left: 20px;
    }

    .footer-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
    }

    .footer-social {
        float: left;
        display: flex;
        gap: 5px;
    }

    .footer-social a {
        color: #cfd2d6;
        display: flex;
        align-items: center;
        margin-top: 5px;
        padding: 5px 10px;
        border-right: white solid 0.5px;
    }

    .footer-social a:hover {
        color: #ff0080;
    }


    .footer-back-to-top {
        float: right;
        color: #cfd2d6;
        padding: 0 20px;
        text-decoration: none;
        font-size: calc(11px + 0.2vw);
        font-weight: bolder;
        display: flex;
        align-items: center;
    }

    .footer-back-to-top:hover {
        filter: invert(64%) sepia(20%) saturate(3560%) hue-rotate(318deg) brightness(102%) contrast(101%);
    }


    @media (max-width:700px){
        .footer-social{
            display: flex;
            flex-wrap: wrap;
        }
    }

    @media (max-width: 900px) {
        .title {
            font-size: 1rem;
        }
        footer{
            padding: 0;
            padding-top: 5px;
        }


        /* .footer-back-to-top {
            display: none;
        } */
    }
</style>
