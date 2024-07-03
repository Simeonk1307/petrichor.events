<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import PopUpBox from '$lib/components/PopUpBox.svelte';
	import { PopUp } from '$lib/PopUp';
	import { onMount, setContext } from 'svelte';
	import Background from '$lib/components/Background.svelte';
	import { page } from '$app/stores';
    
    import {Header, Footer, BtpBtn} from '$lib/components/ui';
    // Dummy data in this helper file
    import {footerLinks, headerLinks} from '$lib/helper';

	export let data;
    let path:string;


    const title: string = 'Petrichor25'


	$: loading = false;
	$: PopUpObj = new PopUp("","",false,null) 
	let slotele:HTMLSlotElement

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
	<Header title={title} links={headerLinks}/>
{/if}

<Background path={path}/>

<slot></slot>
{#if path != '/'}
    <Footer title={title} links={footerLinks}/>
    <BtpBtn/>
{/if}


