/**
 * UNDERCITY - ENCOUNTER CONFIGURATION
 *
 * Underground fixers, tunnel market stalls, and rogue
 * maintenance drones repurposed for trade.
 */

const ENCOUNTERS_UNDERCITY = [
    {
        name: "Tunnel Fixer",
        type: "shop",
        discoverable: true,
        description: "A fixer's workshop is carved into the tunnel wall. Neon signs flicker in the damp air.",
        engageText: "The fixer cracks their knuckles. 'I fix what's broke and sell what's not. Simple arrangement.'",
        discoveredDescription: "The fixer's workshop glows in the tunnel wall, neon signs reflecting off the damp stone. You know the way now.",
        discoveredEngageText: "The fixer nods as you walk in. 'The regular. Good. I've got some new pieces you'll want to see.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Breaker Chassis [+60 HP]"],
        itemSlot2: ["Kinetic Stabilizers [+6 SPD]"],
        itemSlot3: ["Fortress Gauntlets [+6 DEF]"],
        itemSlot4: []
    },
    {
        name: "Pipe Market Stall",
        type: "shop",
        discoverable: true,
        description: "A cluster of makeshift stalls fills a junction in the pipe network. Traders haggle in the echo.",
        engageText: "A stall owner slaps a component on the counter. 'Best price in the pipes. Don't compare, just buy.'",
        discoveredDescription: "The junction market is busy as ever, voices echoing through the pipes. Your usual stall owner waves.",
        discoveredEngageText: "The stall owner grins. 'Hey, you're back! I put something aside. Best deal in the pipes, guaranteed.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: ["Assault Module [+6 ATK]"],
        itemSlot2: ["Assault Algorithm [+6 BREAKER]"],
        itemSlot3: ["Adaptive Learning Matrix [+6 Silicon]"],
        itemSlot4: []
    },
    {
        name: "Rogue Maintenance Drone",
        type: "shop",
        discoverable: true,
        description: "A reprogrammed city maintenance drone hovers nearby, cargo bay loaded with mismatched parts.",
        engageText: "The drone beeps twice and opens its bay. A speaker crackles: 'TRADE PROTOCOL ACTIVE.'",
        discoveredDescription: "The reprogrammed drone hovers at its usual junction, cargo bay loaded. It beeps twice when it spots you.",
        discoveredEngageText: "The drone plays a cheerful chime. 'RETURNING CUSTOMER PROTOCOL. PRIORITY ACCESS GRANTED.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Plasma Bore [+6 MINING]"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: []
    },
    {
        name: "Shadow Broker",
        type: "shop",
        discoverable: true,
        description: "A hidden door slides open in the tunnel wall. Inside, a broker deals in parts no one asks about.",
        engageText: "The broker doesn't look up. 'You weren't here. I wasn't here. Pick something and leave.'",
        discoveredDescription: "The hidden door in the tunnel wall slides open as you approach. The broker remembers your signal.",
        discoveredEngageText: "The broker glances up this time. 'You again. Fine. New stock, same rules. Don't linger.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Shadow Operator [+6 ALL]"],
        itemSlot2: ["Nano Reconstruction Array [+6 REGEN]"],
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
        itemSlot1: ["Map: Industrial Zone"],
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "Military run these tunnels. How are you ok?",
                response: "'They aren't looking for ghosts.' He keeps writing."
            },
            {
                question: "You're running out of places to send me.",
                response: "'No.' He sets his pen down. 'You're running out of places I've been.'"
            }
        ]
    },
    {
        name: "Dreg",
        type: "shop",
        discoverable: true,
        description: "A wiry man crouches beside a forge jury-rigged into a drainage pipe. Steam vents from cracks in the tunnel walls around him.",
        engageText: "He peers up from the glow. 'Down here, nobody asks where the ore came from. I just refine it. You want in or not?'",
        discoveredDescription: "Dreg's pipe-forge hisses and pops, condensation dripping from the low ceiling. He's already stoking the coals when you arrive.",
        discoveredEngageText: "He grins, teeth glinting in the forge-light. 'My favourite customer. The dark keeps our business private.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Refined Prismalune"],
        itemSlot2: ["Refined Quellium"],
        itemSlot3: ["Refined Riftmarble"],
        itemSlot4: null
    },
    {
        name: "Stitch",
        type: "shop",
        discoverable: true,
        description: "A figure in stained surgical gear works under a UV lamp, grafting organic components into mod casings. Jars of bio-neural tissue line the shelf behind them.",
        engageText: "They don't look up from the graft. 'Flesh mods. Living circuitry — adapts, heals, learns.' A wet click as a component seats itself. 'The mod grows into your system. Literally.'",
        discoveredDescription: "Stitch's underground lab hums with bio-luminescence. The jars have new specimens since your last visit.",
        discoveredEngageText: "They glance up through surgical loupes. 'The cultures are ready. Strongest organic mods I've grown yet.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: ["Swift Flesh Strike"],
        itemSlot2: ["Heavy Flesh Strike"],
        itemSlot3: ["Quick Flesh Repair"],
        itemSlot4: ["Deep Flesh Restore"]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman stands at a tunnel junction, one hand pressed flat against the wall. Same fast hands — but the one on the wall is trembling. She's not listening to the tunnels. She's listening to something moving through them — fast.",
        engageText: "'There's an SC-1 Flicker down here.' She doesn't look at you. 'Ultralight recon frame. Fastest chassis ever built. It's been running these tunnels for 80 years — scanning, mapping, reporting to a dead frequency.' A long pause. She pulls a beacon from her coat. Her hand isn't steady. 'This one's personal.' She doesn't explain. 'The beacon interrupts the recon loop. Forces a hard reset on targeting. For about half a second it stops running and sees you. After that, you're just another threat in the tunnel.'",
        discoveredDescription: "The Herald is at the same junction, same slight frame, hand on the wall. She pulls it away when she hears you coming, like she was caught doing something private.",
        discoveredEngageText: "'It's still running. Same routes. Same frequency.' She holds out the beacon without looking at it. 'Get it done.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Undercity"],
        itemSlot2: [],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'The Flicker is running a recon loop — same tunnels, same route, same report to a frequency that's been dead for decades. The beacon jams the loop. Breaks the cycle.' She swallows. 'When the cycle breaks, the scout firmware panics. Needs a new target. You'll be the only thing standing still.'"
            },
            {
                question: "Who are you?",
                response: "She's quiet for too long. 'I knew the pilot.' Four words. She turns back to the wall and presses her hand flat against the stone, feeling the vibration of something fast moving through the tunnels below. 'Just get it done.'"
            }
        ]
    },
    {
        name: "Corroded SC-1 Flicker",
        characterImage: "images/boss_flicker.gif",
        type: "shop",
        discoverable: true,
        isBossArea: true,
        description: "A high-pitched whine echoes through the tunnels, bouncing off walls, impossible to place. Then a blur of corroded metal screams through the junction ahead. Gone. You turn — it's behind you. Gone again. An SC-1 Flicker, running the tunnel network at full speed, delivering intel to no one.",
        engageText: "The Flicker blurs through the junction without slowing. You catch a glimpse of corroded plating — then it's gone, already three tunnels away. It's running recon on a network it's mapped a million times. You're not worth stopping for.",
        discoveredDescription: "The high-pitched whine is back. The SC-1 Flicker is still running its endless circuit through the tunnels, a blur of corroded metal that never stops moving.",
        discoveredEngageText: "The Flicker screams past you again. Same speed. Same route. Same corroded blur. It has nowhere to stop and no one to report to.",
        defeatedEngageText: "The tunnels are quiet. No whine, no blur, no corroded streak screaming through the junctions. The SC-1 Flicker sits against a wall, mid-stride frozen into stillness. The recon loop is over.",
        appearanceRate: 8,
        minLevel: 1,
        itemSlot1: null,
        itemSlot2: null,
        itemSlot3: null,
        itemSlot4: null,
        dialogue: [
            {
                question: "It's so fast.",
                response: "The SC-1 was the fastest chassis ever built — ultralight recon, designed to outrun anything on the battlefield. Without a pilot to tell it where to go, the speed is just... running. Laps through tunnels it memorized decades ago, delivering reports to a dead frequency."
            }
        ]
    }
];
