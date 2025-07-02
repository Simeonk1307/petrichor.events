<script lang="ts">
	import photo from '$lib/assets/about.png';
	import { onMount } from 'svelte';

	export let slidePhoto:Function;
	let img:HTMLElement;
	slidePhoto = (value:number) => {
	}

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
			Petrichor, the annual techno-cultural fest of IIT Palakkad, is back—and this time, it's bigger, bolder,
			and more exciting than ever before. Named after the earthy fragrance that follows the first rain, Petrichor 
			captures the essence of creativity and renewal. Every year, we—the students of IIT Palakkad—unite our passion 
			and energy to bring this fest to life. Blending cutting-edge technical excellence with rich cultural expression, 
			Petrichor offers a dynamic platform for students to showcase their ideas, talents, and skills. From immersive 
			workshops to captivating events, Petrichor '26 promises an unforgettable experience for everyone who attends.
			Join us in celebrating knowledge, creativity, and the thrill of discovery with Petrichor '26!
		</div>
	</div>
	<div class="photo_holder" bind:this={img} draggable="false">
		<img src={photo} class="photo" alt="" draggable="false"/>
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
		position: relative;
		margin: 50px;
	}
	.photo{
		position: relative;	
		height: 75vh;
		min-width: 50vw ;
	}
	.title2 {
		font-size: 4.5vw;
		font-weight: 400;
		color: white;
	}
	.caption2 {
		font-size: 17px;
		font-weight: 100;
		color: white;
		line-height: 1.5;
		font-family: var(--pfont);
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
			font-size: 17px;
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
		height: 100vh;
	}
</style>