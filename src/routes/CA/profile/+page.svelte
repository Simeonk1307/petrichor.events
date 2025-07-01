<script lang="ts">
// @ts-nocheck
// import Navbar from '$lib/components/Navbar.svelte';
import { goto } from '$app/navigation';
import { user, invalidate, loggedIn, access_token } from '$lib/stores.js';
import { getContext, onMount } from 'svelte';

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

<div class="root-container">

  <!-- Background Hands for Mobile/Tablet -->
  <div class="hands-background-mobile">
    <img
      src="src/lib/assets/images/hands.png"
      alt="Hands Background"
      class="hands-image"
    />
  </div>

  <!-- <Navbar /> -->

  <main class="main-content">
    <div class="content-wrapper">

      <div class="left-column">

        <div class="logo-mobile">
          <img
            src="src/lib/assets/images/petrichor_logo.png"
            alt="Logo"
            class="logo-image animate-float glow flicker"
          />
        </div>

        <div class="logo-desktop">
          <img
            src="src/lib/assets/images/petrichor_logo.png"
            alt="Logo"
            class="logo-image-desktop animate-float glow flicker"
          />
        </div>

        <h1 class="greeting-header">
          Hi, <span class="flicker-text username">{userData?.user_data?.username ?? 'Username'}</span>
        </h1>

        <p class="description-text">
          <span class="highlighted-text">Petrichor '26</span> isn’t just a fest — it’s a <span class="italic-text">full-blown multiverse.</span> Hack till sunrise, dance till you drop, vibe like it’s the end of the world. Win glory, lose sleep, make stories you’ll forget to forget — or don’t. No rules. Just chaos.
        </p>

        <div class="ca-code-box">
          <p class="ca-code-text">{userData?.user_data?.CACode ?? 'N/A'}</p>
          <button type="button" on:click={copyToClipBoard} aria-label="Copy CA code" class="copy-button">
            <img src={displayOn ? '/tick.svg' : '/copy.svg'} alt="copy icon" class="copy-icon" />
          </button>
        </div>

        <div class="registration-box">
          <p class="registration-label">Total Registrations</p>
          <p class="registration-count">{userData?.user_data?.registrations ?? 0}</p>
        </div>

      </div>

      <div class="right-column">
        <img src="src/lib/assets/images/hands.png" alt="HandsIMG" class="hands-image-desktop" />
      </div>

    </div>
  </main>

  <footer class="footer-strip">
    <div class="scroll-container">
      {#each [1, 2, 3, 4] as n}
        <div class="scroll-item item-{n}">
          <svg xmlns="http://www.w3.org/2000/svg" class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span class="scroll-text">PETRICHOR</span>
        </div>
      {/each}
    </div>
  </footer>
</div>

<style>
  /* Root container and background gradient */
  .root-container {
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    color: white;
    background: linear-gradient(190deg, #01d6f4 0%, #039ff1 1.5%, #0575ba 4%, #074f88 8%, #04528e 13%, #005698 14%, #001423 18%, #000910 19%, #000000 100%);
    overflow-y: auto;
  }

  /* Mobile & tablet background hands */
  .hands-background-mobile {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: block;
    opacity: 0.25;
    pointer-events: none;
    min-height: 100%;
    height: auto;
  }

  .hands-background-mobile img.hands-image {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    animation: float 4s ease-in-out infinite;
  }

  /* Main content styles */
  .main-content {
    position: relative;
    z-index: 20;
    flex: 1;
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    .content-wrapper {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  /* Left column */
  .left-column {
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .left-column {
      max-width: 50%;
      margin-left: 4rem;
      text-align: left;
      align-items: flex-start;
    }
  }

  /* Logo for mobile */
  .logo-mobile {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 768px) {
    .logo-mobile {
      display: none;
    }
  }

  /* Logo for desktop */
  .logo-desktop {
    display: none;
    justify-content: center;
    margin-bottom: 1.5rem;
    width: 100%;
  }
  @media (min-width: 768px) {
    .logo-desktop {
      display: flex;
      justify-content: flex-start;
    }
  }

  /* Logo images */
  .logo-image {
    width: 300px;
    height: auto;
  }
  .logo-image-desktop {
    width: 250px;
    height: auto;
  }
  @media (min-width: 1024px) {
    .logo-image-desktop {
      width: 300px;
    }
  }

  /* Greeting header */
  .greeting-header {
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    .greeting-header {
      font-size: 4.5rem;
    }
  }
  @media (min-width: 1024px) {
    .greeting-header {
      font-size: 5.5rem;
    }
  }

  .username {
    font-weight: 600;
    color: #3fdcff;
    text-shadow: 0 0 1px #3fdcff, 0 0 6px #3fdcff;
    animation: flicker 2s infinite;
  }

  /* Description paragraph */
  .description-text {
    color: #d1d5db; /* Tailwind gray-300 */
    font-size: 1rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 768px) {
    .description-text {
      font-size: 1.25rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .highlighted-text {
    font-weight: 700;
    color: #3fdcff;
  }
  .italic-text {
    font-style: italic;
    color: white;
  }

  /* CA Code box */
  .ca-code-box {
    margin-top: 2.5rem;
    width: 80%;
    border: 2px solid white;
    border-radius: 0.5rem;
    background-color: rgba(3, 32, 34, 0.24);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ca-code-text {
    font-family: monospace;
    font-size: 1.5rem;
    letter-spacing: 0.15em;
    color: white;
  }

  .copy-button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding-right: 0.5rem;
  }
  .copy-button:focus {
    outline: none;
  }

  .copy-icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  /* Total registrations box */
  .registration-box {
    margin-top: 1rem;
    width: 80%;
    border: 2px solid white;
    border-radius: 0.5rem;
    background-color: rgba(3, 32, 34, 0.24);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .registration-label {
    font-size: 1.125rem;
    letter-spacing: 0.05em;
  }

  .registration-count {
    font-weight: 700;
    font-size: 1.5rem;
  }

  /* Right column (desktop only image) */
  .right-column {
    max-width: 30%;
    display: none;
  }
  @media (min-width: 1024px) {
    .right-column {
      display: block;
    }
  }

  .hands-image-desktop {
    width: 100%;
    opacity: 1;
    pointer-events: none;
    animation: float 4s ease-in-out infinite;
  }

  /* Footer strip */
  .footer-strip {
    background-color: black;
    color: white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
  }

  .scroll-container {
    display: flex;
    height: 2.5rem;
    position: relative;
    overflow-x: hidden;
    width: 100%;
  }

  .scroll-item {
    position: absolute;
    white-space: nowrap;
    display: flex;
    align-items: center;
    animation: loopLeftToRight 10s linear infinite;
  }

  .item-1 { animation-delay: 0s; }
  .item-2 { animation-delay: -2.5s; }
  .item-3 { animation-delay: -5s; }
  .item-4 { animation-delay: -7.5s; }

  .globe-icon {
    height: 20px;
    width: 24px;
    stroke: #3b82f6; /* Tailwind blue-400 */
    flex-shrink: 0;
  }

  .scroll-text {
    margin-left: 0.5rem;
    font-size: 1.125rem;
    display: none;
  }
  @media (min-width: 640px) {
    .scroll-text {
      display: inline;
    }
  }

  /* Animations */

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

  @keyframes loopLeftToRight {
    0%, 100% {
      transform: translateX(-100%);
    }
    99.99% {
      transform: translateX(100vw);
    }
  }

  /* Glow effect */
  .glow {
    filter: drop-shadow(0 0 10px rgba(63, 220, 255, 0.4));
  }

  /* Flicker */
  .flicker {
    animation: flicker 1.8s infinite;
  }

  /* Float animation */
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

</style>
