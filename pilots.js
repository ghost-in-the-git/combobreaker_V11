/**
 * ALL PILOT ITEMS
 *
 * Guild mercenary pilots — 30 total, 3 per tier.
 * T1 (+1 ALL) through T10 (+10 ALL).
 * Merged into ITEMS at load time.
 *
 * BROKER_MISSIONS — mission maps sold as the 4th item per tier.
 * Each unlocks a destination in the corresponding zone.
 * The player must destroy 10 squads at the destination to clear the mission.
 */

const BROKER_TIERS = [
    { tier: 1, label: "T1 Pilots", stat: 1 },
    { tier: 2, label: "T2 Pilots", stat: 2 },
    { tier: 3, label: "T3 Pilots", stat: 3 },
    { tier: 4, label: "T4 Pilots", stat: 4 },
    { tier: 5, label: "T5 Pilots", stat: 5 },
    { tier: 6, label: "T6 Pilots", stat: 6 },
    { tier: 7, label: "T7 Pilots", stat: 7 },
    { tier: 8, label: "T8 Pilots", stat: 8 },
    { tier: 9, label: "T9 Pilots", stat: 9 },
    { tier: 10, label: "T10 Pilots", stat: 10 }
];

const BROKER_MISSIONS = [
    {
        tier: 1,
        zone: "scrapyard",
        zoneName: "Scrap Fields",
        encounterName: "Scout Factory",
        mapItem: "Scrap Fields: Scout Factory",
        clearanceItem: "Scout Factory Clearance",
        missionTitle: "Destroy the Scout Factory",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "Coordinates to a hidden scout factory buried under the Scrap Fields. Automated assembly lines churn out light recon units around the clock. The Broker wants the production line shut down — permanently.",
        arrivalText: "Your mech touches down outside a rusted hangar. Through the gash in the wall, you can see rows of half-assembled scout frames on conveyor belts. Sensors are already pinging incoming hostiles.",
        completionText: "The last scout frame crumples. The assembly line grinds to a halt, sparks raining from severed power conduits. Mission complete.",
        cost: 500
    },
    {
        tier: 2,
        zone: "oldbattlefield",
        zoneName: "Old Battlefield",
        encounterName: "Munitions Bunker",
        mapItem: "Old Battlefield: Munitions Bunker",
        clearanceItem: "Munitions Bunker Clearance",
        missionTitle: "Destroy the Munitions Bunker",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "Intel on a buried munitions bunker deep in the Old Battlefield. Automated defense protocols are still active, and scavenger crews have been arming themselves from the stockpile. Time to shut it down.",
        arrivalText: "The bunker entrance is half-collapsed, blast doors wedged open by decades of debris. Your HUD lights up with movement signatures below. They know you're here.",
        completionText: "The bunker falls silent. Ammo racks lie shattered across the floor. Nothing left worth fighting over. Mission complete.",
        cost: 750
    },
    {
        tier: 3,
        zone: "downtown",
        zoneName: "Downtown",
        encounterName: "Signal Tower",
        mapItem: "Downtown: Signal Tower",
        clearanceItem: "Signal Tower Clearance",
        missionTitle: "Destroy the Signal Tower",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "A rogue signal tower in Downtown is broadcasting encrypted rally commands to hostile units across the district. The Broker wants the tower offline and its guardians scraped.",
        arrivalText: "The tower looms above the skyline, its antenna array pulsing with crimson light. Armed patrols circle the perimeter. Your comms crackle with intercepted chatter — they're calling in reinforcements.",
        completionText: "The signal tower's antenna array sparks and goes dark. The broadcast dies mid-transmission. The streets are quiet again. Mission complete.",
        cost: 1000
    },
    {
        tier: 4,
        zone: "orbitalstation",
        zoneName: "Orbital Station",
        encounterName: "Drone Foundry",
        mapItem: "Orbital Station: Drone Foundry",
        clearanceItem: "Drone Foundry Clearance",
        missionTitle: "Destroy the Drone Foundry",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "A decommissioned module on the Orbital Station has been repurposed as a drone foundry. Swarms of attack drones are being assembled and deployed from the bay. The Broker wants the foundry gutted.",
        arrivalText: "The airlock cycles open into a cavernous hangar. Drone chassis hang from ceiling rails like metal cocoons. The foundry hums with power — and the first wave of defenders is already airborne.",
        completionText: "The foundry's fabrication arms hang limp, drone chassis scattered across the bay floor. Production has ceased. Mission complete.",
        cost: 1400
    },
    {
        tier: 5,
        zone: "wasteland",
        zoneName: "Wasteland",
        encounterName: "Fuel Depot",
        mapItem: "Wasteland: Fuel Depot",
        clearanceItem: "Fuel Depot Clearance",
        missionTitle: "Destroy the Fuel Depot",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "An irradiated fuel depot in the Wasteland is supplying hostile convoys across the region. Cut off the supply and the patrols thin out. The Broker says it's worth the radiation exposure.",
        arrivalText: "Massive fuel tanks rise from the cracked earth like metal blisters. Geiger counters spike as you approach. Guard patrols emerge from behind the storage silos, weapons hot.",
        completionText: "The fuel depot burns. Black smoke rises into the irradiated sky as the last defenders fall. Supply lines severed. Mission complete.",
        cost: 1800
    },
    {
        tier: 6,
        zone: "undercity",
        zoneName: "Undercity",
        encounterName: "Nerve Centre",
        mapItem: "Undercity: Nerve Centre",
        clearanceItem: "Nerve Centre Clearance",
        missionTitle: "Destroy the Nerve Centre",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "A tunnel command hub in the Undercity is coordinating hostile activity across the pipe network. The Broker wants the nerve centre collapsed and its operators buried.",
        arrivalText: "The tunnel opens into a vaulted chamber lined with flickering screens and tangled cables. A central console pulses with data. The guards stationed here don't look surprised to see you.",
        completionText: "The screens go black one by one. The command hub is silent, its operators scattered. The pipe network is blind. Mission complete.",
        cost: 2200
    },
    {
        tier: 7,
        zone: "industrialzone",
        zoneName: "Industrial Zone",
        encounterName: "Weapons Lab",
        mapItem: "Industrial Zone: Weapons Lab",
        clearanceItem: "Weapons Lab Clearance",
        missionTitle: "Destroy the Weapons Lab",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "An R&D weapons lab hidden in the Industrial Zone is developing prototype weapon systems. The Broker doesn't care who's funding it — she wants it levelled before the prototypes go live.",
        arrivalText: "The lab is disguised as a defunct refinery. Inside, weapon prototypes line reinforced racks. Test-fire scorch marks cover every wall. Security teams are already moving to intercept.",
        completionText: "The weapons lab is gutted. Prototype schematics burn in the wreckage. Whatever they were building, it dies here. Mission complete.",
        cost: 2700
    },
    {
        tier: 8,
        zone: "frozenreach",
        zoneName: "Frozen Reach",
        encounterName: "Cryo Vault",
        mapItem: "Frozen Reach: Cryo Vault",
        clearanceItem: "Cryo Vault Clearance",
        missionTitle: "Destroy the Cryo Vault",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "A cryo vault buried in the Frozen Reach is storing high-value military assets in deep freeze. Someone's been thawing them out and putting them back into service. The Broker wants the vault cracked open and emptied.",
        arrivalText: "Ice crunches under your mech's weight as the vault doors grind open. Rows of frozen chassis line the walls, frost crystallising on their armour. The defrosting cycle has already begun on the nearest row.",
        completionText: "The cryo vault's cooling systems fail. Meltwater pools across the floor as the last defenders fall. Nothing left to thaw. Mission complete.",
        cost: 3200
    },
    {
        tier: 9,
        zone: "neonstrip",
        zoneName: "Neon Strip",
        encounterName: "Syndicate Arena",
        mapItem: "Neon Strip: Syndicate Arena",
        clearanceItem: "Syndicate Arena Clearance",
        missionTitle: "Destroy the Syndicate Arena",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "A syndicate-run gladiator arena on the Neon Strip is pitting captured mechs against each other for profit. The Broker has a personal stake in shutting this one down. She didn't elaborate.",
        arrivalText: "The arena's neon sign flickers overhead: 'IRON & BLOOD'. Inside, the pit is stained with hydraulic fluid and scorched metal. The house champions are already warming up.",
        completionText: "The arena lights go out. The last champion drops. The crowd — what's left of it — scatters into the neon-lit streets. The show is over. Mission complete.",
        cost: 3700
    },
    {
        tier: 10,
        zone: "deadzone",
        zoneName: "Dead Zone",
        encounterName: "Reactor Core",
        mapItem: "Dead Zone: Reactor Core",
        clearanceItem: "Reactor Core Clearance",
        missionTitle: "Destroy the Reactor Core",
        missionObjective: "Clear 10 squads",
        killsRequired: 10,
        desc: "A corrupted reactor core in the Dead Zone is powering an entire network of hostile units. The radiation is lethal, the defenses are brutal, and the Broker says this is the hardest job on her books. She's not wrong.",
        arrivalText: "The reactor hums with a sickly green glow. Warning klaxons blare across the facility. Every system in your mech screams proximity alert as the heaviest resistance you've ever faced closes in.",
        completionText: "The reactor core destabilises and goes dark. The hum that powered a thousand war machines fades to silence. The Dead Zone just got a little quieter. Mission complete.",
        cost: 4500
    }
];

const ALL_PILOTS = [

    // ==================== TIER 1 — +1 ALL ====================
    {
        name: "Washout [+1 ALL]",
        type: "pilot",
        desc: "Failed the academy entrance exam twice. Learned to fly in a junkyard. The sync is rough, but at least the seat's not empty.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild",
        tier: 1
    },
    {
        name: "Drifter [+1 ALL]",
        type: "pilot",
        desc: "No home port, no allegiance. Sleeps in whatever cockpit will have him. The sync barely registers, but he shows up on time.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild",
        tier: 1
    },
    {
        name: "Scrub [+1 ALL]",
        type: "pilot",
        desc: "Got kicked out of a civilian hauler crew for sleeping on shift. Somehow still alive. That counts for something in this line of work.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, breaker: 1, mining: 1, regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 300,
        zone: "guild",
        tier: 1
    },

    // ==================== TIER 2 — +2 ALL ====================
    {
        name: "Scab Jockey [+2 ALL]",
        type: "pilot",
        desc: "Picks up work nobody else wants. Smells like coolant and bad decisions. Surprisingly hard to kill.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild",
        tier: 2
    },
    {
        name: "Grease Rat [+2 ALL]",
        type: "pilot",
        desc: "Grew up under a mech chassis. Knows more about neural links than half the engineers who build them. Cheap and reliable.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild",
        tier: 2
    },
    {
        name: "Runt [+2 ALL]",
        type: "pilot",
        desc: "Smallest pilot on the roster. Fits into cockpits that would crush anyone else. What she lacks in presence she makes up for in sync stability.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, breaker: 2, mining: 2, regen: 2 },
        dropRate: 47,
        droppedBy: [],
        cost: 450,
        zone: "guild",
        tier: 2
    },

    // ==================== TIER 3 — +3 ALL ====================
    {
        name: "Hired Gun [+3 ALL]",
        type: "pilot",
        desc: "A freelancer with a short resume and a shorter attention span. Syncs fast, fights sloppy, charges less than the rest.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild",
        tier: 3
    },
    {
        name: "Patchwork [+3 ALL]",
        type: "pilot",
        desc: "Half his neural implants are aftermarket. The other half are held in with solder and hope. Somehow the sync holds together.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild",
        tier: 3
    },
    {
        name: "Dustrunner [+3 ALL]",
        type: "pilot",
        desc: "Made a name running convoys through the wastelands. Quick reflexes, steady hands, and a habit of talking to the mech like it can hear her.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, breaker: 3, mining: 3, regen: 3 },
        dropRate: 45,
        droppedBy: [],
        cost: 650,
        zone: "guild",
        tier: 3
    },

    // ==================== TIER 4 — +4 ALL ====================
    {
        name: "Contract Runner [+4 ALL]",
        type: "pilot",
        desc: "Works on retainer for three different outfits. Doesn't talk about any of them. Clean sync, no questions asked.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild",
        tier: 4
    },
    {
        name: "Switchblade [+4 ALL]",
        type: "pilot",
        desc: "Former pit fighter who transitioned to mech piloting. Treats every engagement like a cage match. The sync runs hot but never breaks.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild",
        tier: 4
    },
    {
        name: "Longhaul [+4 ALL]",
        type: "pilot",
        desc: "Spent years running deep-route cargo through contested space. Never lost a shipment. Calm under fire, steady on the link.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, breaker: 4, mining: 4, regen: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 900,
        zone: "guild",
        tier: 4
    },

    // ==================== TIER 5 — +5 ALL ====================
    {
        name: "Licensed Mercenary [+5 ALL]",
        type: "pilot",
        desc: "Guild-certified. Bonded and insured. Has a laminated card and everything. The sync calibration alone is worth the price.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild",
        tier: 5
    },
    {
        name: "Hardline [+5 ALL]",
        type: "pilot",
        desc: "Ex-military. Dishonourably discharged for insubordination. Still fights like she's got a squad behind her. The sync is textbook-perfect.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild",
        tier: 5
    },
    {
        name: "Nomad [+5 ALL]",
        type: "pilot",
        desc: "No fixed address, no loyalty, no hesitation. Piloted frames on four continents and two orbital rings. The sync adapts to anything.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, breaker: 5, mining: 5, regen: 5 },
        dropRate: 39,
        droppedBy: [],
        cost: 1200,
        zone: "guild",
        tier: 5
    },

    // ==================== TIER 6 — +6 ALL ====================
    {
        name: "Bonded Operative [+6 ALL]",
        type: "pilot",
        desc: "Neural sync specialist. Interfaces with damaged rigs that would fry a normal operator. Charges by the hour and worth every second.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild",
        tier: 6
    },
    {
        name: "Coldsnap [+6 ALL]",
        type: "pilot",
        desc: "Never raises her voice. Never flinches. Biometrics flatline during combat like she's asleep. The mech moves with eerie precision.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild",
        tier: 6
    },
    {
        name: "Burnout [+6 ALL]",
        type: "pilot",
        desc: "Fried three neural rigs before the Guild would take him. Now he's dialled in. The sync runs ragged but the output is undeniable.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 6, attack: 6, speed: 6, defence: 6, breaker: 6, mining: 6, regen: 6 },
        dropRate: 36,
        droppedBy: [],
        cost: 1550,
        zone: "guild",
        tier: 6
    },

    // ==================== TIER 7 — +7 ALL ====================
    {
        name: "Syndicate Ace [+7 ALL]",
        type: "pilot",
        desc: "Former corporate strike team. Burned every bridge on the way out and took the classified sync protocols with her. Your mech will feel like it's thinking ahead of you.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild",
        tier: 7
    },
    {
        name: "Voidrunner [+7 ALL]",
        type: "pilot",
        desc: "Flew deep-space salvage runs alone for six years. Came back different. Doesn't blink enough. Syncs with rigs that haven't been calibrated in decades like it's nothing.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild",
        tier: 7
    },
    {
        name: "Kingpin [+7 ALL]",
        type: "pilot",
        desc: "Ran an underground fight ring for years. Every pilot in his stable answered to him. Now he answers to no one. The sync carries an authority the mech can feel.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, breaker: 7, mining: 7, regen: 7 },
        dropRate: 33,
        droppedBy: [],
        cost: 1950,
        zone: "guild",
        tier: 7
    },

    // ==================== TIER 8 — +8 ALL ====================
    {
        name: "Black List Pilot [+8 ALL]",
        type: "pilot",
        desc: "No name. No dossier. The Broker keeps this one in a locked drawer. Neural sync rate is military black-project grade. Whatever this pilot did before, it wasn't legal.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild",
        tier: 8
    },
    {
        name: "Ironclad [+8 ALL]",
        type: "pilot",
        desc: "Took a direct hit to the cockpit and kept fighting for forty minutes before anyone noticed the breach. Half her spine is titanium now. She says the mech feels lighter than she does.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild",
        tier: 8
    },
    {
        name: "Warghost [+8 ALL]",
        type: "pilot",
        desc: "Survivor of the Ashfall Campaign. Every pilot in her squadron died. She kept fighting for three days alone. The debrief is still classified.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 8, attack: 8, speed: 8, defence: 8, breaker: 8, mining: 8, regen: 8 },
        dropRate: 30,
        droppedBy: [],
        cost: 2400,
        zone: "guild",
        tier: 8
    },

    // ==================== TIER 9 — +9 ALL ====================
    {
        name: "Razor [+9 ALL]",
        type: "pilot",
        desc: "Cuts corners, cuts throats, cuts response time in half. The Guild doesn't ask where she trained. The results speak loud enough.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild",
        tier: 9
    },
    {
        name: "Phantom Circuit [+9 ALL]",
        type: "pilot",
        desc: "Shows up on no scanner. Military records list him as deceased in three jurisdictions. The neural interface reads his brainwaves as static, but the mech moves like it's alive.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild",
        tier: 9
    },
    {
        name: "Terminus [+9 ALL]",
        type: "pilot",
        desc: "Last assignment before retirement — every time. Has been 'retiring' for eleven years. The sync rate climbs every time like the frame is begging her to stay.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 9, attack: 9, speed: 9, defence: 9, breaker: 9, mining: 9, regen: 9 },
        dropRate: 27,
        droppedBy: [],
        cost: 2900,
        zone: "guild",
        tier: 9
    },

    // ==================== TIER 10 — +10 ALL ====================
    {
        name: "Deadbolt [+10 ALL]",
        type: "pilot",
        desc: "Once locked in, he doesn't eject. Rode a burning frame into a warzone and walked out carrying the reactor. The sync doesn't just hold — it refuses to let go.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild",
        tier: 10
    },
    {
        name: "Null Frequency [+10 ALL]",
        type: "pilot",
        desc: "Communicates through the neural link and nothing else. No voice. No gestures. Plugs in, fights, unplugs, leaves. The mech runs at specs that shouldn't be possible without hardware mods.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild",
        tier: 10
    },
    {
        name: "Archon [+10 ALL]",
        type: "pilot",
        desc: "Designed sync protocols that three governments now use as standard. Left the lab, stole a rig, and never came back. The neural link doesn't just connect — it overwrites.",
        image: "images/PILOT_ITEM.gif",
        stats: { hp: 10, attack: 10, speed: 10, defence: 10, breaker: 10, mining: 10, regen: 10 },
        dropRate: 24,
        droppedBy: [],
        cost: 3450,
        zone: "guild",
        tier: 10
    }
];
