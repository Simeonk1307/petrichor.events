<script lang="ts">
	import { goto } from '$app/navigation';
	import utr1 from '$lib/assets/UtrRefer/utr1.jpeg'
	import utr2 from '$lib/assets/UtrRefer/utr2.jpeg'
	import utr3 from '$lib/assets/UtrRefer/utr3.jpeg'
	import utr4 from '$lib/assets/UtrRefer/utr4.jpeg'
	import utr5 from '$lib/assets/UtrRefer/utr5.jpeg'
	import Zoom from '$lib/components/Zoom.svelte';
	import { onMount } from 'svelte';
    import PaymentForm from './PaymentForm.svelte';

    export let event: any;
    export let participants: string[];
	export let amount: any = 0;

	onMount(() => {
		if (amount == 0 ) {
			goto(`/payment/register?id=${event.eventId}`)
		}
	})


</script>

<main>

	<div id="all">
		<h1 style="text-align:center;margin-top:10rem;">
		Registering for <span style="color: blueviolet;">{event.name}</span>
	</h1>	
	<PaymentForm name={event.name} id={event.eventId} amount={amount} participants={participants}/>
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
