<script>
	import photo from '$lib/assets/about.png';
</script>

<main>
    <div class="second-block">
		<div class="title2">About Us</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="caption2">
			Petrichor- the annual techno-cultural fest of IIT Palakkad is back again, and better than
			ever before. Also, yes, it's offline. We, the students of IIT Palakkad, conduct Petrichor
			every year, and made sure last year's event was enthralling for all its participants. Now
			the wait is over; with just the perfect mix of cultural and technical events, we plan on
			making 
			Petrichor'24 an unforgettable experience for you. Trust us when we say that you won't
			miss out on anything. Check out our website as it has answers to all the questions that
			you might have. Stay tuned and brace yourselves for the journey of a lifetime with
			Petrichor'24!
		</div>
	</div>
	<div class="photo_holder">
		<img src={photo} class="photo" alt=""/>
	</div>


</main>

<style>
    main{
        height: 100vh;
        width: 100vw;
		display: flex;
		align-items: center;
		overflow-x: hidden;
		background-color: transparent;
    }
	.second-block{
		flex:1;
	}
	.photo_holder{
		flex: 1;
		margin: 50px;
	}
	.photo{
		width: 100%;
		position: relative;
		left: 50px;
	}
	.title2 {
		font-size: 6vw;
		font-weight: 400;
		padding-left: 4vw;
		color: white;
	}
	.caption2 {
		font-size: 16px;
		color: white;
		margin-top: 5rem;
		line-height: 1.5	;
		letter-spacing: 0.005cap;
		padding: 10px 2em;
		margin-right: calc(5em - 0.1vw);
	}

	@media (max-width:900px){
		main{
			flex-direction: column;
		}
		.second-block{
			display: flex;
			align-items: flex-end;
			flex: 1;
		}
		.title2{
			font-weight: bold;
			margin-bottom: 1em;
			font-size: 20px;
			padding-left: 8px;
		}
		.caption2{
			margin: 0;
			font-size: calc(14px - 1vw);
		}
		.photo_holder{
			margin: 0;
			flex: 2;
		}
		.photo{
			left: 0;
		}
	}
</style>