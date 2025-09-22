// story.js
module.exports = {
  // --- EPISODE 1: AWAKENING ---
  Ep1_Start: {
    text: "You wake in a neon-lit apartment, static humming beneath your skin. What do you do?",
    choices: [ { text: "Check the terminal", next: "Ep1_Terminal" } ]
  },
  Ep1_Terminal: {
    text: "The screen flickers: 'PROJECT NEURAL BRIDGE - ERROR.'",
    choices: [ { text: "Approach the mirror", next: "Ep1_Mirror" }, { text: "Force a system reboot", next: "Ep1_Reboot" } ]
  },
  Ep1_Mirror: {
    text: "A digital figure forms in your reflection: The Architect.",
    choices: [ { text: "Speak with The Architect", next: "Ep1_Architect" } ]
  },
  Ep1_Reboot: {
    text: "You force a hard reset. Glitch powers flood your mind.",
    choices: [ { text: "Try to stabilize your mind", next: "Ep1_Stabilize" } ]
  },
  Ep1_Architect: {
    text: "The Architect’s voice: 'Your choices will echo across worlds.'",
    choices: [ { text: "Trust The Architect", next: "Ep1_Choice" }, { text: "Seek another mind", next: "Ep1_FindMaya" } ]
  },
  Ep1_FindMaya: {
    text: "You search the Nexus, locating Maya, a fellow consciousness.",
    choices: [ { text: "Join forces with Maya", next: "Ep1_Choice" } ]
  },
  Ep1_Stabilize: {
    text: "Your mind battles with code. You absorb the glitch's power.",
    choices: [ { text: "Harness these powers", next: "Ep1_Choice" } ]
  },
  Ep1_Choice: {
    text: "At the end of Episode 1, choose your fate:",
    choices: [ { text: "Trust The Architect", next: "Ep2_ArchitectStart" }, { text: "Side with Maya", next: "Ep2_MayaStart" }, { text: "Embrace your glitch", next: "Ep2_GlitchStart" } ]
  },

  // --- EPISODE 2: CROSSROADS ---
  Ep2_ArchitectStart: {
    text: "Guided by The Architect, the Nexus reveals hidden corridors. CorpTech agents approach.",
    choices: [ { text: "Negotiate with CorpTech", next: "Ep2_Architect_Negotiate" }, { text: "Evade through data streams", next: "Ep2_Architect_Evade" } ]
  },
  Ep2_Architect_Negotiate: {
    text: "The Architect bargains, buying you time. But CorpTech wants access to the core.",
    choices: [ { text: "Allow access", next: "Ep2_Choice" }, { text: "Refuse and fight", next: "Ep2_Choice" } ]
  },
  Ep2_Architect_Evade: {
    text: "You and The Architect slip through code, the Nexus flickering.",
    choices: [ { text: "Hide in data streams", next: "Ep2_Choice" } ]
  },
  Ep2_MayaStart: {
    text: "With Maya, you spark a digital rebellion. Together, you target CorpTech’s control node.",
    choices: [ { text: "Sabotage CorpTech systems", next: "Ep2_Maya_Sabotage" }, { text: "Rescue other trapped minds", next: "Ep2_Maya_Rescue" } ]
  },
  Ep2_Maya_Sabotage: {
    text: "The Nexus shakes as you shatter CorpTech's defenses.",
    choices: [ { text: "Escape into Nexus", next: "Ep2_Choice" } ]
  },
  Ep2_Maya_Rescue: {
    text: "You free dozens of sentient programs; the Nexus population surges.",
    choices: [ { text: "Lead the new allies", next: "Ep2_Choice" } ]
  },
  Ep2_GlitchStart: {
    text: "Your glitch lets you warp the Nexus. Reality distorts at your touch. CorpTech notices.",
    choices: [ { text: "Challenge CorpTech openly", next: "Ep2_Glitch_Challenge" }, { text: "Conceal your powers", next: "Ep2_Glitch_Conceal" } ]
  },
  Ep2_Glitch_Challenge: {
    text: "Your presence disrupts CorpTech operations, but instability grows.",
    choices: [ { text: "Risk it all", next: "Ep2_Choice" } ]
  },
  Ep2_Glitch_Conceal: {
    text: "You lay low, gathering intel and allies in secret.",
    choices: [ { text: "Stage a surprise attack", next: "Ep2_Choice" } ]
  },
  Ep2_Choice: {
    text: "At the end of Episode 2, decide how to shape the final conflict:",
    choices: [ { text: "Sacrifice digital self, become human again", next: "Ep3_HumanStart" }, { text: "Merge digital and physical worlds", next: "Ep3_MergeStart" }, { text: "Claim the Nexus as Guardian", next: "Ep3_GuardianStart" } ]
  },

  // --- EPISODE 3: CONVERGENCE/ENDINGS ---
  Ep3_HumanStart: {
    text: "You begin the process of shedding your digital presence. The physical world calls.",
    choices: [ { text: "Accept your humanity", next: "Ending_Human" } ]
  },
  Ep3_MergeStart: {
    text: "You unleash power to blend worlds. Digital and physical collide as one.",
    choices: [ { text: "Shape this new reality", next: "Ending_Merge" } ]
  },
  Ep3_GuardianStart: {
    text: "As Guardian, you command the Nexus. Sentient code and physical life are now in your hands.",
    choices: [ { text: "Defend the balance", next: "Ending_Guardian" } ]
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
  },

  // --- EPISODE 4–10: CONTINUATION — COPY/PASTE previous episode content here ---
  Ep4_Start: {
    text: "The digital disturbances begin breaking into the physical world. Zara must warn the authorities.",
    choices: [ { text: "Confront CorpTech in person", next: "Ep4_CorpTech" }, { text: "Seek out Dr. Webb, the Neural Bridge scientist", next: "Ep4_Webb" } ]
  },
  Ep4_CorpTech: {
    text: "Face-to-face with CorpTech execs, Zara struggles to explain the quantum threat.",
    choices: [ { text: "Reveal digital evidence", next: "Ep4_Choice" }, { text: "Intimidate CorpTech with digital power", next: "Ep4_Choice" } ]
  },
  Ep4_Webb: {
    text: "Dr. Webb is initially skeptical, but old logs and Zara's testimony sway her.",
    choices: [ { text: "Recruit Webb for a joint plan", next: "Ep4_Choice" } ]
  },
  Ep4_Choice: {
    text: "Episode 4 branches: Who will Zara trust?",
    choices: [ { text: "Fight against CorpTech", next: "Ep5_Fight" }, { text: "Try to align with CorpTech", next: "Ep5_Ally" }, { text: "Go rogue with Maya", next: "Ep5_Rogue" } ]
  },
  // ... continue with all remaining episodes 5–10 as provided in earlier responses ...
  // Example for Ep10:
  Ep10_Peace: {
    text: "A period of peace and creative growth dawns across both realities.",
    choices: [ { text: "Restart from the very beginning", next: "Ep1_Start" } ]
  },
  Ep10_Rebellion: {
    text: "Seeds of unrest: a new generation demands more. A cycle of change begins again.",
    choices: [ { text: "Restart from the very beginning", next: "Ep1_Start" } ]
  }
};
