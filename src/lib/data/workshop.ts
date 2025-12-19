// import appdev from '$lib/assets/Workshop/appdev.webp'
// import appdevDesc from '$lib/assets/Workshop/appdevDesc.webp'
// import web from '$lib/assets/Workshop/web.webp'
// import webDesc from '$lib/assets/Workshop/webDesc.webp'
// import pcb from '$lib/assets/Workshop/pcb.webp'
// import pcbDesc from '$lib/assets/Workshop/pcbDesc.webp'
// import fusion360 from '$lib/assets/Workshop/fusion360.webp'
// import fusion360Desc from '$lib/assets/Workshop/fusion360Desc.webp'
// import matlab from '$lib/assets/Workshop/matlab.webp'
// import matlabDesc from '$lib/assets/Workshop/matlabDesc.webp'
// import genai from '$lib/assets/Workshop/genai.webp'
// import genaiDesc from '$lib/assets/Workshop/genaiDesc.webp'
// import mlintro from '$lib/assets/Workshop/mlintro.webp'
// import mlintroDesc from '$lib/assets/Workshop/mlintroDesc.webp'
// import mlops from '$lib/assets/Workshop/mlops.webp'
// import mlopsDesc from '$lib/assets/Workshop/mlopsDesc.webp'
// import ui from '$lib/assets/Workshop/ui.webp'
// import uiDesc from '$lib/assets/Workshop/uiDesc.webp'
import nbai from '$lib/assets/MainWorkshops/neurobot/NeurobotAI.png'
import nbagenticai from '$lib/assets/MainWorkshops/neurobot/NeurobotAgenticAI.png'
import nbcs from '$lib/assets/MainWorkshops/neurobot/NeurobotCyberSafety.png'
import type { workshop } from '$lib/types'


export let workshops:{[id:string]:workshop} = {
    'WP01': {
        'name': "Artificial Intelligence",
        'trainee': ['Industry Expert'],
        'date': '10 & 11 January',
        'topics': [],
        'description': 'Build ML models, NLP solutions, and intelligent systems that solve real-world problems',
        'price': 999,
        'venue': 'Sahayadri Campus',
        'image': nbai,
        'prerequisites': []
    },
    'WP02': {
        'name': "Agentic AI",
        'trainee': ['AI Research Lead'],
        'date': '10 & 11 January',
        'topics': [],
        'description': 'Create autonomous agents that can reason, plan, and execute complex tasks independently',
        'price': 999,
        'venue': 'Sahayadri Campus',
        'image': nbagenticai,
        'prerequisites': []
    },
    'WP03': {
        'name': "Cyber Safety & Ethical Hacking",
        'trainee': ['Security Specialist'],
        'date': '10 & 11 January',
        'topics': [],
        'description': 'Develop security tools, threat detection systems, and privacy-preserving solutions',
        'price': 999,
        'venue': 'Sahayadri Campus',
        'image': nbcs,
        'prerequisites': []
    }
}
let closed_workshop = {}
// let closed_workshop = {
//     "WP01": {
//         "name":"App Development Workshop",
//         "trainee":["YACC"], 
//         "date":"27 & 28 Sept",
//         "venue":"Sahyadri Campus A01-002",
//         "description":"Calling all Innovators!\nHave you ever wanted to transform your ideas into real, working apps?\n\nThis workshop is your gateway to app development!\nLearn to build powerful mobile applications using React Native and JavaScript in a hands-on, beginner-friendly environment.\n\nNo matter if you're just starting out or aiming to sharpen your coding skills, this workshop will guide you step by step. By the end of the session, you'll design your very own interactive app, explore server integration, and gain confidence in bringing your projects to life!",
//         "prerequisites":["A Laptop (optional: with Android Studio)","Basic Programming Skills"],
//         "topics":["App Dev","React-Native"],
//         "image":appdev,
//         "imageDesc":appdevDesc,
//         "price":1199
//     },
//     "WP02": {
//         "name": "Web Development Workshop",
//         "trainee": ["DevInc"],
//         "date": "27 & 28 Sept",
//         "venue": "Nila Campus",
//         "description": "Hello, Web Enthusiasts!\n\nHave you ever wondered what goes into building the websites and applications we use every day?\n\nWeb development is the art of combining creativity and logic to craft dynamic, functional, and scalable digital solutions. In this workshop, you'll explore the full stack of web development, from designing interactive frontends to building robust backends, managing databases, and deploying projects to the web. But that's not all! You'll also get hands-on experience creating your own web project, bringing your ideas to life from start to finish.",
//         "prerequisites": ["Laptop with VSCode and NodeJS installed", "HTML/CSS and JS (very basic)"],
//         "topics": ["Web Development", "Frontend", "Backend"],
//         "image": web,
//         "imageDesc":webDesc,
//         "price": 1199
//     },
//     "WP03": {
//         "name":"PCB Design Workshop",
//         "trainee":["Y-Dyuthi"], 
//         "date":"27 & 28 Sept",
//         "venue":"IIT PKD Nila samgatha 30x and electronics lab",
//         "description":"Hi Makers!\n\nJoin our 2-day PCB Design Workshop and dive into the world of electronics!\nLearn the basics of PCB design, key terminologies, and the workflow from schematic to layout.\nGet hands-on with KiCAD, explore the fabrication process, and practice soldering SMD and THT components.\nBy the end, you’ll be ready to design and assemble your own PCB!",
//         "prerequisites":["A laptop with KiCAD software installed", "An open mind"],
//         "topics":["PCB"],
//         "image":pcb,
//         "imageDesc":pcbDesc,
//         "price":1199
//     },
//     "WP04": {
//         "name":"Fusion 360 Workshop",
//         "trainee":[], 
//         "date":"27 & 28 Sept",
//         "venue":"Sahyadri Campus Computer Lab",
//         "description":"Hello, Aspiring Engineers and Designers!\n\nReady to revolutionize your approach to design and manufacturing? This hands-on, immersive workshop will transform your skills in Fusion CAD and Generative Design.\nExplore key concepts like sketching, modeling, drafting, and assembly. You’ll master advanced tools and techniques in Fusion CAD and unlock the potential of generative design to optimize your creations like never before. By the end of this workshop, you’ll have practical experience in developing intricate designs and assemblies, along with a comprehensive understanding of how generative design can drive innovation in your projects. Get ready to elevate your design skills to the next level!",
//         "prerequisites":["A Laptop","Basic familiarity with Fusion CAD or any design software" ],
//         "topics":["Fusion 360"],
//         "image":fusion360,
//         "imageDesc":fusion360Desc,
//         "price":1199
//     },
//     "WP05": {
//         "name":"MATLAB Workshop",
//         "trainee":[], 
//         "date":"28 Sept",
//         "venue":"Sahyadri Campus Computer Lab",
//         "description":"Step into the driver's seat of robotics! Explore how mobile robots move turn, and navigate as you model, simulate, visualize their kinematics and dynamics with MATLAB.\n\nFrom smooth trajectories to dynamic motion, see your robot come alive on screen!",
//         "prerequisites":["Laptop with MATLAB installed (Use trial version if you don't have a license)","Basic knowledge of Math (Linear Algebra, Differential Equations) and Mechanics"],
//         "topics":["MATLAB"],
//         "image":matlab,
//         "imageDesc":matlabDesc,
//         "price":699
//     },
//     "WP06": {
//         "name":"Generative AI Workshop",
//         "trainee":[], 
//         "date":"27 Sept",
//         "venue":"Sahyadri Campus A01-007 auditorium",
//         "description":"Hello, Future AI Creators!\nEver wondered how ChatGPT or Gemini can write stories, code apps, or even answer questions like a human?\n\nThis workshop will introduce you to the incredible world of Generative AI, where you'll learn how to craft effective prompts, understand the magic behind large language models, and — best of all — build your very own intelligent chatbot that can answer questions from any document!! Whether you're a total beginner or have dabbled in AI before, this hands-on session will guide you to build your AI ideas — no jargon, no fluff, just real skills you can use right away!!",
//         "prerequisites":["A Laptop","Basic Knowledge of Python"],
//         "topics":["Generative AI"],
//         "image":genai,
//         "imageDesc":genaiDesc,
//         "price":699
//     },
//     "WP07": {
//         "name":"Introduction to Machine Learning Workshop",
//         "trainee":[], 
//         "date":"27 Sept",
//         "venue":"Sahyadri Campus A01-007 auditorium",
//         "description":"Dive into the world of Data Engineering and Machine Learning!\nLearn the essentials of training data, feature engineering, and model development, while exploring key techniques in regression (OLS, Ridge, Polynomial) and classification (Logistic Regression, KNN, SVM, Naive Bayes, Neural Networks).\n\nGet hands-on with popular libraries, discover how to deploy and improve models, and kickstart your ML journey with practical insights.",
//         "prerequisites":["A Laptop with Python and Jupyter Notebook installed","Basic Programming Skills"],
//         "topics":["Machine Learning"],
//         "image":mlintro,
//         "imageDesc":mlintroDesc,
//         "price":699
//     },
//     "WP08": {
//         "name":"Machine Learning Operations Workshop",
//         "trainee":[], 
//         "date":"28 Sept",
//         "venue":"Nila Campus Samgatha 203",
//         "description":"Hello Future MLOps Experts!\nEver wondered how machine learning models go from development to real-world deployment?\n\nThis workshop will guide you through every step of the MLOps pipeline! From data engineering and preparing training data to applying feature engineering, model development, and deployment, you'll get hands-on experience at each stage. We’ll also explore how to keep models up-to-date with continual learning. By the end of this workshop, you'll have the skills to build, deploy, and maintain ML models like a pro!",
//         "prerequisites":["A Laptop with Python and Jupyter Notebook installed", "'Intro to ML' Workshop attended"],
//         "topics":["Ml & Neural Networks"],
//         "image":mlops,
//         "imageDesc":mlopsDesc,
//         "price":699
//     },
//     "WP09": {
//         "name":"Introduction to UI/UX Design",
//         "trainee":["Voxel"], 
//         "date":"27 Sept",
//         "venue":"Sahyadri Campus A01-007 auditorium",
//         "description":"Hello, Creative Thinkers!\n\nHave you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
//         "prerequisites":["A laptop & preferably a mouse","Curiosity and Passion for design!"],
//         "topics":["UI/UX"],
//         "image":ui,
//         "imageDesc":uiDesc,
//         "price":699
//     },
// }


// export let workshops:{[id: string]:workshop} = {
//     "WP01": {
//         "name":"App Development Workshop",
//         "trainee":["YACC"], 
//         "date":"27 & 28 Sept",
//         "venue":"Sahyadri Campus A01-002",
//         "description":"Calling all Innovators!\nHave you ever wanted to transform your ideas into real, working apps?\n\nThis workshop is your gateway to app development!\nLearn to build powerful mobile applications using React Native and JavaScript in a hands-on, beginner-friendly environment.\n\nNo matter if you're just starting out or aiming to sharpen your coding skills, this workshop will guide you step by step. By the end of the session, you'll design your very own interactive app, explore server integration, and gain confidence in bringing your projects to life!",
//         "prerequisites":["A Laptop (optional: with Android Studio)","Basic Programming Skills"],
//         "topics":["App Dev","React-Native"],
//         "image":appdev,
//         "imageDesc":appdevDesc,
//         "price":1199
//     },
//     "WP02": {
//         "name": "Web Development Workshop",
//         "trainee": ["DevInc"],
//         "date": "27 & 28 Sept",
//         "venue": "Nila Campus",
//         "description": "Hello, Web Enthusiasts!\n\nHave you ever wondered what goes into building the websites and applications we use every day?\n\nWeb development is the art of combining creativity and logic to craft dynamic, functional, and scalable digital solutions. In this workshop, you'll explore the full stack of web development, from designing interactive frontends to building robust backends, managing databases, and deploying projects to the web. But that's not all! You'll also get hands-on experience creating your own web project, bringing your ideas to life from start to finish.",
//         "prerequisites": ["Laptop with VSCode and NodeJS installed", "HTML/CSS and JS (very basic)"],
//         "topics": ["Web Development", "Frontend", "Backend"],
//         "image": web,
//         "imageDesc":webDesc,
//         "price": 1199
//     },
//     "WP03": {
//         "name":"PCB Design Workshop",
//         "trainee":["Y-Dyuthi"], 
//         "date":"27 & 28 Sept",
//         "venue":"IIT PKD Nila samgatha 30x and electronics lab",
//         "description":"Hi Makers!\n\nJoin our 2-day PCB Design Workshop and dive into the world of electronics!\nLearn the basics of PCB design, key terminologies, and the workflow from schematic to layout.\nGet hands-on with KiCAD, explore the fabrication process, and practice soldering SMD and THT components.\nBy the end, you’ll be ready to design and assemble your own PCB!",
//         "prerequisites":["A laptop with KiCAD software installed", "An open mind"],
//         "topics":["PCB"],
//         "image":pcb,
//         "imageDesc":pcbDesc,
//         "price":1199
//     },
//     "WP04": {
//         "name":"Fusion 360 Workshop",
//         "trainee":[], 
//         "date":"27 & 28 Sept",
//         "venue":"Sahyadri Campus Computer Lab",
//         "description":"Hello, Aspiring Engineers and Designers!\n\nReady to revolutionize your approach to design and manufacturing? This hands-on, immersive workshop will transform your skills in Fusion CAD and Generative Design.\nExplore key concepts like sketching, modeling, drafting, and assembly. You’ll master advanced tools and techniques in Fusion CAD and unlock the potential of generative design to optimize your creations like never before. By the end of this workshop, you’ll have practical experience in developing intricate designs and assemblies, along with a comprehensive understanding of how generative design can drive innovation in your projects. Get ready to elevate your design skills to the next level!",
//         "prerequisites":["A Laptop","Basic familiarity with Fusion CAD or any design software" ],
//         "topics":["Fusion 360"],
//         "image":fusion360,
//         "imageDesc":fusion360Desc,
//         "price":1199
//     },
//     "WP05": {
//         "name":"MATLAB Workshop",
//         "trainee":[], 
//         "date":"28 Sept",
//         "venue":"Sahyadri Campus Computer Lab",
//         "description":"Step into the driver's seat of robotics! Explore how mobile robots move turn, and navigate as you model, simulate, visualize their kinematics and dynamics with MATLAB.\n\nFrom smooth trajectories to dynamic motion, see your robot come alive on screen!",
//         "prerequisites":["Laptop with MATLAB installed (Use trial version if you don't have a license)","Basic knowledge of Math (Linear Algebra, Differential Equations) and Mechanics"],
//         "topics":["MATLAB"],
//         "image":matlab,
//         "imageDesc":matlabDesc,
//         "price":699
//     },
//     "WP06": {
//         "name":"Generative AI Workshop",
//         "trainee":[], 
//         "date":"27 Sept",
//         "venue":"Sahyadri Campus A01-007 auditorium",
//         "description":"Hello, Future AI Creators!\nEver wondered how ChatGPT or Gemini can write stories, code apps, or even answer questions like a human?\n\nThis workshop will introduce you to the incredible world of Generative AI, where you'll learn how to craft effective prompts, understand the magic behind large language models, and — best of all — build your very own intelligent chatbot that can answer questions from any document!! Whether you're a total beginner or have dabbled in AI before, this hands-on session will guide you to build your AI ideas — no jargon, no fluff, just real skills you can use right away!!",
//         "prerequisites":["A Laptop","Basic Knowledge of Python"],
//         "topics":["Generative AI"],
//         "image":genai,
//         "imageDesc":genaiDesc,
//         "price":699
//     },
//     "WP07": {
//         "name":"Introduction to Machine Learning Workshop",
//         "trainee":[], 
//         "date":"27 Sept",
//         "venue":"Sahyadri Campus A01-007 auditorium",
//         "description":"Dive into the world of Data Engineering and Machine Learning!\nLearn the essentials of training data, feature engineering, and model development, while exploring key techniques in regression (OLS, Ridge, Polynomial) and classification (Logistic Regression, KNN, SVM, Naive Bayes, Neural Networks).\n\nGet hands-on with popular libraries, discover how to deploy and improve models, and kickstart your ML journey with practical insights.",
//         "prerequisites":["A Laptop with Python and Jupyter Notebook installed","Basic Programming Skills"],
//         "topics":["Machine Learning"],
//         "image":mlintro,
//         "imageDesc":mlintroDesc,
//         "price":699
//     },
//     "WP08": {
//         "name":"Machine Learning Operations Workshop",
//         "trainee":[], 
//         "date":"28 Sept",
//         "venue":"Nila Campus Samgatha 203",
//         "description":"Hello Future MLOps Experts!\nEver wondered how machine learning models go from development to real-world deployment?\n\nThis workshop will guide you through every step of the MLOps pipeline! From data engineering and preparing training data to applying feature engineering, model development, and deployment, you'll get hands-on experience at each stage. We’ll also explore how to keep models up-to-date with continual learning. By the end of this workshop, you'll have the skills to build, deploy, and maintain ML models like a pro!",
//         "prerequisites":["A Laptop with Python and Jupyter Notebook installed", "'Intro to ML' Workshop attended"],
//         "topics":["Ml & Neural Networks"],
//         "image":mlops,
//         "imageDesc":mlopsDesc,
//         "price":699
//     },
//     "WP09": {
//         "name":"Introduction to UI/UX Design",
//         "trainee":["Voxel"], 
//         "date":"27 Sept",
//         "venue":"Sahyadri Campus A01-007 auditorium",
//         "description":"Hello, Creative Thinkers!\n\nHave you ever wondered what makes a website or app user-friendly and visually appealing? User Interface (UI) and User Experience (UX) design are the keys to crafting digital experiences that not only look great but also work seamlessly. In this workshop, you'll dive into the principles of good design, learn how to create intuitive interfaces, and explore the importance of user feedback. But that's not all! You'll also get hands-on experience with designing your own UI/UX project, putting theory into practice.",
//         "prerequisites":["A laptop & preferably a mouse","Curiosity and Passion for design!"],
//         "topics":["UI/UX"],
//         "image":ui,
//         "imageDesc":uiDesc,
//         "price":699
//     },
// }

