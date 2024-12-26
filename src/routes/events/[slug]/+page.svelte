<script lang="ts">
	import { page } from '$app/stores';
	import { closedRegistrations } from '$lib/data'

	import { onMount } from 'svelte';
	import { events_compiledmap } from "$lib/markdown";
	import { goto } from '$app/navigation';

	export let data;
	let events = data['events'];
	let loading = false
	let registeredEvents;
	
	let bg;
	let currentEvent = events[data.eventID];
	let registered = false;
	onMount(() => {
		bg.style.backgroundImage = `url("${currentEvent.image}")`;
		setEvent(currentEvent)
		let local=window.localStorage.getItem("registeredEvents")?.split(",")
		if (local){
			registeredEvents = local;
		}
	});

	let registering = false;

	// let currEveFee = events1[parseInt(currentEvent.id.slice(2))].fees
	let content;
	const setEvent = (event) => {
		registering = false;
		bg.style.backgroundImage = `url("${event.image}")`;
		registered=false	
		const code = (events_compiledmap[event.id])
		update(code.data)
		if(registeredEvents?.includes(event.id)){
			registered=true
		}
		if (content){
			content.scrollTo(0, 0)
		}
	};

	
    let iframe: HTMLIFrameElement;

    const srcdoc = `
    <!doctype html>
    <html>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet">
            <script type='module'>
                let c;

                function update(source) {
                    
                    const blob = new Blob([source],{ type: 'text/javascript' });
                    const url = URL.createObjectURL(blob);
					// console.log(source)
                    import(url).then(( { default : App }) => {
                        if (c) c.$destroy();

                        document.body.lastElementChild.innerHTML = '';
                        c = new App({ target: document.body.lastElementChild })
                    
                    })

                }


                window.addEventListener('message', event => {
                update(event.data)})
            <\/script>
            <style>
            * {
                box-sizing: border-box;
                font-family: var(--wfont);
            }

            h1 {
                font-family: var(--sfont) !important;
                text-shadow: 1px 1px 1px #a5a5a5,
                    1px 1.5px 1px #a5a5a5,
                    1px 2px 1px #a5a5a5,
                    1px 2.5px 1px #a5a5a5,
                    1px 3px 1px #a5a5a5
                    ;
            }
                ::-webkit-scrollbar {
    width: 1px;
    background: transparent;
    /* make scrollbar transparent */
  }
    :root {
    --pfont: 'Raleway', sans-serif;
    --wfont: 'Roboto', sans-serif;
    --ofont: 'Arial', sans-serif;
    --sfont: 'Fredericka the Great', sans-serif;
  }
                .bg {
                    
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
                    filter: blur(5px) brightness(50%);
                    background-position: center;
		background-size: cover;
                    background-image: url(${currentEvent.image});
                }
                .content {
                    z-index: 1;
                    padding-top: 5.5em;
                    padding-left: 1em;
                    position: relative;
                    width: 100%;
                    display: flex;
                    color: white;
                    flex-direction: column;
                    place-items: center;
                    overflow-y: scroll;
                }
                body {
                    margin: 0;
                }
				@media (max-width:600px) {
					.content {
					z-index: 1;
					padding-top: 2em;
					margin: 0;
					padding-left: 0;
				}
				}
        </style>
        </head>
        <body>
            <div class="bg"> </div>
            <div class="content"></div>
        </body>  
    </html>
    `;
    let height = 0;
    function update(code: string) {
        console.log("Updating")
        iframe.contentWindow?.postMessage(code, "*");
    }

</script>


<div class="bg" bind:this={bg} />
<div class="parent">
	<div class="sidebar">
			<div class="sbcont">
		
				{#each Object.values(events) as event, index}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
				class="card"
				style="background-image: url('{event.image}');"
				on:mouseenter={() => {
					setEvent(event);	
				}}
				on:mousedown={() => {
					setEvent(event);
					
				}}
			>
			<p class="atmos"> 
					{event.name}
				</p>
		</div>
				{/each}
			</div>
	</div>
	<iframe
            class="content"
            bind:this={iframe}
            title="repl"
            {srcdoc}
            {height}
        />
</div>

<style>

	.card {
		width: 90%;
		aspect-ratio: 2;
		background-position: center;
		background-size: cover;
		position: relative;
		cursor: pointer;
		margin: 1em;
		border-radius: 0.4em;
		transition: 200ms ease-in-out;
		overflow: hidden;
	}
	.card::before {
		background: rgb(0, 0, 0);
		background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		transition: 100ms;
	}
	.card:hover {
		transform: scale(1.08) translateX(0px);
		z-index: 100000;
	}
	.card > p {
		position: absolute;
		font-size: 20px;
		bottom: 0;
		left: 1em;
	}
	.register {
		padding: 0.8em;
		padding-inline: 1em;
		background-color: rgba(237, 237, 237, 0.137);
		border-radius: 0.4em;
		border: unset;
		color: white;
		font-size: 20px;
		transition: 200ms ease-in-out;
	}
	.register:hover {
		background-color: rgb(255, 255, 255);
		color: black;
	}
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		background-position: center;
		background-size: cover;
		transition: background-image 2s;
		filter: blur(5px) brightness(50%);
	}
	.sidebar {
		scrollbar-width: none;  /* Firefox */
		overflow-y: scroll;
		height: 100vh;
		padding-top: 80px;
		width: 25%;
		background-color: #28282d98;
		backdrop-filter: blur(40px);
	}
	.sbcont{
		animation: scrollpc 1.5s ease-in-out;
		animation-delay: 1s;
		
	}
	
	@keyframes scrollpc { 
		from {
			margin-top: 0;
		}
		50%{
			margin-top: -70%;
		}
		to{
			margin-top: 0;
		}
	
	}
	@keyframes scrollmob { 
		from {
			margin-left: 0;
		}
		50%{
			margin-left: -70%;
		}
		to{
			margin-left: 0;
		}
	
	}
	.parent {
		display: flex;
		width: 100%;
		/* font-size: 20px; */
	}
	.content {
		z-index: 1;
		position: relative;
		width: 100%;
		border: none	;
		display: flex;
		height: 100vh;
		flex-direction: column;
		place-items: center;
		overflow-y: scroll;
	}
	
	@keyframes banneranim {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0 0;
		}
	}
		@media (max-width: 600px) {
		/* .sidebar {
			height: 20vh;
			display: flex;
			overflow: auto;
			width: initial;
		}
		.card {
			all: unset;
			width: 30vw;
			background-position: center;
			background-size: cover;
			position: relative;
			cursor: pointer;
		} */
		.content {
			z-index: 1;
			padding-top: 2em;
		}
		.sidebar {
			height: 17svh;
			display: flex;
			overflow-x: auto; /* Use overflow-x for horizontal scroll */
			width: 97%; /* Set the sidebar width to 100% of its parent */
			margin: 0 0.5em;
		}
		
		.sbcont > *{
			
			display: block !important;
		}
		.sbcont{
			display: flex;
			animation: scrollmob 1.5s ease-in-out;
			animation-delay: 1s;
		}

		.card {
			all: unset;
			width: 12rem;
			background-position: center;
			background-size: cover;
			position: relative;
			cursor: pointer;
			flex: 0 0 auto; /* Prevent cards from stretching to fill available space */
			margin-right: 10px; /* Add some spacing between cards if needed */
			border-radius: 1em;
			overflow: hidden;
			margin-top: 0.4em;
		}
		.card > p {
			font-size: 17px;
		}

		.parent {
			flex-direction: column-reverse;
			/* width: 100vw; */
		}
		.content {
			height: 79svh;
			overflow-x: hidden;
		}
		.sbcont {
			overflow: scroll;
		}
		.banner {
			margin: 1em;
			width: 90%;
		}
		.content {
			margin: 0;
			padding-left: 0;
		}
		.register {
			display: block;
			margin-bottom: 1em;
			text-align: center;
		}
		.orgcont {
			display: block;
			padding-left: 25%;
		}
	}
</style>
