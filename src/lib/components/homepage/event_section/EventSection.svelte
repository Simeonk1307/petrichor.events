<!-- 
  Main Page Component: EventsPage
  This component sets up the overall page layout, title, and the grid 
  that holds the event cards.
-->
<script lang="ts">
  // 1. Import the reusable component
  import EventCard from '$lib/components/homepage/event_section/EventCard.svelte';
  import circles from '$lib/assets/HomePage/circles.jpg';

  // 2. Define the data for our event cards
  const leftEvents = [
		{
			id: 'comingsoon',
			title: 'pre-fest-workshops',
		},
		{
			id: 'comingsoon',
			title: 'Technical',
		}
  ];
  const rightEvents = [
		{
			id: 'tcomingsoon',
			title: 'Informals',
		},
		{
			id: 'comingsoon',
			title: 'Culturals',
		}
	];
</script>

<div class="events-page-background">
  <div class="events-container">
    <h1 class="main-title">EVENTS</h1>

    <!-- 3. Create the grid layout -->
    <div class="events-grid">
      <!-- Left Column -->
      <div class="column">
        {#each leftEvents as event}
          <a href='/{event.id}'><EventCard eventName={event.title} imageUrl={circles} /></a>
        {/each}
      </div>
      <!-- Right Column -->
      <div class="column right-column">
        {#each rightEvents as event}
          <a href='/{event.id}'><EventCard eventName={event.title} imageUrl={circles} /></a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* Import a font that matches the modern, clean aesthetic */
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@500&display=swap');

  .events-page-background {
    background-color: #050505;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    font-family: 'Exo 2', sans-serif;
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
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 0.5em; /* Creates the wide spacing */
    text-transform: uppercase;
    margin-bottom: 60px;
    padding-left: 0.5em; /* Aligns text visually with wide spacing */
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
    margin-top: 80px; /* This creates the offset layout seen in the image */
  }

  /* Responsive styling for smaller screens */
  @media (max-width: 768px) {
    .events-grid {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .right-column {
      margin-top: 0; /* Remove the offset when columns are stacked */
    }
    .main-title {
        font-size: 1.8rem;
        margin-bottom: 40px;
    }
  }
</style>
