<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import PopUpBox from '$lib/components/PopUpBox.svelte';
	import { PopUp } from '$lib/PopUp';
	import { onMount, setContext } from 'svelte';
	import type {data} from '$lib/types'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import Background from '$lib/components/Background.svelte';
	import { page } from '$app/stores';
    import { tmp_data, footer } from "$lib/index.js"

	export let data;
    let path:string;

	$: loading = false;
	$: PopUpObj = new PopUp("","",false,null) 

	let winsize = 3000;
	onMount(() => {
		winsize = window.innerWidth;
	});

	function updateLoading(val:boolean){
		loading = val
	}
	
	/**
	 * display a popUp Box
	 * @param title
	 * @param message
	 * @param timeOutTime
     */
	const displayPopUp=(title:string,message:string,timeOutTime:number,callback:CallableFunction)=>{ 
		// console.log("cal" + callback)
		// temporary condition until other modes are made
        PopUpObj.title = title
        PopUpObj.message = message
		PopUpObj.afterEnd= callback;
        PopUpObj.totalTime = timeOutTime;
        PopUpObj.isOn = true
        return
    }
	setContext('displayPopUp',displayPopUp)
	setContext('loading',updateLoading)
    $: path = $page.url.pathname
</script>

<Loading spinning={loading} />

{#if (PopUpObj.isOn)}
	<PopUpBox bind:PopUpObj= {PopUpObj}/>
{/if}

{#if path != '/'}
	<Header data={tmp_data} />
{/if}

<Background path={path}/>

<slot></slot>
{#if path != '/'}
    <Footer data={footer}/>
{/if}


