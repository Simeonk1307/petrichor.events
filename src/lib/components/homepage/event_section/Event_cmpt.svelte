<script lang="ts">
	import { getContext } from "svelte";
  import { goto } from '$app/navigation';

    export let event_name='Event';
    export let img_url;
    export let top;
    export let left;
    const dialogPopUp:Function = getContext('displayPopUp')
    function handleClick() {
      goto('/events/' + event_name.toLowerCase())
    }

  </script>
  
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="individualContainer" style="{top ? "top:40%;" :""} {left ? "left:15%;" : ""} " on:click={handleClick}>
    <div class="inner">
      <div class="image">
        <img class="image1" alt="logo" src={img_url}>
        <div class="content">
          <p class="heading">{event_name}</p>
        </div>
      </div>
      
    </div>
  </div>
  
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    .individualContainer {
      width: 220px;
      height: 250px;
      margin: 50px 30px;
      position: relative;
      box-sizing: border-box;
      border: 1px solid gainsboro; 
      cursor: pointer;
      transition: all 1s ease;
    }
  
    .inner {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 1%;
    }
  
    .image {
      bottom: 0;
      position: relative; 
      border: 1px solid transparent; 
      display: flex;
      flex-direction: column;
      left: 30px;
      top: -30px;
      /* z-index: 4; */
    }


    .content{
      margin-right: 12%;
    }
  
    .heading{
      margin-top: 5%;
      padding: 2%;
      font-family: var(--pfont);
      font-size: 20px;
      font-weight: bolder;
    }
    .image1 {
      min-height: 220px;
      width: 220px;
      /* z-index: 5; */
      transition: all 0.35s ease;
    }

    /* .individualContainer:hover .image{
      transform: translateX(10px) translateY(-10px);
    } */
    
    @media (max-width:900px){
      .individualContainer {
        width: 200px;
        height: 210px;
        margin: 45px 30px;
        position: relative;
        box-sizing: border-box;
        border: 1px solid gainsboro; 
      }
      .image1 {
        min-height: 180px;
        width: 200px;
        /* z-index: 5; */
      }
      .image{
        left: 20px;
        top: -25px;
      }
    }

    
    </style>
  