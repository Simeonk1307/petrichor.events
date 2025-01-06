<script lang="ts">
	import { goto } from '$app/navigation';
import cultural from '$lib/assets/HomePage/cultural.png';
	
	export let event = {
		name: 'Event Name',
		id: "T",
		verified: false,
		image: cultural
	};
	let links = {
		"T": "events/technical",
		"C": "events/cultural",
		"I": "events/informals",
		"W": "workshop/"
	}
</script>

<div class="main">
    <div class="imgPar">
	    <div class="img" style="background-image:url({event?.image})" />
    </div>
	<div class="data cmn">
		<h1>{event?.name ?? "Event"}</h1>
		<p class="verified" style="background-color:{event.verified?"green":"red"}">{event.verified?"Verified":"Not Verified"}</p>
		<button on:click={()=> {
			if (["T","C","I"].includes(event.id.at(0))) {
				goto(`${links[event.id.at(0)]}?id=${event.id}`)
			} else {
				goto(`${links[event.id.at(0)]}/${event.id}`)
			}
			
		}} >More Details</button>
	</div>
</div>

<style>
    .main{
        display: flex;
        flex-direction: row;
		max-width: 100%;
		min-height: 120px;
		min-width: 100%;
    margin: 20px 0;

    }
	button {
		border: none;
		padding: 10px;
		background-color: gray;
		max-width: 150px;
		display: flex;
		justify-content: center;
	}
	.main *{
		box-sizing: border-box;
	}
	.verified{
		height: 20px;
		padding: 10px;
		text-align: center;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center !important;
		border-radius: 5px;
		width: 110px !important;
		text-wrap: nowrap;
		margin-top: 10px !important;
	}
	.data{
		flex:3;
		min-height: 100%;
		height: 100%;
		align-items: flex-start;
		justify-content: center;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	.data *{
		font-weight: 100 !important;
		margin: 5px;
		align-items: flex-start;
		text-align: start;
		text-wrap: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-break: unset;
		font-family: var(--wfont);
		width: 100%;
	}
	.data h1{
		font-size: 20px;
		font-weight: 800 !important;
	}
	.img {
		width: 100%;
		min-width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
	}
	.imgPar{
		flex: 2;	
		margin-right: 10px;
	}
	@media (max-width:500px){
		.data{
			font-size: 14px;
		}
		.imgPar{
			width: 9rem;
		}
		.img{
			width: 9rem;
		}
		.data h1{
			font-size: 15px;
		}
		.main{
			max-width: 95vw;
		}
	}

	@media (max-width:900px){
		.main{
			margin-left: unset;
		}
	}
</style>
