<script>
    export let data;

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

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

    .footer-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
    }

    .footer-social {
        float: left;
        margin-bottom: 20px;
        display: flex;
        gap: 1rem;
    }

    .footer-social a {
        color: #cfd2d6;
        text-decoration: none;
        font-size: 2rem;
        font-weight: bolder;
        display: flex;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    }

    .footer-social a:hover {
        color: #27bcda;
    }

    img {
        width: 38px;
        height: 38px;
        color: #fff;
        display: inline;
    } 

    .footer-social img {
        display: none;
    }

    .footer-back-to-top {
        float: right;
        color: #cfd2d6;
        padding-left: 20px;
        padding-right: 20px;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bolder;
        display: flex;
        align-items: center;
    }

    .footer-back-to-top:hover {
        color: #27bcda;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 2.5rem;
        }

        .footer-social a {
            font-size: 1.5rem;
        }

        .footer-social a .text {
            display: none;
        }

        .footer-social img {
            display: inline;
        }

        .footer-back-to-top {
            display: none;
        }
    }
</style>

<footer>
    <div class='title'>{data.title}</div>

    <div class='footer-links'>
        <div class="footer-social">
            {#each data.links as link}
                <a href={link.url} aria-label={link.linkText}>
                    <img src={link.linkIcon} alt={link.linkText} />
                    <span class="text">{link.linkText}</span>
                </a>
            {/each}
        </div>
        <a class='footer-back-to-top' href="#top" on:click={scrollToTop}>
            <img src={data.btpIcon} alt='bb'/>
            Back To The Top
        </a>
    </div>
</footer>
