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

	let homeDiv: HTMLElement;
	let aboutDiv: HTMLElement;
	let eventDiv: HTMLElement;
	let workshopDiv: HTMLElement;
	let mainDiv: HTMLElement;

	let currentComponent: number = 1;

	let reverse = {
  1: { 2: 1, 4: 2, 3: 3 },
  2: { 4: 3, 3: 4, 1: 5 },
  3: { 1: 7, 2: 8, 4: 1 },
  4: { 3: 5, 2: 7, 1: 6 }
};

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

	let elementMap: { [key: number]: HTMLElement } = {};
	let screenWidth: number;
	let screenHeight: number;
	// let cursor: HTMLElement;
	let scrolling  = false;

	export let data;
	const getData: Function = getContext('getData');
	let pageWidth = 0;
	let alertshow = data.goto == null ? 0 : -1
	let onMountDone = false;
	let prevGoto = ""
	$: if (prevGoto != data.goto && onMountDone) {
		if (data.goto != null) {
			change(reverse[currentComponent][Number.parseInt(data.goto)])
		}
		prevGoto = data.goto
	}

	onMount(() => {

		setTimeout(() => {
			visible = true;
		}, 10);
		let x = setInterval(() => {
			alertshow += 0.1
			if (alertshow > 100) {
				setTimeout(() => {
					alertshow = -1

					clearInterval(x)
				}, 10)
			}
		}, 10)
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
			console.log(val);
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

		for (let key = 1; key < 5; key ++) {
			const ele = elementMap[key]
			ele.onscroll = (e) => {
				scrolling = true
			}
			ele.onscrollend = (e) => {
				scrolling = false
			}
		}

		let wheelTimeout: number;
		// let max_expand = -3.5;

		let dir = 0;
		let startX = 0, startY = 0;

		const switching = (deltaX: number, deltaY: number, isTouch?: boolean ) => {
			if (scrolling || animating) {
				return
			}
			if (deltaX < 0 ) {
				widthLeft += -deltaX * 0.6;
			} else {
				widthRight += deltaX * 0.6;
			}

			if (deltaY < 0) {
				heightUp += -deltaY * 0.6;
			} else {
				heightDown += deltaY * 0.6;
			}
			clearTimeout(wheelTimeout);
			if (isTouch && (heightUp > 40 || heightDown > 40 || widthLeft > 40 || widthRight > 40 )) {
				animate(isTouch)
			}

			// Set a timeout to detect the end of the scrolling
			wheelTimeout = setTimeout(() => {
				animate(isTouch)
			}, 100);
		};

		function animate (isTouch?:boolean) {
			if (!animating) {
					let turnLeft = false;
					let turnRight = false;
					let turnUp = false;
					let turnDown = false;
					
					if (heightDown > 40) {
						turnDown = true;
					}

					
					if (widthLeft > 40) {
						turnLeft = true;
					}
					if (widthRight > 40) {
						turnRight = true;
					}
					
					if (heightUp > 40) {
						turnUp = true;
					}
					// 1 : right
					// 2: bottom- right
					// 3: bottom
					// 4: bottom-left
					// 5: left
					// 6: top-left
					// 7: top
					// 8: top-right
					let minReq = 0
					if (isTouch) {
						minReq = 20
					}
					// console.log(isTouch, minReq, widthLeft, widthRight)
					if (widthLeft > minReq && turnDown) {
						dir = 4;
					} else if (widthLeft > minReq && turnUp) {
						dir = 6;
					} else if (widthRight > minReq && turnUp) {
						dir = 8;
					} else if (widthRight > minReq && turnDown) {
						dir = 2;
					} else if (turnDown) {
						dir = 3;
					} else if (turnUp) {
						dir = 7;
					} else if (turnLeft) {
						dir = 5;
					} else if (turnRight) {
						dir = 1;
					} else {
						dir = 0;
					}
					console.log(dir)
					change(dir);
				}
				heightDown = 0;
				heightUp = 0;
				widthRight = 0;
				widthLeft = 0;
		}

		mainDiv.onwheel = (e) => {
			// Set animation progress based on scroll position
			let deltaX = e.deltaX;
			let deltaY = e.deltaY;
			console.log(deltaX, deltaY)
			switching(deltaX, deltaY)

		}
		mainDiv.ontouchstart = (e) => {
			const touch = e.touches[0]
			startX = touch.clientX
			startY = touch.clientY
		}
		mainDiv.ontouchmove = (e) => {
			const touch = e.touches[0]
			let deltaX = (startX - touch.clientX) * 0.1;
			let deltaY = (startY - touch.clientY) * 0.1 ;
			console.log(deltaX, deltaY)
			switching(deltaX, deltaY, true)
		}
		if (data.goto != null ) {
			change(reverse[currentComponent][Number.parseInt(data.goto)])
		}
		onMountDone = true

	});

	
	let animating = false;
	function change(dir: number) {
		// if (isTransitioning) return;
		// console.log(currentId);
		let currentId = currentComponent;
		const currentElement = elementMap[currentId];
		const nextId = next[currentId][dir];

		if (nextId == null || nextId == undefined) {
			return;
		}
		const nextElement = elementMap[nextId];
		animating = true;
		gsap.to(currentElement, { scale: 0.8, duration: 0.2 });
		gsap.to(nextElement, { scale: 0.8, duration: 0.2, delay: 0.2 });
		if (dir === 1) {
			gsap.to(mainDiv, { duration: 1, x: `-${screenWidth}`, delay: 0.2 });
		} else if (dir === 2) {
			gsap.to(mainDiv, { duration: 1, x: `-${screenWidth}`, y: `-${screenHeight}`, delay: 0.2 });
		} else if (dir === 3) {
			gsap.to(mainDiv, { duration: 1, y: `-${screenHeight}`, delay: 0.2 });
		} else if (dir === 4) {
			gsap.to(mainDiv, { duration: 1, x: `0`, y: `-${screenHeight}`, delay: 0.2 });
		} else if (dir === 5) {
			gsap.to(mainDiv, { duration: 1, x: `0`, delay: 0.2 });
		} else if (dir === 6) {
			gsap.to(mainDiv, { duration: 1, x: `0`, y: `0`, delay: 0.2 });
		} else if (dir === 7) {
			gsap.to(mainDiv, { duration: 1, y: `0`, delay: 0.2 });
		} else if (dir === 8) {
			gsap.to(mainDiv, { duration: 1, x: `-${screenWidth}`, y: `0`, delay: 0.2 });
		}

		gsap.to(nextElement, { duration: 1, delay: 0.8, scale: 1, ease: 'back' }).then(() => {

			animating = false;
		});
		// console.log(nextElement) ;
		currentComponent = nextId;
	}

	let heightDown = 0;
	let heightUp = 0;
	let widthLeft = 0;
	let widthRight = 0;
</script>

{#if alertshow != -1}
<label out:fade={{duration:1000}}	>
	<input type="checkbox" class="alertCheckbox" autocomplete="off" />
	<div class="alert info">
		<div class="alertbar" style="width: {alertshow}%;"></div>
		<span class="alertText"> Fest Dates and event registration pages will be released soon
			<br class="clear"/></span>
		<span class="alertClose">X</span>
	</div>
</label>
{/if}
<main>
	<div class="maincontent {visible ? 'visible' : ''}" bind:this={mainDiv}>
		<div class="card about" bind:this={homeDiv}>
			<HeroSection bind:pageWidth bind:slide={slideHero} toAnimate={false} {change} />
		</div>
		<!-- <div class="card hero"> -->
		<!-- CARD 1 -->
		<!-- </div> -->
		<div class="card about" bind:this={aboutDiv}>
			<!-- CARD 2 -->
			<AboutSection bind:slidePhoto={slideAbout} />
		</div>
		<div class="card about event" bind:this={eventDiv}>
			<Event bind:pageWidth />
		</div>

		<div class="card about" bind:this={workshopDiv}>
			<Workshop />
		</div>
	</div>
</main>

{#if currentComponent == 1}
<div class="shadow bottom" style="height:{heightDown}px;" />
<div class="shadow right" style="width:{widthRight}px;" />
<button class="arrow right-middle" on:click={()=>{change(1)}}/>
<button class="arrow bottom-right" on:click={()=>{change(2)}}/>
<button class="arrow bottom-middle"  on:click={()=>{change(3)}}/>
{:else if currentComponent == 2} 
<div class="shadow bottom" style="height:{heightDown}px;" />
<div class="shadow left" style="width:{widthLeft}px;" />
<button class="arrow bottom-middle" on:click={()=>{change(3)}}/>
<button class="arrow bottom-left" on:click={()=>{change(4)}}/>
<button class="arrow left-middle" on:click={()=>{change(5)}}/>
{:else if currentComponent == 3} 
<div class="shadow top" style="height:{heightUp}px;" />
<div class="shadow right" style="width:{widthRight}px;" />
<button class="arrow top-right" on:click={()=>{change(8)}}/>
<button class="arrow top-middle" on:click={()=>{change(7)}}/>
<button class="arrow right-middle" on:click={()=>{change(1)}}/>
{:else} 
<div class="shadow top" style="height:{heightUp}px;" />
<div class="shadow left" style="width:{widthLeft}px;" />
<button class="arrow top-left" on:click={()=>{change(6)}}/>
<button class="arrow top-middle" on:click={()=>{change(7)}}/>
<button class="arrow left-middle" on:click={()=>{change(5)}}/>
{/if}

<style>

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
  border: 1px solid #DDD;	
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

	.arrow {
		width: 20px;
		height: 20px;
		z-index: 20;
		position: absolute;
		transform: rotate(45deg);
		border-left: none;
		border-top: none;
		border-right: 2px #fff solid;
		border-bottom: 2px #fff solid;
	}

	.arrow:before {
		content: '';
		width: 10px;
		height: 10px; 
		position: absolute;
		border-left: none;
		border-top: none;
		border-right: 1px #fff solid;
		border-bottom: 1px #fff solid;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-name: arrow;
	}

	@keyframes arrow {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translate(-10px, -10px);
		}
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
	.bottom-middle {
		bottom: 10px;
		left: calc(50% - 10px);
		/* transform: translateX(-50%); */
	}
	.bottom-right {
		bottom: 10px;
		right: 10px;
		left: auto;
		transform: rotateZ(0deg);
	}
	.right-middle {
		right: 10px;
		top: 50%;
		transform: rotateZ(-45deg);
	}

	.bottom-left {
		bottom: 10px;
		left: 10px;
		transform: rotateZ(90deg);
	}
	.left-middle {
		left: 10px;
		top: 50%;
		transform: rotateZ(135deg);
	}

	.top-middle {
		top: 80px;
		left: 50%;
		transform: rotateZ(-135deg);
	}
	.top-right {
		top: 80px;
		right: 10px;
		transform: rotateZ(-90deg);
	}
	.top-left {
		top: 80px;
		left: 10px;
		transform: rotateZ(180deg);
	}
</style>
