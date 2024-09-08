<script>
	import photo from '$lib/assets/about.png';
</script>

<div class="gradient-bg">

	<div class="gradients-container extra">
		<div class="g" id="g2-1" />
	</div>
</div>
	
<main>
    <div class="second-block">
		<div class="title2 atmos">About Us</div>
		<!-- svelte-ignore a11y-missing-attribute -->
		<div class="caption2">
			Petrichor- the annual techno-cultural fest of IIT Palakkad is back again, and better than
			ever before. Also, yes, it's offline. We, the students of IIT Palakkad, conduct Petrichor
			every year, and made sure last year's event was enthralling for all its participants. Now
			the wait is over; with just the perfect mix of cultural and technical events, we plan on
			making 
			Petrichor'25 an unforgettable experience for you. Trust us when we say that you won't
			miss out on anything. Check out our website as it has answers to all the questions that
			you might have. Stay tuned and brace yourselves for the journey of a lifetime with
			Petrichor'25!
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
		/* z-index: 11;	 */
		align-items: center;
		overflow: hidden;
		background-color: black;
    }
	main *{
		z-index: 2;
	}
	.second-block{
		flex:1;
		display: flex;
		flex-direction: column;
		margin-left: 3rem;
		padding: 5px;
		gap: 20vh;
		min-width: 50%;
	}
	.photo_holder{
		flex: 1;
		margin: 50px;
	}
	.photo{
		position: relative;	
		height: 65vh;
		min-width: 50vw ;
	}
	.title2 {
		font-size: 4.5vw;
		font-weight: 400;
		color: white;
	}
	.caption2 {
		font-size: 15px;
		font-weight: 100;
		color: white;
		line-height: 1.5;
		letter-spacing: 0.005cap;
		padding: 10px 0;
		padding-right: 30px;
	}

	@media (max-width:900px){
		main{
			flex-direction: column;
		}
		.second-block{
			display: flex;
			align-items: center;
			flex: 1;
			width: 100%;
			margin: 0;
			gap: unset;
			flex-wrap: wrap;
			align-content: center;
			justify-content: center;
		}
		.title2{
			font-weight: bold;
			font-size: 40px;
			padding: 5px  8px;
		}
		.caption2{
			margin: 0;
			padding: 5px 10px;
			font-size: 13px;
			width: auto;
			text-align: justify;
		}
		.photo_holder{
			margin: 0;
			flex: 1;
		}
		.photo{
			left: 0;
			top: 0;
			width: 100%;
			height: unset;
		}
	}
	@media (max-width:400px){
		.title2{
			font-size: 25px;
		}
		.caption2{
			padding: 5px;
			font-size: calc(13px - 0.5vw);
		}
	}


	/* Background */
	.g {
		position: absolute;
		mix-blend-mode: var(--blending);
		width: 100%;
		height: 100%;
		opacity: 1;
	}
	.gradient-bg {
		width: 100vw;
		height: 100%;
		position: absolute;
		overflow: hidden;
		background: transparent;
		top: 0;
		left: 0;
	}

	.extra {
		height: 150vh;
	}

	.gradients-container {
		width: 100vw;
		height: 100vh;
		position: relative;
	}

	#g2-1 {
		background: radial-gradient(
				circle at center,
				rgba(var(--color4), 0.5) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		height: 150vh;
	}
</style>