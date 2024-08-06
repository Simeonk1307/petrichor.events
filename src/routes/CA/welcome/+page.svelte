<script lang="ts">
	import { goto } from '$app/navigation';
	import { API, defaultUser, POST } from '$lib';
	import Globe from '$lib/assets/svgs/globe.svg';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';

	export let data;

	$: buttonText = "Apply CA"
	let CAbutton:HTMLButtonElement

	const getData:Function = getContext('getData')
	let visible = false
	onMount(()=>{
		setTimeout(()=>{
			visible = true
		},10)
		if (!$loggedIn){
			getData()
		}
		access_token.set(data.access_token)
		// console.log($user)
		if ($loggedIn && !$invalidate){
			 const user_data = $user['user_data']
			 if (user_data == undefined){
				getData()
				return
			 }
			 const CAProfile = user_data.CACode
			 const registrations = user_data[('registrations')]
			if (CAProfile == ""){
				buttonText = "Apply CA"
			}else if (registrations == -1){
				CAbutton.disabled = true
				buttonText = "Applied"
			}else{
				buttonText = "CA Profile"
			}
		}
		// console.log(data.generate)
		if (data.generate != null){
			open_caProfile()
		}
	})

	function handleClick(){
		if (buttonText == "Apply CA"){
			generateCACode()
		}else if (buttonText == "CA Profile"){
			open_caProfile()
		}
	}

	const displayPopUp:Function = getContext("displayPopUp")
	const loading:Function = getContext("loading")

	function open_caProfile() {
		if ($invalidate || !$loggedIn) {
			// not logged In
			goto('/login?to=/CA/welcome?generate=false');
		} else {
			if (!($user['user_data'] == undefined)) {
				if ($user['user_data']['CACode'] == '') {
					displayPopUp(
						"Message",
						"You do have a CA account.",
						2000,
						()=> {}
					)
				}
				else if ($user['user_data']['registrations'] == -1) {
					displayPopUp(
						"message",
						"Your CA account have not been verified Yet",
						3000,
						()=>{}
					)
				}else{
					goto('/CA/profile')
				}
			}else{
				goto('/login');
			}
		}
	}

	async function generateCACode() {
		// first check in stores.
		// If not present then
		// fetch go to generate it.
		if ($invalidate || !$loggedIn){
			goto("/login?to=/CA/welcome")
		}else{
			loading(true)
			const accesstoken = $access_token
			// console.log(document.cookie.split(''))

			await POST(API.generateCA,
				{},(accesstoken == null) ? undefined : accesstoken
			).then(res => res.json())
			.then(res => {
				loading(false)
				if (res.success){
					displayPopUp(
						"Message",
						// "Your application have been sent to the Petrichor team. We will mail you back after our team verifies your CA profile.",
						"CA account generated successfully. Please Login into your account again to reflect the changes",
						5000,
						()=>{
							invalidate.set(true)
							loggedIn.set(false)
							user.set(defaultUser)
							access_token.set(null)
							sessionStorage.clear()
							goto('/CA/profile')
						}
					)
					
				}else{
					displayPopUp(
						"Message",
						res.message ?? "Unable to generate CA account",
						5000,
						()=>{}
					)
				}
			})
			.catch((err) => {
				console.log(err)
				loading(false)
				displayPopUp(
					"Error",
					`Some Error occrured: ${err.toString()}`,
					2000,
					()=>{}
				)
			})
		}

	}
</script>

<main class="{visible ? '': "none"}">
	<div class="first-block">
		<div class="content">
			<div class="title"><p>CA Petrichor</p></div>
			<div class="content_box">
				<div class="caption">
					<h4>Become a Campus Ambassador for Petrichor</h4><br />
					Be the voice of IITPKD's premier fest and lead your campus in celebrating the spirit of Petrichor.
				</div>
				<div class="buton_area">
					<button type="button" class="ca_portal" on:click={handleClick} bind:this={CAbutton}
						>{buttonText}
						<svg
							width="20px"
							height="20px"
							viewBox="0 2.5 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 7L15 12L10 17"
								stroke="gray"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="infos">
			<div class="content_box1">
				<p>30k Prize Pool</p>
				<p>Earn more for each registration/participation you bring</p>
			</div>
			<div class="marketingbs">
				<div class="card">
					<h2>Benefits</h2>
					<li>Win cash prizes from a pool of 30k if you are in the top 5 CAs</li>
					<li>Earn ₹ 50 per extra registration above 5 (for workshops and tech summit)</li>
					<li>Win exciting goodies and pro-show tickets of Petrichor'24</li>
					<li>
						Earn certificate of merit issued by Petrichor, IIT Palakkad for your valiant efforts
					</li>
				</div>
				<div class="card neg">
					<h2>All You Have to do</h2>
					<li>Share our content, posters and links to your peers and college groups</li>
					<li>
						Encourage students from your college and contacts to participate in our events and
						workshops
					</li>
				</div>
			</div>
		</div>
	</div>

	<div class="strip">
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
		<div class="strip1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
			<div class="banner">&nbsp;PETRICHOR</div>
		</div>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: transparent;
		background-color: transparent;
		/* padding: 5em 0; */
		transition: 0.5s;
	}
	.first-block {
		width: 100vw;
		flex: 8;
		/* margin-bottom: 5em; */
		display: flex;
	}
	.content {
		flex: 1;
		display: flex;
		gap: 20px;
		flex-direction: column;
		justify-content: center;
	}
	button:disabled{
		background-color: rgba(186, 181, 181, 0.518);
		pointer-events: none;
    z-index: 5;
	}
	button {
		cursor: pointer;
		z-index: 2;
	}
	.title {
		flex: 2;
		z-index: 4;
		padding-left: 4vw;
		display: flex;
		align-items: flex-end;
		color: white;
	}
	.title p {
		font-size: calc(30px + 1.5vw);
		font-weight: 100;
		font-family: var(--sfont);
		margin: 0;
	}
	.content_box {
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.caption {
		font-size: 20px;
		font-weight: 100;
		color: white;
		overflow: hidden;
		text-wrap: wrap;
		padding-left: 4vw;
	}
	.caption h4{
		margin: 5px 0;
	}
	.buton_area {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		justify-content: space-evenly;
		margin-top: 5rem;
		margin-right: 10vw;
	}
	button {
		border-radius: 2.5em;
		padding: 0.8em 2em;
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
		font-weight: 100;
	}

	.strip {
		display: flex;
		flex: 2;
		align-items: center;
		overflow-x: hidden;
		width: 100vw;
		max-height: 35px;
		margin: 2rem 0;
		border-top: 2px solid white;
		border-bottom: 2px solid white;
		padding-top: 12px;
		padding-bottom: 12px;
		opacity: 60%;
	}
	.strip1 {
		display: flex;
		justify-content: center;
		min-width: max(20%, 150px);

		/* Apply animation to this element */
		-moz-animation: example1 5s linear infinite;
		-webkit-animation: example1 5s linear infinite;
		animation: example1 5s linear infinite;
	}

	.banner {
		display: inline-block;
	}
	.infos {
		flex: 1;
		margin: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 1em;
		padding: 0 1vw;
		z-index: 2;
		margin-top: 4em;
	}
	.infos p {
		text-align: center;
		margin: 5px;
	}
	/* Move it (define the animation) */
	@-moz-keyframes example1 {
		0% {
			-moz-transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%);
		}
	}
	@-webkit-keyframes example1 {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(-100%);
		}
	}
	@keyframes example1 {
		0% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%); /* Firefox bug fix */
			-webkit-transform: translateX(-100%); /* Firefox bug fix */
			transform: translateX(-100%);
		}
	}

	@media only screen and (max-width: 900px) {
		main{
			height: unset;
		}
		.caption {
			font-size: 14px;
		}
		button {
			padding: 0.5em 1em;
		}
		.buton_area {
			margin-top: 1em;
		}
		.first-block {
			flex: 7;
			flex-direction: column;
		}
		.strip {
			padding: 8px 0;
			margin: 1em 0;
		}
		.infos {
			flex: 1;
			font-size: min(3.8vw, 14px);
			margin-top: 1em;
		}
		.content{
			min-height: 100vh;
		}
	}
</style>
