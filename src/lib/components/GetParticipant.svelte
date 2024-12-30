<script lang="ts">
    import Strip from '$lib/components/Strip.svelte';
	import { onMount } from 'svelte';

    export let event: any;
	export let user: string;
    export let emails = [];
	export let registerEvent: Function; 
	let error =""

	onMount(() => {
		emails = []
		for (let i =0; i < event.minMember - 1; i ++) {
			emails.push('')
		}
		emails = emails
	})

	const regsiterWithCheck= () => {
		const temp = []
		for (const email of emails) {
			if (email == "") {
				error = "Emails cannot be empty"
				window.scrollTo({ top: 0, behavior: 'smooth' });
				return
			} else if (!email.includes('@') ) {
				error = "Invalid email"
				window.scrollTo({ top: 0, behavior: 'smooth' });
				return
			} else if (temp.includes(email)) {
				error = "Duplicate email"
				window.scrollTo({ top: 0, behavior: 'smooth' });
				return
			}
			temp.push(email)
		}
		registerEvent()
	}

	const addParticipants = () => {
		if (emails.length < event.maxMember - 1) {
			emails.push('')
		} else {
			error = "Max limit reached"
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		emails = emails
	}

	const removeParticipants = () => {
		if (emails.length > event.minMember - 1) {
			emails.pop()
		} else {
			error = "Min limit reached"
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		emails = emails
	}

</script>

<main >
    <div >
        <div class="blank" ></div>
        <div class="workshop_Registration">
			{#if error != ""}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div style="cursor: pointer;" on:click={() => {error = ""}} >
					<h4 style="color: red;">{error}</h4>	
				</div>
			{/if}
            <div id="emailForm">
            <div class="workshop_Title"><h1>{event.name}</h1></div>
            <div><p>Min Members required: {event.minMember}</p></div>
            <div><p>Max Members allowed: {event.maxMember}</p></div>
            <div class="amt_btn">
                <button type="button" class="amount_button" disabled> AMOUNT: {event.fee} </button>   
            </div>
            <div class="team_class">
                <h2> Team:</h2>
				<div class="emailFields" id="emailFields"> 
					<div class="email-container" id="email-container">
						<label for="emailLabel">Email (You):</label>
						<input type="email" id="emailid" bind:value={user} disabled/>
					</div>
				</div>
				
                <div class="input_box" >
					{#each emails as email,index}  
						<div class="emailFields" id="emailFields"> 
							<div class="email-container" id="email-container">
								<label for="emailLabel">Email:</label>
								<input type="email" id="emailid" name={`email${index}`} placeholder="example@email.com" bind:value={emails[index]}/>
							</div>
						</div>
					{/each}
                </div>
                <div class="add_btn">
                    <button type="button" on:click={addParticipants} class="add_button">ADD +</button>
                    <button type="button" on:click={removeParticipants} class="add_button">REMOVE -</button>
                </div>
                <div class="submit_btn">
                    <button class="submit_button"on:click={regsiterWithCheck}>Submit</button>
                </div>
            </div>
		</div>

        </div>
		<Strip />	

</main>


<style>
    * {
		box-sizing: border-box !important;
	}
    main {
		z-index: 11;
		position: relative;
		min-height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
    
    .blank {
		height: 80px;
	}
    .workshop_Title{
        margin-top: 7vh;
		align-items: left;
    }

    .workshop_Registration {
		/* margin-left:10vw; */
		display: flex;
		width: 100vw;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-items: center;
	}

    form {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
    #email-container {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    }
/* 
    #emailid{

    } */
    #emailLabel {
        margin: 5px;
    }
    #emailid {
		height: 50px;
		width: 100%;
		font-size: 100%;
		padding: 10px 20px;
		border-radius: 10px;
		background-color: #40413ebb;
		border: none;
		color: white;
	}

    .amount_button{
        border : 3px dashed grey;
        width : 150px;
        background-color: transparent;
        border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: center;
        margin: 1em 0;
		font-weight: 100;
		cursor: default;
    }
    /* #email-container input[type="email"] {
        height: 40px;
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    } */

    /* .email-container input[type="email"]::placeholder {
        color: #888;
    } */
    
    /* label{

    } */
	.team_class{
	/* align-items: center; */
	}

    .input_box {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		transition: all 1s ease; 
	}
    select,
	
	::placeholder {
		color: rgb(106, 105, 105);
	}
	/* label {
		margin: 5px;
	} */
	/* .input_box p {
		width: 100%;
		color: red;
		margin: 0;
		text-align: end;
		padding-right: 5px;
	} */

    /* button {
		font-size: 1rem;
		border-radius: 10rem;
		padding: 2% 7%;
		background-color: #232423;
		color: white;
		font-weight: bold;
		border: none;
	} */
	.add_btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		/* margin: 20px 30px; */
		width: 100%;
	}
	@media (max-width: 720px) {
		.form {
			width: 100vw;
			margin: 0 10vw;
		}
		.input_box {
			font-size: smaller;
		}
		input {
			height: 40px;
		}
    }
    .submit_button{
    color: white;
    width: calc(40%,100);
    font-weight: 700;
    padding: 0.4rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    background: linear-gradient(99.74deg, #06dbac, #bd00ff);
    border-radius: 15px;
    border: none;
	/* align-items: flex-end; */
    }

    button{
    width: 150px;
    background-color: transparent;
    border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
    margin: 1em 0;
		font-weight: 100;
    }

	

</style>
