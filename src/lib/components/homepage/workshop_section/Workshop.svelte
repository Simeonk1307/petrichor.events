
<script>
  import StackedBoxes from './Workshop_cmpt.svelte';
	import { goto } from "$app/navigation";
  import done_n_dusted from "$lib/assets/done_n_dusted.png"
  import { workshops} from "$lib/data/workshop"
  import { Footer } from '$lib/components/ui';
  import Strip from '$lib/components/Strip.svelte';
	// Dummy data in this helper file
	import { footerLinks } from '$lib/helper';

  let lesserLength = Object.entries(workshops).length < 4
  const first = workshops.WP04
  const second = workshops.WP05

</script>
  


<div class="gradient-bg">
  <div class="gradients-container extra">
    <div class="g" id="g4-1" />
  </div>
</div>

<main>
  <h1 class="atmos">Workshop</h1>
  <div class="container">
    {#if Object.entries(workshops).length == 0}
    <div style="width: 100%;display:flex; justify-content:center; " draggable="false">
      <img height="200px" width="320px" src={done_n_dusted} alt="Coming Soon" draggable="false"/>
    </div>
    {:else}
      <div class="workshop_scroll">
        {#each Object.entries(workshops) as [id,workShop]}
        <StackedBoxes workshop_name={`${workShop.name}`} img_url={workShop.image} workshop_id = {id}/>
        {/each}
        {#each Object.entries(workshops) as [id,workShop]}
        <StackedBoxes workshop_name={workShop.name} img_url={workShop.image} workshop_id = {id}/>
        {/each}
        {#each Object.entries(workshops) as [id,workShop]}
        <StackedBoxes workshop_name={workShop.name} img_url={workShop.image} workshop_id = {id}/>
        {/each}
        {#each Object.entries(workshops) as [id,workShop]}
        <StackedBoxes workshop_name={workShop.name} img_url={workShop.image} workshop_id = {id}/>
        {/each}
        <!-- {#if lesserLength}
          <StackedBoxes workshop_name={first.name} img_url={first.image} workshop_id = {"WP04"}/>
        {/if} -->
        </div>
      {/if}
    </div>
    <!-- {#if Object.entries(workshops).length != 0}
    <button on:click={()=> goto("/workshop")}>Workshops</button>
    {/if} -->
    <Strip />
    <Footer title="Petrichor" links={footerLinks} />
  </main>
  
<style>
  .atmos{
    margin-top: 50px;
  }
  main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background-color: transparent;
    z-index: 2;
    width: 100vw;
    overflow: hidden;
  }
  main *{
    z-index: 2	;
  }
  main h1{
    font-family: var(--sfont);
  }
  .container{
    width: 100%;
    mix-blend-mode: color;
    display: flex;
    justify-content: flex-start;
  }
  .workshop_scroll{
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    animation: workshop 12s linear infinite;
  }
  .workshop_scroll:hover{
    animation-play-state: paused;
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

</style>
  