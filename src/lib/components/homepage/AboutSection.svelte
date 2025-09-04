<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import logo from '$lib/assets/HomePage/logo-glow.png';
	import photo from '$lib/assets/about.jpg';

	let content: HTMLElement;
	let img: HTMLElement;
	let height = 0;
	let middle: Array<number> = [];
		
	let items = [photo, photo, photo, photo, photo, photo];
    let current = 0;
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
    // Add this new helper function
    const farRightIndex = () => (current + 2 + items.length) % items.length;
</script>

<main>
	<div class="carousel-wrapper">
		<div class="carousel">
			{#each items as img, i}
				<div
					class="carousel-item
                        {i === current ? 'selected' : ''}
                        {i === leftIndex() ? 'left' : ''}
                        {i === rightIndex() ? 'right' : ''}
						{i === farRightIndex() ? 'far-right' : ''}"
				>
					<img src={img} alt="carousel" />
				</div>
			{/each}
		</div>
	</div>
	<div class="first-block">
		<div class="content" bind:this={content}>
			<div class="title">
				<span class="heading">ABOUT US</span>
			</div>
			<div class="content_box">
				<div class="caption">
					<p>
						<span class="highlight">Petrichor '26</span>, the annual techno-cultural fest of IIT
						Palakkad, is back—and this time, it's bigger, bolder, and more exciting than ever
						before. Named after the earthy fragrance that follows the first rain, Petrichor captures
						the essence of creativity and renewal.
					</p>
					<p>
						Every year, we—the students of IIT Palakkad—unite our passion and energy to bring this
						fest to life. Blending cutting-edge technical excellence with rich cultural expression,
						Petrichor offers a dynamic platform for students to showcase their ideas, talents, and
						skills.
					</p>
					<p>
						From immersive workshops to captivating events, <span class="highlight">Petrichor '26</span>
						promises an unforgettable experience for everyone who attends. Join us in celebrating
						knowledge, creativity, and the thrill of discovery!
					</p>
				</div>
			</div>
		</div>
		<div class="imagediv" bind:this={img} draggable="false">
			<img src={logo} alt="Petrichor glowing logo" />
		</div>
	</div>
</main>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

  main {
	background: #000;
	color: #e6e6e6;
	font-family: "Italiana", serif;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start; /* Changed from 'center' */
	padding-top: 170px; /* Add padding to push content down */
	gap: 2rem; /* Optional: Sets a minimum gap */
  }

  /* ------------ CAROUSEL ----------- */
    .carousel-wrapper {
        position: relative;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
		padding-bottom: 0;
		margin-bottom: 0;
    }

    .carousel {
		position: relative;
		width: 100%;
		height: 100%;
	}

	/* This is now the "hidden-left" state. Items exiting left will animate to here. */
	.carousel-item {
		position: absolute;
		top: 50%;
		left: 50%;
		transition: transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease;
		opacity: 0;
		transform: translate(-250%, -50%) scale(0.5);
	}

	/* This is the new "hidden-right" state. Items entering from the right will animate from here. */
	.carousel-item.far-right {
		transform: translate(150%, -50%) scale(0.7);
		z-index: 2;
		/* transition: none prevents hidden items from sliding across the screen */
		transition: none;
	}

	.carousel-item.right {
		transform: translate(50%, -50%) scale(0.7);
		opacity: 0.6;
		z-index: 2;
		filter: blur(4px);
	}

	/* Your .left and .selected styles remain the same */
	.carousel-item.left {
		transform: translate(-150%, -50%) scale(0.7);
		opacity: 0.6;
		z-index: 2;
		filter: blur(4px);
	}

	.carousel-item.selected {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
		z-index: 3;
	}

    .carousel-item img {
        width: 400px;
        height: 240px;
        border-radius: 12px;
        object-fit: cover;
        pointer-events: none;
    }

  .first-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    gap: 3rem;
    flex: 1;
	margin-top: -7rem;
	min-width: 750px;
  }

  .content {
    min-width: 700px;
	display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
	text-align: center;
  }

  .title {
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
  }

  .heading {
    font-size: 3.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #fff;
	margin-bottom: 1.8rem;
  }

  .heading::after {
	content: ''; /* REQUIRED to make the pseudo-element render */
	display: block; /* Allows the element to have a width */
	width: 55%; /* Or any width you prefer */
	margin: 0.05rem auto 0; /* Centers the line and adds space */
	border-bottom: 2px solid #00e3ff; /* Creates the underline */
  }

  .caption {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #bdbdbd;
  }

  .imagediv {
    display: flex;
    justify-content: center;
    align-items: center;
	margin: 0;
	padding: 0;
	width: max-content;
  }

  .imagediv img {
    max-width: 650px;
    filter: drop-shadow(0 0 60px rgba(41, 41, 41, 0.8)) /* More intense, slightly less opaque */
            drop-shadow(0 0 100px rgba(0, 0, 0, 0.3)); /* Wider, very soft, and more transparent layer */
  }

  /* Responsive */
  @media (max-width: 900px) {
    .first-block {
      flex-direction: column;
      text-align: center;
      padding: 3rem 2rem;
    }

    .content {
      max-width: 90%;
    }
    
    .imagediv img {
      max-width: 280px;
      margin-top: 2rem;
	}

	.carousel-wrapper {
            height: 250px;
	}
	.carousel-item img {
		width: 300px;
		height: 180px;
	}
  }


</style>