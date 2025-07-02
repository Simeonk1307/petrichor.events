<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';

	let slideHero: Function;
	let slideAbout: Function;
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
		window.onscroll = (e) => {
			let val = window.scrollY;
			// console.log(val)
			if (slideHero) {
				slideHero(val);
			}
			if (slideAbout) {
				slideAbout(val);
			}
		};
		access_token.set(data.accessToken);
	});
</script>

<div class="maincontent {visible ? 'visible' : ''}">
	<HeroSection bind:pageWidth bind:slide={slideHero} toAnimate={false} />
	<div class="card about">
		<AboutSection bind:slidePhoto={slideAbout} />
	</div>
	<div class="card event">
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
</div>

<style>
	* {
		user-select: none;
		-ms-user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
	}

	
	.maincontent {
		display: grid;
		/* overflow: hidden; */
		grid-template-columns: auto auto;
	}
	.card {
		display: flex;
		justify-content: center;
		overflow: auto;
		align-items: center;
		width: 100vw;
		top: 0;
		z-index: 20;
		position: relative;
		height: 100vh;
	}
	.visible {
		opacity: 100% !important;
	}
	.event {
		overflow: auto;
	}
</style>
