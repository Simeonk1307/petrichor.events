<script lang="ts">
    export let name: string;
    export let role: string;
    export let img: string;
    export let phone: string | undefined = undefined;
</script>

<div class="person-card">
    <div class="image-container">
        <img src={img} alt={`Photo of ${name}`} class="person-image" />
    </div>
    <div class="info-container">
        <h4 class="person-name">{name}</h4>
        {#if role}
            <p class="person-role">{role}</p>
        {/if}
        {#if phone}
            <p class="person-phone">{phone}</p>
        {/if}
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

    .person-card {
        font-family: 'Italiana', serif;
        width: 100%;
        max-width: 280px;
        background-color: #0a0a0a; /* Slightly off-black */
        border: 1px solid #222; /* Dark border for definition */
        border-radius: 12px;
        overflow: hidden;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .person-card:hover {
        transform: translateY(-8px); /* A more noticeable lift */
        border-color: #00e3ff; /* Cyan border on hover */
        box-shadow: 0 0 15px rgba(0, 227, 255, 0.4), 0 0 25px rgba(0, 227, 255, 0.2); /* Cyan glow effect */
    }

    .image-container {
        aspect-ratio: 1 / 1; /* Make it a square for a clean look */
        overflow: hidden;
    }

    .person-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .person-card:hover .person-image {
        transform: scale(1.05); /* Subtle zoom on hover */
    }

    .info-container {
        padding: 1.25rem;
        text-align: center;
        background-color: #0a0a0a;
        border-top: 1px solid #222;
        transition: border-color 0.3s ease;
    }
    
    .person-card:hover .info-container {
        border-color: #00e3ff;
    }

    .person-name {
        font-size: 1.5rem; /* Larger name */
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 0.5px;
        margin: 0;
    }

    .person-role {
        font-size: 1rem;
        color: #bdbdbd; /* Light gray for the role */
        margin: 0.25rem 0 0 0;
    }

    .person-phone {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 0.9rem;
        color: #888;
        margin: 0.5rem 0 0 0;
        letter-spacing: 0.05em;
    }
</style>

