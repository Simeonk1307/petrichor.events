<script lang="ts">
	//Here we can change the images for the time being i just kept the same images
	import { workshops } from '$lib/data/workshop.js';
	import { onMount } from 'svelte';
	import WorkShopComp from './WorkShopComp.svelte';
	import gsap from 'gsap';

	export let data;

	let WorkShopDiv: HTMLDivElement;
	let radios: HTMLDivElement;
	let labels: { [key: string]: number };
	let len = 3;
	let pageWidth: number = 900;
	onMount(() => {
		len = WorkShopDiv.children.length;
		pageWidth = window.innerWidth;
		if (data.id){
			alignItem(Number.parseInt(WorkShopDiv.getElementsByClassName(data.id)[0].id.substring(6)))
		}else{
			alignItem(0);
		}
	});
	function alignItem(pos: number) {
		if (pageWidth <= 1000) {
			return;
		}
		let i = 0;
		let right = 1;
		let left = pos;
		for (let l of WorkShopDiv.children) {
			if (i == pos) {
				// continue;
				// gsap.set(l, {
				// });
				gsap.to(l, {
					zIndex: pos + len,
					duration: 1,
					ease: 'sine',
					scaleY:1.1,
					scaleX:1.02,
					transform: `translate(0,0)`
				});
			} else if (i < pos) {
				let trl = `translate(-${left * 10}%,0)`;
				gsap.to(l, {
					duration: 1,
					ease:"slow",
					transform: trl,
					scaleY:1 + ((left) * 0.02),
					scaleX:1,
					zIndex: i
				});
				left--;
			} else {
				let trl = `translate(${right * 10}%,0)`;
				gsap.to(l, {
					duration: 1,
					scaleY:1 + (len - right - 1) * 0.02,
					scaleX:1,
					ease:"slow",
					transform: trl,
					zIndex: len - right - 1
				});
				right++;
			}
			i++;
		}
	}
</script>

<main>
	<div class="blank" />
	<div class="discover atmos">
		<h1>Discover Workshops</h1>
		<h3>Learn new skills from IIT experts</h3>
	</div>
	<div bind:this={radios}>
		{#each Object.entries(workshops) as [id, workshop], pos}
			<input
				type="radio"
				name="slider"
				id={'s' + pos}
				on:change={() => {
					alignItem(pos);
				}}
			/>
		{/each}
	</div>
	<div class="crousel">
		<!-- <button class="changeworkshop">{"<"}</button> -->
		<div class="eventHolder" bind:this={WorkShopDiv}>
			{#each Object.entries(workshops) as [id, workshop], pos}
				<label for="s{pos}" id="slider{pos}" class={id}>
					<WorkShopComp {id} {workshop} />
				</label>
			{/each}
		</div>
		<!-- <button class="changeworkshop changeworkshop2" >{">"}</button> -->
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
	}
  .eventHolder{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:20px;
  }

	.blank {
		height: 5em;
	}
	.discover {
		color: rgba(255, 255, 255, 1);
		z-index: 2;
		text-align: center;
		margin-bottom: 1em;
	}
	.discover > h1 {
		font-size: 50px;
		font-family: var(--sfont);
		margin-bottom: -1rem;
	}

</style>
