<script lang="ts">
	import HeroSection from "$lib/components/homepage/HeroSection.svelte";
	import { onMount } from "svelte";
	let background: HTMLElement
	let plang: any = {
		english: 'PETRICHOR',
		hindi: 'पेट्रीकोर',
		tamil: 'பெட்ரிகோர்',
		gujrati: 'પેટ્રિકોર',
		malayalam: 'പെട്രിക്കോർ',
		bengali: 'পেট্রিকোর',
		telugu: 'పెట్రికోర్',
		punjabi: 'ਪੈਟ੍ਰਿਕੋਰ'
	};
	let langs = Object.keys(plang);
	let curr_lang_index = 0;
	let curr_petr_phrase = 'PETRICHOR';
	
	let isPhone = false
	
	let winsize = 3000;
	let mouseX = 0;
    let mouseY = 0;
	onMount(() => {
		winsize = window.innerWidth;
		// window.location.replace('/events')
		isPhone = document.body.clientWidth < 500
		document.onmousemove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			background.style.clipPath = `circle(100px at ${mouseX}px ${mouseY}px)`;
		}
		hovering = true
	})

	let tooltip_text = 'Petrichor in english';
	const setLang = () => {
		if (!hovering && !isPhone) {
			return;
		}
		curr_lang_index++;
		if (curr_lang_index >= langs.length) {
			curr_lang_index = 0;
		}
		if (ptext)
			ptext.style.filter = 'blur(2svw)';
		setTimeout(() => {
			console.log("here")
			curr_petr_phrase = plang[langs[curr_lang_index]];
			ptext.style.filter = '';
			tooltip_text = `Petrichor in ${langs[curr_lang_index]}`
		}, 300);
	};

	let tttf = tooltip_text

	const setTttf = () => {
		tttf = glitchify(tooltip_text, 10)
	}
	setInterval(setTttf, 100)
	

	const glitchify = (text: string, k: number) => {
		if (k < 1 || k > 100) {
			return 'k must be between 1 and 100';
		}

		// Calculate the number of characters to replace
		const numCharsToReplace = Math.floor((k / 100) * text.length);

		// Create an array of characters to choose from for replacement
		const charSet = '!@#$%^&*()1234567890-=`~[]{}"\';:,./<>?|\\';

		// Convert the input string to an array of characters for easier manipulation
		const stringArray = text.split('');

		// Replace random characters with random letters and numbers
		for (let i = 0; i < numCharsToReplace; i++) {
			const randomIndex = Math.floor(Math.random() * text.length);
			const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
			stringArray[randomIndex] = randomChar;
		}

		// Join the modified array back into a string and return
		return stringArray.join('');
	};

	let hovering = false;
	let ptext: HTMLDivElement;
	let main:HTMLElement;
	setInterval(setLang, 2000);

	function openHome() {
		main.style.pointerEvents = 'none'
		let x = 120;
		setInterval(() => {
			background.style.clipPath = `circle(${x}px at ${mouseX}px ${mouseY}px)`
			x += 100
		}, 50)
		setTimeout(() => {
			window.location.href = '/home'
		}, 800);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<main on:click={openHome} bind:this={main}>
	<div class="main atmos foreground" style="--p: '{curr_petr_phrase}'">
		<div
		bind:this={ptext}
		class="petr"
		
		>
		{curr_petr_phrase}
	</div>
	<span>{tttf}</span>
</div>
<div class="background" bind:this={background}>
<HeroSection pageWidth={winsize} slide={()=>{}} toAnimate={false} />
</div>
	
</main>
	
	
	<style>
	.main {
		width: 100svw;
		height: 100svh;
		display: grid;
		place-items: center;
		background-size: cover;
		position: relative;
		cursor: none;
		text-shadow: none;
	}
	.foreground {
      position: absolute;
      z-index: 1;
    }

	.background {
      z-index: 3;
	  position: absolute;
	  top: 0;
      pointer-events: none;
      width: 100vw;
      height: 100vh;
      background-color: rebeccapurple;
      clip-path: circle(100px at 0px 0px);
    }
	.petr {
		font-weight: 800;
		font-size: 12svw;
		font-family: var(--ofont);
		position: relative;
		z-index: 1;
		transition: 300ms linear;
		animation: glitch 400ms linear infinite;
	}
	.petr::after {
		content: var(--p);
		font: inherit;
		color: #df1f2d;
		position: absolute;
		top: 0;
		left: -0;
		z-index: -1;
		transition: 200ms ease-in-out;
		filter: blur(4px);
		top: 3%;
		left: -0.3%;
	}
	.petr::before {
		content: var(--p);
		font: inherit;
		color: #2b3784;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: 200ms ease-in-out;
		filter: blur(4px);
		top: -3%;
		left: 0.3%;
	}

	span {
		font-size: 30px;
		position: absolute;
		left: 50%;
		top: 75%;
		z-index: 2;
		font-family: monospace;
		transform: translate(-50%, -50%);
		padding: 0.5em;
		padding-inline: 1em;
		border-radius: 1em;
		opacity: 0.4;
		width: max-content;

	}

	@media(max-width: 500px){
		span{
			font-size: 15px;
		}
	}

	@keyframes glitch {
		2%,
		64% {
			transform: translate(.1%, 0) skew(0deg);
		}
		4%,
		60% {
			transform: translate(-.1%, 0) skew(0deg);
		}
		62% {
			transform: translate(0, 0) skew(10deg);
		}
	}
</style>
