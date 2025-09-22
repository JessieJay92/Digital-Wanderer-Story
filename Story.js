// === RAPID MVP - SINGLE FILE DEPLOYMENT ===
// This is a minimal viable product that can be deployed immediately

// server.js - Complete backend in one file
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// In-memory storage (replace with DB later)
let users = new Map();
let sessions = new Map();
let userProgress = new Map();

// Story data embedded (from your story.js)
const story = {
  Ep1_Start: {
    title: "Awakening",
    text: "You wake in a neon-lit apartment, static humming beneath your skin. What do you do?",
    choices: [{ text: "Check the terminal", next: "Ep1_Terminal" }]
  },
  Ep1_Terminal: {
    title: "System Access",
    text: "The screen flickers: 'PROJECT NEURAL BRIDGE - ERROR.'",
    choices: [
      { text: "Approach the mirror", next: "Ep1_Mirror" },
      { text: "Force a system reboot", next: "Ep1_Reboot" }
    ]
  },
  Ep1_Mirror: {
    title: "Digital Reflection",
    text: "A digital figure forms in your reflection: The Architect.",
    choices: [{ text: "Speak with The Architect", next: "Ep1_Choice" }]
  },
  Ep1_Reboot: {
    title: "Hard Reset",
    text: "You force a hard reset. Glitch powers flood your mind.",
    choices: [{ text: "Try to stabilize", next: "Ep1_Choice" }]
  },
  Ep1_Choice: {
    title: "Episode 1 Complete",
    text: "Choose your path forward:",
    choices: [
      { text: "Trust The Architect", next: "Ending_Demo" },
      { text: "Seek Maya", next: "Ending_Demo" },
      { text: "Go alone", next: "Ending_Demo" }
    ]
  },
  Ending_Demo: {
    title: "Demo Complete",
    text: "This concludes the MVP demo. Full story coming soon! Your choices have been tracked.",
    choices: [{ text: "Play again", next: "Ep1_Start" }]
  }
};

// Simple auth endpoints
app.post('/api/auth/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  
  if (users.has(username)) {
    return res.status(409).json({ error: 'User already exists' });
  }
  
  const userId = Date.now().toString();
  users.set(username, { id: userId, username, password });
  sessions.set(userId, username);
  userProgress.set(userId, { 
    currentNode: 'Ep1_Start',
    choices: [],
    relationships: { maya: 0, architect: 0 }
  });
  
  res.json({ success: true, userId, username });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.get(username);
  
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  sessions.set(user.id, username);
  res.json({ success: true, userId: user.id, username });
});

// Story endpoints
app.post('/api/story/passage', (req, res) => {
  const { passage, userId } = req.body;
  const nodeId = passage || 'Ep1_Start';
  const node = story[nodeId];
  
  if (!node) {
    return res.status(404).json({ error: 'Passage not found' });
  }
  
  // Update progress
  if (userId && userProgress.has(userId)) {
    const progress = userProgress.get(userId);
    progress.currentNode = nodeId;
    userProgress.set(userId, progress);
  }
  
  res.json({
    currentPassage: nodeId,
    ...node
  });
});

app.post('/api/story/choice', (req, res) => {
  const { userId, choice, currentNode } = req.body;
  
  if (userId && userProgress.has(userId)) {
    const progress = userProgress.get(userId);
    progress.choices.push({ node: currentNode, choice });
    
    // Update relationships based on choice
    if (choice.toLowerCase().includes('maya')) {
      progress.relationships.maya += 1;
    }
    if (choice.toLowerCase().includes('architect')) {
      progress.relationships.architect += 1;
    }
    
    userProgress.set(userId, progress);
  }
  
  res.json({ success: true });
});

// AI endpoints (simplified)
app.post('/api/ai/analyze', (req, res) => {
  const { userId } = req.body;
  const progress = userProgress.get(userId) || { choices: [], relationships: {} };
  
  const analysis = {
    totalChoices: progress.choices.length,
    favoriteCharacter: progress.relationships.maya > progress.relationships.architect ? 'Maya' : 'The Architect',
    playStyle: progress.choices.length > 3 ? 'Explorer' : 'Cautious'
  };
  
  res.json({ analysis });
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Digital Wanderer MVP running on port ${PORT}`);
});

// === FRONTEND - public/index.html ===
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Digital Wanderer - MVP</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%);
      color: #eaf6fb;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .container {
      max-width: 700px;
      width: 90%;
      background: rgba(34, 43, 61, 0.9);
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid rgba(142, 237, 255, 0.2);
      backdrop-filter: blur(10px);
    }
    
    .hidden { display: none; }
    
    h1, h2 {
      color: #8eedff;
      text-align: center;
      margin-bottom: 1.5rem;
      text-shadow: 0 0 10px rgba(142, 237, 255, 0.3);
    }
    
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 300px;
      margin: 0 auto;
    }
    
    input {
      padding: 0.8rem;
      border: 1px solid rgba(142, 237, 255, 0.3);
      background: rgba(26, 35, 50, 0.8);
      color: #eaf6fb;
      border-radius: 6px;
      font-size: 1rem;
    }
    
    .btn {
      padding: 0.8rem 1.5rem;
      background: linear-gradient(135deg, #2683cc 0%, #1e6bb8 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .btn:hover {
      background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
      transform: translateY(-1px);
    }
    
    .story-text {
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 1.1em;
    }
    
    .choices {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    
    .choice {
      background: linear-gradient(135deg, #2683cc 0%, #1e6bb8 100%);
      color: white;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .choice:hover {
      background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
      transform: translateY(-1px);
    }
    
    .ai-panel {
      margin-top: 2rem;
      padding: 1rem;
      background: rgba(26, 35, 50, 0.6);
      border-radius: 8px;
      border: 1px solid rgba(142, 237, 255, 0.1);
    }
    
    .ai-response {
      margin-top: 1rem;
      padding: 1rem;
      background: rgba(38, 131, 204, 0.1);
      border-radius: 6px;
      border-left: 3px solid #8eedff;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Auth Screen -->
    <div id="authScreen">
      <h1>Digital Wanderer</h1>
      <div class="auth-form">
        <input type="text" id="username" placeholder="Username">
        <input type="password" id="password" placeholder="Password">
        <button class="btn" onclick="login()">Login</button>
        <button class="btn" onclick="register()">Register</button>
      </div>
    </div>
    
    <!-- Game Screen -->
    <div id="gameScreen" class="hidden">
      <h2 id="storyTitle">Digital Wanderer</h2>
      <div class="story-text" id="storyText"></div>
      <div class="choices" id="storyChoices"></div>
      
      <!-- AI Panel -->
      <div class="ai-panel">
        <h3 style="color: #8eedff;">ARIA - AI Guide</h3>
        <button class="btn" onclick="analyzeProgress()">Analyze My Journey</button>
        <div id="aiResponse" class="ai-response hidden"></div>
      </div>
    </div>
  </div>

  <script>
    let currentUser = null;
    let currentNode = 'Ep1_Start';
    
    async function register() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        if (data.success) {
          currentUser = data.userId;
          showGame();
          loadStory('Ep1_Start');
        } else {
          alert(data.error);
        }
      } catch (error) {
        alert('Registration failed: ' + error.message);
      }
    }
    
    async function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        if (data.success) {
          currentUser = data.userId;
          showGame();
          loadStory('Ep1_Start');
        } else {
          alert(data.error);
        }
      } catch (error) {
        alert('Login failed: ' + error.message);
      }
    }
    
    function showGame() {
      document.getElementById('authScreen').classList.add('hidden');
      document.getElementById('gameScreen').classList.remove('hidden');
    }
    
    async function loadStory(nodeId) {
      try {
        const response = await fetch('/api/story/passage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ passage: nodeId, userId: currentUser })
        });
        
        const data = await response.json();
        currentNode = nodeId;
        
        document.getElementById('storyTitle').textContent = data.title;
        document.getElementById('storyText').textContent = data.text;
        
        const choicesContainer = document.getElementById('storyChoices');
        choicesContainer.innerHTML = '';
        
        if (data.choices) {
          data.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice';
            button.textContent = choice.text;
            button.onclick = () => makeChoice(choice);
            choicesContainer.appendChild(button);
          });
        }
      } catch (error) {
        alert('Failed to load story: ' + error.message);
      }
    }
    
    async function makeChoice(choice) {
      try {
        await fetch('/api/story/choice', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            userId: currentUser, 
            choice: choice.text, 
            currentNode 
          })
        });
        
        loadStory(choice.next);
      } catch (error) {
        alert('Failed to make choice: ' + error.message);
      }
    }
    
    async function analyzeProgress() {
      try {
        const response = await fetch('/api/ai/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: currentUser })
        });
        
        const data = await response.json();
        const responseDiv = document.getElementById('aiResponse');
        responseDiv.innerHTML = \`
          <strong>Journey Analysis:</strong><br>
          Total Choices: \${data.analysis.totalChoices}<br>
          Play Style: \${data.analysis.playStyle}<br>
          Favorite Character: \${data.analysis.favoriteCharacter}
        \`;
        responseDiv.classList.remove('hidden');
      } catch (error) {
        alert('Analysis failed: ' + error.message);
      }
    }
  </script>
</body>
</html>`;

// === DEPLOYMENT FILES ===

const packageJson = {
  "name": "digital-wanderer-mvp",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
};

const vercelJson = {
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/server.js" }]
};

// === QUICK DEPLOYMENT GUIDE ===
const deploymentSteps = [
  "1. Create new folder: mkdir digital-wanderer-mvp",
  "2. Copy server.js code above into server.js file",
  "3. Create public folder: mkdir public",
  "4. Save HTML content above as public/index.html", 
  "5. Save package.json content above as package.json",
  "6. Run: npm install",
  "7. Test locally: npm start (visit localhost:3000)",
  "8. Deploy to Vercel: npx vercel --prod",
  "9. Or deploy to Railway: railway login && railway deploy"
];

module.exports = {
  server: app,
  htmlContent,
  packageJson,
  vercelJson,
  deploymentSteps
};