/**
 * THE FORGER - CRAFTABLE EQUIPMENT (Generator System)
 *
 * Forger items use a blind-forge system:
 *   - Shop shows generic previews: "Duskquartz Weapon" (no stats revealed)
 *   - On purchase, the real item is generated with random hybrid stats
 *   - Player receives: "Duskquartz Blade of the Bulwark [+4 ATK][+2 DEF]"
 *
 * Each generated item gets:
 *   - Primary stat: 2 × tier value (double the standard item for that slot)
 *   - Secondary stat: +tier in a randomly chosen stat (from 8 types)
 *
 * HP scales at 10× everywhere (primary body = 20×tier, secondary HP on any slot = 10×tier).
 * Pilots are NOT forged — they live in pilots.js.
 *
 * FORGER_ITEMS is a runtime registry — starts empty, populated as items are forged.
 * Persisted via save/load so name-based lookups continue to work.
 */

// Mineral groupings by tier (order matters: position determines slot types)
const FORGER_TIERS = [
    { tier: 1, zone: "Scrapyard", minerals: ["Aetherite", "Bronzewisp", "Cindergem"] },
    { tier: 2, zone: "Old Battlefield", minerals: ["Duskquartz", "Emberlith", "Frostveil"] },
    { tier: 3, zone: "Downtown", minerals: ["Gloomstone", "Hexsilica", "Iridionite"] },
    { tier: 4, zone: "Orbital Station", minerals: ["Jetspinel", "Kryptoglass", "Lumenore"] },
    { tier: 5, zone: "Wasteland", minerals: ["Moonshardite", "Nightpyre", "Obsidryl"] },
    { tier: 6, zone: "Undercity", minerals: ["Prismalune", "Quellium", "Riftmarble"] },
    { tier: 7, zone: "Industrial Zone", minerals: ["Starvitrine", "Thorncrystal", "Umbracite"] },
    { tier: 8, zone: "Frozen Reach", minerals: ["Vortexium", "Wyrmstone", "Xanthryx"] },
    { tier: 9, zone: "Neon Strip", minerals: ["Yonderite", "Zephyrsalt", "Isotope Lace"] },
    { tier: 10, zone: "Dead Zone", minerals: ["Archive Shard", "Strata-Null", "Compound 33"] }
];

// Installation types assigned to each mineral position within a tier
const FORGER_SLOT_GROUPS = [
    ["body", "legs", "arms"],
    ["weapon", "chip", "processor"],
    ["implant", "drill", "mindsync"]
];

// Runtime registry of forged items (for name-based lookups after save/load)
// Populated when items are forged, restored from save data on load
const FORGER_ITEMS = [];

// Primary stat key for each slot type
const FORGER_PRIMARY_STATS = {
    body: "hp",
    legs: "speed",
    arms: "defence",
    weapon: "attack",
    chip: "breaker",
    processor: "xpBonus",
    drill: "mining",
    implant: "regen",
    mindsync: "speed"
};

// Base item word for each slot type (used in naming)
const FORGER_SLOT_WORDS = {
    body: "Plating",
    legs: "Treads",
    arms: "Gauntlets",
    weapon: "Blade",
    chip: "Circuit",
    processor: "Core",
    implant: "Implant",
    drill: "Excavator",
    mindsync: "Cortex"
};

// The 8 secondary stat types (excluding ALL) with naming suffixes
const FORGER_SECONDARY_STATS = [
    { key: "hp",      suffix: "of Fortitude",    label: "HP" },
    { key: "attack",  suffix: "of Striking",     label: "ATK" },
    { key: "defence", suffix: "of the Bulwark",  label: "DEF" },
    { key: "speed",   suffix: "of Swiftness",    label: "SPD" },
    { key: "breaker", suffix: "of the Chain",    label: "BREAKER" },
    { key: "xpBonus", suffix: "of Insight",      label: "SILICON" },
    { key: "mining",  suffix: "of Excavation",   label: "MINING" },
    { key: "regen",   suffix: "of Mending",      label: "REGEN" }
];

// Stat key → display label mapping
const FORGER_STAT_LABELS = {
    hp: "HP", attack: "ATK", defence: "DEF", speed: "SPD",
    breaker: "BREAKER", xpBonus: "SILICON", mining: "MINING", regen: "REGEN"
};

// Display order for stat tags in item names
const FORGER_STAT_ORDER = ["hp", "attack", "defence", "speed", "breaker", "xpBonus", "mining", "regen"];

// Flavour text per slot type
const FORGER_SLOT_DESCS = {
    body: "Hand-forged chassis plating, hammered from refined minerals. Heavier than standard issue, but impossibly tough.",
    legs: "Precision-forged leg servos built from crystallized minerals. Every stride feels deliberate and powerful.",
    arms: "Mineral-reinforced arm plating shaped in the forge's heat. Built to endure sustained punishment.",
    weapon: "A weapon forged from smelted minerals. The edge never dulls, and each strike lands with unnatural force.",
    chip: "A systems chip grown from mineral lattice structures. Its crystalline pathways chain commands faster than silicon.",
    processor: "A processor core refined from raw mineral substrate. Processes combat data with crystalline efficiency.",
    implant: "A self-repair implant powered by mineral energy. Damaged systems knit back together between blows.",
    drill: "A mining head forged from the hardest mineral compounds. Cuts through deposits like they're not there.",
    mindsync: "A neural interface forged from crystallized mineral lattice. Thought and motion collapse into one."
};

// Generic slot names for the blind-forge shop preview (player sees these before forging)
const FORGER_PREVIEW_NAMES = {
    body: "Body Armor",
    legs: "Leg Module",
    arms: "Arm Module",
    weapon: "Weapon",
    chip: "Chip",
    processor: "Processor",
    implant: "Implant",
    drill: "Drill",
    mindsync: "Mindsync"
};

/**
 * Generate a preview item for the forge shop display.
 * Shows generic name (e.g. "Duskquartz Weapon") with no stats revealed.
 * The real item is generated on purchase via generateForgerItem().
 */
function generateForgerPreview(mineralName, slotType) {
    const info = getForgerMineralInfo(mineralName);
    if (!info) return null;

    const baseName = mineralName.replace(/^Refined\s+/i, "");
    const previewName = FORGER_PREVIEW_NAMES[slotType];

    return {
        name: `${baseName} ${previewName}`,
        type: slotType,
        desc: FORGER_SLOT_DESCS[slotType],
        image: "images/IMAGE.gif",
        mineralCost: { mineral: `Refined ${baseName}`, category: "refined", count: 1 },
        scrapCost: info.tier * 15,
        isForgerPreview: true,
        forgerMineral: baseName,
        forgerSlot: slotType,
        forgerTier: info.tier
    };
}

/**
 * Get the tier number and mineral position for a given mineral name.
 * Handles both raw ("Aetherite") and refined ("Refined Aetherite") names.
 * Returns { tier, position, zone } or null if not found.
 */
function getForgerMineralInfo(mineralName) {
    const baseName = mineralName.replace(/^Refined\s+/i, "");
    for (const tierData of FORGER_TIERS) {
        const pos = tierData.minerals.indexOf(baseName);
        if (pos !== -1) {
            return { tier: tierData.tier, position: pos, zone: tierData.zone };
        }
    }
    return null;
}

/**
 * Calculate stat value at a given tier. HP always scales at 10×.
 */
function getForgerStatValue(statKey, tier) {
    return statKey === "hp" ? tier * 10 : tier;
}

/**
 * Generate a forger item for a given mineral and slot type.
 * Picks a random secondary stat and builds the complete item object.
 *
 * @param {string} mineralName - Raw mineral name (e.g. "Duskquartz")
 * @param {string} slotType - Installation slot (e.g. "weapon")
 * @returns {object|null} Complete item object ready for shop display / inventory
 */
function generateForgerItem(mineralName, slotType) {
    const info = getForgerMineralInfo(mineralName);
    if (!info) return null;

    const tier = info.tier;
    const baseName = mineralName.replace(/^Refined\s+/i, "");
    const primaryKey = FORGER_PRIMARY_STATS[slotType];

    // Pick random secondary stat from the 8 options
    const secondary = FORGER_SECONDARY_STATS[Math.floor(Math.random() * FORGER_SECONDARY_STATS.length)];

    // Build stats object
    const stats = {};

    // Primary stat at 2× tier
    const primaryValue = getForgerStatValue(primaryKey, tier) * 2;
    stats[primaryKey] = primaryValue;
    // Secondary stat at 1× tier
    const secValue = getForgerStatValue(secondary.key, tier);
    stats[secondary.key] = (stats[secondary.key] || 0) + secValue;

    // Build stat tag string for item name
    // List each stat in fixed order, combining if primary === secondary
    const parts = [];
    for (const key of FORGER_STAT_ORDER) {
        if (stats[key] && stats[key] > 0) {
            parts.push(`[+${stats[key]} ${FORGER_STAT_LABELS[key]}]`);
        }
    }
    const statTag = parts.join("");

    // Build item name: "Mineral SlotWord of Suffix [stats]"
    const slotWord = FORGER_SLOT_WORDS[slotType];
    const fullName = `${baseName} ${slotWord} ${secondary.suffix} ${statTag}`;

    return {
        name: fullName,
        type: slotType,
        desc: FORGER_SLOT_DESCS[slotType],
        image: "images/IMAGE.gif",
        stats: stats,
        mineralCost: { mineral: `Refined ${baseName}`, category: "refined", count: 1 },
        scrapCost: tier * 15,
        dropRate: 0,
        droppedBy: [],
        isForged: true,
        forgerTier: tier
    };
}

/**
 * Register a forged item in the runtime registry.
 * Called when a player purchases a forger item, so it can be found by name later.
 */
function registerForgedItem(item) {
    if (item && item.isForged && !FORGER_ITEMS.find(i => i.name === item.name)) {
        FORGER_ITEMS.push(item);
    }
}

/**
 * Restore forged items from save data into the runtime registry.
 * Called during game load.
 */
function restoreForgedItems(savedItems) {
    FORGER_ITEMS.length = 0;
    if (savedItems && Array.isArray(savedItems)) {
        savedItems.forEach(item => FORGER_ITEMS.push(item));
    }
}
