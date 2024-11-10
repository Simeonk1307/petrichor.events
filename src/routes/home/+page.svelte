<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let slideHero:Function;
	let slideAbout:Function;
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
		window.onscroll = (e)=>{
			let val = window.scrollY
			// console.log(val)
			if (slideHero){
				slideHero(val)
			}
			if (slideAbout){
				slideAbout(val)
			}
		}
		access_token.set(data.accessToken);
	});
</script>

<div class="maincontent {visible ? 'visible' : ''}">
	<HeroSection bind:pageWidth bind:slide={slideHero} toAnimate={false}/>
	<!-- <div class="card hero"> -->
        <!-- CARD 1 -->
	<!-- </div> -->
	<div class="card about">
        <!-- CARD 2 -->
		<AboutSection bind:slidePhoto={slideAbout}/>
	</div>
	<div class="card event">
        <!-- CARD 3 -->
		<div class="gradient-bg">
			<div class="gradients-container extra">
				<div class="g" id="g3-1" />
			</div>
			<div class="gradients-container extra">
			  <div class="g" id="g4-1" />
			</div>
		  </div>
		<!-- <Event bind:pageWidth /> -->
		<Workshop />
	</div>
	<!-- <a  href="/login">Login</a> -->
</div>

<style>
.card{
        display: flex;
        justify-content: center;
        overflow-x: hidden;
        align-items: center;
        /* background-color: rgba(255, 200, 100); */
		background-color: transparent;
        position: sticky;
        top: 0;
        height: 100vh;
		overflow-y: hidden;
    }
	.event{
		padding-top: 3em;
	}
	.visible {
		opacity: 100% !important;
	}
	.card:nth-child(3){
		display: flex;
		flex-direction: column;
		height: fit-content;
		top: 0;
		position: sticky;
	}
	@media(max-width:600px){
		.card:nth-child(3){
			height: fit-content;
			/* overflow-y: visible; */
		}
	}

	/* Background */
	#g4-1 {
		background: radial-gradient(
				farthest-corner at 55% 50%,
				rgba(var(--color4), 0.5) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		width: 100vw;
		top: 0%;
		height: 100vw;
	}

	/* Background */
	#g3-1 {
		background: radial-gradient(
				farthest-corner at 75% 50%,
				rgba(var(--color4), 0.5) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		width: 100vw;
		top: 0%;
		height: 100vw;
	}
</style>
