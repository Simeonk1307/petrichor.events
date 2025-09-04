<script lang="ts">
    import TeamSection from '$lib/components/teampage/TeamSection.svelte';
    import Footer from '$lib/components/ui/Footer.svelte';
    import { footerLinks } from '$lib/helper.js';
</script>

<div class="maincontent">
    <TeamSection />
    <Footer title = 'Petrichor 26' links={footerLinks}/>
</div>

<style>
    .maincontent {
        padding: 2rem 1rem; /* Adjust padding as needed */
    }
</style>