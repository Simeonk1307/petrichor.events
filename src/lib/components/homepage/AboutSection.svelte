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
    const farRightIndex = () => (current + 2 + items.length) % items.length;
</script>

<main>
	<!-- <div class="carousel-wrapper">
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
	</div> -->
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
	justify-content: flex-start;
	padding-top: 170px;
	gap: 2rem; 
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

	.carousel-item.far-right {
		transform: translate(150%, -50%) scale(0.7);
		z-index: 2;
		transition: none;
	}

	.carousel-item.right {
		transform: translate(50%, -50%) scale(0.7);
		opacity: 0.6;
		z-index: 2;
		filter: blur(4px);
	}

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
	content: ''; 
	display: block; 
	width: 55%; 
	margin: 0.05rem auto 0; 
	border-bottom: 2px solid #00e3ff; 
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
    filter: drop-shadow(0 0 60px rgba(41, 41, 41, 0.8)) 
            drop-shadow(0 0 100px rgba(0, 0, 0, 0.3)); 
  }

	@keyframes glowPulse {
		0% { filter: drop-shadow(0 0 0px rgba(0, 227, 255, 0.6))
					drop-shadow(0 0 30px rgba(0, 227, 255, 0.4)); }
		100% { filter: drop-shadow(0 0 25px rgba(0, 227, 255, 0.9))
						drop-shadow(0 0 60px rgba(0, 227, 255, 0.6)); }
	}

  /* Responsive */
  @media (max-width: 1150px) {
	.first-block {
		gap: 1.5rem; 
	}

	.first-block {
		min-width: unset;
	}

	.content {
		min-width: unset;
	}

	.heading {
		font-size: 3rem;
	}

	.caption {
		font-size: 1.1rem;
	}

	.imagediv img {
		max-width: 350px;
	}
}
  @media (max-width: 900px) {
    .first-block {
		flex-direction: column;
		text-align: center;
		margin-top: -6rem;
		padding: 4rem 1.5rem;
		background-color: transparent;
		min-width: unset;
		position: relative;
	}

    .content {
      max-width: 100%; /* Changed width */
      min-width: unset;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	  z-index: 1;
    }

    .heading {
      font-size: 3.2rem; /* Changed font size */
    }

    .subheading {
      font-size: 1.3rem; /* Changed font size */
    }

    .caption {
      font-size: 1.05rem; /* Changed font size */
      line-height: 1.7;
	  max-width: 90%;
	  margin-left: 1.5rem;
    }

	.imagediv {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
      }

    .imagediv img {
      min-width: 500px; /* Changed image size */
      margin-top: 2rem;
	  animation: glowPulse 1s ease-in-out infinite alternate;
	  opacity: 0.5;
    }
  }

  @media (max-width: 440px) {
	.first-block {
		/* Further reduce padding for the smallest screens */
		margin-top: -5rem;
		padding: 3rem 1rem;
	}

	.heading {
		/* Decrease heading size */
		font-size: 2.5rem;
	}

	.subheading {
		/* Decrease subheading size */
		font-size: 1.1rem;
	}

	.caption {
		/* Adjust caption for readability and remove fixed margin */
		font-size: 0.95rem;
		line-height: 1.6;
		margin-left: 1.1rem;
	}

	.button {
		/* Make buttons smaller if they exist */
		padding: 0.7rem 1.5rem;
		font-size: 0.9rem;
	}
	
	.imagediv img {
		/* Ensure the background image is not too large and remove margin */
		max-width: 300px;
		margin-top: 0;
	}
	}
</style>