<script lang="ts">
    import backdrop from "$lib/assets/WebsiteBackdrop.png"
    import cap from "$lib/assets/merch_images/petrichor_cap.jpeg"
    import merch from "$lib/assets/merch_images/petrichor_merch.jpeg"
    import tshirt1 from "$lib/assets/merch_images/petrichor_tshirt.jpeg"
    import tshirt2 from "$lib/assets/merch_images/petrichor_tshirt2.jpeg"
    import combo from "$lib/assets/merch_images/combo.jpg"
    import botht from "$lib/assets/merch_images/both_tshirts.png"
	import { onMount } from "svelte";
    const images = [
      cap,
      merch,
      tshirt1,
      tshirt2
    ];
    let pageWidth: number= 1000;
    let img: HTMLImageElement;
    onMount(() => {
      img.onmouseover =(e) => {
        if (pageWidth < 700) {
          return
        }
        img.src = botht
      }
      img.onmouseleave = (e) => {
        if (pageWidth < 700) {
          return
        }
        img.src = combo
      }
      window.onresize = () => {
        pageWidth = window.innerWidth
        cal()
      }
      pageWidth = window.innerWidth
      cal()
      function cal() {
        if (pageWidth <= 600) {
          img.src = combo
        }
      }
    })

    const prices = [120,690,390,390, 1099];
  </script>
  
  <style>
    * {
      box-sizing: border-box;
    }
    .main {
        /* z-index: 100; */
        background-position: center;
        background-clip: border-box;
        background-size: cover;
        max-width: 100vw;
        min-height: 100vh;
        position: absolute;
        top: 0;
        left: -20px;
    }
    .header {
      margin-top: 90px;
      text-align: center;
      display: flex;
      font-size: xx-large;
      position: relative;
      font-weight: 900;
      z-index: 10;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
    }
  
  
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      z-index: 10;
      position: relative;
      align-items: center;
      gap: 4rem;
      padding: 2rem;
      justify-items: center;
    }
  
    .photo-frame {
      display: inline-block;
      position: relative;
      border: 4px solid white;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      background-color: white;
      transform: rotate(-5deg);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .photo-frame:hover{
      transform: rotate(0deg) scale(1.05);
    }
    .photo-frame:hover img {
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
    }
  
    .photo-frame img {
      width: 300px;
      height: 300px;
      object-fit: cover;
    }
    .photo-frame:before, .photo-frame::after {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        background-color: white;
        z-index: -1;
        top: 0%;
        position: absolute;
        transition: all 0.5s ease-in-out;
    }
    .photo-frame:hover::before {
        transform: rotate(-5deg) scale(1.05);
    }
    .photo-frame:hover::after {
        transform: rotate(-10deg) scale(1.05);
    }
    .combo::before {
      background-position: center;
      background-size: contain;
    }
    .combo::after {
      background-position: center;
      background-size: contain;
    }
    .combo:hover::before {
      background-image: url('/src/lib/assets/merch_images/petrichor_merch.jpeg');
      transform: translateX(-50%);
    }
    .combo:hover::after {
      background-image: url('/src/lib/assets/merch_images/petrichor_cap.jpeg');
      transform: translateX(50%);
    }
    .combo {
      margin: 20px 0 ;
    }
    .combo img{
      object-fit: fill;
    }
    @media (pointer:coarse) {
        .photo-frame::before {
            transform: rotate(-5deg) scale(1.05);
        }
        .photo-frame::after {
            transform: rotate(-10deg) scale(1.05);
        }
        .photo-frame {
            transform: rotate(0deg) scale(1.05);
        }
        .photo-frame img {
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }
    
    }
    @media (max-width: 400px) {
      .main {
        left: -10px;
      }
      .header {
        padding: 10px 20px;
        font-size: large;
        width: 100%;
      }
      .photo-frame img{
        width: 250px;
        height: 250px;
      }
    }
    .price{
        position: absolute;
        z-index: 10;
        bottom: 4px;
        color: black;
        font-size: medium;
        background-color: rgba(229, 203, 243, 0.711);
        height: 22%;
        width: 22%;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        padding: 5px;
      }
      .aa{
      font-family: 'Courier New', Courier, monospace;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  </style>
  
<div class="main" style="background-image: url({backdrop});">
   <div class="header">
    Buy Our Petrichor'25 merch at IIT Palakkad on 18th and 19th January 2025. 
   </div>
    <div class="gallery">
        {#each images as image, i}
        <div class="photo-frame">
            <img src={image} alt="photo" />
            <div class="price">
                <p class="aa">{prices[i]}Rs</p>
            </div>
        </div>
        {/each}
      </div>
      <center>

        <div class="photo-frame {(pageWidth>=700) ? "combo": ""}" style="margin: 40px 0;">
          <img src={combo} bind:this={img} alt="photo" />
          <div class="price">
            <p class="aa">1099Rs</p>
          </div>
        </div>
      </center>
   
</div>

  