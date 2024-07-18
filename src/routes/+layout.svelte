<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import PopUpBox from '$lib/components/PopUpBox.svelte';
	import { PopUp } from '$lib/PopUp';
	import { onMount, setContext } from 'svelte';
	import Background from '$lib/components/Background.svelte';
	import { page } from '$app/stores';
	import { POST, API, defaultUser } from '$lib/index.js';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores.js';
	import { beforeNavigate } from '$app/navigation';
    
    import {Header, Footer, BtpBtn} from '$lib/components/ui';
    // Dummy data in this helper file
    import {footerLinks, headerLinks} from '$lib/helper';

	let path: string;

	let loading = false;
	let PopUpObj = new PopUp('', '', false, null);
	let currentY = 0;

	beforeNavigate(async () => {
		if (window){
			currentY = window.scrollY
			// console.log(currentY)
		}
		const access_token = $access_token;
		if (access_token == null || !$loggedIn) {
			invalidate.set(true);
			sessionStorage.setItem('loggedIn', 'false');
			sessionStorage.setItem('user',  JSON.stringify(defaultUser));
		}
		if ($invalidate && $loggedIn) { // if not loggedIn then no need to refesh
			await whoami(access_token ?? "a")
		}
	});

	async function getData() {
		const data = sessionStorage.getItem('user') ?? JSON.stringify(defaultUser)
		user.set(JSON.parse(data));
		if (data == JSON.stringify(defaultUser) || data == "{}") {
			if ($access_token == null || $access_token == undefined){
				// user have not logged In no need for refreshing the data through whoami

				loggedIn.set(false)
				invalidate.set(true)

			}else{ // user may have logged in
				await whoami($access_token ?? "a") 
			}
		} else {
			loggedIn.set(Boolean(sessionStorage.getItem('loggedIn')) ?? false);
		}
	}

	async function whoami(accessToken: string) {
		console.log("Reloading")
		return await POST(
			API.whoami,
			{
				getUser: true,
				getEvents: true
			},
			accessToken
		)
			.then((res) => res.json())
			.then((res) => {
				if (res.status == 200) {
					// invalidate
					invalidate.set(false);
					loggedIn.set(true);
					access_token.set(accessToken);
					user.set({
						user_data: res.user_data,
						user_events: res.user_events
					});
					console.log(res)
					sessionStorage.setItem('user', JSON.stringify($user));
					sessionStorage.setItem('loggedIn', 'true');
					return true;
				} else {
					invalidate.set(true);
					sessionStorage.setItem('loggedIn', 'false');
					sessionStorage.setItem('user', JSON.stringify(defaultUser));
					return false;
				}
			})
			.catch((err) => {
				console.log(err.toString());
				invalidate.set(true);
				sessionStorage.setItem('loggedIn', 'false');
				sessionStorage.setItem('user',  JSON.stringify(defaultUser));
				return false;
			});
	}

    const title: string = 'Petrichor25'


	$: loading = false;
	$: PopUpObj = new PopUp("","",true,null) 

	let winsize = 3000;
	onMount(async () => {
		// console.log("adas")
		await getData();
		// console.log($user)
		winsize = window.innerWidth;
		window.onscroll = (e) => {
			currentY = window.scrollY
			// console.log(currentY)
		}
	});

	function updateLoading(val: boolean) {
		loading = val;
	}

	/**
	 * display a popUp Box
	 * @param title
	 * @param message
	 * @param timeOutTime
	 */
	const displayPopUp = (
		title: string,
		message: string,
		timeOutTime: number,
		callback: CallableFunction
	) => {
		// console.log("cal" + callback)
		// temporary condition until other modes are made
		PopUpObj.title = title;
		PopUpObj.message = message;
		PopUpObj.afterEnd = callback;
		PopUpObj.totalTime = timeOutTime;
		PopUpObj.isOn = true;
		return;
	};
	setContext('displayPopUp', displayPopUp);
	setContext('loading', updateLoading);
	setContext('getData', getData);
	setContext('whoami', whoami);
	$: path = $page.url.pathname;
</script>

<Loading spinning={loading} />

{#if PopUpObj.isOn}
	<PopUpBox bind:PopUpObj currentY={currentY}/>
{/if}

{#if path != '/'}
	<Header title={title} links={headerLinks}/>
{/if}

<Background {path} />

<slot />
{#if path != '/'}
    <Footer title={title} links={footerLinks}/>
    <BtpBtn/>
{/if}
