<script lang="ts">
	import './Login.css'
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';

	/** @type {import('./$types').ActionData} */
	// export let form;
	// console.log(form)
	export let data;
	let email: string;

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
		<input type="password" name="password" placeholder="••••••••" bind:value={password} required autocomplete="current-password" />
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
