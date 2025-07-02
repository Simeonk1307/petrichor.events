<script lang="ts">
    import AboutSection from "$lib/components/homepage/AboutSection.svelte";

    let slideAbout: Function;
</script>

<AboutSection bind:slidePhoto={slideAbout} />