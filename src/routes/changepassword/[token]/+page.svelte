<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { getContext } from "svelte";

	/** @type {import('./$types').ActionData} */
	// export let form;

	const displayPopUp:Function = getContext('displayPopUp')
	const loading:Function = getContext('loading')
	

	$: changeResult = () => {
		loading( true)

		

		// @ts-ignore
		return async ({ result }) => {
			loading( false);
			// console.log(result)
			if (result.type == "success" && result.data){
				const rdata = result.data
				if (rdata.success){
					displayPopUp(
						"Message",
						"Password Reset Successful",
						3000,
						()=>{
							goto('/login')
						}
					)
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
	<!-- <div class="blank2" /> -->
	<div class="form">
		<h2>Change <span id="Petrichor">Password?</span></h2>
		<form
		action="?/change"
		method="POST"
		use:enhance={changeResult}
	>
		<div>
			<input type="password" name="password" id="password" placeholder="Password" required />
		</div>
		<div>
			<input type="password" name="confirm_pass" id="confirm_pass" placeholder="Confirm Password" required />
		</div>
		<div>
			<button id="login">Submit</button>
			<a id="register" href="/login">Go back To Login</a>
		</div>
	</form>
	</div>
	<!-- <div class="image" /> -->
</div>
<!-- <div class="blank" /> -->

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
		/* margin: 5% 5%; */
		margin: 0;
	}
	input {
		padding: 3%;
		margin: 2% 0%;
		font-size: 100%;
		border-radius: 10px;
		width: 55%;
		background-color: #40413e;
		border: none;
		color: white;
	}
	::placeholder {
		color: white;
	}
	#Petrichor {
		color: #b58cd1;
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
		#Petrichor {
			color: #910cea;
			font-weight: 600;
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