<script lang="ts">
	import type { Schedule } from "$lib/types";
    import location_svg from "$lib/assets/location.svg"
    import { onMount } from "svelte";
	import { goto } from "$app/navigation";

    onMount(() => {
        goto('/home')
    })

    let schedule: {[key : string] : Schedule} = {
        "18th January 2025": {
            "Cultural" : [{
                "event_name": "NAME",
                timing: "8:00",
                venue: "Sahyadri"
            },{
                "event_name": "NAME2",
                timing: "8:00",
                venue: "Sahyadri"
            },{
                "event_name": "NAME3",
                timing: "8:00",
                venue: "Sahyadri"
            }],
            "Technical" : [{
                "event_name": "NAME2",
                timing: "8:00",
                venue: "Sahyadri"
            }],
            "Workshop" : [{
                "event_name": "NAME3",
                timing: "8:00",
                venue: "Sahyadri"
            }]
        },
        "19th January 2025" : {}
    };
    let days = Object.keys(schedule);
    let colors = ['orange', 'green']
    let selected_day = days[0]
    let currentSchedule = schedule[selected_day]
    let selected_event_type = Object.keys(currentSchedule)[0]
    if (selected_event_type == undefined) {
        selected_event_type = ""
    }
    let events: any[] = currentSchedule[selected_event_type]
    const change_date = (day:string) => {
        console.log(day)
        selected_day = day
        currentSchedule = schedule[selected_day]
        selected_event_type = Object.keys(currentSchedule)[0]
        if (selected_event_type == undefined) {
            selected_event_type = ""
        }
        events = currentSchedule[selected_event_type]
        if (events == undefined) {
            events = []
        }
    }
    const changeeventtype = (event_type) => {
        selected_event_type = event_type
        events = currentSchedule[selected_event_type]
        if (events == undefined) {
            events = []
        }
    }


</script>

<main>
    <div class="scd_holder">
        <div class="nav_bar">
            {#each days as day, i}
                <button class="nav_item {selected_day == day ? "selected" : ""}" style="background-color: {colors[i]};" on:click={() => change_date(day)}>
                    <h3>{day}</h3>
                </button>
            {/each}

        </div>
        <div class="schd">
            <div class="sidebar">
                {#each Object.keys(currentSchedule) as event_type}
                    <button class="tag {selected_event_type == event_type ? "selected" : ""}" on:click={() => {changeeventtype(event_type)}}>
                        {event_type}
                    </button>
                {/each}
            </div>
            <div class="schedule">
                {#each events as event} 
                    <div class="event">
                        <div class="timing">{event.timing}</div>
                        <div class="name atmos">{event.event_name}</div>
                        <div class="venue">
                            <img src={location_svg} height="25px" width="25px"/>
                            {event.venue}</div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    * {
        box-sizing: border-box;
    }
    button {
        border: none;
        padding: 10px;
    }
    main {
        width: 100vw;
        height: 100vh;
        top: 100px;
        position: relative;
        overflow: hidden;
    }
    .schedule {
        flex: 3;
        height: 80vh;
        background-color: rgb(224, 224, 224);
        overflow-y: scroll;
        padding: 20px 0;
        color: rgba(58, 14, 2, 0.81);
    }
    .venue {
        display: flex;
        align-items: center;
        font-weight: bold;
    }
    .timing {
        font-weight: bold;
    }
    .event {
        display: flex;
        width:  100%;
        align-items: center;
        padding: 20px;
        border-top: red 1px dashed;
        border-bottom: red 1px dashed;
        justify-content: space-between;
    }
    .nav_item {
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
        padding: 10px;
        flex: 1;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        height: 100%;
    }
    .tag {
        font-family: var(--pfont);
        border-bottom: 1px solid gray;
        width: 100%;
        padding: 30px 10px;
    }
    .nav_item * {
        font-family: var(--pfont);
    }
    .nav_item:active {
        filter: hue-rotate(90deg); 
    }
    .scd_holder {
        display: flex;
        width: 100%;
        padding-inline: 20px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .nav_bar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        border: 1px solid gray;
        border-bottom: none;
        width: 100%;
    }
    .schd {
        min-height: 80vh;
        position: relative;
        display: flex;
        align-items: flex-start;
        border: 1px solid gray;
        border-top: none;
        height: auto;
        width: 100%;
        justify-content: flex-start;
    }
    .sidebar {
        flex:1;
        min-height: 100%;
        overflow-y: scroll;
        height: 80vh;
        box-shadow: -1px -1px 1px 1px gray inset;
        min-width: 150px;
        border-right: 10px solid gray;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        background-color: aliceblue;
    }
    .selected {
        border: 4px solid rgba(107, 106, 106, 0.666) !important;
    }
    @media (max-width: 600px) {
        .nav_bar {
            height: auto;
            width: 100%;
            flex-direction: column;
        }
        .nav_item {
            width: 100%;
        }
        .schd {
            flex-direction: column-reverse;
        }
        .sidebar {
            width: 100%;
            height: auto;
            flex-direction: row;
            flex: none;
            border: none;
            overflow-y: unset;
            overflow-x: scroll;
            /* overflow: scroll; */
            padding: 0 !important;
            height: 120px;
        }
        .tag {
            height: 100%;
            width: 150px;
            min-width: 150px;
            border: 1px solid gray ;
            border-right:none ;
        }
        .schedule {
            width: 100%;    
        }
    }
</style>