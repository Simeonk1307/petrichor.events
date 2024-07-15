<script lang="ts">
// @ts-nocheck

    
    import { goto } from '$app/navigation';
    import hand from '$lib/assets/HomePage/hand.png';
	import { user, invalidate, loggedIn, access_token } from '$lib/stores.js';
	import { getContext,onMount } from 'svelte';
    
    export let data;
    const getData:Function = getContext('getData')
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

<div class="container">
    
    <div class="greeting">
        <h1><p>Hii <span>{$user.user_data.username}!</span></p></h1>
    </div>  
    <div class="info">
        <div class="content">
            <div class="for_ca">
                <p>Your CA Code</p>
                <div class="code">
                    <p>{$user.user_data.CACode}</p>
                </div>
            </div>
            <div class="for_reg">
                <p>Total Registration</p>
                <div class="code">
                    <p>{$user.user_data.registrations}</p>
                </div>
            </div>
        </div>
        <div class="image">
            <img class="image1" alt="logo" src={hand}>
        </div>
    </div>
   
</div>



<style>
    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        /* border: 1px solid red; */
        box-sizing: border-box;
        height: 100vh;
        width: 100vw;
    }
    
    .greeting{
        /* border: 1px solid green; */
        padding-left: 5vw;
        font-weight: bold;

    }
    .greeting span{
        color: rgb(83, 83, 141);
    }
    .info{
        /* border: 1px solid yellow; */
        display: flex;
        flex-direction: row;
        position: relative;
    }
    .content{
        width: 50%;
    }
    .image {
    /* border: 2px solid green; */
    height: 70vh; 
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
</style>