<script lang="ts">
    import type { Link } from '../../types';
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { facebookSquare, twitterSquare, envelopeSquare, instagram, linkedinSquare } from 'svelte-awesome/icons';

    export let title: string;
    export let links: Array<Link> = [];

    // Map social media names to their icons
    const socialIcons: Record<string, any> = {
        'Facebook': facebookSquare,
        'Twitter': twitterSquare,
        'Instagram': instagram,
        'Contact': envelopeSquare,
        'LinkedIn': linkedinSquare,
        'Email': envelopeSquare
    };

    // Get the appropriate icon for each link
    function getIconForLink(linkText: string) {
        return socialIcons[linkText] || null;
    }
</script>

<footer class="relative min-h-60 w-screen overflow-hidden border-t border-white/20 text-white backdrop-blur-2xl shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
    
    <div class="relative z-[2] mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10 flex flex-col justify-between h-full">
        <div class="flex-1 flex flex-col gap-6">
            <div class="relative text-center">
                <div class="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]" style="font-family: var(--sfont);">
                    {title}
                </div>
            </div>

            <div class="flex gap-4 md:gap-6 flex-wrap items-center justify-center">
                {#each links as link, index}
                    <a 
                        href={link.url} 
                        aria-label={link.linkText} 
                        target="_blank" 
                        class="group relative flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.175)] text-gray-150 hover:text-white font-medium overflow-hidden flex-col md:flex-row text-center"
                    >
                        {#if link.linkIcon || getIconForLink(link.linkText)}
                            <div class="flex items-center justify-center transition-all duration-300 drop-shadow-[0_0_7px_rgba(255,255,255,0.35)] group-hover:drop-shadow-[0_0_11px_rgba(255,255,255,0.55)]">
                                <Icon data={link.linkIcon || getIconForLink(link.linkText)} scale={1.8} />
                            </div>
                        {/if}
                        <span class="text-sm md:text-base">{link.linkText}</span>
                        <div class="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:left-full"></div>
                    </a>
                    {#if index < links.length - 1}
                        <span class="text-gray-500 text-xl opacity-60 mx-2 hidden md:inline">•</span>
                    {/if}
                {/each}
            </div>
        </div>
        
        <div class="mt-8 pt-6 border-t border-white/12 flex justify-center items-center">
            <div class="flex items-center justify-center w-full max-w-lg">
                <div class="h-px w-28 md:w-44 bg-gradient-to-r from-transparent via-white/55 to-white/75 opacity-92 shadow-[0_0_5px_rgba(255,255,255,0.35)]"></div>
                <div class="mx-6 relative">
                    <div class="w-2 h-2 bg-white/60 rounded-full shadow-[0_0_9px_rgba(255,255,255,0.65)] animate-pulse"></div>
                    <div class="absolute inset-0 w-2 h-2 bg-white/25 rounded-full shadow-[0_0_13px_rgba(255,255,255,0.45)] animate-ping"></div>
                </div>
                <div class="h-px w-28 md:w-44 bg-gradient-to-r from-white/75 via-white/55 to-transparent opacity-92 shadow-[0_0_5px_rgba(255,255,255,0.35)]"></div>
            </div>
        </div>
    </div>
</footer>
