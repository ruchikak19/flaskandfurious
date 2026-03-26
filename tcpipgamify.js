// GAME_RUNNER: Networking overview of the OSI model | hide_edit: true
import GameControl from '/assets/js/GameEnginev1.1/essentials/GameControl.js';
import GameEnvBackground from '/assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1.1/essentials/Player.js';
import NPC from '/assets/js/GameEnginev1.1/essentials/Npc.js';
import AiNpc from '/assets/js/GameEnginev1.1/essentials/AiNpc.js';

class CustomLevel {
    constructor(gameEnv) {
        const path = "";
        const width = gameEnv.innerWidth;
        const height = gameEnv.innerHeight;

        this.puzzle = {
            correctOrder: [
                "Application Layer",
                "Presentation Layer",
                "Session Layer",
                "Transport Layer",
                "Network Layer",
                "Data Link Layer",
                "Physical Layer"
            ],
            currentOrder: [],
            completed: false
        };

        this.mode = "learn";
        this.currentModel = "OSI";

        this.models = {
            OSI: [
                "Application Layer",
                "Presentation Layer",
                "Session Layer",
                "Transport Layer",
                "Network Layer",
                "Data Link Layer",
                "Physical Layer"
            ],
            TCPIP: [
                "Application",
                "Transport",
                "Internet",
                "Network Access"
            ]
        };

        const bgData = {
            name: 'custom_bg',
            src: path + "/images/docx/gamify/comics/network-stack/7-layers-of-osi-model.png",
        };

        const playerData = {
            id: 'Hero',
            src: path + "/images/docx/gamify/chillguy.png",
            SCALE_FACTOR: 5,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,
            INIT_POSITION: { x: 0, y: height * .15 },
            pixels: { height: 512, width: 384 },
            orientation: { rows: 4, columns: 3 },
            down:      { row: 0, start: 0, columns: 3 },
            downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
            downLeft:  { row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
            right:     { row: 1, start: 0, columns: 3 },
            left:      { row: 2, start: 0, columns: 3 },
            up:        { row: 3, start: 0, columns: 3 },
            upRight:   { row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
            upLeft:    { row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            keypress: { up: 87, left: 65, down: 83, right: 68, interact: 69 }
        };

        // FIX 4: Added src and visible: true to all layer NPCs so they render and can be interacted with
        const npcData1 = {
            id: 'Application Layer',
            greeting: 'Layer 7: This is where network applications and their protocols operate. It provides services directly to user applications, such as web browsers and email clients.',
            SCALE_FACTOR: 8,
            INIT_POSITION: { x: width * .06, y: height * .46 },
            visible: true, // FIX: was false
            layerIndex: 7,
            isSelected: false,
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const npcData2 = {
            id: 'Presentation Layer',
            greeting: 'Layer 6: This layer is responsible for translating data between the application layer and the network format. It handles data encryption, compression, and translation.',
            SCALE_FACTOR: 8,
            visible: true,
            layerIndex: 6,
            isSelected: false,
            INIT_POSITION: { x: width * .20, y: height * .46 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const npcData3 = {
            id: 'Session Layer',
            greeting: 'Layer 5: This layer manages sessions between applications. It establishes, maintains, and terminates connections between local and remote applications.',
            SCALE_FACTOR: 8,
            visible: true,
            layerIndex: 5,
            isSelected: false,
            INIT_POSITION: { x: width * .34, y: height * .46 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const npcData4 = {
            id: 'Transport Layer',
            greeting: 'Layer 4: This layer provides reliable data transfer services to the upper layers. It ensures error recovery and flow control.',
            SCALE_FACTOR: 8,
            visible: true,
            layerIndex: 4,
            isSelected: false,
            INIT_POSITION: { x: width * .48, y: height * .46 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const npcData5 = {
            id: 'Network Layer',
            greeting: 'Layer 3: This layer is responsible for routing data across the network. It determines the best path for data to travel from source to destination.',
            SCALE_FACTOR: 8,
            visible: true,
            layerIndex: 3,
            isSelected: false,
            INIT_POSITION: { x: width * .62, y: height * .46 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const npcData6 = {
            id: 'Data Link Layer',
            greeting: 'Layer 2: This layer is responsible for node-to-node data transfer. It handles error detection and correction from the physical layer.',
            SCALE_FACTOR: 8,
            visible: true,
            layerIndex: 2,
            isSelected: false,
            INIT_POSITION: { x: width * .76, y: height * .46 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const npcData7 = {
            id: 'Physical Layer',
            greeting: 'Layer 1: This layer is responsible for the physical connection between devices. It transmits raw bitstreams over a physical medium.',
            SCALE_FACTOR: 8,
            visible: true,
            layerIndex: 1,
            isSelected: false,
            INIT_POSITION: { x: width * .90, y: height * .46 },
            hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
            reaction: function() {
                if (this.dialogueSystem) { this.showReactionDialogue(); }
                else { console.log(this.greeting); }
            },
            interact: function() {
                this.level.handleLayerSelection(this.id);
                if (this.dialogueSystem) { this.showRandomDialogue(); }
            }
        };

        const network_wizard = path + "/images/docx/gamify/wizard.png";
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
            down: { row: 0, start: 0, columns: 1 },
            hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
            expertise: "networking",
            chatHistory: [],
            dialogues: [
                "Ask me the layers of the OSI model!",
                "Test my knowledge on NGINX conf files.",
                "What takes more bytes in a data packet the string 'ABC' or the number 123?",
                "How can you tell source of a CORS error, NGINX conf or Application code?",
                "Try a Docker question, how do you run multiple sessions?"
            ],
            knowledgeBase: {
                networking: [
                    { question: "What is the OSI model?", answer: "The OSI model is a 7-layer framework used to understand network communication." },
                    { question: "What is TCP?",            answer: "TCP ensures reliable, ordered delivery of data." },
                    { question: "What is UDP?",            answer: "UDP is faster but does not guarantee delivery." },
                    { question: "What does the transport layer do?", answer: "It manages data delivery using ports and protocols like TCP and UDP." }
                ]
            },
            reaction: function() {
                if (!this.level.puzzle.completed) {
                    console.log("Arrange layers from top (Application) to bottom (Physical)");
                } else {
                    console.log(network_wizard_greeting);
                }
            },
            // FIX 2: interact no longer calls startSortingGame on this (wrong context).
            // It calls it on gameEnv.level where the method now properly lives.
            interact: function() {
                const level = this.level;
                if (!level.puzzle.completed && level.mode === "learn") {
                    console.log("Learn the layers first, then sort them!");
                } else if (level.mode === "learn") {
                    console.log("Start sorting OSI!");
                    level.startSortingGame("OSI"); // FIX: was this.level.startSortingGame
                } else if (level.mode === "sort" && level.currentModel === "OSI" && level.puzzle.completed) {
                    console.log("Now try TCP/IP!");
                    level.startSortingGame("TCPIP");
                }
                AiNpc.showInteraction(this);
            }
        };

        this.classes = [
            { class: GameEnvBackground, data: bgData },
            { class: Player,            data: playerData },
            { class: NPC,               data: npcData1 },
            { class: NPC,               data: npcData2 },
            { class: NPC,               data: npcData3 },
            { class: NPC,               data: npcData4 },
            { class: NPC,               data: npcData5 },
            { class: NPC,               data: npcData6 },
            { class: NPC,               data: npcData7 },
            { class: NPC,             data: npcWizard }, // FIX 1: was NPC
        ];
    }

    // FIX 3: All methods are now proper class methods at the correct indentation level,
    // not floating code after the constructor's closing brace.

    handleLayerSelection(layerName) {
        const puzzle = this.puzzle;
        if (puzzle.completed) return;
        if (puzzle.currentOrder.includes(layerName)) {
            console.log("Already selected:", layerName);
            return;
        }
        puzzle.currentOrder.push(layerName);
        console.log("Selected order:", puzzle.currentOrder);
        if (puzzle.currentOrder.length === puzzle.correctOrder.length) {
            this.checkPuzzle();
        }
    }

    // FIX 2+3: startSortingGame moved here from npcWizard object so 'this' = CustomLevel
    startSortingGame(model = "OSI") {
        this.mode = "sort";
        this.currentModel = model;
        this.puzzle.correctOrder = this.models[model];
        this.puzzle.currentOrder = [];
        this.puzzle.completed = false;
        this.createDragUI();
    }

    createDragUI() {
        const old = document.getElementById("drag-container");
        if (old) old.remove();

        const container = document.createElement("div");
        container.id = "drag-container";
        container.style.position = "absolute";
        container.style.top = "20px";
        container.style.left = "20px";
        container.style.zIndex = "999";

        const shuffled = [...this.puzzle.correctOrder].sort(() => Math.random() - 0.5);

        const itemsDiv = document.createElement("div");
        itemsDiv.style.display = "flex";
        itemsDiv.style.gap = "10px";

        shuffled.forEach(layer => {
            const el = document.createElement("div");
            el.innerText = layer;
            el.draggable = true;
            el.style.padding = "10px";
            el.style.background = "lightblue";
            el.style.cursor = "grab";
            el.addEventListener("dragstart", e => {
                e.dataTransfer.setData("text/plain", layer);
            });
            itemsDiv.appendChild(el);
        });

        const dropZone = document.createElement("div");
        dropZone.style.marginTop = "20px";
        dropZone.style.minHeight = "50px";
        dropZone.style.border = "2px dashed black";
        dropZone.style.padding = "10px";

        dropZone.addEventListener("dragover", e => e.preventDefault());
        dropZone.addEventListener("drop", e => {
            e.preventDefault();
            const data = e.dataTransfer.getData("text/plain");
            this.handleLayerSelection(data);
            const placed = document.createElement("div");
            placed.innerText = data;
            placed.style.padding = "5px";
            dropZone.appendChild(placed);
        });

        container.appendChild(itemsDiv);
        container.appendChild(dropZone);
        document.body.appendChild(container);
    }

    checkPuzzle() {
        const correct = this.puzzle.correctOrder;
        const user = this.puzzle.currentOrder;
        const isCorrect = JSON.stringify(correct) === JSON.stringify(user);

        if (isCorrect) {
            console.log("Correct! Puzzle complete.");
            this.puzzle.completed = true;
            this.mode = "learn"; // reset mode so wizard interaction advances to next step
            const ui = document.getElementById("drag-container");
            if (ui) ui.style.border = "3px solid green";
        } else {
            console.log("Wrong order. Resetting...");
            this.puzzle.currentOrder = [];
        }
    }
}

export const gameLevelClasses = [CustomLevel];
export { GameControl };