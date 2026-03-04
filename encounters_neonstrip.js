/**
 * NEON STRIP - ENCOUNTER CONFIGURATION
 *
 * Back-alley dealers, casino prize counters, and syndicate
 * fences working the entertainment district.
 */

const ENCOUNTERS_NEONSTRIP = [
    {
        name: "Back-Alley Dealer",
        type: "shop",
        discoverable: true,
        description: "A dealer leans against a flickering holographic ad, a briefcase of components at their feet.",
        engageText: "The dealer flips open the case. 'Top shelf stuff. Fell off a corp transport. You didn't hear that.'",
        discoveredDescription: "The dealer is leaning against the same flickering ad, new briefcase at their feet. They nod as you approach.",
        discoveredEngageText: "The dealer grins. 'Word gets around. You're a good customer. Check out the new inventory.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["EVO3 Breaker Chassis [+90 HP]"],
        itemSlot2: ["Temporal Drives [+9 SPD]"],
        itemSlot3: ["Bastion Arms [+9 DEF]"],
        itemSlot4: []
    },
    {
        name: "Casino Prize Counter",
        type: "shop",
        discoverable: true,
        description: "A casino's prize redemption counter has mech parts on display between the stuffed animals.",
        engageText: "The attendant grins. 'You don't need tickets, just credits. Way easier than winning, trust me.'",
        discoveredDescription: "The casino prize counter is lit up and busy. The attendant spots your mech and waves you to the front.",
        discoveredEngageText: "The attendant winks. 'VIP treatment for repeat customers. Got some new prizes in the back.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Annihilator Cannon [+9 ATK]"],
        itemSlot2: ["Predator Protocol [+9 BREAKER]"],
        itemSlot3: ["Precognition Engine [+9 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Syndicate Fence",
        type: "shop",
        discoverable: true,
        description: "A syndicate contact pings your secure channel. They have goods that need to move fast.",
        engageText: "The fence slides a datapad across. 'No receipts, no records. Pick what you need and walk.'",
        discoveredDescription: "The syndicate contact's secure channel is pre-loaded in your comms now. The signal comes through clean.",
        discoveredEngageText: "The fence slides the datapad across. 'You're trusted now. That means better stock. Same rules apply.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Void Ripper [+9 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "High-Roller Lounge",
        type: "shop",
        discoverable: true,
        description: "A VIP lounge door opens as your mech approaches. Inside, premium parts are displayed on velvet.",
        engageText: "A host bows slightly. 'Only the finest for our distinguished guests. Credits speak louder than names.'",
        discoveredDescription: "The VIP lounge door opens automatically as your mech approaches. They know you now.",
        discoveredEngageText: "The host smiles. 'Welcome back, distinguished guest. We've acquired some exceptional pieces since your last visit.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Apex Predator [+9 ALL]"],
        itemSlot2: ["Lazarus Engine [+9 REGEN]"],
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
        itemSlot1: ["Map: Dead Zone"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "What happens when the maps run out?",
                response: "He doesn't answer. He hands you the last one."
            }
        ]
    },
    {
        name: "Glint",
        type: "shop",
        discoverable: true,
        description: "A woman in chrome-plated armour operates a sleek smelter behind a velvet rope. Holographic price displays flicker overhead.",
        engageText: "She lowers designer shades. 'Darling, raw ore is so gauche. Let me refine that into something worth showing off.'",
        discoveredDescription: "Glint's chrome smelter gleams under neon light, bass from the nearest club vibrating through the floor plates.",
        discoveredEngageText: "She snaps her fingers. 'VIP access, as always. Furnace is hot, music's loud. Let's make something beautiful.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Yonderite"],
        itemSlot2: ["Refined Zephyrsalt"],
        itemSlot3: ["Refined Isotope Lace"],
        itemSlot4: null
    },
    {
        name: "Lux",
        type: "shop",
        discoverable: true,
        description: "A woman in mirrored armour works behind a glass display case, each mod inside pulsing with white-gold light. Holographic price tags rotate slowly above them.",
        engageText: "She adjusts her shades against the glow. 'Light mods. Photonic resonance — hits like a spotlight through smoke.' She tilts a mod and the whole alley brightens. 'Nothing hides from these.'",
        discoveredDescription: "Lux's glass display pulses with light mods, each one casting shifting patterns across the alley walls.",
        discoveredEngageText: "She flicks her shades down. 'New collection. Brighter than last time. Try not to stare directly at them.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Light Strike"],
        itemSlot2: ["Heavy Light Strike"],
        itemSlot3: ["Spread Light Shot"],
        itemSlot4: ["Wide Light Barrage"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman sits in a back room where every light works. Not the flickering half-life of the strip — these are steady, repaired. Same fast hands, same eyes that catch light wrong. She watches the door like she already knew you were coming.",
        engageText: "'You've seen the signs, right? The ones that work?' She gestures at the functioning lights. 'Something's been fixing the strip. Every broken thing, one by one. It doesn't stop.' She slides a beacon across the table. 'An engineering mech. Still running work orders for a pilot who's been dead for years.'",
        discoveredDescription: "The Herald sits in her back room, same slight frame, same too-fast hands. More lights work now than the last time you were here.",
        discoveredEngageText: "'It's getting closer to this block. Fixing everything in its path. You going to let it get here, or go to it?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Neon Strip"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a fault signal — a component failure on loop. The Tinker's diagnostic systems will flag it as a priority repair. It won't be able to ignore it.'"
            },
            {
                question: "Who are you?",
                response: "'You've met me enough times to know I'm not going to answer that.' A pause. She holds up one hand — for a second the fingers blur, not quite solid. Then they're normal again. 'I'm what happens when the transfer goes too far.'"
            }
        ]
    },
    {
        name: "Gilded EN-9 Tinker",
        characterImage: "images/boss_tinker.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "The neon signs are wrong. Not broken — repaired. Rewired with mismatched components, patched with scavenged circuitry. You follow the trail of fixed things deeper into the strip and find it: the Tinker, gold-plated chassis tarnished to brown, crouched over an arcade cabinet, resoldering a board that hasn't mattered in decades.",
        engageText: "The Tinker's manipulator arms don't pause. Diagnostic sensors sweep the cabinet — connection restored, power nominal. It files the repair and moves to the next broken thing. You're not broken enough to be interesting.",
        discoveredDescription: "The EN-9 Tinker has moved to a new project — a busted traffic light, this time. The tarnished gold chassis crouches over the wiring with machinist precision.",
        discoveredEngageText: "The Tinker doesn't look up. You're functional. You're not on the work queue. It has things to fix.",
        defeatedEngageText: "The neon signs are still lit — repairs that will outlast their maker. The EN-9 Tinker lies among its tools, manipulator arms still, the work queue finally empty.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "Nobody asked it to fix any of this.",
                response: "The Tinker's work queue was supposed to come from its pilot — targets prioritized, problems diagnosed. The queue's been empty for decades. So it built its own. Every broken thing on the strip is a ticket. Every repair is a task completed. It will never run out."
            }
        ]
    }
];
