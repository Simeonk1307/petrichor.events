<script lang="ts">
    import PersonCard from '$lib/components/Person.svelte'; // Assuming PersonCard.svelte is in the same directory

    // Define the type for a person for strong typing
    type Person = {
        name: string;
        role: string;
        img: string;
        phone?: string;
    };

    const technicalHeads: Person[] = [
        {
            name: 'Shravani Mudkanna',
            role: 'Technical Head',
            img: 'https://placehold.co/400x400/000000/00e3ff?text=SM',
            // phone: '+91 123-456-7890'
        },
        {
            name: 'Dev Mitthal',
            role: 'Technical Head',
            img: 'https://placehold.co/400x400/000000/00e3ff?text=DM',
            // phone: '+91 098-765-4321'
        }
    ];

    const informalsHeads: Person[] = [
        {
            name: 'Aditya Mishra',
            role: 'Informal Head',
            img: 'https://placehold.co/400x400/000000/00e3ff?text=AM',
            // phone: '+91 098-765-4321'
        }
    ];

</script>

<main class="team-page">
    <div class="page-header">
        <h1 class="main-heading">MEET THE TEAM</h1>
        <p class="sub-heading">The driving force behind Petrichor '26</p>
    </div>

    <section class="team-section">
        <h2 class="section-title">Technical Heads</h2>
        <div class="card-grid">
            {#each technicalHeads as person}
                <PersonCard name={person.name} role={person.role} img={person.img} phone={person.phone} />
            {/each}
        </div>
    </section>

    <section class="team-section">
        <h2 class="section-title">Informals Head</h2>
        <div class="card-grid">
            {#each informalsHeads as person}
                <PersonCard name={person.name} role={person.role} img={person.img} phone={person.phone} />
            {/each}
        </div>
    </section>

</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

    .team-page {
        font-family: 'Italiana', serif;
        background-color: #000;
        color: #e6e6e6;
        padding: 5rem 2rem;
    }

    .page-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .main-heading {
        font-size: 4.2rem;
        font-weight: 400;
        color: #fff;
        letter-spacing: 1px;
        margin-bottom: 0.5rem;
    }
    
    .main-heading::after {
        content: '';
        display: block;
        width: 10%;
        min-width: 150px;
        margin: 0.5rem auto 0;
        border-bottom: 2px solid #00e3ff;
    }


    .sub-heading {
        font-size: 1.2rem;
        color: #bdbdbd;
        margin-top: 1.5rem;
    }

    .team-section {
        margin-bottom: 4rem;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .section-title {
        font-size: 2.5rem;
        color: #fff;
        text-align: center;
        margin-bottom: 2.5rem;
        position: relative;
    }

    .card-grid {
        display: flex;
        flex-wrap: wrap; /* Allows cards to wrap to the next line */
        justify-content: center; /* Center the cards horizontally */
        gap: 2rem;
    }

    @media (max-width: 768px) {
        .main-heading {
            font-size: 3rem;
        }

        .section-title {
            font-size: 2rem;
        }

        .team-page {
            padding: 4rem 1rem;
        }
    }
</style>

