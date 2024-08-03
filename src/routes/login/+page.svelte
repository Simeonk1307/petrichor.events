<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';

	/** @type {import('./$types').ActionData} */
	// export let form;
	// console.log(form)
	export let data;

	const getData: Function = getContext('getData');
	onMount(() => {
		if (!$loggedIn) {
			getData();
		}
		access_token.set(data.accessToken);
	});

	const displayPopUp: Function = getContext('displayPopUp');
	const loading: Function = getContext('loading');

	function afterMessage() {
		// console.log("her")
		goto(`/login${$page.url.search}`);
	}
	const whoami: Function = getContext('whoami');

	$: loginResult = () => {
		loading(true);

		// @ts-ignore
		return async ({ result }) => {
			// console.log(result)
			if (result.type == 'success' && result.data) {
				const rdata = result.data;
				if (rdata.success && (await whoami(rdata.token))) {
					// this will save all the data to session Storage
					loading(false);
					invalidate.set(false);
					loggedIn.set(true);
					// console.log($user)
					if (data.nextpg != null) goto(data.nextpg);
					else {
						goto('/profile');
					}
				} else {
					loading(false);
					displayPopUp('Alert', rdata, 4000, afterMessage);
				}
			} else {
				// console.log(result)
				setTimeout(() => {
					loading(false);
					displayPopUp(
						'Alert',
						result.data.err ? result.data.err : 'Invalid Credentials',
						4000,
						afterMessage
					);
				}, 100);
			}
		};
	};
</script>

<div class="form-container">
	<div class="form">
		<h2>Login to <span id="Petrichor">Petrichor</span></h2>
		<form action="?/login" method="POST" use:enhance={loginResult}>
			<div>
				<input type="email" name="email" id="email" placeholder="Email" required />
			</div>
			<div>
				<input type="password" id="password" name="password" placeholder="Password" required />
			</div>
			<div class="button_holder">
				<div class="button_divs">
					<button id="login">Login</button>
				</div>
				<div class="links">
					<a id="register" href="/register">First Time? Register Here</a>
					<a id="register" href="/forgotpassword">Forgot Password?</a>
				</div>
			</div>
		</form>
	</div>
	<!-- <div class="image" /> -->
</div>

<style>
	* {
		box-sizing: border-box !important;
	}
	.button_holder {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
		/* margin: 20px 30px; */
	}
	.button_holder .links {
		display: flex;
		gap: 20px;
		width: 100%;
		/* align-items: center; */
		/* justify-content: space-evenly; */
	}
	.button_holder .button_divs {
		width: 55%;
		display: flex;
		margin-top: 10px;
		/* justify-content: center; */
	}
	#login {
		margin: 0;
	}
	#Petrichor {
		color: #910cea;
		font-weight: 600;
	}
	@media (max-width: 800px) {
		.links {
			flex-direction: column;
			align-items: flex-start !important;
		}
		.button_divs {
			justify-content: flex-start !important;
		}
	}
	h2 {
		font-size: 300%;
		font-weight: normal;
		margin-bottom: 10px;
	}
	input {
		padding: 3%;
		margin: 2% 0%;
		font-size: 100%;
		border-radius: 10px;
		width: 80%;
		background-color: #40413e;
		border: none;
		color: white;
	}
	::placeholder {
		color: white;
	}
	.form-container {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		z-index: 11;
		display: flex;
		flex-wrap: wrap;
		margin-left: 5%;
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
	/* } */
	@media (max-width: 650px) {
		h2 {
			font-size: 300%;
			font-weight: normal;
			margin-top: 20%;
			margin-right: 10%;
		}
		input {
			padding: 3%;
			margin: 2% 0%;
			font-size: 100%;
			border-radius: 10px;
			width: 80%;
			background-color: #40413ebb;
			border: none;
			color: white;
		}
		::placeholder {
			color: white;
		}
		.form-container {
			width: 100%;
			height: 100%;
			min-height: 640px;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
		}
		.form {
			width: 100%;
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
</style>
