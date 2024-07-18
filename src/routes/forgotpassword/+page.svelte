<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from '$app/navigation';
	import { page } from "$app/stores";
	import { getContext } from "svelte";

	/** @type {import('./$types').ActionData} */
	export let form;
	let message = "We Have sent an email to you. Please continue the process from there"
	let message_accepted = false

	const displayPopUp:Function = getContext('displayPopUp')
	const loading:Function = getContext('loading')


	const whoami:Function = getContext('whoami')
	

	$: forgotResult = () => {
		loading( true)

		// @ts-ignore
		return async ({ result }) => {
			loading( false);
			// console.log(result)
			message_accepted = false
			if (result.type == "success" && result.data){
				const rdata = result.data
				if (rdata.success){
					message_accepted = true
				}else{
					displayPopUp(
						"Alert",
						rdata.message ?? "Some Error encountered",
						4000,
						()=>{}
					)
				}
			}else{
				// console.log(result)
				setTimeout(() => {
					displayPopUp(
						"Alert",
						result.data.err ? result.data.err : "Unknown Error. Please contact the administration",
						2000,
						()=>{}
					)
				}, 100);
			}
		}
	}



</script>

<div class="form-container">
	<div class="blank2" />
	<div class="form image2">
		<h2>Forgot <span id="Petrichor">Password?</span></h2>
		{#if message_accepted}
			<div class="message">
				<p>{message}</p>
			</div>
		{:else}
		<form
		action="?/forgot"
		method="POST"
		use:enhance={forgotResult}
	>
		<div>
			<input type="email" name="email" id="email" placeholder="Email" required />
		</div>
		<div>
			<button id="login">Submit</button>
			<a id="register" href="/login">Go back To Login</a>
		</div>
	</form>
		{/if}
	</div>
	<div class="image" />
</div>
<div class="blank" />

<style>
	@media (min-width: 501px) {
		h2 {
			font-size: 300%;
			font-weight: normal;
			margin: 5% 20%;
		}
		input {
			padding: 2%;
			margin: 2% 20%;
			font-size: 150%;
			border-radius: 10rem;
			width: 55%;
			background-color: #40413e;
			border: none;
			color: white;
		}
		::placeholder {
			color: white;
		}
		#Petrichor {
			color: #910cea;
			font-weight: 600;
		}
		.form-container {
			padding-top: 10%;
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
		}
		.form {
			z-index: 2;
			width: 50%;
		}
		.image {
			width: 50%;
			height: 500px;
			background-image: url('https://i.pinimg.com/1200x/c2/55/30/c25530ab671a4098de5598e047a9a985.jpg');
		}
		.message{
			padding: 10px 20px;
		}
		#login {
			font-size: 2rem;
			margin: 2% 5% 2% 20%;
			border-radius: 10rem;
			padding: 2% 7%;
			background-color: #232423;
			color: white;
			font-weight: bold;
			border: none;
		}
		#register {
			color: mediumslateblue;
			display: inline-block;
		}
		.blank {
			background-color: transparent;
			width: 100%;
			height: 100px;
		}
	}
	@media (max-width: 500px) {
		h2 {
			font-size: 300%;
			font-weight: normal;
			margin: 20% 15% 5%;
		}
		input {
			padding: 2%;
			margin: 2% 8%;
			font-size: 150%;
			border-radius: 10rem;
			width: 80%;
			background-color: #40413ebb;
			border: none;
			color: white;
		}
		::placeholder {
			color: white;
		}
		#Petrichor {
			color: #910cea;
			font-weight: 600;
		}
		.form-container {
			padding-top: 10%;
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
		}
		.form {
			width: 100%;
		}
		.image2 {
			height: 500px;
			background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
				url('https://i.pinimg.com/1200x/c2/55/30/c25530ab671a4098de5598e047a9a985.jpg');
		}
		.image {
			display: none;
		}
		#login {
			font-size: 1.5rem;
			margin: 2% 0% 2% 5%;
			border-radius: 10rem;
			padding: 2% 7%;
			background-color: #232423;
			color: white;
			font-weight: bold;
			border: none;
		}
		#register {
			color: mediumslateblue;
			display: inline-block;
			margin: 2% 0 0 40%;
		}
		.blank {
			background-color: black;
			width: 100%;
			height: 100px;
		}
		.blank2 {
			background-color: black;
			width: 100%;
			height: 100px;
		}
	}
</style>