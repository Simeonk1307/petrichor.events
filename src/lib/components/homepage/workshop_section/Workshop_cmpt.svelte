<script lang="ts">
  // import { goto } from '$app/navigation';
  export let workshop_name='Workshop';
  export let workshop_id:string;
  export let img_url;

  function handleClick(){
    window.location.href = (`/workshop/?id=${workshop_id}`)
  }
</script>

 

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="individualContainer" on:click={()=>handleClick()}>
  <div class="inner">
    <div class="image">
      <img class="image1" alt="logo" src={img_url}>
      <div class="content">
        <p class="heading">{workshop_name}</p>
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
    float: left;
    min-width: max(20vw,250px);
    max-width: 300px;
    box-sizing: border-box;
    border: 1px solid transparent; 
    overflow: hidden;
    position: relative; 
  }

  .inner {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100%;
    padding: 1%;
    /* margin: 1%; */
    overflow: hidden;
    position: relative;
    border: 1px solid transparent;
  }

  .image {
    bottom: 0;
    position: relative; 
    margin-left: 3%;
    overflow: hidden;
    padding-left: 5%;
    padding-bottom: 5%;
    left: 30px;
    top: -30px;
    width: 100%;
    /* z-index: 4; */
    border: 1px solid transparent; 
    display: flex;
    flex-direction: column;
    /* z-index: 2;  */
  }

  
  .content{
    margin-right: 12%;
  }

.heading{
  margin-top: 5%;
  padding: 2%;
  pointer-events: none;
  font-size: medium;
  font-weight: bolder;
  
}
  .image1 {
    height: 200px;
    width: 100%;
    pointer-events: none;
    transition: all 0.25s ease-in-out;
  }
</style>
