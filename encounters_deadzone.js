/**
 * DEAD ZONE - ENCOUNTER CONFIGURATION
 *
 * Hazmat traders, contamination-proof drones, and desperate
 * scavengers working the most dangerous terrain.
 */

const ENCOUNTERS_DEADZONE = [
    {
        name: "Hazmat Trader",
        type: "shop",
        discoverable: true,
        description: "A sealed hazmat vehicle idles at the contamination perimeter. A trader in full gear waves you down.",
        engageText: "The trader's voice crackles through a respirator. 'Everything's been scrubbed. You can touch it. Probably.'",
        discoveredDescription: "The sealed hazmat vehicle idles at its usual spot on the contamination perimeter. The trader waves through the visor.",
        discoveredEngageText: "The trader's respirator crackles. 'Back again? Either you're brave or crazy. New stock, all scrubbed. Mostly.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["EVO4 Breaker Chassis [+100 HP]"],
        itemSlot2: ["Singularity Runners [+10 SPD]"],
        itemSlot3: ["Citadel Arms [+10 DEF]"],
        itemSlot4: []
    },
    {
        name: "Decontamination Drone",
        type: "shop",
        discoverable: true,
        description: "A roving decontamination drone has surplus supplies in its cargo bay. It beeps an offer.",
        engageText: "The drone projects a price list. 'DECON SURPLUS. CERTIFIED CLEAN. WARRANTY VOID IN DEAD ZONE.'",
        discoveredDescription: "The decontamination drone hovers at its usual patrol route, cargo bay restocked. It beeps in recognition.",
        discoveredEngageText: "The drone projects an updated list. 'RETURNING CUSTOMER. DECON SURPLUS REFRESHED. STAY SAFE OUT THERE.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Omega Rupture Cannon [+10 ATK]"],
        itemSlot2: ["Omega Protocol [+10 BREAKER]"],
        itemSlot3: ["Omega Experience Engine [+10 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Desperate Scavenger",
        type: "shop",
        discoverable: true,
        description: "A lone scavenger in a patched radiation suit flags you from behind a crumbling wall.",
        engageText: "The scavenger coughs. 'I need fuel more than parts. Take what you want, just get me out of here.'",
        discoveredDescription: "The scavenger is behind the same crumbling wall, radiation suit more patched than before. They still haven't left.",
        discoveredEngageText: "The scavenger manages a weak smile. 'You came back. Most don't. I found more stuff. Take what you need.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Quantum Excavator [+10 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Sealed Bunker Terminal",
        type: "shop",
        discoverable: true,
        description: "A bunker hatch sits ajar. Inside, an emergency supply terminal still has power and stock.",
        engageText: "The terminal flickers on. 'EMERGENCY PROTOCOL. SUPPLIES AVAILABLE. BUNKER INTEGRITY: 12%.'",
        discoveredDescription: "The bunker hatch is still ajar, emergency lights still on. The supply terminal has restocked from deeper reserves.",
        discoveredEngageText: "The terminal flickers. 'RETURNING USER. DEEPER RESERVES UNLOCKED. BUNKER INTEGRITY: 9%.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Ghost Pilot [+10 ALL]"],
        itemSlot2: ["Omega Regeneration Core [+10 REGEN]"],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "The Mapmaker",
        characterImage: "images/mapmaker.gif",
        type: "shop",
        discoverable: true,
        description: "A hooded figure lies crumpled against a wall. The cloak is unmistakable. He isn't moving.",
        engageText: "The Mapmaker is dead. His charts are scattered around him, still clutched in cold hands. One map remains intact.",
        discoveredDescription: "The Mapmaker's body is where you found it. His hood has fallen back. He looks smaller than you remember.",
        discoveredEngageText: "You kneel beside him again. The maps are still here. He held onto them until the end.",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Map: Frontline"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null
    },
    {
        name: "Ash",
        type: "shop",
        discoverable: true,
        description: "A gaunt figure in a sealed hazmat rig tends a smelter wrapped in lead sheeting. A Geiger counter clicks steadily nearby.",
        engageText: "A filtered voice crackles from the suit. 'Radiation makes most refiners sick. I was born in it. Hand over the ore.'",
        discoveredDescription: "Ash's lead-wrapped forge glows sickly green at the seams. The Geiger counter clicks faster as you approach, then steadies.",
        discoveredEngageText: "The hazmat visor turns toward you. 'Good. More ore for the fire. The rads make the bonds break cleaner — trust me.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Archive Shard"],
        itemSlot2: ["Refined Strata-Null"],
        itemSlot3: ["Refined Compound 33"],
        itemSlot4: null
    },
    {
        name: "Null",
        type: "shop",
        discoverable: true,
        description: "A silent figure in a sealed radiation suit sits behind a bench of void-touched mod casings. Each one seems to bend the light around it, edges soft and indistinct.",
        engageText: "The visor turns toward you. A flat, filtered voice: 'Void mods. Built at the edge of the blackout zone. The interference changes the crystal structure.' A gloved hand pushes a mod forward. 'They hit differently here.'",
        discoveredDescription: "Null's bench warps the air around it. The void mods look less solid than last time — or maybe your eyes are adjusting.",
        discoveredEngageText: "The visor turns. 'More void work. The rads are getting into the lattice. Makes them stronger.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Spread Void Shot"],
        itemSlot2: ["Power Void Surge"],
        itemSlot3: ["Wide Void Barrage"],
        itemSlot4: ["Hard Void Guard"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman in sealed hazmat gear crouches inside a bunker, the door barely ajar. Same build, same too-precise movements, even through the suit. Her comms equipment is military-grade — the only gear that cuts through the interference.",
        engageText: "'The Dead Zone isn't dead.' She pulls up a signal map — a perfect circle of electronic denial, expanding by a few meters every month. 'There's an EW mech at the center. A Phantom. It's been running full-spectrum jamming since its pilot died. Every frequency, all the time.' She holds up a beacon. 'This punches a hole in the noise. Briefly.'",
        discoveredDescription: "The Herald waits in her bunker, same slight frame, same steady hands. Her signal map shows the denial zone has grown since your last visit.",
        discoveredEngageText: "'The blackout radius expanded again. Another hundred meters of silence. You going in or waiting until it reaches us?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Dead Zone"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a clean signal on a military frequency — the kind the Phantom was designed to protect, not jam. For a few seconds, its IFF will flag you as friendly and the jamming will drop around your position. After that, it'll realize you're not in its database and reclassify. But you'll be close enough by then.'"
            },
            {
                question: "Who are you?",
                response: "'My callsign was Wire.' She says it like putting down something heavy. 'Jess Nakamura. SC-1 Flicker. Fastest hands in the unit.' She holds up her hand — the fingers blur, then solidify. 'What's left of me, anyway.'"
            }
        ]
    },
    {
        name: "Blighted EW-0 Phantom",
        characterImage: "images/boss_phantom.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "Your sensors die first. Not damaged — suppressed. Radar returns nothing. Comms fill with static shaped like voices. At the center of the blackout: the Phantom, chassis barely visible, active camouflage flickering through patterns meant for battlefields that no longer exist. Every countermeasure it has is running. Jamming, spoofing, masking, denying.",
        engageText: "The Phantom's jamming field washes over you and keeps going. You're inside the denial zone but you're not transmitting on any frequency it's targeting. It doesn't know you're here. It doesn't know anything is here.",
        discoveredDescription: "Your sensors die the moment you enter the zone. The EW-0 Phantom is still at the center, broadcasting its blanket of electronic denial across every frequency.",
        discoveredEngageText: "The Phantom's camouflage flickers. Same patterns. Same denial. You're invisible inside its invisibility — hidden by the thing that's hiding from everything.",
        defeatedEngageText: "Your sensors work here now. Radar returns clean. Comms are clear. The EW-0 Phantom's jamming field died with it — the Dead Zone is quiet for the first time in eighty years.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "It's jamming everything.",
                response: "Full-spectrum electronic denial — every frequency, every band, every protocol. The Phantom was supposed to provide selective cover for its squad. Without a pilot to designate targets, it defaulted to the broadest setting: deny everything. The perfect hiding spot with no one left to hide."
            }
        ]
    }
];
