<script lang="ts">
	import EventCard from './EventCard.svelte';
	import { Icon } from "svelte-awesome";
	import { powerOff } from "svelte-awesome/icons";
	import { enhance } from '$app/forms';
	import { getContext } from 'svelte';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores.js';
	import { defaultUser } from '$lib';
	import { goto } from '$app/navigation';

	export let profileData = {
		username: 'Username',
		email:'email',
		mobile: 'Phone',
		college: 'College',
		graduation: 8098,
		events: <any>[],
		nightEvents: <any>[]
	};

	let eventDisplay = true;

	const loading:Function = getContext('loading')
	const displayPopUp:Function = getContext('displayPopUp')

	$: logout = () => {
		loading(true)
		// @ts-ignore
		return async ({result}) => {
			loading(false)
			// console.log(result)
			invalidate.set(true)
			loggedIn.set(false)
			user.set(defaultUser)
			access_token.set(null)
			sessionStorage.clear()
			goto('/home')
		}
	}
	
</script>

<div class="main">
	<div class="userData">
		<!-- Name and Email -->
		<div class="n-email" style="opacity: 0.75;">
			<div class="name-mail-cont">
				<h1 style="width: 100%; font-weight: bold; margin-bottom: 10px;">Hi, {profileData.username}</h1>
				<p style="font-size: smaller; width: 100%; margin-top: 5; margin-bottom: 0;">		
					{profileData.email}
				</p>
			</div>
			<form action="?/logout" method="POST" use:enhance={logout}>
				<button class="logout" type="submit"><Icon data={powerOff} scale={1.4}/></button>
			</form>
		</div>
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
		margin-top: 80px;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
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
	.n-email {
		display: flex;
		align-items: center;
		border-radius: 20px;
		padding: 10px 0;
		margin-right: 1rem;
		/* padding-top: 10px; */
		line-height: 1em;
		height: auto;
		text-align: left;
		position: relative;
		place-items: center;
	}
	.logout{
		position: absolute;
		text-decoration: none;
		border-radius: 100em;
		align-self: flex-start;
		font-size: smaller;
		margin-top: 10px;
		right: 1em;
		top: 50%;
		translate: 0 -75%;
		padding: 1.25em;
		background-color: #242424;
		border: 1px solid black;
		background-color: inherit;
		border: transparent;
		color: white;
		aspect-ratio: 1;

	}
	.logout:hover {
		cursor: pointer;
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
