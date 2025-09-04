<!-- 
  Reusable Component: EventCard
  This component defines the look and feel of a single clickable event card.
  It accepts `eventName` and `imageUrl` as properties (props).
-->
<script lang="ts">
  // These are the properties the component accepts from its parent
  export let eventName: string = 'Event';
  export let imageUrl: string;
</script>

<div class="event-card" role="button" tabindex="0">
  <div class="image-wrapper">
    <!-- The swirl image goes here. Using a placeholder for now. -->
    <img src={imageUrl} alt="Abstract swirl graphic for {eventName}" class="card-image" />
  </div>
  <p class="card-title">{eventName}</p>
</div>

<style>
  /* Import a font that matches the modern, clean aesthetic */
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap');

  .event-card {
    width: 350px;
    height: 220px;
    background-color: #0d0d0d;
    border: 1.5px solid #00e3ff; /* Cyan/light blue border */
    border-radius: 35px; /* Creates the distinct rounded shape */
    
    padding: 15px;
    box-sizing: border-box;
    cursor: pointer;
    
    /* Center content vertically and horizontally */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    /* Smooth transition for hover effects */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-8px); /* Subtle lift effect on hover */
    box-shadow: 0 10px 20px rgba(99, 213, 255, 0.15); /* Soft glow effect */
  }

  .image-wrapper {
    width: 100%;
    height: 70%;
    border-radius: 20px; /* Inner container is also rounded */
    overflow: hidden; /* CRITICAL: This clips the image to the rounded corners */
    margin-bottom: 15px;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fills the space without stretching */
    background-color: #0d0d0d;
  }

  .card-title {
    font-family: 'Exo 2', sans-serif;
    color: #e0e0e0;
    font-size: 1.25rem;
    font-weight: 300;
    text-transform: lowercase;
    letter-spacing: 1px;
    margin: 0;
  }
  
  /* Responsive sizing for the card itself */
  @media (max-width: 768px) {
    .event-card {
      width: 300px;
      height: 190px;
    }
    .card-title {
        font-size: 1.1rem;
    }
  }
</style>
