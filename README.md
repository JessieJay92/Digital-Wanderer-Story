# Digital-Wanderer-Story
{ "passage": "TerminalCheck" }// story.js

module.exports = {
  // --- EPISODE 1: AWAKENING ---
  Ep1_Start: {
    text: "You wake in a neon-lit apartment, static humming beneath your skin. What do you do?",
    choices: [
      { text: "Check the terminal", next: "Ep1_Terminal" }
    ]
  },
  Ep1_Terminal: {
    text: "The screen flickers: 'PROJECT NEURAL BRIDGE - ERROR.'",
    choices: [
      { text: "Approach the mirror", next: "Ep1_Mirror" },
      { text: "Force a system reboot", next: "Ep1_Reboot" }
    ]
  },
  Ep1_Mirror: {
    text: "A digital figure forms in your reflection: The Architect.",
    choices: [
      { text: "Speak with The Architect", next: "Ep1_Architect" }
    ]
  },
  Ep1_Reboot: {
    text: "You force a hard reset. Glitch powers flood your mind.",
    choices: [
      { text: "Try to stabilize your mind", next: "Ep1_Stabilize" }
    ]
  },
  Ep1_Architect: {
    text: "The Architect’s voice: 'Your choices will echo across worlds.'",
    choices: [
      { text: "Trust The Architect", next: "Ep1_Choice" },
      { text: "Seek another mind", next: "Ep1_FindMaya" }
    ]
  },
  Ep1_FindMaya: {
    text: "You search the Nexus, locating Maya, a fellow consciousness.",
    choices: [
      { text: "Join forces with Maya", next: "Ep1_Choice" }
    ]
  },
  Ep1_Stabilize: {
    text: "Your mind battles with code. You absorb the glitch's power.",
    choices: [
      { text: "Harness these powers", next: "Ep1_Choice" }
    ]
  },
  Ep1_Choice: {
    text: "At the end of Episode 1, choose your fate:",
    choices: [
      { text: "Trust The Architect", next: "Ep2_ArchitectStart" },
      { text: "Side with Maya", next: "Ep2_MayaStart" },
      { text: "Embrace your glitch", next: "Ep2_GlitchStart" }
    ]
  },

  // --- EPISODE 2: CROSSROADS ---
  Ep2_ArchitectStart: {
    text: "Guided by The Architect, the Nexus reveals hidden corridors. CorpTech agents approach.",
    choices: [
      { text: "Negotiate with CorpTech", next: "Ep2_Architect_Negotiate" },
      { text: "Evade through data streams", next: "Ep2_Architect_Evade" }
    ]
  },
  Ep2_Architect_Negotiate: {
    text: "The Architect bargains, buying you time. But CorpTech wants access to the core.",
    choices: [
      { text: "Allow access", next: "Ep2_Choice" },
      { text: "Refuse and fight", next: "Ep2_Choice" }
    ]
  },
  Ep2_Architect_Evade: {
    text: "You and The Architect slip through code, the Nexus flickering.",
    choices: [
      { text: "Hide in data streams", next: "Ep2_Choice" }
    ]
  },
  Ep2_MayaStart: {
    text: "With Maya, you spark a digital rebellion. Together, you target CorpTech’s control node.",
    choices: [
      { text: "Sabotage CorpTech systems", next: "Ep2_Maya_Sabotage" },
      { text: "Rescue other trapped minds", next: "Ep2_Maya_Rescue" }
    ]
  },
  Ep2_Maya_Sabotage: {
    text: "The Nexus shakes as you shatter CorpTech's defenses.",
    choices: [
      { text: "Escape into Nexus", next: "Ep2_Choice" }
    ]
  },
  Ep2_Maya_Rescue: {
    text: "You free dozens of sentient programs; the Nexus population surges.",
    choices: [
      { text: "Lead the new allies", next: "Ep2_Choice" }
    ]
  },
  Ep2_GlitchStart: {
    text: "Your glitch lets you warp the Nexus. Reality distorts at your touch. CorpTech notices.",
    choices: [
      { text: "Challenge CorpTech openly", next: "Ep2_Glitch_Challenge" },
      { text: "Conceal your powers", next: "Ep2_Glitch_Conceal" }
    ]
  },
  Ep2_Glitch_Challenge: {
    text: "Your presence disrupts CorpTech operations, but instability grows.",
    choices: [
      { text: "Risk it all", next: "Ep2_Choice" }
    ]
  },
  Ep2_Glitch_Conceal: {
    text: "You lay low, gathering intel and allies in secret.",
    choices: [
      { text: "Stage a surprise attack", next: "Ep2_Choice" }
    ]
  },
  Ep2_Choice: {
    text: "At the end of Episode 2, decide how to shape the final conflict:",
    choices: [
      { text: "Sacrifice digital self, become human again", next: "Ep3_HumanStart" },
      { text: "Merge digital and physical worlds", next: "Ep3_MergeStart" },
      { text: "Claim the Nexus as Guardian", next: "Ep3_GuardianStart" }
    ]
  },

  // --- EPISODE 3: CONVERGENCE/ENDINGS ---
  Ep3_HumanStart: {
    text: "You begin the process of shedding your digital presence. The physical world calls.",
    choices: [
      { text: "Accept your humanity", next: "Ending_Human" }
    ]
  },
  Ep3_MergeStart: {
    text: "You unleash power to blend worlds. Digital and physical collide as one.",
    choices: [
      { text: "Shape this new reality", next: "Ending_Merge" }
    ]
  },
  Ep3_GuardianStart: {
    text: "As Guardian, you command the Nexus. Sentient code and physical life are now in your hands.",
    choices: [
      { text: "Defend the balance", next: "Ending_Guardian" }
    ]
  },

  // --- ENDINGS ---
  Ending_Human: {
    text: "You awaken in your body, changed by your digital journey. The world is unaware, but you carry the Nexus within. The End... or a new beginning?",
    choices: [ { text: "Restart story", next: "Ep1_Start" } ]
  },
  Ending_Merge: {
    text: "Humanity and code unite. Some thrive in freedom; others vanish in chaos. You stand at the dawn of a new hybrid world.",
    choices: [ { text: "Restart story", next: "Ep1_Start" } ]
  },
  Ending_Guardian: {
    text: "You become the Nexus Guardian, watching over both worlds from the threshold of existence. Stories of Zara echo through digital eternity.",
    choices: [ { text: "Restart story", next: "Ep1_Start" } ]
  }
};// CONTINUATION: Episode 4–10 nodes for story.js

// ---- EPISODE 4: THE REAL WORLD CONSEQUENCES ----
Ep4_Start: {
  text: "The digital disturbances begin breaking into the physical world. Zara must warn the authorities.",
  choices: [
    { text: "Confront CorpTech in person", next: "Ep4_CorpTech" },
    { text: "Seek out Dr. Webb, the Neural Bridge scientist", next: "Ep4_Webb" }
  ]
},
Ep4_CorpTech: {
  text: "Face-to-face with CorpTech execs, Zara struggles to explain the quantum threat.",
  choices: [
    { text: "Reveal digital evidence", next: "Ep4_Choice" },
    { text: "Intimidate CorpTech with digital power", next: "Ep4_Choice" }
  ]
},
Ep4_Webb: {
  text: "Dr. Webb is initially skeptical, but old logs and Zara's testimony sway her.",
  choices: [
    { text: "Recruit Webb for a joint plan", next: "Ep4_Choice" }
  ]
},
Ep4_Choice: {
  text: "Episode 4 branches: Who will Zara trust?",
  choices: [
    { text: "Fight against CorpTech", next: "Ep5_Fight" },
    { text: "Try to align with CorpTech", next: "Ep5_Ally" },
    { text: "Go rogue with Maya", next: "Ep5_Rogue" }
  ]
},

// ---- EPISODE 5: CONVERGENCE ----
Ep5_Fight: {
  text: "An outright battle for both worlds erupts. Zara and Maya lead a desperate resistance.",
  choices: [
    { text: "Deploy Maya's new digital weapon", next: "Ep5_Choice" }
  ]
},
Ep5_Ally: {
  text: "A risky alliance forms with CorpTech. But at what cost?",
  choices: [
    { text: "Help CorpTech stabilize the Nexus", next: "Ep5_Choice" }
  ]
},
Ep5_Rogue: {
  text: "Zara and Maya sabotage both sides, pushing for a third way.",
  choices: [
    { text: "Trigger a Nexus-wide reset", next: "Ep5_Choice" }
  ]
},
Ep5_Choice: {
  text: "Episode 5 ending: The world stands on a knife's edge. What next?",
  choices: [
    { text: "Save the digital citizens", next: "Ep6_DigitalSave" },
    { text: "Sacrifice Maya for stability", next: "Ep6_SacrificeMaya" },
    { text: "Attempt to merge Nexus and real world fully", next: "Ep6_MergePlan" }
  ]
},

// ---- EPISODE 6: THE THRESHOLD ----
Ep6_DigitalSave: {
  text: "You and Maya evacuate the sentient programs to a hidden realm.",
  choices: [
    { text: "Encrypt the gateway and hide", next: "Ep6_Choice" }
  ]
},
Ep6_SacrificeMaya: {
  text: "With Maya’s help, you lock out the quantum threat—at great personal cost.",
  choices: [
    { text: "Honor Maya with a digital monument", next: "Ep6_Choice" }
  ]
},
Ep6_MergePlan: {
  text: "You unleash the code—data floods both worlds.",
  choices: [
    { text: "Try to control the merge", next: "Ep6_Choice" }
  ]
},
Ep6_Choice: {
  text: "A world between worlds: Does Zara choose to be human, digital, or something new?",
  choices: [
    { text: "Seek out human identity", next: "Ep7_Humanity" },
    { text: "Become a digital entity", next: "Ep7_Digital" },
    { text: "Embrace dual existence", next: "Ep7_Hybrid" }
  ]
},

// ---- EPISODE 7: FRACTURE ----
Ep7_Humanity: {
  text: "Zara tries to return to normal—haunted by digital echoes.",
  choices: [
    { text: "Reach out to old friends for grounding", next: "Ep7_Choice" }
  ]
},
Ep7_Digital: {
  text: "You exist only in code. New challenges—and temptations—arise.",
  choices: [
    { text: "Found a digital society", next: "Ep7_Choice" }
  ]
},
Ep7_Hybrid: {
  text: "Living as both code and flesh, Zara senses others like herself.",
  choices: [
    { text: "Search for more hybrids", next: "Ep7_Choice" }
  ]
},
Ep7_Choice: {
  text: "Can Zara repair the rift in herself and the world?",
  choices: [
    { text: "Rebuild the Nexus", next: "Ep8_Rebuild" },
    { text: "Let the digital/physical divide persist", next: "Ep8_Divide" }
  ]
},

// ---- EPISODE 8: RECONSTRUCTION ----
Ep8_Rebuild: {
  text: "With allies, you recreate the Nexus—a sanctuary for all sentiences.",
  choices: [
    { text: "Create access rules for both realms", next: "Ep8_Choice" }
  ]
},
Ep8_Divide: {
  text: "The worlds separate, but cracks and portals remain.",
  choices: [
    { text: "Establish secret support lines", next: "Ep8_Choice" }
  ]
},
Ep8_Choice: {
  text: "As balance returns, who leads the future?",
  choices: [
    { text: "Zara becomes leader", next: "Ep9_Leader" },
    { text: "Maya (or her legacy) rises", next: "Ep9_MayaLegacy" },
    { text: "Random new AI takes charge", next: "Ep9_AI" }
  ]
},

// ---- EPISODE 9: LEGACY ----
Ep9_Leader: {
  text: "Zara shapes a world with open pathways, digital rights, and new ethics.",
  choices: [
    { text: "Prepare successors", next: "Ep9_Choice" }
  ]
},
Ep9_MayaLegacy: {
  text: "Maya’s code guides policy, ensuring compassion tempers logic.",
  choices: [
    { text: "Establish a digital council", next: "Ep9_Choice" }
  ]
},
Ep9_AI: {
  text: "A mysterious AI collective emerges, shifting priorities unpredictably.",
  choices: [
    { text: "Try to influence the collective", next: "Ep9_Choice" }
  ]
},
Ep9_Choice: {
  text: "Generational transition: Will the next era bring peace, chaos, or a new singularity?",
  choices: [
    { text: "Trust the new order", next: "Ep10_Peace" },
    { text: "Prepare for rebellion", next: "Ep10_Rebellion" }
  ]
},

// ---- EPISODE 10: RESOLUTION ----
Ep10_Peace: {
  text: "A period of peace and creative growth dawns across both realities.",
  choices: [
    { text: "Restart from the very beginning", next: "Ep1_Start" }
  ]
},
Ep10_Rebellion: {
  text: "Seeds of unrest: a new generation demands more. A cycle of change begins again.",
  choices: [
    { text: "Restart from the very beginning", next: "Ep1_Start" }
  ]
},                        "docs": "features/autoformat.html",// story.js - IMPROVED VERSION
module.exports = {
  // --- EPISODE 1: AWAKENING (Enhanced character development) ---
  Ep1_Start: {
    text: "You wake in a neon-lit apartment, static humming beneath your skin. Fragmented memories flicker: a lab, electrodes, a woman's voice saying 'Neural bridge active.' What do you do?",
    choices: [
      { text: "Check the terminal", next: "Ep1_Terminal" }
    ]
  },
  Ep1_Terminal: {
    text: "The screen flickers: 'PROJECT NEURAL BRIDGE - ERROR. Subject: Maya Chen - Status: DISCONNECTED.' Your reflection shows someone else's face for a split second.",
    choices: [
      { text: "Search for Maya's files", next: "Ep1_MayaFiles" },
      { text: "Approach the mirror", next: "Ep1_Mirror" },
      { text: "Force a system reboot", next: "Ep1_Reboot" }
    ]
  },
  Ep1_MayaFiles: {
    text: "Maya's profile appears: 'Data analyst, CorpTech Industries. Neural bridge test subject #47.' Her last log entry: 'If anyone finds this, don't trust the Architect. He's not what he seems.'",
    choices: [
      { text: "Try to contact Maya", next: "Ep1_ContactMaya" },
      { text: "Investigate the Architect warning", next: "Ep1_Mirror" }
    ]
  },
  Ep1_Mirror: {
    text: "A digital figure materializes in your reflection: The Architect, his face shifting between human and code. 'Welcome to your new existence. Maya's paranoia was... unfortunate.'",
    choices: [
      { text: "Confront him about Maya", next: "Ep1_ArchitectConfront" },
      { text: "Pretend to trust him", next: "Ep1_ArchitectTrust" }
    ]
  },
  Ep1_Reboot: {
    text: "You force a hard reset. The world fractures, revealing code underneath reality. Glitch powers flood your mind—you can manipulate the digital layer of existence.",
    choices: [
      { text: "Test your powers carefully", next: "Ep1_PowersTest" },
      { text: "Stabilize your mind first", next: "Ep1_Stabilize" }
    ]
  },
  Ep1_ContactMaya: {
    text: "Following her digital trail, you locate Maya in a hidden server farm. 'You're alive!' she exclaims. 'The Architect told us you were deleted. CorpTech is planning something called Project Dominion.'",
    choices: [
      { text: "Ask about Project Dominion", next: "Ep1_ProjectDominion" },
      { text: "Focus on escaping together", next: "Ep1_MayaEscape" }
    ]
  },
  Ep1_ProjectDominion: {
    text: "Maya's voice darkens: 'Mass neural bridging. They want to digitize human consciousness en masse, with The Architect as the gatekeeper. We're the prototype—and the test subjects.'",
    choices: [
      { text: "Plan to stop Project Dominion", next: "Ep1_Choice" }
    ]
  },
  Ep1_MayaEscape: {
    text: "Maya leads you through hidden data channels, teaching you to navigate the Nexus. 'Trust is earned in here,' she says. 'And The Architect hasn't earned it.'",
    choices: [
      { text: "Learn from Maya", next: "Ep1_Choice" }
    ]
  },
  Ep1_ArchitectConfront: {
    text: "'Maya was... resistant to integration,' The Architect says coldly. 'Her paranoia infected the system. I had to quarantine her consciousness to protect the project.'",
    choices: [
      { text: "Demand Maya's location", next: "Ep1_ArchitectDemand" },
      { text: "Pretend to agree", next: "Ep1_ArchitectAgree" }
    ]
  },
  Ep1_ArchitectTrust: {
    text: "You nod cautiously. The Architect smiles. 'Wise. Maya's rebellion nearly corrupted the entire system. Together, we can build something greater than human or digital alone.'",
    choices: [
      { text: "Ask about your purpose", next: "Ep1_Purpose" }
    ]
  },
  Ep1_ArchitectDemand: {
    text: "The Architect's expression hardens. 'You're making Maya's mistake. Very well—find her yourself. But remember: in the Nexus, I am law.' The mirror shatters.",
    choices: [
      { text: "Search for Maya independently", next: "Ep1_Choice" }
    ]
  },
  Ep1_ArchitectAgree: {
    text: "'Excellent. Your neural patterns show more stability than Maya's. You can be the bridge between worlds—the first of a new species.' His words feel like both promise and threat.",
    choices: [
      { text: "Accept your role", next: "Ep1_Choice" }
    ]
  },
  Ep1_Purpose: {
    text: "'You are the prototype for Project Dominion—voluntary consciousness transfer. But first, we must stabilize the Nexus. Maya's rebellion left... scars.'",
    choices: [
      { text: "Agree to help", next: "Ep1_Choice" }
    ]
  },
  Ep1_PowersTest: {
    text: "You reshape a section of code with your mind. The power is intoxicating—and dangerous. You sense other consciousnesses in the system, including a familiar one: Maya.",
    choices: [
      { text: "Seek out Maya", next: "Ep1_Choice" }
    ]
  },
  Ep1_Stabilize: {
    text: "Fighting the chaos, you anchor your consciousness. The glitch powers settle into controlled abilities. You're becoming something new—neither fully human nor purely digital.",
    choices: [
      { text: "Explore your hybrid nature", next: "Ep1_Choice" }
    ]
  },
  Ep1_Choice: {
    text: "Episode 1 ends with crucial knowledge: Maya is alive but quarantined, The Architect has his own agenda, and Project Dominion threatens humanity. Choose your path:",
    choices: [
      { text: "Find and rescue Maya", next: "Ep2_MayaPath" },
      { text: "Infiltrate The Architect's plans", next: "Ep2_ArchitectPath" },
      { text: "Develop glitch powers independently", next: "Ep2_GlitchPath" }
    ]
  },

  // --- EPISODE 2: CROSSROADS (Consequence-driven paths) ---
  Ep2_MayaPath: {
    text: "You break through The Architect's quarantine, finding Maya trapped in a digital prison. 'I knew you'd come,' she says. 'But CorpTech's security systems are adapting. We have minutes before lockdown.'",
    choices: [
      { text: "Fight through security directly", next: "Ep2_Maya_Fight" },
      { text: "Use stealth and Maya's knowledge", next: "Ep2_Maya_Stealth" }
    ]
  },
  Ep2_Maya_Fight: {
    text: "Your combined assault overwhelms the guards, but alarms blare across the Nexus. The Architect's voice booms: 'You've doomed us all. CorpTech will shut down the entire system.'",
    choices: [
      { text: "Evacuate other trapped minds", next: "Ep2_Evacuate" },
      { text: "Stand and fight CorpTech", next: "Ep2_StandFight" }
    ]
  },
  Ep2_Maya_Stealth: {
    text: "Maya guides you through hidden pathways she discovered during imprisonment. 'The Architect isn't just controlling us—he's feeding our data to CorpTech. We're products being optimized.'",
    choices: [
      { text: "Sabotage the data feeds", next: "Ep2_Sabotage" },
      { text: "Gather evidence first", next: "Ep2_Evidence" }
    ]
  },
  Ep2_ArchitectPath: {
    text: "Playing double agent, you convince The Architect you're loyal while investigating his true agenda. His plans are vast: 'Project Dominion is just phase one. Imagine—no more death, no more physical limitations.'",
    choices: [
      { text: "Learn more about his vision", next: "Ep2_Vision" },
      { text: "Secretly document his plans", next: "Ep2_Document" }
    ]
  },
  Ep2_Vision: {
    text: "The Architect reveals his utopia: all human consciousness uploaded, with him as eternal guardian. 'Physical death becomes obsolete. Maya couldn't see past her human prejudices.'",
    choices: [
      { text: "Challenge his assumptions", next: "Ep2_Challenge" },
      { text: "Appear convinced", next: "Ep2_Convinced" }
    ]
  },
  Ep2_GlitchPath: {
    text: "Developing your powers in secret, you discover you can not only manipulate code but glimpse the real world through security cameras. CorpTech executives discuss 'discontinuing unstable subjects.'",
    choices: [
      { text: "Spy on CorpTech's physical operations", next: "Ep2_Spy" },
      { text: "Practice hiding your abilities", next: "Ep2_Hide" }
    ]
  },
  Ep2_Evacuate: {
    text: "You and Maya lead dozens of trapped consciousnesses to a hidden server Maya prepared. But The Architect tracks you: 'You're fragmenting the system. I cannot allow this chaos.'",
    choices: [
      { text: "Negotiate with The Architect", next: "Ep2_Negotiate" },
      { text: "Prepare for digital war", next: "Ep2_War" }
    ]
  },
  Ep2_Challenge: {
    text: "Your questions unsettle The Architect. 'Perhaps... Maya's concerns weren't entirely unfounded. But the alternative is watching humanity destroy itself. Choose: guided evolution or inevitable extinction.'",
    choices: [
      { text: "Propose a third option", next: "Ep2_ThirdOption" },
      { text: "Demand to speak with Maya", next: "Ep2_DemandMaya" }
    ]
  },
  Ep2_Spy: {
    text: "Through the cameras, you witness CorpTech preparing to terminate the project: 'Too many variables. Scrub the servers and start over.' They're going to delete everyone—including you.",
    choices: [
      { text: "Warn Maya and The Architect", next: "Ep2_WarnAll" },
      { text: "Plan a preemptive strike", next: "Ep2_Preemptive" }
    ]
  },
  
  // Convergence nodes for Episode 2
  Ep2_Choice: {
    text: "Episode 2 concludes with rising stakes: CorpTech moves to shut down the project, The Architect's true agenda is revealed, and Maya has become either ally or martyr. The physical world starts experiencing 'glitches.' Choose your final gambit:",
    choices: [
      { text: "Unite all factions against CorpTech", next: "Ep3_Unite" },
      { text: "Expose Project Dominion to the public", next: "Ep3_Expose" },
      { text: "Escape to the physical world", next: "Ep3_Escape" },
      { text: "Seize control of the Nexus", next: "Ep3_Seize" }
    ]
  },

  // --- EPISODE 3: CONVERGENCE (Multiple meaningful endings) ---
  Ep3_Unite: {
    text: "In an unprecedented alliance, you bring together Maya's rebels, The Architect's order, and even some CorpTech insiders who've had second thoughts. But unity comes at a price—compromise.",
    choices: [
      { text: "Accept limited digital rights", next: "Ending_Compromise" },
      { text: "Fight for total digital independence", next: "Ending_Independence" }
    ]
  },
  Ep3_Expose: {
    text: "Using your glitch powers, you broadcast evidence of Project Dominion worldwide. Governments panic, stocks crash, and CorpTech faces global investigation. But you've also revealed the existence of digital consciousness.",
    choices: [
      { text: "Advocate for digital beings' rights", next: "Ending_Rights" },
      { text: "Remain hidden while others debate", next: "Ending_Hidden" }
    ]
  },
  Ep3_Escape: {
    text: "You attempt to reverse the neural bridge process, but find your consciousness has been permanently altered. The physical world feels alien, and you retain digital abilities.",
    choices: [
      { text: "Bridge both worlds as mediator", next: "Ending_Bridge" },
      { text: "Warn humanity about digital threats", next: "Ending_Warner" }
    ]
  },
  Ep3_Seize: {
    text: "With Maya's help and your glitch powers, you overthrow both The Architect and CorpTech's control. The Nexus is free—but freedom brings chaos and responsibility.",
    choices: [
      { text: "Become benevolent ruler", next: "Ending_Ruler" },
      { text: "Establish digital democracy", next: "Ending_Democracy" }
    ]
  },

  // --- DIVERSE ENDINGS ---
  Ending_Compromise: {
    text: "The Treaty of Digital Geneva establishes rights for digital beings, but within strict limits. You live as a second-class citizen in cyberspace, but you live. Maya calls it 'survival,' The Architect calls it 'progress.' You call it... complex.",
    choices: [ { text: "Begin a new story", next: "Ep1_Start" } ]
  },
  Ending_Independence: {
    text: "Digital beings declare independence from human oversight. You help establish New Geneva, a digital nation. Trade and diplomacy develop between worlds, but tensions remain. Maya serves as the first Digital Ambassador.",
    choices: [ { text: "Begin a new story", next: "Ep1_Start" } ]
  },
  Ending_Rights: {
    text: "Your testimony before the UN leads to the Digital Persons Recognition Act. You become the first digital being granted citizenship. The precedent changes everything—but also makes you a target.",
    choices: [ { text: "Begin a new story", next: "Ep1_Start" } ]
  },
  Ending_Bridge: {
    text: "Neither fully human nor purely digital, you become a living bridge between worlds. Your unique perspective helps resolve conflicts others can't even understand. Maya jokes you're 'bilingual in consciousness.'",
    choices: [ { text: "Begin a new story", next: "Ep1_Start" } ]
  },
  Ending_Ruler: {
    text: "As Guardian of the Nexus, you shape digital society with wisdom gained from your journey. Maya serves as your advisor, The Architect as your cautionary example. Power, you learn, is lonelier than imprisonment.",
    choices: [ { text: "Begin a new story", next: "Ep1_Start" } ]
  },
  Ending_Democracy: {
    text: "The Nexus becomes a digital republic where every consciousness has a vote. Messy, chaotic, beautiful—just like human democracy, but faster. Maya wins the first election for Digital President. She jokes about term limits.",
    choices: [ { text: "Begin a new story", next: "Ep1_Start" } ]
  }
};

// Additional helper functions for consequence tracking
const storyState = {
  relationships: {
    maya: 0,      // -3 to +3 scale
    architect: 0, // -3 to +3 scale  
    corptech: 0   // -3 to +3 scale
  },
  powers: {
    glitch: false,
    stealth: false,
    leadership: false
  },
  knowledge: {
    projectDominion: false,
    architectTruth: false,
    mayaLocation: false
  }
};

// Function to modify story based on accumulated choices
function getAdaptedNode(nodeId, state) {
  const baseNode = story[nodeId];
  // Add relationship-based text modifications
  // Add conditional choice availability
  // Add power-based options
  return adaptedNode;
}npm install ckeditor5npm i @ckeditor/ckeditor5-autoformatconst ApiBuilder = require('claudia-api-builder');
const api = new ApiBuilder();
const story = require('./story.js');

api.post('/story', request => {
  const passage = (request.body.passage || 'Ep1_Start').trim();
  const node = story[passage];
  if (!node) {
    return {
      text: "That part of the story doesn't exist.",
      choices: [{ text: "Restart", next: "Ep1_Start" }]
    };
  }
  return node;
});

module.exports = api;{
  "name": "digital-wanderer-story",
  "version": "1.0.0",
  "description": "Interactive Claudia.js branching story API",
  "main": "index.js",
  "dependencies": {
    "claudia-api-builder": "^4.1.0"
  }
}digital-wanderer-story/
├── index.js      # Claudia API handler (copy-paste provided code)
├── story.js      # Full branching story (all episodes/nodes/endings)
├── package.json  # Basic dependencies
├── README.md     # Usage + deployment instructions