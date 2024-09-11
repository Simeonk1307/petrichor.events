	<script lang="ts">

	import { goto } from '$app/navigation';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import type { workshop } from '$lib/types';
	import { onMount } from 'svelte';
	export let id;
	export let workshop:workshop;

		function handleClick(id: string) {
			// get the fees and number of particiants here.
			// For workshop number of participants will be only 1 so
			// we will skip the add participant page and directly send user to payment page

			goto('/payment/check?id=' + id);
			// window.open("https://docs.google.com/forms/d/e/1FAIpQLSfjtgKgnDf_dX3QyrkisEODDw0z2MkRIXAtN28NyHiPEpD5Jg/viewform")
		}

	let WorkShopDiv:HTMLElement;
	onMount(() => {
		
		// WorkShopDiv.onmousemove=(e)=>{
		//     let bounds = WorkShopDiv.getBoundingClientRect()
		//     let scrollX = e.clientX
		//     let scrollY = e.clientY
		//     let left = ((scrollX - bounds.left) / bounds.width - 0.5) * 10
		//     let top =( (scrollY - bounds.top) / bounds.height - 0.5) * -10
		//     WorkShopDiv.style.transform = `rotateX(${left}deg) rotateY(${top}deg)`
		// }
		// WorkShopDiv.onmouseleave=()=>{
		//      WorkShopDiv.style.transform = `rotateX(0deg) rotateY(0deg)`
		// }
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="workshop_specific" id = {id} bind:this={WorkShopDiv} >
	<div class="imageHolder">
		<img src={workshop.image} alt={workshop.name} />
	</div>
	<div class="text">
		<h1>{workshop.name}</h1>
		<!-- <hr> -->
		{#if workshop.trainee.length > 0}
			<p style="font-style: italic;">
				By
				{#each workshop.trainee as spk, i}
					<span
						><strong>{spk}</strong>
						{i == workshop.trainee.length - 1 ? '' : i < workshop.trainee.length - 2 ? ',' : 'and'}
					</span>
				{/each}
			</p>
		{/if}
		<div class="chips">
			{#each workshop.topics as topic}
				<span class="chip">{topic}</span>
			{/each}
		</div>
		<div class="text">
			<h1>{workshop.name}</h1>
			<!-- <hr> -->
			{#if workshop.trainee.length > 0}
				<p style="font-style: italic;">
					By
					{#each workshop.trainee as spk, i}
						<span
							><strong>{spk}</strong>
							{i == workshop.trainee.length - 1 ? '' : i < workshop.trainee.length - 2 ? ',' : 'and'}
						</span>
					{/each}
				</p>
			{/if}
			<div class="chips">
				{#each workshop.topics as topic}
					<span class="chip">{topic}</span>
				{/each}
			</div>
			<p>
				Happening on <strong style="color:cyan">{workshop.date}</strong> <br />at
				<strong style="color:lightgreen">{workshop.venue}</strong>
			</p>
		{/if}
		<button
			class="price_btn"
			on:click={() => {
				handleClick(id);
			}}>Join for ₹ {workshop.price}</button
		>
	</div>

<style>
	*{
		box-sizing: border-box;
	}
	button {
		width: 150px;
		/* background-color: transparent; */
		border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: rgb(255, 254, 254);
		z-index: 200;
		text-align: center;
		margin: 1em 0;
		font-weight: 600;
		overflow: hidden;
		font-size: large;
	}
	.text{
		flex: 1;
		/* text-align: justify; */
		overflow: hidden;
		max-width: 50%;
		gap: calc(10px + 0.3vw);
		height: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: calc(15px + 0.3vw);
	}
	.text h1{
		font-size: calc(27px + 0.1vw);
	}
	.text *{
		max-width: 90%;
		margin: 0;
		/* text-align: justify; */
	}
	.text > *{
		width: 100%;
	}
	.imageHolder{
		flex: 1;
		width: min(50%,400px);
		/* height: 100%; */
	}

	.desc {
		color: white;
		font-size: 15px;
		width: 100%;
		font-family: var(--wfont);
		font-weight: lighter;
	}
	.price_btn {
		color: white;
		width: 100%;
		font-weight: 700;
		background: linear-gradient(99.74deg, #06dbac, #bd00ff);
		border-radius: 15px;
		border: none;
		text-wrap: nowrap;
	}
	.chip {
		padding: 0.2em;
		padding-inline: 1em;
		background-color: rgb(83, 83, 215);
		margin-right: 1em;
		border-radius: 1em;
		margin-bottom: 0.7em;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
	}
	.workshop_specific {
		display: flex;
		align-items: center;
		border: none;
		border-radius: 8px;
		width: max(80vw,320px);
		min-height: 400px;

		/* border: #bd00ff solid; */
		gap:15px;
		/* transition: all ease-in-out 0.1s; */
		background-color: #000000f6;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		/* transition: all 1s ease-in-out; */
		color: white;
		border: 2px solid rgb(105, 9, 183);
		box-shadow: 0 0 10px rgb(245, 76, 245);
	}

	.imageHolder img {
		width: 100%;
		margin-right: 20px; 
		padding-top: 10px;
		object-fit: cover;
		border-radius: 16px;
		color: white;
		object-position: center;
	}

	.workshop_specific .text {
		font-weight: bold;
		color: white;
	}

	.workshop_specific .text .content {
		margin: 0;
		color: white;
		font-weight: lighter;
	}

	@media (max-width: 1000px) {
		.workshop_specific {
			display: flex;
			flex-direction: column;
			position: relative;
			width: max(290px,70vw);
			min-height: unset;
			height: fit-content;
		}
		.imageHolder {
			width: 100%;
			height: unset;
		}
		.imageHolder img{
			height: unset;
			width: 100%;
		}
		.text{
			max-width: 90%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: start;
		}
		.price_btn{
			font-size: calc(10px + 1vw);
		}

		.imageHolder img {
			width: 100%;
			margin-right: 20px; 
			padding-top: 10px;
			object-fit: cover;
			border-radius: 16px;
			color: white;
			object-position: center;
		}

		.workshop_specific .text {
			font-weight: bold;
			color: white;
		}

		.workshop_specific .text .content {
			margin: 0;
			color: white;
			font-weight: lighter;
		}

		@media(min-width:1200px){
			.workshop_specific{
				height: 500px;
			}
			.imageHolder{
				width: 400px;
				height: 100% ;
			}
			.imageHolder img{
				height: 100%;
				width: unset;
			}
			.text {
				flex: 1.5;
				max-width: unset;
			}
		}

		@media (max-width: 1000px) {
			.workshop_specific {
				display: flex;
				flex-direction: column;
				position: relative;
				width: max(320px,70vw);
				min-height: unset;
				height: fit-content;
			}
			.imageHolder {
				width: 100%;
				height: unset;
			}
			.imageHolder img{
				height: unset;
				width: 100%;
			}
			.text{
				max-width: 90%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				text-align: start;
			}
			.price_btn{
				font-size: calc(10px + 1vw);
			}
		}
	</style>
