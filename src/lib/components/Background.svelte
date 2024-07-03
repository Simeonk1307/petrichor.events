<script lang="ts">
	import { page } from "$app/stores";

    export let path: string;
</script>

<div class="gradient-bg">
    {#if path == '/home'}
    <div class="gradients-container extra">
        <div id="g1-3" class="g"></div>
        <div id="g1-2" class="g"></div>
        <div id="g1-1" class="g"></div>
    </div>
    <div class="gradients-container extra">
        <div class="g" id="g2-1"></div>
    </div>
    <div class="gradients-container extra">
        <div class="g" id="g3-1"></div>
    </div>
    <div class="gradients-container extra">
        <div class="g" id="g4-1"></div>
    </div>
    {:else if path.startsWith('/CA')}
        <div class="gradients-container extra">
            <div id="g1-5" class="g"></div>
            <div id="g1-4" class="g"></div>
            <div id="g1-6" class="g"></div>
        </div>
     <!-- Dummy Backgound for Login Screen -->
    {:else if path.startsWith('/login')}
        <div class="gradients-container extra">
            <div id="g1-8" class="g"></div>
            <div id="g1-9" class="g"></div>
            <div id="g1-7" class="g"></div>
        </div>
    {/if}
</div>

<style>
    .g {
        position: absolute;
        mix-blend-mode: var(--blending);
        width: 100%;
        height: 100%;
        opacity: 1;
    }
    .gradient-bg {
        width: 100vw;
        height: 100%;
        position: absolute;
        overflow: hidden;
        background: transparent;
        top: 0;
        left: 0;
    }

    .extra {
        height: 150vh;
    }

    .gradients-container {
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    /* Section 1 */
    /* Home page */
    #g1-1 {
        background: radial-gradient(farthest-corner at 10% 5%, rgba(var(--color2), 1) 0, rgba(var(--color2), 0) 40%) no-repeat;
    }
    #g1-2 {
        background: radial-gradient(farthest-corner at 0px 0px, rgba(var(--color1), 0.8)  0%, rgba(var(--color1), 0) 60%) no-repeat;
    }
    #g1-3 {
        background: radial-gradient(farthest-corner at -50% -70%, rgba(var(--color3), 0.8)  0%, rgba(var(--color3), 0) 75%) no-repeat;
        width: 200vh;
        height: 200vh;
    }
    /*  */
    /* CAPage */
    #g1-6 {
        background: radial-gradient(farthest-corner at 90% 5%, rgba(var(--color2), 1) 0, rgba(var(--color2), 0) 40%) no-repeat;
    }
    #g1-5 {
        background: radial-gradient(farthest-corner at 100% 0px, rgba(var(--color1), 0.8)  0%, rgba(var(--color1), 0) 40%) no-repeat;
    }
    #g1-4 {
        background: radial-gradient(farthest-corner at 50% 15%, rgba(var(--color5), 0.8)  0%, rgba(var(--color5), 0) 60%) no-repeat;
        width: 100vw;
        left: 27%;
        height: 100vh;
    }
    /*  */

    /* Other Sections */
    #g2-1 {
        background: radial-gradient(circle at center, rgba(var(--color4), 0.5) 0, rgba(var(--color4), 0) 50%) no-repeat;
        left: 15%;
        height: 150vh;
    }
    #g3-1 {
        background: radial-gradient(circle at center, rgba(var(--color4), 0.5) 0, rgba(var(--color4), 0) 50%) no-repeat;
        left: 15%;
        top: 25%;
        height: 200vh;
    }

    /* Test */
    #g1-7 {
        background: radial-gradient(circle at 50% 50%, rgba(var(--color2), 1) 0, rgba(var(--color2), 0) 30%) no-repeat;
    }
    #g1-8 {
        background: radial-gradient(circle at 40% 45%, rgba(var(--color5), 0.6)  0%, rgba(var(--color5), 0) 25%) no-repeat;
        
    }
    #g1-9 {
        background: radial-gradient(circle at 60% 55%, rgba(var(--color1), 0.8)  0%, rgba(var(--color1), 0) 25%) no-repeat;
    }

    @media(max-width: 700px) {
        #g2-1, #g3-1 {
            left: 0;
        }
        #g1-3 {
            width: 100vh;
            height: 100vh;
        }
    }
</style>
