<script lang="ts">
	import About from "$lib/components/About.svelte";
	import Event from "$lib/components/event/Event.svelte";
import Workshop from "$lib/components/Workshop/Workshop.svelte";

</script>

<div class="maincontent">
    <About/>
    <Event/>
    <Workshop/>
    <!-- <a  href="/login">Login</a> -->
</div>

<style>
.maincontent{
    display: flex;
    flex-direction: column;
}
</style>
