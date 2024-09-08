<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;

	export let data;
	const getData: Function = getContext('getData');
	let pageWidth = 0;
	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 10);
		if (!$loggedIn) {
			getData();
		}
		pageWidth = window.innerWidth;
		window.onresize = () => {
			pageWidth = window.innerWidth;
		};
		access_token.set(data.accessToken);
	});
</script>

<div class="maincontent {visible ? 'visible' : ''}">
	<div class="card hero">
		<HeroSection bind:pageWidth />
        <!-- CARD 1 -->
	</div>
	<div class="card about">
        <!-- CARD 2 -->
		<AboutSection />
	</div>
	<div class="card event">
        <!-- CARD 3 -->
		<Event bind:pageWidth />
	</div>
	<div class="card workshop">
        <!-- CARD 4 -->
		<Workshop />
	</div>
	<!-- <a  href="/login">Login</a> -->
</div>

<style>
	.maincontent {
        /* position: absolute; */
		/* display: flex; */
		/* grid-template-areas: 'stack'; */
		/* flex-direction: column;
		z-index: 11;
		opacity: 0%;
		background-color: transparent;
		overflow-x: hidden;
		transition: 1000ms; */
	}
	.maincontent > * {
		/* grid-area: stack; */
	}
    .card{
        display: flex;
        justify-content: center;
        overflow-x: hidden;
        align-items: center;
        /* background-color: rgba(255, 200, 100); */
        position: sticky;
        top: 0;
        height: 100vh;
    }
    .hero{
        /* z-index: 5; */
    }
    .about{
        /* z-index: 4; */
    }
    .event{
        /* z-index: 3; */
    }
    .workshop{
        /* z-index: 2; */
    }
	.visible {
		opacity: 100% !important;
	}
</style>
