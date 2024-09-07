<script lang="ts">
// @ts-nocheck
    import copy from "$lib/assets/copy.svg";
    import tick from "$lib/assets/tick.svg";
    import { goto } from '$app/navigation';
    import Globe from '$lib/assets/svgs/globe.svg';
    import hand from '$lib/assets/HomePage/hand.png';
	import { user, invalidate, loggedIn, access_token } from '$lib/stores.js';
	import { getContext,onMount } from 'svelte';
    
    export let data;
    const getData:Function = getContext('getData')
    let displayOn = false;

    async function copyToClipBoard() {
        await navigator.clipboard.writeText($user.user_data.CACode).then(() => {
            // displayPopUp("Key Copied Successfully")
            displayOn = true;
            setTimeout(() => {
                displayOn = false;
            }, 1000);
        });
    }

    onMount(()=>{
        if (!$loggedIn){
			getData()
		}
        access_token.set(data.accessToken)
        if (!$loggedIn || $invalidate){
            goto('/login?to=/CA/profile')
        }
    })
    

</script>
<main>
<div class="container">
    
 
    <div class="info">
        <div class="content">
            <div class="greeting">
                <h1><p>Hii <span>{$user.user_data.username}!</span></p></h1>
                <!-- <h1><p>Hii <span>{$user.user_data.username}!</span></p></h1> -->
            </div> 
            <div class="parent">
                <div class="information">
                    <div class="for_ca">
                        <p class="title">Your CA Code</p>
                        <div class="code">
                            <p>{$user.user_data.CACode}</p>
                            <button type="button" on:click={copyToClipBoard}>
                                <img
                                        src={displayOn ? tick : copy}
                                        alt=""
                                    />
                            </button>
                            <!-- <p>CA Code</p> -->
                        </div>
                    </div>
                    <div class="for_reg">
                        <p class="title">Total Registration</p>
                        <div class="code">
                            <p>{$user.user_data.registrations}</p>
                            <!-- <p>Registrations</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="image">
            <img class="image1" alt="logo" src={hand}>
        </div>
    </div>
</div>
<div class="strip_holder">
    <div class="strip">
        <div class="strip1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
            <div class="banner">&nbsp;PETRICHOR</div>
        </div>
        <div class="strip1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
            <div class="banner">&nbsp;PETRICHOR</div>
        </div>
        <div class="strip1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
            <div class="banner">&nbsp;PETRICHOR</div>
        </div>
        <div class="strip1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
            <div class="banner">&nbsp;PETRICHOR</div>
        </div>
        <div class="strip1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
            <div class="banner">&nbsp;PETRICHOR</div>
        </div>
        <div class="strip1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
            <div class="banner">&nbsp;PETRICHOR</div>
        </div>
    </div>
</div>

</main>

<style>
    main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: transparent;
		background-color: transparent;
		z-index: 11 !important;
        /* border: 2px solid red; */
        margin: 0;
        padding: 0;
		/* padding: 5em 0; */
	}
    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;

        box-sizing: border-box;

        width: 100vw;
        flex: 3;
        height: 80%;
    }
    
    .greeting{
        /* border: 1px solid orange; */
        padding-left: 5vw;
        font-weight: bold;
        margin-bottom: 10%;
    }
    .greeting span{
        color: rgb(9 170 9);
    }
    .info{
        /* border: 1px solid yellowgreen; */
        display: flex;
        flex-direction: row;
        height: 100%;
        position: relative;
    }
    .content{

        /* border: 2px solid rebeccapurple; */
        width: 50%;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        
    }
    .content .information{
        align-items: center;
        justify-content: center;
    }
    
    .information{
        display: flex;
        flex-direction: column;
        width: 90%;
        align-items: center;
        justify-content: center;
        /* margin: 5% 5% 5% 5%; */
        /* border: 2px solid rgb(165, 4, 44); */
    }
    .parent{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .for_ca{
        width: 80%; 
        /* height: 111px; */ 
        /* border: 2px solid yellow; */
        /* font-size: 2rem; */
        margin-bottom: 10%;
    }
    .code{
        /* border: 1px solid orangered; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        letter-spacing: 2px;
        padding: 0;
        margin: 0;
        border-radius: 10px;
        background-color: #919191 !important;
    }
    button{
        border: none    ;
        padding-right: 10px;
    }
    button:active{
        border: none;
    }
    .code img {
        height: 25px;
        width: 25px;
        cursor: pointer;
        transition: all 1s ease-in-out;
    }

    .code p{
        font-size: 30px;
        margin: 2%;
        /* background-color: #919191; */
    }
    .for_reg{
        width: 80%;
        /* border: 2px solid yellow; */
    }
    .image {
    /* border: 2px solid orangered; */
    height: 100%; 
    width: 50%;   
    display: flex;
    justify-content: center; 
    align-items: center;    
    overflow: hidden;      
    }
    .image img {
        max-width: 100%;
        max-height: 100%; 
        object-fit: contain; 
    }
    .code{
        display: flex;
        color: black;
        background-color: white;
    }

    .title{
        font-size: 1rem;
        letter-spacing: 1px;
        /* border: 1px solid green; */
        margin-bottom: 6px;
    }

    .strip_holder {
		
		flex: 2;

		width: 100vw;
		max-height: 35px;
		align-items: center;
		
		overflow-x: hidden;
		margin: 2rem 0;
		border-top: 2px solid white;
		border-bottom: 2px solid white;
		padding: 12px 0 ;
		opacity: 60%;
	}
	.strip{
		display: flex;
		align-items: center;
		height: 100%;
		/* Apply animation to this element */
		-moz-animation: example1 5s linear infinite;
		-webkit-animation: example1 5s linear infinite;
		animation: example1 5s linear infinite;
	}
	.strip1 {
		display: flex;
		justify-content: center;
		min-width: max(20%,150px);
	}

	.banner {
		display: flex;
		justify-content: center;
	}
    @media (max-width: 800px) {
            .image {
                display: none; /* Hide the image content */
            }
            .content{
                width: 100%;
            }
            .information{
                margin-top: 10px;
            }
            .greeting{
                padding-left: 7vw;
            }
        }
    @media (max-width: 376px) {
        .for_ca{
            width: 100%;
        }
        .for_reg{
            width: 100%;
        }
        .code{
            font-size: medium;
        }
        .title{
            font-size: 0.8rem;
        }
    }
    @media (min-width: 1025px) {
        .greeting{
            font-size: 1.4rem;
        }
    }

    /* Move it (define the animation) */
	@-moz-keyframes example1 {
		0% {
			-moz-transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(min(-20%,-150px));
		}
	}
	@-webkit-keyframes example1 {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(min(-20%,-150px));
		}
	}
	@keyframes example1 {
		0% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(min(-20%,-150px)); /* Firefox bug fix */
			-webkit-transform: translateX(min(-20%,-150px)); /* Firefox bug fix */
			transform: translateX(min(-20%,-150px));
		}
	}

</style>