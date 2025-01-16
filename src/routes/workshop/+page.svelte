<script lang="ts">
	import { goto } from '$app/navigation';
	import { workshops } from '$lib/data/workshop.js';
	import { onMount } from 'svelte';
	import location from '$lib/assets/location.svg';
	import VanillaTilt from 'vanilla-tilt';
	let left: number, right: number;

	onMount(() => {
		VanillaTilt.init(document.querySelectorAll('.card'), {
			max:10,
			speed:10000
		});
	});
</script>

<main>
	<div class="_blank" />
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
					goto(`/workshop/${id}`);
				}}
				tabindex="0"
			>
				<div class="hover-content">
					<span style="display: flex;gap:4px;">
						<div class="date">{`₹${workshop.price}`}</div>
					</span>
					{#if workshop.prerequisites.length > 0}
						<p class="opi" style="color: orange; text-align: left;">
							Prerequisites:<br/>
							{#each workshop.prerequisites as spk, i}
								<li>
									{(spk.length > 70) ? `${spk.substring(0,70)}...` : spk}
								</li>
							{/each}
						</p>
					{/if}
					<div class="icon opi">
						<img src={location} alt="Location icon" style="height:30px !important;" width="30px" />
						<span class="venue">{workshop.venue}</span>
					</div>
				</div>
				<div class="imageHolder {id}">
					<img src={workshop.image} alt={workshop.name} />
				</div>
			</div>
		{/each}
	</div>
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
		transition: bottom 0.3s ease;
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
		transition: all 0.1s ease-in-out;
	}
	.main:hover .card:not(:hover) {
		filter: blur(3px) grayscale(0.7);
		scale: 1;
	}
	.main:not(:has(.card:hover)) .card {
		filter: none;
	}
	.card:hover {
		border-radius: 20%;
	}

	.card:hover .hover-content {
		z-index: 40;
	}
	.card:hover .imageHolder {
		filter: brightness(0.8);
	}
	.imageHolder {
		height: 20rem;
		position: absolute;
		z-index: 10;
	}
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
		margin-bottom: -1rem;
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
			align-items: center	;
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
