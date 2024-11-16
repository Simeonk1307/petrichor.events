<script lang="ts">
	import ardino from '$lib/assets/HomePage/ardino.jpg';
	import technical from '$lib/assets/HomePage/technical.jpeg';
	import cultural from '$lib/assets/HomePage/cultural.png';
	import StackedBoxes from './Event_cmpt.svelte';
	import { onMount } from 'svelte';

	export let pageWidth;
	let CardDiv: HTMLDivElement;
	let middle: Array<number> = [];
	let childs: Array<HTMLElement> = [];
	let mouseX = 0;
	let mouseY = 0;

	onMount(() => {
		if (CardDiv) {
			if (CardDiv) {
				const bounds = CardDiv.getBoundingClientRect();
				middle = [];
				// getting mid point of the whole card Div
				middle.push(((bounds.left + bounds.right) / 2) | 0);
				middle.push(((bounds.top + bounds.bottom) / 2) | 0);
				//
			}
			const childrens = CardDiv.children.item(0)?.children;
			for (let i = 0; i < childrens!.length; i++) {
				const div = childrens
					?.item(i)
					?.children.item(0)
					?.children.item(0)
					?.children.item(0) as HTMLElement;
				const boundChild = div.getBoundingClientRect();
				childs.push(div);
			}
		}

		window.onscroll = (e) => {
			if (CardDiv) {
				const bounds = CardDiv.getBoundingClientRect();
				middle = [];
				// getting mid point of the whole card Div
				middle.push(((bounds.left + bounds.right) / 2) | 0);
				middle.push(((bounds.top + bounds.bottom) / 2) | 0);
				//
			}
			const moveX = ((mouseX - middle[0]) / 20) | 0;
			const moveY = ((mouseY - middle[1]) / 20) | 0;
			// console.log(moveX + " "+moveY)
			moveX;
			moveY;
			if ( Math.abs(moveY) >= 35) return
			childs.forEach((child, i) => {
				child.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
			});
		};

		window.onmousemove = (e) => {
			const moveX = ((e.clientX - middle[0]) / 45) | 0;
			const moveY = ((e.clientY - middle[1]) / 45) | 0;
			mouseX = e.clientX;
			mouseY = e.clientY;
			// console.log(moveX+ " "+moveY)
			moveX;
			moveY;
			if ( Math.abs(moveY) >= 35) return
			childs.forEach((child, i) => {
				child.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
			});
		};
		window.onmouseleave = (e) => {
			console.log('leave' + CardDiv.className);
			childs.forEach((child, i) => {
				child.style.transform = `translateX(0px) translateY(0px)`;
			});
		};
	});
</script>

<div class="gradient-bg">
	<div class="gradients-container extra">
		<div class="g" id="g3-1" />
	</div>
</div>

<div class="container atmos" bind:this={CardDiv}>
	<div class="cards">
		<StackedBoxes event_name="Cultural" img_url={cultural} top={false} left={pageWidth >= 600}/>
		<StackedBoxes event_name="Technical" img_url={technical} top={pageWidth > 600} left={false} />
		<StackedBoxes event_name="Informals" img_url={ardino} top={false} left={false} />
	</div>
	<h1>Events</h1>
</div>

<style>
	.container {
		width: 100vw;
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		overflow: hidden !important;
		cursor: pointer;
		z-index: 2	;
	}
	.container * {
		overflow: hidden !important; 
		z-index: 2	;
	}
	h1 {
		letter-spacing: 1px;
		display: flex;
		flex: 1;
		font-weight: 100;
		font-size: 50px;
		align-items: center;
		justify-content: center;
		margin: 0;
		overflow: visible !important;
		margin-right: 5rem;
	}
	.cards {
		flex: 3;
		display: grid;
		grid-template-columns: auto auto;
	}

	
	/* Background */
	#g3-1 {
		background: radial-gradient(
				farthest-corner at 75% 30%,
				rgba(var(--color4), 0.5) 0,
				rgba(var(--color4), 0) 30%
			)
			no-repeat;
		width: 100vw;
		top: 0%;
		height: 100vw;
	}

	@media (max-width: 1000px){
		h1{
			margin-right: 2rem;
			font-size: 40px;
		}
		.cards{
			margin: 0 20px;
		}
	}

	@media (max-width: 600px) {
		.container{
			min-height: 100%;
			overflow:visible !important ;
			overflow-x: hidden;
		}
		h1{
			max-height: 50px;
		}
		.cards {
			padding: 0 !important;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	@media (max-width: 900px) {
		.container {
			flex-direction: column-reverse;
			margin-top: 1rem;
		}
		h1{
			font-size: calc(50px - 1vw);
			margin: 3rem 0;
		}
		.cards {
			flex: 2;
		}
	}
</style>
