<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';

	import gsap from 'gsap';
	import { fade, fly } from 'svelte/transition';

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

	.alertbar {
		position: absolute;
		height: 100%;
		left: 0;
		background-color: rgba(176, 7, 255, 0.544);
	}

	label {
		position: absolute;
		top: 60px;
		left: 0;
		display: flex;
		transition: all 1s ease-in-out;
		width: 100%;
		justify-content: center;
	}

	.alert {
		position: absolute;
		width: 80%;
		height: auto;
		z-index: 30;
		padding: 10px;
		margin: 10px;
		line-height: 1.8;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		font-family: sans-serif;
		font-weight: 400;
	}

	.alertCheckbox {
		display: none;
	}

	:checked + .alert {
		display: none;
	}

	label :checked {
		opacity: 0;
	}

	.alertText {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		text-align: center;
		font-size: 16px;
	}

	.alertClose {
		float: right;
		align-self: flex-end;
		margin: 0;
		font-size: 15px;
	}

	.clear {
		clear: both;
	}

	.info {
		background-color: rgba(255, 165, 123, 0.495);
		border: 1px solid #ddd;
		color: #ffffff;
		mix-blend-mode: lighten;
		font-weight: 700;
	}
	.shadow {
		z-index: 20;
		width: 100vw;
		position: absolute;
	}
	.bottom {
		bottom: 0px;
		background: linear-gradient(transparent, rgb(90, 147, 201));
	}
	.left {
		left: 0;
		top: 0;
		height: 100vh;
		background: linear-gradient(90deg, rgb(90, 147, 201), transparent);
	}
	.right {
		right: 0;
		top: 0;
		height: 100vh;
		background: linear-gradient(90deg, transparent, rgb(90, 147, 201));
	}
	.top {
		top: 0px;
		background: linear-gradient(rgb(90, 147, 201), transparent);
	}

	main {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		z-index: 20;
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

	.btn {
		position: absolute;
		padding: 8px 12px;
		height: 35px;
		width: 35px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 30;
		transform: translateZ(10px);
		border-radius: 4px;
		background-color: rgba(51, 51, 51, 0.7);
		color: white;
		cursor: pointer;
		transition: all 2s ease-in-out;
	}
	/* Button positions */
</style>
