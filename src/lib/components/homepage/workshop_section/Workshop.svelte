
<script>
  import logo from "$lib/assets/comp.jpg";
  import StackedBoxes from './Workshop_cmpt.svelte';
</script>
  
<main>
  <h1 style="padding-left: 5%">Workshop</h1>
  <div class="container">
    <StackedBoxes workshop_name="Workshop 1" img_url={logo}/>
    <StackedBoxes workshop_name="Workshop 1" img_url={logo}/>
    <StackedBoxes workshop_name="Workshop 1" img_url={logo}/>
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
    flex-wrap: wrap;
  }
  .container{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
  