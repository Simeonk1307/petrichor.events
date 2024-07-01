<script lang="ts">

</script>


<div>
    <h1>HOME PAGE</h1>
    <a  href="/login">Login</a>
    <button on:click={()=>{
        window.open("http://127.0.0.1:8000/auth/login/?redirect=www.google.com&client_pubkey=asdsad")
    }}>Cauth</button>
</div>


<style>
    
</style>