<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import dot from '$lib/assets/dot.png';
	import { access_token, loggedIn } from '$lib/stores';
	import arrowImg from '$lib/assets/arrow.svg';
	import { getContext, onMount } from 'svelte';

	import gsap from 'gsap';
	import star from 'svelte-awesome/icons/star';

	let slideHero: Function;
	let slideAbout: Function;
	let visible = false;
	let btn1 = 'About';
	let btn2 = 'Workshop';
	let btn3 = 'Event';

	let arrow: HTMLElement;

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
	let direction = {
		1: {
			1: 3,
			2: 2,
			3: 1
		},
		2: {
			1: 3,
			2: 4,
			3: 5
		},
		3: {
			1: 7,
			2: 8,
			3: 1
		},
		4: {
			1: 7,
			2: 6,
			3: 5
		}
	};

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
		let speedx = 0;
		let speedy = 0;
		let prevX = 0,
			prevY = 0;
		let x: string | number | NodeJS.Timeout | undefined;
		window.onmousemove = (e) => {
			clearInterval(x);
			if (cursor) {
				cursor.style.top = `${e.clientY}px`;
				cursor.style.left = `${e.clientX}px`;
			}
			speedx += e.clientX - prevX;
			speedy += e.clientY - prevY;
			prevX = e.clientX;
			prevY = e.clientY;
			// console.log (speedx + "__" + speedy)
			x = setInterval(() => {
				if (cursor) {
					cursor.style.top = `${cursor.style.top + speedy}px`;
					cursor.style.left = `${cursor.style.left + speedx}px`;
				}
				speedx *= 0.001;
				speedy *= 0.001;
				// console.log (speedx + " " + speedy)
				if (Math.abs(speedx) <= 1 && Math.abs(speedy) <= 1) {
					clearInterval(x);
					speedx = 0;
					speedy = 0;
				}
			}, 5);
		};

		let animation_length: number[] = [];
		let start = 0;
		// for (const child of arrow.children) {
		// 	animation_length.push(start);
		// }

		let wheelTimeout: number;
		let max_expand = -3.5;

		let dir = 0;
		mainDiv.onwheel = (e) => {
			// Set animation progress based on scroll position
			let deltaX = e.deltaX;
			let deltaY = e.deltaY;

			let turnLeft = false;
			let turnRight = false;
			let turnUp = false;
			let turnDown = false;
			if (deltaY > 0) {
				turnDown = true;
			}

			if (deltaX < 0) {
				turnLeft = true;
			}
			if (deltaX > 0) {
				turnRight = true;
			}
			if (deltaY < 0) {
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
			if (turnLeft && turnDown) {
				dir = 4;
			} else if (turnLeft && turnUp) {
				dir = 6;
			} else if (turnRight && turnUp) {
				dir = 8;
			} else if (turnRight && turnDown) {
				dir = 2;
			} else if (turnDown) {
				dir = 3;
			} else if (turnUp) {
				dir = 7;
			} else if (turnLeft) {
				dir = 5;
			} else {
				dir = 1;
			}

			const nextId = next[currentComponent][dir];
			if (nextId != null || nextId != undefined) {
				if (deltaX < 0) {
					widthLeft += -deltaX * 0.6;
				} else {
					widthRight += deltaX * 0.6;
				}

				if (deltaY < 0) {
					heightUp += -deltaY * 0.6;
				} else {
					heightDown += deltaY * 0.6;
				}
			}

			// for (const animatedElement of arrow.children) {
			// 	if (animation_length[0] - 0.1 * (i + 1) >= max_expand) {
			// 		animation_length[i] -= 0.1 * (i + 1);
			// 		animatedElement.style.transform = `translateX(${animation_length[i]}px)`;
			// 		i++;
			// 	}
			// }
			clearTimeout(wheelTimeout);

			// Set a timeout to detect the end of the scrolling
			wheelTimeout = setTimeout(() => {
				if (!animating) {
					let turnLeft = false;
					let turnRight = false;
					let turnUp = false;
					let turnDown = false;
					if (heightDown > 10) {
						turnDown = true;
					}

					if (widthLeft > 10) {
						turnLeft = true;
					}
					if (widthRight > 10) {
						turnRight = true;
					}
					if (heightUp > 10) {
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
					if (turnLeft && turnDown) {
						dir = 4;
					} else if (turnLeft && turnUp) {
						dir = 6;
					} else if (turnRight && turnUp) {
						dir = 8;
					} else if (turnRight && turnDown) {
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
						dir = 0
					}
					change(dir);
				}
				heightDown = 0;
				heightUp = 0;
				widthRight = 0;
				widthLeft = 0;
			}, 100);
		};
	});
	let animating = false;

	function change(dir: number) {
		// if (isTransitioning) return;
		// console.log(currentId);
		let currentId = currentComponent;
		const currentElement = elementMap[currentId];
		const nextId = next[currentId][dir];
		console.log(next[currentId], dir)
		if (nextId == null || nextId == undefined) {
			return;
		}
		const nextElement = elementMap[nextId];
		animating = true;
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
		animating = false;
	}

	let heightDown = 0;
	let heightUp = 0;
	let widthLeft = 0;
	let widthRight = 0;
</script>

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

<div class="shadow bottom" style="height:{heightDown}px;" />
<div class="shadow top" style="height:{heightUp}px;" />
<div class="shadow left" style="width:{widthLeft}px;" />
<div class="shadow right" style="width:{widthRight}px;" />

<style>
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
	.width {
		height: 100vh;
	}
	.arrow {
		display: flex;
		align-items: center;
		height: 35px;
		width: 35px;
		border: none;
		transition: all 2s ease-in-out;
		cursor: pointer;
	}

	.arrow img {
		display: block;
		position: absolute;
		width: 18px;
		height: 1.5vw;
		/* animation: animate 2s linear; */
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
		overflow: hidden;
		align-items: center;
		width: 100vw;
		top: 0;
		z-index: 20;
		position: relative;
		/* background-color: rgba(255, 200, 100); */
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
