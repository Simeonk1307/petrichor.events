<script lang="ts">
	import location_svg from '$lib/assets/location.svg';
	import cult from '$lib/assets/Cult&Tech/cult.jpg';
	import tech from '$lib/assets/Cult&Tech/TechnicalWeb.jpg';
	import books from '$lib/assets/Informals/books.webp';
	import {schedule} from "$lib/data/schedule"
	import workshops from "$lib/assets/Informals/workshop.jpg"
	import informal from '$lib/assets/Cult&Tech/Informals.png';
	import { onMount } from 'svelte';

	export let pageWidth: number;
	const images = [
		cult,
		tech,
		workshops,
		informal,
		books,
		'https://cdn.midjourney.com/f7b1ae0c-e49f-41b6-9515-cc0e0db964a1/0_1.webp'
	];

	let currIndex = 0;
	onMount(() => {
		window.onresize = (e) => {
			pageWidth = window.innerWidth
		}
		pageWidth = window.innerWidth
	})

	let days = Object.keys(schedule);
	let colors = ['#607D8B', '#8D6E63'];
	let selected_day = days[0];
	let currentSchedule = schedule[selected_day];
	let selected_event_type = Object.keys(currentSchedule)[0];
	if (selected_event_type == undefined) {
		selected_event_type = '';
	}
	let events: any[] = currentSchedule[selected_event_type];
	const change_date = (day: string) => {
		console.log(day);
		selected_day = day;
		currentSchedule = schedule[selected_day];
		selected_event_type = Object.keys(currentSchedule)[currIndex];
		if (selected_event_type == undefined) {
			selected_event_type = '';
		}
		events = currentSchedule[selected_event_type];
		if (events == undefined) {
			events = [];
		}
		currIndex = currIndex;
	};
	const changeeventtype = (event_type: string) => {
		selected_event_type = event_type;
		events = currentSchedule[selected_event_type];
		if (events == undefined) {
			events = [];
		}
	};
</script>

<main>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img class="bg" src={images[currIndex]} alt="bg image" />
	<div class="scd_holder">
		<div class="nav_bar">
			{#each days as day, i}
				<button
					class="nav_item {selected_day == day ? 'selected' : ''}"
					style="background-color: {colors[i]};"
					on:click={() => change_date(day)}
				>
					<h3>{day}</h3>
				</button>
			{/each}
		</div>
		<div class="schd">
			<div class="sidebar">
				<div class="sbcont">
					{#each Object.keys(currentSchedule) as event_type, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<div
							class="card {currIndex == index ? 'selected_card' : ''}"
							on:click={() => {
								changeeventtype(event_type);
								currIndex = index;
							}}
							on:mouseover= {() => {
								changeeventtype(event_type);
								currIndex = index;
							}}
							style="background-image: url('{images[index]}');"
						>
							<!-- {event_type} -->
							<p class="atmos">
								{event_type}
							</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="schedule">
				{#each events as event}
						<div class="event">
							<div class="name">{event.event_name}</div>
							{#if pageWidth <= 600}
							<span>

								<div class="timing">{event.timing}</div>
								<div class="venue">
									<img src={location_svg} height="25px" alt="location" width="25px" />
									{event.venue}
								</div>
							</span>
							{:else}
								<div class="timing">{event.timing}</div>
								<div class="venue">
									<img src={location_svg} height="25px" alt="location" width="25px" />
									{event.venue}
								</div>
							{/if}
						</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
	}
	.selected_card {
		transform: scale(1.1);
		filter: brightness(2);
	}
	.name {
		color: #efacfbfb;
		font-weight: bolder;
		font-size: larger;
		text-align: center;
	}
	.card {
		width: 90%;
		aspect-ratio: 2;
		background-position: center;
		background-size: cover;
		position: relative;
		cursor: pointer;
		margin: 0.5em 0em;
		border-radius: 0.4em;
		transition: all 200ms ease-in-out;
	}
	.card::before {
		background: rgb(0, 0, 0);
		background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		transition: 100ms;
	}
	.card:hover {
		transform: scale(1.08) translateX(0px);
		z-index: 100000;
	}
	.card > p {
		position: absolute;
		font-size: 20px;
		bottom: 0;
		left: 1em;
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-position: center;
		background-size: cover;
		transition: background-image 2s;
		filter: blur(5px) brightness(50%);
	}
	.sidebar {
		flex: 1;
		height: 100%;
		/* padding-top: 80px; */
		width: 100%;
		background-color: #28282d98;
		backdrop-filter: blur(40px);
		background-position: center;
		background-size: cover;
		overflow-y: scroll;
	}
	.sbcont {
		animation: scrollpc 1.5s ease-in-out;
		animation-delay: 1s;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1em;
	}
	button {
		border: none;
		padding: 10px;
	}
	main {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: relative;
	}
	.schedule {
		flex: 3;
		height: 80vh;
		/* background-color: rgb(224, 224, 224); */
		padding: 20px 0;
		color: rgba(58, 14, 2, 0.81);
		padding: 25px;
	}
	.venue {
		display: flex;
		align-items: center;
		justify-content: end;
		font-weight: bold;
		color: #b3f4ecfb;
	}
	.timing {
		font-weight: bold;
		color: #b9f8f1fb;
	}
	.event {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
		align-items: center;
		padding: 20px;
		border-top: white 1px dashed;
		border-bottom: white 1px dashed;
		justify-content: space-between;
	}
	.nav_item {
		display: flex;
		border: none;
		align-items: center;
		justify-content: center;
		padding: 10px;
		flex: 1;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
		height: 100%;
	}
	.nav_item * {
		font-family: var(--pfont);
	}
	.nav_item:active {
		filter: hue-rotate(90deg);
	}
	.scd_holder {
		display: flex;
		width: 100%;
		height: calc(100% - 100px);
		top: 100px;
		position: relative;
		padding-inline: 20px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.nav_bar {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		border: 1px solid gray;
		border-bottom: none;
		width: 100%;
	}
	.schd {
		min-height: 80vh;
		flex: 4;
		position: relative;
		display: flex;
		align-items: flex-start;
		border: 1px solid gray;
		overflow: hidden;
		border-top: none;
		width: 100%;
		justify-content: flex-start;
	}
	.selected {
		box-shadow: 0 0 20px 10px #50e2c3 inset;
	}
	@media (max-width: 600px) {
		.event {
			display: flex;
			flex-direction: column;
			align-items: start;
			padding: 10px 4px;
			position: relative;
		}
		.name {
			width: 100%;
			text-align: end;
			font-size: larger;
		}
		.event span {
			display: flex;
			width:  100%;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.timing,
		.venue {
			padding: 10px 0;
		}
		.nav_bar {
			height: auto;
			width: 100%;
			flex-direction: column;
		}
		.nav_item {
			width: 100%;
		}
		.schd {
			
			min-height: unset;
			flex-direction: column-reverse;
		}
		.sidebar {
			width: 100%;
			height: auto;
			flex: none;
			border: none;
			overflow-y: hidden;
			overflow-x: scroll;
			/* overflow: scroll; */
			padding: 0 !important;
			height: 170px;
		}
		.sbcont > * {
			display: block !important;
		}
		.sbcont {
			display: flex;
			flex-direction: row;
			width: unset;
			animation-delay: 1s;
		}

		.card {
			width: 12rem;
			background-position: center;
			background-size: cover;
			position: relative;
			cursor: pointer;
			flex: 0 0 auto; /* Prevent cards from stretching to fill available space */
			margin-right: 10px; /* Add some spacing between cards if needed */
			border-radius: 1em;
			overflow: hidden;
			margin-top: 0.4em;
		}
		.card > p {
			font-size: 17px;
		}
		.schedule {
			width: 100%;
			overflow-y: scroll;
			height: unset;
			padding: 0;
		}
		.scd_holder {
			padding: 0 10px;
			top: 100px;
			height: calc(100% - 70px);
		}
	}
</style>
