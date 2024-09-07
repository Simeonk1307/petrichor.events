<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import utr1 from '$lib/assets/UtrRefer/utr1.jpeg'
	import utr2 from '$lib/assets/UtrRefer/utr2.jpeg'
	import utr3 from '$lib/assets/UtrRefer/utr3.jpeg'
	import utr4 from '$lib/assets/UtrRefer/utr4.jpeg'
	import utr5 from '$lib/assets/UtrRefer/utr5.jpeg'
	import Zoom from '$lib/components/Zoom.svelte';
	import { loggedIn,invalidate,user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { workshops } from '$lib/data/workshop';
	import PaymentForm from './PaymentForm.svelte';

    export let data: any;
	let workshop: { name: any; };
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
	<PaymentForm />
</div>


<h1 style="text-align: center;margin-top:-3em">Example of Transaction ID</h1>
<div class="images">
	<div class="img">
		<Zoom src="{utr1}"/>
	</div>
	<div class="img">
		<Zoom src="{utr2}"/>
	</div>
	<div class="img">
		<Zoom src="{utr3}"/>
	</div>
	<div class="img">
		<Zoom src="{utr4}"/>
	</div>
	<div class="img">
		<Zoom src="{utr5}"/>
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
	.images{
		margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img{
	margin: 1em;
	display: inline-block;
	width:10rem;
	height:15rem
}

	* {
		box-sizing: border-box;
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
		.images{
			/* flex-direction: column; */
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
