
<script lang="ts">
  import ardino from '$lib/assets/HomePage/ardino.jpg'
  import technical from '$lib/assets/HomePage/technical.jpeg'
  import cultural from '$lib/assets/HomePage/cultural.png'
  import StackedBoxes from './Event_cmpt.svelte';
	import { onMount } from "svelte";

  export let pageWidth;
  let CardDiv:HTMLDivElement;
  let middle: Array<number> = [];
  let centersX: Array<number> = [];
  let centersY: Array<number> = [];
  let childs: Array<HTMLElement> = [];

  onMount(()=>{
    if (CardDiv){
      const bounds = CardDiv.getBoundingClientRect()
      middle.push((bounds.left + bounds.right ) / 2 | 0)
      middle.push((bounds.top + bounds.bottom ) / 2 | 0)
      const childrens = CardDiv.children.item(0)?.children
      for (let i = 0; i < childrens!.length; i++){
        const div = childrens?.item(i)?.children.item(0)?.children.item(0)?.children.item(0) as HTMLElement;
        const boundChild = div.getBoundingClientRect()
        centersX.push(boundChild.left)
        centersY.push(boundChild.top)
        childs.push(div)
      }
    }
    CardDiv.onmousemove = (e) => {
      const moveX = (e.clientX - middle[0] ) / 50 | 0
      const moveY = (e.clientY - middle[1] ) / 50 | 0
      // console.log(moveX+ " "+moveY)
      moveX;moveY
      childs.forEach((child,i)=>{
        child.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
      })
    }
    CardDiv.onmouseleave = (e) => {
      console.log("leave"+CardDiv.className)
      childs.forEach((child,i)=>{
        child.style.transform = `translateX(0px) translateY(0px)`
      })
    }
  })

</script>
  
<div class="container" bind:this={CardDiv}>
  <div class="cards" >

    <StackedBoxes event_name="Cultural" img_url={cultural} top={false} left={pageWidth > 600}/>
    <StackedBoxes event_name="Technical" img_url={technical} top={pageWidth > 600} left={false}/>
    <StackedBoxes event_name="Informals" img_url={ardino} top={false} left={false}/>
  </div>
  <h1>Events</h1>
</div>

<style>

    h1{
      letter-spacing: 1px;
      display: flex;
      flex:1;
      font-weight: 100;
      font-size: 50px;
      align-items: center;
      justify-content: center;
      margin: 0;
      margin-right: 20px;
    }
    .container{
      width: 100vw;
      min-height: 100vh;
      margin-top: 2em ;
      margin-left: 2em;
      display: flex;
      cursor: pointer;
      z-index: 5; 
    }
    .cards{
      flex:3;
      display: grid;
      grid-template-columns: auto  auto;
      margin-left: 5vh;
    }

    @media (max-width:600px){
      .cards{
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    @media (max-width:900px){
      .container{
        flex-direction: column-reverse;
        margin: 0;
      }
      .cards{
        flex: 2;
      }
    }

</style>    