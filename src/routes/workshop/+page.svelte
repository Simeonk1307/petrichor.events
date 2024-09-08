<script lang="ts">
	//Here we can change the images for the time being i just kept the same images
	import { workshops } from '$lib/data/workshop.js';
	import WorkShopComp from './WorkShopComp.svelte';
</script>

<main>
	<div class="blank" />
	<div class="discover">
		<h1>Discover Workshops</h1>
		<h3>Learn new skills from IIT experts</h3>
	</div>
	<div class="eventHolder">
		{#each Object.entries(workshops) as [id, workshop]}
			<WorkShopComp id={id} workshop={workshop}/>
		{/each}
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
		margin-left: 2em;
	}

</style>
