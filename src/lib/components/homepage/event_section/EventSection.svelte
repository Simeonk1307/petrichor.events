<script lang="ts">
  import EventCard from '$lib/components/homepage/event_section/EventCard.svelte';
  import cultural from '$lib/assets/HomePage/cultural.png';
  import technical from '$lib/assets/HomePage/technical.png'; // Assuming you have this image
  import informals from '$lib/assets/HomePage/informal.png'; // Assuming you have this image
  import workshop from '$lib/assets/HomePage/prefest.png'; // Assuming you have this image


  const leftEvents = [
    {
      id: 'workshop',
      title: 'Workshops',
      imageUrl: workshop
    },
    {
      id: 'comingsoon',
      title: 'Technical',
      imageUrl: technical
    }
  ];
  const rightEvents = [
    {
      id: 'comingsoon',
      title: 'Informals',
      imageUrl: informals
    },
    {
      id: 'comingsoon',
      title: 'Culturals',
      imageUrl: cultural
    }
  ];
</script>

<div class="events-page-background">
  <div class="events-container">
    <h1 class="main-title">EVENTS</h1>

    <div class="events-grid">
      <div class="column">
        {#each leftEvents as event}
          <a href='/{event.id}'><EventCard eventName={event.title} imageUrl={event.imageUrl} /></a>
        {/each}
      </div>
      <div class="column right-column">
        {#each rightEvents as event}
          <a href='/{event.id}'><EventCard eventName={event.title} imageUrl={event.imageUrl} /></a>
        {/each}
      </div>
    </div>
  </div>
</div>


<style>
  .events-page-background {
    background-color: #000;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    font-family: serif;
  }

  .events-container {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-title {
    color: #e0e0e0;
    font-size: 3.5rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 60px;
    padding-left: 0.5em; 
    margin-top: 2.5rem;
  }

  .main-title::after {
	content: ''; 
	display: block; 
	width: 55%; 
	margin: 0.05rem auto 0; 
	border-bottom: 2px solid #00e3ff; 
  }

  .events-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .right-column {
    margin-top: 80px; 
  }

  @media (max-width: 768px) {
    .events-grid {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .right-column {
      margin-top: 0; 
    }
    .main-title {
        font-size: 2.3rem;
        margin-bottom: 40px;
    }
  }
</style>
