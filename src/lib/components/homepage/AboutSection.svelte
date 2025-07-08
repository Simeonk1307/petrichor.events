<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import photo from '$lib/assets/about.jpg';
	// Import other photos here

	// List of photos to be included in the carousel, in the order they appear.
	let items = [photo, photo, photo, photo, photo, photo, photo];
	let current = 0;
	let container: HTMLDivElement;
	const intervalTime = 3000;
	let interval: NodeJS.Timeout;

	// AutoScroll logic
	onMount(() => {
		interval = setInterval(() => {
			current = (current + 1) % items.length;
		}, intervalTime);
	});

	onDestroy(() => clearInterval(interval));

	// helper functions for class bindings
	const leftIndex = () => (current - 1 + items.length) % items.length;
	const rightIndex = () => (current + 1) % items.length;
</script>


<main>
	<!-- /Carousel Section -->
	<div class="carousel-wrapper">
		<div class="carousel-3d" bind:this={container}>
			{#each items as img, i}
				<div
					class="carousel-item
						{i === current ? 'selected' : ''}
						{i === leftIndex() ? 'left' : ''}
						{i === rightIndex() ? 'right' : ''}"
				>
					<img src={img} alt="carousel" />
				</div>
			{/each}
		</div>
	</div>

	
	<div class="text-section">
		<!-- Heading -->
		<h1 class="title atmos">About Us</h1>
		<!-- Content -->
		<div class="content-card">
			<p>
				<span class="highlight">Petrichor '26</span>, the annual techno-cultural fest of IIT Palakkad, is back—and this time, it's bigger, bolder,
				and more exciting than ever before. Named after the earthy fragrance that follows the first rain, Petrichor
				captures the essence of creativity and renewal.
			</p>
			<p>
				Every year, we—the students of IIT Palakkad—unite our passion
				and energy to bring this fest to life. Blending cutting-edge technical excellence with rich cultural expression,
				Petrichor offers a dynamic platform for students to showcase their ideas, talents, and skills.
			</p>
			<p>
				From immersive workshops to captivating events, <span class="highlight">Petrichor '26</span> promises an unforgettable experience for everyone who attends.
				Join us in celebrating knowledge, creativity, and the thrill of discovery!
			</p>
		</div>
	</div>
</main>

<style>
	/* ---------- BODY BACKGROUND WITH RADIAL GRADIENT ---------- */
	:global(body) {
		margin: 0;
		background:
			radial-gradient(
				ellipse at top center,
				rgba(var(--color4), 0.25) 0%,
				transparent 60%
			),
			black;
		min-height: 100vh;
		font-family: var(--pfont, sans-serif);
	}

	/* ---------- MAIN LAYOUT ---------- */
	main {
		min-height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
		margin-top: 100px;
	}

	/* ------------ CAROUSEL ----------- */
	.carousel-wrapper {
		position: relative;
		width: 100%;
		height: 350px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel-3d {
		position: relative;
		width: 90rem;
		height: 100%;
		perspective: 1000px;
	}

	.carousel-item {
		position: absolute;
		top: 50%;
		left: 50%;
		transform-style: preserve-3d;
		transition: transform 0.6s ease, opacity 0.6s ease;
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.7);
	}

	.carousel-item img {
		max-height: 300px;
		max-width: 100%;
		border-radius: 12px;
		object-fit: cover;
		pointer-events: none;
	}

	.carousel-item.selected {
		transform: translate(-50%, -50%) scale(1) rotateY(0deg);
		opacity: 1;
		z-index: 3;
	}

	.carousel-item.left {
		transform: translate(-150%, -50%) scale(0.9) rotateY(60deg);
		opacity: 0.4;
		z-index: 2;
		filter: blur(3px);
	}

	.carousel-item.right {
		transform: translate(50%, -50%) scale(0.9) rotateY(300deg);
		opacity: 0.4;
		z-index: 2;
		filter: blur(3px);
	}


	/* ---------- TEXT SECTION ---------- */
	.text-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		color: white;
	}

	.title {
		font-size: clamp(2rem, 4vw, 3.5rem);
		font-weight: 600;
		margin: 0;
		margin-top: 1.5rem;
		text-align: center;
	}

	.content-card {
		background:
			radial-gradient(
				ellipse at top,
				rgba(var(--color4), 0.15) 0%,
				transparent 70%
			),
			rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-color: rgb(2, 168, 168);
		border-width: 1px;
		border-radius: 16px;
		padding: 2rem;
		margin: 70px;
		margin-top: 0;
	}

	.content-card p {
		font-size: 1.1rem;
		font-weight: 300;
		line-height: 1.7;
		font-family: var(--pfont);
		letter-spacing: 0.005em;
		color: rgba(255, 255, 255, 0.9);
		text-align: justify;
		margin-bottom: 1.5rem;
	}

	.content-card p:last-child {
		margin-bottom: 0;
	}

	.highlight {
		/* color: rgba(var(--color3), 1); */
		font-weight: 1000;
	}

	/* ---------- RESPONSIVE DESIGN ---------- */
	@media (max-width: 1024px) {
		main {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 3rem;
		}

		.text-section {
			order: 2;
			align-items: center;
		}

		.title {
			margin-top: -1rem;
			text-align: center;
		}

		.content-card p {
			text-align: left;
		}
		.carousel-wrapper {
			height: 18rem;
		}
	}

	@media (max-width: 768px) {
		main {
			padding: 1.5rem;
		}
		.title {
			margin-top: -1.8rem;
		}
		.content-card {
			padding: 1.5rem;
			width: 23rem;
		}

		.content-card p {
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
		main {
			padding: 1rem;
		}

		.title {
			margin-top: -3.5rem;
			font-size: 2rem;
		}

		.content-card {
			padding: 1rem;
		}

		.content-card p {
			font-size: 0.95rem;
		}
	}
</style>
