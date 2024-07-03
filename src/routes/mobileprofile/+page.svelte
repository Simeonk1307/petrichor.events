<script>
	import MobileProfile from "$lib/components/MobileProfile/MobileProfile.svelte";
    let profileData = {
		username: 'Username',
		mobile: 'Phone',
		college: 'College',
		graduation: 'Grad'
	};
</script>

<MobileProfile profileData={profileData}/>