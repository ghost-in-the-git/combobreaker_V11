/**
 * INDUSTRIAL ZONE - ENCOUNTER CONFIGURATION
 *
 * Factory surplus outlets, union supply depots, and automated
 * vending rigs along the production lines.
 */

const ENCOUNTERS_INDUSTRIALZONE = [
    {
        name: "Factory Surplus Outlet",
        type: "shop",
        discoverable: true,
        description: "A factory loading dock is open. Surplus components from the latest production run are stacked high.",
        engageText: "A foreman waves you in. 'Overstock from the line. Corporate says sell it cheap, so here we are.'",
        discoveredDescription: "The factory loading dock is open, the same foreman leaning against a stack of crates. Surplus keeps piling up.",
        discoveredEngageText: "The foreman waves a clipboard. 'Another run off the line. You've got first pick this time, pilot.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["EVO1 Breaker Chassis [+70 HP]"],
        itemSlot2: ["Phase Shift Legs [+7 SPD]"],
        itemSlot3: ["Bulwark Arms [+7 DEF]"],
        itemSlot4: []
    },
    {
        name: "Union Supply Depot",
        type: "shop",
        discoverable: true,
        description: "A workers' union depot sits between the smokestacks. Mechanics share tools and trade parts.",
        engageText: "A union rep slides open a locker. 'We look out for our own. You fight the bots, you're one of us.'",
        discoveredDescription: "The workers' depot between the smokestacks is bustling. Your union card is on file now.",
        discoveredEngageText: "The union rep opens the locker. 'You're practically one of us now. New gear came in overnight.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Railgun [+7 ATK]"],
        itemSlot2: ["Neural Sequencer [+7 BREAKER]"],
        itemSlot3: ["Quantum Learning Core [+7 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Automated Vending Rig",
        type: "shop",
        discoverable: true,
        description: "A mobile vending rig trundles along the factory floor, dispensing parts from its rotating shelves.",
        engageText: "The rig stops and plays a jingle. 'INSERT CREDITS. RECEIVE PARTS. HAVE A PRODUCTIVE DAY.'",
        discoveredDescription: "The vending rig trundles along its usual route, jingle playing. It slows down when it detects your mech.",
        discoveredEngageText: "The rig plays a happy chime. 'LOYAL CUSTOMER DETECTED. DISPENSING PREMIUM INVENTORY.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Tectonic Shatterer [+7 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Shift Supervisor's Stash",
        type: "shop",
        discoverable: true,
        description: "A shift supervisor flags you down near a locked storage unit. They glance around nervously.",
        engageText: "The supervisor unlocks the crate. 'These fell off the line. Officially they don't exist.'",
        discoveredDescription: "The shift supervisor is near the same locked storage unit, glancing around. They relax when they see it's you.",
        discoveredEngageText: "The supervisor unlocks the crate quickly. 'Got a fresh batch. Same deal — they don't exist, you weren't here.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["War Mind [+7 ALL]"],
        itemSlot2: ["Adaptive Hull Implant [+7 REGEN]"],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "The Mapmaker",
        characterImage: "images/mapmaker.gif",
        type: "shop",
        discoverable: true,
        description: "A hooded figure stands motionless nearby, a rolled chart clutched in one hand.",
        engageText: "He says nothing. His eyes flick to you, then to the map.",
        discoveredDescription: "The Mapmaker is where you left him, hood drawn, charts spread across a makeshift table.",
        discoveredEngageText: "He glances up as you approach. A faint nod — he's already reaching for his charts.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Frozen Reach"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "The frontline is close.",
                response: "He stops charting. His hand is steady but his breathing isn't. 'Yes.'"
            }
        ]
    },
    {
        name: "Anvil",
        type: "shop",
        discoverable: true,
        description: "A broad-shouldered woman runs a repurposed assembly-line smelter. Robotic arms assist her with mechanical precision.",
        engageText: "She punches a sequence into the control panel. 'Industrial-grade refining. Consistent output, every time. Load the intake.'",
        discoveredDescription: "Anvil's assembly-line forge clanks rhythmically, robotic arms cycling through their routines. She monitors a bank of gauges.",
        discoveredEngageText: "She taps the intake chute. 'Line's warmed up. Drop your minerals and I'll run the batch.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Starvitrine"],
        itemSlot2: ["Refined Thorncrystal"],
        itemSlot3: ["Refined Umbracite"],
        itemSlot4: null
    },
    {
        name: "Rivet",
        type: "shop",
        discoverable: true,
        description: "A heavyset woman operates a mod press built into an assembly line station. Robotic arms feed steel blanks while she programs each casing by hand.",
        engageText: "She stamps a mod flat with one hand. 'Steel mods. Industrial grade — same alloy as the factory walls. Takes a beating and keeps firing.' She slides it across the counter. 'Built to last.'",
        discoveredDescription: "Rivet's assembly line clanks in rhythm. A fresh rack of steel mods sits cooling on the output belt.",
        discoveredEngageText: "She taps the counter. 'New run just came off the line. Tighter tolerances this batch.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Spread Steel Shot"],
        itemSlot2: ["Keen Steel Pierce"],
        itemSlot3: ["Power Steel Surge"],
        itemSlot4: ["Wide Steel Barrage"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman watches from a catwalk high above the factory floor. Same build, same restless hands, same eyes that catch light wrong. Below, the walls are cratered by decades of weapons fire. The rhythmic thud of heavy guns echoes from deeper in the complex.",
        engageText: "'You can hear it from here.' She descends a ladder without looking at the rungs. 'The Devastator. It's been firing for as long as anyone can remember. Not at anything — just firing.' She holds up a beacon. 'This puts you in its targeting solution.'",
        discoveredDescription: "The Herald stands on her catwalk, same slight silhouette against the foundry glow. Below, another salvo thuds into the factory walls.",
        discoveredEngageText: "'The guns never stop. But they've never had a real target. Until now.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Industrial Zone"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts your mech's signature on every frequency the Devastator monitors. Right now it's shooting at walls. The beacon makes it shoot at you instead.'"
            },
            {
                question: "Who are you?",
                response: "'I knew all of them.' She says it watching the factory floor, not you. 'Every mech you've fought. Every pilot locked inside. I knew what they sounded like when they were people.'"
            }
        ]
    },
    {
        name: "Slag-Coated HG-6 Devastator",
        characterImage: "images/boss_devastator.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "You hear it three corridors away — the rhythmic thud of heavy weapons cycling. The factory floor opens into a blast zone. In the center stands the Devastator, weapon mounts traversing in smooth arcs, putting rounds into walls that have been hit ten thousand times before. Slag coats its chassis in thick, uneven layers.",
        engageText: "The Devastator's targeting array sweeps past you and keeps traversing. You're not in the firing arc. You're not in the blast zone. It has walls to shoot and nothing else matters.",
        discoveredDescription: "The rhythmic thud of weapons fire echoes through the factory corridors. The HG-6 Devastator is still in its blast zone, putting rounds into the same cratered walls.",
        discoveredEngageText: "The Devastator doesn't pause. Same walls. Same arcs. Same rounds. You're still not in the firing solution.",
        defeatedEngageText: "The factory is quiet. No rhythmic thud, no weapons cycling. The HG-6 Devastator stands in its blast zone, weapon mounts locked at rest, barrels cold. The walls will never take another round.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "Why does it keep shooting?",
                response: "The HG-6 was a walking gun platform — suppressive fire, area denial, total destruction of designated targets. Without a target designator, the Devastator cycles through its firing patterns on the last known coordinates. The walls. Forever."
            }
        ]
    }
];
