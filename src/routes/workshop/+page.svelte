<script lang="ts">
	import { goto } from '$app/navigation';
    import { workshops } from '$lib/data/workshop.js';
    let left:number,right:number;

    const showImage = (id: string, e) => {
        const doc = document.getElementsByClassName(id)[1] as HTMLElement;
        const img = doc.querySelector('img') as HTMLImageElement;
        let rect = e.target.getBoundingClientRect()
        left = Math.abs(e.clientX - rect.left)
        right =Math.abs( e.clientY - rect.top)
        img.style.transition = 'none';
        img.style.clipPath = `circle(0% at ${left}px ${right}px)`
        img.style.transition = 'clip-path 1s ease-out';
        img.style.clipPath = `circle(150% at ${left}px ${right}px)`
    }
    const hideImage = (id: string, e) => {
        const doc = document.getElementsByClassName(id)[1] as HTMLElement;
        const img = doc.querySelector('img') as HTMLImageElement;
        let rect = e.target.getBoundingClientRect()
        left = Math.abs(e.clientX - rect.left)
        right =Math.abs( e.clientY - rect.top)
        img.style.clipPath = `circle(0px at ${left}px ${right}px)`
    }
</script>
<main>

    <div class="_blank"></div>
    <div class="discover atmos">
        <h1>Discover Workshops</h1>
        <h3>Learn new skills from IIT experts</h3>
</div>
<div class="main">
    {#each Object.entries(workshops) as [id, workshop], pos}
    <div 
    class="card {id}"
    role="button"
    on:mousedown={() => {goto(`/workshop/${id}`)}}
    tabindex="0"
    >
    <div
    class="wname" 
    >
    {workshop.name}
</div>
<div class="imageHolder {id}">
    <img src={workshop.image} alt={workshop.name}>
</div>
</div>
{/each}
</div>
</main>

<style>
    ._blank{
        height: 80px;
    }
    .wname{
        z-index: 2;
    }
    main{
        z-index: 3;
        position: relative;
    }
    .main{
        display: flex;
        padding: 2rem;
        flex-direction: row;
        gap: 5rem;
        flex-wrap: wrap;
        /* margin: 10rem; */
        justify-content:center
    }
    .card{
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: larger;
        height: 20rem;
        width: 20rem;
        cursor: pointer;
        z-index: 12;
		background-color: rgba(25, 179, 245, 0.363);
        transition: all 0.5s ease-in-out;
    }
    .card:hover {   
        filter: blur(0px) grayscale(0);
        scale: 1;
    }
    .card:not(:hover) {
        filter: blur(1px) grayscale(1);
        scale: 0.9;
    }
    .imageHolder{
        height: 20rem;
        position: absolute;
        z-index: 10;
    }
    img{
        height: 20rem;
        aspect-ratio: 1;
        clip-path: circle(100% at center);
        transition: 1s ease-in-out;
    }
    .discover {
		color: rgba(255, 255, 255, 1);
		z-index: 3;
		text-align: center;
		margin-bottom: 1em;
	}
	.discover > h1 {
		font-size: 50px;
		font-family: var(--sfont);
		margin-bottom: -1rem;
	}
    @media (max-width:1000px){
		.discover h1{
			font-size: 1.8rem;
		}
	}
    @media (max-width: 900px) {
		.discover h1{
			font-size: 1.5rem;
		}
	}
    @media (pointer: coarse){
        img{
            clip-path: circle(100% at center);
        }
    }
</style>