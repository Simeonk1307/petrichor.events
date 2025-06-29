<script lang="ts">
	import Globe from '$lib/assets/svgs/globe.svg';
	import hand from '$lib/assets/HomePage/hand.png';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let change: Function;
	export let pageWidth: number;
	export let slide:Function;
	export let toAnimate: boolean;

	slide = (value:number) => {
		if (value < height + 100 && value >= 0) {
				if (content)
					content.style.left = value* -1 + 'px';
				if (img) 
					img.style.bottom = value * -0.8 + 'px';
				// strip.style.left = value* -5 + 'px';
		}
	}

	function discover() {
		change(3)
	}
	let plang: string[] = [
		'PETRICHOR',
		'पेट्रीकोर',
		'பெட்ரிகோர்',
		'પેટ્રિકોર',
		'പെട്രിക്കോർ',
		'পেট্রিকোর',
		'పెట్రికోర్',
		'ਪੈਟ੍ਰਿਕੋਰ'
	];

	function ca_portal() {
		goto('/CA/welcome');
	}
	let len = plang.length;
	let content: HTMLElement;
	let title: HTMLElement;
	let dot: HTMLElement;
	let img: HTMLElement;
	let strip: HTMLElement;
	let height = 0;
	let mouseX = 0;
	let mouseY = 0;
	let middle: Array<number> = [];

	onMount(() => {
		if (img) {
			const bounds = img.getBoundingClientRect();
			middle = [];
			// getting mid point of the whole card Div
			middle.push(((bounds.left + bounds.right) / 2) | 0);
			middle.push(((bounds.top + bounds.bottom) / 2) | 0);
		}
		let pos = 0;
		let posi = 0;
		// let atLast = 0;
		if (toAnimate){
			let x = setInterval(() => {
				if (pos >= plang[posi].length) {
					dot.style.display = 'none'
					clearInterval(x)
					return
				}
				if (title) {
					title.innerText += plang[posi].at(pos++);
				}
			}, 600);
		} else {
			title.innerText = plang[posi]
		}

		height = window.innerHeight;
		// window.onscroll =
		img.onmousemove = (e) => {
			const moveX = ((e.clientX - middle[0]) / 45) | 0;
			const moveY = ((e.clientY - middle[1]) / 45) | 0;
			mouseX = e.clientX;
			mouseY = e.clientY;
			// console.log(moveX+ " "+moveY)
			moveX;
			moveY;
			if ( Math.abs(moveY) >= 35) return
			img.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
		};
		img.onmouseleave = (e) => {
			// console.log('leave' + img.className);
			img.style.transform = `translateX(0px) translateY(0px)`;
		};
	});

</script>

<div class="gradient-bg">
	<div class="gradients-container extra">
		<div id="g1-3" class="g" />
		<div id="g1-2" class="g" />
		<div id="g1-1" class="g" />
		<div id="g1-7" class="g" />
	</div>
</div>

<main>
	<div class="first-block">
		<div class="content" bind:this={content}>
			<div class="title">
				<p class="atmos" bind:this={title} />
				<p class="atmos dot" bind:this={dot}>|</p>
			</div>
			<div class="content_box">
				<div class="caption">
					Experience the Magic of Petrichor<br />
					Celebrate culture, creativity, and camaraderie at IITPKD's iconic fest.<br/>
					<strong>Join Us on <span style="color: #06baeb;">18th</span> and <span style="color: #06baeb;">19th</span> January at IIT Palakkad to experience the festivities.</strong>
				</div>
				<div class="buton_area">
					<button type="button" class="ca_portal" on:click={ca_portal}
						>CA Portal
						<svg
							width="20px"
							height="20px"
							viewBox="0 2.5 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 7L15 12L10 17"
								stroke="gray"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button type="button" class="discover" on:click={discover}
						>Discover More
						<svg
							width="20px"
							height="20px"
							viewBox="0 2.5 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 7L15 12L10 17"
								stroke="gray"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="imagediv" bind:this={img} draggable="false">
			<img src={hand} alt="" draggable="false" />
		</div>
	</div>

	<div class="strip_holder" bind:this={strip}>
		<div class="strip">
			<div class="strip1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
				<div class="banner">&nbsp;PETRICHOR</div>
			</div>
			<div class="strip1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
				<div class="banner">&nbsp;PETRICHOR</div>
			</div>
			<div class="strip1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
				<div class="banner">&nbsp;PETRICHOR</div>
			</div>
			<div class="strip1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
				<div class="banner">&nbsp;PETRICHOR</div>
			</div>
			<div class="strip1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
				<div class="banner">&nbsp;PETRICHOR</div>
			</div>
			<div class="strip1">
				<!-- svelte-ignore a11y-missing-attribute -->
				<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
				<div class="banner">&nbsp;PETRICHOR</div>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: transparent;
		background-color: transparent;
		position: relative;
		overflow-x: hidden;
		/* z-index: 11 !important; */
		/* padding: 5em 0; */
	}
	main * {
		overflow: hidden;
	}
	.first-block {
		width: 100vw;
		flex: 8;
		/* margin-bottom: 5em; */
		display: flex;
	}
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
	}
	.imagediv {
		flex: 1;
		display: flex;
		user-select: none;
		z-index: 11;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease-in-out;
		position: relative;
	}
	.dot {
		position: relative;
		animation: blink 0.5s infinite;
		text-shadow: 1px 1px 1px #a5a5a5, 1px 1.5px 1px #a5a5a5, 1px 2px 1px #a5a5a5,
			1px 2.5px 1px #a5a5a5, 1px 3px 1px #a5a5a5;
	}
	@keyframes blink {
		100% {
			opacity: 0;
		}
	}
	button {
		cursor: pointer;
		/* z-index: 2; */
	}
	.imagediv img {
		height: 85vh;
		user-select: none;
		width: 50vw;
	}
	.title {
		flex: 2;
		align-items: last baseline;
		padding-left: 4vw;
		display: flex;
		color: white;
		position: relative;
	}
	.title p {
		font-size: calc(25px + 1.5vw);
		font-weight: 100;
		margin: 0;
		text-shadow: 1px 1px 1px #a5a5a5, 1px 1.5px 1px #a5a5a5, 1px 2px 1px #a5a5a5,
			1px 2.5px 1px #a5a5a5, 1px 3px 1px #a5a5a5;
	}
	.content_box {
		flex: 3;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
	}
	.caption {
		font-size: 20px;
		font-weight: 100;
		user-select: none;
		color: white;
		overflow: hidden;
		text-wrap: wrap;
		padding-left: 4vw;
	}
	.buton_area {
		display: flex;
		width: 80%;
		max-width: 520px;
		justify-content: center;
		align-items: flex-end;
		justify-content: space-evenly;
	}
	button {
		border-radius: 2.5em;
		padding: 0.8em 2em;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
		font-weight: 100;
	}
	.strip_holder {
		flex: 2;

		width: 100vw;
		max-height: 35px;
		align-items: center;

		overflow-x: hidden;
		margin: 2rem 0;
		border-top: 2px solid white;
		border-bottom: 2px solid white;
		padding: 5px 0;
		opacity: 60%;
		overflow-y: visible !important;
		position: relative;
	}
	.strip {
		overflow: visible !important;
		display: flex;
		align-items: center;
		height: 100%;
		/* Apply animation to this element */
		-moz-animation: example1 5s linear infinite;
		-webkit-animation: example1 5s linear infinite;
		animation: example1 5s linear infinite;
	}
	.strip1 {
		display: flex;
		justify-content: center;
		overflow-y: visible !important;
		min-width: max(20%, 150px);
	}

	.banner {
		display: flex;
		justify-content: center;
	}
	/* Move it (define the animation) */
	@-moz-keyframes example1 {
		0% {
			-moz-transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(min(-20%, -150px));
		}
	}
	@-webkit-keyframes example1 {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(min(-20%, -150px));
		}
	}
	@keyframes example1 {
		0% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(min(-20%, -150px)); /* Firefox bug fix */
			-webkit-transform: translateX(min(-20%, -150px)); /* Firefox bug fix */
			transform: translateX(min(-20%, -150px));
		}
	}

	@media only screen and (max-width: 900px) {
		.caption {
			font-size: 14px;
		}
		button {
			padding: 0.5em 1em;
		}
		.imagediv img {
			height: 65vh;
		}
		.first-block {
			flex: 7;
		}
		.strip_holder {
			padding: 8px 0;
			margin: 1em 0;
		}
	}

	@media (max-width: 700px) {
		.first-block {
			flex-direction: column-reverse;
		}
		.imagediv img {
			width: 100vw;
			height: 50vh;
		}
		.title {
			flex: 1;
		}
		.buton_area {
			width: 100%;
			max-width: unset;
		}
	}

	/* Backgorund */

	/* Section 1 */
	/* Home page */
	#g1-1 {
		background: radial-gradient(
				farthest-corner at 10% 5%,
				rgba(var(--color2), 1) 0,
				rgba(var(--color2), 0) 35%
			)
			no-repeat;
	}
	#g1-2 {
		background: radial-gradient(
				farthest-corner at 0px 0px,
				rgba(var(--color1), 0.8) 0%,
				rgba(var(--color1), 0) 45%
			)
			no-repeat;
	}
	#g1-3 {
		background: radial-gradient(
				farthest-corner at 0% 10%,
				rgba(var(--color3), 0.8) 0%,
				rgba(var(--color3), 0) 75%
			)
			no-repeat;
		width: 100vw;
		height: 100vh;
	}
	#g1-7 {
		background: radial-gradient(
				farthest-corner at 0% 52%,
				rgba(var(--color6), 0.8) 0%,
				rgba(var(--color6), 0) 45%
			)
			no-repeat;
	}
</style>
