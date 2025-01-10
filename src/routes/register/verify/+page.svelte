<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { getContext, onMount } from 'svelte';


	export let data;
	let message = `We have sent a verification link to your email: ${data.email}. Please verify your email to continue. If you haven't received the email, please resend the email using the resend button.`;

    const displayPopUp: Function = getContext('displayPopUp');
	const loading: Function = getContext('loading');

    const handleSubmit = async () => {
		loading(true);

		// @ts-ignore
		return async ({ result }) => {
			console.log(result)
			if (result.type == 'success' && result.data) {
                setTimeout(() => {
                    loading(false);
                    displayPopUp('Success', result.data.message, 4000, () => {goto('/login')});
                }, 100);
			} else {
				setTimeout(() => {
					loading(false);
					displayPopUp(
						'Alert',
						result.data.err ? result.data.err : result.data.message ? result.data.message : 'Unable to resolve the request. Please try again later',
						4000,
						() => {}
					);
				}, 100);
			}
		};
	};
    
    onMount(() => {
        if(!data.email){
            goto('/login');
        }
    });



</script>

<div class="form-container">
	<h2>Verify for <span id="Petrichor">Petrichor.events</span></h2>
	<div class="message">
		<p>{message}</p>
        <form use:enhance={handleSubmit} method="post">
            <input type="hidden" name="email" value="{data.email}" />
            <button type="submit" class="btn btn-primary">Resend Email</button>
        </form>
	</div>
	<!-- <div class="image" /> -->
</div>

<style>
	* {
		box-sizing: border-box !important;
		z-index: 2;
	}
    button {
        border: none;
        background-color: rgba(205, 204, 204, 0.85);
        padding: 15px;
        border-radius: 5px;
        font-size: 125%;
    }
	.form-container {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		margin-top: 80px;
		flex-direction: column;
	}
	.message{
		font-size: 20px;
		width: 90%;
		height: calc(100% - 170px);
		display: flex;
        flex-direction: column;
		text-wrap: wrap;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-family: var(--pfont);
	}
	h2 {
		font-size: 300%;
		font-weight: normal;
		margin: 10px;
	}
	#Petrichor {
		color: #910cea;
		font-weight: 600;
	}
	@media(max-width:900px){
		h2{
			font-size: 40px;
		}
	}
</style>
