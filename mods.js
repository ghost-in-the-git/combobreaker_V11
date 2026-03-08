/**
 * MODS — Combat Action Definitions
 *
 * Each mod is a self-contained combat action that can be equipped
 * into one of 4 mod slots on the Pilot panel. Mods determine the
 * 4 buttons that appear during combat.
 *
 * Properties:
 * - id:        Unique identifier
 * - name:      Display name (also used as inventory key)
 * - type:      Always 'mod' (for inventory filtering)
 * - category:  Shop filter: attack | defence | utility
 * - element:   Element type or null for neutral
 * - desc:      Tooltip / shop description
 * - image:     Path to mod image
 * - fuel:      Fuel cost per use
 * - atkMult:   Attack multiplier (0 = no attack)
 * - defMult:   Defence multiplier for the round
 * - targeting: single | aoe | none
 * - regenMult: Regen multiplier (0 = no regen, 1 = 1×REGEN stat, 2 = 2×, etc.)
 * - cssClass:  CSS class for the combat button
 * - flavour:   Array of random flavour messages
 * - cost:      Purchase price in Silicon
 *
 * GENERATION: 8 combat bases × 8 variants + 2 utility bases (neutral only) = 66 mods
 * Naming: "Swift Strike" → "Swift Fire Strike", "Swift Cryo Strike", etc.
 */

// ========== MOD BASE DEFINITIONS ==========

const MOD_BASES = [
    {
        baseName: 'Swift Strike',
        baseId: 'swift_strike',
        category: 'attack',
        desc: 'Standard attack. No fuel cost.',
        image: 'images/mods/light_strike.gif',
        fuel: 0,
        atkMult: 1,
        defMult: 1,
        targeting: 'single',
        regenMult: 0,
        cssClass: 'light',
        flavour: [
            "Quick strike. Keep your guard up.",
            "Clean hit. Stay sharp.",
            "Measured strike. No wasted motion.",
            "Light and fast. Stay mobile.",
            "Textbook strike. By the numbers."
        ],
        cost: 50
    },
    {
        baseName: 'Heavy Strike',
        baseId: 'heavy_strike',
        category: 'attack',
        desc: '+50% damage, halves defence. Costs 5 fuel.',
        image: 'images/mods/heavy_slam.gif',
        fuel: 5,
        atkMult: 1.5,
        defMult: 0.5,
        targeting: 'single',
        regenMult: 0,
        cssClass: 'heavy',
        flavour: [
            "You drop your guard and swing with everything.",
            "Full power. Maximum impact.",
            "Sparks fly as the hammer falls.",
            "All systems routed to weapons.",
            "One shot. Make it count."
        ],
        cost: 100
    },
    {
        baseName: 'Spread Shot',
        baseId: 'spread_shot',
        category: 'attack',
        desc: 'Half damage to all enemies. Costs 3 fuel.',
        image: 'images/mods/spread_fire.gif',
        fuel: 3,
        atkMult: 0.5,
        defMult: 1,
        targeting: 'aoe',
        regenMult: 0,
        cssClass: 'ranged',
        flavour: [
            "Weapons free. Hit everything that moves.",
            "Suppressive fire across the field.",
            "Spreading the pain around.",
            "Targeting all hostiles.",
            "Full spread. Light em all up."
        ],
        cost: 150
    },
    {
        baseName: 'Iron Bulwark',
        baseId: 'iron_bulwark',
        category: 'defence',
        desc: 'Triples defence for the round. No attack. Costs 2 fuel.',
        image: 'images/mods/bulwark.gif',
        fuel: 2,
        atkMult: 0,
        defMult: 3,
        targeting: 'none',
        regenMult: 0,
        cssClass: 'combat-regen',
        flavour: [
            "Systems locked. Bracing for impact.",
            "Full defensive. Nothing gets through.",
            "All power to shields.",
            "Hunkered down. Let them try.",
            "Fortress mode engaged."
        ],
        cost: 120
    },
    {
        baseName: 'Quick Repair',
        baseId: 'quick_repair',
        category: 'utility',
        desc: 'Repairs 10 + Regen stat. Doubles defence. Costs 2 fuel.',
        image: 'images/mods/repair.gif',
        fuel: 2,
        atkMult: 0,
        defMult: 2,
        targeting: 'none',
        regenMult: 1,
        regenBase: 10,
        cssClass: 'combat-regen',
        flavour: [
            "Pull back and reroute power to repair systems.",
            "Defensive posture. Repairs cycling.",
            "Hunkering down. Let the nanites work.",
            "Shields up. Reactor to repairs.",
            "Standing down to recharge."
        ],
        cost: 80
    },
    {
        baseName: 'Keen Pierce',
        baseId: 'keen_pierce',
        category: 'attack',
        desc: '+30% damage, -30% defence. Costs 4 fuel.',
        image: 'images/mods/keen_pierce.gif',
        fuel: 4,
        atkMult: 1.3,
        defMult: 0.7,
        targeting: 'single',
        regenMult: 0,
        cssClass: 'light',
        flavour: [
            "Targeting weak point. Firing.",
            "Precision over power. Find the gap.",
            "Lock on. Thread the needle.",
            "One clean shot through the armour seam.",
            "Surgical strike. No wasted energy."
        ],
        cost: 200
    },
    {
        baseName: 'Power Surge',
        baseId: 'power_surge',
        category: 'attack',
        desc: 'Doubles damage, -70% defence. Costs 8 fuel.',
        image: 'images/mods/power_surge.gif',
        fuel: 8,
        atkMult: 2,
        defMult: 0.3,
        targeting: 'single',
        regenMult: 0,
        cssClass: 'heavy',
        flavour: [
            "Reactor overload. All power to weapons.",
            "Maximum output. Damn the consequences.",
            "Systems red-lined. This is gonna hurt.",
            "Everything you've got. Leave nothing in reserve.",
            "Full burn. Hope it's enough."
        ],
        cost: 300
    },
    {
        baseName: 'Wide Barrage',
        baseId: 'wide_barrage',
        category: 'attack',
        desc: '80% damage to all enemies, -20% defence. Costs 5 fuel.',
        image: 'images/mods/wide_barrage.gif',
        fuel: 5,
        atkMult: 0.8,
        defMult: 0.8,
        targeting: 'aoe',
        regenMult: 0,
        cssClass: 'ranged',
        flavour: [
            "Saturating the zone. Nothing untouched.",
            "Full barrage. Cover everything.",
            "Area denial. Make them scatter.",
            "Heavy fire across all vectors.",
            "Blanket the field. No escape."
        ],
        cost: 250
    },
    {
        baseName: 'Hard Guard',
        baseId: 'hard_guard',
        category: 'defence',
        desc: '2.5× defence, half damage. Costs 3 fuel.',
        image: 'images/mods/hard_guard.gif',
        fuel: 3,
        atkMult: 0.5,
        defMult: 2.5,
        targeting: 'none',
        regenMult: 0,
        cssClass: 'combat-regen',
        flavour: [
            "Braced and ready. Counterattack primed.",
            "Shield wall. Watching for an opening.",
            "Defensive stance. Waiting for the gap.",
            "Locked down, but not helpless.",
            "Let them swing. Then make them pay."
        ],
        cost: 200
    },
    {
        baseName: 'Deep Restore',
        baseId: 'deep_restore',
        category: 'utility',
        desc: 'Repairs 20 + 2× Regen stat. +50% defence. Costs 4 fuel.',
        image: 'images/mods/deep_restore.gif',
        fuel: 4,
        atkMult: 0,
        defMult: 1.5,
        targeting: 'none',
        regenMult: 2,
        regenBase: 20,
        cssClass: 'combat-regen',
        flavour: [
            "Full system diagnostic. Rerouting all power.",
            "Deep repair cycle initiated.",
            "Core systems rebuilding. Hold the line.",
            "Nanite surge. Give it time.",
            "Shutting down non-essentials. Full repair mode."
        ],
        cost: 250
    }
];

// ========== ELEMENT SYSTEM ==========

const ELEMENT_CHART = {
    steel: { strong: ['flesh', 'cryo'], weak: ['acid', 'volt'] },
    flesh: { strong: ['acid', 'volt'], weak: ['steel', 'fire'] },
    fire:  { strong: ['flesh', 'steel'], weak: ['cryo', 'acid'] },
    cryo:  { strong: ['fire', 'volt'], weak: ['steel', 'flesh'] },
    acid:  { strong: ['steel', 'flesh'], weak: ['cryo', 'volt'] },
    volt:  { strong: ['steel', 'acid'], weak: ['cryo', 'flesh'] },
    light: { strong: ['void'], weak: ['void'] },
    void:  { strong: ['light'], weak: ['light'] }
};

const PHYSICAL_ELEMENTS = ['steel', 'flesh', 'fire'];
const MAGNETIC_ELEMENTS = ['cryo', 'acid', 'volt'];

function getElementBonus(attackElement, defenderElement) {
    const chart = ELEMENT_CHART[attackElement];
    if (!chart) return 1;
    if (chart.strong.includes(defenderElement)) return 1.25;
    if (chart.weak.includes(defenderElement)) return 0.75;
    return 1;
}

function getDefenceTypeBonus(attackElement, defenceType) {
    if (defenceType === 'physical' && PHYSICAL_ELEMENTS.includes(attackElement)) return 1.15;
    if (defenceType === 'magnetic' && MAGNETIC_ELEMENTS.includes(attackElement)) return 1.15;
    return 1;
}

// ========== MOD GENERATION ==========

const ELEMENT_VARIANTS = [null, 'steel', 'fire', 'cryo', 'acid', 'volt', 'light', 'void'];

const ELEMENT_LABELS = {
    steel: 'Steel', fire: 'Fire', cryo: 'Cryo',
    acid: 'Acid', volt: 'Volt', light: 'Light', void: 'Void'
};

const ELEMENT_DESC_PREFIX = {
    steel: 'Steel-forged.',
    fire: 'Flame-infused.',
    cryo: 'Cryo-locked.',
    acid: 'Acid-laced.',
    volt: 'Volt-charged.',
    light: 'Light-attuned.',
    void: 'Void-touched.'
};

/**
 * Generate mod name from base name and element.
 * "Swift Strike" + fire → "Swift Fire Strike"
 * "Wide Barrage" + cryo → "Wide Cryo Barrage"
 */
function generateModName(baseName, element) {
    if (!element) return baseName;
    const words = baseName.split(' ');
    return words[0] + ' ' + ELEMENT_LABELS[element] + ' ' + words.slice(1).join(' ');
}

function generateModId(baseId, element) {
    return element ? baseId + '_' + element : baseId;
}

// Generate mods: utility mods are neutral-only, others get all element variants
// 8 combat bases × 8 variants + 2 utility bases × 1 = 66 mods
const MODS = [];
for (let b = 0; b < MOD_BASES.length; b++) {
    const base = MOD_BASES[b];
    const variants = base.category === 'utility' ? [null] : ELEMENT_VARIANTS;
    for (let e = 0; e < variants.length; e++) {
        const element = variants[e];
        MODS.push({
            id: generateModId(base.baseId, element),
            name: generateModName(base.baseName, element),
            type: 'mod',
            category: base.category,
            element: element,
            desc: element ? (ELEMENT_DESC_PREFIX[element] + ' ' + base.desc) : base.desc,
            image: base.image,
            fuel: base.fuel,
            atkMult: base.atkMult,
            defMult: base.defMult,
            targeting: base.targeting,
            regenMult: base.regenMult || 0,
            regenBase: base.regenBase || 0,
            cssClass: element ? (base.cssClass + ' element-' + element) : base.cssClass,
            flavour: base.flavour,
            cost: element ? base.cost * 2 : base.cost
        });
    }
}

// ========== LEGACY NAME MIGRATION ==========
// Maps old mod names to new names for save compatibility
const MOD_NAME_MIGRATION = {
    'Light Strike': 'Swift Strike',
    'Heavy Slam': 'Heavy Strike',
    'Spread Fire': 'Spread Shot',
    'Bulwark': 'Iron Bulwark',
    'Repair': 'Quick Repair'
};
