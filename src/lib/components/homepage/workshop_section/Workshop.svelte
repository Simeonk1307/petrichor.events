
<script>
  import StackedBoxes from './Workshop_cmpt.svelte';
	import { goto } from "$app/navigation";
  import { workshops} from "$lib/data/workshop"


</script>
  
<div class="gradient-bg">
  <div class="gradients-container extra">
    <div class="g" id="g4-1" />
  </div>
</div>
<main>
  <h1 style="padding-left: 5%">Workshop</h1>
  <div class="container">
    <div class="workshop_scroll">
      {#each Object.entries(workshops) as [id,workShop]}
      <StackedBoxes workshop_name={workShop.name} img_url={workShop.image} workshop_id = {id}/>
    {/each}
    {#each Object.entries(workshops) as [id,workShop]}
      <StackedBoxes workshop_name={workShop.name} img_url={workShop.image} workshop_id = {id}/>
    {/each}
    </div>
  </div>
  <button on:click={()=> goto("/workshop")}>Show Workshops</button>
</main>
  
<style>
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: black;
    width: 100vw;
    overflow: hidden;
  }
  .container{
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .workshop_scroll{
    display: flex;
    justify-content: flex-start;
    animation: workshop 12s linear infinite;
  }
  .workshop_scroll:hover{
    animation-play-state: paused;
  }
  @keyframes workshop{
		from{
      transform: translateX(0);
		} to {
			transform: translateX(-50%);
		}
	}
  button{
    width: 150px;
    background-color: transparent;
    border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
    margin: 1em 0;
		font-weight: 100;
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

</style>
  