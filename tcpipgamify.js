

// GAME_RUNNER: Networking overview of the OSI model, including sharing key deployment concepts. | hide_edit: true

// Import for GameRunner
import GameControl from '/assets/js/GameEnginev1.1/essentials/GameControl.js';
// Level Code
import GameEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import NPC from '/assets/js/GameEnginev1.1/essentials/Npc.js';
import AiNpc from '/assets/js/GameEnginev1.1/essentials/AiNpc.js';

class CustomLevel {
  constructor(gameEnv) {
    const path = gameEnv.path;
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;
    
    const bgData = {
        name: 'custom_bg',
        src: path + "/images/gamify/comics/network-stack/7-layers-of-osi-model.png",
    };

    const playerData = {
      id: 'Hero',
      src: path + "/images/gamify/chillguy.png",
      SCALE_FACTOR: 5,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height * .15 },
      pixels: { height: 512, width: 384 },
      orientation: { rows: 4, columns: 3 },
      down: { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
      downLeft: { row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
      right: { row: 1, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      upRight: { row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
      upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    const npcData1 = {
      id: 'Application Layer',
      greeting: 'Layer 7: This is where network applications and their protocols operate. It provides services directly to user applications, such as web browsers and email clients.',
      SCALE_FACTOR: 8,
      INIT_POSITION: { x: width * .06, y: height * .46 },
      visible: false,
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    const npcData2 = {
      id: 'Presentation Layer',
      greeting: 'Layer 6: This layer is responsible for translating data between the application layer and the network format. It handles data encryption, compression, and translation.',
      SCALE_FACTOR: 8,
      visible: false,
      INIT_POSITION: { x: width * .20, y: height * .46 },
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    const npcData3 = {
      id: 'Session Layer',
      greeting: 'Layer 5: This layer manages sessions between applications. It establishes, maintains, and terminates connections between local and remote applications.',
      SCALE_FACTOR: 8,
      visible: false,
      INIT_POSITION: { x: width * .34, y: height * .46 },
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };  

    const npcData4 = {
      id: 'Transport Layer',
      greeting: 'Layer 4: This layer provides reliable data transfer services to the upper layers. It ensures error recovery and flow control.',
      SCALE_FACTOR: 8,
      visible: false,
      INIT_POSITION: { x: width * .48, y: height * .46 },
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

   const npcData5 = {
      id: 'Network Layer',
      greeting: 'Layer 3: This layer is responsible for routing data across the network. It determines the best path for data to travel from source to destination.',
      SCALE_FACTOR: 8,
      visible: false,
      INIT_POSITION: { x: width * .62, y: height * .46 },
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };
    
    const npcData6 = {
      id: 'Data Link Layer',
      greeting: 'Layer 2: This layer is responsible for node-to-node data transfer. It handles error detection and correction from the physical layer.',
      SCALE_FACTOR: 8,
      visible: false,
      INIT_POSITION: { x: width * .76, y: height * .46 },
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };
    
     const npcData7 = {
      id: 'Physical Layer',
      greeting: 'Layer 1: This layer is responsible for the physical connection between devices. It transmits raw bitstreams over a physical medium.',
      SCALE_FACTOR: 8,
      visible: false,
      INIT_POSITION: { x: width * .90, y: height * .46 },
      hitbox: { widthPercentage: 0, heightPercentage: 0 },
      reaction: function() { if (this.dialogueSystem) { this.showReactionDialogue(); } else { console.log(this.greeting); } },
      interact: function() { if (this.dialogueSystem) { this.showRandomDialogue(); } }
    };

    const network_wizard = path + "/images/gamify/wizard.png";
    const network_wizard_greeting = "Hello! I'm an expert in networking!";
    const npcWizard = {
      id: "Network Wizard",
      greeting: network_wizard_greeting,
      src: network_wizard,
      SCALE_FACTOR: 7,
      ANIMATION_RATE: 10,
      pixels: { height: 185, width: 163 },
      INIT_POSITION: { x: width * 0.47, y: height * 0 },
      orientation: { rows: 1, columns: 1 },
      // LOCK: use ONLY the 4th row (index 3) for every direction/state
      down:      { row: 0, start: 0, columns: 1 },
      hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
      // AI-specific properties (required for AiNpc utility)
      expertise: "default",              // Topic area for backend
      chatHistory: [],                   // Conversation memory
      dialogues: [                       // Random greetings
          "Ask me the layers of the OSI model!",
          "Test my knowledge on NGINX conf files.",
          "What takes more bytes in a data packet the string 'ABC' or the number 123?",
          "How can you tell source of a CORS error, NGINX conf or Application code?",
          "Try a Docker question, how do you run multiple sessions?"
      ],
      knowledgeBase: {                   // Context hints for AI
          default: [
              {
                  question: "What is a data packet?",
                  answer: "A data packet is a unit of data transmitted over a network. It contains both the payload (the actual data) and control information, such as source and destination addresses."
              },
              {
                  question: "What is difference between HTTP and HTTPS?",
                  answer: "HTTP (HyperText Transfer Protocol) is used for transmitting web pages over the internet. HTTPS (HTTP Secure) is the secure version of HTTP, using encryption (SSL/TLS) to protect data during transmission."
              },
              {
                  question: "What is an AWS EC2 instance?",
                  answer: "An AWS EC2 (Elastic Compute Cloud) instance is a virtual server in Amazon's cloud. It allows users to run applications on a scalable and secure infrastructure."
              },
              {
                  question: "How do you register a domain on AWS?",
                  answer: "To register a domain on AWS, you can use the Amazon Route 53 service. It allows you to search for available domain names, register them, and manage DNS settings."
              }
          ]
      },
      // Orchestrator: Handle collision/proximity reactions
      reaction: function() {
          if (this.dialogueSystem) {
              this.showReactionDialogue();
          } else {
              console.log(network_wizard_greeting);
          }
      },
      // Orchestrator: Handle player interaction (E key press)
      interact: function() {
          // Delegate to AiNpc utility for full AI conversation interface
          AiNpc.showInteraction(this);
      }
    };

    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Player, data: playerData },
      { class: NPC, data: npcData1 },
      { class: NPC, data: npcData2 },
      { class: NPC, data: npcData3 },
      { class: NPC, data: npcData4 },
      { class: NPC, data: npcData5 },
      { class: NPC, data: npcData6 },
      { class: NPC, data: npcData7 },
      { class: NPC, data: npcWizard },
    ];

  }
}
export const gameLevelClasses = [CustomLevel];
export { GameControl };