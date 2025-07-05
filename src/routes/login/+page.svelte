<script lang="ts">
	import './Login.css'
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { eye } from 'svelte-awesome/icons';

	/** @type {import('./$types').ActionData} */
	// export let form;
	// console.log(form)
	export let data;
	let email: string;
	let showPassword = false;


	const getData: Function = getContext('getData');
	onMount(async () => {
		loading(true)
		if (!$loggedIn) {
			await getData();
		}
		loading(false)
		if ($loggedIn && data.accessToken && data.nextpg == "map") {
			window.location.href = `https://map.petrichor.events/api/oauth?session_id=${data.accessToken}`
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
				// console.log(rdata)
				const whoami_res = (await whoami(rdata.token))
				// console.log(whoami_res)
				if (!whoami_res) {
					loading(false)
					displayPopUp('Alert', "Unable to log you in. Please retry after sometime", 4000, afterMessage);
					return
				}
				if (rdata.success) {
					// this will save all the data to session Storage
					loading(false);
					invalidate.set(false);
					loggedIn.set(true);
					// console.log($user)
					if (data.nextpg != null){
						if (data.nextpg == "map") {
							window.location.href = `https://map.petrichor.events/api/oauth?session_id=${rdata.token}`
							return;
						}
						goto(data.nextpg);
					} 
					else {
						goto('/profile');
					}
				} else {
					loading(false);
					displayPopUp('Alert', rdata.message, 4000, afterMessage);
				}
			} else {
				if(result.status == 511){
					loading(false)
					goto('/register/verify?email='+email);
					return;
				}
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


<main>
  <div class="container">
    <div class="login">
      <h2><strong>Sign in to your account</strong></h2>
      <form method="POST" action="?/login" use:enhance={loginResult}>

	<label class="label"><p>Email</p>
		<input type="email" name="email" placeholder="name@company.com" bind:value={email} required autocomplete="username" />
	</label>

    <label class="label"><p>Password</p>
		<div class="w-full flex flex-row">
			<input type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" required autocomplete="current-password" class="w-full pr-10"  />
			<button type="button" on:click={() => showPassword = !showPassword}>
			{#if showPassword}
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute right-5 -translate-y-80/100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
						  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5
							 c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0
							 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
						  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
				  </svg>
			  {:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute right-5 -translate-y-80/100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
						d="M3 3l18 18M10.477 10.477A3 3 0 0 0 13.5 13.5M6.47 6.47C4.123 8.256
						   2.735 10.426 2.037 12.32c-.07.207-.07.43 0 .638 1.39 4.17 5.325 7.18
						   9.963 7.18 1.713 0 3.33-.44 4.747-1.21M17.53 17.53C19.877 15.744
						   21.265 13.574 21.963 11.68c.07-.207.07-.43 0-.638-1.39-4.17-5.325-7.18-9.963-7.18-1.534
						   0-2.982.35-4.287.978" />
				</svg>
			  {/if}
			</button>
		</div>
		  
	</label>
	
        <div class="options">
          <label class="remember">
            <input type="checkbox" class="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="/forgotpassword" class="forgot">Forgot password?</a>
        </div>

        <div class="flex justify-center">
          <button id="login" type="submit" class="login-btn">Sign in</button>
        </div>

        <p class="signup-text">Don't have an account yet?
          <a href="/register" class="signup-link">Sign up</a>
        </p>

      </form>
    </div>
  </div>
</main>
