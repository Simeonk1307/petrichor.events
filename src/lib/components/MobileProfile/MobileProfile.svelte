<script lang="ts">
	import EventCard from './EventCard.svelte';
    import cultural from '$lib/assets/HomePage/cultural.png';
    import technical from '$lib/assets/HomePage/technical.jpeg'

	export let profileData = {
		username: 'Username',
		mobile: 'Phone',
		college: 'College',
		graduation: 'Grad'
	};

	let eventDisplay = true;

	let events = [
		{
			name: 'Event Name',
			DateTime: 'Date & Time',
			Location: 'Location',
			imgUrl: cultural
		},
		{
			name: 'Event Name',
			DateTime: 'Date & Time',
			Location: 'Location',
			imgUrl: cultural
		},
		{
			name: 'Event Name',
			DateTime: 'Date & Time',
			Location: 'Location',
			imgUrl: cultural
		},
	];
	let nightEvents = [
		{
			name: 'Night Name',
			DateTime: 'Date & Time',
			Location: 'Location',
			imgUrl: technical
		},
		{
			name: 'Night Name',
			DateTime: 'Date & Time',
			Location: 'Location',
			imgUrl: technical
		},
		{
			name: 'Night Name',
			DateTime: 'Date & Time',
			Location: 'Location',
			imgUrl: technical
		},
	];
</script>

<div class="main">
	<div class="userData">
		<h1 style="margin-bottom: 3rem;">Hi, {profileData.username}</h1>
		<div class="phone">
			<h2>Phone Number</h2>
			<h3>+91 {profileData.mobile}</h3>
		</div>
		<div class="college">
			<h2>College Name</h2>
			<h3>{profileData.college}</h3>
		</div>
		<div class="phone">
			<h2>Graduation Year</h2>
			<h3>{profileData.graduation}</h3>
		</div>
	</div>
	<div class="events">
		<div class="buttons">
			<button
				class="display urEvent {eventDisplay ? 'active': ''}"
				on:click={() => {
					eventDisplay = true;
				}}>Your Events</button
			>
			<button
				class="display musicNight {!eventDisplay ? 'active': ''}"
				on:click={() => {
					eventDisplay = false;
				}}>Musical Night</button
			>
		</div>
		{#if eventDisplay}
        {#each events as event}
		    <EventCard event={event}/>
        {/each}
        {:else}
        {#each nightEvents as event}
		    <EventCard event={event}/>
        {/each}
        {/if}
	</div>
</div>

<style>
	.main {
		margin-top: 7rem;
	}
	.userData {
		line-height: 15px;
        margin-left: 2rem;
	}
	.buttons {
		width: inherit;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
		border-bottom: 1px solid white;
	}
	.display {
		z-index: 2;
		cursor: pointer;
		color: white;
		border: none;
		font-size: 120%;
	}
	.events {
		display: flex;
		width: 25rem;
		flex-direction: column;
		align-items: center;
        justify-content: center;
        margin: 1rem;
        margin-top: 3rem;
	}
    .active{
        border-bottom: 5px solid white;
        font-size: 125%;
    }
</style>
