/**
 * DOWNTOWN - ENCOUNTER CONFIGURATION
 *
 * Black market traders, smugglers, and shady dealers operating
 * in the neon-lit back alleys.
 */

const ENCOUNTERS_DOWNTOWN = [
    {
        name: "Black Market Trader",
        type: "shop",
        discoverable: true,
        description: "An unmarked vessel with no IFF signature is broadcasting on an encrypted channel. Black market goods available.",
        engageText: "A hooded figure appears on screen. 'No names, no questions - Just silicon for parts.'",
        discoveredDescription: "The unmarked vessel is in its usual shadow, running silent. The encrypted channel is already open for you.",
        discoveredEngageText: "The hooded figure nods. 'You know the rules. Same deal as before. Browse and go.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Advanced Chassis [+30 HP]"],
        itemSlot2: ["Quick Striders [+3 SPD]"],
        itemSlot3: ["Power Gauntlets [+3 DEF]"],
        itemSlot4: []
    },
    {
        name: "Smuggler's Docking Bay",
        type: "shop",
        discoverable: true,
        description: "A hidden dock ring pings your nav—smugglers offering 'off-ledger' upgrades with questionable warranties.",
        engageText: "A voice laughs over comms. 'You want power? You pay the risk. Don't ask where it came from.'",
        discoveredDescription: "The hidden dock ring pulses on your nav — you know the frequency now. The smugglers have fresh stock.",
        discoveredEngageText: "The voice over comms is almost friendly. 'Repeat customer! I like that. Come see what I've got.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Chain Blade [+3 ATK]"],
        itemSlot2: ["Chain Booster [+3 BREAKER]"],
        itemSlot3: ["Combat Analyzer [+3 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Scrap Dealer",
        type: "shop",
        discoverable: true,
        description: "A Scrap Dealer's cargo ship is passing through. Their comms crackle with offers of rare components.",
        engageText: "The Scrap Dealer eyes your mech approvingly. 'Got some quality salvage here, pilot. Take a look.'",
        discoveredDescription: "The Scrap Dealer's cargo ship is docked in the alley, running lights dim. They're expecting you.",
        discoveredEngageText: "The Dealer taps the counter. 'Right on time. Got a new haul from the upper levels. Take a look.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Rotary Cutter [+3 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Neon Bazaar Kiosk",
        type: "shop",
        discoverable: true,
        description: "A street-level kiosk flickers to life as your mech approaches. Holographic menus display available upgrades.",
        engageText: "A synthetic shopkeeper bows. 'Welcome to the Bazaar. Everything here is guaranteed. For at least ten minutes.'",
        discoveredDescription: "The Bazaar kiosk springs to life as your mech's signal hits the sensors. It remembers your last purchase.",
        discoveredEngageText: "The synthetic shopkeeper bows deeper this time. 'Welcome back, valued customer. New inventory loaded.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Veteran Pilot [+3 ALL]"],
        itemSlot2: ["Tissue Welder Implant [+3 REGEN]"],
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
        itemSlot1: ["Map: Orbital Station"],
        itemSlot2: ["Map: The Decrypter"],
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "Does anyone else know you're here?",
                response: "'It's my job to know where they are.' He marks something on the chart. 'Not the other way around.'"
            },
            {
                question: "Why do you keep selling to me?",
                response: "His hand stills. 'So you know where to go.' He pulls a fresh chart from the stack."
            }
        ]
    },
    {
        name: "Nyx",
        type: "shop",
        discoverable: true,
        description: "A lean woman in a welding visor works a compact smelter hidden behind a dumpster. The alley reeks of ozone.",
        engageText: "She flips the visor up. 'Keep your voice down. Refining ain't exactly licensed around here. You got ore or not?'",
        discoveredDescription: "Nyx's alley forge hums behind the same dumpster. She's already got the crucible heating when you round the corner.",
        discoveredEngageText: "She doesn't look surprised. 'Back door's open. Same deal — ore in, refined out, no questions.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Gloomstone"],
        itemSlot2: ["Refined Hexsilica"],
        itemSlot3: ["Refined Iridionite"],
        itemSlot4: null
    },
    {
        name: "Shade",
        type: "shop",
        discoverable: true,
        description: "A hooded figure works at a dim bench in a dead-end alley, face hidden behind a visor that reflects no light. The mods on the bench seem to absorb the neon around them.",
        engageText: "A whisper from the hood. 'Void mods. They don't burn, they don't shock — they erase.' A gloved hand turns a mod casing over. 'The energy goes somewhere. Don't ask where.'",
        discoveredDescription: "Shade's alley bench is darker than the space around it. The mods on display drink the light.",
        discoveredEngageText: "The hood tilts toward you. 'You came back. That means you understand what void does.' A pause. 'Good.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Void Strike"],
        itemSlot2: ["Heavy Void Strike"],
        itemSlot3: ["Keen Void Pierce"],
        itemSlot4: ["Deep Void Restore"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman leans against a fire escape, a jury-rigged antenna array humming on the landing above her. Same fast hands, same eyes that track too quick. She's watching the street like she already knows what's on it.",
        engageText: "'There's something in the rain.' She flicks a switch on the antenna. 'An S-12 Wraith. Stealth frame, sensor-dampened hull, still cycling through broken camo patterns after eighty years. It drifts between the towers like an afterimage.' She holds up a beacon. 'This disrupts the stealth cycle. Makes it solid long enough to see you — and decide you're a threat.'",
        discoveredDescription: "The Herald leans against the same fire escape, same slight frame, antenna still humming. She nods once as you approach.",
        discoveredEngageText: "'It's still out there. Still flickering between the towers. You going to pin it down or let it keep haunting this place?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Downtown"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It emits a targeting pulse on the Wraith's sensor frequency. Breaks the stealth loop for a few seconds — long enough for its threat assessment to kick in. Once it sees you, the camo won't matter. It'll come straight at you.'"
            },
            {
                question: "Who are you?",
                response: "'Does it matter?' Her head tilts — the motion is too fast, almost mechanical. 'I know where the mechs are. I know how to wake them up. That's what you need from me.'"
            }
        ]
    },
    {
        name: "Shadowed S-12 Wraith",
        characterImage: "images/boss_wraith.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "Something is wrong with the rain. It falls around a shape that isn't there — an outline in the downpour, flickering between visible and gone. An S-12 Wraith, sensor-dampened hull still cycling through broken stealth patterns after 80 years. It drifts between the dead towers like an afterimage. Not patrolling. Not hunting. Just haunting.",
        engageText: "The Wraith's outline shimmers and fades. It doesn't register you as a target. Just another shape in the rain, not worth decloaking for.",
        discoveredDescription: "The rain still falls around the shape that isn't there. The S-12 Wraith drifts between the towers, flickering through the same stealth patterns.",
        discoveredEngageText: "The Wraith passes through the intersection without slowing. You're background noise. Not a threat. Not anything.",
        defeatedEngageText: "The rain falls straight now. No shape in the downpour, no shimmer between the towers. The S-12 Wraith lies folded against a building's base, stealth systems dark, finally visible.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "Can it even see me?",
                response: "Hard to tell. The stealth patterns cycle endlessly — hiding from threats that don't exist, cloaking against sensors that stopped scanning decades ago. The Wraith's awareness is buried under layers of countermeasures. It's hiding so hard it might have forgotten there's something underneath."
            }
        ]
    }
];
