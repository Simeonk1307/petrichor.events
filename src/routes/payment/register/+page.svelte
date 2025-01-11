<script lang="ts"> 
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
	import { loggedIn, invalidate, user } from '$lib/stores';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import Free from '$lib/components/Free.svelte';
	import Pay from '$lib/components/Pay.svelte';
	import Participants from '$lib/components/GetParticipant.svelte';

    export let data: any;

    let event = data.event;
	let show = true;
	let free = false;
	let paid = false;
	let register = true;
	let emails: string[] = []
	let amount = 0;

	const getData: Function = getContext('getData')

	onMount(() => {
		if (event.eventId == undefined) {
			goto('/home')
		}
		getData()
		if (!$loggedIn || $invalidate) {
			goto(`/login?to=${$page.url.pathname + $page.url.search}`);
			return
		}
		
		show = false;
	})


	const registerEvent = () => {
		let verified = $user.user_data.email.endsWith('iitpkd.ac.in');
		if (verified) {
			for (const email of emails) {
				if (!email.endsWith('iitpkd.ac.in')) {
					verified = false
					break
				}
			}
		}
		// go to free page if all participants are from iitpkd OR event itself is free
		if (event.fee == 0 || verified ) {
			free = true
		} else {
			paid = true
		}
		register = false
	}

	const goBack = () => {
		register = true
		free = false;
		paid = false
	}


	$: {
		if (!event.isTeam) {
			amount = (emails.length + 1) * event.fee;
		} else {
			amount = event.fee;
		}

		if (register) {
			free = false;
			paid = false;
		}
		else if (free) {
			paid = false
		} else if (paid) {
			free = false
		}
	}
</script>

{#if show}
<main>
	<p>Please Wait!!</p>
</main>
{:else if register}
<Participants bind:event={event} bind:emails={emails} bind:user={$user.user_data.email} registerEvent={registerEvent} />
{:else if free}
<button on:click={goBack} class="goBack">Go Back</button>
<Free bind:event={event} bind:participants={emails} goBack={goBack}/>
{:else if paid}
<button on:click={goBack} class="goBack">Go Back</button>
<Pay bind:event={event} bind:participants={emails} bind:amount={amount} goBack={goBack}/>


{/if}

<style>
	.goBack {
		position: absolute;
		top: 5.5rem;
		left: 2rem;
		z-index: 10;
		width: 7rem;
		height: 2.5rem;
		font-size: large;
		border-radius: 2.5em;
		background-color: rgba(241, 179, 146, 0.906);
		border: none;
		display: block;
		margin: 0 auto;
	}
	@media (max-width: 600px) {
		.goBack {
			top: 9.5rem;
			left: 0.8rem;
		}
	}
</style>	