/**
 * WASTELAND - ENCOUNTER CONFIGURATION
 *
 * Nomad traders, rad-shielded caravans, and scavenger camps
 * scattered across the scorched badlands.
 */

const ENCOUNTERS_WASTELAND = [
    {
        name: "Nomad Trader",
        type: "shop",
        discoverable: true,
        description: "A dust-caked nomad convoy rolls into sensor range. They flash trade beacons from atop their rigs.",
        engageText: "A weathered nomad tips their goggles. 'Water's scarce, parts aren't. What do you need, traveler?'",
        discoveredDescription: "The nomad convoy is camped at the same dune ridge, dust-caked rigs idling. They flash your signal back.",
        discoveredEngageText: "The nomad tips their goggles. 'You made it back. That means you're tough. Let me show you the good gear.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Old Breaker Chassis [+50 HP]"],
        itemSlot2: ["Reflex Actuators [+5 SPD]"],
        itemSlot3: ["Armored Claws [+5 DEF]"],
        itemSlot4: []
    },
    {
        name: "Rad-Shielded Caravan",
        type: "shop",
        discoverable: true,
        description: "A lead-lined hauler convoy creeps across the dunes. Their geiger counters click rhythmically.",
        engageText: "The caravan master opens a shielded crate. 'Clean parts, tested and decontaminated. Mostly.'",
        discoveredDescription: "The lead-lined haulers are parked in formation, geiger counters ticking steadily. They've kept a spot clear for you.",
        discoveredEngageText: "The caravan master nods. 'Ah, the careful one. Good news — fresh stock, fresh decontamination.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Plasma Rifle [+5 ATK]"],
        itemSlot2: ["Strike Sequencer [+5 BREAKER]"],
        itemSlot3: ["Battlefield Recorder [+5 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Scavenger Camp",
        type: "shop",
        discoverable: true,
        description: "A makeshift camp sits in the shadow of a wrecked dropship. Salvaged goods are laid out on tarps.",
        engageText: "A scavenger beckons from behind a pile of parts. 'Dug these up this morning. Still warm.'",
        discoveredDescription: "The scavenger camp under the wrecked dropship has grown since your last visit. New tarps, new salvage.",
        discoveredEngageText: "The scavenger grins through cracked goggles. 'Saved you first pick this time. The good stuff's in the back.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Sonic Fracture Drill [+5 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Buried Supply Cache",
        type: "shop",
        discoverable: true,
        description: "Your sensors detect a pre-war supply cache buried beneath the sand. The seal is still intact.",
        engageText: "The cache hisses open. Inside, vacuum-sealed components gleam under your mech's floodlights.",
        discoveredDescription: "The supply cache site is marked on your nav now. The seal has been broken, but new compartments have been accessed.",
        discoveredEngageText: "The cache interface recognizes your access code. Deeper storage compartments unlock with a hiss.",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Ace Pilot [+5 ALL]"],
        itemSlot2: ["Bio-Repair Matrix [+5 REGEN]"],
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
        itemSlot1: ["Map: Undercity"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "The radiation here kills people.",
                response: "'Yes.' He turns a page. His hands are steady."
            },
            {
                question: "Do you know what I am?",
                response: "He stops writing. For the first time, he looks at you — not at the chassis, not at the charts. At you. '...Yes.' He goes back to his charts."
            }
        ]
    },
    {
        name: "Cinder",
        type: "shop",
        discoverable: true,
        description: "A sun-blackened woman hunches over a smelter built from salvaged rad-scrubbers. Heat mirages bend the air around her rig.",
        engageText: "She wipes ash from her goggles. 'Everything out here wants to kill you. My forge just wants your ore. Fair trade.'",
        discoveredDescription: "Cinder's rad-shielded smelter throbs with heat, a bright spot in the bleached wasteland. She waves you over with a tong.",
        discoveredEngageText: "She cracks her neck. 'Forge doesn't sleep and neither do I. Let's see what you dragged in.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Moonshardite"],
        itemSlot2: ["Refined Nightpyre"],
        itemSlot3: ["Refined Obsidryl"],
        itemSlot4: null
    },
    {
        name: "Blight",
        type: "shop",
        discoverable: true,
        description: "A woman in a corroded apron works over bubbling chemical baths, dipping mod casings in solutions that hiss and smoke. Her gloves are eaten through at the fingertips.",
        engageText: "She holds up a mod dripping with green residue. 'Acid mods. The casing dissolves on impact, delivers the payload inside the armour.' She drops it in a rinse bath. 'Messy, but effective.'",
        discoveredDescription: "Blight's chemical baths bubble and smoke between the dunes. The smell hits before you see her.",
        discoveredEngageText: "She waves a corroded tong. 'New batch just finished the soak. Strongest acid I've cooked yet.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Acid Strike"],
        itemSlot2: ["Heavy Acid Strike"],
        itemSlot3: ["Iron Acid Bulwark"],
        itemSlot4: ["Quick Acid Repair"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman in rad-shielding sits on the carcass of a Sand Stalker, marking kill patterns on a scored metal chart. Same fast hands, same eyes that catch light at the wrong angle. The Stalker's armour has been shredded by something much bigger than it.",
        engageText: "'There's an AX-3 Ravager out there.' She nods toward the open wasteland. 'Been killing everything that moves for 80 years — Sand Stalkers, Pack Runners, dust devils, anything that triggers its sensors. Assault frame running on fried targeting firmware. It doesn't hunt. It doesn't patrol. It just fights whatever's closest.' She holds up a beacon. 'Right now that's whatever stumbles into its path. This makes sure the closest thing is you.'",
        discoveredDescription: "The Herald sits on a fresh Stalker carcass, same slight frame, same too-precise hands scoring marks into metal. The shredding pattern is the same as last time.",
        discoveredEngageText: "'Three more kills since you were here last. It's getting faster, not slower. You want to do this or not?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Wasteland"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'The Ravager's targeting is cooked — locks onto whatever's hottest. Thermal noise, radiation spikes, animals. The beacon burns hotter than all of them.' She taps the device. 'Plant it and you won't have to find the Ravager. It'll find you. Mid-charge.'"
            },
            {
                question: "Who are you?",
                response: "'Someone who knows what these mechs sound like when the pilot's still inside.' She folds the chart with fingers that move too fast to track. She doesn't explain."
            }
        ]
    },
    {
        name: "Irradiated AX-3 Ravager",
        characterImage: "images/boss_ravager.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "You hear it before you see it — engine scream and the wet crunch of something being taken apart. Over the next dune, an AX-3 Ravager has a Sand Stalker pinned under its frame, tearing it to pieces. Not efficiently. Not cleanly. Just raw, continuous assault on something that stopped resisting minutes ago.",
        engageText: "The Ravager finishes with the Stalker's wreck and stands still. Sensors sweep — nothing moving, nothing warm, nothing to fight. It doesn't register you as a target. You're not close enough. You're not hostile enough. It wanders back into the dunes.",
        discoveredDescription: "The AX-3 Ravager is stalking the dunes again, hunting for anything that moves. The engine scream carries for miles across the flat wasteland.",
        discoveredEngageText: "The Ravager's sensors sweep past you. No engagement. You're not triggering its targeting firmware — not yet.",
        defeatedEngageText: "The engine is quiet. The AX-3 Ravager lies half-buried in sand, claws still extended, reaching for nothing. The dunes are already reclaiming it.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "It's just killing everything it finds.",
                response: "The targeting firmware is cooked — decades of radiation have blurred the line between 'enemy' and 'moving.' But you're standing still, and you're not close enough to trigger the proximity protocols. The Ravager needs something to chase. Right now, that's not you."
            }
        ]
    }
];
