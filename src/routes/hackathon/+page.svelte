<script lang="ts">
	import { goto } from '$app/navigation';
	import { workshops } from '$lib/data/workshop.js';
	import { onMount } from 'svelte';
	import location from '$lib/assets/location.svg';
	import VanillaTilt from 'vanilla-tilt';
	import WorkShopComp from './WorkShopComp.svelte';
	import hackpost from '$lib/assets/MainWorkshops/neurobot/NeurobotHackathon.png';
	import petrhackpostdark from '$lib/assets/MainWorkshops/hackathon_dark.png';
	import petrhackpostlight from '$lib/assets/MainWorkshops/hackathon_light.png';
	let left: number, right: number;

	onMount(() => {
		VanillaTilt.init(document.querySelectorAll('.card'), {
			max: 10,
			speed: 10000
		});
	});
</script>

<main>
	<!-- Workshops Intro Section -->
	<div class="_blank" />
	<div class="discover atmos">
		<h1>Neurobots Championship</h1>
		<p>Workshop & Hackathon</p>
		<!-- <h3>Learn new skills from IIT experts</h3> -->
	</div>
	<section class="workshop-intro">
		<div class="intro-poster">
			<img src={hackpost} alt="Workshops Poster" />
		</div>

		<div class="intro-text">
			<!-- <h2>Neurobots Hackathon</h2> -->
			<p>
				Neurobots is a national-level innovation platform that brings together student innovators
				from across India to learn, build, and compete in future-ready technologies. Designed beyond
				a traditional hackathon, Neurobots combines hands-on workshops and an intense hackathon
				experience, guided by expert mentors and industry professionals.
			</p>
			<p>
				Participants will work on real-world problem statements in domains such as Robotics, Drones,
				Artificial Intelligence, Agentic AI, Automation, and Smart Systems, with evaluation based on
				innovation, technical depth, feasibility, and impact. Whether you’re a beginner with a bold
				idea or an experienced builder, Neurobots offers a level playing field to showcase your
				skills on a national stage.
			</p>
			<!-- <p class="tagline">Learn • Build • Innovate</p> -->
		</div>
	</section>

	<!-- <div class="_blank" /> -->
	<!-- <div class="discover atmos">
		<h1>Discover Workshops</h1>
		<h3>Learn new skills from IIT experts</h3>
	</div> -->
	<!-- <section class="promo-banner">
		<h2>
			Use code
			<span class="promo-code">PETR120E4E</span> for registration.
		</h2>
	</section> -->

	<section class="promo-strip">
		<span class="promo-text">
			Use the promocode <b class="promo-code">PETR120E4E</b> during registration
		</span>
	</section>

	<div class="discover atmos">
		<h1>Discover Workshops</h1>
		<h3>Learn new skills from IIT experts</h3>
	</div>
	<div class="main">
		{#each Object.entries(workshops) as [id, workshop], pos}
			<div
				class="card {id} tilt-card"
				role="button"
				on:mousedown={() => {
					// goto(`/workshop/${id}`);
					goto(`/hackathon/${id}`);
				}}
				tabindex="0"
			>
				<div class="hover-content">
					<span style="display: flex;gap:4px;">
						<div class="date">{`₹${workshop.price}`}</div>
					</span>
					{#if workshop.prerequisites.length > 0}
						<p class="opi" style="color: #9999ff; text-align: left;">
							Prerequisites:<br />
							{#each workshop.prerequisites as spk, i}
								<li>
									{spk.length > 70 ? `${spk.substring(0, 70)}...` : spk}
								</li>
							{/each}
						</p>
					{/if}
					<div class="icon opi">
						<img src={location} alt="Location icon" style="height:30px !important;" width="30px" />
						<span class="venue" style="color: #66ffff;">{workshop.venue}</span>
					</div>
				</div>
				<div class="imageHolder {id}">
					<img src={workshop.image} alt={workshop.name} />
				</div>
				<!-- <div class="imageDescHolder {id}">
					<img src={workshop.imageDesc} alt={workshop.name} />
				</div> -->
			</div>
		{/each}
	</div>
	<section class="workshop-intro">
		<div class="intro-poster">
			<img src={petrhackpostdark} alt="IPTIF Hackathon Poster" />
		</div>

		<div class="intro-text">
			<!-- <h2>Neurobots Hackathon</h2> -->
			<p>
				Kerala's STP generate nitrogen-rich biosolids. Your goal: Design an AI/ML decision system to
				optimize their transport and application to farmland.
			</p>
			<p>
				The Catch: You must balance crop demand against monsoon rains to prevent pollution and
				maximize carbon credits.
			</p>
			<button class="price_btn" on:click={()=>window.open("https://unstop.com/o/4Q2kLGY?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge","_blank")}>Register for free</button>
			<!-- <p class="tagline">Learn • Build • Innovate</p> -->
		</div>
	</section>
</main>

<style>
	.hover-content {
		position: absolute;
		bottom: -100%;
		width: 100%;
		border-radius: 20px;
		color: #fff;
		display: flex;
		background-color: rgba(0, 0, 0, 0.805);
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		/* transition: bottom 0.3s ease; */
		padding: 20px;
		margin-top: 50px;
		text-align: left;
		z-index: 100;
	}
	.hover-content p li {
		width: 100%;
		overflow-wrap: break-word;
		word-wrap: break-word;

		-ms-word-break: break-word;
		word-break: break-word;

		/* Adds a hyphen where the word breaks, if supported (No Blink) */
		-ms-hyphens: auto;
		-moz-hyphens: auto;
		-webkit-hyphens: auto;
		hyphens: auto;
		text-overflow: clip;
		/* padding: 0 10px; */
	}

	.card:hover .hover-content {
		bottom: 0%;
	}

	.opi {
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.hover-content .icon {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
		color: rgb(205, 245, 145);
	}
	.date {
		position: absolute;
		top: -25px;
		left: 20px;
		border-radius: 100px;
		padding: 10px;
		background-color: #b3e5fccf;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: black;
	}
	.card:hover .opi {
		opacity: 1;
	}

	.hover-content .venue,
	.hover-content .date {
		font-size: 18px;
		margin: 0.2rem 0;
	}
	._blank {
		height: 100px;
	}
	.wname {
		z-index: 2;
		text-align: center;
		display: flex;
		align-items: center;
		padding: 10px 10px;
		height: 60px;
		justify-content: center;
	}
	main {
		z-index: 3;
		position: relative;
		background: radial-gradient(
			30% 80% at 110% 50%,
			rgba(192, 248, 252, 0.8) 0%,
			rgba(139, 236, 248, 0.8) 14.42%,
			rgba(83, 177, 192, 0.8) 27.88%,
			rgba(55, 144, 164, 0.8) 38.94%,
			rgba(40, 129, 147, 0.8) 48.08%,
			rgba(4, 32, 44, 0.5) 78.85%,
			rgba(2, 17, 20, 0.5) 88.94%,
			rgba(0, 7, 8, 0.5) 97.12%
		);
		background-repeat: no-repeat;
		background-color: #000;
	}
	.main {
		display: flex;
		padding: 2rem;
		flex-direction: row;
		gap: 5rem;
		flex-wrap: wrap;
		/* margin: 10rem; */
		justify-content: center;
	}
	.card {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-size: larger;
		flex-direction: column;
		overflow: hidden;
		height: 20rem;
		width: 20rem;
		cursor: pointer;
		z-index: 12;
		border-radius: 10%;
		transition: all 0.1s ease-in-out;
	}
	.main:hover .card:not(:hover) {
		/* filter: blur(3px) grayscale(0.7); */
		scale: 1;
	}
	.main:not(:has(.card:hover)) .card {
		filter: none;
	}
	.card:hover {
		border-radius: 5%;
	}

	.card:hover .hover-content {
		z-index: 40;
	}
	.card:hover .imageHolder {
		filter: brightness(0.8);
		/* display: none; */
	}
	.imageHolder {
		height: 20rem;
		position: absolute;
		z-index: 10;
	}

	/* .card:hover .imageDescHolder {
		filter: brightness(0.8);
		display: block;
	}
	.imageDescHolder {
		height: 20rem;
		position: absolute;
		z-index: 10;
		display: none;
	} */

	img {
		height: 20rem;
		aspect-ratio: 1;
		clip-path: circle(100% at center);
		transition: 0.1s ease-in-out;
	}
	.discover {
		color: rgba(255, 255, 255, 1);
		z-index: 3;
		text-align: center;
		margin-bottom: 1em;
	}
	.discover > h1 {
		font-size: 50px;
		font-family: var(--sfont);
		margin-bottom: 0rem;
	}

	.workshop-intro {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3.5rem;
		padding: 3rem 2rem;
		max-width: 1200px;
		margin: 0 auto 3rem auto;
		color: white;
	}

	.intro-poster {
		flex: 1;
		max-width: 520px;
		transform: scale(1.04);
		border-radius: 18px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
	}

	.intro-poster img {
		height: auto !important;
		width: 100%;
		aspect-ratio: auto !important;
		clip-path: none !important;
		object-fit: contain;
	}

	.intro-text {
		flex: 1;
	}

	.intro-text h2 {
		font-size: 2.3rem;
		margin-bottom: 1rem;
		font-family: var(--sfont);
	}

	.intro-text p {
		font-size: 1.1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.85);
		margin-bottom: 0.9rem;
	}

	.intro-text .tagline {
		margin-top: 1rem;
		font-weight: bold;
		color: #66ffff;
		letter-spacing: 0.05em;
	}

	/* Mobile */
	@media (max-width: 900px) {
		.workshop-intro {
			flex-direction: column;
			text-align: center;
		}

		.intro-poster {
			max-width: 300px;
		}
	}

	.promo-strip {
		width: 100%;
		padding: 1rem 1rem;
		margin: 3rem 0 4rem 0;

		display: flex;
		justify-content: center;
		align-items: center;

		background: linear-gradient(
			90deg,
			rgba(102, 255, 255, 0.15),
			rgba(153, 102, 255, 0.15),
			rgba(102, 255, 255, 0.15)
		);

		border-top: 1px solid rgba(102, 255, 255, 0.4);
		border-bottom: 1px solid rgba(102, 255, 255, 0.4);

		z-index: 4;
	}

	.promo-text {
		color: white;
		font-size: 1.5rem;
		text-align: center;
		letter-spacing: 0.03em;
	}

	.promo-code {
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;

		/* Soft highlight via color, not background */
		color: #7ffcff;

		/* Subtle emphasis */
		text-shadow: 0 0 6px rgba(127, 252, 255, 0.35), 0 0 14px rgba(127, 252, 255, 0.15);

		font-size: 1.15em;
		white-space: nowrap;
	}

	/* .promo-code {
		display: inline-block;
		margin: 0 0.4rem;
		padding: 0.25rem 0.9rem;

		background: rgba(102, 255, 255, 0.18);
		color: #bfffff;

		border-radius: 10px;
		font-weight: 600;
		font-size: 1.15em;

		border: 1px solid rgba(102, 255, 255, 0.45);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 0 6px rgba(102, 255, 255, 0.15);

		letter-spacing: 0.08em;
		text-transform: uppercase;

		transition: all 0.2s ease;
	} */

	/* .promo-code {
		display: inline-block;
		margin: 0 0.4rem;
		padding: 0.25rem 0.9rem;

		background-color: #66ffff;
		color: black;
		border-radius: 8px;
		font-weight: 700;

		box-shadow: 0 0 18px rgba(102, 255, 255, 0.6);
	} */

	button {
		width: 150px;
		/* background-color: transparent; */
		border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: rgb(255, 254, 254);
		z-index: 200;
		text-align: center;
		margin: 1em 0;
		font-weight: 600;
		overflow: hidden;
		font-size: large;
	}

	.price_btn {
		color: white;
		/* width: 100%; */
		font-weight: 700;
		background: transparent;
		border-radius: 2rem;
		border: 1px solid white;
		text-wrap: nowrap;
	}
	.price_btn:hover {
		color: black;
		background: #aaaaaa;
	}

	@media (max-width: 1000px) {
		.discover h1 {
			font-size: 1.8rem;
		}
	}
	@media (max-width: 900px) {
		.discover h1 {
			font-size: 1.5rem;
		}
	}
	@media (hover: none) {
		.card {
			border-radius: 10px;
		}
		.hover-content {
			position: absolute;
			height: 0;
			margin: 0;
			padding: 0;
			bottom: 0;
			background-color: transparent;
		}
		.date {
			left: 0px;
			top: -70px;
			padding: 0;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 65px;
			height: 65px;
		}
		.opi {
			display: none;
		}
	}
	@media (pointer: coarse) {
		img {
			clip-path: circle(100% at center);
		}
	}
</style>