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
	let mainDivclientX:number | null = null
	let mainDivclientY: number | null = null
	// let cursor: HTMLElement;

	export let data;
	const getData: Function = getContext('getData');
	let pageWidth = 0;
	// let alertshow = data.goto == null ? 0 : -1
	let alertshow = -1
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
		// let x = setInterval(() => {
		// 	alertshow += 0.1
		// 	if (alertshow > 100) {
		// 		setTimeout(() => {
		// 			alertshow = -1

		// 			clearInterval(x)
		// 		}, 10)
		// 	}
		// }, 10)
		if (!$loggedIn) {
			getData();
		}
		pageWidth = window.innerWidth;
		window.onresize = () => {
			pageWidth = window.innerWidth;
			screenWidth = pageWidth;
			screenHeight = window.innerHeight;
		};
		setInterval(fixposition, 1000) // align screen every sec
		let X=0, Y = 0;
		let move = false, animating_move = false;
		mainDiv.onmousedown = (e) => {
			move = true
			document.body.style.cursor = "grab";
		}
		mainDiv.onmouseup = (e) => {
			move = false
			document.body.style.cursor = "default";
			fixposition()
		}

		mainDiv.onmousemove = (e) => {
			if (move) {
				let moveX = e.movementX
				const boundingRect = mainDiv.getBoundingClientRect()
				let moveY = e.movementY 
				gsap.to(mainDiv, { duration: 0, x: boundingRect.x + moveX,y: boundingRect.y + moveY });
			}
		}
		mainDiv.onmouseleave = (e) => {
			move = false
			fixposition()
			document.body.style.cursor = "default";
		}
		function fixposition(isTouch? : undefined | boolean) {
			if (animating_move || move) {
				return
			}
			animating_move = true
			if (mainDiv == undefined){
				return
			}
			const boundingRect = mainDiv.getBoundingClientRect()
			let newX = 0, newY = 0;
			let currX = -boundingRect.x
			let currY = -boundingRect.y
			let allowedX = Math.max(30,screenWidth / 4)
			let allowedY = Math.max(30,screenHeight / 4)

			if ((X == 0 && currX < 0 )|| (X == -screenWidth && currX < screenWidth - allowedX)) {
				newX = 0
			} else if (currX >= allowedX ) {
				newX = -screenWidth
			}

			if ((Y == 0 && currY < 0 )|| (Y == -screenHeight && currY < screenHeight - allowedY)) {
				newY = 0
			} else if (currY >= allowedY ) {
				newY = -screenHeight
			}
			X = newX
			Y = newY
			if (newX == 0 ) {
				if (newY == 0) {
					currentComponent = 1
				} else {
					currentComponent = 3
				}
			} else {
				if (newY == 0) {
					currentComponent = 2
				} else {
					currentComponent = 4
				}
			}
			gsap.to(mainDiv, { duration: 0.7, x: newX,y: newY }).then((res) => {
				animating_move = false;
			}).catch ((e) => {
				animating_move = false
			});
		}
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


		mainDiv.ontouchstart = (e) => {
			const touch = e.touches[0]
			mainDivclientX = touch.clientX
			mainDivclientY = touch.clientY
			move = true
		}
		mainDiv.ontouchmove = (e) => {
			if (move) {
				const touch = e.touches[0]
				let moveX = (mainDivclientX == null) ? 0 : touch.clientX - mainDivclientX
				let moveY = (mainDivclientY == null) ? 0 : touch.clientY - mainDivclientY
				const boundingRect = mainDiv.getBoundingClientRect()
				mainDivclientX = touch.clientX
				mainDivclientY = touch.clientY
				// console.log(boundingRect)
				gsap.to(mainDiv, { duration: 0, x: boundingRect.x + moveX,y: boundingRect.y + moveY });
			}
		}
		mainDiv.ontouchend = (e) => {
			move = false
			fixposition(true)
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
		// gsap.to(currentElement, { scale: 0.8, duration: 0.2 });
		// gsap.to(nextElement, { scale: 0.8, duration: 0.2, delay: 0.2 });
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
		top: 100px;
		left: 50%;
		transform: rotateZ(-135deg);
	}
	.top-right {
		top: 100px;
		right: 10px;
		transform: rotateZ(-90deg);
	}
	.top-left {
		top: 100px;
		left: 10px;
		transform: rotateZ(180deg);
	}
</style>
