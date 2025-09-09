<script lang="ts">
  export let eventName: string = 'Event';
  export let imageUrl: string;
</script>

<div class="event-card" role="button" tabindex="0">
  <div class="image-wrapper">
    <img src={imageUrl} alt="Abstract swirl graphic for {eventName}" class="card-image" />
  </div>
  <p class="card-title">{eventName}</p> 
</div>

<style>
  .event-card {
    width: 350px;
    height: 220px;
    background-color: #0d0d0d;
    border: 1.5px solid #4c929c;
    border-radius: 35px;
    padding: 15px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .event-card:hover {
    transform: translateY(-8px); 
    box-shadow: 0 10px 20px rgba(99, 213, 255, 0.15); 
  }

  .image-wrapper {
    width: 100%;
    height: 70%;
    border-radius: 20px;
    overflow: hidden; 
    margin-bottom: 15px;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    background-color: #0d0d0d;
  }

  .card-title {
    font-family: serif;
    color: #e0e0e0;
    font-size: 1.25rem;
    font-weight: 300;
    /* text-transform: lowercase; */
    letter-spacing: 1px;
    margin: 0;
  }
  
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
