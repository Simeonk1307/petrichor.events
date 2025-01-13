<script lang="ts">
	import type { Schedule } from '$lib/types';
	import location_svg from '$lib/assets/location.svg';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import cult from '$lib/assets/Cult&Tech/cult.jpg'
    import tech from '$lib/assets/Cult&Tech/TechnicalWeb.jpg'
    import informal from '$lib/assets/Cult&Tech/Informals.png'

	// onMount(() => {
	//     goto('/home')
	// })
    const images = [cult, tech, informal];

    let currIndex = 0;

	let schedule: { [key: string]: Schedule } = {
		'18th January 2025': {
			Cultural: [
				{
					event_name: 'NAME',
					timing: '8:00',
					venue: 'Sahyadri'
				},
				{
					event_name: 'NAME2',
					timing: '8:00',
					venue: 'Sahyadri'
				},
				{
					event_name: 'NAME3',
					timing: '8:00',
					venue: 'Sahyadri'
				},
			],
			Technical: [
				{
					event_name: 'NAME2',
					timing: '8:00',
					venue: 'Sahyadri'
				}
			],
			Workshop: [
				{
					event_name: 'NAME3',
					timing: '8:00',
					venue: 'Sahyadri'
				}
			]
		},
		'19th January 2025': {}
	};
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
		selected_event_type = Object.keys(currentSchedule)[0];
		if (selected_event_type == undefined) {
			selected_event_type = '';
		}
		events = currentSchedule[selected_event_type];
		if (events == undefined) {
			events = [];
		}
	};
	const changeeventtype = (event_type) => {
		selected_event_type = event_type;
		events = currentSchedule[selected_event_type];
		if (events == undefined) {
			events = [];
		}
	};
</script>

<main>
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="bg" src="{images[currIndex]}" alt="bg image" />
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
						<div
							class="card"
							on:click={() => {
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
						<div class="timing">{event.timing}</div>
						<div class="name">{event.event_name}</div>
						<div class="venue">
							<img src={location_svg} height="25px" width="25px" />
							{event.venue}
						</div>
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
    .name{
        color: #efacfbfb;
        font-weight: bolder;
        font-size: larger;
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
		transition: 200ms ease-in-out;
		overflow: hidden;
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
		scrollbar-width: none;  /* Firefox */
		overflow-y: scroll;
		height: 100vh;
		/* padding-top: 80px; */
		width: 100%;
		background-color: #28282d98;
		backdrop-filter: blur(40px);
        background-position: center;
        background-size: cover;
	}
	.sbcont{
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
        padding: 100px 0px;
		position: relative;
		overflow: hidden;
	}
	.schedule {
		flex: 3;
		height: 80vh;
		/* background-color: rgb(224, 224, 224); */
		overflow-y: scroll;
		padding: 20px 0;
		color: rgba(58, 14, 2, 0.81);
        padding: 25px;
	}
	.venue {
		display: flex;
		align-items: center;
		font-weight: bold;
        color: #b3f4ecfb;
	}
	.timing {
		font-weight: bold;
        color: #b9f8f1fb;
	}
	.event {
		display: flex;
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
	.tag {
		font-family: var(--pfont);
		border-bottom: 1px solid gray;
		width: 100%;
		padding: 30px 10px;
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
		padding-inline: 20px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
        overflow: hidden;
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
		position: relative;
		display: flex;
		align-items: flex-start;
		border: 1px solid gray;
		border-top: none;
		height: auto;
		width: 100%;
		justify-content: flex-start;
	}
	.selected {
        box-shadow: 0 0 20px 10px #50e2c3 inset;
	}
	@media (max-width: 600px) {
		.nav_bar {
			height: auto;
			width: 100%;
			flex-direction: column;
		}
		.nav_item {
			width: 100%;
		}
		.schd {
			flex-direction: column-reverse;
		}
		.sidebar {
			width: 100%;
			height: auto;
			flex-direction: row;
			flex: none;
			border: none;
			overflow-y: unset;
			overflow-x: scroll;
			/* overflow: scroll; */
			padding: 0 !important;
			height: 120px;
		}
		.tag {
			height: 100%;
			width: 150px;
			min-width: 150px;
			border: 1px solid gray;
			border-right: none;
		}
		.schedule {
			width: 100%;
		}
	}
</style>
