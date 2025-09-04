<script lang="ts">
    import HeroSection from '$lib/components/homepage/HeroSection.svelte';
    import AboutSection from '$lib/components/homepage/AboutSection.svelte';
    import EventSection from '$lib/components/homepage/event_section/EventSection.svelte';
    import Footer from '$lib/components/ui/Footer.svelte';
    import { access_token, loggedIn } from '$lib/stores';
    import { getContext, onMount } from 'svelte';
	import { footerLinks } from '$lib/helper.js';

    export let data;
    const getData: Function = getContext('getData');
    
    onMount(() => {
        if (!$loggedIn) {
            getData();
        }
        access_token.set(data.accessToken);
    });
</script>

<div class="maincontent">
    <section id="hero">
        <HeroSection />
    </section>
    
    <section id="about">
        <AboutSection />
    </section>

    <section id="events-and-footer">
        <EventSection />
        <Footer title = 'Petrichor 26' links={footerLinks}/>
    </section>
</div>

<style>
    * {
        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    .maincontent {
        height: 100vh;
        overflow-y: scroll; 
        scroll-snap-type: y mandatory; 
    }

    .maincontent > section {
        height: 100vh;
        width: 100%;

        scroll-snap-align: start; 

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden; 
    }

    #events-and-footer {
        height: auto; 
        align-items: top;
        flex-direction: column;
        justify-content: flex-start;
        overflow-y: auto;
    }
</style>