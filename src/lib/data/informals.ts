import type { informal } from "$lib/types";
import Car_Console from '$lib/assets/Informals/car_control.jpeg'
import Gaming from '$lib/assets/Informals/gaming.jpeg'
import Gun_Shooting from '$lib/assets/Informals/shooting.jpeg'
import Body_Zorbing from '$lib/assets/Informals/body_zorbing.jpeg'

export let informals:{[id: string]:informal} = {
    IF01: {
      name: "Car Console",
      image: Car_Console,
    },
    IF02: {
      name: "PS4/PS5 Gaming",
      image: Gaming,
    },
    IF03: {
      name: "Gun Shooting",
      image: Gun_Shooting,
    },
    IF04: {
      name: "Body zorbing",
      image: Body_Zorbing,
    },
  };
  