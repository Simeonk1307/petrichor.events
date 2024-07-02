<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { getContext, onMount } from 'svelte';
	import { Icon } from "svelte-awesome";
	import { powerOff, user } from "svelte-awesome/icons";
	export let data;
	export let form;

	// console.log(data)
	const { user_data,user_events } = data.data

	onMount(()=> {
		if (!data.success){
			goto('/login')
		}
	})

	const loading:Function = getContext('loading')
	const displayPopUp:Function = getContext('displayPopUp')

	$: logout = () => {
		loading(true)
		// @ts-ignore
		return async ({result}) => {
			loading(false)
			console.log(result)
			goto('/home')
		}
	}
</script>

{#if user_data}
<div class="container">
	<div class="blocks details" style="">
		<div class="informations info">
			<!-- Name and Email -->
			<div class="n-email" style="padding-left: 20px; opacity: 0.75;">
				<div class="name-mail-cont">
					<h1 style="width: 100%; font-weight: bold; margin-bottom: 10px;">Hi, {user_data['username']}</h1>
					<p style="font-size: smaller; width: 100%; margin-top: 5; margin-bottom: 0;">		
						{user_data['email']}
					</p>
				</div>
				<form action="?/logout" method="POST" use:enhance={logout}>
					<button class="logout" type="submit"><Icon data={powerOff} scale={1.4}/></button>
				</form>
			</div>

			<div
				class="user-details"
				style="padding-left: 30px; margin-top: 20px; display: flex; flex-direction: column;"
			>
				<p style="margin-bottom: 5px;">Phone Number</p>
				<h4 style="margin-top: 0; margin-bottom: 10px;">+91 {user_data['phone']}</h4>
			</div>

			<div
				class="user-details"
				style="padding-left: 30px; margin-top: 20px; display: flex; flex-direction: column;"
			>
				<p style="margin-bottom: 5px;">College Name</p>
				<h4 style="margin-top: 0; margin-bottom: 10px;">{user_data['institute']}</h4>
			</div>

			<div
				class="user-details"
				style="padding-left: 30px; margin-top: 20px; display: flex; flex-direction: column;"
			>
				<p style="margin-bottom: 5px;">Graduation Year</p>
				<h4 style="margin-top: 0; margin-bottom: 10px;">{user_data['gradYear']}</h4>
			</div>
		</div>
		<!-- <div class="informations" style="display: flex; ">
			<div class="accommodation" style="font-size: large">
				<h1>ACCOMMODATION</h1>
			</div> -->
		<!-- </div> -->
	</div>
	<div class="blocks" style="background-color: #242424;">
		<div
			class="events_info"
			style="display: flex; width: 100%; justify-content: space-around; font-size: large; padding-left: 10px;"
		>
			<center><h1 class="hover-underline">EVENTS</h1></center>
		</div>

		<div class="events_info">
			{#each user_events as event}
				{#if event.eventId.startsWith('T') || event.eventId.startsWith('C')}
					<!-- <Event eventId={event.eventId} paymentStatus={event.status} /> -->
				{/if}
			{/each}
		</div>
	</div>

	<div class="blocks" style="background-color: #242424;">
		<div class="informations" style="display: flex; ">
			<div class="accommodation" style="font-size: large">
				<h1 class="hover-underline">MUSICAL NIGHTS</h1>
			</div>
		</div>
		<div class="events_info">
			<!-- {#each user.events as event}
				{#if event.eventId.startsWith('W') || event.eventId.startsWith('I')}
					<Event eventId={event.eventId} paymentStatus={event.status} />
				{/if}
			{/each} -->
		</div>
	</div>
</div>
{/if}

<style>
	.container {
		display: flex;
		margin-top: 100px;
		/* flex-direction: row;
		justify-content: space-around; */
		height: 100vh;
		width: 99vw;
		overflow: scroll;
	}
	.blocks {
		flex-grow: 1;
		margin: 10px;
		width: 100%;
		margin: 0 20px;
		border-radius: 5%;
		opacity: 0.8;
		backdrop-filter: blur(10px);
	}
	.details {
		display: flex;
		flex-direction: column;
	}
	.info {
		height: 0;
		padding-bottom: 10rem;
	}
	.informations {
		flex-grow: 1;
		/* background-color: no; */
		margin: 10px;
		border-radius: 5%;
	}
	.n-email {
		display: flex;
		align-items: center;

		background-color: #333232;
		border-radius: 20px;
		/* margin: 10px;
		padding-top: 10px; */
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
	.accommodation {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.hover-underline {
		text-decoration: none; /* Set default text decoration to none */
	}

	.hover-underline:hover {
		text-decoration: underline;
		text-decoration-color: blue;
		text-decoration-thickness: 4px;
	}

	@media (max-width: 800px) {
		* {
			font-size: small;
		}
		.hover-underline {
			font-size: xx-small;
		}
		.accommodation {
			font-size: xx-small;
		}
		.blocks {
			margin: 5px 5px;
			border-radius: 5%/10%;
			width: 25rem;
		}
		.informations {
			margin: 0px;
			margin-bottom: 5px;
			/* height: 15rem; */
			flex-direction: column;
			border-radius: 5%/10%;
			width: 25rem;
		}
		.n-email {
			height: 5rem;
		}
		.container {
			display: flex;
			flex-direction: column;
			overflow: scroll;
			align-items: center;
		}
	}
	@media (max-width: 400px) {
		.blocks,
		.informations {
			width: 25rem;
		}
		.container {
			align-items: first baseline;
		}
	}
</style>
