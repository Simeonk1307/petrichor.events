<script lang="ts">
	import EventCard from './EventCard.svelte';

	export let profileData = {
		username: 'Username',
		mobile: 'Phone',
		college: 'College',
		graduation: 8098,
		events: <any>[],
		nightEvents: <any>[]
	};

	let eventDisplay = true;

	
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
        {#each profileData.events as event}
		    <EventCard event={event}/>
        {/each}
        {:else}
        {#each profileData.nightEvents as event}
		    <EventCard event={event}/>
        {/each}
        {/if}
	</div>
</div>

<style>
	.main {
		min-height: 110vh;
		margin-top: 60px;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
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
		width: 100vw;
		flex-direction: column;
		align-items: center;
        justify-content: center;
		text-align: center;
        margin: 1rem;
        margin-top: 3rem;
	}
    .active{
        border-bottom: 5px solid white;
        font-size: 125%;
    }
	@media (max-width: 500px){
		.events{
			margin: 0%;
		}
		.main{
			font-size: small;
		}
	}
</style>
