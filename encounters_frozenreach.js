/**
 * FROZEN REACH - ENCOUNTER CONFIGURATION
 *
 * Outpost traders, ice-road truckers, and research station
 * surplus dealers braving the arctic wastes.
 */

const ENCOUNTERS_FROZENREACH = [
    {
        name: "Outpost Trader",
        type: "shop",
        discoverable: true,
        description: "A heated outpost glows against the snowfield. A trader stamps their boots and waves you over.",
        engageText: "The trader pours hot oil on a frozen bolt. 'Everything works. Just needs warming up first.'",
        discoveredDescription: "The heated outpost glows on the snowfield, a trail of boot prints leading to the door. The trader is expecting you.",
        discoveredEngageText: "The trader pours you something warm. 'Good to see you made it through the ice. New shipment just arrived.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["EVO2 Breaker Chassis [+80 HP]"],
        itemSlot2: ["Quantum Thrusters [+8 SPD]"],
        itemSlot3: ["Aegis Bracers [+8 DEF]"],
        itemSlot4: []
    },
    {
        name: "Ice Road Hauler",
        type: "shop",
        discoverable: true,
        description: "A massive tracked hauler grinds to a stop. The driver opens the cargo hold to passing mechs.",
        engageText: "The hauler driver taps the dash. 'Long run from the coast. Got room to offload. Take a look.'",
        discoveredDescription: "The massive tracked hauler is parked at the same ridge, engine rumbling against the cold. The cargo hold is open.",
        discoveredEngageText: "The hauler driver grins. 'Came back through the pass. Picked up some good stuff on the coast this time.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Breaker Blade [+8 ATK]"],
        itemSlot2: ["Overdrive Sequencer [+8 BREAKER]"],
        itemSlot3: ["Deep War Simulator [+8 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Research Station Surplus",
        type: "shop",
        discoverable: true,
        description: "An abandoned research station still has its supply terminal online. Power flickers but holds.",
        engageText: "The terminal boots up. 'RESEARCH GRANT EXPIRED. LIQUIDATING ASSETS. ALL SALES FINAL.'",
        discoveredDescription: "The abandoned research station's lights still flicker. The supply terminal remembers your last transaction.",
        discoveredEngageText: "The terminal boots faster this time. 'RETURNING USER. DISPLAYING UPDATED LIQUIDATION INVENTORY.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Graviton Extractor [+8 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Glacier Prospector",
        type: "shop",
        discoverable: true,
        description: "A prospector's drill rig sits atop a glacier. They've uncovered pre-war components in the ice.",
        engageText: "The prospector chisels ice off a component. 'Frozen solid for decades. Still works. That's quality.'",
        discoveredDescription: "The prospector's drill rig sits on the same glacier shelf, steam rising from the bore hole. New finds are laid out on a tarp.",
        discoveredEngageText: "The prospector waves a frozen component. 'Drilled deeper this time. Found some real ancient hardware.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Revenant Pilot [+8 ALL]"],
        itemSlot2: ["Phoenix Core Module [+8 REGEN]"],
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
        itemSlot1: ["Map: Neon Strip"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "We're almost there.",
                response: "He looks up from his charts. 'Yeah. We are.'"
            }
        ]
    },
    {
        name: "Thaw",
        type: "shop",
        discoverable: true,
        description: "A frost-bitten woman works a smelter powered by a geothermal vent. Steam billows where fire meets ice.",
        engageText: "She breathes into cupped hands. 'Only forge out here that won't freeze solid. Vent keeps her burning. Bring your ore close.'",
        discoveredDescription: "Thaw's geothermal forge roars against the glacial wind. Icicles melt and refreeze in cycles around the vent's edge.",
        discoveredEngageText: "She stamps her boots. 'Vent's running hot today. Good smelting weather. Let's go.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Vortexium"],
        itemSlot2: ["Refined Wyrmstone"],
        itemSlot3: ["Refined Xanthryx"],
        itemSlot4: null
    },
    {
        name: "Frost",
        type: "shop",
        discoverable: true,
        description: "A bundled figure works at a cryo-cooled mod bench, breath visible in clouds. Each mod casing is rimmed with ice crystals that never melt.",
        engageText: "They crack ice off a finished mod. 'Cryo mods. The cold is the weapon — locks joints, freezes circuits, makes steel brittle.' They blow on their fingers. 'Handle them with insulated gloves.'",
        discoveredDescription: "Frost's cryo bench hums in the cold, mod casings glittering with permanent ice. They're already prepping a fresh batch.",
        discoveredEngageText: "They stamp their boots. 'Cooler's been running hot. Which means colder mods. Take your pick.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Cryo Strike"],
        itemSlot2: ["Heavy Cryo Strike"],
        itemSlot3: ["Power Cryo Surge"],
        itemSlot4: ["Iron Cryo Bulwark"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman huddles in an ice cave, warm air leaking from a thermal vent behind her. Same fast hands, wrapped around her own arms. Through the ice wall, something glows faintly — medical displays, still lit, pulsing in the glacier.",
        engageText: "'It's a mech. A Lifeline.' She presses her palm against the ice. 'The medical systems are still running. Have been for decades. Heating elements cycle, ice melts, refreezes, melts again.' She holds up a beacon. 'A thermal charge. Enough heat to break it free.'",
        discoveredDescription: "The Herald waits in her ice cave, same slight frame, same restless hands. Through the ice, the medical displays pulse — a slow rhythm, like a heartbeat that isn't there.",
        discoveredEngageText: "'The ice is thinner today. The heating elements are winning. It'll break free on its own eventually. Better on your terms.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Frozen Reach"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It generates a sustained thermal pulse. The Lifeline's heating elements will synchronize with the external heat source — it's designed to respond to warmth. The ice won't hold it after that.'"
            },
            {
                question: "Who are you?",
                response: "'Someone who should have died with them.' She doesn't look at you. 'I didn't. I became something else instead.'"
            }
        ]
    },
    {
        name: "Frozen MD-5 Lifeline",
        characterImage: "images/boss_lifeline.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "You find it standing in a crater of refrozen meltwater. Ice caked over every surface, cracked where heating elements pulse beneath the chassis. The medical displays are still lit — vitals flatlined, status critical, treatment ongoing. A walking field hospital, keeping itself alive because the protocol doesn't have a state for 'patient cannot be saved.'",
        engageText: "The Lifeline's triage sensors sweep you briefly. Living pilot — vital signs normal. Not critical. Not a priority. It turns back to the empty cockpit and resumes treatment on a patient that died eighty years ago.",
        discoveredDescription: "The MD-5 Lifeline stands in its crater of refrozen ice, medical displays still cycling. Vitals flatlined. Treatment ongoing. The same loop as before.",
        discoveredEngageText: "The Lifeline's sensors sweep you and dismiss you. Healthy patient. No triage priority. It has a critical case to attend to — the same one it's been attending to for eighty years.",
        defeatedEngageText: "The medical displays are dark. The MD-5 Lifeline stands in its crater of refrozen ice, heating elements cold, biomonitors silent. The patient is no longer critical. The treatment is over.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "The pilot is long dead.",
                response: "The medical displays flicker. Triage reassessment: no heartbeat, no respiration, no neural activity. The same result as every other assessment for eighty years. The same result the protocol rejects, because a field hospital doesn't give up. Treatment ongoing."
            }
        ]
    }
];
