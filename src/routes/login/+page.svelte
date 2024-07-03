<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from '$app/navigation';
	import { page } from "$app/stores";
	import { invalidate } from "$lib/stores";
	import { getContext } from "svelte";

	/** @type {import('./$types').ActionData} */
	export let form;
	// console.log(form)
	export let data:any;

	const displayPopUp:Function = getContext('displayPopUp')
	const loading:Function = getContext('loading')


	function afterMessage() {
		// console.log("her")
		goto(`/login${$page.url.search}`);
	}
	$: loginResult = () => {
		loading( true)

		// @ts-ignore
		return async ({ result }) => {
			loading( false);
			// console.log(result)
			if (result.type == "success" && result.data){
				const data = result.data
				// console.log(data)
				if (data.success){
					invalidate.set(true)
					goto('/profile')
				}else{
					displayPopUp(
						"Alert",
						data,
						4000,
						afterMessage
					)
				}
			}else{
				// console.log(result)
				setTimeout(() => {
					displayPopUp(
						"Alert",
						result.data.err ? result.data.err : "Invalid Credentials",
						2000,
						afterMessage
					)
				}, 100);
			}
		}
	}



</script>

<div class="login-card">
    <form >
        <input type="text" placeholder="Username" class="input-field">
        <input type="password" placeholder="Password" class="input-field">
        <div class="links-container">
            <a href="#">Register Account</a>
            <a href="#">Forgot Password</a>
        </div>
        <div class="login-button-container">
            <button class="login-button">Login</button>
        </div>
    </form>
</div>

<style>
    .login-card {
        width: 100%;
        max-width: 400px;
        padding: 3vw 5vw; 
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10px);
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: auto;
        margin-top: 11vh;
        margin-bottom: 11vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s ease;
    }

    .input-field {
        width: 100%;
        padding: 20px;
        margin-bottom: 2vh;
        margin-top: 3vh;
        background-color: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.2rem;
        border: none;
        border-radius: 20px;
        box-sizing: border-box;
        transition: all 0.3s ease;
    }

    .login-button-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .login-button {
        padding: 20px 60px;
        background-color: rgba(0, 0, 0, 0.75);
        color: white;
        font-weight: bolder;
        font-size: 1rem;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        transition: background-color 0.3s ease;
    }

    .login-button:hover {
        background-color: rgba(0, 0, 0, 1);
    }

    .links-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
    }

    .links-container a {
        color: #000;
        text-decoration: none;
        margin-bottom: 40px;
    }

    @media (max-width: 500px) {
        .login-card {
            max-width: 350px;
            border-radius: 20px;
        }

    }
</style>
