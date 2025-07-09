<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
</svelte:head>

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
  const loading: Function     = getContext('loading');
  const whoami: Function      = getContext('whoami');

  $: forgotResult = () => {
    loading(true);
    // @ts-ignore
    return async ({ result }) => {
      loading(false);
      message_accepted = false;
      if (result.type === 'success' && result.data) {
        if (result.data.success) {
          message_accepted = true;
        } else {
          displayPopUp('Alert', result.data.message ?? 'Some Error encountered', 4000, () => {});
        }
      } else {
        setTimeout(() => {
          displayPopUp(
            'Alert',
            result.data?.err ?? 'Unknown Error. Please contact the administration',
            2000,
            () => {}
          );
        }, 100);
      }
    };
  };

  function handleLogin(e: Event) {
    e.preventDefault();
    goto('/login');
  }
</script>

<style>
  /* blue gradient bg */
  .page-bg {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
		background: linear-gradient(
    160.19deg,
    #01E8FA -9.39%,
    #01CFF7 -1.5%,
    #01D6F4 5.81%,
    #039FF1 12.82%,
    #074F88 21.59%,
    #005698 29.2%,
    #001423 39.43%,
    #000910 48.49%
  );
  }

  /* container */
  .form-box {
    width: 36rem;
    padding: 2.5rem;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 2rem;
    font-family: 'Inter', sans-serif;
    color: #fff;
    animation: fadeIn 0.5s ease-out;
    	  animation: flicker 2s infinite ease-in-out;

  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
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
  h2 {
    font-family: 'Inria Sans', sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
  .subtitle {
    color: #a1a9b8;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1.25rem;
    background: #334155;
    border: none;
    border-radius: 1rem;
    color: #fff;
    font-size: 1rem;
  }
  input::placeholder { color: #9ca3af; }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  #login {
    flex: none;
    padding: 1rem 2rem;
    background: linear-gradient(to right, #1e40af, #38bdf8);
    border: none;
    border-radius: 1rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
  
  #login:hover {
    background: linear-gradient(to right, #1d4ed8, #0ea5e9);
  }

  #register {
    align-self: center;
    color: #60a5fa;
    text-decoration: none;
    font-weight: 500;
  }

  #register:hover {
    text-decoration: underline;
  }

  .success {
    padding: 1rem;
    margin-bottom: 1rem;
    background: rgba(22,163,74,0.2);
    border: 1px solid rgba(22,163,74,0.5);
    border-radius: 1rem;
    text-align: center;
    color: #86efac;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    .form-box { width: 90vw; padding: 2rem; }
    h2 { font-size: 2rem; }
  }
</style>

<div class="page-bg">
  <div class="form-box">
    <h2>Forgot <span class="text-blue-700">Password?</span></h2>
    <p class="subtitle">
      Enter your email and we'll send a mail for resetting the password.
    </p>

    {#if message_accepted}
      <div class="success">
        {message}
      </div>
    {/if}

    <form action="?/forgot" method="POST" use:enhance={forgotResult}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="name@company.com"
        required
      />

      <div class="buttons">
        <button id="login" type="submit">Submit</button>
        <a id="register" href="/login" on:click={handleLogin}>Back to Login</a>
      </div>
    </form>
  </div>
</div>
