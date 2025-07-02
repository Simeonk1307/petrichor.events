<script>
  import PetrichorLogo from '$lib/assets/petrichor_logo.png';
</script>

<main>
  <div>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
    <h1>Coming Soon!</h1>
  </div>

  <!-- Glitching logo overlay -->
  <div
    class="glitch-logo"
    aria-label="Petrichor Logo"
    role="img"
    style={`background-image: url(${PetrichorLogo});`}
  ></div>
</main>

<style>
  main {
    display: grid;
    place-items: center;
    height: 105vh;
    font-size: 30px;
    position: relative;
  }
  div {
    position: absolute;
    display: flex;
    animation: loop 2s linear infinite;
    border-width: 5px 0px 5px 0px;
    border-style: solid;
    border-color: white;
  }
  h1 {
    width: 30rem;
    margin-inline: 0.5rem;
  }
  @keyframes loop {
    from {
      left: 0;
    }
    to {
      left: -31rem;
    }
  }

  .glitch-logo {
    pointer-events: none;
    position: absolute;
    top: -5%;
    left: -63%;
    width: 700vw;
    max-width: 3500px;
    aspect-ratio: 4 / 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: translate(-50%, -50%);
    opacity: 0.15;
    animation: glitch-base 2s infinite;
    z-index: 5;
  }

  .glitch-logo::before,
  .glitch-logo::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: inherit;
    mix-blend-mode: screen;
    opacity: 0.7;
    pointer-events: none;
  }

  .glitch-logo::before {
    animation: glitch-red 2s infinite;
    left: 1px;
    filter: none; /* removed blur */
  }

  .glitch-logo::after {
    animation: glitch-blue 2s infinite;
    left: -1px;
    filter: none; /* removed blur */
  }

  @keyframes glitch-base {
    0%, 100% {
      transform: translate(0, 0);
    }
    20%, 60% {
      transform: translate(-1px, 1px);
    }
    40%, 80% {
      transform: translate(1px, -1px);
    }
  }
  @keyframes glitch-red {
    0%, 100% {
      clip-path: inset(0 0 0 0);
      transform: translate(0);
      opacity: 0.7;
    }
    20%, 60% {
      clip-path: inset(10% 0 40% 0);
      transform: translate(-1px, 0);
      opacity: 0.9;
    }
    40%, 80% {
      clip-path: inset(60% 0 10% 0);
      transform: translate(1px, 0);
      opacity: 0.8;
    }
  }
  @keyframes glitch-blue {
    0%, 100% {
      clip-path: inset(0 0 0 0);
      transform: translate(0);
      opacity: 0.7;
    }
    20%, 60% {
      clip-path: inset(20% 0 50% 0);
      transform: translate(1px, 0);
      opacity: 0.9;
    }
    40%, 80% {
      clip-path: inset(50% 0 20% 0);
      transform: translate(-1px, 0);
      opacity: 0.8;
    }
  }
</style>
