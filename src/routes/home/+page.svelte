<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	

	let slideHero:Function;
	let slideAbout:Function;
	let visible = false;

	export let data;
	const getData: Function = getContext('getData');
	let pageWidth = 0;
	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 10);
		if (!$loggedIn) {
			getData();
		}
		pageWidth = window.innerWidth;
		window.onresize = () => {
			pageWidth = window.innerWidth;
		};
		window.onscroll = (e)=>{
			let val = window.scrollY
			// console.log(val)
			if (slideHero){
				slideHero(val)
			}
			if (slideAbout){
				slideAbout(val)
			}
		}
		access_token.set(data.accessToken);
	});


export let page: string;
page='Home'
</script>



<div class="nav-container hidden-mobile">
	{#if page === 'Home'}
	  <button class="btn bottom-middle"><i class="arrow down"></i></button>
	  <button class="btn bottom-right"><i class="arrow down-right"></button>
	  <button class="btn right-middle"><i class="arrow right"></button>
	{:else if page === 'About'}
	  <button class="btn bottom-middle"><i class="arrow down"></button>
	  <button class="btn bottom-left"><i class="arrow down-left"></button>
	  <button class="btn left-middle"><i class="arrow left"></i></button>
	{:else if page === 'Event'}
	  <button class="btn top-middle"><i class="arrow up"></button>
	  <button class="btn top-right"><i class="arrow up-right"></i></button>
	  <button class="btn right-middle"><i class="arrow right"></button>
	{:else if page === 'Workshop'}
	  <button class="btn top-middle"><i class="arrow up"></i></button>
	  <button class="btn top-left"><i class="arrow up-left"></i></button>
	  <button class="btn left-middle"><i class="arrow left"></i></button>
	{/if}
  </div>


<div class="maincontent {visible ? 'visible' : ''}">
	<HeroSection bind:pageWidth bind:slide={slideHero} toAnimate={false}/>
	<!-- <div class="card hero"> -->
        <!-- CARD 1 -->
	<!-- </div> -->
	<div class="card about">
        <!-- CARD 2 -->
		<AboutSection bind:slidePhoto={slideAbout}/>
	</div>
	<div class="card event">
        <!-- CARD 3 -->
		<div class="gradient-bg">
			<div class="gradients-container extra">
				<div class="g" id="g3-1" />
			</div>
			<div class="gradients-container extra">
			  <div class="g" id="g4-1" />
			</div>
		  </div>
		<!-- <Event bind:pageWidth /> -->
		<Workshop />
	</div>
	<!-- <a  href="/login">Login</a> -->
</div>

<style>
.card{
        display: flex;
        justify-content: center;
        overflow-x: hidden;
        align-items: center;
        /* background-color: rgba(255, 200, 100); */
		background-color: transparent;
        position: sticky;
        top: 0;
        height: 100vh;
		overflow-y: hidden;
    }
	.event{
		padding-top: 3em;
	}
	.visible {
		opacity: 100% !important;
	}
	.card:nth-child(3){
		display: flex;
		flex-direction: column;
		height: fit-content;
		top: 0;
		position: sticky;
	}
	@media(max-width:600px){
		.card:nth-child(3){
			height: fit-content;
			/* overflow-y: visible; */
		}
	}

	/* Background */
	#g4-1 {
		background: radial-gradient(
				farthest-corner at 55% 50%,
				rgba(var(--color4), 0.5) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		width: 100vw;
		top: 0%;
		height: 100vw;
	}

	/* Background */
	#g3-1 {
		background: radial-gradient(
				farthest-corner at 75% 50%,
				rgba(var(--color4), 0.5) 0,
				rgba(var(--color4), 0) 50%
			)
			no-repeat;
		width: 100vw;
		top: 0%;
		height: 100vw;
	}







	.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hidden-mobile {
    display: none;
  }

  @media (min-width: 768px) {
    .hidden-mobile {
      display: flex;
    }
  }

  .btn {
    position: absolute;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: rgba(51, 51, 51, 0.7);
    color: white;
    cursor: pointer;
  }

  /* Button positions */
  .bottom-middle { bottom: 10px; left: 50%; transform: translateX(-50%); }
  .bottom-right { bottom: 10px; right: 10px; }
  .right-middle { right: 10px; top: 50%; transform: translateY(-50%); }

  .bottom-left { bottom: 10px; left: 10px; }
  .left-middle { left: 10px; top: 50%; transform: translateY(-50%); }

  .top-middle { top: 80px; left: 50%; transform: translateX(-50%); }
  .top-right { top: 80px; right: 10px; }
  .top-left { top: 80px; left: 10px; }
	
	
.arrow {
  border: solid whitesmoke;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.down-right {
  transform: rotate(22.5deg);
  -webkit-transform: rotate(22.5deg);
}
.up-right {
  transform: rotate(-112.5deg);
  -webkit-transform: rotate(-112.5deg);
}
.down-left {
  transform: rotate(67.5deg);
  -webkit-transform: rotate(67.5deg);
}
.up-left {
  transform: rotate(-157.5deg);
  -webkit-transform: rotate(-157.5deg);
}

</style>
