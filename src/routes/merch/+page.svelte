<script>
    import backdrop from "$lib/assets/WebsiteBackdrop.png"
    import cap from "$lib/assets/merch_images/petrichor_cap.jpeg"
    import merch from "$lib/assets/merch_images/petrichor_merch.jpeg"
    import tshirt1 from "$lib/assets/merch_images/petrichor_tshirt.jpeg"
    import tshirt2 from "$lib/assets/merch_images/petrichor_tshirt2.jpeg"
    const images = [
      cap,
      merch,
      tshirt1,
      tshirt2,
    ];
    const prices = [45,785,741,45];
  </script>
  
  <style>
    .main {
        overflow: hidden;
        /* z-index: 100; */
        background-position: center;
        background-clip: border-box;
        background-size: cover;
        height: 100vh;
        
    }
    .header {
      margin-top: 150px;
      text-align: center;
      display: flex;
      font-size: xx-large;
      position: relative;
      font-weight: 900;
      z-index: 100;
      justify-content: center;
      align-items: center;
      padding: 30px 10px;
    }
  
  
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
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
    .price{
        position: absolute;
        z-index: 10;
        bottom: 4px;
        color: black;
        font-size: medium;
        background-color: grey;
        height: 18%;
        width: 18%;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        font-weight: 900;
    }
    .aa{
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
        a=0;
        {#each images as image, i}
        <div class="photo-frame">
            <img src={image} alt="photo" />
            <div class="price">
                <p class="aa">{prices[i]}Rs</p>
            </div>
        </div>
        {/each}
    </div>
   
</div>

  