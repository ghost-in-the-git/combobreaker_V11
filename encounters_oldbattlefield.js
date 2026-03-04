/**
 * OLD BATTLEFIELD - ENCOUNTER CONFIGURATION
 *
 * Military supply caches, salvage auctions, and pilgrim caravans
 * moving through the scarred terrain.
 */

const ENCOUNTERS_OLDBATTLEFIELD = [
    {
        name: "Salvage Auction Pod",
        type: "shop",
        discoverable: true,
        description: "A drifting auction pod broadcasts rotating lots of recovered mech gear—first come, first served.",
        engageText: "A synthetic voice lists items at high speed. A timer starts. 'BID CONFIRMED' flashes across your HUD.",
        discoveredDescription: "The auction pod drifts in its usual orbit, broadcasting lot numbers. Your bidding credentials are already cached.",
        discoveredEngageText: "'RETURNING BIDDER DETECTED' flashes across your HUD. The auction feed jumps straight to premium lots.",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Standard Chassis [+20 HP]"],
        itemSlot2: ["Enhanced Servos [+2 SPD]"],
        itemSlot3: ["Shield Bracers [+2 DEF]"],
        itemSlot4: []
    },
    {
        name: "Corporate Supply Cache",
        type: "shop",
        discoverable: true,
        description: "A corporate resupply buoy is active in this sector. Access requires credits and a clean transaction.",
        engageText: "The kiosk chirps politely. 'Welcome, valued contractor. Please select from approved inventory.'",
        discoveredDescription: "The corporate resupply buoy blinks at the same coordinates. Your transaction history is already on file.",
        discoveredEngageText: "The kiosk chirps. 'Welcome back, valued contractor. Your clearance level has been noted.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Energy Blade [+2 ATK]"],
        itemSlot2: ["Combo Link Chip [+2 BREAKER]"],
        itemSlot3: ["Enhanced Data Processor [+2 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Pilgrim Parts Caravan",
        type: "shop",
        discoverable: true,
        description: "A convoy of civilian haulers moves in formation, offering parts in exchange for fuel, ammo, or coin.",
        engageText: "A tired caravan captain nods. 'We don't fight, we survive. Trade fair and we'll both make it home.'",
        discoveredDescription: "The pilgrim caravan has circled back to familiar ground. The captain recognizes your mech on approach.",
        discoveredEngageText: "The caravan captain smiles. 'The honest one returns. I set aside some things for you.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Pneumatic Drill [+2 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Experimental R&D Vendor",
        type: "shop",
        discoverable: true,
        description: "A research craft requests a brief rendezvous. Prototype components available for combat testing.",
        engageText: "A scientist peers at your mech telemetry. 'Sign the waiver. If it glows, that's normal. Mostly.'",
        discoveredDescription: "The research craft is parked at the same coordinates, instruments whirring. They've been expecting test data.",
        discoveredEngageText: "The scientist's eyes light up. 'You survived! Excellent. I have new prototypes. Same waiver applies.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Trained Pilot [+2 ALL]"],
        itemSlot2: ["Basic Nano Injector [+2 REGEN]"],
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
        itemSlot1: ["Map: Downtown"],
        itemSlot2: ["Map: The Forge"],
        itemSlot3: ["Map: The Mod Shop"],
        itemSlot4: null,
        dialogue: [
            {
                question: "You were here before me.",
                response: "'Long before.' He doesn't look up."
            },
            {
                question: "What do you get out of this?",
                response: "A long silence. He folds a chart carefully along its creases. 'I'll know where I am.'"
            }
        ]
    },
    {
        name: "Crucible",
        type: "shop",
        discoverable: true,
        description: "A scarred woman operates a field forge from inside a bombed-out tank hull. Shell casings litter the ground around her.",
        engageText: "She racks a glowing ingot. 'War's over, but the forge isn't. You need refining, I'm your only option out here.'",
        discoveredDescription: "Crucible's tank-hull forge belches black smoke between the craters. She's already pulling on her blast gloves as you approach.",
        discoveredEngageText: "She nods once. 'Forge is primed. Let's not waste daylight — things still patrol at night.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Duskquartz"],
        itemSlot2: ["Refined Emberlith"],
        itemSlot3: ["Refined Frostveil"],
        itemSlot4: null
    },
    {
        name: "Ember",
        type: "shop",
        discoverable: true,
        description: "A burn-scarred woman crouches beside a portable mod bench, its power cell jury-rigged to a still-smouldering munitions crate. Heat shimmers off every surface.",
        engageText: "She blows ash off a mod casing. 'Fire mods. Built from ordnance that didn't detonate the first time.' She grins, teeth white against soot. 'Works better the second time around.'",
        discoveredDescription: "Ember's mod bench glows between the craters. She's already testing a casing when you approach.",
        discoveredEngageText: "She tosses a hot mod from hand to hand. 'Back for more heat? Good. I just finished a batch.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Fire Strike"],
        itemSlot2: ["Heavy Fire Strike"],
        itemSlot3: ["Keen Fire Pierce"],
        itemSlot4: ["Wide Fire Barrage"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman sits atop a burnt-out tank, scanning the horizon with bare eyes sharper than any scope. Same build, same restless hands — she saw you coming before you saw her.",
        engageText: "'The battlefield remembers its dead.' She climbs down slowly. 'But there's one that never died. It's still out there, running on orders from a war that ended years ago.' She produces a beacon. 'This will bring it to you.'",
        discoveredDescription: "The Herald watches from her tank perch, same slight frame, same too-sharp eyes. She's already reaching for the beacon before you arrive.",
        discoveredEngageText: "She drops down. 'The Bulwark is still dug in. Same position. Same perimeter. It won't move until something crosses the line.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Old Battlefield"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a perimeter breach on the Bulwark's defensive frequency. The mech is dug in — it won't leave its position for anything less than a direct threat to whatever it thinks it's still protecting. The beacon makes you that threat.'"
            },
            {
                question: "Who are you?",
                response: "'Someone who remembers what these machines were before they were monsters.' She watches the horizon like she's seeing a different battlefield. 'That was a long time ago.'"
            }
        ]
    },
    {
        name: "Shelled MK-IV Bulwark",
        characterImage: "images/boss_bulwark.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "You almost walk past it. The MK-IV Bulwark is dug in behind a collapsed bunker, armour cratered and blackened, treads fused to the mud. It hasn't moved in decades. But it's still facing outward — turret locked on a perimeter that no longer exists, shielding a position with nothing left to protect.",
        engageText: "The Bulwark's turret traverses slowly across the empty field. It tracks movement, but you're not crossing its line. It has no orders to engage. It just holds the position.",
        discoveredDescription: "The MK-IV Bulwark is still dug in behind the bunker. Same position. Same perimeter. The turret tracks the empty field in a slow, endless arc.",
        discoveredEngageText: "The Bulwark registers you and dismisses you. You're not a threat to the position. It goes back to guarding nothing.",
        defeatedEngageText: "The MK-IV Bulwark is still. The turret has stopped traversing. The perimeter it guarded for decades goes unwatched — and nothing comes through it.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "What is it guarding?",
                response: "The bunker behind it is empty. Collapsed roof, rusted cots, nothing worth protecting. But the Bulwark's defensive protocols don't check what's behind it — only what's in front. As long as something might cross the line, it holds."
            }
        ]
    }
];
