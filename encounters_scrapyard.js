/**
 * SCRAP YARD - ENCOUNTER CONFIGURATION
 *
 * Junkers, scavengers, and makeshift dealers picking through the wreckage.
 */

const ENCOUNTERS_SCRAPYARD = [
    {
        name: "Mech Junker",
        type: "shop",
        discoverable: true,
        description: "A wandering Junker's vessel has appeared on radar. They're broadcasting a trade signal.",
        engageText: "The Junker greets your mech as it arrives at the hangar bay door. They motion to a shelf of salvaged mech parts.",
        discoveredDescription: "The Junker's vessel is right where you found it, tethered to a rust-eaten gantry. Salvage is piled high on the deck.",
        discoveredEngageText: "The Junker sees your mech and grins. 'Back for more? I've been pulling good stuff lately. Come see.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Low-Grade Chassis [+10 HP]"],
        itemSlot2: ["Standard Servos [+1 SPD]"],
        itemSlot3: ["Standard Manipulators [+1 DEF]"],
        itemSlot4: []
    },
    {
        name: "Scrap Dealer",
        type: "shop",
        discoverable: true,
        description: "A Scrap Dealer's cargo ship is passing through. Their comms crackle with offers of rare components.",
        engageText: "The Scrap Dealer eyes your mech approvingly. 'Got some quality salvage here, pilot. Take a look.'",
        discoveredDescription: "The Scrap Dealer's cargo ship sits in its usual berth, hull scarred and antenna bent. The trade signal is already broadcasting.",
        discoveredEngageText: "The Dealer waves from the loading ramp. 'You've got a good eye, pilot. I saved some things you might like.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Pulse Pistol [+1 ATK]"],
        itemSlot2: ["Targeting Firmware [+1 BREAKER]"],
        itemSlot3: ["Basic Data Processor [+1 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Field Mechanic",
        type: "shop",
        discoverable: true,
        description: "A lone field mechanic truck sits next to a decommissioned mech. A field mechanic is offering tune-ups and spare parts.",
        engageText: "A grease-stained tech waves you in. 'I can patch armor, swap actuators, or sell you something that won't explode. Probably.'",
        discoveredDescription: "The field mechanic's truck is parked at the same decommissioned mech, tools spread across a tarp. Grease stains mark the ground.",
        discoveredEngageText: "The mechanic looks up from under a chassis. 'Oh hey, you again. Got some new stock. Nothing exploded yet.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Salvage Pick [+1 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Derelict Vending Array",
        type: "shop",
        discoverable: true,
        description: "A derelict station's vending array still has power. The interface flickers—prices fluctuate wildly.",
        engageText: "Your mech taps the terminal. Ancient menus scroll past. A slot clunks open with something inside.",
        discoveredDescription: "The derelict vending array still hums with power, its screen flickering in the gloom. You know which buttons to press now.",
        discoveredEngageText: "The terminal recognizes your mech's signature. The interface skips straight to the good stuff.",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Rookie Pilot [+1 ALL]"],
        itemSlot2: ["Salvaged Repair Node [+1 REGEN]"],
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
        itemSlot1: ["Map: Old Battlefield"],
        itemSlot2: ["Map: Mech Graveyard"],
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "How are you here?",
                response: "He doesn't answer. He's already marking something on a fresh chart. The ink is still wet on the last one."
            },
            {
                question: "Are you following me?",
                response: "'No.' He glances at the dust on your chassis. 'You do.' He goes back to his charts."
            }
        ]
    },
    {
        name: "Slag",
        type: "shop",
        discoverable: true,
        description: "A hulking man welds scrap to a makeshift crucible bolted to his mech's chassis. Sparks shower the junkpiles around him.",
        engageText: "He doesn't look up. 'Dump your ore in the hopper. I'll burn the garbage out of it. That's the deal.'",
        discoveredDescription: "Slag's crucible glows cherry-red between towers of crushed metal. He hammers a dent out of the hopper without breaking stride.",
        discoveredEngageText: "He spits into the furnace. 'You again. Good — hopper's empty. Feed it.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Aetherite"],
        itemSlot2: ["Refined Bronzewisp"],
        itemSlot3: ["Refined Cindergem"],
        itemSlot4: null
    },
    {
        name: "Bolt",
        type: "shop",
        discoverable: true,
        description: "A young man hunches over a workbench made from a crushed mech cockpit. Mod casings and loose wires cover every surface. A soldering iron glows in his left hand.",
        engageText: "He doesn't look up. 'Steel mods. Hardened, reinforced, built from scrap that used to be somebody's armour.' He taps a finished mod casing. 'Now it's yours. If you've got the silicon.'",
        discoveredDescription: "Bolt's scrapyard workbench is buried under fresh mod casings. He's already soldering when you arrive.",
        discoveredEngageText: "He glances up. 'More steel work. Same bench, same quality. Take a look.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Steel Strike"],
        itemSlot2: ["Heavy Steel Strike"],
        itemSlot3: ["Iron Steel Bulwark"],
        itemSlot4: ["Quick Steel Repair"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman stands motionless between two wrecked mechs, cloak pulled tight against the scrapyard wind. Her hands move with a precision that isn't quite human — adjusting a device, checking a frequency, still again — all in the time it takes you to blink.",
        engageText: "She doesn't introduce herself. 'You've been busy. I can feel it — the ground shakes differently when something old starts paying attention.' She holds up a beacon. 'This will finish what you started.'",
        discoveredDescription: "The Herald stands where you left her, same slight frame, same too-fast hands. The signal device pulses steadily in her grip.",
        discoveredEngageText: "She tilts her head. 'Still here? Then you're not done yet.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Scrap Fields"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It calls what's already watching you. The thing in the scrap — it knows you're here. The beacon just tells it you're ready.'"
            },
            {
                question: "Who are you?",
                response: "'I go where the dead mechs are.' Her eyes are older than her face. 'I've been doing this a long time. Longer than you've been awake.'"
            }
        ]
    },
    {
        name: "Rusted KV-8 Grinder",
        characterImage: "images/boss_grinder.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "A pile of compacted scrap shifts — then stands up. Eight tons of rusted salvage frame, industrial claws still opening and closing on nothing. A KV-8 Grinder, caked in 80 years of oxide and dust, its compactor bay grinding in a slow loop. It doesn't target you. It just reaches for everything around it. Raw material.",
        engageText: "The Grinder's optics sweep past you without stopping. You're not scrap. You're not worth processing. It turns back to the pile and keeps grinding.",
        discoveredDescription: "The KV-8 Grinder is where you left it, still grinding the same pile of scrap in the same slow loop. The claws open and close on nothing.",
        discoveredEngageText: "The Grinder doesn't acknowledge you. Same routine. Same loop. It has no reason to fight you.",
        defeatedEngageText: "The KV-8 Grinder lies where it fell, claws frozen mid-reach. The compactor bay is silent. For the first time in eighty years, nothing is grinding.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "It's just... grinding.",
                response: "The compactor bay cycles. Scrap in, scrap out. The KV-8 was a salvage frame — built to process wreckage, not fight. Whatever made it dangerous died with the pilot. What's left is just a machine doing its job, 80 years past the last shift change."
            }
        ]
    }
];
