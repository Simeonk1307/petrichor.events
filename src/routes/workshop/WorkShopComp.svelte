	<script lang="ts">

	import { goto } from '$app/navigation';
	import { closed_workshops } from '$lib/helper';
	import { user } from '$lib/stores';
	import type { workshop } from '$lib/types';
	import { onMount } from 'svelte';
	export let id;
	export let workshop:workshop;

		function handleClick(id: string) {
			if (closed_workshops.includes(id)) {
				return
			}
			// get the fees and number of participants here.
			// For workshop number of participants will be only 1 so
			// we will skip the add participant page and directly send user to payment page
			// goto(`/payment/register?id=${id}`);
			window.open("https://docs.google.com/forms/d/e/1FAIpQLSdV_IPsTZldqIYSX7Pc6Bz5Iuj989hqmWz8tOEVuur2ivR_eQ/viewform")
		}

	let WorkShopDiv:HTMLElement;
	let registered = false;
	onMount(() => {

		for (const event of $user.user_events) {
			if (event.id == id) {
				registered = true
			}
		}
		
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
		<p>
			Happening on <strong style="color:white; font-weight: bolder">{workshop.date}</strong> <br />at
			<strong style="color:white; font-weight: bolder">{workshop.venue}</strong>
		</p>

		<p class="content desc">{workshop.description}</p>
		{#if workshop.prerequisites.length > 0}
			<p style="color: white; font-weight: bolder">
				Prerequisites:
				{#each workshop.prerequisites as spk, i}
					<span
						><strong>{spk}</strong>
						{i == workshop.prerequisites.length - 1
							? ''
							: i < workshop.prerequisites.length - 2
							? ','
							: 'and '}
					</span>
				{/each}
			</p>
		{/if}
		{#if closed_workshops.includes(id)}
			<button
			class="price_btn">Registration closed</button
			>
		{:else if registered}
			<button
				class="price_btn">Registered</button
			>
		{:else}
			<!-- <button
				class="price_btn"
				on:click={() => {
					handleClick(id);
				}}>Registrations Closed</button
			> -->
			<button
				class="price_btn"
				on:click={() => {
					handleClick(id);
				}}>Join for ₹ {workshop.price}</button
			>
		{/if}
	</div>
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
		text-align: center;
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
		padding: 2rem;
		border-radius: 1rem;
	}

	.desc {
		color: white;
		font-size: 15px;
		width: 100%;
		font-family: var(--wfont);
		font-weight: lighter;
		white-space: pre-wrap;
	}
	.price_btn {
		color: white;
		width: 100%;
		font-weight: 700;
		background: transparent;
		border-radius: 2rem;
		border: 1px solid white;
		text-wrap: nowrap;
	}
	.chip {
		padding: 0.2em;
		padding-inline: 1em;
		background-color: transparent;
		margin-right: 1em;
		border-radius: 1em;
		border: 1px solid white;
		margin-bottom: 0.7em;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	@keyframes flicker {
	  0%, 100% {
		box-shadow: 0 0 15px rgba(0, 191, 255, 0.3),
					0 0 30px rgba(0, 191, 255, 0.2),
					0 0 45px rgba(0, 191, 255, 0.1);
	  }
	  50% {
		box-shadow: 0 0 10px rgba(0, 191, 255, 0.1),
					0 0 20px rgba(0, 191, 255, 0.05),
					0 0 30px rgba(0, 191, 255, 0.03);
	  }
	}
	.workshop_specific {
		display: flex;
		align-items: center;
		width: max(80vw,320px);
		min-height: 400px;
		/* border: #bd00ff solid; */
		gap:15px;
		/* transition: all ease-in-out 0.1s; */
		background-color: transparent;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		/* transition: all 1s ease-in-out; */
		color: white;
		border: 1px solid #b5ebfa;
		border-radius: 2rem;
		animation: flicker 2s infinite ease-in-out;
	}

	.imageHolder img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
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

	@media (max-width: 900px) {
		.workshop_specific {
			display: flex;
			flex-direction: column;
			position: relative;
			width: max(290px,60vw);
			min-height: unset;
			height: fit-content;
			border-radius: 1rem;
		}
		.imageHolder {
			width: 100%;
			height: unset;
			border-radius: 0.5rem;
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
			text-align: center;
		}
		.price_btn{
			font-size: calc(10px + 1vw);
		}
	}

	@media (max-width: 800px) {
		.workshop_specific {
			display: flex;
			flex-direction: column;
			position: relative;
			width: max(290px,70vw);
			min-height: unset;
			height: fit-content;
		}
	}

	@media (max-width: 600px) {
		.workshop_specific {
			display: flex;
			flex-direction: column;
			position: relative;
			width: max(290px,80vw);
			min-height: unset;
			height: fit-content;
		}
	}

	@media (max-width: 400px) {
		.workshop_specific {
			display: flex;
			flex-direction: column;
			position: relative;
			width: max(290px,90vw);
			min-height: unset;
			height: fit-content;
		}
	}
</style>
