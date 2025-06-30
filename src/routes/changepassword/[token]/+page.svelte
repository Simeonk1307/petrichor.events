<script lang="ts">
	import './ChangePassword.css'
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
          <input type="password" name="password" placeholder="••••••••" bind:value={password} required autocomplete="new-password" />
        </label>

        <label class="label">Confirm Password
          <input type="password" name="confirm_pass" placeholder="••••••••" bind:value={confirm_pass} required autocomplete="new-password" />
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
