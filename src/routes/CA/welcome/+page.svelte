<script lang="ts">
  import hand from '$lib/assets/HomePage/hand-flower.png';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { API, defaultUser, POST } from '$lib';
  import { access_token, invalidate, loggedIn, user } from '$lib/stores';
  import { getContext } from 'svelte';

  let buttonText = "Apply CA";
  let CAbutton: HTMLButtonElement;
  let visible = false;

  const getData: Function = getContext('getData');
  const displayPopUp: Function = getContext("displayPopUp");
  const loading: Function = getContext("loading");

  export let data;

  onMount(() => {
    setTimeout(() => (visible = true), 10);
    if (!$loggedIn) getData();
    access_token.set(data.access_token);

    if ($loggedIn && !$invalidate) {
      const user_data = $user['user_data'];
      if (!user_data) return getData();

      const CAProfile = user_data.CACode;
      const registrations = user_data['registrations'];

      if (CAProfile == "") {
        buttonText = "Apply CA";
      } else if (registrations == -1) {
        CAbutton.disabled = true;
        buttonText = "Applied";
      } else {
        buttonText = "CA Profile";
      }
    }

    if (data.generate != null) {
      open_caProfile();
    }
  });

  function handleClick() {
    if (buttonText == "Apply CA") {
      generateCACode();
    } else if (buttonText == "CA Profile") {
      open_caProfile();
    }
  }

  function open_caProfile() {
    if ($invalidate || !$loggedIn) {
      goto('/login?to=/CA/welcome?generate=false');
    } else {
      if (!$user['user_data']) return goto('/login');

      if ($user['user_data']['CACode'] == '') {
        displayPopUp("Message", "You don’t have a CA account.", 2000, () => {});
      } else if ($user['user_data']['registrations'] == -1) {
        displayPopUp("Message", "Your CA account is not verified yet.", 3000, () => {});
      } else {
        goto('/CA/profile');
      }
    }
  }

  async function generateCACode() {
    if ($invalidate || !$loggedIn) {
      goto("/login?to=/CA/welcome");
    } else {
      loading(true);
      const accesstoken = $access_token;

      await POST(API.generateCA, {}, accesstoken ?? undefined)
        .then(res => res.json())
        .then(res => {
          loading(false);
          if (res.success) {
            displayPopUp(
              "Message",
              "CA account generated successfully. Please login again to reflect changes.",
              5000,
              () => {
                invalidate.set(true);
                loggedIn.set(false);
                user.set(defaultUser);
                access_token.set(null);
                sessionStorage.clear();
                goto('/CA/profile');
              }
            );
          } else {
            displayPopUp("Message", res.message ?? "Unable to generate CA account", 5000, () => {});
          }
        })
        .catch(err => {
          loading(false);
          displayPopUp("Error", `Some error occurred: ${err.toString()}`, 2000, () => {});
        });
    }
  }
</script>

<main class="{visible ? '' : 'hidden'}">
  <!-- BACKGROUND GLOWS -->
  <div id="g1-4"></div>
  <div id="g1-5"></div>
  <div id="g1-6"></div>

  <div class="first-block">
    <!-- Hand Image -->
    <div class="imagediv" draggable="false">
      <img src={hand} alt="Glowing hand with flower" draggable="false" />
    </div>

    <div class="content">
      <div class="title">
        <span class="heading">CA PORTAL</span>
      </div>

      <div class="caption">
        Petrichor - the annual techno cultural fest of IIT Palakkad is back again, 
        and better than ever before. Also, yes, it's offline. We, the students of IIT 
        Palakkad, conduct Petrichor every year, and made sure last year's event was 
        enthralling for all its participants. Now the wait is over; with just the perfect 
        mix of cultural and technical events, we plan on making Petrichor'24 an 
        unforgettable experience for you. Trust us when we say that you won't miss out 
        on anything. Check out our website as it has answers to all the questions that 
        you might have. Stay tuned and brace yourselves for the journey of a lifetime 
        with Petrichor'24!
      </div>

      <div class="button_area">
        <button type="button" on:click={handleClick} bind:this={CAbutton}>
          {buttonText}
        </button>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    position: relative;
    color: #e6e6e6;
    font-family: serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .first-block {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    gap: 3rem;
    flex: 1;
  }

  .content {
    max-width: 600px;
    text-align: center;
  }

  .title {
    margin-bottom: 2rem;
  }

  .heading {
    font-size: 3.5rem;
    font-weight: 400;
    color: #fff;
  }

  .caption {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #bdbdbd;
  }

  .button_area {
    margin-top: 2.5rem;
  }

  button {
		padding: 0.5rem 4.4rem;
		border-radius: 50px;
		border: 1px solid #00e3ff;
		background: transparent;
		color: #e6e6e6;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.25s ease;
		font-family: serif;
		position: relative;
		overflow: hidden;
	}

	button::before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 200%;
		height: 100%;
		background: linear-gradient(
			120deg,
			transparent,
			rgba(0, 227, 255, 0.3),
			transparent
		);
		transition: all 0.4s ease;
	}

	button:hover::before {
		left: 100%;
	}

	button:hover {
		background: #00e3ff;
		color: #000;
		transform: scale(1.05);
		box-shadow: 0 0 20px rgba(0, 227, 255, 0.6);
	}

	button:active {
		transform: scale(0.96);
		box-shadow: 0 0 10px rgba(0, 227, 255, 0.8);
	}

	button:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(0, 227, 255, 0.4);
	}


  .imagediv img {
    max-width: 700px;
    filter: drop-shadow(0 0 50px rgba(0, 227, 255, 0.6));
  }


  @media (max-width: 900px) {
    .first-block {
      flex-direction: column-reverse;
      text-align: center;
      padding: 3rem 1.5rem;
    }

    .imagediv img {
      max-width: 500px;
      opacity: 0.6;
    }

    .heading {
      font-size: 2.8rem;
    }

    .caption {
      font-size: 1rem;
    }
  }
</style>
