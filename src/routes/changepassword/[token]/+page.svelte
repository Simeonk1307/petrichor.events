<script lang="ts">
	// import './ChangePassword.css'
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

<main>
  <div class="container">
    <div class="login">
      <h2><strong>Change Password</strong></h2>
      <form method="POST" action="?/change" use:enhance={changeResult}>
        <label class="label">New Password
          <input type="password" name="password" placeholder="••••••••" required autocomplete="new-password" />
        </label>

        <label class="label">Confirm Password
          <input type="password" name="confirm_pass" placeholder="••••••••" required autocomplete="new-password" />
        </label>

        <div class="flex justify-center mt-6">
          <button id="login" type="submit" class="login-btn">Reset Password</button>
        </div>

        <p class="signup-text">
          <a href="/login" class="signup-link">Go back to Login</a>
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