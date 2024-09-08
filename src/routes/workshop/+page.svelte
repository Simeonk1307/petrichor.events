<script lang="ts">
	//Here we can change the images for the time being i just kept the same images
	import { workshops } from '$lib/data/workshop.js';
	import { onMount } from 'svelte';
	import WorkShopComp from './WorkShopComp.svelte';
	import {gsap} from "gsap";
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';

	let currentPos = 0;

	function scrollLeft(){
		if (currentPos == 0){
			return
		}
		let thisEle = WorkShopDiv.children.item(currentPos)
		let leftEle = WorkShopDiv.children.item(currentPos - 1)
		gsap.set(thisEle,{
			zIndex:currentPos - 1
		})
		gsap.to(thisEle,{
			duration:1,
			scaleY:1,
			left:increase - 80,
		})
		gsap.to(leftEle,{
			duration:1,
			scale:1.1,
			right:"auto"
		})
		currentPos --
	}
	function scrollRight(){
		if (currentPos == WorkShopDiv.children.length){
			return
		}
		let thisEle = WorkShopDiv.children.item(currentPos)
		let rightEle = WorkShopDiv.children.item(currentPos + 1)
		gsap.set(thisEle,{
			zIndex:currentPos
		})
		gsap.to(thisEle,{
			duration:1,
			scaleY:1,
			right:increase - 80,
			zIndex:currentPos
		})
		gsap.to(rightEle,{
			duration:1,
			scale:1.2,
			left:"auto"
		})
		currentPos ++
	}

	function showWorkshop(pos:number){
		let left = (pos < currentPos) 
		while (currentPos != pos){
			//scroll
			if (left){
				scrollLeft()
			}else {
				scrollRight()
			}
			//
		}
	}

	let increase = 250;
	let WorkShopDiv:HTMLElement;
	onMount(()=>{
		
	})
</script>

<main>
	<div class="blank" />
	<div class="discover">
		<h1>Discover Workshops</h1>
		<h3>Learn new skills from IIT experts</h3>
	</div>
	<div class="crousel">
		<!-- <button class="changeworkshop">{"<"}</button> -->
		<div class="eventHolder" bind:this={WorkShopDiv}>
			{#each Object.entries(workshops) as [id, workshop],pos}
			<WorkShopComp id={id} workshop={workshop} focus={showWorkshop} pos={pos}/>
			{/each}
		</div>
		<button class="changeworkshop changeworkshop2" on:click={()=>{showWorkshop(currentPos+1)}}>{">"}</button>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 100vw;
		margin-bottom: 20px;
		color: white;
		position: relative;
	}
	.eventHolder{
		display: flex;
		height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	position: relative;
    gap:20px;
	
  }
  .crousel{
	position: relative;
  }
  .changeworkshop{
	position: absolute;
	height: 100%;
	font-size: 50px;
	font-weight: bold;
	color: rgb(123, 120, 120);
	width: 80px;
	background-color: rgba(0, 0, 0, 0.537);
	left: 0;
	border: none;
  }
  .changeworkshop2{
	right: 0;
	top: 0;
	left: unset;
  }

	.blank {
		height: 5em;
	}
	.discover {
		color: rgba(255, 255, 255, 1);
		z-index: 2;
		margin-left: 2em;
		text-align: center;
		margin-bottom: 1em;
	}
	.discover > h1 {
		font-size: 64px;
		margin-bottom: -1rem;
	}

</style>
