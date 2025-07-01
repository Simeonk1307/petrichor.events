<script lang="ts">
	// import './Login.css'
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
	let password: string;

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
            <input type="checkbox" class="check" />
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

<style>
	main {
	  min-height: 100vh;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background: linear-gradient(
		190deg,
		#039FF1 0%,
		#074F88 9%,
		#005698 20%,
		#001423 32%,
		#000910 50%,
		#000000 100%
	  );
	  background-repeat: no-repeat;
	  background-position: top right;
	  background-color: #000;
	}
	
	@keyframes flicker {
	  0%, 100% {
		box-shadow: 0 0 15px rgba(0, 191, 255, 0.3),
					0 0 30px rgba(0, 191, 255, 0.2),
					0 0 45px rgba(0, 191, 255, 0.1);
	  }
	  50% {
		box-shadow: 0 0 10px rgba(0, 191, 255, 0.1),
					0 0 20px rgba(0, 191, 255, 0.05),
					0 0 30px rgba(0, 191, 255, 0.03);
	  }
	}
	
	.container {
	  width: 90%;
	  max-width: 700px;
	  min-height: 420px;
	  border-radius: 1rem;
	  background-color: #1e293b;
	  border: 1px solid #06b6d4; /* border-cyan-600 */
	  padding: 2.5rem;
	  color: white;
	  animation: flicker 2s infinite ease-in-out;
	}
	
	@media (max-width: 1023px) {
	  .container {
		max-width: 600px;
		min-height: 400px;
		padding: 2.5rem;
	  }
	}
	
	@media (max-width: 767px) {
	  .container {
		max-width: 500px;
		min-height: 350px;
		padding: 2rem;
	  }
	}
	
	@media (max-width: 639px) {
	  .container {
		max-width: 400px;
		padding: 1.5rem;
	  }
	}
	
	.login {
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	}
	
	.login h2 {
	  font-size: 1.5rem;
	  font-weight: 600;
	  margin-bottom: 2rem;
	  color: white;
	}
	
	.label {
	  display: block;
	  font-size: 0.875rem;
	  font-weight: 500;
	  margin-bottom: 0.25rem;
	  color: #d1d5db;
	}
	
	.label p {
	  margin-bottom: 0.5rem;
	}
	
	.login input {
	  width: 100%;
	  margin-bottom: 1rem;
	  padding: 0.5rem 1rem;
	  border-radius: 0.375rem;
	  border: 1px solid #4b5563;
	  background-color: #334155;
	  color: white;
	  /* placeholder-color: #9ca3af; */
	  outline: none;
	}
	
	.login input:focus {
	  box-shadow: 0 0 0 2px #3b82f6;
	}
	
	.options {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 1.5rem;
	  font-size: 0.875rem;
	}
	
	.remember {
	  display: flex;
	  align-items: center;
	  gap: 0.5rem;
	  color: #d1d5db;
	}
	
	.check {
	  width: 20px;
	  height: 20px;
	  margin-right: 10px;
	}
	
	.forgot {
	  color: #60a5fa;
	  text-decoration: none;
	}
	
	.forgot:hover {
	  text-decoration: underline;
	}
	
	.login-btn {
	  width: 200px;
	  padding: 0.5rem 0;
	  color: white;
	  border-radius: 0.5rem;
	  margin: 0 auto;
	  display: block;
	  background: linear-gradient(to right, #1e40af, #38bdf8);
	  /* transition: background 0.3s ease; */
	}
	
	.login-btn:hover {
	  background: linear-gradient(to right, #1d4ed8, #0ea5e9);
	}
	
	.signup-text {
	  margin-top: 1rem;
	  text-align: center;
	  font-size: 0.875rem;
	  color: #d1d5db;
	}
	
	.signup-link {
	  color: #60a5fa;
	  text-decoration: none;
	}
	
	.signup-link:hover {
	  text-decoration: underline;
	}
</style>	