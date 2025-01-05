<script lang="ts">
	import Strip from '$lib/components/Strip.svelte';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	export let event: any;
	export let user: string;
	export let emails = [];
	export let registerEvent: Function;
	let fee = event.fee
	let error = '';
	let event_card: HTMLElement;

	onMount(() => {
		VanillaTilt.init(event_card, {
			max:5
		})
		emails = [];
		for (let i = 0; i < event.minMember - 1; i++) {
			if (!event.isTeam) {
				fee += event.fee
			}
			emails.push('');
		}
		emails = emails;
	});

	const regsiterWithCheck = () => {
		const temp = [];
		for (const email of emails) {
			if (email == '') {
				error = 'Emails cannot be empty';
				window.scrollTo({ top: 0, behavior: 'smooth' });
				return;
			} else if (!email.includes('@')) {
				error = 'Invalid email';
				window.scrollTo({ top: 0, behavior: 'smooth' });
				return;
			} else if (temp.includes(email)) {
				error = 'Duplicate email';
				window.scrollTo({ top: 0, behavior: 'smooth' });
				return;
			}
			temp.push(email);
		}
		registerEvent();
	};

	const addParticipants = () => {
		if (emails.length < event.maxMember - 1) {
			if (!event.isTeam) {
				fee += event.fee
			}
			emails.push('');
		} else {
			error = 'Max limit reached';
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		emails = emails;
	};

	const removeParticipants = () => {
		if (emails.length > event.minMember - 1) {
			if (!event.isTeam) {
				fee -= event.fee
			}
			emails.pop();
		} else {
			error = 'Min limit reached';
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		emails = emails;
	};
</script>

<main>
		<div class="blank" />
		<div class="workshop_Registration">
			{#if error != ''}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					style="cursor: pointer;"
					on:click={() => {
						error = '';
					}}
				>
					<h4 style="color: red;">{error}</h4>
				</div>
			{/if}
			<div id="emailForm">
				<div class="event_info" bind:this={event_card}>
					<img src="{event.image_url}" />

					<div class="workshop_Title"><h1 style="text-align: center;">{event.name}</h1></div>
					<div><p>Min Members required: {event.minMember}</p></div>
					<div><p>Max Members allowed: {event.maxMember}</p></div>
					<div class="amt_btn">
						<button type="button" class="amount_button" disabled> {fee != 0 ? `AMOUNT: ${fee}` : "FREE"} </button>
					</div>
				</div>
				<div class="team_class" style="flex: {emails.length <= 1 ? "1" : "2"};">
					<h2>Team:</h2>
					<div class="emailFields" id="emailFields">
						<div class="email-container" id="email-container">
							<label for="emailLabel">Email (You):</label>
							<input type="email" id="emailid" bind:value={user} disabled />
						</div>
					</div>

					<div class="input_box">
						{#each emails as email, index}
							<div class="emailFields" id="emailFields">
								<div class="email-container" id="email-container">
									<label for="emailLabel">Email:</label>
									<input
										type="email"
										id="emailid"
										name={`email${index}`}
										placeholder="example@email.com"
										bind:value={emails[index]}
									/>
								</div>
							</div>
						{/each}
					</div>
					<div class="add_btn">
						<button type="button" on:click={addParticipants} class="add_button">ADD +</button>
						<button type="button" on:click={removeParticipants} class="add_button">REMOVE -</button>
					</div>
					<div class="submit_btn">
						<button class="submit_button" on:click={regsiterWithCheck}>Submit</button>
					</div>
				</div>
			</div>
		</div>
</main>

<style>
	* {
		box-sizing: border-box !important;
	}
	.emailFields {
		width: 48%;
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
	.workshop_Title {
		align-items: left;
	}

	.workshop_Registration {
		/* margin-left:10vw; */
		display: flex;
		gap: 100px;
		width: 100vw;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		justify-items: center;
		margin-top: 80px;
	}
	#email-container {
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	#emailForm {
		display: flex;
		width: 100vw;
	}
	.event_info {
		flex: 1;
		position: relative;
		padding: 20px;
		
		color: white;
		justify-content: center;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.event_info img {
		width: 90%;
		z-index: -1;
		position: absolute;
		max-height: 500px;
		aspect-ratio: 1;
		filter: brightness(0.5);
		border-radius: 10px;
		/* height: 90%; */
	}
	.team_class {
		flex: 2;
		margin: 0 20px;
		padding: 20px;
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

	.amount_button {
		border: 3px dashed grey;
		width: 150px;
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
	.input_box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 2%;
		transition: all 1s ease;
	}
	select,
	::placeholder {
		color: rgb(106, 105, 105);
	}

	.add_btn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 20px;
		/* margin: 20px 30px; */
		width: 100%;
	}
	@media (max-width: 720px) {
		.workshop_Registration{
			gap: 30px;
		}
		.amount_button{
			border: 1px solid grey;
		}
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
		#emailForm {
			flex-direction: column;
		}
		.emailFields {
			width: 100%;
		}
		.event_info img {
			/* width: 100%; */
			height: 100%;
		}
		.event_info {
			margin-inline: 10px;
		}
	}
	.submit_button {
		color: white;
		width: calc(40%, 100);
		font-weight: 700;
		padding: 0.6rem;
		padding-left: 0.9rem;
		padding-right: 0.9rem;
		background: linear-gradient(99.74deg, #06dbac, #bd00ff);
		border-radius: 15px;
		border: none;
		/* align-items: flex-end; */
	}

	button {
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
