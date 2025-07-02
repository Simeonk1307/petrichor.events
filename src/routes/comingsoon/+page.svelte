<script>
    import { onMount } from 'svelte';
    
    let visible = false;
    
    onMount(() => {
      setTimeout(() => {
        visible = true;
      }, 100);
    });
  </script>
  
  <div class="main-container {visible ? 'visible' : ''}">
    <div class="gradient-bg"></div>
    
    <div class="content">
      <div class="text-content">
        <h1 class="title">Coming Soon</h1>
        <p class="subtitle">Something amazing is on the way</p>
        <div class="loading-bar">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    * {
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    }
  
    .main-container {
      width: 100vw;
      height: 100vh;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      opacity: 0;
      transition: opacity 1s ease-out;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }
  
    .visible {
      opacity: 1 !important;
    }
  
    /* Gradient Background */
    .gradient-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at top center, #1e3a8a 0%, #1e40af 20%, #1e1b4b 40%, #0f0f23 70%, #000000 100%);
    }
  
    .gradients-container {
      position: absolute;
      width: 100%;
      height: 100%;
      mix-blend-mode: color-dodge;
      filter: blur(40px);
    }
  
    .g {
      position: absolute;
      border-radius: 50%;
      mix-blend-mode: multiply;
      animation: float 6s ease-in-out infinite;
    }
  
    #g1 {
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 40%, transparent 70%);
      top: 15%;
      left: 5%;
      animation-delay: 0s;
    }
  
  
  
    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg) scale(1);
      }
      33% {
        transform: translateY(-40px) rotate(120deg) scale(1.1);
      }
      66% {
        transform: translateY(30px) rotate(240deg) scale(0.9);
      }
    }
  
    /* Content */
    .content {
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .text-content {
      text-align: center;
      transform: translateY(30px);
      animation: slideUp 1.2s ease-out 0.5s forwards;
      opacity: 0;
      padding: clamp(1rem, 4vw, 2rem);
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
  
    @keyframes slideUp {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    .title {
      font-size: clamp(2.5rem, 12vw, 6rem);
      font-weight: 800;
      margin-bottom: clamp(1rem, 4vw, 1.5rem);
      background: linear-gradient(135deg, #ffffff 0%, #93c5fd 30%, #3b82f6 70%, #1e40af 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 300% 300%;
      animation: shimmer 4s ease-in-out infinite;
      text-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
      letter-spacing: -0.02em;
      position: relative;
      line-height: 1.1;
    }
  
    .title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, transparent, #3b82f6, transparent);
      border-radius: 2px;
      animation: glow 2s ease-in-out infinite alternate;
    }
  
    @keyframes glow {
      from { 
        box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        opacity: 0.7;
      }
      to { 
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
        opacity: 1;
      }
    }
  
    @keyframes shimmer {
      0%, 100% { 
        background-position: 0% 50%; 
      }
      50% { 
        background-position: 100% 50%; 
      }
    }
  
    .subtitle {
      font-size: clamp(1rem, 4vw, 1.4rem);
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: clamp(2rem, 6vw, 3rem);
      font-weight: 300;
      letter-spacing: 1px;
      line-height: 1.6;
      position: relative;
      max-width: 90vw;
      word-wrap: break-word;
    }
  
    .loading-bar {
      width: clamp(250px, 80vw, 400px);
      height: clamp(4px, 1.5vw, 6px);
      background: rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
      margin: 0 auto;
    }
  
    .progress {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06d6a0, #f59e0b);
      border-radius: 10px;
      width: 0%;
      animation: loading 4s ease-in-out infinite;
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
      position: relative;
    }
  
    .progress::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
      animation: shine 2s ease-in-out infinite;
    }
  
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }
  
    @keyframes loading {
      0% { 
        width: 0%; 
        transform: translateX(0);
      }
      50% { 
        width: 100%; 
        transform: translateX(0);
      }
      100% { 
        width: 100%; 
        transform: translateX(100%);
      }
    }
  
    /* Responsive */
    @media (max-width: 768px) {
      .main-container {
        padding: 1rem;
      }
  
      .title::after {
        width: clamp(60px, 20vw, 100px);
        height: 2px;
      }
  
      .gradient-bg {
        background: radial-gradient(ellipse at top center, #1e3a8a 0%, #1e40af 15%, #1e1b4b 35%, #0f0f23 60%, #000000 100%);
      }
    }
  
    @media (max-width: 480px) {
      .main-container {
        padding: 0.5rem;
      }
  
      .title {
        font-size: clamp(2rem, 15vw, 3rem);
        margin-bottom: clamp(0.5rem, 3vw, 1rem);
      }
  
      .subtitle {
        font-size: clamp(0.9rem, 4.5vw, 1.2rem);
        margin-bottom: clamp(1.5rem, 5vw, 2rem);
        letter-spacing: 0.5px;
      }
  
      .loading-bar {
        width: clamp(200px, 85vw, 300px);
        height: 4px;
      }
  
      .text-content {
        padding: clamp(0.5rem, 2vw, 1rem);
      }
    }
  
    @media (min-width: 1200px) {
      .title {
        font-size: clamp(4rem, 8vw, 7rem);
      }
      
      .subtitle {
        font-size: clamp(1.6rem, 3vw, 1.8rem);
      }
    }
  
    @media (orientation: landscape) and (max-height: 600px) {
      .main-container {
        padding: 0.5rem;
      }
  
      .title {
        font-size: clamp(2rem, 8vw, 3.5rem);
        margin-bottom: 0.5rem;
      }
  
      .subtitle {
        font-size: clamp(1rem, 3vw, 1.2rem);
        margin-bottom: 1.5rem;
      }
  
      .text-content {
        padding: 1rem;
      }
    }
  </style>