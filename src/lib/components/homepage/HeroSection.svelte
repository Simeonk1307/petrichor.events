<script lang="ts">
  import hand from '$lib/assets/HomePage/hand-flower.png';
  import Strip from '../Strip.svelte';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';


  function ca_portal() {
    goto('/CA/welcome');
  }

  let content: HTMLElement;
  let img: HTMLElement;
  let height = 0;
  let middle: Array<number> = [];

  onMount(() => {
    if (img) {
      const bounds = img.getBoundingClientRect();
      middle = [
        ((bounds.left + bounds.right) / 2) | 0,
        ((bounds.top + bounds.bottom) / 2) | 0
      ];
    }

    height = window.innerHeight;

    // img.onmousemove = (e) => {
    //   const moveX = ((e.clientX - middle[0]) / 45) | 0;
    //   const moveY = ((e.clientY - middle[1]) / 45) | 0;
    //   if (Math.abs(moveY) >= 35) return;
    //   img.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    // };

    // img.onmouseleave = () => {
    //   img.style.transform = `translateX(0px) translateY(0px)`;
    // };
  });
</script>

<main>
  <div class="first-block">
    <div class="content" bind:this={content}>
      <div class="title">
        <span class="heading">PETRICHOR' 26</span>
      </div>
      <p class="subheading">Annual Techno-Cultural Fest of IIT Palakkad</p>

      <div class="content_box">
        <div class="caption">
          Petrichor - the annual techno-cultural fest of IIT Palakkad is back
          again and better than ever before. Also, yes, it's offline. We the
          students of IIT Palakkad conduct Petrichor every year, and made sure
          last year's event was enthralling for all its participants. Now the
          wait is over; with just the perfect mix of cultural and technical
          events, we plan on making Petrichor'26 an unforgettable experience for
          you. Trust us when we say that you won't miss out on anything. Check
          out our website as it has answers to all the questions that you might
          have. Stay tuned and brace yourselves for the journey of a lifetime
          with Petrichor'26!
        </div>
        <div class="button_area">
          <button type="button" class="ca_portal" on:click={ca_portal}>
            CA Portal
          </button>
        </div>
      </div>
    </div>

    <div class="imagediv" bind:this={img} draggable="false">
      <img src={hand} alt="Glowing hand with flower" draggable="false" />
    </div>
  </div>

  <Strip />
</main>

<style>
  main {
    background: #000;
    color: #e6e6e6;
    font-family: serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .first-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    gap: 0.5rem;
    flex: 1;
  }

  .content {
    min-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
	  align-items: center;
	  text-align: center;
    margin-left: 4rem;
  }

  .title {
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
  }

  .heading {
    font-size: 4.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #fff;
  }

  .subheading {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 1rem 0 2rem;
    color: #00e3ff;
  }

  .caption {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #bdbdbd;
  }

  .button_area {
    margin-top: 2.5rem;
    display: flex;
	justify-content: center;
	align-items: center;
    gap: 1.2rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    border: 1px solid #00e3ff;
    background: transparent;
    color: #e6e6e6;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: serif;
  }

  button:hover {
    background: #e6e6e6;
    color: #000;
  }

  .imagediv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: max-content;
    margin-right: 12rem;
    }

    .imagediv img {
      max-width: 830px;
      filter: drop-shadow(0 0 60px rgba(41, 41, 41, 0.8))
              drop-shadow(0 0 100px rgba(0, 0, 0, 0.3)); 
    }

    @keyframes glowPulse {
      0% { filter: drop-shadow(0 0 0px rgba(0, 227, 255, 0.6))
                    drop-shadow(0 0 30px rgba(0, 227, 255, 0.4)); }
      100% { filter: drop-shadow(0 0 25px rgba(0, 227, 255, 0.9))
                      drop-shadow(0 0 60px rgba(0, 227, 255, 0.6)); }
    }

    /* Responsive */
    @media (max-width: 1350px) {
      .first-block {
        gap: 1.5rem; 
        margin-top: -3rem;
      }

      .heading {
        font-size: 3.8rem;
      }

      .subheading {
        font-size: 1.4rem;
      }

      .caption {
        font-size: 1.1rem;
      }

      .imagediv img {
        max-width: 350px;
      }
    }

   @media (max-width: 900px) {
      .first-block {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 0;
        padding: 4rem 1.5rem;
      }

      .content {
        max-width: 100%;
        min-width: unset;
        position: relative;
        z-index: 1;
        margin: 0 auto;
      }

      .imagediv {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
      }

      .imagediv img {
        max-width: 500px;
        margin-top: 0; 
        animation: glowPulse 1s ease-in-out infinite alternate;
        opacity: 0.5;
      }

      .heading {
        font-size: 3.2rem;
      }

      .subheading {
        font-size: 1.3rem;
      }

      .caption {
        font-size: 1.05rem;
        line-height: 1.7;
      }
      
      .button_area {
        justify-content: center;
      }
    }

    @media (max-width: 440px) {
  .first-block {
    padding: 3rem 1rem;
  }

  .heading {
    font-size: 2.5rem;
  }

  .subheading {
    font-size: 1.1rem;
  }

  .caption {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  button {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  .imagediv img {
    max-width: 480px;
  }
}
</style>