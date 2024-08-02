<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import arrowCircleUp from 'svelte-awesome/icons/arrowCircleUp';

    let isVisible: boolean = false;

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleScroll() {
        isVisible = window.scrollY > 100;
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

{#if isVisible}
    <button class="back-to-top" on:click={scrollToTop} in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
        <Icon data={arrowCircleUp} scale={2} />
    </button>
{/if}

<style>
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: #fff;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        z-index: 1000;
        transition: background-color 0.3s ease, transform 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .back-to-top:hover {
        background-color: #910cea;
        transform: scale(1.1);
    }
</style>
