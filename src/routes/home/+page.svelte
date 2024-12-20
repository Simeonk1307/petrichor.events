<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import dot from '$lib/assets/dot.png';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';

	import gsap from 'gsap';

	let slideHero: Function;
	let slideAbout: Function;
	let visible = false;
	let btn1 = 'About';
	let btn2 = 'Workshop';
	let btn3 = 'Event';

	let homeDiv: HTMLElement;
	let aboutDiv: HTMLElement;
	let eventDiv: HTMLElement;
	let workshopDiv: HTMLElement;
	let mainDiv: HTMLElement;

	let currentComponent: number = 1;

	// 1 : right
	// 2: bottom- right
	// 3: bottom
	// 4: bottom-left
	// 5: left
	// 6: top-left
	// 7: top
	// 8: top-right
	let next = {
		1: {
			1: 2,
			2: 4,
			3: 3
		},
		2: {
			3: 4,
			4: 3,
			5: 1
		},
		3: {
			7: 1,
			8: 2,
			1: 4
		},
		4: {
			5: 3,
			7: 2,
			6: 1
		}
	};

	// let id={
	//     1:1,
	//     2:2,
	//     3:3,
	//     4:4
	// }

	let elementMap: { [key: number]: HTMLElement } = {};
	let screenWidth: number;
	let screenHeight: number;
	let cursor: HTMLElement;

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
			screenWidth = pageWidth;
			screenHeight = window.innerHeight;
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

		screenWidth = window.innerWidth;
		screenHeight = window.innerHeight;

		// Initialize elementMap with HTML elements
		elementMap = {
			1: homeDiv,
			2: aboutDiv,
			3: eventDiv,
			4: workshopDiv
		};
		let speedx = 0;
		let speedy = 0; 
		let prevX = 0 , prevY = 0;
		let x: string | number | NodeJS.Timeout | undefined;
		window.onmousemove = (e) => {
			clearInterval(x);
			if (cursor) {
				cursor.style.top = `${e.clientY}px`;
				cursor.style.left = `${e.clientX}px`;
			}
			speedx += (e.clientX - prevX)
			speedy += (e.clientY - prevY)
			prevX = e.clientX
			prevY = e.clientY
			console.log (speedx + "__" + speedy)
			x = setInterval(() => {
				if (cursor) {
					cursor.style.top = `${cursor.style.top + speedy}px`;
					cursor.style.left = `${cursor.style.left + speedx}px`;
				}
				speedx *= 0.001
				speedy *= 0.001
				console.log (speedx + " " + speedy)
				if (Math.abs(speedx) <= 1 && Math.abs(speedy) <= 1) {
					clearInterval(x)
					speedx = 0; speedy = 0
				}
			}, 5);
		};
		
	});

	function change(currentId: number, dir: number) {
		// if (isTransitioning) return;
		console.log(currentId);

		const currentElement = elementMap[currentId];
		const nextId = next[currentId][dir];
		const nextElement = elementMap[nextId];
		console.log(nextId);
		console.log(dir);

		gsap.to(currentElement, { scale: 0.8, duration: 0.5 });
		gsap.to(nextElement, { scale: 0.8, duration: 0.5, delay: 0.5 });
		if (dir === 1) {
			gsap.to(mainDiv, { duration: 1, x: `-${screenWidth}`, delay: 0.5 });
		} else if (dir === 2) {
			gsap.to(mainDiv, { duration: 1, x: `-${screenWidth}`, y: `-${screenHeight}`, delay: 0.5 });
		} else if (dir === 3) {
			gsap.to(mainDiv, { duration: 1, y: `-${screenHeight}`, delay: 0.5 });
		} else if (dir === 4) {
			gsap.to(mainDiv, { duration: 1, x: `0`, y: `-${screenHeight}`, delay: 0.5 });
		} else if (dir === 5) {
			gsap.to(mainDiv, { duration: 1, x: `0`, delay: 0.5 });
		} else if (dir === 6) {
			gsap.to(mainDiv, { duration: 1, x: `0`, y: `0`, delay: 0.5 });
		} else if (dir === 7) {
			gsap.to(mainDiv, { duration: 1, y: `0`, delay: 0.5 });
		} else if (dir === 8) {
			gsap.to(mainDiv, { duration: 1, x: `-${screenWidth}`, y: `0`, delay: 0.5 });
		}

		gsap.to(nextElement, { duration: 1, delay: 1.5, scale: 1, ease: 'back' });
		// console.log(nextElement) ;

		currentComponent = nextId;
	}
</script>

<main>
	<div class="maincontent {visible ? 'visible' : ''}" bind:this={mainDiv}>
		<div class="card about" bind:this={homeDiv}>
			<HeroSection bind:pageWidth bind:slide={slideHero} toAnimate={false} />
		</div>
		<!-- <div class="card hero"> -->
		<!-- CARD 1 -->
		<!-- </div> -->
		<div class="card about" bind:this={aboutDiv}>
			<!-- CARD 2 -->
			<AboutSection bind:slidePhoto={slideAbout} />
		</div>
		<div class="card about" bind:this={eventDiv}>
			<Event bind:pageWidth />
		</div>

		<div class="card about" bind:this={workshopDiv}>
			<Workshop />
		</div>
	</div>
</main>

<!-- <button on:click={() => change(currentComponent, 2)} class="corner-btn top-left">Button 1</button> -->
<!-- <button on:click={() => change(currentComponent, 2,1)} class="corner-btn top-right">bt1</button>
<button on:click={() => change(currentComponent, 3,2)} class="corner-btn bottom-left">btn2</button>
<button on:click={() => change(currentComponent, 4,3)} class="corner-btn bottom-right">btn3</button> -->
<div class="cursor" bind:this={cursor}>
</div>

<div class="nav-container hidden-mobile">
	{#if currentComponent === 1}
		<button class="btn bottom-middle" on:click={() => change(1, 3)}><i class="arrow down" /></button
		>
		<button class="btn bottom-right" on:click={() => change(1, 2)}
			><i class="arrow down-right" /></button
		>
		<button class="btn right-middle" on:click={() => change(1, 1)}><i class="arrow right" /></button
		>
	{:else if currentComponent === 2}
		<button class="btn bottom-middle" on:click={() => change(2, 3)}><i class="arrow down" /></button
		>
		<button class="btn bottom-left" on:click={() => change(2, 4)}
			><i class="arrow down-left" /></button
		>
		<button class="btn left-middle" on:click={() => change(2, 5)}><i class="arrow left" /></button>
	{:else if currentComponent === 3}
		<button class="btn top-middle" on:click={() => change(3, 7)}><i class="arrow up" /></button>
		<button class="btn top-right" on:click={() => change(3, 8)}><i class="arrow up-right" /></button
		>
		<button class="btn right-middle" on:click={() => change(3, 1)}><i class="arrow right" /></button
		>
	{:else if currentComponent === 4}
		<button class="btn top-middle" on:click={() => change(4, 7)}><i class="arrow up" /></button>
		<button class="btn top-left" on:click={() => change(4, 6)}><i class="arrow up-left" /></button>
		<button class="btn left-middle" on:click={() => change(4, 5)}><i class="arrow left" /></button>
	{/if}
</div>

<style>
	* {
		cursor: none;
	}
	.cursor {
		width: 10px;
		height: 10px;
		position: absolute;
		z-index: 100;
	}

	.cursor {
		background-color: #bb7ebf;
		border-radius: 50%;
		box-shadow: 0 0 5px 5px #973f9d;
	}

	main {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.maincontent {
		display: grid;
		/* overflow: hidden; */
		grid-template-columns: auto auto;
	}
	.card {
		display: flex;
		justify-content: center;
		overflow: hidden;
		align-items: center;
		width: 100vw;
		top: 0;
		position: relative;
		/* background-color: rgba(255, 200, 100); */
		height: 100vh;
	}
	.visible {
		opacity: 100% !important;
	}

	.nav-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hidden-mobile {
		display: none;
	}

	@media (min-width: 768px) {
		.hidden-mobile {
			display: flex;
		}
	}

	.btn {
		position: absolute;
		padding: 8px 12px;
		height: 35px;
		width: 35px;
		border: none;
		border-radius: 4px;
		background-color: rgba(51, 51, 51, 0.7);
		color: white;
		cursor: pointer;
	}

	/* Button positions */
	.bottom-middle {
		bottom: 10px;
		left: 50%;
		/* transform: translateX(-50%); */
	}
	.bottom-right {
		bottom: 10px;
		right: 10px;
		left: auto;
	}
	.right-middle {
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.bottom-left {
		bottom: 10px;
		left: 10px;
	}
	.left-middle {
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.top-middle {
		top: 80px;
		left: 50%;
		transform: translateX(-50%);
	}
	.top-right {
		top: 80px;
		right: 10px;
	}
	.top-left {
		top: 80px;
		left: 10px;
	}

	.arrow {
		border: solid whitesmoke;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
	}
	.right {
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
	}
	.left {
		transform: rotate(135deg);
		-webkit-transform: rotate(135deg);
	}
	.up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}
	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
	.down-right {
		transform: rotate(45deg);
		-webkit-transform: rotateZ(0deg);
	}
	.up-right {
		transform: rotate(-112.5deg);
		-webkit-transform: rotate(-112.5deg);
	}
	.down-left {
		transform: rotate(67.5deg);
		-webkit-transform: rotate(67.5deg);
	}
	.up-left {
		transform: rotate(-157.5deg);
		-webkit-transform: rotate(-157.5deg);
	}
</style>
