<script lang="ts">

    export let path:string;
</script>


<div class="gradient-bg">
    {#if path == '/home'}
    <div class="gradients-container extra">
      <div id="g1-3" class="g"></div>
      <div id="g1-2" class="g"></div>
      <div id="g1-1" class="g"></div>
      <div id="g1-7" class="g"></div>
    </div>
    <div class="gradients-container extra">
        <div class="g" id="g2-1"></div>
    </div>
    <div class="gradients-container extra">
        <div class="g" id="g3-1"></div>
    </div>
    <div class="gradients-container extra">
      <div class="g" id="g4-1"></div>
  </div>
    {:else if ["/login","/register","/forgotpassword"].includes(path) || path.includes('/changepassword/')}
      <div class="gradients-container extra">
        <div id="g1-3_l" class="g "></div>
      <div id="g1-2_l" class="g "></div>
      <div id="g1-1_l" class="g "></div>
      <div id="g1-7_l" class="g"></div>
    </div>
    {:else if path.startsWith('/CA')}
        <div class="gradients-container extra">
          <div id="g1-4" class="g"></div>
          <div id="g1-5" class="g"></div>
          <div id="g1-6" class="g"></div>
        </div>

    {:else}
    <div class="gradients-container extra">
      <div id="g1-3" class="g"></div>
      <div id="g1-2" class="g"></div>
      <div id="g1-1" class="g"></div>
      <div id="g1-7" class="g"></div>
    </div>
    {/if}
</div>

<style>
    .g{
        position: absolute;
        mix-blend-mode: var(--blending);
        width: 100%;
        height: 100%;
        opacity: 1;
    }
    .gradient-bg {
        width: 100vw;
        height: 100%;
        position: absolute;
        overflow: hidden;
        background: transparent;
        top: 0;
        left: 0;
    }


    .extra{
        height: 150vh;
    }

  .gradients-container {
    width: 100vw;
    height: 100vh;
    position: relative;
  }


  /* Section 1 */
  /* Home page */
  #g1-1 {
    background: radial-gradient(farthest-corner at 10% 5%, rgba(var(--color2), 1) 0, rgba(var(--color2), 0) 35%) no-repeat;
  }
  #g1-2 {
    background: radial-gradient(farthest-corner at 0px 0px, rgba(var(--color1), 0.8)  0%, rgba(var(--color1), 0) 45%) no-repeat;
  }
  #g1-3 {
    background: radial-gradient(farthest-corner at 0% 10%, rgba(var(--color3), 0.8)  0%, rgba(var(--color3), 0) 75%) no-repeat;
    width: 100vw;
    height: 100vh;
  }
  #g1-7 {
    background: radial-gradient(farthest-corner at 0% 52%, rgba(var(--color6), 0.8)  0%, rgba(var(--color6), 0) 45%) no-repeat;
  }
  /*  */
  /* LOGIN pages */
  #g1-1_l {
    background: radial-gradient(farthest-corner at 70% 55%, rgba(var(--color2), 1) 0, rgba(var(--color2), 0) 35%) no-repeat;
    width: 100vh;
    height: 100vh;  
    left: 40%;
  }
  #g1-2_l {
    background: radial-gradient(farthest-corner at 50% 50%, rgba(var(--color1), 0.8)  0%, rgba(var(--color1), 0) 45%) no-repeat;
    width: 100vh;
    height: 100vh;
    left: 40%;
  }
  #g1-3_l {
    background: radial-gradient(farthest-corner at 50% 50%, rgba(var(--color3), 0.8)  0%, rgba(var(--color3), 0) 75%) no-repeat;
    width: 125vh;
    height: 100vh;
    left: 40%;
  }
  #g1-7_l {
    background: radial-gradient(farthest-corner at 50% 60%, rgba(var(--color6), 0.8)  0%, rgba(var(--color6), 0) 45%) no-repeat;
    width: 100vh;
    height: 120vh;
    left: 40%;
  }
/*  */
  /* CAPage */
  #g1-6 {
    background: radial-gradient(circle, rgba(var(--color7), 0.6) 0, rgba(var(--color7), 0) 50%) no-repeat;
    width: 90vh;
    height: 90vh;
    left: 60%;
    top: -40%;
  }
  #g1-5 {
    background: radial-gradient(farthest-corner at 70% 0, rgba(var(--color3), 0.8)  0%, rgba(var(--color3), 0) 40%) no-repeat;
  }
  #g1-4 {
    background: radial-gradient(farthest-corner at 70% 15%, rgba(var(--color5), 0.8)  0%, rgba(var(--color5), 0) 60%) no-repeat;
    width: 100vw;
    /* left: 27%; */
    height: 100vh;
  }
  /*  */

  /* Other Sections*/
  #g2-1 {
    background: radial-gradient(circle at center, rgba(var(--color4), 0.5) 0, rgba(var(--color4), 0) 50%) no-repeat;
    left: 15%;
    height: 150vh;
  }
  #g3-1 {
    background: radial-gradient(farthest-corner at 75% 50%, rgba(var(--color4), 0.5) 0, rgba(var(--color4), 0) 50%) no-repeat;
    width: 100vw;
    top: 25%;
    height: 100vw;
  }
  #g4-1 {
    background: radial-gradient(farthest-corner at 55% 50%, rgba(var(--color4), 0.5) 0, rgba(var(--color4), 0) 50%) no-repeat;
    width: 100vw;
    top: 50%;
    height: 100vw;
  }

  @media(max-width:700px){
    #g2-1, #g3-1{
        left: 0;
    }
    #g1-3{
        width: 100vh;
        height: 100vh;
        left: -50%;
    }
    #g1-2, #g1-1{
      width: 150vw;
    }

    #g1-6 {
      left: 20%;
    }
  }
    

</style>