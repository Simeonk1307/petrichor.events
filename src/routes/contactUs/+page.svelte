<script lang="ts">
	import { enhance } from "$app/forms";
    import SpaceButton from "$lib/components/SpaceButton.svelte";
	import { getContext } from "svelte";

    const displayPopUp: Function = getContext('displayPopUp');
	const loading: Function = getContext('loading');

    const feedbackResult = () => {
        loading(true)

        // @ts-ignore
        return async ({result})  => {
            loading(false)
            if (result.type == "success" && result.data){
                const rdata = result.data;
                if (rdata.success){
                    displayPopUp (
                        "Success","Your Message have been received by us. Thank you for visiting our Website.",4000 , () =>{}
                    )

                    return
                }
            }
            displayPopUp(
                "Error",result.data.err ? result.data.err : "Unable to process the request", 3000, () => {}
            )

        }
    }

</script>

<main>

    <div class="banner contactus" id="contact">
        <h1 class="atmos">Contact Us</h1>
        <form action="?/feedback" method="post" use:enhance={feedbackResult}>
            <input type="text" placeholder="Name" name="name" required />
            <input type="text" placeholder="Email" name="email" required />
            <textarea placeholder="Feedback" name="content" required />
            <SpaceButton text="Submit Feedback"/>
        </form>
    </div>
</main>

<style>
    main{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .banner{
        width: 60%;
    }
    h1{
        display: flex;
        font-size: 3rem;
        z-index: 11;
        position: relative;
        justify-content: center;
    }
    form{
        position: relative;
        z-index: 10;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    input,textarea{
        width: 100%;
        padding: 20px 20px;
        background-color: rgb(60, 60, 60);
        color: rgb(157, 154, 154);
        border-radius: 25px;
        box-shadow: none;
        font-size: 20px;
        border: none;
    }
    @media (max-width: 450px){
        input,textarea{
            padding: 10px 10px;
        }
        h1{
            font-size: 1.5rem;
            text-align: center;
        }
        .banner{
            width: 100%;
        }
        form{
            padding: 10px;
        }
    }
</style>
