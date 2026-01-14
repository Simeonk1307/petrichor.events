<script lang="ts">
    import PersonCard from '$lib/components/Person.svelte';
    import placeholder from '$lib/assets/CoreTeam/placeholder.png';
    import Parv from '$lib/assets/CoreTeam/Fest_Coordinator_Parv_Patel.jpg';
    import Emmanuel from '$lib/assets/CoreTeam/Emmanuel_Johnson_Assistant_Fest_Coordinator.jpg';
    import Aaron from '$lib/assets/CoreTeam/Aaron-Assistant Fest Coordinator.jpg';
    import Dev from '$lib/assets/CoreTeam/Technical_Head_Dev_Mittal.jpg';
    import Shravani from '$lib/assets/CoreTeam/Technical _Head Shravani Devanand Mudkanna.jpg';
    import Abhijith from '$lib/assets/CoreTeam/Abhijith_HospitalityHead.jpg';
    import Rizwan from '$lib/assets/CoreTeam/Hospitality-Head-Rizwan.jpg';
    import Karan from '$lib/assets/CoreTeam/Media_Head_Karan.jpg';
    import Ashvand from '$lib/assets/CoreTeam/Media_Head_Ashvand.jpg';
    import Simeon from '$lib/assets/CoreTeam/webdev-head-simeon.jpg';
    import Aditya from '$lib/assets/CoreTeam/Informals_Head_Aditya.jpg';
    import Jeeva from '$lib/assets/CoreTeam/Pro-show and Guest lecture head Jeeva Jayaprakash_.jpg';
    import Nimesh from '$lib/assets/CoreTeam/Marketing_head_Nimesh_Garg.jpg';
    import Mathew from '$lib/assets/CoreTeam/Mathew_Marketing_Head.jpg';
    import Prisha from '$lib/assets/CoreTeam/Prisha_Finance_Head.jpg';
    import Akshat from '$lib/assets/CoreTeam/Cultural Head_Akshat.jpg';
    import Keerthana from '$lib/assets/CoreTeam/Keerthana - Cultural head.jpg';
    import Mandar from '$lib/assets/CoreTeam/Mandar Patil Hackathon and Tech Summit Head.jpg';
    import Hemanth from '$lib/assets/CoreTeam/Hemanth_Kashyap_Gundamaraju_Workshop_Head.jpg';
    import Tarun from '$lib/assets/CoreTeam/Social media head _ Tarun.jpg';
    import Bavitej from '$lib/assets/CoreTeam/Cinematography head-bavi.jpg';
    import Jatin from '$lib/assets/CoreTeam/Jatin - Decoration Head.jpg';

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
                {name : 'Parv Patel', img: Parv}
            ]
        },
        {
            title: 'Assistant Coordinators',
            members: [
                { name: 'Emmanuel Johnson', img: Emmanuel},
                { name: 'Aaron C Abraham', img: Aaron}
            ]
        },
        {
            title: 'Technical Heads',
            members: [
                { name: 'Dev Mittal', img: Dev },
                { name: 'Shravani Devanand Mudkanna', img: Shravani }
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
                { name: 'Abhijith Sureshbabu', img: Abhijith },
                { name: 'Rizwan Muhamed Mehaboob', img: Rizwan }
            ]
        },
        {
            title: 'Media and Publicity Heads',
            members: [
                { name: 'Karan Pareth Sreekumar', img: Karan },
                { name: 'Ashvand Sathyajith M', img: Ashvand }
            ]
        },
        {
            title: 'Web Dev Head',
            members: [
                { name: 'Simeon K', img: Simeon}
            ]
        },
        {
            title: 'Informals Head',
            members: [
                { name: 'Aditya Anand Mishra', img: Aditya}
            ]
        },
        {
            title: 'Pro Show Head',
            members: [
                { name: 'Jeeva Jayaprakash', img: Jeeva }
            ]
        },
        {
            title: 'Sponsorship Heads',
            members: [
                { name: 'Nimesh Garg', img: Nimesh },
                { name: 'Mathew Joy Poothokaren', img: Mathew },
                { name: 'Parthiv P' }
            ]
        },
        {
            title: 'Finance Head',
            members: [
                { name: 'Prisha Italiya', img: Prisha }
            ]
        },
        {
            title: 'Cultural Heads',
            members: [
                { name: 'Akshat Nair', img: Akshat },
                { name: 'Keerthana Kandarpi', img: Keerthana }
            ]
        },
        {
            title: 'Hackathon & Tech Summit Head',
            members: [
                { name: 'Mandar Ashish Patil', img: Mandar }
            ]
        },
        {
            title: 'Workshop Head',
            members: [
                { name: 'Gundamaraju Hemanth Kashyap', img: Hemanth }
            ]
        },
        {
            title: 'Social Media Head',
            members: [
                { name: 'Surisetti Tarun', img: Tarun }
            ]
        },
        {
            title: 'Cinematography Head',
            members: [
                { name: 'Ethalapaka Bavitej', img: Bavitej }
            ]
        },
        {
            title: 'Decoration Head',
            members: [
                { name: 'Jatin Vimal', img: Jatin }
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
    /* :root {
        overflow-x: hidden;
    } */

    .team-page {
        font-family: serif;
        background-color: #000;
        color: #e6e6e6;
        padding: 5rem 2rem;
        min-height: 100vh;
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
            font-size: 2.2rem;
        }

        .section-title {
            font-size: 1.7rem;
        }

        .team-page {
            padding: 4rem 1rem;
        }
    }
</style>

