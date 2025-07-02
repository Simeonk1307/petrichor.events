<script lang="ts">
	import photo from '$lib/assets/about.jpg';

	export let slidePhoto: Function;
	let img: HTMLElement;

	slidePhoto = (value: number) => {
		if (img) {
			img.style.transform = `translateX(${value}px)`;
		}
	};
</script>

<main>
	<div class="text-section">
		<h1 class="title atmos">About Us</h1>
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

	<div class="image-section" bind:this={img}>
		<img src={photo} alt="About Petrichor" class="image" />
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
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 4rem;
		padding: 2rem;
		box-sizing: border-box;
		position: relative;
		z-index: 2;
	}

	/* ---------- TEXT SECTION ---------- */
	.text-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		color: white;
	}

	.title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 600;
		margin: 0;
		text-align: left;
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

	/* ---------- IMAGE SECTION ---------- */
	.image-section {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.image {
		width: 100%;
		max-width: 650px;
		object-fit: cover;
		height: auto;
		border-radius: 12px;
		border-width: 1px;
		border-color: rgb(88, 88, 253);
		/* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		transition: transform 0.3s ease; */
	}

	.image:hover {
		transform: scale(1.02);
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
			text-align: center;
		}

		.content-card p {
			text-align: left;
		}

		.image-section {
			order: 1;
		}
	}

	@media (max-width: 768px) {
		main {
			padding: 1.5rem;
		}

		.content-card {
			padding: 1.5rem;
		}

		.content-card p {
			font-size: 1rem;
		}

		.image {
			max-width: 90vw;
		}
	}

	@media (max-width: 480px) {
		main {
			padding: 1rem;
		}

		.title {
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
