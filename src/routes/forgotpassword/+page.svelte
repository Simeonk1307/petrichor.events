<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';

	/** @type {import('./$types').ActionData} */
	export let form;
	let message = 'We Have sent an email to you. Please continue the process from there';
	let message_accepted = false;

	const displayPopUp: Function = getContext('displayPopUp');
	const loading: Function = getContext('loading');

	const whoami: Function = getContext('whoami');

	$: forgotResult = () => {
		loading(true);

		// @ts-ignore
		return async ({ result }) => {
			loading(false);
			// console.log(result)
			message_accepted = false;
			if (result.type == 'success' && result.data) {
				const rdata = result.data;
				if (rdata.success) {
					message_accepted = true;
				} else {
					displayPopUp('Alert', rdata.message ?? 'Some Error encountered', 4000, () => {});
				}
			} else {
				// console.log(result)
				setTimeout(() => {
					displayPopUp(
						'Alert',
						result.data.err ? result.data.err : 'Unknown Error. Please contact the administration',
						2000,
						() => {}
					);
				}, 100);
			}
		};
	};
</script>

<div class="form-container">
	<div class="form">
		<h2>Forgot <span id="Petrichor">Password?</span></h2>
		{#if message_accepted}
			<div class="message">
				<p>{message}</p>
			</div>
		{:else}
			<form action="?/forgot" method="POST" use:enhance={forgotResult}>
				<div>
					<input type="email" name="email" id="email" placeholder="Email" required />
				</div>
				<div class="buttons">
					<button id="login">Submit</button>
					<a id="register" href="/login">Go back To Login</a>
				</div>
			</form>
		{/if}
	</div>
	<!-- <div class="image" /> -->
</div>

<style>
	* {
		box-sizing: border-box !important;
	}
	#login {
		margin: 0;
	}
	h2 {
		font-size: 300%;
		font-weight: normal;
		margin: 10px;
	}
	input {
		padding: 3%;
		margin: 2% 0%;
		font-size: 100%;
		border-radius: 10px;
		width: 100%;
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
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 11;
		display: flex;
		flex-wrap: wrap;
		margin-left: 10%;
	}
	.form {
		z-index: 2;
		width: 50%;
	}
	#login {
		font-size: 1.5rem;
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
	.buttons {
		display: flex;
		flex-direction: row;
		/* gap: 5px; */
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}
	/* } */
	@media (min-width: 800px) {
		.buttons {
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
		.form-container{
			margin-left: 5%;
		}
		#login{
			padding: 2% 3%;
		}
		input{
			width: 60%;
		}
	}
	@media (max-width: 400px) {
		.buttons{
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
	}
	@media (max-width: 650px) {
		h2 {
			font-size: 300%;
			font-weight: normal;
			margin-top: 20%;
			margin-right: 10%;
			margin: 0;
		}
		input {
			padding: 3%;
			margin: 2% 0%;
			font-size: 100%;
			border-radius: 10px;
			background-color: #40413ebb;
			border: none;
			color: white;
			width: 100%;
		}
		.buttons{
			display: flex;
			justify-content: space-between;
		}
		::placeholder {
			color: white;
		}
		.form-container {
			width: 100%;
			height: 100%;
			min-height: 640px;
			display: flex;
			
			font-size: smaller;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
		}
		.form {
			display: flex;
			flex-direction: column;
		}
		#login {
			border-radius: 10rem;
			padding: 10px 20px;
			background-color: #232423;
			color: white;
			font-weight: bold;
			border: none;
		}
		#register {
			color: mediumslateblue;
			display: inline-block;
			/* margin: 2% 0 0 40%; */
		}
	}
	@media (max-width: 550px) {
		.form {
			width: 70%;
		}
	}
</style>
