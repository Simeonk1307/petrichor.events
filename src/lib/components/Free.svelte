<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { invalidate } from '$lib/stores';
	import { goto } from '$app/navigation';

    export let event: any;
    export let participants: any;
    export let goBack: Function;
	const loading: Function = getContext('loading');
	const displayPopUp: Function = getContext('displayPopUp');

	function submit(onsubmit: { [x: string]: any; cancel: () => void }){
		loading(true)

		onsubmit.formData.set("eventId",event.eventId)
		onsubmit.formData.set("participants",JSON.stringify(participants))
		// @ts-ignore
		return async ({ result }) => {
			loading(false);

			if (result.type == 'success' && result.data) {
				const data = result.data;
				if (data.success) {
					invalidate.set(true)
					displayPopUp('Success', `You have been registered to ${event.name}. You will receive an email regarding this soon.`,
						10000,() => {
							goto(`/profile`)
						}
					)
				} else {
					displayPopUp('Alert', data.message, 2000, () => goBack());
				}
			} else {
				setTimeout(() => {
					displayPopUp(
						'Alert',
						result.data.err ? result.data.err : 'Something went wrong',
						2000,
						() => goBack()
					);
				}, 100);
			}
		}
	}


</script>

<main>

	<div id="all">
		<h1 style="text-align:center;margin-top:10rem;">
		Registering for <span style="color: blueviolet;">{event.name}</span>
	</h1>
	<div class="confirmBox">
		<p>Hi There! You can register to this event : {event.name} for free. Please click register to confirm.</p>
		<form action="?/payfree" method="post" use:enhance={submit}>
			<button
			id="submit"
			type="submit"
			style="cursor:pointer; display:block; margin-top:5px;">Register Now</button
			>
		</form>
	</div>
</div>
</main>

<style>
	main{
		min-height: 90vh;
		z-index: 2;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.confirmBox{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	* {
		box-sizing: border-box;
	}

	button {
		width: 10rem;
		height: 2.5rem;
		font-size: large;
		border-radius: 2.5em;
		background-color: rgb(0, 183, 255);
		border: none;
		display: block;
		margin: 0 auto;
	}

	@media screen and (max-width: 900px) {

		h1 {
			width: 100vw;
		}
	
	}
	@media (max-width:600px){
		#all{
			margin-top: -6em;
		}
	}
</style>
