
<script>
  import logo from "$lib/assets/comp.jpg";
  import StackedBoxes from './Workshop_cmpt.svelte';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { play } from 'svelte-awesome/icons';
  // import { faChevronRight } from 'svelte-awesome/icons';
</script>
  
<div class="container">
  
  <div class="workshop_card">
    <h1 style="padding-left: 5%">Workshop</h1>
    <StackedBoxes workshop_name="Workshop 1" img_url={logo}/>
    <StackedBoxes workshop_name="Workshop 1" img_url={logo}/>
    <StackedBoxes workshop_name="Workshop 1" img_url={logo}/>
  </div>
  <div class="all_workshop">
    <button>See All Workshop
     <div class="icon">
      <Icon data={play} scale={0.9}/>
     </div>
     </button>
  </div>
</div>

<style>

.container{
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: left;
  /* position: relative; */
}
.workshop_card{
  margin: 1px;
}
.all_workshop{
  /* border: 1px solid yellow; */
  box-sizing: border-box;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  margin-top: 5vw;
  color: white;
}
button{
  display: flex;
  flex-direction: row;
  color: white;
  background: transparent;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  font-size: smaller;
  /* font-weight: 100; */
  border-radius: 20px;
  /* width: 20vw; */
  /* font-size: medium; */
  /* font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
  gap: 4px;
  padding: 0.3rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
}
</style>