<script lang="ts">
	import { onMount } from 'svelte';
	import WorkShopComp from '../WorkShopComp.svelte';

	export let data;
	onMount(() => {
		goto('/home')
	})
</script>

<main>
	<div class="blank" />
	<div class="eventHolder">
		<WorkShopComp id={data.id} workshop={data.workshop} />
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
	input {
		display: none;
	}
	.eventHolder {
		height: 100vh;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		gap: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow-y: scroll;
		flex-direction: column;
		position: static;
		display: flex;
		padding: 30px;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	.eventHolder label {
		position: absolute;
		transform-style: flat;
	}
	.crousel {
		position: relative;
		height: 100vh;
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
	@media (max-width: 1000px) {
		.eventHolder {
			overflow-y: scroll;
			flex-direction: column;
			position: static;
			padding: 10px;
			display: flex;
			grid-template-columns: auto auto;
			height: unset;
		}
		.eventHolder label {
			position: relative;
		}
		.discover h1 {
			font-size: 1.8rem;
		}
	}
	@media (max-width: 900px) {
		.eventHolder {
			overflow-y: scroll;
			flex-direction: column;
			position: static;
			display: flex;
			padding: 30px;
			height: unset;
		}
		.eventHolder label {
			position: relative;
		}
	}
	@media (max-width: 900px) {
		.discover h1 {
			font-size: 1.5rem;
		}
	}
</style>
