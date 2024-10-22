<script lang="ts">
    import { workshops } from '$lib/data/workshop.js';
    let left:number,right:number;

    const showImage = (id: any, e) => {
        console.log(id)
        const doc = document.getElementsByClassName(id)[1] as HTMLElement;
        console.log(doc)
        const img = doc.querySelector('img') as HTMLImageElement;
        console.log(img)
        let rect = e.target.getBoundingClientRect()
        left = Math.abs(e.clientX - rect.left)
        right =Math.abs( e.clientY - rect.top)
        // console.log(left + " " + right)
        img.style.transition = 'none';
        img.style.transition = 'clip-path 0s';
        img.style.clipPath = `circle(0% at ${left}px ${right}px)`
        img.style.transition = 'clip-path 1s ease-out';
        img.style.clipPath = `circle(150% at ${left}px ${right}px)`
        // doc.style.zIndex = '3';
    }
    const hideImage = (id: any,e) => {
        console.log(id)
        const doc = document.getElementsByClassName(id)[1] as HTMLElement;
        console.log(doc)
        const img = doc.querySelector('img') as HTMLImageElement;
        console.log(img)
        let rect = e.target.getBoundingClientRect()
        left = Math.abs(e.clientX - rect.left)
        right =Math.abs( e.clientY - rect.top)
        img.style.clipPath = `circle(0px at ${left}px ${right}px)`
    }
</script>

<div class="main">
    {#each Object.entries(workshops) as [id, workshop], pos}
    <div 
        class="card {id}"
        on:mouseover={(e) => showImage(id,e)}
        on:focus={(e) => showImage(id,e)}
        on:mouseout={(e) => hideImage(id,e)}
        on:blur={(e) => hideImage(id,e)}
        role="button"
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

<style>
    .wname{
        z-index: 2;
    }
    .main{
        display: flex;
        z-index: 3;
        padding: 5rem;
        flex-direction: row;
        gap: 5rem;
        flex-wrap: wrap;
        /* margin: 10rem; */
        justify-content:center
    }
    .card{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: larger;
        height: 20rem;
        width: 20rem;
        cursor: pointer;
    }
    .imageHolder{
        height: 20rem;
        position: absolute;
        z-index: 10;
    }
    img{
        height: 20rem;
        aspect-ratio: 1;
        clip-path: circle(0% at center);
        transition: 1s ease-in-out;
    }
</style>