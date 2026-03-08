/**
 * MODS — Combat Action Definitions (46 total)
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
 * - element:   Element type (steel is the default/neutral)
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
 * 6 attack bases × 7 elements + 4 defence/utility bases (steel only) = 46 mods
 * Naming: "Swift Strike" → "Swift Fire Strike", "Swift Cryo Strike", etc.
 */

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

// ========== SHARED FLAVOUR ARRAYS ==========

const FLAVOUR_SWIFT_STRIKE = [
    "Quick strike. Keep your guard up.",
    "Clean hit. Stay sharp.",
    "Measured strike. No wasted motion.",
    "Light and fast. Stay mobile.",
    "Textbook strike. By the numbers."
];

const FLAVOUR_HEAVY_STRIKE = [
    "You drop your guard and swing with everything.",
    "Full power. Maximum impact.",
    "Sparks fly as the hammer falls.",
    "All systems routed to weapons.",
    "One shot. Make it count."
];

const FLAVOUR_SPREAD_SHOT = [
    "Weapons free. Hit everything that moves.",
    "Suppressive fire across the field.",
    "Spreading the pain around.",
    "Targeting all hostiles.",
    "Full spread. Light em all up."
];

const FLAVOUR_KEEN_PIERCE = [
    "Targeting weak point. Firing.",
    "Precision over power. Find the gap.",
    "Lock on. Thread the needle.",
    "One clean shot through the armour seam.",
    "Surgical strike. No wasted energy."
];

const FLAVOUR_POWER_SURGE = [
    "Reactor overload. All power to weapons.",
    "Maximum output. Damn the consequences.",
    "Systems red-lined. This is gonna hurt.",
    "Everything you've got. Leave nothing in reserve.",
    "Full burn. Hope it's enough."
];

const FLAVOUR_WIDE_BARRAGE = [
    "Saturating the zone. Nothing untouched.",
    "Full barrage. Cover everything.",
    "Area denial. Make them scatter.",
    "Heavy fire across all vectors.",
    "Blanket the field. No escape."
];

const FLAVOUR_IRON_BULWARK = [
    "Systems locked. Bracing for impact.",
    "Full defensive. Nothing gets through.",
    "All power to shields.",
    "Hunkered down. Let them try.",
    "Fortress mode engaged."
];

const FLAVOUR_QUICK_REPAIR = [
    "Pull back and reroute power to repair systems.",
    "Defensive posture. Repairs cycling.",
    "Hunkering down. Let the nanites work.",
    "Shields up. Reactor to repairs.",
    "Standing down to recharge."
];

const FLAVOUR_HARD_GUARD = [
    "Braced and ready. Counterattack primed.",
    "Shield wall. Watching for an opening.",
    "Defensive stance. Waiting for the gap.",
    "Locked down, but not helpless.",
    "Let them swing. Then make them pay."
];

const FLAVOUR_DEEP_RESTORE = [
    "Full system diagnostic. Rerouting all power.",
    "Deep repair cycle initiated.",
    "Core systems rebuilding. Hold the line.",
    "Nanite surge. Give it time.",
    "Shutting down non-essentials. Full repair mode."
];

// ========== MOD DEFINITIONS (46 mods) ==========

const MODS = [
    // --- Swift Strike (attack | fuel:0 | 1× atk | 1× def | single) ---
    { id: 'swift_strike',       name: 'Swift Strike',       type: 'mod', category: 'attack', element: 'steel', desc: 'Standard attack. No fuel cost.',                            image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-steel', flavour: FLAVOUR_SWIFT_STRIKE, cost: 50 },
    { id: 'swift_strike_fire',  name: 'Swift Fire Strike',  type: 'mod', category: 'attack', element: 'fire',  desc: 'Flame-infused. Standard attack. No fuel cost.',            image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-fire',  flavour: FLAVOUR_SWIFT_STRIKE, cost: 100 },
    { id: 'swift_strike_cryo',  name: 'Swift Cryo Strike',  type: 'mod', category: 'attack', element: 'cryo',  desc: 'Cryo-locked. Standard attack. No fuel cost.',              image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-cryo',  flavour: FLAVOUR_SWIFT_STRIKE, cost: 100 },
    { id: 'swift_strike_acid',  name: 'Swift Acid Strike',  type: 'mod', category: 'attack', element: 'acid',  desc: 'Acid-laced. Standard attack. No fuel cost.',               image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-acid',  flavour: FLAVOUR_SWIFT_STRIKE, cost: 100 },
    { id: 'swift_strike_volt',  name: 'Swift Volt Strike',  type: 'mod', category: 'attack', element: 'volt',  desc: 'Volt-charged. Standard attack. No fuel cost.',             image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-volt',  flavour: FLAVOUR_SWIFT_STRIKE, cost: 100 },
    { id: 'swift_strike_light', name: 'Swift Light Strike', type: 'mod', category: 'attack', element: 'light', desc: 'Light-attuned. Standard attack. No fuel cost.',             image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-light', flavour: FLAVOUR_SWIFT_STRIKE, cost: 100 },
    { id: 'swift_strike_void',  name: 'Swift Void Strike',  type: 'mod', category: 'attack', element: 'void',  desc: 'Void-touched. Standard attack. No fuel cost.',             image: 'images/mods/light_strike.gif', fuel: 0, atkMult: 1, defMult: 1, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-void',  flavour: FLAVOUR_SWIFT_STRIKE, cost: 100 },

    // --- Heavy Strike (attack | fuel:5 | 1.5× atk | 0.5× def | single) ---
    { id: 'heavy_strike',       name: 'Heavy Strike',       type: 'mod', category: 'attack', element: 'steel', desc: '+50% damage, halves defence. Costs 5 fuel.',                            image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-steel', flavour: FLAVOUR_HEAVY_STRIKE, cost: 100 },
    { id: 'heavy_strike_fire',  name: 'Heavy Fire Strike',  type: 'mod', category: 'attack', element: 'fire',  desc: 'Flame-infused. +50% damage, halves defence. Costs 5 fuel.',            image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-fire',  flavour: FLAVOUR_HEAVY_STRIKE, cost: 200 },
    { id: 'heavy_strike_cryo',  name: 'Heavy Cryo Strike',  type: 'mod', category: 'attack', element: 'cryo',  desc: 'Cryo-locked. +50% damage, halves defence. Costs 5 fuel.',              image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-cryo',  flavour: FLAVOUR_HEAVY_STRIKE, cost: 200 },
    { id: 'heavy_strike_acid',  name: 'Heavy Acid Strike',  type: 'mod', category: 'attack', element: 'acid',  desc: 'Acid-laced. +50% damage, halves defence. Costs 5 fuel.',               image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-acid',  flavour: FLAVOUR_HEAVY_STRIKE, cost: 200 },
    { id: 'heavy_strike_volt',  name: 'Heavy Volt Strike',  type: 'mod', category: 'attack', element: 'volt',  desc: 'Volt-charged. +50% damage, halves defence. Costs 5 fuel.',             image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-volt',  flavour: FLAVOUR_HEAVY_STRIKE, cost: 200 },
    { id: 'heavy_strike_light', name: 'Heavy Light Strike', type: 'mod', category: 'attack', element: 'light', desc: 'Light-attuned. +50% damage, halves defence. Costs 5 fuel.',             image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-light', flavour: FLAVOUR_HEAVY_STRIKE, cost: 200 },
    { id: 'heavy_strike_void',  name: 'Heavy Void Strike',  type: 'mod', category: 'attack', element: 'void',  desc: 'Void-touched. +50% damage, halves defence. Costs 5 fuel.',             image: 'images/mods/heavy_slam.gif', fuel: 5, atkMult: 1.5, defMult: 0.5, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-void',  flavour: FLAVOUR_HEAVY_STRIKE, cost: 200 },

    // --- Spread Shot (attack | fuel:3 | 0.5× atk | 1× def | aoe) ---
    { id: 'spread_shot',       name: 'Spread Shot',       type: 'mod', category: 'attack', element: 'steel', desc: 'Half damage to all enemies. Costs 3 fuel.',                            image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-steel', flavour: FLAVOUR_SPREAD_SHOT, cost: 150 },
    { id: 'spread_shot_fire',  name: 'Spread Fire Shot',  type: 'mod', category: 'attack', element: 'fire',  desc: 'Flame-infused. Half damage to all enemies. Costs 3 fuel.',            image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-fire',  flavour: FLAVOUR_SPREAD_SHOT, cost: 300 },
    { id: 'spread_shot_cryo',  name: 'Spread Cryo Shot',  type: 'mod', category: 'attack', element: 'cryo',  desc: 'Cryo-locked. Half damage to all enemies. Costs 3 fuel.',              image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-cryo',  flavour: FLAVOUR_SPREAD_SHOT, cost: 300 },
    { id: 'spread_shot_acid',  name: 'Spread Acid Shot',  type: 'mod', category: 'attack', element: 'acid',  desc: 'Acid-laced. Half damage to all enemies. Costs 3 fuel.',               image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-acid',  flavour: FLAVOUR_SPREAD_SHOT, cost: 300 },
    { id: 'spread_shot_volt',  name: 'Spread Volt Shot',  type: 'mod', category: 'attack', element: 'volt',  desc: 'Volt-charged. Half damage to all enemies. Costs 3 fuel.',             image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-volt',  flavour: FLAVOUR_SPREAD_SHOT, cost: 300 },
    { id: 'spread_shot_light', name: 'Spread Light Shot', type: 'mod', category: 'attack', element: 'light', desc: 'Light-attuned. Half damage to all enemies. Costs 3 fuel.',             image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-light', flavour: FLAVOUR_SPREAD_SHOT, cost: 300 },
    { id: 'spread_shot_void',  name: 'Spread Void Shot',  type: 'mod', category: 'attack', element: 'void',  desc: 'Void-touched. Half damage to all enemies. Costs 3 fuel.',             image: 'images/mods/spread_fire.gif', fuel: 3, atkMult: 0.5, defMult: 1, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-void',  flavour: FLAVOUR_SPREAD_SHOT, cost: 300 },

    // --- Keen Pierce (attack | fuel:4 | 1.3× atk | 0.7× def | single) ---
    { id: 'keen_pierce',       name: 'Keen Pierce',       type: 'mod', category: 'attack', element: 'steel', desc: '+30% damage, -30% defence. Costs 4 fuel.',                            image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-steel', flavour: FLAVOUR_KEEN_PIERCE, cost: 200 },
    { id: 'keen_pierce_fire',  name: 'Keen Fire Pierce',  type: 'mod', category: 'attack', element: 'fire',  desc: 'Flame-infused. +30% damage, -30% defence. Costs 4 fuel.',            image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-fire',  flavour: FLAVOUR_KEEN_PIERCE, cost: 400 },
    { id: 'keen_pierce_cryo',  name: 'Keen Cryo Pierce',  type: 'mod', category: 'attack', element: 'cryo',  desc: 'Cryo-locked. +30% damage, -30% defence. Costs 4 fuel.',              image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-cryo',  flavour: FLAVOUR_KEEN_PIERCE, cost: 400 },
    { id: 'keen_pierce_acid',  name: 'Keen Acid Pierce',  type: 'mod', category: 'attack', element: 'acid',  desc: 'Acid-laced. +30% damage, -30% defence. Costs 4 fuel.',               image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-acid',  flavour: FLAVOUR_KEEN_PIERCE, cost: 400 },
    { id: 'keen_pierce_volt',  name: 'Keen Volt Pierce',  type: 'mod', category: 'attack', element: 'volt',  desc: 'Volt-charged. +30% damage, -30% defence. Costs 4 fuel.',             image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-volt',  flavour: FLAVOUR_KEEN_PIERCE, cost: 400 },
    { id: 'keen_pierce_light', name: 'Keen Light Pierce', type: 'mod', category: 'attack', element: 'light', desc: 'Light-attuned. +30% damage, -30% defence. Costs 4 fuel.',             image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-light', flavour: FLAVOUR_KEEN_PIERCE, cost: 400 },
    { id: 'keen_pierce_void',  name: 'Keen Void Pierce',  type: 'mod', category: 'attack', element: 'void',  desc: 'Void-touched. +30% damage, -30% defence. Costs 4 fuel.',             image: 'images/mods/keen_pierce.gif', fuel: 4, atkMult: 1.3, defMult: 0.7, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'light element-void',  flavour: FLAVOUR_KEEN_PIERCE, cost: 400 },

    // --- Power Surge (attack | fuel:8 | 2× atk | 0.3× def | single) ---
    { id: 'power_surge',       name: 'Power Surge',       type: 'mod', category: 'attack', element: 'steel', desc: 'Doubles damage, -70% defence. Costs 8 fuel.',                            image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-steel', flavour: FLAVOUR_POWER_SURGE, cost: 300 },
    { id: 'power_surge_fire',  name: 'Power Fire Surge',  type: 'mod', category: 'attack', element: 'fire',  desc: 'Flame-infused. Doubles damage, -70% defence. Costs 8 fuel.',            image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-fire',  flavour: FLAVOUR_POWER_SURGE, cost: 600 },
    { id: 'power_surge_cryo',  name: 'Power Cryo Surge',  type: 'mod', category: 'attack', element: 'cryo',  desc: 'Cryo-locked. Doubles damage, -70% defence. Costs 8 fuel.',              image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-cryo',  flavour: FLAVOUR_POWER_SURGE, cost: 600 },
    { id: 'power_surge_acid',  name: 'Power Acid Surge',  type: 'mod', category: 'attack', element: 'acid',  desc: 'Acid-laced. Doubles damage, -70% defence. Costs 8 fuel.',               image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-acid',  flavour: FLAVOUR_POWER_SURGE, cost: 600 },
    { id: 'power_surge_volt',  name: 'Power Volt Surge',  type: 'mod', category: 'attack', element: 'volt',  desc: 'Volt-charged. Doubles damage, -70% defence. Costs 8 fuel.',             image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-volt',  flavour: FLAVOUR_POWER_SURGE, cost: 600 },
    { id: 'power_surge_light', name: 'Power Light Surge', type: 'mod', category: 'attack', element: 'light', desc: 'Light-attuned. Doubles damage, -70% defence. Costs 8 fuel.',             image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-light', flavour: FLAVOUR_POWER_SURGE, cost: 600 },
    { id: 'power_surge_void',  name: 'Power Void Surge',  type: 'mod', category: 'attack', element: 'void',  desc: 'Void-touched. Doubles damage, -70% defence. Costs 8 fuel.',             image: 'images/mods/power_surge.gif', fuel: 8, atkMult: 2, defMult: 0.3, targeting: 'single', regenMult: 0, regenBase: 0, cssClass: 'heavy element-void',  flavour: FLAVOUR_POWER_SURGE, cost: 600 },

    // --- Wide Barrage (attack | fuel:5 | 0.8× atk | 0.8× def | aoe) ---
    { id: 'wide_barrage',       name: 'Wide Barrage',       type: 'mod', category: 'attack', element: 'steel', desc: '80% damage to all enemies, -20% defence. Costs 5 fuel.',                            image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-steel', flavour: FLAVOUR_WIDE_BARRAGE, cost: 250 },
    { id: 'wide_barrage_fire',  name: 'Wide Fire Barrage',  type: 'mod', category: 'attack', element: 'fire',  desc: 'Flame-infused. 80% damage to all enemies, -20% defence. Costs 5 fuel.',            image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-fire',  flavour: FLAVOUR_WIDE_BARRAGE, cost: 500 },
    { id: 'wide_barrage_cryo',  name: 'Wide Cryo Barrage',  type: 'mod', category: 'attack', element: 'cryo',  desc: 'Cryo-locked. 80% damage to all enemies, -20% defence. Costs 5 fuel.',              image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-cryo',  flavour: FLAVOUR_WIDE_BARRAGE, cost: 500 },
    { id: 'wide_barrage_acid',  name: 'Wide Acid Barrage',  type: 'mod', category: 'attack', element: 'acid',  desc: 'Acid-laced. 80% damage to all enemies, -20% defence. Costs 5 fuel.',               image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-acid',  flavour: FLAVOUR_WIDE_BARRAGE, cost: 500 },
    { id: 'wide_barrage_volt',  name: 'Wide Volt Barrage',  type: 'mod', category: 'attack', element: 'volt',  desc: 'Volt-charged. 80% damage to all enemies, -20% defence. Costs 5 fuel.',             image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-volt',  flavour: FLAVOUR_WIDE_BARRAGE, cost: 500 },
    { id: 'wide_barrage_light', name: 'Wide Light Barrage', type: 'mod', category: 'attack', element: 'light', desc: 'Light-attuned. 80% damage to all enemies, -20% defence. Costs 5 fuel.',             image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-light', flavour: FLAVOUR_WIDE_BARRAGE, cost: 500 },
    { id: 'wide_barrage_void',  name: 'Wide Void Barrage',  type: 'mod', category: 'attack', element: 'void',  desc: 'Void-touched. 80% damage to all enemies, -20% defence. Costs 5 fuel.',             image: 'images/mods/wide_barrage.gif', fuel: 5, atkMult: 0.8, defMult: 0.8, targeting: 'aoe', regenMult: 0, regenBase: 0, cssClass: 'ranged element-void',  flavour: FLAVOUR_WIDE_BARRAGE, cost: 500 },

    // --- Iron Bulwark (defence | fuel:2 | 0× atk | 3× def | none | steel only) ---
    { id: 'iron_bulwark', name: 'Iron Bulwark', type: 'mod', category: 'defence', element: 'steel', desc: 'Triples defence for the round. No attack. Costs 2 fuel.', image: 'images/mods/bulwark.gif', fuel: 2, atkMult: 0, defMult: 3, targeting: 'none', regenMult: 0, regenBase: 0, cssClass: 'combat-regen element-steel', flavour: FLAVOUR_IRON_BULWARK, cost: 120 },

    // --- Quick Repair (utility | fuel:2 | 0× atk | 2× def | none | regen 1× base 10 | steel only) ---
    { id: 'quick_repair', name: 'Quick Repair', type: 'mod', category: 'utility', element: 'steel', desc: 'Repairs 10 + Regen stat. Doubles defence. Costs 2 fuel.', image: 'images/mods/repair.gif', fuel: 2, atkMult: 0, defMult: 2, targeting: 'none', regenMult: 1, regenBase: 10, cssClass: 'combat-regen element-steel', flavour: FLAVOUR_QUICK_REPAIR, cost: 80 },

    // --- Hard Guard (defence | fuel:3 | 0.5× atk | 2.5× def | none | steel only) ---
    { id: 'hard_guard', name: 'Hard Guard', type: 'mod', category: 'defence', element: 'steel', desc: '2.5× defence, half damage. Costs 3 fuel.', image: 'images/mods/hard_guard.gif', fuel: 3, atkMult: 0.5, defMult: 2.5, targeting: 'none', regenMult: 0, regenBase: 0, cssClass: 'combat-regen element-steel', flavour: FLAVOUR_HARD_GUARD, cost: 200 },

    // --- Deep Restore (utility | fuel:4 | 0× atk | 1.5× def | none | regen 2× base 20 | steel only) ---
    { id: 'deep_restore', name: 'Deep Restore', type: 'mod', category: 'utility', element: 'steel', desc: 'Repairs 20 + 2× Regen stat. +50% defence. Costs 4 fuel.', image: 'images/mods/deep_restore.gif', fuel: 4, atkMult: 0, defMult: 1.5, targeting: 'none', regenMult: 2, regenBase: 20, cssClass: 'combat-regen element-steel', flavour: FLAVOUR_DEEP_RESTORE, cost: 250 }
];

// ========== LEGACY NAME MIGRATION ==========
// Maps old mod names to new names for save compatibility
const MOD_NAME_MIGRATION = {
    'Light Strike': 'Swift Strike',
    'Heavy Slam': 'Heavy Strike',
    'Spread Fire': 'Spread Shot',
    'Bulwark': 'Iron Bulwark',
    'Repair': 'Quick Repair'
};
