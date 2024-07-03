<script lang="ts">
	import Globe from '$lib/assets/svgs/globe.svg';
	import hand from '$lib/assets/HomePage/hand.png';
	import { goto } from '$app/navigation';

	export let pageWidth:number;

	function discover(){
		window.scrollTo({
			top: window.innerHeight,
			behavior:'smooth'

		}
		)
	}

	function ca_portal(){
		goto('/CA/welcome')
	}
	

</script>

<main>
	<div class="first-block">
		<div class="content">

			<div class="title"><p>Petrichor</p></div>
			<div class="content_box">

				<div class="caption">
					Experience the Magic of Petrichor<br/>
					Join us at IITPKD for a celebration of culture, creativity, and camaraderie at the Petrichor fest.
				</div>
				<div class="buton_area">
						<button type="button" class="ca_portal" on:click={ca_portal}>CA Portal 
							<svg width="20px" height="20px" viewBox="0 2.5 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 7L15 12L10 17" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</button>
						<button type="button" class="discover" on:click={discover}>Discover More 
							<svg width="20px" height="20px" viewBox="0 2.5 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 7L15 12L10 17" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

						</button>
				</div>
			</div>
		</div>
		{#if pageWidth > 700}
		<div class="imagediv">
			<img src={hand} alt=""/>
		</div>
		{/if}
	</div>

	<div class="strip">
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
	</div>

</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: transparent;
		background-color: transparent;
		/* padding: 5em 0; */
	}
    .first-block{
		width: 100vw;
		flex: 8;
		/* margin-bottom: 5em; */
		display: flex;
		
    }
	.content{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.imagediv{
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button{
		cursor: pointer;
		z-index: 2;
	}
	.imagediv img{
		height: 85vh;
		width: 50vw;
	}
	.title {
		flex: 2;
		padding-left: 4vw;
		display: flex;
		align-items: flex-end;
		color: white;
	}
	.title p {
		font-size: calc(40px + 1.5vw);
		font-weight: 100;
		margin: 0;
	}
	.content_box{
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.caption {
		font-size: 20px;
		font-weight: 100;
		color: white;
		overflow: hidden;
		text-wrap: wrap;
		padding-left: 4vw;
	}
	.buton_area{
		display: flex;
		justify-content: center;
		align-items: flex-end;
		justify-content: space-evenly;
		margin-top: 5rem;
		margin-right: 10vw;
	}
	button {
		border-radius: 2.5em;
		padding: 0.8em 2em;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
		font-weight: 100;
	}
	.strip {
		display: flex;
		flex: 2;
		align-items: center;
		overflow-x: hidden;
		width: 100vw;
		max-height: 35px;
		margin: 2rem 0;
		border-top: 2px solid white;
		border-bottom: 2px solid white;
		padding-top: 12px;
		padding-bottom: 12px;
		opacity: 60%;
	}
	.strip1 {
		display: flex;
		justify-content: center;
		min-width: max(20%,150px);

		/* Apply animation to this element */
		-moz-animation: example1 5s linear infinite;
		-webkit-animation: example1 5s linear infinite;
		animation: example1 5s linear infinite;
	}

	.banner {
		display: inline-block;
	}
	/* Move it (define the animation) */
	@-moz-keyframes example1 {
		0% {
			-moz-transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%);
		}
	}
	@-webkit-keyframes example1 {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(-100%);
		}
	}
	@keyframes example1 {
		0% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%); /* Firefox bug fix */
			-webkit-transform: translateX(-100%); /* Firefox bug fix */
			transform: translateX(-100%);
		}
	}


	@media only screen and (max-width:900px){

		.caption {
			font-size: 14px;
		}
		button{
			padding: 0.5em 1em;
		}
		.imagediv img{
			height: 65vh;
		}
		.first-block{
			flex: 7;
		}
		.strip{
			padding: 8px 0;
			margin: 1em 0;
		}
	}
</style>
