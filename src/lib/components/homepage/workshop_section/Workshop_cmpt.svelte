<script lang="ts">
  
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { play } from 'svelte-awesome/icons';
  export let workshop_name='Workshop';
  export let img_url;
</script>

<div class="individualContainer">
  <div class="inner">
    <div class="image">
      <img class="image1" alt="logo" src={img_url}>
      <div class="content">
        <p class="heading">{workshop_name}</p>
        <div class="btn">
            <button type="button" class="info_btn">More Info<Icon data={play} scale={0.9}/></button>
            <button type="button" class="register_btn">Register</button>
        </div>
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
    width: max(20vw,250px);
    max-width: 300px;
    box-sizing: border-box;
    border: 1px solid gainsboro; 
    cursor: pointer; 
    display: flex;
    margin: 50px 30px;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 1%;
    position: relative;
    border: 1px solid transparent;
  }

  .image {
    bottom: 0;
    position: relative; 
    /* margin-left: 3%;
    padding-left: 5%;
    padding-bottom: 5%; */
    left: 30px;
    top: -30px;
    width: 100%;
    z-index: 4;
    border: 1px solid transparent; 
    display: flex;
    flex-direction: column;
    z-index: 2; 
  }

  .individualContainer:hover .image1{
      transform: translateX(5px) translateY(-5px);
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
  margin-top: 15%;
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


.register_btn{
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
  .image1 {
    height: 200px;
    width: 100%;
    transition: all 0.25s ease-in-out;
  }
</style>
