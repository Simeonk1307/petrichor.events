<script lang="ts">
	import AboutSection from '$lib/components/homepage/AboutSection.svelte';
	import HeroSection from '$lib/components/homepage/HeroSection.svelte';
	import Event from '$lib/components/homepage/event_section/Event.svelte';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { access_token, loggedIn } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import gsap from 'gsap';

	let slideHero:Function;
	let slideAbout:Function;
	let visible = false;
	let btn1="About";
	let btn2="Workshop";
	let btn3="Event";

	let homeDiv: HTMLElement;
    let aboutDiv: HTMLElement;
    let eventDiv: HTMLElement;
    let workshopDiv: HTMLElement;
    let mainDiv: HTMLElement;

    let currentComponent: number = 1;

	// Map numbers to components
    let componentMap = {
        1: {
			1:1,
			2:2,
			3:3
		},
        2: {
			1:5,
			2:4,
			3:3
		},
        3: {
			1:7,
			2:6,
			3:5
		},
        4: {
			1:1,
			2:8,
			3:7
		}
    };

	let next = {
        1: {
			1:2,
			2:3,
			3:4
		},
        2: {
			1:1,
			2:3,
			3:4
		},
        3: {
			1:2,
			2:1,
			3:3
		},
        4: {
			1:4,
			2:2,
			3:1
		}
    };

    // let id={
    //     1:1,
    //     2:2,
    //     3:3,
    //     4:4
    // }

	let elementMap: { [key: number]: HTMLElement } = {};
    let screenWidth:number;
    let screenHeight:number;

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

		screenWidth = window.innerWidth
        screenHeight = window.innerHeight

        // Initialize elementMap with HTML elements
        elementMap = {
            1: homeDiv,
            2: aboutDiv,
            3: eventDiv,
            4: workshopDiv
        };

	});

	function change(currentId: number, nextId: number, d: number) {
        // if (isTransitioning) return;
        console.log(currentId);
        
        const currentElement = elementMap[currentId];
		const n=next[currentId][d];
        const nextElement = elementMap[n];
        console.log(n);
        // console.log("hello  --  ", nextElement);
		const dir=componentMap[currentId][d];
		console.log(dir);

        gsap.to(currentElement, { scale: 0.8, duration: 0.5});
        gsap.to(nextElement, { scale: 0.8, duration: 0.5,delay:0.5 });
		if (dir === 1){
			gsap.to(mainDiv, {duration: 1, x: `-${screenWidth}`, delay: 0.5});
		}
		else if(dir === 2){
			gsap.to(mainDiv, {duration: 1, x:`-${screenWidth}`,y: `-${screenHeight}`, delay: 0.5});
		}
		else if(dir === 3){
			gsap.to(mainDiv, {duration: 1, y:`-${screenHeight}`, delay: 0.5});
		} 
		else if(dir === 4){
			gsap.to(mainDiv, {duration: 1, x:`0`,y: `-${screenHeight}`, delay: 0.5});
		}
		else if (dir === 5){
			gsap.to(mainDiv, {duration: 1, x: `0`, delay: 0.5});
		}
		else if(dir === 6){
			gsap.to(mainDiv, {duration: 1, x:`0`,y: `0`, delay: 0.5});
		}
		else if(dir === 7){
			gsap.to(mainDiv, {duration: 1, y:`0`, delay: 0.5});
		}
		else if(dir === 8){
			gsap.to(mainDiv, {duration: 1, x:`-${screenWidth}`,y: `0`, delay: 0.5});
		}
        
        gsap.to(nextElement,{duration:1, delay:1.5, scale: 1, ease: 'bounce'});
        // console.log(nextElement) ;

        currentComponent=n;   
        
    }
</script>

<main>
	<div class="maincontent {visible ? 'visible' : ''}" bind:this={mainDiv}>
		<div class="card about" bind:this={homeDiv}>
			<HeroSection bind:pageWidth bind:slide={slideHero} toAnimate={false}/>
		</div>
		<!-- <div class="card hero"> -->
			<!-- CARD 1 -->
			<!-- </div> -->
		<div class="card about" bind:this={aboutDiv}>
			<!-- CARD 2 -->
			<AboutSection bind:slidePhoto={slideAbout}/>
		</div>
		<div class="card about" bind:this={eventDiv}>
			<Event bind:pageWidth />
		</div>
	
		<div class="card about" bind:this={workshopDiv}>
			<Workshop />
		</div>
		
	</div>	

	

</main>	

<!-- <button on:click={() => change(currentComponent, 2)} class="corner-btn top-left">Button 1</button> -->
<button on:click={() => change(currentComponent, 2,1)} class="corner-btn top-right">bt1</button>
<button on:click={() => change(currentComponent, 3,2)} class="corner-btn bottom-left">btn2</button>
<button on:click={() => change(currentComponent, 4,3)} class="corner-btn bottom-right">btn3</button>

<style>
	main {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.maincontent {
		display: grid;
		/* overflow: hidden; */
		grid-template-columns: auto auto;
	}
.card{
        display: flex;
        justify-content: center;
        overflow: hidden;
        align-items: center;
		width: 100vw;
		top: 0;
		position: relative;
        /* background-color: rgba(255, 200, 100); */
        height: 100vh;
    }
	.visible {
		opacity: 100% !important;
	}
	.corner-btn {
		position: absolute;
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		z-index: 10; /* Ensure buttons appear above other content */
	}

	/* Specific corner placements */
	.top-left {
		top: 100px;
		left: 20px;
	}

	.top-right {
		top: 100px;
		right: 20px;
	}

	.bottom-left {
		bottom: 20px;
		right: 20px;
	}

	.bottom-right {
		bottom: 20px;
		left: 20px;
	}


</style>
