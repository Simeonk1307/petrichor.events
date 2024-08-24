<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { getContext, onMount } from 'svelte';
	import { Icon } from "svelte-awesome";
	import { powerOff } from "svelte-awesome/icons";
	import { access_token, invalidate, loggedIn, user } from '$lib/stores.js';
	import { defaultUser } from '$lib';
	import EventCard from '$lib/components/MobileProfile/EventCard.svelte';
	export let data;
	let eventDisplay = true;
	// export let form;

	// console.log(data)
	// @ts-ignore
	let { user_data,user_events } = $user
	let profileData: { username: any; email: any; mobile: any; college: any; graduation: any; events: any; nightEvents: any; CACodePresent:boolean; };
	setProfileData()

	const getData:Function = getContext('getData')
	const whoami:Function = getContext('whoami')
	let pageWidth = 900;
	onMount(async()=> {
		if (!$loggedIn){
			getData()
			user_data = $user.user_data
			user_events = $user.user_events
			setProfileData()
		}
		pageWidth = window.innerWidth
		window.onresize=()=>{
			pageWidth = window.innerWidth
		}
		access_token.set(data.accessToken)
		// console.log($loggedIn + "i" + $invalidate)
		if (!$loggedIn){
			goto('/login')
		} else if ($invalidate){
			location.reload() // this will call before navigation which will in turn call whoami
		}// no need to store data in session storage here, whoami is handling it
	})
	
	function setProfileData(){
		profileData = {
			username: user_data?.username ?? 'Username',
			email : user_data?.email ?? 'email',
			mobile: user_data?.phone ?? 'Phone',
			college: user_data?.institute ?? "College",
			graduation: user_data?.gradYear ?? 'Grad',
			CACodePresent: user_data.CACode != "",
			events :[],
			nightEvents :[]
			
		};
	}


	const loading:Function = getContext('loading')

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
				<h1 style="width: 100%; font-weight: bold; margin-bottom: 10px;">
					Hi, {profileData.username}
				</h1>
				<p style="font-size: smaller; width: 100%; margin-top: 5; margin-bottom: 0;">
					{profileData.email}
				</p>
			</div>
			<form action="?/logout" method="POST" use:enhance={logout}>
				<button class="logout" type="submit"><Icon data={powerOff} scale={1.4} /></button>
			</form>
		</div>
		<div class="phone">
			<h2>Phone Number</h2>
			<h3 style="font-family: var(--wfont);">+91 {profileData.mobile}</h3>
		</div>
		<div class="college">
			<h2>College Name</h2>
			<h3>{profileData.college}</h3>
		</div>
		<div class="phone">
			<h2>Graduation Year</h2>
			<h3>{profileData.graduation}</h3>
		</div>
		{#if profileData.CACodePresent }
		<div class="CAButton">
			<button on:click={()=>{goto('/CA/profile')}}  >Go to CAProfile</button>
		</div>
		{/if}
	</div>
	<div class="events">
		<div class="buttons">
			<button
				class="display urEvent {eventDisplay ? 'active' : ''}"
				on:click={() => {
					eventDisplay = true;
				}}>Your Events</button
			>
			<button
				class="display musicNight {!eventDisplay ? 'active' : ''}"
				on:click={() => {
					eventDisplay = false;
				}}>Musical Night</button
			>
		</div>
		{#if eventDisplay}
			{#if profileData.events.length == 0}
				<div class="no-message-box">Not Registered in any event</div>
			{:else}
				{#each profileData.events as event}
					<EventCard {event} />
				{/each}
			{/if}
		{:else if profileData.nightEvents.length == 0}
			<div class="no-message-box">Nothing to Show Here</div>
		{:else}
			{#each profileData.nightEvents as event}
				<EventCard {event} />
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
		flex-direction: row;
	}
	.name-mail-cont{
		width: 80%;
		overflow-y: visible;
		overflow-x: hidden;
		text-wrap: nowrap;
		text-overflow: clip;
		
	}
	.name-mail-cont h1 {	
		color: rgb(255, 255, 255);
		font-size: 1.6rem;
		line-height: 1.2;
		text-wrap: pretty;
		word-break: keep-all;
		word-wrap: break-word;
		margin: 0;
	}
	.userData {
		line-height: 15px;
		margin-left: 2rem;
		width: 40%;
		z-index: 11;
	}
	.CAButton button{
		border: none;
		padding: 5px 10px;
		background-color: rgb(46, 182, 46);
		border-radius: 20px;
	}
	.buttons {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
		border-bottom: 1px solid white;
	}
	.no-message-box {
		height: 250px;
		display: flex;
		min-width: 100%;
		justify-content: center;
		align-items: center;
	}
	.n-email {
		display: flex;
		align-items: center;
		border-radius: 10px;
		padding: 10px 10px;
		line-height: 1em;
		background-color: rgba(48, 53, 56, 0.14);
		height: auto;
		text-align: left;
		position: relative;
		place-items: center;
	}
	.logout {
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
		flex-direction: column;
		margin: 1rem;
		align-items: start;
		text-align: center;
		width: 60%;
		justify-content: start;
		padding-top: 10px;
		overflow-y: scroll;
		background-color: rgba(47, 47, 47, 0.895);
		border-radius: 10px;
		z-index: 10;
		}
	.active {
		border-bottom: 5px solid white;
		font-size: 125%;
	}
	@media (max-width: 500px) {
		.events {
			margin: 0%;
		}
		.main {
			font-size: small;
		}
	}

	@media (max-width: 900px){
		.main{
			flex-direction: column;
		}
		.events {
			justify-content: center;
			width: 100vw;
			align-items: center;	
		
		
		margin-top: 3rem;
		background-color: transparent;
		}
		.buttons {
			
			width: inherit;
		}
		.userData {
			width: unset;
		}
	}
</style>

