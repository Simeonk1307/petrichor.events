import img1 from '$lib/assets/Workshop/workshop_pcb.jpg'
import img2 from '$lib/assets/Workshop/workshop_ui.jpg'
import img3 from '$lib/assets/Workshop/workshop_app.jpg'


export let workshops = {
    "WP01": {
        "name":"PCB Design Workshop",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"IIT PKD Nila samgatha 30x and electronics lab",
        "description":"Hello, Ignited Minds! Many of you are familiar with the Arduino UNO, a versatile tool for creating projects from basic to advanced levels. But have you ever considered building your own Arduino UNO? Imagine customizing its features to suit your specific needs and becoming the creator of your own microcontroller. That’s exactly what we’ve planned for you in this workshop—an opportunity to design and build your very own Arduino UNO!",
        "prerequisites":[`Just a curiosity mind to learn!`,`A laptop with kicad software installed Link to download: https://www.kicad.org/download/`],
        "topics":["PCB"],
        "image":img1,
        "price":1099
    },
    "WP02": {
        "name":"Introduction to UI/UX Design",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"007 auditorium",
        "description":"Hello, Creative Thinkers! Have you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
        "prerequisites":["A laptop with a mouse","Curiosity and a passion for design!"],
        "topics":["UI/UX"],
        "image":img2,
        "price":1199
    },
    "WP03": {
        "name":"App Development Workshop",
        "trainee":[], 
        "date":"SEP 28,29",
        "venue":"002",
        "description":"Hey, Future App Developers!  Ever dreamed of creating your own app from scratch? Join our interactive workshop to dive into app development using React Native and JavaScript. Whether you’re new to app development or looking to enhance your skills, this hands-on session is perfect for you. By the end of the workshop, you'll have built your very own Pokedex from scratch and even set up your own server! Get ready for an exciting journey into app development!",
        "prerequisites":["A Laptop (optional: with Android Studio)","Basic Programming Skills"],
        "topics":["App Dev","React-Native"],
        "image":img3,
        "price":1199
    }

}
