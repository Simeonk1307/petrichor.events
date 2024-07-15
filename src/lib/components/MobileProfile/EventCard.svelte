<script lang="ts">
	import cultural from '$lib/assets/HomePage/cultural.png';
	export let event = {
		name: 'Event Name',
		DateTime: 'Date & Time',
		Location: 'Location',
		imgUrl: cultural
	};
</script>

<div class="main">
    <div class="imgPar cmn">
	    <div class="img" style="background-image:url({event.imgUrl})" />
    </div>
	<div class="data cmn" style="line-height: 0px;">
		<h1>{event.name}</h1>
		<h3>{event.DateTime}</h3>
		<h3>{event.Location}</h3>
	</div>
</div>

<style>
    .main{
        display: flex;
        flex-direction: row;
    }
    .cmn{
        width: 12rem;
        height: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 1.5rem;
    }
	.img {
		width: 10rem;
		height: 7rem;
		background-size: cover;
	}
	@media (max-width:500px){
		.data{
			font-size: smaller;
		}
		.imgPar{
			width: 9rem;
		}
		.img{
			width: 9rem;
		}
		.data{
			padding: 0 10px;
		}
		.data h1{
			font-size: 20px;
		}
		.main{
			margin: 0 5px;
			max-width: 95vw;
		}
	}
</style>
