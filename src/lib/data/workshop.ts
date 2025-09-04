import appdev from '$lib/assets/Workshop/appdev.webp'
import web from '$lib/assets/Workshop/web.webp'
import mlintro from '$lib/assets/Workshop/mlintro.webp'
import mlops from '$lib/assets/Workshop/mlops.webp'
import matlab from '$lib/assets/Workshop/matlab.webp'
import pcb from '$lib/assets/Workshop/pcb.webp'
import ui from '$lib/assets/Workshop/ui.webp'
import appdevDesc from '$lib/assets/Workshop/appdevDesc.webp'
import webDesc from '$lib/assets/Workshop/webDesc.webp'
import mlintroDesc from '$lib/assets/Workshop/mlintroDesc.webp'
import mlopsDesc from '$lib/assets/Workshop/mlopsDesc.webp'
import matlabDesc from '$lib/assets/Workshop/matlabDesc.webp'
import pcbDesc from '$lib/assets/Workshop/pcbDesc.webp'
import uiDesc from '$lib/assets/Workshop/uiDesc.webp'
import type { workshop } from '$lib/types'

let closed_workshop = {
    "WP01": {
        "name":"App Development Workshop",
        "trainee":[], 
        "date":"27 & 28 Sep",
        "venue":"Sahyadri Campus A01-002",
        "description":"Calling all Innovators! Have you ever wanted to transform your ideas into real, working apps? This workshop is your gateway to app development! Learn to build powerful mobile applications using React Native and JavaScript in a hands-on, beginner-friendly environment. No matter if you're just starting out or aiming to sharpen your coding skills, this workshop will guide you step by step. By the end of the session, you'll design your very own interactive app, explore server integration, and gain confidence in bringing your projects to life!",
        "prerequisites":["A Laptop (optional: with Android Studio)","Basic Programming Skills"],
        "topics":["App Dev","React-Native"],
        "image":appdev,
        "imageDesc":appdevDesc,
        "price":1199
    },
    "WP02": {
        "name": "The Web Workshop",
        "trainee": ["Devinc"],
        "date": "27 & 28 Sep",
        "venue": "Nila Campus",
        "description": "Hello, Web Enthusiasts! Have you ever wondered what goes into building the websites and applications we use every day? Web development is the art of combining creativity and logic to craft dynamic, functional, and scalable digital solutions. In this workshop, you'll explore the full stack of web development, from designing interactive frontends to building robust backends, managing databases, and deploying projects to the web. But that's not all! You'll also get hands-on experience creating your own web project, bringing your ideas to life from start to finish.",
        "prerequisites": ["HTML/CSS and JS (very basic)", "Laptop with VSCode and NodeJS installed"],
        "topics": ["Web Development", "Frontend", "Backend"],
        "image": web,
        "imageDesc":webDesc,
        "price": 1199
    },
    "WP03": {
        "name":"Introduction to Machine Learning",
        "trainee":[], 
        "date":"27 Sep",
        "venue":"Sahyadri Campus A01-007 auditorium",
        "description":"Hello, Creative Thinkers! Have you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
        "prerequisites":["A laptop with a mouse","Curiosity and a passion for design!"],
        "topics":["Machine Leaning"],
        "image":mlintro,
        "imageDesc":mlintroDesc,
        "price":699
    },
    "WP04": {
        "name":"Machine Learning Operations Workshop",
        "trainee":["Mathlab Research"], 
        "date":"27 & 28 Sep",
        "venue":"Nila Campus Samgatha 203",
        "description":"Ever wondered how machine learning models go from development to real-world deployment? This workshop will guide you through every step of the MLOps pipeline! From data engineering and preparing training data to applying feature engineering, model development, and deployment, you'll get hands-on experience at each stage. We’ll also explore how to keep models up-to-date with continual learning. By the end of this workshop, you'll have the skills to build, deploy, and maintain ML models like a pro!",
        "prerequisites":["'Intro to Machine Learning' Workshop attended" , "A Laptop with Python and Jupyter Notebook installed"],
        "topics":["Ml & Neural Networks"],
        "image":mlops,
        "imageDesc":mlopsDesc,
        "price":1199
    },
    "WP05": {
        "name":"MATLAB Workshop",
        "trainee":[], 
        "date":"27 Sep",
        "venue":"Sahyadri Campus Computer Lab",
        "description":"Hello, Aspiring Engineers and Designers! Ready to revolutionize your approach to design and manufacturing? This hands-on, immersive workshop will transform your skills in Fusion CAD and Generative Design. Explore key concepts like sketching, modeling, drafting, and assembly. You’ll master advanced tools and techniques in Fusion CAD and unlock the potential of generative design to optimize your creations like never before. By the end of this workshop, you’ll have practical experience in developing intricate designs and assemblies, along with a comprehensive understanding of how generative design can drive innovation in your projects. Get ready to elevate your design skills to the next level!",
        "prerequisites":["Basic familiarity with Fusion CAD or any design software https://www.autodesk.com/learn/ondemand/course/learn-fusion-for-cad-in-90-minutes " ],
        "topics":["MATLAB"],
        "image":matlab,
        "imageDesc":matlabDesc,
        "price":699
    },
    "WP06": {
        name:"PCB Design Workshop",
        "trainee":[], 
        "date":"27 & 28 Sep",
        "venue":"IIT PKD Nila samgatha 30x and electronics lab",
        "description":"Hi Makers! Join our 2-day PCB Design Workshop and dive into the world of electronics! Learn the basics of PCB design, key terminologies, and the workflow from schematic to layout. Get hands-on with KiCAD, explore the fabrication process, and practice soldering SMD and THT components. By the end, you’ll be ready to design and assemble your own PCB!  ",
        "prerequisites":["A laptop with KiCad software installed."],
        "topics":["PCB"],
        "image":pcb,
        "imageDesc":pcbDesc,
        "price":1199
    },
    "WP07": {
        "name":"Introduction to UI/UX Design",
        "trainee":[], 
        "date":"27 Sep",
        "venue":"Sahyadri Campus A01-007 auditorium",
        "description":"Hello, Creative Thinkers! Have you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
        "prerequisites":["A laptop with a mouse","Curiosity and a passion for design!"],
        "topics":["UI/UX"],
        "image":ui,
        "imageDesc":uiDesc,
        "price":699
    },
}


export let workshops:{[id: string]:workshop} = {
    "WP01": {
        "name":"App Development Workshop",
        "trainee":[], 
        "date":"27 & 28 Sep",
        "venue":"Sahyadri Campus A01-002",
        "description":"Calling all Innovators! Have you ever wanted to transform your ideas into real, working apps? This workshop is your gateway to app development! Learn to build powerful mobile applications using React Native and JavaScript in a hands-on, beginner-friendly environment. No matter if you're just starting out or aiming to sharpen your coding skills, this workshop will guide you step by step. By the end of the session, you'll design your very own interactive app, explore server integration, and gain confidence in bringing your projects to life!",
        "prerequisites":["A Laptop (optional: with Android Studio)","Basic Programming Skills"],
        "topics":["App Dev","React-Native"],
        "image":appdev,
        "imageDesc":appdevDesc,
        "price":1199
    },
    "WP02": {
        "name": "The Web Workshop",
        "trainee": ["Devinc"],
        "date": "27 & 28 Sep",
        "venue": "Nila Campus",
        "description": "Hello, Web Enthusiasts! Have you ever wondered what goes into building the websites and applications we use every day? Web development is the art of combining creativity and logic to craft dynamic, functional, and scalable digital solutions. In this workshop, you'll explore the full stack of web development, from designing interactive frontends to building robust backends, managing databases, and deploying projects to the web. But that's not all! You'll also get hands-on experience creating your own web project, bringing your ideas to life from start to finish.",
        "prerequisites": ["HTML/CSS and JS (very basic)", "Laptop with VSCode and NodeJS installed"],
        "topics": ["Web Development", "Frontend", "Backend"],
        "image": web,
        "imageDesc":webDesc,
        "price": 1199
    },
    "WP03": {
        "name":"Introduction to Machine Learning",
        "trainee":[], 
        "date":"27 Sep",
        "venue":"Sahyadri Campus A01-007 auditorium",
        "description":"Hello, Creative Thinkers! Have you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
        "prerequisites":["A laptop with a mouse","Curiosity and a passion for design!"],
        "topics":["Machine Leaning"],
        "image":mlintro,
        "imageDesc":mlintroDesc,
        "price":699
    },
    "WP04": {
        "name":"Machine Learning Operations Workshop",
        "trainee":["Mathlab Research"], 
        "date":"27 & 28 Sep",
        "venue":"Nila Campus Samgatha 203",
        "description":"Ever wondered how machine learning models go from development to real-world deployment? This workshop will guide you through every step of the MLOps pipeline! From data engineering and preparing training data to applying feature engineering, model development, and deployment, you'll get hands-on experience at each stage. We’ll also explore how to keep models up-to-date with continual learning. By the end of this workshop, you'll have the skills to build, deploy, and maintain ML models like a pro!",
        "prerequisites":["'Intro to Machine Learning' Workshop attended" , "A Laptop with Python and Jupyter Notebook installed"],
        "topics":["Ml & Neural Networks"],
        "image":mlops,
        "imageDesc":mlopsDesc,
        "price":1199
    },
    "WP05": {
        "name":"MATLAB Workshop",
        "trainee":[], 
        "date":"27 Sep",
        "venue":"Sahyadri Campus Computer Lab",
        "description":"Hello, Aspiring Engineers and Designers! Ready to revolutionize your approach to design and manufacturing? This hands-on, immersive workshop will transform your skills in Fusion CAD and Generative Design. Explore key concepts like sketching, modeling, drafting, and assembly. You’ll master advanced tools and techniques in Fusion CAD and unlock the potential of generative design to optimize your creations like never before. By the end of this workshop, you’ll have practical experience in developing intricate designs and assemblies, along with a comprehensive understanding of how generative design can drive innovation in your projects. Get ready to elevate your design skills to the next level!",
        "prerequisites":["Basic familiarity with Fusion CAD or any design software https://www.autodesk.com/learn/ondemand/course/learn-fusion-for-cad-in-90-minutes " ],
        "topics":["MATLAB"],
        "image":matlab,
        "imageDesc":matlabDesc,
        "price":699
    },
    "WP06": {
        name:"PCB Design Workshop",
        "trainee":[], 
        "date":"27 & 28 Sep",
        "venue":"IIT PKD Nila samgatha 30x and electronics lab",
        "description":"Hi Makers! Join our 2-day PCB Design Workshop and dive into the world of electronics! Learn the basics of PCB design, key terminologies, and the workflow from schematic to layout. Get hands-on with KiCAD, explore the fabrication process, and practice soldering SMD and THT components. By the end, you’ll be ready to design and assemble your own PCB!  ",
        "prerequisites":["A laptop with KiCad software installed."],
        "topics":["PCB"],
        "image":pcb,
        "imageDesc":pcbDesc,
        "price":1199
    },
    "WP07": {
        "name":"Introduction to UI/UX Design",
        "trainee":[], 
        "date":"27 Sep",
        "venue":"Sahyadri Campus A01-007 auditorium",
        "description":"Hello, Creative Thinkers! Have you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
        "prerequisites":["A laptop with a mouse","Curiosity and a passion for design!"],
        "topics":["UI/UX"],
        "image":ui,
        "imageDesc":uiDesc,
        "price":699
    }
}
