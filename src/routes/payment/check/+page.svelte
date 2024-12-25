<script lang="ts">
	import { goto } from '$app/navigation';
	import { invalidate, loggedIn, user } from '$lib/stores';
	import { workshops } from '$lib/data/workshop.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { payment_url } from '$lib';
	export let data: any;
	onMount(() => {
		if (!$loggedIn || $invalidate) {
			goto(`/login?to=${$page.url.pathname + $page.url.search}`);
			return
		}
		let workshop: any | null;
		if (data.id) {
			// @ts-ignore
			workshop = workshops[data.id];
		} else {
			goto('/workshop');return;
		}
		console.log(workshop)
		if (!workshop || workshop == undefined) {
			goto('/workshop');return;
		}
		window.location.href = (`${payment_url}participants?id=${data.id}&user=${$user.user_data.email}`)
		// if ($user.user_data.email.endsWith('iitpkd.ac.in')) {	
		// 	goto(`/payment/allow?id=${data.id}`);
		// } else {
		// 	goto(`/payment?id=${data.id}`);
		// }   
	});
</script>

<main>
	<h3>Please Wait!!</h3>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
