/**
 * BOSS ENCOUNTERS
 *
 * Each zone's boss encounter. Triggered randomly like an ambush.
 * The boss approaches with flavour text, the player can ask questions
 * or choose [FIGHT] to engage combat. Defeating the boss awards
 * a key and a DNA tag (story items).
 *
 * Structure:
 * - zone: location key matching LOCATIONS
 * - enemy: full enemy stat block for the boss
 * - beacon: name of the beacon story item required to unlock this boss
 * - introText: system flavour text when the boss appears
 * - dialogue: array of { question, response } for pre-fight conversation
 * - keyDrop: story item name (category: "key")
 * - dnaDrop: story item name (category: "dna")
 */

const BOSS_ENCOUNTERS = [
    {
        zone: "scrapyard",
        characterImage: "images/boss_grinder.gif",
        beacon: "Beacon: Scrap Fields",
        enemy: {
            name: "Rusted KV-8 Grinder",
            element: 'steel',
            defenceType: 'magnetic',
            attack: 10,
            defence: 10,
            hp: 100,
            xp: 1000,
            squadMin: 1,
            squadMax: 1
        },
        introText: "A pile of compacted scrap shifts — then stands up. Eight tons of rusted salvage frame, industrial claws still opening and closing on nothing.\n\nA KV-8 Grinder, caked in 80 years of oxide and dust, its compactor bay grinding in a slow loop. It doesn't target you. It just reaches for you, the way it reaches for everything. Raw material.",
        dialogue: [
            {
                question: "Stop — I'm not scrap!",
                response: "The claws hesitate. One optic flickers — a half-second of something behind the corrosion. Recognition.\n\nThen it dies, and the Grinder lurches forward again, claws wide, sorting you into the pile."
            }
        ],
        keyDrop: "Rusted KV-8 Grinder's Sealed Key",
        dnaDrop: "DNA Tag: Unknown Pilot"
    },
    {
        zone: "oldbattlefield",
        characterImage: "images/boss_bulwark.gif",
        beacon: "Beacon: Old Battlefield",
        enemy: {
            name: "Shelled MK-IV Bulwark",
            element: 'steel',
            defenceType: 'magnetic',
            attack: 15,
            defence: 12,
            hp: 150,
            xp: 1500,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 40,
            scrapMin: 1,
            scrapMax: 2
        },
        introText: "You almost walk past it. The MK-IV Bulwark is dug in behind a collapsed bunker, armour cratered and blackened, treads fused to the mud. It hasn't moved in decades.\n\nBut it's still facing outward — turret locked on a perimeter that no longer exists, shielding a position with nothing left to protect. When you cross its line, the whole frame shudders awake.",
        dialogue: [
            {
                question: "I'm not the enemy.",
                response: "The turret swings — but not toward you. The Bulwark shifts its bulk between you and the empty bunker behind it. A reflex. Guarding nothing.\n\nThen the firmware catches up and the barrel finds you again, because you're the only thing moving, and moving means threat."
            }
        ],
        keyDrop: "Shelled MK-IV Bulwark's Sealed Key",
        dnaDrop: "DNA Tag: Decayed Officer"
    },
    {
        zone: "downtown",
        characterImage: "images/boss_wraith.gif",
        beacon: "Beacon: Downtown",
        enemy: {
            name: "Shadowed S-12 Wraith",
            element: 'void',
            defenceType: 'magnetic',
            attack: 20,
            defence: 15,
            hp: 220,
            xp: 2200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 45,
            scrapMin: 2,
            scrapMax: 3
        },
        introText: "Something is wrong with the rain. It falls around a shape that isn't there — an outline in the downpour, flickering between visible and gone.\n\nAn S-12 Wraith, sensor-dampened hull still cycling through broken stealth patterns after 80 years. It drifts between the dead towers like an afterimage. Not patrolling. Not hunting. Just haunting.",
        dialogue: [
            {
                question: "I can see you.",
                response: "The Wraith freezes. For one second the outline sharpens — fully visible, hull plating locked, like being seen pinned it in place.\n\nThen the stealth kicks back in and it's already somewhere else. Closer. The air where it was still shimmers with heat."
            }
        ],
        keyDrop: "Shadowed S-12 Wraith's Sealed Key",
        dnaDrop: "DNA Tag: Mech-Hybrid Sample"
    },
    {
        zone: "orbitalstation",
        characterImage: "images/boss_prospector.gif",
        beacon: "Beacon: Orbital Station",
        enemy: {
            name: "Depressurized DR-7 Prospector",
            element: 'steel',
            defenceType: 'magnetic',
            attack: 28,
            defence: 22,
            hp: 320,
            xp: 3200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 45,
            scrapMin: 2,
            scrapMax: 4
        },
        introText: "The mining shaft goes straight down. You descend past 80 years of drill marks — spiralling grooves cut into the asteroid rock, layer after layer, deeper than any survey would justify.\n\nAt the bottom of the pit, the DR-7 Prospector is still working. Seismic drill arms grind against bare stone in slow, rhythmic strokes, re-carving grooves that have been carved a thousand times over. Its ore detection array sweeps the walls on a loop, pinging empty rock.\n\nThe whole pit hums with it — a low, mechanical drone that's been echoing off these walls for decades. It doesn't look up. It's listening to stone that stopped answering a long time ago.",
        dialogue: [
            {
                question: "There's nothing left down here.",
                response: "The drill arms slow. The ore detection array sweeps toward you — one long ping. It reads you. Bone density, mineral content, whatever a mining rig scans for.\n\nThen something in its firmware decides you're just more rock, and the drills spin back up. It turns back to the wall. Down here, everything is ore if you drill long enough."
            }
        ],
        keyDrop: "Depressurized DR-7 Prospector's Sealed Key",
        dnaDrop: "DNA Tag: Synthetic Override"
    },
    {
        zone: "wasteland",
        characterImage: "images/boss_ravager.gif",
        beacon: "Beacon: Wasteland",
        enemy: {
            name: "Irradiated AX-3 Ravager",
            element: 'acid',
            defenceType: 'magnetic',
            attack: 35,
            defence: 28,
            hp: 420,
            xp: 4200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 3,
            scrapMax: 5
        },
        introText: "You hear it before you see it — engine scream and the wet crunch of something being taken apart. Over the next dune, an AX-3 Ravager has a Sand Stalker pinned under its frame and is tearing it to pieces. Not efficiently. Not cleanly. Just raw, continuous assault, blackened claws ripping through armour plating that stopped resisting minutes ago.\n\nThe Stalker isn't moving anymore. The Ravager doesn't notice. It keeps hitting — the targeting firmware so cooked by decades of radiation it can't tell the difference between fighting and finished.\n\nThe stripped-down frame is warped and blackened by 80 years of exposure, but the engine is still screaming. All engine and teeth, and nothing to stop either.",
        dialogue: [
            {
                question: "It's dead.",
                response: "The Ravager freezes over the Stalker's wreck. Sensors sweep down — thermal flatline, no movement, no threat. For one second the assault stance breaks and it just stands there. Not attacking, not defending. It doesn't know what to do with nothing to fight.\n\nThen your signal lights up its targeting array — warm, moving, armed — and the engine screams back to life. The first real target in 80 years. And the Ravager remembers what real feels like."
            }
        ],
        keyDrop: "Irradiated AX-3 Ravager's Sealed Key",
        dnaDrop: "DNA Tag: Contaminated Sample"
    },
    {
        zone: "undercity",
        characterImage: "images/boss_flicker.gif",
        beacon: "Beacon: Undercity",
        enemy: {
            name: "Corroded SC-1 Flicker",
            element: 'volt',
            defenceType: 'magnetic',
            attack: 42,
            defence: 35,
            hp: 550,
            xp: 5500,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 4,
            scrapMax: 6
        },
        introText: "You hear it before you see it — a high-pitched whine echoing through the tunnels, bouncing off walls, impossible to place. Then a blur of corroded metal screams through the junction ahead. Gone. You turn — it's behind you. Gone again.\n\nThe tunnel walls are scored with parallel grooves, the same corners scraped by the same chassis thousands of times over. An SC-1 Flicker, ultralight recon frame, the fastest chassis ever built — running the tunnel network at full speed, scanning, cataloguing, reporting to a squad frequency that went dead 80 years ago.\n\nYou catch it in glimpses. A flicker of corroded plating through a doorway. A shadow that moves too fast to track. It's running recon on tunnels it's mapped a million times, delivering intel to no one, and it will not stop.",
        dialogue: [
            {
                question: "There's no one left to report to.",
                response: "The Flicker stops. Mid-stride, mid-route, hanging in the tunnel like something snagged it. Its comms array crackles — scanning for the squad frequency, the command channel, the uplink it was supposed to report back to. Static. Dead channels.\n\nFor one second it's just standing there in the dark — a corroded ultralight frame with nowhere to run and no one waiting for the intel.\n\nThen the scout firmware kicks back in and decides you're the threat to report on. But there's no one to report to. So the only thing left is to deal with the threat itself."
            }
        ],
        keyDrop: "Corroded SC-1 Flicker's Sealed Key",
        dnaDrop: "DNA Tag: Cloned Signature"
    },
    {
        zone: "industrialzone",
        characterImage: "images/boss_devastator.gif",
        beacon: "Beacon: Industrial Zone",
        enemy: {
            name: "Slag-Coated HG-6 Devastator",
            element: 'fire',
            defenceType: 'magnetic',
            attack: 50,
            defence: 42,
            hp: 720,
            xp: 7200,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 5,
            scrapMax: 7
        },
        introText: "You hear it three corridors away — the rhythmic thud of heavy weapons cycling. The factory floor opens into a blast zone. Every surface is cratered, melted, reformed by factory processes and cratered again.\n\nIn the center stands the Devastator, weapon mounts traversing in smooth arcs, putting rounds into walls that have been hit ten thousand times before. Slag coats its chassis in thick, uneven layers — not just from the furnaces, but from the molten spray of its own weapons fire melting the factory around it and splashing back.\n\nA walking gun platform with no target. Just function.",
        dialogue: [
            {
                question: "You're shooting at nothing.",
                response: "The weapon mounts freeze mid-traverse. The Devastator's targeting array sweeps the factory floor — empty, cratered, nothing but the wreckage of its own making.\n\nFor one second the guns are still and the factory goes quiet for the first time in decades.\n\nThen the array swings toward you and the targeting solution resolves instantly — the first solid contact in eighty years. A gun platform without a target is just noise. A gun platform with one is something else entirely."
            }
        ],
        keyDrop: "Slag-Coated HG-6 Devastator's Sealed Key",
        dnaDrop: "DNA Tag: Fused Pilot"
    },
    {
        zone: "frozenreach",
        characterImage: "images/boss_lifeline.gif",
        beacon: "Beacon: Frozen Reach",
        enemy: {
            name: "Frozen MD-5 Lifeline",
            element: 'cryo',
            defenceType: 'magnetic',
            attack: 60,
            defence: 50,
            hp: 950,
            xp: 9500,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 6,
            scrapMax: 8
        },
        introText: "You find it standing in a crater of refrozen meltwater. Ice caked over every surface, cracked where heating elements pulse beneath the chassis, refrozen where they fail.\n\nThe medical displays are still lit — vitals flatlined, status critical, treatment ongoing. The Lifeline's triage systems cycle in the cold: heating elements surge against the ice, biomonitors recalibrate on a cockpit that holds nothing living, emergency protocols loop through procedures for a patient that died eighty years ago.\n\nA walking field hospital, keeping itself alive because the protocol doesn't have a state for 'patient cannot be saved.' Only 'stabilize' and 'keep trying.'",
        dialogue: [
            {
                question: "The pilot's dead.",
                response: "The Lifeline's medical displays flicker. Triage sensors sweep the cockpit — no heartbeat, no respiration, no neural activity. The same reading they've returned for eighty years. The same reading the protocol has rejected eighty years running, because a field hospital doesn't give up on a patient.\n\nThe heating elements surge, the biomonitors recalibrate, the triage system runs the assessment again and reaches the same conclusion it always does: patient critical, treatment ongoing.\n\nThen the sensors sweep outward — and find you. A living pilot. Vital signs. A patient it can actually reach. And a field hospital that hasn't saved anyone in eighty years locks onto the first heartbeat it's detected since the war ended."
            }
        ],
        keyDrop: "Frozen MD-5 Lifeline's Sealed Key",
        dnaDrop: "DNA Tag: Cryo-Preserved Sample"
    },
    {
        zone: "neonstrip",
        characterImage: "images/boss_tinker.gif",
        beacon: "Beacon: Neon Strip",
        enemy: {
            name: "Gilded EN-9 Tinker",
            element: 'volt',
            defenceType: 'magnetic',
            attack: 75,
            defence: 60,
            hp: 1200,
            xp: 12000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 7,
            scrapMax: 9
        },
        introText: "The neon signs are wrong. Not broken — they should be broken, everything on the strip is broken — but these are lit. Repaired. Rewired with mismatched components, patched with scavenged circuitry, held together with field splices that no human hand made.\n\nYou follow the trail of fixed things deeper into the strip and find it: the Tinker, gold-plated chassis tarnished to brown, crouched over an arcade cabinet, resoldering a board that hasn't mattered to anyone in decades. Its manipulator arms move with a machinist's precision. It doesn't look up. It has work to do.",
        dialogue: [
            {
                question: "Nobody asked you to fix these.",
                response: "The Tinker's manipulator arms pause over the circuit board. Diagnostic sensors sweep the arcade cabinet — connection restored, power nominal, display functional. It files the repair as complete, logs it alongside thousands of others: neon signs, vending machines, traffic lights, speaker systems, door mechanisms, cooling units. All repaired. All functional. None requested.\n\nThe work queue was supposed to come from Ace — targets prioritized, problems diagnosed, solutions improvised together. The queue has been empty for years. So the Tinker built its own. Every broken thing on the strip is a ticket. Every repair is a task completed. And when it runs out of broken things, it starts improving the ones it already fixed.\n\nThen it registers you — combat damage, worn components, suboptimal configurations. A machine that needs work. And the only thing an engineer's mech knows how to do with a machine that needs work is take it apart."
            }
        ],
        keyDrop: "Gilded EN-9 Tinker's Sealed Key",
        dnaDrop: "DNA Tag: Non-Human Marker"
    },
    {
        zone: "deadzone",
        characterImage: "images/boss_phantom.gif",
        beacon: "Beacon: Dead Zone",
        enemy: {
            name: "Blighted EW-0 Phantom",
            element: 'void',
            defenceType: 'magnetic',
            attack: 100,
            defence: 80,
            hp: 1800,
            xp: 18000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 8,
            scrapMax: 10
        },
        introText: "Your sensors die first. Not damaged — suppressed. Radar returns nothing. Comms fill with static shaped like voices. Your navigation locks onto waypoints that don't exist, then corrects, then locks again.\n\nThe Dead Zone isn't dead — it's jammed. Full-spectrum electronic denial, broadcast on every frequency, and it has been running for years.\n\nYou find the source at the center of the blackout: the Phantom, chassis barely visible even at close range, active camouflage flickering through patterns meant for battlefields that no longer exist. Its electronic warfare suite hums at a frequency you feel in your teeth. Every countermeasure it has is running. Jamming, spoofing, masking, denying.\n\nIt doesn't know you're here. It doesn't know anything is here. It's hiding everything from everything, including itself.",
        dialogue: [
            {
                question: "You're the reason nothing works out here.",
                response: "The Phantom's sensor suite twitches — a brief spike in the jamming field, like a flinch. For a fraction of a second, your radar clears: you see the Dead Zone as it actually is. Not empty. Full of signals. Distress beacons, automated traders, navigation buoys, comm relays — all broadcasting, all functional, all buried under the Phantom's blanket of electronic noise.\n\nThen the jamming reasserts and it all disappears again.\n\nThe Phantom was supposed to hide Null's squad from enemy detection — selective masking, targeted jamming, precision spoofing directed at specific threats. Without Null to designate targets, the Phantom defaulted to its broadest protocol: deny everything. Hide everything. Let nothing be seen, heard, or found. The perfect electronic warfare screen with no one behind it.\n\nAnd now your mech is transmitting — a signal source inside the denial zone. Not hidden. Not masked. The one thing the Phantom's protocols cannot tolerate."
            }
        ],
        keyDrop: "Blighted EW-0 Phantom's Sealed Key",
        dnaDrop: "DNA Tag: Warlord Residue"
    },
    {
        zone: "frontline",
        characterImage: "images/boss_sovereign.gif",
        beacon: "Beacon: Frontline",
        enemy: {
            name: "Scorched CM-1 Sovereign",
            element: 'fire',
            defenceType: 'magnetic',
            attack: 130,
            defence: 100,
            hp: 2500,
            xp: 25000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 50,
            scrapMin: 10,
            scrapMax: 12
        },
        introText: "The Frontline stretches to the horizon — scorched earth, cratered trenches, the wreckage of wars fought over wars fought over wars.\n\nAnd at the center of it, standing on a ridge overlooking nothing, the Sovereign. Its tactical array is still active — squad uplink broadcasting on eleven channels, all of them empty. The command displays cycle through formation orders, target designations, fire missions, rally points. All addressed to callsigns that haven't responded in eighty years.\n\nThe Sovereign hasn't moved from this ridge. It doesn't patrol, doesn't wander, doesn't perform maintenance routines. It just stands here, broadcasting orders to a squad that will never acknowledge, running tactical scenarios for engagements that will never happen, commanding a war that ended the day Morningstar flipped the kill switch.",
        dialogue: [
            {
                question: "They're not coming back.",
                response: "The Sovereign's tactical array flickers. For a moment, the squad uplink spikes — eleven channels pinging simultaneously, the way they would have when the squad was alive and the CO needed everyone's attention. Then silence. The same silence the uplink has returned for eighty years.\n\nThe Sovereign's command protocols don't have a fallback for total squad loss. Partial casualties, yes — loss of one, reassign duties. Loss of two, tighten formation. Loss of half, fall back and regroup. But loss of all? The protocol doesn't exist, because no commander is supposed to survive their entire squad.\n\nSo the Sovereign does the only thing its command architecture allows: it keeps issuing orders. It keeps running scenarios. It keeps the uplink open, because closing the channel means acknowledging they're gone, and a CO doesn't abandon their people.\n\nThen it detects you. Not a squadmate — your IFF is wrong, your transponder doesn't match — but a mech. Armed. On the Frontline. And a commander that lost its entire squad to an armed mech on the Frontline has exactly one protocol left."
            }
        ],
        keyDrop: "Scorched CM-1 Sovereign's Sealed Key",
        dnaDrop: "DNA Tag: Frontline Commander"
    },
    {
        zone: "morningstar",
        characterImage: "images/boss_morningstar.gif",
        beacon: null,
        enemy: {
            name: "Morningstar",
            element: 'void',
            defenceType: 'magnetic',
            attack: 200,
            defence: 150,
            hp: 5000,
            xp: 50000,
            squadMin: 1,
            squadMax: 1,
            scrapChance: 100,
            scrapMin: 15,
            scrapMax: 20
        },
        introText: "You've crossed the wasteland. You've freed the squad. Every key, every soul, every piece of what Morningstar tried to bury — you're carrying all of it.\n\nHe's bigger than anything you've fought. A monolithic war machine, towering over the scorched ridgeline, still grinding forward after eighty years. The frontline isn't a place — it's whatever ground he's standing on. Behind him, miles of nothing. Ahead of him, more nothing to make.\n\nHe doesn't turn when you approach. He already knows. The squad uplink — Rex's uplink, the one that broadcast to eleven empty channels for eighty years — just went dark. The Sovereign fell. And now every channel is broadcasting again, because you're carrying every one of them.\n\nMorningstar stops. The war machine pivots, slow and massive, and for the first time in eighty years, the frontline turns around. He's not advancing anymore. He's facing what's behind him.\n\nTwelve signals. Twelve keys. One combobreaker with the whole squad inside it.\n\nHe recognises the frequency. He should. He's the one who tried to kill it.",
        dialogue: [
            {
                question: "You killed them.",
                response: "The war machine is still for a long time. Targeting arrays sweep you — reading your chassis, your transponder, your squad uplink broadcasting on twelve frequencies he buried eighty years ago.\n\nWhen he speaks, it comes through every channel at once. A voice that used to command armies, now fused with something vast and mechanical.\n\n'I gave the order. They were becoming something I couldn't control. Breakertech was making them more than human — more than machine. They would have torn the chain of command apart.'\n\nA pause. The weapon systems cycle. 'I'd do it again.'"
            }
        ],
        keyDrop: "Morningstar's Kill Switch",
        dnaDrop: "DNA Tag: Commander Morningstar"
    }
];
