<script lang="ts">
    import HeroSection from '$lib/components/homepage/HeroSection.svelte';
    import AboutSection from '$lib/components/homepage/AboutSection.svelte';
    import EventSection from '$lib/components/homepage/event_section/EventSection.svelte';
	import TeamSection from '$lib/components/homepage/team_section/TeamSection.svelte';
    import { access_token, loggedIn } from '$lib/stores';
    import { getContext, onMount } from 'svelte';

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

    <section id="events">
        <EventSection />
    </section>

    <section id="team">
		<TeamSection />
	</section>
</div>

<style>
    * {
        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    /* 1. Make the main container a scroll-snap container */
    .maincontent {
        height: 100vh; /* Must be the height of the viewport */
        overflow-y: scroll; /* Enable scrolling on this element */
        scroll-snap-type: y mandatory; /* Snap on the Y-axis, and it's mandatory */
    }

    /* 2. Define each section as a snap point */
    .maincontent > section {
        /* Sizing: Each section is a full-screen slide */
        height: 100vh;
        width: 100%;

        /* Snapping Behavior */
        scroll-snap-align: start; /* Snap the top of the section to the top of the container */

        /* Centering Content (Highly Recommended) */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; /* Needed for absolute positioning of children like the gradient */
        overflow: hidden; /* Hide anything that overflows the slide */
    }

	#team {
		height: auto; /* Allows the section to be the height of its content */
		align-items: flex-start; /* Aligns the content to the top instead of center */
	}
</style>