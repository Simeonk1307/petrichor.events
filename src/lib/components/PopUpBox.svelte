<script lang="ts">
    import { onMount } from "svelte";
    import { PopUp } from "$lib/PopUp";

    let popUpDialog:HTMLDialogElement;
    export let PopUpObj:PopUp;
    let title = PopUpObj.title;
    let content = PopUpObj.message;
    let x:any;
    $:width = 0;

    onMount(()=>{
        popUpDialog.onclose = (e) => {
            clearInterval(x)
            PopUpObj.isOn = false
            if (PopUpObj.afterEnd != null) 
                PopUpObj.afterEnd()
        }

        popUpDialog.showModal()

        width = 0;
        if (PopUpObj.totalTime != 0){
            let initialTime = Date.now() 
            let count = 0;
            x = setInterval(()=> {
                width = (count / PopUpObj.totalTime * 100);
                let newt = Date.now()
                count += newt - initialTime;
                initialTime = newt
                if (count >= PopUpObj.totalTime){
                    popUpDialog.close()
                }
                
            },5);
        }
    })

</script>

<dialog bind:this={popUpDialog}>
    <div class="popUp Box">
        <div class="popUpTitleBox">
            <div class="progressDiv" style="width: {width}%;"/>
            <p>{title}</p>
        </div>
        <div class="restBox">
            <div class="popUpContentBox">
                <p>{content}</p>
            </div>
            <div class="buttonDiv">
                <button on:click={ () => {
                    popUpDialog.close()
                }} >Ok</button>
            </div>
        </div>
    </div>
</dialog>

<style>
    button{
        color: white;
    }
    dialog{
        position: absolute;
        z-index: 400;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #6161614a;
        transition: all 0.5s ease;
    }

    .progressDiv {
        width: 0;
        background-color: #ffcdd2;
        transition: all 0.0000001s ease-in;
        height: 5px;
    }
    .popUp {
        color: #ede7f6;
        display: flex;
        flex-direction: column;
        position: absolute;
        align-items: center;
        height: auto;
        overflow-x: scroll;
        overflow-y: scroll;
    }

    .popUpTitleBox {
        width: 100%;
        margin: 0 30px;
        padding-bottom: 5px;
        background-color: #ef5350;
        flex: 1;
    }

    .popUpTitleBox p {
        /* margin: 1px; */
        margin: 0;
        margin-top: 5px;
        text-align: center;
        font-size: 20px;
    }

    .restBox {
        flex: 12;
        width: 100%;
        padding: 10px;
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        background-color: black;
    }

    .popUpContentBox {
        width: 100%;
        text-overflow: ellipsis;
        overflow-y: scroll;
        flex: 3;
        /* border-top: solid 1px #212121; */
    }

    .popUpContentBox p {
        margin: 3px;
        text-align: center;
        font-size: 13px;
    }

    .Box{
        max-width: 60%;
        max-height: 80%;
    }

    .buttonDiv{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        /* border-top: solid 1px #212121;    */
        font-size: 11px;
        bottom: 0px;
        cursor: pointer;
        padding: 5px 0;
        height: 30px;
    }
    button{
        cursor: pointer;
        border: none;
    }

    ::-webkit-scrollbar{
        display: none;
    }

    @media (max-width:900px){
        .Box{
            max-width: 80%;
        }
    }
</style>