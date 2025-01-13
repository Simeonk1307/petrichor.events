<script>
    import { onMount } from 'svelte';
    import VanillaTilt from 'vanilla-tilt';
    import { informals } from '$lib/data/informals';
  
    onMount(() => {
      VanillaTilt.init(document.querySelectorAll('.card'), {
        max: 10,
        speed: 100,
      });
    });
  
    const informalDetails = () => {
      alert('Coming Soon');
    };
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 20px;
      margin-top: 80px;
    }

    .container > h1 {
        font-size: 50px;
		font-family: var(--sfont);
		margin-bottom: 1rem;
        text-shadow: 1px 1px 1px #a5a5a5, 1px 1.5px 1px #a5a5a5, 1px 2px 1px #a5a5a5, 1px 2.5px 1px #a5a5a5, 1px 3px 1px #a5a5a5;
    }
  
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      width: 80%;
      max-width: 1200px;
    }
  
    .card {
      position: relative;
      background: transparent;
      border: 1px solid #ffffff;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      text-align: center;
      padding: 10px;
      transition: all 0.3s ease;
    }
  
    .card:hover {
      border-color: transparent;
      padding: 0px;
    }
  
    .image {
      position: relative;
      width: 100%;
      height: 80%;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
  
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      transition: all 0.3s ease;
    }
  
    .card:hover .image img {
      filter: blur(5px) brightness(0.6);
    }

    .card:hover .image{
        height: 100%;
    }

    button {
      color: white;
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      height: 36px;
      font-weight: 700;
      background: linear-gradient(99.74deg, #06dbac, #bd00ff);
      border-radius: 15px;
      border: none;
      text-wrap: nowrap; 
      transition: bottom 0.3s ease, opacity 0.3s ease;
    }
  
    .card:hover button {
      bottom: 10px;
      opacity: 1;
    }

  </style>
  
  <div class="container">
    <h1>Informals</h1>
    <div class="grid">
      {#each Object.entries(informals) as [id, informal]}
        <div class="card">
          <div class="image">
            <img src={informal.image} alt={informal.name} />
          </div>
          <h2>{informal.name}</h2>
          <button on:click={informalDetails}>Event Details</button>
        </div>
      {/each}
    </div>
  </div>
