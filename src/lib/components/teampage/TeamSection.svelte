<script lang="ts">
    import PersonCard from '$lib/components/Person.svelte';
    import placeholder from '$lib/assets/CoreTeam/placeholder.png';

    type Person = {
        name: string;
        img?: string;
        phone?: string;
    };

    type Team = {
        title: string;
        members: Person[];
    };

    const teams: Team[] = [
        {
            title: 'Fest Coordinator',
            members: [
                {name : 'Parv Patel'}
            ]
        },
        {
            title: 'Assistant Coordinators',
            members: [
                { name: 'Emmanuel Johnson' }, // add an img property linking to each persons pfp.
                { name: 'Aaron C Abraham' }
            ]
        },
        {
            title: 'Technical Heads',
            members: [
                { name: 'Dev Mittal'},
                { name: 'Mudkanna Shravani Devanand' }
            ]
        },
        {
            title: 'Creative Heads',
            members: [
                { name: 'Abhirami R Iyer' },
                { name: 'Pavitra R' }
            ]
        },
        {
            title: 'Hospitality Heads',
            members: [
                { name: 'Abhijith Sureshbabu' },
                { name: 'Muhamed Rizwan Mehaboob' }
            ]
        },
        {
            title: 'Media and Publicity Heads',
            members: [
                { name: 'Karan Pareth Sreekumar' },
                { name: 'Ashvand Sathyajith M' }
            ]
        },
        {
            title: 'Web Dev Head',
            members: [
                { name: 'Simeon K' }
            ]
        },
        {
            title: 'Informals Head',
            members: [
                { name: 'Aditya Anand Mishra' }
            ]
        },
        {
            title: 'Pro Show Head',
            members: [
                { name: 'Jeeva Jayaprakash' }
            ]
        },
        {
            title: 'Sponsorship Heads',
            members: [
                { name: 'Nimesh Garg' },
                { name: 'Mathew Joy Poothokaren' },
                { name: 'Parthiv P' }
            ]
        },
        {
            title: 'Finance Head',
            members: [
                { name: 'Italiya Prisha' }
            ]
        },
        {
            title: 'Cultural Heads',
            members: [
                { name: 'Akshat Nair' },
                { name: 'Kandarpi Keerthana' }
            ]
        },
        {
            title: 'Hackathon & Tech Summit Head',
            members: [
                { name: 'Mandar Ashish Patil' }
            ]
        },
        {
            title: 'Workshop Head',
            members: [
                { name: 'Gundamaraju Hemanth Kashyap' }
            ]
        },
        {
            title: 'Social Media Head',
            members: [
                { name: 'Surisetti Tarun' }
            ]
        },
        {
            title: 'Cinematography Head',
            members: [
                { name: 'Ethalapaka Bavitej' }
            ]
        },
        {
            title: 'Decoration Head',
            members: [
                { name: 'Jatin Vimal' }
            ]
        },
    ];

</script>

<main class="team-page">
    <div class="page-header">
        <h1 class="main-heading">MEET THE TEAM</h1>
        <p class="sub-heading">The driving force behind Petrichor '26</p>
    </div>

    {#each teams as team}
        <section class="team-section">
            <h2 class="section-title">{team.title}</h2>
            <div class="card-grid">
                {#each team.members as person}
                    <PersonCard name={person.name} role={team.title.endsWith('s') ? team.title.slice(0, -1) : team.title} img={person.img || placeholder} phone={person.phone} />
                {/each}
            </div>
        </section>
    {/each}

</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');

    .team-page {
        font-family: 'Italiana', serif;
        background-color: #000;
        color: #e6e6e6;
        padding: 5rem 2rem;
        min-height: 100vh; /* Add this line */
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
        flex-wrap: wrap;
        justify-content: center;
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

