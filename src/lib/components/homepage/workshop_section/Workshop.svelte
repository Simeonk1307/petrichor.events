
<script>
  import logo from "$lib/assets/comp.jpg";
  import StackedBoxes from './Workshop_cmpt.svelte';
  import img1 from '$lib/assets/HomePage/worshop1.png'
  import img2 from '$lib/assets/HomePage/workshop2.png'
  import img3 from '$lib/assets/HomePage/workshop3.png'
  import img4 from '$lib/assets/HomePage/workshop4.png'
  import img5 from '$lib/assets/HomePage/workshop5.png'
  import img6 from '$lib/assets/HomePage/workshop6.png'

  const workshops = [
    {"name":"WorkShop 1", url:img1},
    {"name":"WorkShop 2", url:img2},
    {"name":"WorkShop 3", url:img3},
    {"name":"WorkShop 4", url:img4},
    {"name":"WorkShop 5", url:img5},
    {"name":"WorkShop 6", url:img6},
  ]

</script>
  
<main>
  <h1 style="padding-left: 5%">Workshop</h1>
  <div class="container">
    <div class="workshop_scroll">
      {#each workshops as workShop}
      <StackedBoxes workshop_name={workShop.name} img_url={workShop.url}/>
    {/each}
    {#each workshops as workShop}
      <StackedBoxes workshop_name={workShop.name} img_url={workShop.url}/>
    {/each}
    </div>
  </div>
  <button>Show Workshops</button>
</main>
  
<style>
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    margin-bottom: 20px;
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

</style>
  