<script lang="ts">
// @ts-nocheck
// import Navbar from '$lib/components/Navbar.svelte';
import { goto } from '$app/navigation';
import { user, invalidate, loggedIn, access_token } from '$lib/stores.js';
import { getContext, onMount } from 'svelte';
import PetrichorLogo from "$lib/assets/petrichor_logo.png"
import HandsIMG from "$lib/assets/HomePage/hands.png"
import tick from "$lib/assets/tick.svg"
import copy from "$lib/assets/copy.svg"
export let data;
const getData: Function = getContext('getData');

let displayOn = false;

$: userData = $user;
$: isLoggedIn = $loggedIn;
$: isInvalidate = $invalidate;

async function copyToClipBoard() {
  if (userData?.user_data?.CACode) {
    try {
      await navigator.clipboard.writeText(userData.user_data.CACode);
      displayOn = true;
      setTimeout(() => {
        displayOn = false;
      }, 1000);
    } catch {
      alert("Failed to copy!");
    }
  }
}

onMount(() => {
  if (!isLoggedIn) {
    getData();
  }
  access_token.set(data.accessToken);
  if (!isLoggedIn || isInvalidate) {
    goto('/login?to=/CA/profile');
  }
});
</script>

<div
  class="relative min-h-screen w-screen flex flex-col text-white bg-[linear-gradient(190deg,#01d6f4_0%,#039ff1_1.5%,#0575ba_4%,#074f88_8%,#04528e_13%,#005698_14%,#001423_18%,#000910_19%,#000000_100%)] overflow-y-auto">

  <!-- Background Hands for Mobile/Tablet -->
  <div class="absolute inset-0 z-0 block lg:hidden opacity-25 pointer-events-none h-auto min-h-full">
    <img
      src={HandsIMG}
      alt="Hands Background"
      class="w-full min-h-full object-cover float-bg"
    />
  </div>

  <!-- <Navbar /> -->

  <main class="relative z-20 flex-1 px-6 py-10 flex flex-col justify-center">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-10 mt-6 mb-6">

      <div class="max-w-full lg:max-w-[50%] lg:ml-16 text-center lg:text-left flex flex-col items-center lg:items-start">

        <div class="md:hidden mb-6 flex justify-center">
          <img
            src={PetrichorLogo}
            alt="Logo"
            class="w-[300px] h-auto animate-float glow flicker"
          />
        </div>

        <div class="hidden md:flex justify-center lg:justify-start mb-6 w-full">
          <img
            src={PetrichorLogo}
            alt="Logo"
            class="w-[250px] lg:w-[300px] h-auto animate-float glow flicker"
          />
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 font-[Playfair Display]">
          Hi, <span class="flicker-text font-semibold">{userData?.user_data?.username ?? 'Username'}</span>
        </h1>

        <p class="fade-slide text-gray-300 text-base md:text-xl mb-8 px-4 md:px-0">
          <span class="font-bold text-[#3fdcff]">Petrichor '26</span> isn’t just a fest — it’s a <span class="italic text-white">full-blown multiverse.</span> Hack till sunrise, dance till you drop, vibe like it’s the end of the world. Win glory, lose sleep, make stories you’ll forget to forget — or don’t. No rules. Just chaos.
        </p>

        <!-- CA Code Box -->
        <div class="mt-10 w-[80%] border-2 border-white rounded-lg bg-[#0320223d] p-4 flex justify-between items-center">
          <p class="text-2xl font-mono tracking-wider">{userData?.user_data?.CACode ?? 'N/A'}</p>
          <button type="button" on:click={copyToClipBoard} aria-label="Copy CA code">
            <img src={displayOn ? tick : copy } alt="copy icon" class="w-6 h-6 cursor-pointer transition-all duration-300" />
          </button>
        </div>

        <!-- Total Registrations Box -->
        <div class="mt-4 w-[80%] border-2 border-white rounded-lg bg-[#0320223d] p-4 flex justify-between items-center">
          <p class="text-lg tracking-wider">Total Registrations</p>
          <p class="text-2xl font-bold">{userData?.user_data?.registrations ?? 0}</p>
        </div>
      </div>

      <!-- Right Side Image (Desktop Only) -->
      <div class="max-w-[30%] hidden lg:block">
        <img src={HandsIMG} alt="HandsIMG" class="w-full float-bg opacity-100 pointer-events-none" />
      </div>
    </div>
  </main>

  <!-- Footer Strip -->
  <footer class="bg-black text-white border-t border-b border-white">
    <div class="flex h-10 relative overflow-hidden w-full">
      {#each [1, 2, 3, 4] as n}
        <div class="scroll-item item-{n} flex items-center self-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span class="text-lg ml-2 hidden sm:inline">PETRICHOR</span>
        </div>
      {/each}
    </div>
  </footer>
</div>

<style>
  :global(.flicker-text) {
    animation: flicker 2s infinite;
    color: #3fdcff;
    text-shadow: 0 0 1px #3fdcff, 0 0 6px #3fdcff;
  }
  :global(.glow) {
    filter: drop-shadow(0 0 10px rgba(63, 220, 255, 0.4));
  }
  :global(.flicker) {
    animation: flicker 1.8s infinite;
  }
  @keyframes flicker {
    0% { opacity: 1; }
    5% { opacity: 0.4; }
    10% { opacity: 1; }
    15% { opacity: 0.2; }
    20% { opacity: 1; }
    25% { opacity: 0.6; }
    30% { opacity: 1; }
    100% { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
  }
  :global(.float-bg) {
    animation: float 4s ease-in-out infinite;
  }
  :global(.fade-slide) {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlideIn 1.5s ease-out forwards;
  }
  @keyframes fadeSlideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes loopLeftToRight {
    0%, 100% {
      transform: translateX(-100%);
    }
    99.99% {
      transform: translateX(100vw);
    }
  }
  .scroll-item {
    position: absolute;
    white-space: nowrap;
    animation: loopLeftToRight 10s linear infinite;
  }
  .item-1 { animation-delay: 0s; }
  .item-2 { animation-delay: -2.5s; }
  .item-3 { animation-delay: -5s; }
  .item-4 { animation-delay: -7.5s; }
</style>
