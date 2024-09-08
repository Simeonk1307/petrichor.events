<script lang="ts">

	import { goto } from '$app/navigation';
	import Workshop from '$lib/components/homepage/workshop_section/Workshop.svelte';
	import { onMount } from 'svelte';
    export let id;
    export let workshop;

	function handleClick(id: string) {
		// get the fees and number of particiants here.
		// For workshop number of participants will be only 1 so
		// we will skip the add participant page and directly send user to payment page

		goto('/payment/check?id=' + id);
	}

    let WorkShopDiv:HTMLElement;
    onMount(() => {
        
        WorkShopDiv.onmousemove=(e)=>{
            let bounds = WorkShopDiv.getBoundingClientRect()
            let scrollX = e.clientX
            let scrollY = e.clientY
            let left = ((scrollX - bounds.left) / bounds.width - 0.5) * 10
            let top =( (scrollY - bounds.top) / bounds.height - 0.5) * -10
            WorkShopDiv.style.transform = `rotateX(${left}deg) rotateY(${top}deg)`
        }
        WorkShopDiv.onmouseleave=()=>{
             WorkShopDiv.style.transform = `rotateX(0deg) rotateY(0deg)`
        }
    })
</script>

<div class="workshop_specific" id = {id} bind:this={WorkShopDiv}>
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
			Happening on <strong style="color:cyan">{workshop.date}</strong> <br />at
			<strong style="color:lightgreen">{workshop.venue}</strong>
		</p>

		<p class="content desc">{workshop.description}</p>
		{#if workshop.prerequisites.length > 0}
			<p style="color: orange;">
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
		<button
			class="price_btn"
			on:click={() => {
				handleClick(id);
			}}>Join for ₹ {workshop.price}</button
		>
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
		font-size: large;
	}
    .text{
        flex: 1;
        text-wrap: balance;
        overflow: hidden;
        max-width: 50%;
        transform: translateZ(100px);
    }
    .text *{
        max-width: 90%;
    }
    .imageHolder{
        flex: 1;
        height: 100%;
    }

	.desc {
		padding-top: 10px;
		color: white;
        font-size: 15px;
        width: 100%;
		font-weight: lighter;
	}
	.price_btn {
		margin-left: 18vw;
		color: white;
		width: calc(40%, 78);
		font-weight: 700;
		padding: 0.4rem;
		padding-left: 0.9rem;
		padding-right: 0.9rem;
		background: linear-gradient(99.74deg, #06dbac, #bd00ff);
		border-radius: 15px;
		border: none;
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
		width: max(80vw,300px);
        min-height: 80vh;
        /* border: #bd00ff solid; */
        gap:20px;
        transition: all ease-in-out 0.1s;
		background-color: #000000f6;
        overflow: hidden;
		color: white;
        perspective: 1000px;
        transform:  rotateX(0deg) rotateY(0deg);
        transform-style: preserve-3d ;
	}

	.imageHolder img {
		height: 100%;
        width: 100%;
		margin-right: 20px; 
		padding-top: 10px;
		object-fit: cover;
		border-radius: 16px;
		color: white;
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
		}
	}
</style>
