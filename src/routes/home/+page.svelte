<script lang="ts">
	import AboutSection from "$lib/components/homepage/AboutSection.svelte";
	import HeroSection from "$lib/components/homepage/HeroSection.svelte";
	import Event from "$lib/components/homepage/event_section/Event.svelte";
    import Workshop from "$lib/components/homepage/workshop_section/Workshop.svelte";
	import { onMount } from "svelte";

    $: pageWidth = 0;
    onMount(()=>{
        pageWidth = window.innerWidth
        window.onresize=()=>{
            pageWidth = window.innerWidth
        }
    })


</script>


<div>
    <h1>HOME PAGE</h1>
</div>
<Workshop/>
