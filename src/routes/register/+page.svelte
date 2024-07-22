<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { getContext, onMount } from "svelte";
	import { fly } from "svelte/transition";

	/** @type {import('./$types').ActionData} */
	export let form;


	const loading:Function = getContext('loading')
	const displayPopUp:Function = getContext('displayPopUp')


	function validate(form_vals:FormData) {
		const username:string = form_vals.get('username') as string | null ?? ""
		const email:string = form_vals.get('email') as string | null ?? ""
		const phone:string = form_vals.get('phone') as string | null ?? ""
		const password:string = form_vals.get('password') as string | null ?? ""
		const institype:string = form_vals.get('institype') as string | null ?? ""
		const instiName:string = form_vals.get('college') as string | null ?? ""
		const gradYear = form_vals.get('gradYear') 
		const degree:string = form_vals.get('stream') as string | null ?? ""
		let valid = false
		if (username.length > 9 ){
			warn_name = "Must be less than 10 characters"
		}else if (username.length == 0){
			warn_name = "required"
		}else if (email.length == 0){
			warn_email = "required"
		} else if (phone.length != 10){
			warn_phone = "Must be only 10 character"
		}else if (password.length < 8){
			warn_password = "must be atleast 8 characters"
		}else {

			if (institype == ""){
				warn_select = "required";
			}else {
				if (instiName == ""){
					warn_init_name = "required";
				}else if (gradYear?.valueOf() == ""){
					warn_grade = "required"
				}else if (institype == "college" && degree == ""){
					warn_degree = "required"
				}else{
					valid = true
				}
			}
			
		}
		return valid
	}
	// @ts-ignore
	function setAptFields(e) {
		instiVal = e.target.value
	}

	let warn_name = "";
	let warn_email = "";
	let warn_password = "";
	let warn_init_name = "";
	let warn_grade = "";
	let warn_phone = "";
	let warn_degree = "";
	let warn_select = "";
	let instiVal = "";


	$: registerResult = (onsubmit: {
		[x: string]: any; cancel: () => void; 
}) => {
		loading( true)
		if (!validate(onsubmit.formData)){
			onsubmit.cancel()
			console.log("cancelled")
			loading(false)
		}
		
		

		// @ts-ignore
		return async ({ result }) => {
			loading( false);
			// console.log(result)
			if (result.type == "success" && result.data){
				const data = result.data
				console.log(data)
				if (data.success){
					goto('/login')
				}else{
					displayPopUp(
						"Alert",
						data,
						2000,
						() => {}
					)
				}
			}else{
				setTimeout(() => {
					displayPopUp(
						"Alert",
						result.data.err ? result.data.err : "Invalid Credentials",
						2000,
						() => goto('/register')
					)
				}, 100);
			}
		}
	}

	function resetWarns(){
		warn_name = "";
		warn_email = "";
		warn_password = "";
		warn_init_name = "";
		warn_grade = "";
		warn_phone = "";
		warn_degree = "";
		warn_select = "";
	}

</script>

<main>
	<div class="form">
		<div class="blank"></div>
		<h2>Register for <span id="Petrichor">Petrichor</span></h2>
		<form action="?/register" method="POST" use:enhance={registerResult} on:change={resetWarns}>
			<div class="input_box">
				<label for="username">Name</label>
				<input type="text" name="username" id="name" placeholder="Name" required maxlength="9"/>
				{#if warn_name}
					<p><strong>{warn_name}</strong></p>
				{/if}
			</div>
			<div class="input_box">
				<label for="phone">Phone</label>
				<input type="tel" name="phone" id="phone-number" placeholder="Phone No." required />
				{#if warn_phone}
					<p><strong>{warn_phone}</strong></p>
				{/if}
			</div>
			<div class="input_box">
				<label for="institype">Institute</label>
				<select name="institype" id="inst-type" on:change={setAptFields}>
					<option value="">--Currently In--</option>
					<option value="school">School</option>
					<option value="college">College</option>
					<option value="neither">None Of The Above</option>
				</select>	
				{#if warn_select}
					<p><strong>{warn_select}</strong></p>
				{/if}
			</div>
			{#if instiVal == "college"}

			<div class="input_box" transition:fly={{x:100}}>
				<label for="college">Institute Name</label>
				<input type="text" name="college" id="college" placeholder="Degree enrolled in"/>
				{#if warn_init_name}
					<p><strong>{warn_init_name}</strong></p>
				{/if}
			</div>
			<div class="input_box" transition:fly={{x:100}}>
				<label for="stream">Degree</label>
				<input type="text" name="stream" id="stream" placeholder="Degree enrolled in"/>
				{#if warn_degree}
					<p><strong>{warn_degree}</strong></p>
				{/if}
			</div>

			<div class="input_box" transition:fly={{x:100}}>
				<label for="gradyear">Year</label>
				<select name="gradyear" class="hide" id="year-of-graduation">
					<option value="">Year of Graduation</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
					<option value="2027">2027</option>
					<option value="2028">2028</option>
					<option value="2029">2029</option>
					<option value="2030">2030</option>
				</select>
				{#if warn_grade}
					<p><strong>{warn_grade}</strong></p>
				{/if}
			</div>
			{:else if instiVal == "school"}
			<div class="input_box" transition:fly={{x:100}}>
				<label for="college">Institute Name</label>
				<input type="text" name="college" id="college" placeholder="Degree enrolled in"/>
				{#if warn_init_name}
					<p><strong>{warn_init_name}</strong></p>
				{/if}
			</div>
			<div class="input_box" transition:fly={{x:100}}>
				<label for="gradyear">Grade</label>
				<select name="gradyear" class="hide" id="year-of-graduation">
					<option value="">Grade</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
				</select>	
				{#if warn_grade}
					<p><strong>{warn_grade}</strong></p>
				{/if}
			</div>
			{/if}

			

			<div class="input_box">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" placeholder="Email" required />
				{#if warn_email}
					<p><strong>{warn_email}</strong></p>
				{/if}
			</div>

			<div class="input_box">
				<label for="password">Password</label>
				<input type="password" id="password" name="password" placeholder="Password" required />
				{#if warn_password}
					<p><strong>{warn_password}</strong></p>
				{/if}
			</div>
			
			<div class="button_holder">
				<button id="register">Register</button>
				<a id="login" href="/login">Login Instead</a>
			</div> 
		</form>
	</div>
</main>

<style>
	*{
		box-sizing: border-box !important;
	}
	main{
		z-index: 11;
		position: relative;
		min-height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.blank{
		height: 80px;	
	}
	.form{
		margin-left: 10vw;
		display: flex;
		width: 40vw;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	form{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.input_box{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		transition: all 1s ease;
	}
	select,input {
		height: 50px;
		width: 100%;
		font-size: 100%;
		padding: 10px 20px;
		border-radius: 10px;
		background-color: #40413ebb;
		border: none;
		color: white;
	}
	::placeholder {
		color: rgb(106, 105, 105);
	}
	label {
		margin: 5px;
	}
	.input_box p{
		width: 100%;
		color: red;
		margin: 0;
		text-align: end;
		padding-right: 5px;
	}

	button{
		border-radius: 10px;
		padding: 10px 20px;
		background-color: #232423;
		color: white;
		font-weight: bold;
		border: none;
	}
	.button_holder{
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		margin: 20px 30px;
		width: 100%;
	}
	@media (max-width:720px){
		.form{
			width: 100vw;
			margin: 0 10vw;
		}
		.input_box{
			font-size: smaller;
		}
		input{
			height: 40px;
		}
	}
</style>
