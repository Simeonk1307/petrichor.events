
<script lang='ts'>
    // import logo from "$lib/assets/comp.jpg";
    // import StackedBoxes from './Workshop_cmpt.svelte';

    //Here we can change the images for the time being i just kept the same images 
    import img1 from '$lib/assets/HomePage/worshop1.png'
    import img2 from '$lib/assets/HomePage/workshop2.png'
    import img3 from '$lib/assets/HomePage/workshop3.png'
    import img4 from '$lib/assets/HomePage/workshop4.png'
    import img5 from '$lib/assets/HomePage/workshop5.png'
    import img6 from '$lib/assets/HomePage/workshop6.png'
    import {goto} from '$app/navigation'

    //Here this will redirect to the workshopRegistration page
    function gotoreg(){
      goto('./workshopRegistration/')
    }

    //This will contain all the data like the name of the speaker and venue, time and all that which we can change acc to our needs 
    const workshops = [
      {"name":"WorkShop 1", url:img1, speaker: 'Speaker of workshop' ,  time:'9:00-10:00 AM ',venue:'Nile, Agore',prerequisite:'Nothing right now' ,description:'Hi this is the description of the workshop'  },
      {"name":"WorkShop 2", url:img2,speaker: 'Speaker of workshop' ,  time:'9:00-10:00 AM ',venue:'Nile, Agore',prerequisite:'Nothing right now' ,description:'Hi this is the description of the workshop'},
      {"name":"WorkShop 3", url:img3,speaker: 'Speaker of workshop' ,  time:'9:00-10:00 AM ',venue:'Nile, Agore',prerequisite:'Nothing right now' ,description:'Hi this is the description of the workshop'},
      {"name":"WorkShop 4", url:img4,speaker: 'Speaker of workshop' ,  time:'9:00-10:00 AM ',venue:'Nile, Agore',prerequisite:'Nothing right now' ,description:'Hi this is the description of the workshop'},
      {"name":"WorkShop 5", url:img5,speaker: 'Speaker of workshop' ,  time:'9:00-10:00 AM ',venue:'Nile, Agore',prerequisite:'Nothing right now' ,description:'Hi this is the description of the workshop'},
      {"name":"WorkShop 6", url:img6,speaker: 'Speaker of workshop' ,  time:'9:00-10:00 AM ',venue:'Nile, Agore',prerequisite:'Nothing right now' ,description:'Hi this is the description of the workshop'},
    ]
    //This is the price button 
    let price = 999;
  </script>
    
  <main>
    <h1 style="padding-left: 5%">Discover workshops</h1>
    {#each workshops as workshop}
    <div class="workshop_specific">
        <img src={workshop.url} alt={workshop.name} />
        <div class="text">
            <h3 class="heading"><b>{workshop.name}</b></h3>
            <p class="speaker">{workshop.speaker}</p>
            <p class="content" >{workshop.time}</p>
            <p class="content">{workshop.venue}</p>
            <p class="content desc">{workshop.description}</p>
            <p class="content desc">{workshop.prerequisite}</p>
            <button class="price_btn">Join for {price}</button>
        </div>
    </div>
    {/each}
  </main>
    
  <style>
    main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      margin-left: 100px;
      min-height: 100vh;
      width: 100vw;
      margin-bottom: 20px;
    }
    /* .container{
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
    } */
    @keyframes workshop{
          from{
        transform: translateX(0);
          } to {
              transform: translateX(-50%);
          }
      }
    .heading{
        /* font-weight: 600; */
        font-size: 20px;
        font-weight: bold;
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
          color: rgb(255, 254, 254);
          text-align: center;
      margin: 1em 0;
          font-weight: 600;
          font-size: large;
          
    }

    .desc{
      padding-top: 10px;

    }
    .price_btn{
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
    .workshop_specific {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;
        border: none;
        border-radius: 8px;
        background-color: #000000;
    }

    .workshop_specific img {
        width: 200px; /* Adjust the width as needed */
        height: auto;
        margin-right: 20px; /* Space between the image and the text */
        /* padding: 40px; */
        padding-top: 10px;
        object-fit: cover;
        z-index: 100;
      }

    .workshop_specific .text {
        flex: 1; /* This makes the text container take the remaining space */
        padding-left: 30px;
        
      }

    .workshop_specific .text h3 {
        margin: 0;
    }

    .workshop_specific .text  {
        font-weight: bold;
    }

    .workshop_specific .text .speaker {
        margin: 5px 0;
    }

    .workshop_specific .text .content {
        margin: 0;
    }
    .content  {
      font-size: 20px;
    }
    .speaker{
      font-size: 20px;
      padding-top: 5px;
      padding-bottom: 2px;
    }
  </style>
    
