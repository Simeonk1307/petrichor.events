<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { loggedIn,invalidate,user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { workshops } from '$lib/data/workshop';

    export let data: any;
	let isInstiUser = $user.user_data.email.endsWith("iitpkd.ac.in");
	let workshop: { name: any; };
	let name : string = "Undefined";
	const getData:Function = getContext('getData')

    onMount(async () => {
		await getData()
		if (!$loggedIn || $invalidate) {
			goto(`/login?to=${$page.url.pathname + $page.url.search}`);
		}
		if (data.id == null){
			goto(`/`)
		}
		
		fetchInfo()
	});
	
	fetchInfo()
	function fetchInfo(){
		// @ts-ignore
		workshop = workshops[data.id]
		if (!workshop){
			goto('/')
		}	
	}

	function submit(){

	}


</script>

<main>

	<div id="all">
		<h1 style="text-align:center;margin-top:10rem;">
		Registering for <span style="color: blueviolet;">{workshop.name}</span>
	</h1>
	<div class="confirmBox">
		<p>Hi There! You can register to this event : {workshop.name} for free. Please click register to confirm.</p>
		<button
		id="submit"
		on:click={() => submit()}
		type="submit"
		style="cursor:pointer; display:block; margin-top:5px;">Register Now</button
		>
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
