<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import PopUpBox from '$lib/components/PopUpBox.svelte';
	import { PopUp } from '$lib/PopUp';
	import { onMount, setContext } from 'svelte';
	import type { data } from '$lib/types';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Background from '$lib/components/Background.svelte';
	import { page } from '$app/stores';
	import { tmp_data, footer, POST, API, defaultUser } from '$lib/index.js';
	import { access_token, invalidate, loggedIn, user } from '$lib/stores.js';
	import { beforeNavigate } from '$app/navigation';

	export let data;
	let path: string;

	let loading = false;
	let PopUpObj = new PopUp('', '', false, null);

	beforeNavigate(async () => {
		console.log($invalidate)
		const access_token = $access_token;
		if (access_token == null || !$loggedIn) {
			invalidate.set(true);
			sessionStorage.setItem('loggedIn', 'false');
			sessionStorage.setItem('user',  JSON.stringify(defaultUser));
		}
		if ($invalidate) {
			console.log('Reloading');
			await POST(
				API.whoami,
				{
					getUser: true,
					getEvents: true
				},
				access_token ?? ''
			)
				.then((res) => res.json())
				.then((res) => {
					console.log(res)
					if (res.status == 200) {
						// invalidate
						invalidate.set(false);
						loggedIn.set(true);
						console.log(res);
						user.set({
							user_data: res.user_data,
							user_events: res.user_events
						});
						sessionStorage.setItem('user', JSON.stringify(user));
						sessionStorage.setItem('loggedIn', 'true');
					} else {
						invalidate.set(true);
						loggedIn.set(false)
						sessionStorage.setItem('loggedIn', 'false');
						sessionStorage.setItem('user',  JSON.stringify(defaultUser));
					}
				})
				.catch((err) => {
					console.log(err.toString());
					invalidate.set(true);
					loggedIn.set(false);
					sessionStorage.setItem('loggedIn', 'false');
					sessionStorage.setItem('user',  JSON.stringify(defaultUser));
				});
			console.log("o")
		}
	});

	async function getData() {
		const data = sessionStorage.getItem('user') ?? JSON.stringify(defaultUser)
		user.set(JSON.parse(data));
		if (data == JSON.stringify(defaultUser) || data == "{}") {
			await whoami($access_token ?? "") 
		} else {
			loggedIn.set(Boolean(sessionStorage.getItem('loggedIn')) ?? false);
		}
	}

	async function whoami(accessToken: string) {
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
					sessionStorage.setItem('user', JSON.stringify(user));
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

	let winsize = 3000;
	onMount(async () => {
		// console.log("adas")
		await getData();
		console.log($user)
		winsize = window.innerWidth;
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
	<PopUpBox bind:PopUpObj />
{/if}

{#if path != '/'}
	<Header data={tmp_data} />
{/if}

<Background {path} />

<slot />
{#if path != '/'}
	<Footer data={footer} />
{/if}
