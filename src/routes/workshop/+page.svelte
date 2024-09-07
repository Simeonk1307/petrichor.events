
<script lang='ts'>

    //Here we can change the images for the time being i just kept the same images 
    import {workshops} from "$lib/data/workshop.js"
    import {goto} from '$app/navigation'
	import { user } from "$lib/stores";

    function handleClick(id:string) {
      // get the fees and number of particiants here.
      // For workshop number of participants will be only 1 so
      // we will skip the add participant page and directly send user to payment page
      
      goto('/payment/check?id='+id)
    }

    //This is the price button 
    let price = 999;
  </script>

<div class="main">
  <div style="height: 5em;"></div>
  <div class="header">
    <h1>Discover Workshops</h1>
    <h4>Learn new skills from IIT experts</h4>
  </div>
  <div class="workshops">
      {#each Object.entries(workshops) as [id,ws]}
          <div class="workshop" id="{id}">
              <div class="about" >
                  <div class="banner">
                      <h1>{ws.name}</h1>
                      <hr>
                      <p style="font-style: italic;">By
                          {#each ws.trainee as spk, i}
                              <span><strong>{spk}</strong>  {i == ws.trainee.length - 1 ? "" : (
                                  i < ws.trainee.length - 2 ? "," : "and"
                              )} </span>
                          {/each}
                      </p>
                      <div class="chips">
                          {#each ws.topics as topic}
                              <span class="chip">{topic}</span>
                          {/each}
                      </div>
                      <p>Happening on <strong style="color:cyan">{ws.date}</strong> at <strong style="color:lightgreen">{ws.venue}</strong></p>
                      <p>{ws.description}</p>
                      <button on:click={()=>handleClick(id)} class="button-reg butt">Register Now for ₹{ws.price}</button>
                      {#if ws.prerequisites.length > 0}
                      <p style="color: orange;">Some knowledge in
                          {#each ws.prerequisites as spk, i}
                              <span><strong>{spk}</strong>  {i == ws.prerequisites.length - 1 ? "" : (
                                  i < ws.prerequisites.length - 2 ? "," : "and "
                              )} </span>
                          {/each} is expected.
                      </p>
                      {/if}
                  </div>
              </div>
              <div class="img" style="background-image: url('{ws.image}');"></div>
          </div>
      {/each}
  </div>
</div>

<style>
  .main{
      background-color: transparent;
      z-index: 2;
      position: relative;
  }
  .workshop .img{
      background-position: center;
      background-repeat: no-repeat;
  }
  /* .debug{
      border: 1px solid white;
  } */
   .header{
    margin-left: 4rem;
   }
  .butt{
      display: block;
      width: fit-content;
      text-decoration: unset;
      padding: 0.8em;
      padding-inline: 1em;
      /* background-color: rgb(255, 255, 255); */
      border-radius: 0.4em;
      /* border: unset; */
      /* color:rgb(0, 0, 0); */
      cursor: pointer;
      font-size: 15px;
      margin-top: 1em;
      margin-bottom: 0.5em;
      transition: 200ms ease-in-out;
  }
  .butt:hover{
      background-color: rgb(110, 255, 173);
      color: rgb(0, 0, 0)
  }
  .workshop{
      display: flex;
      height: 80vh;
      margin: 5px 20px;
      background-color: rgba(0, 0, 0, 0.41);
  }
  
  .workshop > *{
      width: 50%;
  }
  .about{
      width: 60%;
      height: 100%;
  }
  .img{
      width: 40%;
  }
  .workshop:nth-child(even){
      display: flex;
      flex-direction: row-reverse;
      background-color: transparent;
      /* color: black */
  }
  .workshop:nth-child(odd){
      display: flex;
  }
  .banner{
      margin: 2em;
      /* display: flex;
      flex-direction: column; */
      border-radius: 2em;
      padding: 1em;
      padding-inline: 2em;
      color: white;
  }
  .content{
      margin: 3em;
      text-align: justify;
  }
  .chip{
      padding: 0.2em;
      padding-inline: 1em;
      background-color: rgb(83, 83, 215);
      margin-right: 1em;
      border-radius: 1em;
      margin-bottom: .7em;
  }
  .chips{
      display: flex;
      flex-wrap: wrap;
  }
  .img{
      background-size: cover;
      background-position: 20%;
      margin: 2em;
      border-radius: 2em;
  }

  @media (max-width: 1000px){
      .banner{
          margin: 0em;
      }
      .img{
          margin: 2em 0.5em;
      }
      *{
          /* font-size: smaller;   // try this also*/ 
          font-size: small; 
      }
      .workshop{
          height: 50%;
      }
  }
</style>
    
