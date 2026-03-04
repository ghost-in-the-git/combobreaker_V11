/**
 * ORBITAL STATION - ENCOUNTER CONFIGURATION
 *
 * Zero-g traders, station quartermasters, and smugglers
 * docked in the station's commercial ring.
 */

const ENCOUNTERS_ORBITALSTATION = [
    {
        name: "Station Quartermaster",
        type: "shop",
        discoverable: true,
        description: "A logistics officer flags your mech from the station's supply bay. Surplus military stock available.",
        engageText: "The quartermaster checks a manifest. 'Standard rates, standard gear. Nothing fancy, nothing broken.'",
        discoveredDescription: "The quartermaster's supply bay is open as usual. Your requisition code is already in the system.",
        discoveredEngageText: "The quartermaster checks the manifest. 'Ah, you're back. I pulled some new stock from the last shipment.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Military Chassis [+40 HP]"],
        itemSlot2: ["Hydraulic Boosters [+4 SPD]"],
        itemSlot3: ["Barrier Arms [+4 DEF]"],
        itemSlot4: []
    },
    {
        name: "Zero-G Peddler",
        type: "shop",
        discoverable: true,
        description: "A small craft is magnetically clamped to the station hull. A trader waves from the airlock.",
        engageText: "The peddler floats out with a crate. 'Catch! Everything's weightless up here, including the prices.'",
        discoveredDescription: "The peddler's craft is clamped to its usual spot on the hull. A hand waves from the airlock as you approach.",
        discoveredEngageText: "The peddler floats out grinning. 'My favourite customer! I've been saving the good crates for you.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Shock Cannon [+4 ATK]"],
        itemSlot2: ["Chain Protocol [+4 BREAKER]"],
        itemSlot3: ["Tactical Neural Net [+4 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Docking Ring Vendor",
        type: "shop",
        discoverable: true,
        description: "An automated kiosk at the docking ring displays rotating inventory on a holographic shelf.",
        engageText: "The kiosk chimes. 'Welcome, docking permit verified. Browse at your leisure, pilot.'",
        discoveredDescription: "The docking ring kiosk lights up as your mech enters range. Your profile is already loaded.",
        discoveredEngageText: "The kiosk chimes warmly. 'Welcome back, pilot. Inventory has been refreshed since your last visit.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Diamond-Tip Auger [+4 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Void Smuggler",
        type: "shop",
        discoverable: true,
        description: "A blacked-out shuttle with scrambled transponders drifts alongside. A hailing frequency opens.",
        engageText: "A masked figure whispers. 'I move things between stations that stations don't want moved. Interested?'",
        discoveredDescription: "The blacked-out shuttle is parked in the station's shadow. The scrambled transponder pings your secure channel.",
        discoveredEngageText: "The masked figure tilts their head. 'You again. Good. I've got something special this run.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Elite Pilot [+4 ALL]"],
        itemSlot2: ["Regenerative Mesh [+4 REGEN]"],
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
        itemSlot1: ["Map: Wasteland"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "Your charts show places I haven't been yet.",
                response: "'What good is a map of a place you remember.' He doesn't look up."
            },
            {
                question: "How do you survive out here?",
                response: "'It's only a little bit further.' He traces a line on the chart with his finger."
            }
        ]
    },
    {
        name: "Zero",
        type: "shop",
        discoverable: true,
        description: "A man in a pressurised suit tends a magnetically-contained smelter floating in a depressurised cargo bay. Everything is precise.",
        engageText: "He adjusts a dial without looking. 'Zero-g refining. Purest yields in the system. Place your minerals on the mag-plate.'",
        discoveredDescription: "Zero's cargo bay forge drifts in perfect stillness. The magnetic containment field hums as molten metal orbits inside it.",
        discoveredEngageText: "He gestures to the mag-plate. 'Calibration is optimal. Proceed.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Jetspinel"],
        itemSlot2: ["Refined Kryptoglass"],
        itemSlot3: ["Refined Lumenore"],
        itemSlot4: null
    },
    {
        name: "Pulse",
        type: "shop",
        discoverable: true,
        description: "A wiry man with electrical burns on both forearms sits behind a workstation crackling with static discharge. Every mod on his rack hums with stored charge.",
        engageText: "He taps a mod and a spark arcs between his fingers. 'Volt mods. Capacitor-driven, field-tested in vacuum. The charge builds until you release it.' He grins. 'Try not to ground yourself.'",
        discoveredDescription: "Pulse's workstation crackles and hums. The static gets worse every time you visit.",
        discoveredEngageText: "He waves you closer, sparks trailing his fingertips. 'Fresh charge on the whole rack. Pick your voltage.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Volt Strike"],
        itemSlot2: ["Heavy Volt Strike"],
        itemSlot3: ["Spread Volt Shot"],
        itemSlot4: ["Power Volt Surge"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman in a patched EVA suit floats in a depressurised corridor, tethered to a support beam. Her hands make constant micro-adjustments to the tether — precise, mechanical movements that don't match the casual way she's watching you.",
        engageText: "'The rig's main shaft goes down about two kilometres.' She pulls herself along the tether. 'There's a DR-7 Prospector at the bottom. Been drilling the same dead rock for 80 years. It won't notice you — it doesn't notice anything anymore.' She holds out a beacon. 'This disrupts the drill cycle. Breaks the loop. And when the loop breaks, it wakes up.'",
        discoveredDescription: "The Herald floats in the same corridor, same slight frame, same hands that never stop moving. Her shuttle's docking clamps haven't shifted.",
        discoveredEngageText: "'It's still down there. Still drilling. Still asleep. You want to wake it up or not?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Orbital Station"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It hits the Prospector with a frequency that interrupts the drill cycle. Forces a hard reset on its targeting systems.' She snaps her fingers. 'For about half a second it stops being a mining rig and remembers it's a mech. That's when it sees you. After that, you're just an obstruction in the dig site.'"
            },
            {
                question: "Who are you?",
                response: "'I go where the squad's mechs ended up.' The word 'squad' slips out. She notices, shuts her mouth, and looks away. 'Buy the beacon or don't.'"
            }
        ]
    },
    {
        name: "Depressurized DR-7 Prospector",
        characterImage: "images/boss_prospector.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "The mining shaft goes straight down. At the bottom of the pit, the DR-7 Prospector is still working. Seismic drill arms grind against bare stone in slow, rhythmic strokes, re-carving grooves that have been carved a thousand times over. Its ore detection array sweeps the walls on a loop, pinging empty rock.",
        engageText: "The Prospector's ore detection array sweeps past you and keeps going. You're not rock. You're not ore. You don't register on any scan it cares about.",
        discoveredDescription: "The DR-7 Prospector is still at the bottom of the shaft, drills grinding the same grooves into the same bare stone. The low mechanical drone hasn't changed.",
        discoveredEngageText: "The Prospector doesn't look up. The drills keep grinding. Down here, you're just more empty space between the walls.",
        defeatedEngageText: "The drill arms are still. The ore detection array has gone dark. At the bottom of the shaft, the DR-7 Prospector sits in silence for the first time in decades. The stone has stopped humming.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "There's nothing left to mine.",
                response: "The drill arms slow for a moment. The ore detection array pings the wall — empty, the same reading it's returned for decades. Then the drills spin back up. The Prospector's firmware doesn't have a state for 'deposit exhausted.' Only 'keep drilling.'"
            }
        ]
    }
];
