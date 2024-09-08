
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

  </script>
<main>
    <div class="blank" />
    <div class="discover"><h1>Discover Workshops</h1><h3>Learn new skills from IIT experts</h3></div>
    {#each Object.entries(workshops) as [id,workshop]}
    <div class="workshop_specific" id={id}>
        <img src={workshop.image} alt={workshop.name} />
        <div class="text">
            <h1>{workshop.name}</h1>
            <!-- <hr> -->
            <p style="font-style: italic;">By
                {#each workshop.trainee as spk, i}
                    <span><strong>{spk}</strong>  {i == workshop.trainee.length - 1 ? "" : (
                        i < workshop.trainee.length - 2 ? "," : "and"
                    )} </span>
                {/each}
            </p>
            <div class="chips">
                {#each workshop.topics as topic}
                    <span class="chip">{topic}</span>
                {/each}
            </div>
            <p>Happening on <strong style="color:cyan">{workshop.date}</strong> <br/>at <strong style="color:lightgreen">{workshop.venue}</strong></p>
            
            <p class="content desc">{workshop.description}</p>
            {#if workshop.prerequisites.length > 0}
            <p style="color: orange;">Some knowledge in
                {#each workshop.prerequisites as spk, i}
                    <span><strong>{spk}</strong>  {i == workshop.prerequisites.length - 1 ? "" : (
                        i < workshop.prerequisites.length - 2 ? "," : "and "
                    )} </span>
                {/each} is expected.
            </p>
            {/if}
            <button class="price_btn" on:click={()=>{handleClick(id)}}>Join for ₹ {workshop.price}</button>
        </div>
    </div>
    {/each}
  </main>
    
  <style>
    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      max-width: 100vw;
      margin-bottom: 20px;
      color: white;
    }
  
    .blank {
    height: 80px;
    }
    .discover{
      color: rgba(255, 255, 255,1) ;
      z-index: 200;
    }
    button{
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
  
    .desc{
      padding-top: 10px;
      color: white;
      z-index: 200;
      font-weight: lighter;
    }
    .price_btn{
      margin-left: 18vw;
    color: white;
    width: calc(40%,78);
    font-weight: 700;
    padding: 0.4rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    background: linear-gradient(99.74deg, #06dbac, #bd00ff);
    border-radius: 15px;
    border: none;
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
    .workshop_specific {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
        border: none;
        border-radius: 8px;
        /* background-color: #000000; */
        color: white;
        z-index: 200;
    }
  
    .workshop_specific img {
        width: 40vw; /* Adjust the width as needed */
        height: auto;
        margin-right: 20px; /* Space between the image and the text */
        /* padding: 40px; */
        padding-top: 10px;
        object-fit: cover;
        z-index: 100;
        border-radius: 16px;
        color: white;
        z-index: 200;
      }
  
    .workshop_specific .text  {
        font-weight: bold;
        color: white;
        z-index: 200;
    }
  
    .workshop_specific .text .speaker {
        margin: 5px 0;
        color: white;
        z-index: 200;
        font-weight: lighter;
    }
  
    .workshop_specific .text .content {
        margin: 0;
        color: white;
        z-index: 200;
        font-weight: lighter;
    }
    .content  {
      font-size: 18px;
      color: white;
      z-index: 200;
      font-weight: lighter;
    }
    .speaker{
      font-size: 18px;
      padding-top: 5px;
      padding-bottom: 2px;
      color: white;
      z-index: 200;
      font-weight: lighter;
    }

    @media(max-width:900px){
        .workshop_specific{
            display: flex;
            flex-direction: column;
        }
    }
  </style>
    
  