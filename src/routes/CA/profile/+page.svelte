<script lang="ts">
  import hand from "$lib/assets/HomePage/hands.png";

  function apply() {
    // redirect to CA form or portal
    window.location.href = "/CA/apply";
  }
</script>

<main class="relative min-h-screen w-screen flex items-center justify-center bg-black text-white overflow-hidden">

  <!-- Main container -->
  <div class="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-20">

    <!-- Left: Hand Image -->
    <div class="imagediv max-w-[350px]">
      <img src={hand} alt="Glowing hand with flower" draggable="false" class="w-full object-contain" />
    </div>

    <!-- Right: Text Content -->
    <div class="content max-w-xl text-center lg:text-left">
      <h1 class="text-5xl md:text-6xl font-light tracking-wide mb-6">CA PORTAL</h1>

      <p class="text-gray-300 leading-relaxed mb-10">
        Petrichor – the annual techno-cultural fest of IIT Palakkad is back again,
        and better than ever before. Now, yes, it’s offline. We the students of IIT Palakkad
        conduct Petrichor every year, and made sure last year’s event was enthralling for all its participants. 
        Now the wait is over; with just the perfect mix of cultural and technical events,
        we plan on making Petrichor’26 an unforgettable experience for you.
        Trust us when we say that you won’t miss out on anything. 
        Check out our website as it has answers to all the questions you might have.
        Stay tuned and brace yourselves for the journey of a lifetime with Petrichor’26!
      </p>

      <!-- Apply Button -->
      <div class="button_area">
        <button
          type="button"
          on:click={apply}
          class="px-10 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          APPLY
        </button>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    font-family: "Playfair Display", serif;
  }
</style>
