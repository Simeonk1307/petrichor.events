<script lang="ts">
  
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { play } from 'svelte-awesome/icons';
    export let event_name='Event';
    export let img_url;
    export let date='1 June 2024';
  </script>
  
  <div class="individualContainer">
    <div class="inner">
      <div class="image">
        <div class="event_image">
          <img class="image1" alt="logo" src={img_url}>
        </div>
        <div class="content">
          <p class="heading">{event_name}</p>
          <div class="btn">
              <p class="heading">{date}</p>
          </div>
      </div>
      </div>
      
      <div class="outline">
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
      width: 368px;
      padding: 50px;
      padding-right: 60px;
      padding-left: 60px;
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
      border: 1px solid transparent; 
      display: flex;
      flex-direction: column;
      z-index: 2; 
    }
  
    .event_image {
      overflow: hidden;
      height: 200px;
      /* border: 1px solid blue;  */
    }
  
    .outline {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 90%;
      width: 90%;
      max-width: 300px;
      z-index: 1; 
      border: 1.4px solid rgb(252, 252, 250); 
      box-sizing: border-box; 
      display: flex;
      flex-direction: column;
      clip-path: polygon(0% 0%,4% 0%, 4% 65%, 100% 65%,100% 100%, 0% 100%);
    }
    .content{
     
      margin-right: 12%;
    }
  
  .heading{
    margin-top: 5%;
    padding: 2%;
    font-size: medium;
    font-weight: bolder;
    
  }
  
  .btn{
    display: flex;
    align-items: center;
    margin-top: 0%;
    padding-top: 2%;
    /* border: 1px solid green; */
    align-items: center;
    /* gap: 10%; */
    padding-right: 9%;
    overflow: hidden;
    gap: 10%;
  }
  
  .info_btn{
    display: flex;
    color: white;
    width: 47%;
    background: transparent;
    font-size: small;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    padding: 0.7vh;
    border: 1px solid white;
    border-radius: 15px;
    
    gap: 0.3rem;
  }
  
  
    .image1 {
      height: 200px;

    }
  
    @media screen and (max-width: 1000px) {
      .individualContainer {
        width: 50%;
        align-self: center;
      }
    }
  
    @media screen and (max-width: 700px) {
      .individualContainer {
        width: 100%;
        padding: 5% 8%;
      }
    }
  </style>
  