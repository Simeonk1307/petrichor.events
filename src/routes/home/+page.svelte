<script lang="ts">
	import AboutSection from "$lib/components/homepage/AboutSection.svelte";
	import HeroSection from "$lib/components/homepage/HeroSection.svelte";
	import Event from "$lib/components/homepage/event_section/Event.svelte";
    import Workshop from "$lib/components/homepage/workshop_section/Workshop.svelte";
	import { access_token, loggedIn } from "$lib/stores";
	import { getContext, onMount } from "svelte";
	import { fade } from "svelte/transition";

    let visible = false



    export let data;
    const getData:Function = getContext('getData')
    let pageWidth = 0;
    onMount(()=>{
        setTimeout(()=>{
            visible = true
        },10)
        if (!$loggedIn){
			getData()
		}
        pageWidth = window.innerWidth
        window.onresize=()=>{
            pageWidth = window.innerWidth
        }
        access_token.set(data.accessToken)
    })


</script>

<div class="maincontent {visible ? '': "none"}">
    <HeroSection bind:pageWidth={pageWidth}/>
    <AboutSection />
    <Event bind:pageWidth={pageWidth}/>
    <Workshop/>
    <!-- <a  href="/login">Login</a> -->
</div>

<style>
.maincontent{
    display: flex;
    flex-direction: column;
    z-index: 11;
    opacity: 100% ;
    background-color: transparent;
    overflow-x: hidden;
    transition: 1000ms;
}
</style>
