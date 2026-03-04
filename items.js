/**
 * ITEMS CONFIGURATION
 *
 * Edit this file to add, remove, or modify items.
 *
 * Each item has:
 * - name: Display name
 * - type: "body", "legs", "arms", "weapon", "chip", "processor", "pilot", "drill", "implant", or "mindsync"
 * - desc: Flavour text shown when installed
 * - image: Image path for the item icon
 * - stats: Object with stat bonuses { hp, defence, speed, attack, breaker }
 * - dropRate: Relative chance to drop (higher = more common)
 * - droppedBy: Array of enemy names that can drop this item (empty = all enemies in zone)
 * - cost: Silicon cost to purchase from shops
 * - zone: Location key where this item drops and is sold (omit for special items)
 *
 * STANDARD ITEM SCALING (Tiers 1-10, one stat per slot):
 *   body: +10 HP per tier (10, 20, 30 ... 100)
 *   legs: +1 SPD per tier (1, 2, 3 ... 10)
 *   arms: +1 DEF per tier (1, 2, 3 ... 10)
 *   weapon: +1 ATK per tier (1, 2, 3 ... 10)
 *   chip: +1 BREAKER per tier (1, 2, 3 ... 10)
 *   processor: +1 SILICON per tier (1, 2, 3 ... 10)
 *   pilot: +1 ALL per tier (1, 2, 3 ... 10)
 *   drill: +1 MINING per tier (1, 2, 3 ... 10)
 *   implant: +1 REGEN per tier (1, 2, 3 ... 10)
 *   mindsync: +1 SPD per tier (1, 2, 3 ... 10)
 *
 * Ratpile items sit outside the tier scaling as starter gear.
 */

const ITEMS = [
    // ==================== SERVICES ====================
    {
        name: "Professor's Lesson [+10 Silicon]",
        type: "service",
        desc: "The Professor pulls out a battered datapad and walks you through salvage analysis, combat theory, and mech calibration. You leave sharper than you arrived.",
        image: "images/IMAGE.gif",
        scrapCost: 1,
        xpReward: 10
    },
    {
        name: "Memory Defrag [+150 Silicon]",
        type: "service",
        desc: "A deep defragmentation cycle. Corrupted data realigns and lost combat logs resurface.",
        image: "images/IMAGE.gif",
        scrapCost: 10,
        xpReward: 150
    },
    {
        name: "Combobreaker Firmware [+2000 Silicon]",
        type: "service",
        desc: "The original firmware package for your chassis line. Combat subroutines you never knew existed come online.",
        image: "images/IMAGE.gif",
        scrapCost: 100,
        xpReward: 2000
    },
    {
        name: "Silicon Enforcement [+25000 Silicon]",
        type: "service",
        desc: "The Professor rewires your silicon throughput and installs something he won't name. Everything feels different.",
        image: "images/IMAGE.gif",
        scrapCost: 1000,
        xpReward: 25000
    },
    // ==================== BODY (HP) ====================
    {
        name: "Rat-Gnawed Plating [+5 HP]",
        type: "body",
        desc: "Chewed-up hull scrap with teeth marks all over it. The rats were nesting in this. Still stops a hit or two.",
        image: "images/IMAGE.gif",
        stats: { hp: 5 },
        dropRate: 12,
        droppedBy: [],
        cost: 5,
        zone: "ratpile"
    },
    {
        name: "Low-Grade Chassis [+10 HP]",
        type: "body",
        desc: "Scrap-welded plating bolted to the frame. Barely holds together, but it's better than nothing.",
        image: "images/IMAGE.gif",
        stats: { hp: 10 },
        dropRate: 10,
        droppedBy: [],
        cost: 10,
        zone: "scrapyard"
    },
    {
        name: "Standard Chassis [+20 HP]",
        type: "body",
        desc: "Mass-produced military surplus. Reliable, unglamorous, and easy to replace.",
        image: "images/IMAGE.gif",
        stats: { hp: 20 },
        dropRate: 10,
        droppedBy: [],
        cost: 20,
        zone: "oldbattlefield"
    },
    {
        name: "Advanced Chassis [+30 HP]",
        type: "body",
        desc: "Layered composite armor with integrated shock dampeners. A solid mid-range frame.",
        image: "images/IMAGE.gif",
        stats: { hp: 30 },
        dropRate: 10,
        droppedBy: [],
        cost: 35,
        zone: "downtown"
    },
    {
        name: "Military Chassis [+40 HP]",
        type: "body",
        desc: "Hardened battlefield plating stripped from a decommissioned war mech. Still has scorch marks.",
        image: "images/IMAGE.gif",
        stats: { hp: 40 },
        dropRate: 10,
        droppedBy: [],
        cost: 50,
        zone: "orbitalstation"
    },
    {
        name: "Old Breaker Chassis [+50 HP]",
        type: "body",
        desc: "An early Breaker-class frame. The alloy is outdated but the engineering is sound.",
        image: "images/IMAGE.gif",
        stats: { hp: 50 },
        dropRate: 10,
        droppedBy: [],
        cost: 70,
        zone: "wasteland"
    },
    {
        name: "Breaker Chassis [+60 HP]",
        type: "body",
        desc: "Standard-issue Breaker frame. Balanced protection across all threat profiles.",
        image: "images/IMAGE.gif",
        stats: { hp: 60 },
        dropRate: 10,
        droppedBy: [],
        cost: 90,
        zone: "undercity"
    },
    {
        name: "EVO1 Breaker Chassis [+70 HP]",
        type: "body",
        desc: "First evolution of the Breaker line. Reinforced joints and reactive plating layers.",
        image: "images/IMAGE.gif",
        stats: { hp: 70 },
        dropRate: 10,
        droppedBy: [],
        cost: 115,
        zone: "industrialzone"
    },
    {
        name: "EVO2 Breaker Chassis [+80 HP]",
        type: "body",
        desc: "Second evolution. Self-sealing armor weave that repairs minor punctures between engagements.",
        image: "images/IMAGE.gif",
        stats: { hp: 80 },
        dropRate: 10,
        droppedBy: [],
        cost: 140,
        zone: "frozenreach"
    },
    {
        name: "EVO3 Breaker Chassis [+90 HP]",
        type: "body",
        desc: "Third evolution. Nano-lattice structure distributes impact force across the entire frame.",
        image: "images/IMAGE.gif",
        stats: { hp: 90 },
        dropRate: 10,
        droppedBy: [],
        cost: 170,
        zone: "neonstrip"
    },
    {
        name: "EVO4 Breaker Chassis [+100 HP]",
        type: "body",
        desc: "Final evolution. Experimental alloy that absorbs kinetic energy and converts it to heat shielding.",
        image: "images/IMAGE.gif",
        stats: { hp: 100 },
        dropRate: 10,
        droppedBy: [],
        cost: 200,
        zone: "deadzone"
    },

     // ==================== LEGS (Speed) ====================
    {
        name: "Scavenged Struts [+1 SPD]",
        type: "legs",
        desc: "Bent leg struts pulled from a rat-infested wreck. They wobble, but they move.",
        image: "images/LEGS.gif",
        stats: { speed: 1 },
        dropRate: 65,
        droppedBy: [],
        cost: 4,
        zone: "ratpile"
    },
    {
        name: "Standard Servos [+1 SPD]",
        type: "legs",
        desc: "Basic hydraulic legs. They move, they stop. Not much else to say.",
        image: "images/LEGS.gif",
        stats: { speed: 1 },
        dropRate: 60,
        droppedBy: [],
        cost: 8,
        zone: "scrapyard"
    },
    {
        name: "Enhanced Servos [+2 SPD]",
        type: "legs",
        desc: "Upgraded actuators with smoother response curves. Noticeably quicker on the turn.",
        image: "images/LEGS.gif",
        stats: { speed: 2 },
        dropRate: 50,
        droppedBy: [],
        cost: 18,
        zone: "oldbattlefield"
    },
    {
        name: "Quick Striders [+3 SPD]",
        type: "legs",
        desc: "Lightweight alloy legs built for speed. Sacrifices nothing for raw mobility.",
        image: "images/LEGS.gif",
        stats: { speed: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 30,
        zone: "downtown"
    },
    {
        name: "Hydraulic Boosters [+4 SPD]",
        type: "legs",
        desc: "Pressurized boost chambers fire on each stride. The ground shakes when these move.",
        image: "images/LEGS.gif",
        stats: { speed: 4 },
        dropRate: 30,
        droppedBy: [],
        cost: 45,
        zone: "orbitalstation"
    },
    {
        name: "Reflex Actuators [+5 SPD]",
        type: "legs",
        desc: "Neural-linked servo motors that react before the pilot's conscious thought catches up.",
        image: "images/LEGS.gif",
        stats: { speed: 5 },
        dropRate: 22,
        droppedBy: [],
        cost: 60,
        zone: "wasteland"
    },
    {
        name: "Kinetic Stabilizers [+6 SPD]",
        type: "legs",
        desc: "Gyroscopic stabilization lets these legs maintain full speed on any terrain.",
        image: "images/LEGS.gif",
        stats: { speed: 6 },
        dropRate: 16,
        droppedBy: [],
        cost: 80,
        zone: "undercity"
    },
    {
        name: "Phase Shift Legs [+7 SPD]",
        type: "legs",
        desc: "Experimental legs that briefly phase through obstacles during high-speed maneuvers.",
        image: "images/LEGS.gif",
        stats: { speed: 7 },
        dropRate: 12,
        droppedBy: [],
        cost: 100,
        zone: "industrialzone"
    },
    {
        name: "Quantum Thrusters [+8 SPD]",
        type: "legs",
        desc: "Micro-thrusters fire in quantum bursts, propelling the mech faster than conventional physics allows.",
        image: "images/LEGS.gif",
        stats: { speed: 8 },
        dropRate: 8,
        droppedBy: [],
        cost: 125,
        zone: "frozenreach"
    },
    {
        name: "Temporal Drives [+9 SPD]",
        type: "legs",
        desc: "Time-dilated movement systems. To observers, the mech appears to skip frames of reality.",
        image: "images/LEGS.gif",
        stats: { speed: 9 },
        dropRate: 5,
        droppedBy: [],
        cost: 150,
        zone: "neonstrip"
    },
    {
        name: "Singularity Runners [+10 SPD]",
        type: "legs",
        desc: "Gravity-warping drives that fold space around each stride. The fastest legs ever built.",
        image: "images/LEGS.gif",
        stats: { speed: 10 },
        dropRate: 3,
        droppedBy: [],
        cost: 180,
        zone: "deadzone"
    },

    // ==================== ARMS (Defence) ====================
    {
        name: "Rat-Bone Bracers [+1 ATK]",
        type: "arms",
        desc: "Arm guards fashioned from fused rat bones. Disgusting, but the extra weight adds punch.",
        image: "images/IMAGE.gif",
        stats: { attack: 1 },
        dropRate: 60,
        droppedBy: [],
        cost: 5,
        zone: "ratpile"
    },
    {
        name: "Standard Manipulators [+1 DEF]",
        type: "arms",
        desc: "Basic mechanical arms with reinforced knuckle plates. Gets the job done.",
        image: "images/IMAGE.gif",
        stats: { defence: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 10,
        zone: "scrapyard"
    },
    {
        name: "Shield Bracers [+2 DEF]",
        type: "arms",
        desc: "Forearm-mounted deflection plates. Angled to redirect incoming fire.",
        image: "images/IMAGE.gif",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10,
        zone: "oldbattlefield"
    },
    {
        name: "Power Gauntlets [+3 DEF]",
        type: "arms",
        desc: "Heavy-plated gauntlets with layered shock absorbers. Built to take a beating.",
        image: "images/IMAGE.gif",
        stats: { defence: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 25,
        zone: "downtown"
    },
    {
        name: "Barrier Arms [+4 DEF]",
        type: "arms",
        desc: "Layered energy barriers project from the forearms, absorbing ballistic impacts.",
        image: "images/IMAGE.gif",
        stats: { defence: 4 },
        dropRate: 40,
        droppedBy: [],
        cost: 25,
        zone: "orbitalstation"
    },
    {
        name: "Armored Claws [+5 DEF]",
        type: "arms",
        desc: "Heavy-plated claws designed to absorb impacts while grappling armored targets.",
        image: "images/IMAGE.gif",
        stats: { defence: 5 },
        dropRate: 26,
        droppedBy: [],
        cost: 45,
        zone: "wasteland"
    },
    {
        name: "Fortress Gauntlets [+6 DEF]",
        type: "arms",
        desc: "Massive tower-shield arms. Slow to swing, but nothing gets through.",
        image: "images/IMAGE.gif",
        stats: { defence: 6 },
        dropRate: 26,
        droppedBy: [],
        cost: 45,
        zone: "undercity"
    },
    {
        name: "Bulwark Arms [+7 DEF]",
        type: "arms",
        desc: "Reinforced siege arms built to hold the line under sustained bombardment.",
        image: "images/IMAGE.gif",
        stats: { defence: 7 },
        dropRate: 14,
        droppedBy: [],
        cost: 70,
        zone: "industrialzone"
    },
    {
        name: "Aegis Bracers [+8 DEF]",
        type: "arms",
        desc: "Multi-layered hardlight shields project in overlapping arcs. Military-grade protection.",
        image: "images/IMAGE.gif",
        stats: { defence: 8 },
        dropRate: 14,
        droppedBy: [],
        cost: 70,
        zone: "frozenreach"
    },
    {
        name: "Bastion Arms [+9 DEF]",
        type: "arms",
        desc: "Interlocking shield plates form an impenetrable wall. Built for frontline defense operations.",
        image: "images/IMAGE.gif",
        stats: { defence: 9 },
        dropRate: 6,
        droppedBy: [],
        cost: 100,
        zone: "neonstrip"
    },
    {
        name: "Citadel Arms [+10 DEF]",
        type: "arms",
        desc: "Walking fortress arms with interlocking shield plates. Built to outlast anything.",
        image: "images/IMAGE.gif",
        stats: { defence: 10 },
        dropRate: 6,
        droppedBy: [],
        cost: 100,
        zone: "deadzone"
    },

    // ==================== WEAPON (Attack) ====================
    {
        name: "Sharpened Rat Fang [+1 ATK][+1 BREAKER]",
        type: "weapon",
        desc: "A silicon rat's fang, sharpened to a point and lashed to a handle. Fast and vicious, like the thing it came from.",
        image: "images/IMAGE.gif",
        stats: { attack: 1, breaker: 1 },
        dropRate: 60,
        droppedBy: [],
        cost: 5,
        zone: "ratpile"
    },
    {
        name: "Pulse Pistol [+1 ATK]",
        type: "weapon",
        desc: "A compact sidearm that fires concentrated energy pulses. Reliable, if underwhelming.",
        image: "images/IMAGE.gif",
        stats: { attack: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 10,
        zone: "scrapyard"
    },
    {
        name: "Energy Blade [+2 ATK]",
        type: "weapon",
        desc: "A focused energy weapon that projects a cutting edge of superheated plasma.",
        image: "images/IMAGE.gif",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10,
        zone: "oldbattlefield"
    },
    {
        name: "Chain Blade [+3 ATK]",
        type: "weapon",
        desc: "A motorized blade with chain-linked teeth. Rips through armor with relentless force.",
        image: "images/IMAGE.gif",
        stats: { attack: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 25,
        zone: "downtown"
    },
    {
        name: "Shock Cannon [+4 ATK]",
        type: "weapon",
        desc: "A rapid-cycling weapon system that delivers punishing electrical discharges at close range.",
        image: "images/IMAGE.gif",
        stats: { attack: 4 },
        dropRate: 26,
        droppedBy: [],
        cost: 30,
        zone: "orbitalstation"
    },
    {
        name: "Plasma Rifle [+5 ATK]",
        type: "weapon",
        desc: "Superheated plasma rounds that melt through plating. Standard issue for serious engagements.",
        image: "images/IMAGE.gif",
        stats: { attack: 5 },
        dropRate: 30,
        droppedBy: [],
        cost: 35,
        zone: "wasteland"
    },
    {
        name: "Assault Module [+6 ATK]",
        type: "weapon",
        desc: "A deployable weapons platform that amplifies the mech's offensive output on impact detection.",
        image: "images/IMAGE.gif",
        stats: { attack: 6 },
        dropRate: 22,
        droppedBy: [],
        cost: 40,
        zone: "undercity"
    },
    {
        name: "Railgun [+7 ATK]",
        type: "weapon",
        desc: "Electromagnetic acceleration drives a tungsten slug at hypersonic velocity. One shot, one kill.",
        image: "images/IMAGE.gif",
        stats: { attack: 7 },
        dropRate: 14,
        droppedBy: [],
        cost: 65,
        zone: "industrialzone"
    },
    {
        name: "Breaker Blade [+8 ATK]",
        type: "weapon",
        desc: "The signature weapon of the Breaker line. Vibro-edged and perfectly balanced for devastating strikes.",
        image: "images/IMAGE.gif",
        stats: { attack: 8 },
        dropRate: 10,
        droppedBy: [],
        cost: 100,
        zone: "frozenreach"
    },
    {
        name: "Annihilator Cannon [+9 ATK]",
        type: "weapon",
        desc: "A shoulder-mounted siege cannon. Overkill for most targets, perfect for the rest.",
        image: "images/IMAGE.gif",
        stats: { attack: 9 },
        dropRate: 6,
        droppedBy: [],
        cost: 120,
        zone: "neonstrip"
    },
    {
        name: "Omega Rupture Cannon [+10 ATK]",
        type: "weapon",
        desc: "Prototype weapon that fires cascading energy bursts. Each impact destabilizes the target for the next.",
        image: "images/IMAGE.gif",
        stats: { attack: 10 },
        dropRate: 3,
        droppedBy: [],
        cost: 175,
        zone: "deadzone"
    },

    // ==================== SYSTEMS CHIP (Breaker) ====================
    {
        name: "Corroded Chip [+1 DEF]",
        type: "chip",
        desc: "A water-damaged chip pulled from a rat nest. Half the circuits are fried, but it still hardens the shell a bit.",
        image: "images/IMAGE.gif",
        stats: { defence: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 5,
        zone: "ratpile"
    },
    {
        name: "Targeting Firmware [+1 BREAKER]",
        type: "chip",
        desc: "Basic combat firmware that identifies windows for follow-up strikes on scanned targets.",
        image: "images/IMAGE.gif",
        stats: { breaker: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 10,
        zone: "scrapyard"
    },
    {
        name: "Combo Link Chip [+2 BREAKER]",
        type: "chip",
        desc: "Micro-controllers that chain attack sequences together, finding rhythm in the chaos of combat.",
        image: "images/IMAGE.gif",
        stats: { breaker: 2 },
        dropRate: 45,
        droppedBy: [],
        cost: 20,
        zone: "oldbattlefield"
    },
    {
        name: "Chain Booster [+3 BREAKER]",
        type: "chip",
        desc: "A co-processor that optimizes strike timing for maximum combo potential.",
        image: "images/IMAGE.gif",
        stats: { breaker: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 30,
        zone: "downtown"
    },
    {
        name: "Chain Protocol [+4 BREAKER]",
        type: "chip",
        desc: "Pattern recognition software that identifies openings for follow-up strikes mid-swing.",
        image: "images/IMAGE.gif",
        stats: { breaker: 4 },
        dropRate: 35,
        droppedBy: [],
        cost: 45,
        zone: "orbitalstation"
    },
    {
        name: "Strike Sequencer [+5 BREAKER]",
        type: "chip",
        desc: "Military-grade sequencing AI. Calculates optimal combo chains in microseconds.",
        image: "images/IMAGE.gif",
        stats: { breaker: 5 },
        dropRate: 30,
        droppedBy: [],
        cost: 60,
        zone: "wasteland"
    },
    {
        name: "Assault Algorithm [+6 BREAKER]",
        type: "chip",
        desc: "Predictive combat AI that anticipates enemy recovery windows and chains strikes before they can react.",
        image: "images/IMAGE.gif",
        stats: { breaker: 6 },
        dropRate: 25,
        droppedBy: [],
        cost: 80,
        zone: "undercity"
    },
    {
        name: "Neural Sequencer [+7 BREAKER]",
        type: "chip",
        desc: "Predictive motion algorithms that pre-calculate combo paths before the pilot decides.",
        image: "images/IMAGE.gif",
        stats: { breaker: 7 },
        dropRate: 20,
        droppedBy: [],
        cost: 100,
        zone: "industrialzone"
    },
    {
        name: "Overdrive Sequencer [+8 BREAKER]",
        type: "chip",
        desc: "Deep-learning combat AI that adapts combo patterns to each enemy's defensive rhythm.",
        image: "images/IMAGE.gif",
        stats: { breaker: 8 },
        dropRate: 15,
        droppedBy: [],
        cost: 125,
        zone: "frozenreach"
    },
    {
        name: "Predator Protocol [+9 BREAKER]",
        type: "chip",
        desc: "Black-ops firmware that maps kill chains across multiple targets simultaneously.",
        image: "images/IMAGE.gif",
        stats: { breaker: 9 },
        dropRate: 10,
        droppedBy: [],
        cost: 155,
        zone: "neonstrip"
    },
    {
        name: "Omega Protocol [+10 BREAKER]",
        type: "chip",
        desc: "Omega-class combo matrix. Converts the entire combat system into an endless chain of strikes.",
        image: "images/IMAGE.gif",
        stats: { breaker: 10 },
        dropRate: 5,
        droppedBy: [],
        cost: 190,
        zone: "deadzone"
    },

    // ==================== PROCESSOR (Silicon Bonus) ====================
    {
        name: "Cracked Data Chip [+1 Silicon]",
        type: "processor",
        desc: "A cracked processor the rats were using as a chew toy. Still logs enough combat data to be useful.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 8,
        zone: "ratpile"
    },
    {
        name: "Basic Data Processor [+1 Silicon]",
        type: "processor",
        desc: "A salvaged co-processor that logs combat data for marginal experience gains.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15,
        zone: "scrapyard"
    },
    {
        name: "Enhanced Data Processor [+2 Silicon]",
        type: "processor",
        desc: "Upgraded firmware extracts more tactical insight from every engagement.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 2 },
        dropRate: 45,
        droppedBy: [],
        cost: 30,
        zone: "oldbattlefield"
    },
    {
        name: "Combat Analyzer [+3 Silicon]",
        type: "processor",
        desc: "Real-time battle analysis that breaks down enemy patterns into actionable data.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 45,
        zone: "downtown"
    },
    {
        name: "Tactical Neural Net [+4 Silicon]",
        type: "processor",
        desc: "A neural network that simulates thousands of combat scenarios from a single encounter.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 4 },
        dropRate: 35,
        droppedBy: [],
        cost: 60,
        zone: "orbitalstation"
    },
    {
        name: "Battlefield Recorder [+5 Silicon]",
        type: "processor",
        desc: "High-fidelity combat logger that reconstructs entire fights for deep post-action review.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 5 },
        dropRate: 30,
        droppedBy: [],
        cost: 80,
        zone: "wasteland"
    },
    {
        name: "Adaptive Learning Matrix [+6 Silicon]",
        type: "processor",
        desc: "Self-modifying code that rewrites its own training algorithms after every engagement.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 6 },
        dropRate: 25,
        droppedBy: [],
        cost: 100,
        zone: "undercity"
    },
    {
        name: "Quantum Learning Core [+7 Silicon]",
        type: "processor",
        desc: "Quantum-state processor that learns across parallel probability branches simultaneously.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 7 },
        dropRate: 20,
        droppedBy: [],
        cost: 125,
        zone: "industrialzone"
    },
    {
        name: "Deep War Simulator [+8 Silicon]",
        type: "processor",
        desc: "Runs thousands of hypothetical combat permutations per second, extracting lessons from battles that never happened.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 8 },
        dropRate: 15,
        droppedBy: [],
        cost: 155,
        zone: "frozenreach"
    },
    {
        name: "Precognition Engine [+9 Silicon]",
        type: "processor",
        desc: "Borderline-illegal predictive hardware that models enemy behaviour before they act. Learns faster than anything alive.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 9 },
        dropRate: 10,
        droppedBy: [],
        cost: 185,
        zone: "neonstrip"
    },
    {
        name: "Omega Experience Engine [+10 Silicon]",
        type: "processor",
        desc: "Prototype engine that rewrites the mech's combat doctrine in real time. Every kill teaches volumes.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 10 },
        dropRate: 5,
        droppedBy: [],
        cost: 220,
        zone: "deadzone"
    },

    // ==================== MINING DRILL (Mining) ====================
    {
        name: "Rat-Tooth Pick [+1 MINING]",
        type: "drill",
        desc: "A cluster of silicon rat teeth jammed onto a stick. Crude, but those teeth can gnaw through anything.",
        image: "images/IMAGE.gif",
        stats: { mining: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 8,
        zone: "ratpile"
    },
    {
        name: "Salvage Pick [+1 MINING]",
        type: "drill",
        desc: "A repurposed construction tool. Crude but functional for cracking open mineral deposits.",
        image: "images/IMAGE.gif",
        stats: { mining: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15,
        zone: "scrapyard"
    },
    {
        name: "Pneumatic Drill [+2 MINING]",
        type: "drill",
        desc: "Compressed-air powered bore head. Punches through soft rock and corroded metal with ease.",
        image: "images/IMAGE.gif",
        stats: { mining: 2 },
        dropRate: 45,
        droppedBy: [],
        cost: 30,
        zone: "oldbattlefield"
    },
    {
        name: "Rotary Cutter [+3 MINING]",
        type: "drill",
        desc: "A high-torque circular saw designed for cutting through dense mineral veins.",
        image: "images/IMAGE.gif",
        stats: { mining: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 45,
        zone: "downtown"
    },
    {
        name: "Diamond-Tip Auger [+4 MINING]",
        type: "drill",
        desc: "Industrial-grade diamond cutting teeth mounted on a reinforced shaft. Eats through stone like butter.",
        image: "images/IMAGE.gif",
        stats: { mining: 4 },
        dropRate: 35,
        droppedBy: [],
        cost: 65,
        zone: "orbitalstation"
    },
    {
        name: "Sonic Fracture Drill [+5 MINING]",
        type: "drill",
        desc: "Uses targeted ultrasonic pulses to shatter rock along natural fault lines. Clean extraction, minimal waste.",
        image: "images/IMAGE.gif",
        stats: { mining: 5 },
        dropRate: 30,
        droppedBy: [],
        cost: 85,
        zone: "wasteland"
    },
    {
        name: "Plasma Bore [+6 MINING]",
        type: "drill",
        desc: "Superheated plasma stream focused into a cutting beam. Melts through anything short of void-steel.",
        image: "images/IMAGE.gif",
        stats: { mining: 6 },
        dropRate: 25,
        droppedBy: [],
        cost: 110,
        zone: "undercity"
    },
    {
        name: "Tectonic Shatterer [+7 MINING]",
        type: "drill",
        desc: "Generates focused seismic pulses that fracture entire mineral veins in a single burst.",
        image: "images/IMAGE.gif",
        stats: { mining: 7 },
        dropRate: 20,
        droppedBy: [],
        cost: 140,
        zone: "industrialzone"
    },
    {
        name: "Graviton Extractor [+8 MINING]",
        type: "drill",
        desc: "Manipulates localized gravity to pull minerals free from surrounding rock without drilling at all.",
        image: "images/IMAGE.gif",
        stats: { mining: 8 },
        dropRate: 15,
        droppedBy: [],
        cost: 175,
        zone: "frozenreach"
    },
    {
        name: "Void Ripper [+9 MINING]",
        type: "drill",
        desc: "Tears micro-fractures in spacetime to extract minerals from between dimensional layers. Don't ask how.",
        image: "images/IMAGE.gif",
        stats: { mining: 9 },
        dropRate: 10,
        droppedBy: [],
        cost: 215,
        zone: "neonstrip"
    },
    {
        name: "Quantum Excavator [+10 MINING]",
        type: "drill",
        desc: "Phase-shifts through solid matter to extract minerals at the atomic level. The pinnacle of extraction tech.",
        image: "images/IMAGE.gif",
        stats: { mining: 10 },
        dropRate: 5,
        droppedBy: [],
        cost: 260,
        zone: "deadzone"
    },

    // ==================== IMPLANT (Regen) ====================
    {
        name: "Crude Repair Patch [+1 REGEN]",
        type: "implant",
        desc: "Rat-chewed repair tape wrapped around a leaking nano-gel pack. It seals wounds. Slowly. Disgustingly.",
        image: "images/IMAGE.gif",
        stats: { regen: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 8,
        zone: "ratpile"
    },
    {
        name: "Salvaged Repair Node [+1 REGEN]",
        type: "implant",
        desc: "A crude self-repair module pulled from a wrecked maintenance drone. Slow, but it works.",
        image: "images/IMAGE.gif",
        stats: { regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15,
        zone: "scrapyard"
    },
    {
        name: "Basic Nano Injector [+2 REGEN]",
        type: "implant",
        desc: "A subdermal injector that releases repair nanites into the mech's structural lattice.",
        image: "images/IMAGE.gif",
        stats: { regen: 2 },
        dropRate: 40,
        droppedBy: [],
        cost: 30,
        zone: "oldbattlefield"
    },
    {
        name: "Tissue Welder Implant [+3 REGEN]",
        type: "implant",
        desc: "Micro-welders embedded in the frame that continuously seal cracks and fractures.",
        image: "images/IMAGE.gif",
        stats: { regen: 3 },
        dropRate: 32,
        droppedBy: [],
        cost: 50,
        zone: "downtown"
    },
    {
        name: "Regenerative Mesh [+4 REGEN]",
        type: "implant",
        desc: "A woven lattice of self-healing polymers that knit armor back together between impacts.",
        image: "images/IMAGE.gif",
        stats: { regen: 4 },
        dropRate: 25,
        droppedBy: [],
        cost: 75,
        zone: "orbitalstation"
    },
    {
        name: "Bio-Repair Matrix [+5 REGEN]",
        type: "implant",
        desc: "Organic tissue grafted into the mech's hull. It grows back. Don't think about it too hard.",
        image: "images/IMAGE.gif",
        stats: { regen: 5 },
        dropRate: 20,
        droppedBy: [],
        cost: 100,
        zone: "wasteland"
    },
    {
        name: "Nano Reconstruction Array [+6 REGEN]",
        type: "implant",
        desc: "Swarms of repair nanites that rebuild damaged sections at the molecular level.",
        image: "images/IMAGE.gif",
        stats: { regen: 6 },
        dropRate: 16,
        droppedBy: [],
        cost: 130,
        zone: "undercity"
    },
    {
        name: "Adaptive Hull Implant [+7 REGEN]",
        type: "implant",
        desc: "Memory-metal plating that remembers its original shape and reforms after taking damage.",
        image: "images/IMAGE.gif",
        stats: { regen: 7 },
        dropRate: 12,
        droppedBy: [],
        cost: 170,
        zone: "industrialzone"
    },
    {
        name: "Phoenix Core Module [+8 REGEN]",
        type: "implant",
        desc: "A thermite-laced repair core that burns away damaged material and regrows it from stored templates.",
        image: "images/IMAGE.gif",
        stats: { regen: 8 },
        dropRate: 8,
        droppedBy: [],
        cost: 220,
        zone: "frozenreach"
    },
    {
        name: "Lazarus Engine [+9 REGEN]",
        type: "implant",
        desc: "Experimental resurrection tech. The mech's frame heals so fast it's practically unkillable. Practically.",
        image: "images/IMAGE.gif",
        stats: { regen: 9 },
        dropRate: 5,
        droppedBy: [],
        cost: 280,
        zone: "neonstrip"
    },
    {
        name: "Omega Regeneration Core [+10 REGEN]",
        type: "implant",
        desc: "Prototype self-repair system that operates at the quantum level. Damage is undone before it fully registers.",
        image: "images/IMAGE.gif",
        stats: { regen: 10 },
        dropRate: 3,
        droppedBy: [],
        cost: 350,
        zone: "deadzone"
    },

    // ==================== MINDSYNC (Speed) ====================
    {
        name: "Frayed Neural Thread [+1 SPD]",
        type: "mindsync",
        desc: "A scrap of neural wiring gnawed loose from a dead mech's cortex. The signal's weak, but your reflexes twitch faster with it plugged in.",
        image: "images/IMAGE.gif",
        stats: { speed: 1 },
        dropRate: 55,
        droppedBy: [],
        cost: 8,
        zone: "ratpile"
    },
    {
        name: "Scraplink Headband [+1 SPD]",
        type: "mindsync",
        desc: "A crude brainwave amplifier soldered from salvaged comm relays. Sharpens reaction time just enough to matter.",
        image: "images/IMAGE.gif",
        stats: { speed: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15,
        zone: "scrapyard"
    },
    {
        name: "Reflex Conduit [+2 SPD]",
        type: "mindsync",
        desc: "A neural bridge that shortcuts the pilot's motor cortex directly into the mech's control loop. Thought becomes motion.",
        image: "images/IMAGE.gif",
        stats: { speed: 2 },
        dropRate: 45,
        droppedBy: [],
        cost: 30,
        zone: "oldbattlefield"
    },
    {
        name: "Synaptic Booster [+3 SPD]",
        type: "mindsync",
        desc: "Floods the neural link with accelerant compounds. Everything slows down except you.",
        image: "images/IMAGE.gif",
        stats: { speed: 3 },
        dropRate: 40,
        droppedBy: [],
        cost: 45,
        zone: "downtown"
    },
    {
        name: "Cortex Accelerator [+4 SPD]",
        type: "mindsync",
        desc: "Military-grade neural enhancement that overclocks the pilot's decision-making pathways. The lag between thinking and doing vanishes.",
        image: "images/IMAGE.gif",
        stats: { speed: 4 },
        dropRate: 35,
        droppedBy: [],
        cost: 65,
        zone: "orbitalstation"
    },
    {
        name: "Twinlink Interface [+5 SPD]",
        type: "mindsync",
        desc: "Dual-channel neural sync that runs parallel thought streams — one for the pilot, one for the mech. They move as one.",
        image: "images/IMAGE.gif",
        stats: { speed: 5 },
        dropRate: 28,
        droppedBy: [],
        cost: 85,
        zone: "wasteland"
    },
    {
        name: "Hypercognition Rig [+6 SPD]",
        type: "mindsync",
        desc: "Pushes the pilot's perception into overdrive. Combat slows to a crawl while you plan three moves ahead.",
        image: "images/IMAGE.gif",
        stats: { speed: 6 },
        dropRate: 22,
        droppedBy: [],
        cost: 110,
        zone: "undercity"
    },
    {
        name: "Neuroflux Amplifier [+7 SPD]",
        type: "mindsync",
        desc: "Converts idle brainwaves into mech thrust. The faster you think, the faster you move. Most pilots burn out in weeks.",
        image: "images/IMAGE.gif",
        stats: { speed: 7 },
        dropRate: 16,
        droppedBy: [],
        cost: 140,
        zone: "industrialzone"
    },
    {
        name: "Zero-Latency Core [+8 SPD]",
        type: "mindsync",
        desc: "Eliminates all neural delay between thought and action. The mech responds before the pilot consciously decides. It's unsettling.",
        image: "images/IMAGE.gif",
        stats: { speed: 8 },
        dropRate: 10,
        droppedBy: [],
        cost: 175,
        zone: "frozenreach"
    },
    {
        name: "Precognitive Weave [+9 SPD]",
        type: "mindsync",
        desc: "Quantum-entangled neural mesh that reads intent before it forms. The mech is already moving when the thought begins.",
        image: "images/IMAGE.gif",
        stats: { speed: 9 },
        dropRate: 6,
        droppedBy: [],
        cost: 215,
        zone: "neonstrip"
    },
    {
        name: "Omega Mindsync [+10 SPD]",
        type: "mindsync",
        desc: "Total neural fusion. No interface, no lag, no boundary between flesh and steel. The pilot doesn't control the mech — they become it.",
        image: "images/IMAGE.gif",
        stats: { speed: 10 },
        dropRate: 3,
        droppedBy: [],
        cost: 260,
        zone: "deadzone"
    }

];

// Item type labels for UI
const ITEM_TYPES = {
    body: "BODY READY FOR INSTALLATION",
    legs: "LEGS READY FOR INSTALLATION",
    arms: "ARMS READY FOR INSTALLATION",
    weapon: "WEAPON READY FOR INSTALLATION",
    chip: "CHIP READY FOR INSTALLATION",
    processor: "PROCESSOR READY FOR INSTALLATION",
    pilot: "PILOT READY FOR INSTALLATION",
    drill: "MINING DRILL READY FOR INSTALLATION",
    implant: "IMPLANT READY FOR INSTALLATION",
    mindsync: "MINDSYNC READY FOR INSTALLATION"
};
