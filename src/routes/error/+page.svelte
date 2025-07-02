<script>
    import Strip from "$lib/components/Strip.svelte";
</script>

<main>
    <div>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
        <h1>Coming Soon!</h1>
    </div>
</main>

<Strip />


<style>
    main{
        display: grid;
        place-items: center;
        height: 85vh;
        font-size: 30px;
    }
    h1{
        width: 30rem;
        margin-inline: 0.5rem;
    }
    div{
        position: absolute;
        display: flex;
        animation: loop 2s linear infinite;
        border-width: 10px 0px 10px 0px;
        border-style: solid;
        border-color: white;
    }

    @keyframes loop{
        from{
            left: 0
        }
        to{
            left: -31rem;
        }
    }
</style>  