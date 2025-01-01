<script lang="ts">
	import cultural from '$lib/assets/HomePage/cultural.png';
	
	export let event = {
		name: 'Event Name',
		date: 'Date & Time',
		venue: 'Location',
		verified: false,
		image: cultural
	};
</script>

<div class="main">
    <div class="imgPar">
	    <div class="img" style="background-image:url({event?.image})" />
    </div>
	<div class="data cmn">
		<h1>{event?.name ?? "Event"}</h1>
		<h5>{event?.date ?? "Date"}</h5>
		<h5>{event?.venue ?? "Venue"}</h5>
		<p class="verified" style="background-color:{event.verified?"green":"red"}">{event.verified?"Verified":"Not Verified"}</p>
	</div>
</div>

<style>
    .main{
        display: flex;
        flex-direction: row;
		max-width: 100%;
		min-width: 100%;
    margin: 20px 0;

    }
	.main *{
		box-sizing: border-box;
	}
	.verified{
		height: 20px;
		padding: 5px;
		text-align: center;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center !important;
		border-radius: 5px;
		width: 80px !important;
		text-wrap: nowrap;
		margin-top: 10px !important;
	}
	.data{
		flex:3;
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	.data *{
		font-weight: 100 !important;
		margin: 1px;
		align-items: flex-start;
		text-align: start;
		text-wrap: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		overflow: hidden;
		line-break: unset;
		font-family: cursive;
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
