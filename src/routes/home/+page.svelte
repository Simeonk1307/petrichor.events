<script lang="ts">
    import Workshop from "../../lib/components/Workshop/Workshop.svelte";
</script>



<div>
    <Workshop/>
    <a  href="/login">Login</a>
    <button on:click={()=>{
        window.open("http://127.0.0.1:8000/auth/login/?redirect=www.google.com&client_pubkey=asdsad")
    }}>Cauth</button>
</div>
<Workshop/>
