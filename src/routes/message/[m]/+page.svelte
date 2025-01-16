<script lang="ts">

	export let data;
	let message = 'Message';
	if (data.message){
		message = data.message
	}



</script>

<div class="form-container">
	<h2>Message from <span id="Petrichor">Petrichor.events</span></h2>
	<div class="message">
		<p>{message}</p>
	</div>
	<!-- <div class="image" /> -->
</div>

<style>
	* {
		box-sizing: border-box !important;
		z-index: 2;
	}
	.form-container {
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		margin-top: 100px;
		flex-direction: column;
	}
	.message{
		font-size: 20px;
		width: 90%;
		height: calc(100% - 170px);
		display: flex;
		text-wrap: wrap;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-family: var(--pfont);
	}
	h2 {
		font-size: 300%;
		font-weight: normal;
		margin: 10px;
	}
	#Petrichor {
		color: #910cea;
		font-weight: 600;
	}
	@media(max-width:900px){
		h2{
			font-size: 40px;
		}
	}
</style>
