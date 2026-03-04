/**
 * STORY ITEMS
 *
 * Collectible items tied to story events, exploration, and lore.
 * These are NOT equipment, minerals, or consumables.
 *
 * Each item has:
 * - name: Display name
 * - desc: Flavour text / lore description
 * - category: "log", "key", "dna", "debris", "scrap", "map"
 * - image: Path to item image
 *
 * Categories:
 * - "log"    : System Logs (battle reports, experiments, world events)
 * - "key"    : Keys (access cards, fobs, unlock devices)
 * - "dna"    : DNA Tags (biological samples, genetic markers)
 * - "debris" : Mech Debris (random mech parts and wreckage)
 * - "scrap"  : Scrap (salvageable junk and miscellaneous finds)
 * - "map"    : Maps (zone navigation charts and location data)
 */

const STORY_ITEMS = [
    // Starter Items
    {
        name: "Mysterious Note",
        desc: "A crumpled note found in your cockpit on day one. The handwriting is yours, but you don't remember writing it.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Unknown Sealed Key",
        desc: "A silicon key fused into your chassis before you woke. It hums with a frequency you almost recognise — like a voice calling your name from inside the circuitry. The Mapmaker planted it in you. It's why you're alive.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Unreadable DNA Tag",
        desc: "A smudged genetic tag clipped to your pilot jacket. The data is too degraded to scan.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "Destroyed Mech Heart",
        desc: "The fused core reactor of a mech you once piloted. It's dead now, but it's warm when you hold it.",
        category: "debris",
        image: "images/IMAGE.gif"
    },

    // System Logs
    {
        name: "Battle Report: Sector 7 Collapse",
        desc: "A fragmented log detailing the fall of Sector 7. The defending unit was overwhelmed in under three minutes.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Experiment Log: Project Lazarus",
        desc: "Notes on a failed attempt to reboot a destroyed mech's AI core. The core rebooted — then refused to comply.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Distress Signal Transcript",
        desc: "A decoded transmission from an orbital station. The last line reads: 'They're inside the walls.'",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Incident Report: Dead Zone Breach",
        desc: "An official report on the first incursion into the Dead Zone. Casualty rate: 97%. Classification: BURIED.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Maintenance Log: Unit 00-4417",
        desc: "Routine service record for a mech that was decommissioned. The final entry just says 'IT MOVED'.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Encrypted Comms Fragment",
        desc: "A partial intercept between two unknown callsigns. They reference something called 'The Fold'.",
        category: "log",
        image: "images/IMAGE.gif"
    },
    {
        name: "Blackbox Audio Log",
        desc: "Recovered from wreckage. The audio is mostly static, but there are screams near the end.",
        category: "log",
        image: "images/IMAGE.gif"
    },

    // Sealed Keys (dropped by bosses — squad members trapped inside corrupted mechs)
    {
        name: "Rusted KV-8 Grinder's Sealed Key",
        desc: "Ripped from the wreckage of the Rusted KV-8 Grinder. The silicon core pulses with a faint warmth — something inside is still processing. Still remembering. The key smells like hot metal and engine grease.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Shelled MK-IV Bulwark's Sealed Key",
        desc: "Pulled from the Shelled MK-IV Bulwark's shattered hull. The key is heavier than it should be, as if the weight of every round it absorbed settled into the silicon. A defensive instinct hums inside, waiting to deploy.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Shadowed S-12 Wraith's Sealed Key",
        desc: "Extracted from the Shadowed S-12 Wraith's stealth chassis. The key flickers between visible and not — like it's trying to disappear. Someone in there learned how to hide.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Depressurized DR-7 Prospector's Sealed Key",
        desc: "Cut from the Depressurized DR-7 Prospector's reactor housing. The key vibrates at a low frequency, like a drill finding purchase on stone. Whoever's inside knew their way around rock.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Irradiated AX-3 Ravager's Sealed Key",
        desc: "Torn from the Irradiated AX-3 Ravager's jaws. The key is scarred and overheated, like it was fighting to get out. The soul inside doesn't know how to stop swinging.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Corroded SC-1 Flicker's Sealed Key",
        desc: "Severed from the Corroded SC-1 Flicker's neural cluster. The key twitches in your grip — fast, reactive, like fingers reaching for a wire that isn't there. The fastest hands in the unit, still moving.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Slag-Coated HG-6 Devastator's Sealed Key",
        desc: "Pried from the Slag-Coated HG-6 Devastator's molten core housing. The key radiates heat and sheer mass. Whoever's locked inside this silicon believed in overwhelming force.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen MD-5 Lifeline's Sealed Key",
        desc: "Chipped from the Frozen MD-5 Lifeline's cryo-armour. The key is cold to the touch and pulses with a slow, steady rhythm — like a heartbeat being kept alive on life support. A medic's patience.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Gilded EN-9 Tinker's Sealed Key",
        desc: "Won from the Gilded EN-9 Tinker's vault core. The key cycles through faint patterns of light — probability calculations running on loop. The soul inside is still counting the odds.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Blighted EW-0 Phantom's Sealed Key",
        desc: "Retrieved from the Blighted EW-0 Phantom's twisted remains. The key emits no signal, no heat, no sound — a perfect void. Whoever's inside specialised in making things disappear.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scorched CM-1 Sovereign's Sealed Key",
        desc: "Taken from the Scorched CM-1 Sovereign's command array. The key broadcasts on every frequency simultaneously — a commander's instinct to coordinate, to amplify, even from inside a silicon prison.",
        category: "key",
        image: "images/IMAGE.gif"
    },
    {
        name: "Mapmaker's Sealed Key",
        desc: "Found on the Mapmaker's body in the Dead Zone. He didn't make it — but he made sure you did. The key is warm, like it's been waiting. His nav systems charted one last route: the one that led to you.",
        category: "key",
        image: "images/IMAGE.gif"
    },

    // DNA Tags
    {
        name: "DNA Tag: Unknown Pilot",
        desc: "A blood-smeared tag with a corrupted genetic profile. Species classification: PENDING.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Mech-Hybrid Sample",
        desc: "Biological tissue fused with synthetic fibre. The cell structure is still actively dividing.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Contaminated Sample",
        desc: "A sealed vial of irradiated blood from the Dead Zone. The cells glow faintly under UV light.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Cloned Signature",
        desc: "Two identical genetic profiles from two different bodies. Recovered six months apart.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Non-Human Marker",
        desc: "A genetic sequence that doesn't match any known terrestrial organism. Origin: CLASSIFIED.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Decayed Officer",
        desc: "Pulled from a rank insignia. The DNA is degraded but the military encryption is still intact.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Synthetic Override",
        desc: "Artificial genetic code designed to fool biometric locks. Someone built this from scratch.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Fused Pilot",
        desc: "Biological and mechanical DNA intertwined at the molecular level. The pilot didn't eject in time.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Cryo-Preserved Sample",
        desc: "A frozen blood sample that predates the collapse. Still viable after all these years.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Warlord Residue",
        desc: "Trace genetic material scraped from a command throne. Multiple donors. None voluntary.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Frontline Commander",
        desc: "Extracted from a command chassis cockpit. The genetic markers show signs of extreme combat stimulant exposure.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "DNA Tag: Commander Morningstar",
        desc: "Whatever was human in Morningstar stopped being human a long time ago. The DNA is degraded beyond recognition — eighty years of breakertech integration, combat stimulants, and something else the sequencer can't identify. The tag reads MORNINGSTAR and nothing else. It's enough.",
        category: "dna",
        image: "images/IMAGE.gif"
    },
    {
        name: "Morningstar's Kill Switch",
        desc: "The hardcoded override that killed the squad. A small device — barely the size of a fist — buried in the core of a monolithic war machine. One signal, twelve mechs, twelve pilots cut down by their own machines. Morningstar's final order, preserved in silicon. It's inert now. The squad is free. The war is over.",
        category: "key",
        image: "images/IMAGE.gif"
    },

    // Mech Debris
    {
        name: "Twisted Servo Arm",
        desc: "A mangled hydraulic arm ripped from a fallen mech. Still twitches when you touch the wiring.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Shattered Cockpit Glass",
        desc: "Reinforced glass from a mech canopy. The cracks form a spiderweb pattern around a single impact point.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Severed Mech Hand",
        desc: "A massive articulated hand, cleanly cut at the wrist. The fingers are still locked in a fist.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Burnt Circuit Board",
        desc: "Charred beyond recognition. Whatever data it held is gone, but the gold traces might be worth something.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Cracked Sensor Lens",
        desc: "A targeting optic shattered by impact. Light refracts through it in strange patterns.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dented Dog Tags",
        desc: "Military-issue pilot tags. The name has been scratched off. Only the serial number remains: 00-4417.",
        category: "debris",
        image: "images/IMAGE.gif"
    },
    {
        name: "Fragment of Unknown Alloy",
        desc: "A shard of metal that doesn't match anything in the materials database. Cold to the touch. Always.",
        category: "debris",
        image: "images/IMAGE.gif"
    },

    // Decrypted Breaker Keys (from The Decrypter — sealed keys consumed, pilot souls released)
    {
        name: "Your Combobreaker Key",
        desc: "Your own soul, decrypted. The Mapmaker planted it in you before the end, and now you know why you're awake. Combobreaker — chance to deal double damage. The game is named after you.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Chunk's Steelbreaker Key",
        desc: "Riley 'Chunk' Kowalski. Scrap Refiner. The KV-8 Grinder's pilot — built like a salvage crane, could strip a mech to parts blindfolded. Steelbreaker — chance to gain double scrap. Chunk's salvage instinct, hardwired into your systems.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Sarge's Shieldbreaker Key",
        desc: "Marcus 'Sarge' Oduya. Squad Defender. The MK-IV Bulwark's pilot — kept the squad alive longer than anyone had a right to expect. Shieldbreaker — chance to double defence at the start of a round. Sarge's wall goes up.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Ghost's Visionbreaker Key",
        desc: "Yuki 'Ghost' Tanaka. Infiltrator. The S-12 Wraith's pilot — never seen entering or leaving, just already there. Visionbreaker — chance to disappear and completely avoid an attack. Ghost's vanishing act.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Bolt's Stonebreaker Key",
        desc: "Petra 'Bolt' Lindgren. Miner. The DR-7 Prospector's pilot — could crack open a rock face and tell you what's inside by the sound. Stonebreaker — chance to add mining stat to asteroid stability. Bolt reinforcing the rock.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Fang's Strikebreaker Key",
        desc: "Diego 'Fang' Reyes. Assault. The AX-3 Ravager's pilot — first one in, last one standing, preferred it that way. Strikebreaker — chance to ignore enemy defence stat entirely. Fang hits like the armour isn't there.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wire's Speedbreaker Key",
        desc: "Jess 'Wire' Nakamura. Scout. The SC-1 Flicker's pilot — fastest hands in the unit, rewired a mech mid-combat once on a dare. Speedbreaker — chance to attack twice. She saved the Mapmaker. She saved you. She became the Herald.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Anvil's Crushbreaker Key",
        desc: "Dmitri 'Anvil' Volkov. Heavy Gunner. The HG-6 Devastator's pilot — if it had armour, he treated it as a suggestion. Crushbreaker — chance for damage to hit the entire enemy group. One swing, everything feels it.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frost's Painbreaker Key",
        desc: "Elise 'Frost' Calloway. Medic. The MD-5 Lifeline's pilot — kept a cool head while putting people back together under fire. Painbreaker — chance to regain HP equal to regen stat. Frost patching you up between blows.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Ace's Powerbreaker Key",
        desc: "Tariq 'Ace' Hassan. Mechanic. The EN-9 Tinker's pilot — could fix anything, engines, guns, morale. Powerbreaker — chance to double silicon gain. Ace squeezing more out of every wreck.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Null's Soulbreaker Key",
        desc: "Zara 'Null' Okonkwo. Specialist. The EW-0 Phantom's pilot — specialised in making problems disappear, quietly. Soulbreaker — chance to trigger a parry attack when hit. You get hit, you hit back.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Rex's Warbreaker Key",
        desc: "Kane 'Rex' Hargrove. Commander. The CM-1 Sovereign's pilot — the CO who made the calls nobody else wanted to make. Warbreaker — chance for Combobreaker and Speedbreaker to escalate to 4X. Rex amplifying the squad.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },
    {
        name: "Mapmaker's Skybreaker Key",
        desc: "Oren 'Mapmaker' Vasquez. Navigator. The NV-X Pathfinder's pilot — charted every route the squad ever ran and planted your key before the end. Skybreaker — doubles all breaker proc chances. The Mapmaker's final gift. Not a proc — a passive multiplier on everything else.",
        category: "powerup",
        image: "images/IMAGE.gif"
    },

    // Location Maps (encounter discoveries — granted on first engage)
    {
        name: "Home: The Professor",
        desc: "The Professor's workshop coordinates, hardwired into your nav system. He's always there.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "The Ratpile: The Mapmaker",
        desc: "Coordinates to a hooded cartographer's position in the Ratpile tunnels. He never moves.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: The Mapmaker",
        desc: "Coordinates to the Mapmaker's outpost in the Scrap Fields. He watches from between the wreckage.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: Slag",
        desc: "A marked route to Slag's makeshift crucible in the Scrap Fields. He bolted the thing right to his mech.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: The Mapmaker",
        desc: "Coordinates to the Mapmaker's foxhole on the Old Battlefield. He sells maps from a rusted bunker.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Crucible",
        desc: "Directions to Crucible's field forge, built inside a bombed-out tank hull between shell craters.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: The Mapmaker",
        desc: "An address scrawled on synth-paper. The Mapmaker operates from a back-alley kiosk Downtown.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Nyx",
        desc: "GPS lock on Nyx's unlicensed smelter, hidden behind a dumpster in a Downtown back alley.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: The Mapmaker",
        desc: "Docking bay coordinates for the Mapmaker's berth on the Orbital Station.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Zero",
        desc: "Deck coordinates for Zero's magnetically-contained zero-g smelting bay on the station.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: The Mapmaker",
        desc: "A beacon frequency for the Mapmaker's camp in the irradiated Wasteland.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Cinder",
        desc: "Coordinates to Cinder's rad-shielded smelter rig out in the bleached Wasteland.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: The Mapmaker",
        desc: "A tunnel junction number where the Mapmaker deals charts by lantern light.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Dreg",
        desc: "Pipe junction coordinates for Dreg's forge, jury-rigged into a drainage pipe in the Undercity.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: The Mapmaker",
        desc: "A factory bay number where the Mapmaker has set up shop between idle machines.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Anvil",
        desc: "Assembly line coordinates for Anvil's repurposed industrial smelter in the Industrial Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: The Mapmaker",
        desc: "Thermal coordinates for the Mapmaker's heated outpost on the Frozen Reach ice shelf.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Thaw",
        desc: "Geothermal vent coordinates where Thaw runs her forge on the Frozen Reach ice shelf.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: The Mapmaker",
        desc: "A back-room address on the Neon Strip. The Mapmaker deals from behind a beaded curtain.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Glint",
        desc: "VIP coordinates for Glint's chrome-plated private smelting lounge on the Neon Strip.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: The Mapmaker",
        desc: "Coordinates to where you found the Mapmaker's body in the Dead Zone. He didn't make it.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Ash",
        desc: "Radiation-shielded coordinates for Ash's lead-wrapped forge deep in the Dead Zone.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Scrap Yard — Common Encounter Locations
    {
        name: "Scrap Fields: Mech Junker",
        desc: "GPS lock on a Junker vessel tethered to a rust-eaten gantry in the Scrap Fields. They never move far.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: Scrap Dealer",
        desc: "Coordinates to a Scrap Dealer's permanent berth among the wreckage piles. Their trade signal runs day and night.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: Field Mechanic",
        desc: "A marked position next to a decommissioned mech where a field mechanic has set up shop on a greasy tarp.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: Derelict Vending Array",
        desc: "Power signature of an ancient vending array still running in the Scrap Fields. The buttons are worn smooth.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Old Battlefield — Common Encounter Locations
    {
        name: "Old Battlefield: Salvage Auction Pod",
        desc: "Orbital coordinates for a drifting auction pod that circles the Old Battlefield. Bidding is automated.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Corporate Supply Cache",
        desc: "Beacon frequency for a corporate resupply buoy anchored above the trenches. Still honoring contracts.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Pilgrim Parts Caravan",
        desc: "Route data for a pilgrim caravan that loops through the Old Battlefield. They trade fair and move slow.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Experimental R&D Vendor",
        desc: "Landing coordinates for a research craft running field tests on the Old Battlefield. Waivers required.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Downtown — Common Encounter Locations
    {
        name: "Downtown: Black Market Trader",
        desc: "Encrypted channel frequency for a black market vessel that haunts Downtown's shadows. No names exchanged.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Smuggler's Docking Bay",
        desc: "Hidden dock ring coordinates in the Downtown district. The smugglers keep irregular hours but always have stock.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Scrap Dealer",
        desc: "Alley coordinates for a Scrap Dealer who operates from a cargo ship wedged between Downtown towers.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Neon Bazaar Kiosk",
        desc: "Street address for a Bazaar kiosk in the Downtown strip. The synthetic shopkeeper never closes.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Orbital Station — Common Encounter Locations
    {
        name: "Orbital Station: Station Quartermaster",
        desc: "Supply bay number for the station quartermaster. Military surplus at standard rates, no haggling.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Zero-G Peddler",
        desc: "Hull clamp coordinates for a peddler's craft magnetically attached to the station exterior. Weightless bargains.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Docking Ring Vendor",
        desc: "Kiosk terminal ID at the station docking ring. Automated inventory, verified permits only.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Void Smuggler",
        desc: "Scrambled transponder frequency for a blacked-out shuttle parked in the station's shadow. Discreet transactions.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Wasteland — Common Encounter Locations
    {
        name: "Wasteland: Nomad Trader",
        desc: "Dune ridge coordinates where a nomad convoy camps between trade runs. They flash beacons for friendlies.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Rad-Shielded Caravan",
        desc: "Formation point for a lead-lined hauler convoy in the Wasteland. Geiger counters tick, but the parts are clean.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Scavenger Camp",
        desc: "Position beneath a wrecked dropship where scavengers have set up a permanent camp. New salvage daily.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Buried Supply Cache",
        desc: "Nav marker for a pre-war supply cache buried in the Wasteland sand. Your access code is saved.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Undercity — Common Encounter Locations
    {
        name: "Undercity: Tunnel Fixer",
        desc: "Tunnel junction number for a fixer's workshop carved into the Undercity wall. Neon signs mark the entrance.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Pipe Market Stall",
        desc: "Junction coordinates for a cluster of makeshift stalls in the pipe network. Echoes carry the haggling.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Rogue Maintenance Drone",
        desc: "Patrol route marker for a reprogrammed maintenance drone in the Undercity. It beeps when it has stock.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Shadow Broker",
        desc: "Hidden door coordinates in the Undercity tunnel wall. The broker deals in silence. Don't linger.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Industrial Zone — Common Encounter Locations
    {
        name: "Industrial Zone: Factory Surplus Outlet",
        desc: "Loading dock number for a factory outlet in the Industrial Zone. The foreman always has overstock.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Union Supply Depot",
        desc: "Depot coordinates between the smokestacks where the workers' union trades parts to allies.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Automated Vending Rig",
        desc: "Route schedule for a mobile vending rig on the factory floor. It plays a jingle when it's nearby.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Shift Supervisor's Stash",
        desc: "Storage unit coordinates near the line. The shift supervisor keeps off-book inventory for trusted buyers.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Frozen Reach — Common Encounter Locations
    {
        name: "Frozen Reach: Outpost Trader",
        desc: "Heated outpost coordinates on the Frozen Reach snowfield. Warm lights visible from a kilometre out.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Ice Road Hauler",
        desc: "Ridge coordinates where a massive tracked hauler parks between coast runs. Engine never stops.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Research Station Surplus",
        desc: "Coordinates for an abandoned research station on the ice. The supply terminal still has power — barely.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Glacier Prospector",
        desc: "Drill rig coordinates atop a glacier shelf in the Frozen Reach. Pre-war hardware frozen in the ice.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Neon Strip — Common Encounter Locations
    {
        name: "Neon Strip: Back-Alley Dealer",
        desc: "Alley coordinates behind a flickering holographic ad on the Neon Strip. The dealer keeps odd hours.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Casino Prize Counter",
        desc: "Casino floor address on the Neon Strip. The prize counter has mech parts between the stuffed animals.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Syndicate Fence",
        desc: "Secure channel frequency for a syndicate contact on the Neon Strip. Pre-loaded and encrypted.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: High-Roller Lounge",
        desc: "VIP lounge coordinates on the Neon Strip. Premium parts displayed on velvet. Credits talk.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Dead Zone — Common Encounter Locations
    {
        name: "Dead Zone: Hazmat Trader",
        desc: "Perimeter coordinates for a sealed hazmat vehicle in the Dead Zone. The trader scrubs everything. Mostly.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Decontamination Drone",
        desc: "Patrol route for a decontamination drone in the Dead Zone. Cargo bay restocked after each sweep.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Desperate Scavenger",
        desc: "Position behind a crumbling wall in the Dead Zone. A lone scavenger who never seems to leave.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Sealed Bunker Terminal",
        desc: "Bunker hatch coordinates in the Dead Zone. Emergency terminal still online. Integrity dropping.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Maps
    {
        name: "Map: The Ratpile",
        desc: "A crude sketch of tunnel networks beneath the scrapyard. Rat nests are circled in red ink.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 0
    },
    {
        name: "Map: Scrap Fields",
        desc: "A salvager's chart marking safe paths through the wreckage. Some routes have been crossed out.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 20
    },
    {
        name: "Map: Old Battlefield",
        desc: "A faded military topographic map. Minefields and kill zones are marked in deteriorating ink.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 25
    },
    {
        name: "Map: Downtown",
        desc: "A street-level map of the urban core. Gang territories are colour-coded. Most overlap.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 30
    },
    {
        name: "Map: The Forge",
        desc: "Directions to a hidden workshop scrawled on heat-resistant foil. The ink smells like molten iron.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: Mech Graveyard",
        desc: "A scratched datapad listing mech chop-shop coordinates. The last entry reads: 'NO REFUNDS.'",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: The Decrypter",
        desc: "A signal frequency etched into a scrap of shielded foil. The source is underground, heavily encrypted.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: The Mod Shop",
        desc: "Coordinates to a stripped-down workshop on the edge of the sector. Someone scrawled 'MODS' on the back in marker.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 75
    },
    {
        name: "Map: Orbital Station",
        desc: "A schematic of the station's deck layout. Several sections are labelled DEPRESSURISED.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 40
    },
    {
        name: "Map: Wasteland",
        desc: "A radiation heatmap of the badlands. The safe corridors shift daily. This one is dated last week.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 50
    },
    {
        name: "Map: Undercity",
        desc: "A hand-drawn tunnel map on synthetic paper. Annotations warn of collapse zones and ambush points.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 65
    },
    {
        name: "Map: Industrial Zone",
        desc: "A factory floor plan with conveyor routes and power grid overlays. Someone marked the blind spots.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 80
    },
    {
        name: "Map: The Guild",
        desc: "A sealed envelope containing a wax-stamped invitation and a hand-drawn route through the deep tunnels. The address is written in code only the Undercity born can read.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 90
    },
    {
        name: "Map: Frozen Reach",
        desc: "A thermal survey of the arctic zone. Heat signatures cluster around geothermal vents.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Map: Neon Strip",
        desc: "A nightlife district guide doubling as a tactical map. Back alleys and escape routes are highlighted.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 125
    },
    {
        name: "Map: Dead Zone",
        desc: "A contamination chart of the killing fields. The safe path is a single line through a sea of red.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 160
    },
    {
        name: "Map: Asteroid Belt",
        desc: "A navigation chart plotting orbital paths through the belt. Mining coordinates are encoded.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 200
    },
    {
        name: "Map: Frontline",
        desc: "A military operations chart pulled from the Mapmaker's body. Troop positions, patrol routes, kill corridors. He died getting this.",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 200
    },
    {
        name: "Map: Morningstar's Destruction",
        desc: "The Professor's hand shook when he drew this. A single route past the frontline to Morningstar's position — the monolithic war machine that killed the squad eighty years ago. 'You've got all of them now,' he said. 'Every key. Every soul. Go finish it.'",
        category: "map",
        image: "images/IMAGE.gif",
        cost: 0,
        requires: [
            "Your Combobreaker Key",
            "Chunk's Steelbreaker Key",
            "Sarge's Shieldbreaker Key",
            "Ghost's Visionbreaker Key",
            "Bolt's Stonebreaker Key",
            "Fang's Strikebreaker Key",
            "Wire's Speedbreaker Key",
            "Anvil's Crushbreaker Key",
            "Frost's Painbreaker Key",
            "Ace's Powerbreaker Key",
            "Null's Soulbreaker Key",
            "Rex's Warbreaker Key",
            "Mapmaker's Skybreaker Key"
        ]
    },
    // Beacons (purchased from The Herald — unlocks boss encounter in that zone)
    {
        name: "Beacon: Scrap Fields",
        desc: "A pulsing signal emitter tuned to a frequency only the strongest respond to. Something in the Scrap Fields will hear it.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 50
    },
    {
        name: "Beacon: Old Battlefield",
        desc: "A battered military transponder rewired to broadcast a challenge. Whatever stalks No Man's Land will come.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 75
    },
    {
        name: "Beacon: Downtown",
        desc: "A corporate override beacon. When activated, it broadcasts your position on every channel Downtown monitors.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 100
    },
    {
        name: "Beacon: Orbital Station",
        desc: "A station-frequency distress beacon modified to attract rather than repel. The station's guardian will respond.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 130
    },
    {
        name: "Beacon: Wasteland",
        desc: "A seismic thumper that sends vibrations deep into the irradiated sand. Something down there is listening.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 170
    },
    {
        name: "Beacon: Undercity",
        desc: "A network probe that floods the tunnel frequencies with noise. The Overlord will not ignore the intrusion.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 220
    },
    {
        name: "Beacon: Industrial Zone",
        desc: "A factory override chip that triggers every alarm on the floor simultaneously. The foreman always responds to alarms.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 280
    },
    {
        name: "Beacon: Frozen Reach",
        desc: "A thermal charge that melts through permafrost. The heat signature will wake what sleeps beneath the ice.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 350
    },
    {
        name: "Beacon: Neon Strip",
        desc: "A high-roller chip encoded with an impossible debt. The House always collects.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 440
    },
    {
        name: "Beacon: Dead Zone",
        desc: "A corrupted data pulse that mimics living code. In the Dead Zone, that's enough to draw attention.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 550
    },
    {
        name: "Beacon: Frontline",
        desc: "A stolen military IFF tag set to 'priority target'. Every chassis on the Frontline will converge on your position.",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 700
    },
    {
        name: "Reaper's Contract: The Trenchworks",
        desc: "A forward combat contract marking a network of reinforced trenches dug into the kill corridor floor. Something has been fortifying them for decades — layered armour plating, automated turret nests, overlapping fields of fire. Morningstar's targeting data marked this sector as 'cleared' eighty years ago. The Reaper's overlay shows sixty-plus active hostiles dug in and waiting. 'Clear the Trenchworks,' he says. 'Then we can move.'",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 400
    },
    {
        name: "Reaper's Contract: Firebase Harrow",
        desc: "Coordinates to a firebase built into the husk of a downed capital ship halfway up the corridor. Long-range artillery platforms still cycle through firing solutions, shelling positions that Morningstar's maps say are friendly. They're not. The Reaper watched three patrols walk into the barrage before he stopped sending them. 'Knock out Firebase Harrow and the corridor opens up. Morningstar never even looked at it.'",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 500
    },
    {
        name: "Reaper's Contract: The Iron Veil",
        desc: "A wall of wreckage stretching across the corridor — mechs, vehicles, scaffolding — welded together into a barricade three storeys high. Behind it, a staging ground. Enemies mass, regroup, and push forward every few days. Morningstar's orders were to go around it. The Reaper's orders are simpler: go through it. 'Break the Iron Veil and they lose their staging ground. Everything behind it falls apart.'",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 600
    },
    {
        name: "Reaper's Contract: Signal Point",
        desc: "A relay tower at the far end of the kill corridor, broadcasting on a frequency that coordinates every hostile unit on the frontline. Formation data, target priorities, reinforcement schedules — all of it flows through Signal Point. Morningstar knew about the tower. His objective list said 'monitor, do not engage.' The Reaper's contract says otherwise. 'Destroy Signal Point and they go deaf. No coordination. No reinforcements. That's when we finish the war.'",
        category: "key",
        image: "images/IMAGE.gif",
        cost: 700
    },

    // Herald location maps (encounter discoveries)
    {
        name: "Scrap Fields: The Herald",
        desc: "Coordinates to a cloaked figure broadcasting on a dead frequency in the Scrap Fields. She knows what lurks here.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: The Herald",
        desc: "Position of a hooded messenger perched atop a burnt-out tank on the Old Battlefield. She watches the horizon.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: The Herald",
        desc: "A rooftop address Downtown where the Herald operates from a jury-rigged antenna array. She's always transmitting.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: The Herald",
        desc: "Docking bay coordinates for the Herald's blacked-out shuttle on the Orbital Station. No running lights.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: The Herald",
        desc: "A beacon frequency for the Herald's shielded outpost in the Wasteland. The signal cuts through the radiation.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: The Herald",
        desc: "Tunnel coordinates where the Herald sits cross-legged beside a flickering terminal in the Undercity darkness.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: The Herald",
        desc: "A catwalk position high above the factory floor where the Herald watches the machines. She never blinks.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: The Herald",
        desc: "Thermal coordinates for the Herald's ice cave on the Frozen Reach. Warm air leaks from the entrance.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: The Herald",
        desc: "A back-room frequency on the Neon Strip. The Herald deals from behind a wall of static screens.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: The Herald",
        desc: "Coordinates to a sealed bunker in the Dead Zone where the Herald waits in hazmat gear. She's been expecting you.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frontline: The Herald",
        desc: "Foxhole coordinates on the Frontline where the Herald crouches behind reinforced steel. She has what you need.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frontline: The Reaper",
        desc: "Crater coordinates at the edge of the kill corridor where the Reaper holds a forward position. A targeting overlay and a standing contract.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Asteroid Belt - discovered mining locations
    {
        name: "Asteroid Belt: Aetherite Asteroid",
        desc: "Logged coordinates to an Aetherite-rich asteroid. Shallow deposits, stable structure.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Duskquartz Asteroid",
        desc: "Logged coordinates to a Duskquartz asteroid. Faint violet shimmer visible on approach.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Gloomstone Asteroid",
        desc: "Logged coordinates to a Gloomstone asteroid. Dense rock with moderate depth deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Jetspinel Asteroid",
        desc: "Logged coordinates to a Jetspinel asteroid. Dark crystalline veins run deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Nightpyre Asteroid",
        desc: "Logged coordinates to a Nightpyre asteroid. Faint thermal readings from within.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Prismalune Asteroid",
        desc: "Logged coordinates to a Prismalune asteroid. Refracts starlight across its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Riftmarble Asteroid",
        desc: "Logged coordinates to a Riftmarble asteroid. Fracture lines suggest unstable geology.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Vortexium Asteroid",
        desc: "Logged coordinates to a Vortexium asteroid. Gravitational distortions detected nearby.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Xanthryx Asteroid",
        desc: "Logged coordinates to a Xanthryx asteroid. Amber-hued deposits deep beneath the crust.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Zephyrsalt Asteroid",
        desc: "Logged coordinates to a Zephyrsalt asteroid. Crystalline dust vents from surface fissures.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Thorncrystal Asteroid",
        desc: "Logged coordinates to a Thorncrystal asteroid. Jagged spires protrude from the surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Archive Shard Asteroid",
        desc: "Logged coordinates to an Archive Shard asteroid. Ancient data-encoded mineral buried impossibly deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Asteroid Belt: Strata-Null Asteroid",
        desc: "Logged coordinates to a Strata-Null asteroid. Readings are erratic. Extreme depth required.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Scrap Yard - discovered mining locations
    {
        name: "Scrap Fields: Aetherite Asteroid",
        desc: "Logged coordinates to an Aetherite asteroid drifting near the Scrap Fields. Shallow deposits, easy extraction.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: Bronzewisp Asteroid",
        desc: "Logged coordinates to a Bronzewisp asteroid orbiting the Scrap Fields. Faint metallic shimmer on approach.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Scrap Fields: Cindergem Asteroid",
        desc: "Logged coordinates to a Cindergem asteroid near the Scrap Fields. Warm to the touch, shallow veins.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Old Battlefield - discovered mining locations
    {
        name: "Old Battlefield: Duskquartz Asteroid",
        desc: "Logged coordinates to a Duskquartz asteroid above the Old Battlefield. Violet shimmer visible from No Man's Land.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Emberlith Asteroid",
        desc: "Logged coordinates to an Emberlith asteroid near the Old Battlefield. Smouldering veins run through its core.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Frostveil Asteroid",
        desc: "Logged coordinates to a Frostveil asteroid drifting over the Old Battlefield. Ice crystals coat its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Downtown - discovered mining locations
    {
        name: "Downtown: Gloomstone Asteroid",
        desc: "Logged coordinates to a Gloomstone asteroid lurking above the Downtown skyline. Dense and dark.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Hexsilica Asteroid",
        desc: "Logged coordinates to a Hexsilica asteroid near Downtown. Geometric crystal patterns line the surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Iridionite Asteroid",
        desc: "Logged coordinates to an Iridionite asteroid above the Downtown district. Rainbow-sheened mineral deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Orbital Station - discovered mining locations
    {
        name: "Orbital Station: Jetspinel Asteroid",
        desc: "Logged coordinates to a Jetspinel asteroid in the station's orbital debris field. Dark crystalline veins run deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Kryptoglass Asteroid",
        desc: "Logged coordinates to a Kryptoglass asteroid near the Orbital Station. Translucent surface hides deep deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Lumenore Asteroid",
        desc: "Logged coordinates to a Lumenore asteroid orbiting the station. Faint bioluminescence pulses from within.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Wasteland - discovered mining locations
    {
        name: "Wasteland: Moonshardite Asteroid",
        desc: "Logged coordinates to a Moonshardite asteroid above the Wasteland. Pale fragments orbit its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Nightpyre Asteroid",
        desc: "Logged coordinates to a Nightpyre asteroid drifting over the badlands. Faint thermal readings from within.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Obsidryl Asteroid",
        desc: "Logged coordinates to an Obsidryl asteroid near the Wasteland. Obsidian-black surface absorbs all light.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Undercity - discovered mining locations
    {
        name: "Undercity: Prismalune Asteroid",
        desc: "Logged coordinates to a Prismalune asteroid detected from the Undercity depths. Refracts starlight across its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Quellium Asteroid",
        desc: "Logged coordinates to a Quellium asteroid above the Undercity. Liquid mineral seeps from surface cracks.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Riftmarble Asteroid",
        desc: "Logged coordinates to a Riftmarble asteroid near the Undercity. Fracture lines suggest unstable geology.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Industrial Zone - discovered mining locations
    {
        name: "Industrial Zone: Starvitrine Asteroid",
        desc: "Logged coordinates to a Starvitrine asteroid near the Industrial Zone. Glassy surface reflects factory lights.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Thorncrystal Asteroid",
        desc: "Logged coordinates to a Thorncrystal asteroid above the factory district. Jagged spires protrude from its surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Umbracite Asteroid",
        desc: "Logged coordinates to an Umbracite asteroid drifting over the Industrial Zone. Shadow-dark mineral deposits.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Frozen Reach - discovered mining locations
    {
        name: "Frozen Reach: Vortexium Asteroid",
        desc: "Logged coordinates to a Vortexium asteroid above the Frozen Reach. Gravitational distortions detected nearby.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Wyrmstone Asteroid",
        desc: "Logged coordinates to a Wyrmstone asteroid in the Frozen Reach ice field. Serpentine veins coil through its mass.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Xanthryx Asteroid",
        desc: "Logged coordinates to a Xanthryx asteroid near the Frozen Reach. Amber-hued deposits deep beneath the crust.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Neon Strip - discovered mining locations
    {
        name: "Neon Strip: Yonderite Asteroid",
        desc: "Logged coordinates to a Yonderite asteroid above the Neon Strip. Emits a faint hum on approach.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Zephyrsalt Asteroid",
        desc: "Logged coordinates to a Zephyrsalt asteroid near the Neon Strip. Crystalline dust vents from surface fissures.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Isotope Lace Asteroid",
        desc: "Logged coordinates to an Isotope Lace asteroid drifting above the Neon Strip. Radioactive lattice patterns glow faintly.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Dead Zone - discovered mining locations
    {
        name: "Dead Zone: Archive Shard Asteroid",
        desc: "Logged coordinates to an Archive Shard asteroid in the Dead Zone. Ancient data-encoded mineral buried impossibly deep.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Strata-Null Asteroid",
        desc: "Logged coordinates to a Strata-Null asteroid above the Dead Zone. Readings are erratic. Extreme depth required.",
        category: "location",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Compound 33 Asteroid",
        desc: "Logged coordinates to a Compound 33 asteroid in the Dead Zone. Unstable isotopes pulse beneath the surface.",
        category: "location",
        image: "images/IMAGE.gif"
    },

    // Broker Mission Maps — purchased from The Broker, unlock mission destinations
    {
        name: "Scrap Fields: Scout Factory",
        desc: "Coordinates to a hidden scout factory buried under the Scrap Fields. Automated assembly lines churn out light recon units. The Broker wants them shut down.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Old Battlefield: Munitions Bunker",
        desc: "Intel on a buried munitions bunker deep in the Old Battlefield. Automated defense protocols are still active. Time to shut it down.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Downtown: Signal Tower",
        desc: "A rogue signal tower in Downtown is broadcasting encrypted rally commands to hostile units. The Broker wants the tower offline.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Orbital Station: Drone Foundry",
        desc: "A decommissioned module repurposed as a drone foundry. Swarms of attack drones are being assembled and deployed. The Broker wants it gutted.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Wasteland: Fuel Depot",
        desc: "An irradiated fuel depot supplying hostile convoys across the Wasteland. Cut off the supply and the patrols thin out.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Undercity: Nerve Centre",
        desc: "A tunnel command hub coordinating hostile activity across the Undercity pipe network. The Broker wants it collapsed.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Industrial Zone: Weapons Lab",
        desc: "An R&D weapons lab hidden in the Industrial Zone developing prototype weapon systems. The Broker wants it levelled.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Frozen Reach: Cryo Vault",
        desc: "A cryo vault storing high-value military assets in deep freeze. Someone's been thawing them out. The Broker wants the vault cracked.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Neon Strip: Syndicate Arena",
        desc: "A syndicate-run gladiator arena pitting captured mechs against each other. The Broker has a personal stake in shutting this one down.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },
    {
        name: "Dead Zone: Reactor Core",
        desc: "A corrupted reactor core powering an entire network of hostile units. The radiation is lethal and the defenses are brutal. The Broker's hardest job.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    },

    // Broker Mission Clearances — awarded on mission completion, proof for The Broker
    {
        name: "Scout Factory Clearance",
        desc: "Confirmed kill report from the Scrap Fields scout factory. Assembly lines destroyed, production halted. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Munitions Bunker Clearance",
        desc: "Demolition confirmation from the Old Battlefield munitions bunker. Ammo racks shattered, defenses neutralised. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Signal Tower Clearance",
        desc: "Signal kill confirmation from the Downtown tower. Antenna array destroyed, broadcast silenced. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Drone Foundry Clearance",
        desc: "Scrap report from the Orbital Station drone foundry. Fabrication arms disabled, drone production ceased. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Fuel Depot Clearance",
        desc: "Burn confirmation from the Wasteland fuel depot. Supply lines severed, tanks destroyed. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Nerve Centre Clearance",
        desc: "Shutdown report from the Undercity nerve centre. Command hub offline, pipe network blind. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Weapons Lab Clearance",
        desc: "Destruction confirmation from the Industrial Zone weapons lab. Prototypes burned, research lost. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Cryo Vault Clearance",
        desc: "Thaw report from the Frozen Reach cryo vault. Cooling systems failed, assets neutralised. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Syndicate Arena Clearance",
        desc: "Victory confirmation from the Neon Strip syndicate arena. Champions defeated, arena shut down. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },
    {
        name: "Reactor Core Clearance",
        desc: "Meltdown report from the Dead Zone reactor core. Power grid collapsed, hostile network dark. The Broker will want to see this.",
        category: "mission_clearance",
        image: "images/IMAGE.gif"
    },

    // Mod Shop Location Maps
    {
        name: "The Mod Shop: The Modder",
        desc: "Bay number for The Modder's workshop. Scrawled on a circuit board in permanent marker.",
        category: "locationmap",
        image: "images/IMAGE.gif"
    }
];
