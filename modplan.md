# Mod System — Implementation Plan

Replace the hardcoded 4 combat actions (`HEAVY`, `LIGHT`, `RANGED`, `REGEN`) with a **mod-driven system**. The player equips 4 mods into slots on the Pilot panel, and those mods determine the 4 buttons that appear in combat. Empty slots show a greyed-out "EMPTY" button.

---

## Phase 1 — Create `mods.js`

**What:** A new file containing the `MODS` array. Each mod is a self-contained combat action with all the data the combat system needs.

**Mod shape:**

```js
{
    id: 'light_strike',
    name: 'Light Strike',
    type: 'mod',              // inventory filter key (like 'body', 'weapon', etc.)
    category: 'attack',       // shop filter: attack | defence | utility
    element: null,             // steel | flesh | fire | cryo | acid | volt | light | void | null
    desc: 'Balanced strike. No fuel cost.',
    image: 'images/mods/light_strike.gif',
    fuel: 0,
    atkMult: 1,
    defMult: 1,
    targeting: 'single',      // single | aoe | none
    cssClass: 'light',
    flavour: [ ... ],
    cost: 50
}
```

**Starter mods (5):**

| Mod | Category | Fuel | ATK | DEF | Targeting | Cost | Notes |
|-----|----------|------|-----|-----|-----------|------|-------|
| Light Strike | attack | 0 | 1x | 1x | single | 50 | Replaces old LIGHT |
| Heavy Slam | attack | 5 | 1.5x | 0.5x | single | 100 | Replaces old HEAVY |
| Spread Fire | attack | 3 | 0.5x | 1x | aoe | 150 | Replaces old RANGED |
| Bulwark | defence | 2 | 0x | 3x | none | 120 | New — full defence stance |
| Repair | utility | 2 | 0x | 2x | none | 80 | Replaces old REGEN (`isRegen: true`) |

All starter mods have `element: null` (neutral). Future mods will have elements.

**Integration:** Add `<script src="mods.js"></script>` to `index.html` after `forger_items.js` (line ~2116) so `MODS` is available before the main script block.

**Save/load consideration:** Inventory restoration (line ~2580) currently searches `ITEMS` and `FORGER_ITEMS` by name. Must add `MODS` to that lookup chain:

```js
const item = ITEMS.find(i => i.name === itemName)
    || FORGER_ITEMS.find(i => i.name === itemName)
    || MODS.find(i => i.name === itemName);   // NEW
```

Same fix needed in `findShopItem()` (line ~3899) and `recalculateStats()` item lookup (line ~3660).

---

## Phase 2 — Equipment Slots (`game.equipment`)

**What:** Add 4 mod slots to the equipment system so mods can be equipped/unequipped like any other gear.

**Changes to `game.equipment`:**

Add `mod1: null, mod2: null, mod3: null, mod4: null` to:
- Default init (line ~2343)
- `loadGame()` restoration (line ~2591)
- `loadSlot()` restoration (line ~2443)

**`SLOT_LABELS`** (line ~3691): Add `mod1: 'MOD 1', mod2: 'MOD 2', mod3: 'MOD 3', mod4: 'MOD 4'`.

**`updateEquipmentUI()`** (line ~3696): Add `'mod1', 'mod2', 'mod3', 'mod4'` to the `slots` array. The existing logic filters inventory by `item.type === slot`, so mods with `type: 'mod'` won't match `'mod1'`/`'mod2'` etc. — **special handling needed:**

```js
// For mod slots: show all type === 'mod' items, excluding mods already in other mod slots
if (slot.startsWith('mod')) {
    const otherModSlots = ['mod1','mod2','mod3','mod4'].filter(s => s !== slot);
    const equippedElsewhere = otherModSlots.map(s => game.equipment[s]).filter(Boolean);
    slotItems = game.inventory.filter(item =>
        item.type === 'mod' && !equippedElsewhere.includes(item.name)
    );
}
```

**`setEquipmentLocked()`** (line ~3757): Add mod slots to the locked slots array.

**`recalculateStats()`** (line ~3656): No changes needed — mods have no `stats` object, so the `if (item && item.stats)` check naturally skips them.

---

## Phase 3 — Pilot Panel HTML

**What:** Add 4 mod dropdown slots above the existing pilot/implant/mindsync dropdowns.

**Location:** `#page-pilot` panel (line ~1763).

**New HTML (before the existing pilot dropdown):**

```html
<div class="mod-slots">
    <div class="equip-slot">
        <select id="equip-mod1"><option value="">-- None --</option></select>
        <div class="equip-desc" id="equip-desc-mod1"></div>
    </div>
    <div class="equip-slot">
        <select id="equip-mod2"><option value="">-- None --</option></select>
        <div class="equip-desc" id="equip-desc-mod2"></div>
    </div>
    <div class="equip-slot">
        <select id="equip-mod3"><option value="">-- None --</option></select>
        <div class="equip-desc" id="equip-desc-mod3"></div>
    </div>
    <div class="equip-slot">
        <select id="equip-mod4"><option value="">-- None --</option></select>
        <div class="equip-desc" id="equip-desc-mod4"></div>
    </div>
</div>
```

Wire up `onchange` handlers the same way as other equipment slots — calling `onEquipmentChange('mod1', value)` etc.

---

## Phase 4 — Combat System Rewrite

**What:** Replace hardcoded `ACTION_*` constants with mod-driven lookups. This is the largest change.

### 4a — Remove old constants

Delete these (lines 6046–6084):
- `ACTION_FUEL_COST`
- `ACTION_ATK_MULT`
- `ACTION_DEF_MULT`
- `ACTION_LABELS`
- `ACTION_FLAVOUR`

### 4b — Rewrite `awaitCombatAction()` (line ~6087)

**Currently:** Loops over `['heavy', 'light', 'ranged', 'regen']`, builds 4 buttons from `ACTION_LABELS` and `ACTION_FUEL_COST`.

**New logic:**

```js
const modSlots = ['mod1', 'mod2', 'mod3', 'mod4'];
modSlots.forEach(slotKey => {
    const modName = game.equipment[slotKey];
    const mod = modName ? MODS.find(m => m.name === modName) : null;

    const btn = document.createElement('button');
    if (mod) {
        const fuelLabel = mod.fuel > 0 ? ` -${mod.fuel}` : '';
        btn.className = `action-btn ${mod.cssClass}`;
        btn.textContent = `${mod.name.toUpperCase()}${fuelLabel}`;
        btn.disabled = mod.fuel > p.fuel;
        btn.addEventListener('click', () => resolve(mod));
    } else {
        btn.className = 'action-btn empty';
        btn.textContent = 'EMPTY';
        btn.disabled = true;
    }
    container.appendChild(btn);
});
```

**Key change:** `resolve(mod)` now passes the full mod object instead of a string like `'heavy'`. The auto-timeout resolves to the first equipped mod (or null if all empty).

### 4c — Rewrite `battleRound()` attack phase (line ~6206)

**Currently:** `const action = await awaitCombatAction()` returns a string. All lookups use `ACTION_*[action]`.

**New:** `const mod = await awaitCombatAction()` returns a mod object (or null).

Replace all `ACTION_*` references:

| Old | New |
|-----|-----|
| `ACTION_FUEL_COST[action]` | `mod.fuel` |
| `ACTION_ATK_MULT[action]` | `mod.atkMult` |
| `ACTION_DEF_MULT[action]` | `mod.defMult` |
| `ACTION_FLAVOUR[action]` | `mod.flavour` |
| `action === 'regen'` | `mod.isRegen` |
| `action === 'ranged'` (AoE check) | `mod.targeting === 'aoe'` |
| `cssClasses[action]` | `mod.cssClass` |

### 4d — Rewrite defence phase (line ~6393)

**Currently:** `const defMult = ACTION_DEF_MULT[action]`

**New:** `const defMult = mod.defMult`

### 4e — Rewrite end-of-round regen (line ~6468)

**Currently:** `action !== 'heavy'` blocks regen; `isRegen` doubles regen.

**New:** `mod.defMult < 1` blocks regen (low-defence mods forfeit regen); `mod.isRegen` doubles regen.

### 4f — Element damage bonus (new)

After calculating `rawAttack` (line ~6252), apply elemental modifiers:

```js
if (mod.element && et.element) {
    const bonus = getElementBonus(mod.element, et.element);
    rawAttack = Math.floor(rawAttack * bonus);
}
if (mod.element && et.defenceType) {
    const defBonus = getDefenceTypeBonus(mod.element, et.defenceType);
    rawAttack = Math.floor(rawAttack * defBonus);
}
```

Helper functions (can live in `mods.js`):

```js
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
```

Multiplier values (1.25/0.75/1.15) are tunable — these are starting points.

---

## Phase 5 — Enemy Element & Defence Type

**What:** Every enemy gets `element` and `defenceType` properties.

**Enemy shape additions:**

```js
{
    name: "Silicon Rat",
    element: 'flesh',          // steel | flesh | fire | cryo | acid | volt | light | void
    defenceType: 'physical',   // physical | magnetic
    attack: 1,
    defence: 0,
    hp: 1,
    ...
}
```

**Rules of thumb:**
- **Physical defence** — organic creatures, beasts, unshielded humanoids
- **Magnetic defence** — machines, shielded mechs, drones, energy barriers

**Files to update:** All `enemies_*.js` files (14 zone files + `boss_encounters.js`). Each enemy object gets 2 new fields.

**Combat integration:** Already covered in Phase 4f — the `battleRound()` reads `et.element` and `et.defenceType` from the wave's enemy type.

---

## Phase 6 — The Modder (Shop Encounter)

**What:** A new unique zone and NPC that sells mods. Follows the Forge/Guild/Broker pattern.

### 6a — Zone registration

**`LOCATION_MAP_ITEMS`** (line ~2964): Add `modshop: 'Map: The Mod Shop'`

**`ZONE_DESTINATIONS`** (line ~2990): Add:

```js
modshop: {
    openWorldName: null,
    openWorldDesc: null,
    destinations: [
        { encounterName: "The Modder", mapItem: "The Mod Shop: The Modder" }
    ]
}
```

### 6b — Story items

**`storyitems.js`:** Add 2 entries:

```js
{ name: "Map: The Mod Shop", category: "map", desc: "Coordinates to a stripped-down workshop on the edge of the sector.", image: "images/IMAGE.gif" },
{ name: "The Mod Shop: The Modder", category: "locationmap", desc: "Bay number for The Modder's workshop.", image: "images/IMAGE.gif" }
```

### 6c — Map access

**`encounters_oldbattlefield.js`:** Add `itemSlot3: ["Map: The Mod Shop"]` to The Mapmaker encounter.

### 6d — Encounter file

**New file: `encounters_modshop.js`**

```js
const ENCOUNTERS_MODSHOP = [
    {
        name: "The Modder",
        characterImage: "images/MODDER.gif",
        type: "shop",
        autoEngage: true,
        isModder: true,
        description: "...",
        engageText: "...",
        discoveredDescription: "...",
        discoveredEngageText: "...",
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [ ... ]
    }
];
```

Add `<script src="encounters_modshop.js"></script>` after `encounters_decrypter.js` (line ~2090).

Register in the encounters lookup (wherever `ENCOUNTERS_FORGE`, `ENCOUNTERS_GUILD` etc. are mapped).

### 6e — Shop panel integration

**`showShopPanel()`** (line ~4491): Add new branch:

```js
} else if (currentEncounter && currentEncounter.isModder) {
    updateModderDropdown();
    modderSelector.style.display = 'block';
    // hide all other selectors
}
```

**New HTML** (alongside forge/salvage/decrypter/broker selectors):

```html
<div class="modder-selector" id="modder-selector" style="display: none;">
    <select id="modder-category-select">
        <option value="">[SELECT MOD CATEGORY]</option>
        <option value="attack">ATTACK MODS</option>
        <option value="defence">DEFENCE MODS</option>
        <option value="utility">UTILITY MODS</option>
    </select>
</div>
```

**`updateModderDropdown()`** — no-op (static options), exists for pattern consistency.

**`onModderCategoryChange()`** — filters `MODS` by `category`, checks ownership in `game.inventory`, populates 4 shop slots. Already-owned mods marked "OWNED" and disabled.

**`purchaseItem()`** (line ~4554): Add modder branch — standard XP cost purchase, calls `addItemToInventory(mod)`.

**`hideShopPanel()`** (line ~4535): Reset modder dropdown and hide selector.

---

## Phase 7 — Save/Load Compatibility

**What:** Ensure mods survive save/load cycles and don't break existing saves.

**Inventory serialisation** (`buildSaveData()` line ~2211): Already serialises by `item.name` — no change needed.

**Inventory restoration** (`loadGame()` line ~2580, `loadSlot()` line ~2434): Add `MODS` to the lookup chain (covered in Phase 1).

**Equipment restoration** (`loadGame()` line ~2591, `loadSlot()` line ~2443): Add `mod1`–`mod4` slots with `|| null` fallback — older saves without mod slots gracefully get empty slots.

**Backwards compatibility:** Old saves have no `mod1`–`mod4` in `data.equipment`. The `|| null` pattern handles this. No migration needed.

---

## Design Decisions

| Question | Answer |
|----------|--------|
| **Starting mods** | Player starts with none. Sorted separately later. |
| **How to get mods** | Sold by **The Modder**, a unique encounter. Not dropped by enemies. |
| **Empty slots** | Greyed-out "EMPTY" button in combat. Always disabled. |
| **Duplicates** | One copy per slot. A mod in slot 1 can't also be in slot 2. |
| **Access** | The Mapmaker in Old Battlefield sells `Map: The Mod Shop`. |
| **Passive stats** | Mods give no passive bonuses. `recalculateStats()` skips them. |
| **Element on starter mods** | All null/neutral. Elements added to later mods. |

---

## Element System

Every mod can have an `element` property. Elements affect damage through a weakness/resistance chart.

### Main Elements

| Element | Strong vs | Weak vs |
|---------|-----------|---------|
| **Steel** | Flesh, Cryo | Acid, Volt |
| **Flesh** | Acid, Volt | Steel, Fire |
| **Fire** | Flesh, Steel | Cryo, Acid |
| **Cryo** | Fire, Volt | Steel, Flesh |
| **Acid** | Steel, Flesh | Cryo, Volt |
| **Volt** | Steel, Acid | Cryo, Flesh |

### Special Rivalry

| Element | Strong vs | Weak vs |
|---------|-----------|---------|
| **Light** | Void | Void |
| **Void** | Light | Light |

Light and Void interact normally/neutral with all other elements.

### Defence Interaction

Elements also interact with defence types:

- **Steel, Flesh, Fire** — effective against **Physical** defence
- **Cryo, Acid, Volt** — effective against **Magnetic** defence

### Enemy Element & Defence Type

Every enemy gets two new properties:

```js
element: 'steel',          // steel | flesh | fire | cryo | acid | volt | light | void
defenceType: 'physical',   // physical | magnetic
```

- **`element`** — determines how the enemy's attacks interact with the element chart (and how incoming elemental attacks affect them)
- **`defenceType`** — either `physical` or `magnetic`
  - **Physical** — organic creatures, beasts, unshielded humanoids
  - **Magnetic** — machines, shielded mechs, drones, anything running energy barriers

This means the player has two layers to consider when picking mods:
1. What **element** beats this enemy's element?
2. What **element group** cracks this enemy's defence type?

---

## Future Mods

More added later per zone. Ideas:
- **Shield Bash** — low damage, stuns enemy 1 turn
- **Overcharge** — massive damage, costs HP
- **Drain** — low damage, steals HP
- **EMP** — reduces enemy ATK next round
- **Counter** — no attack, reflects next hit

---

## Files to Create/Modify

| File | Phase | Change |
|------|-------|--------|
| `mods.js` (NEW) | 1 | Mod definitions, `ELEMENT_CHART`, helper functions |
| `index.html` | 2 | Add mod1–4 to `game.equipment`, default init, save/load |
| `index.html` | 2 | Add `MODS` to inventory restore lookup chain |
| `index.html` | 2 | `SLOT_LABELS`, `updateEquipmentUI()`, `setEquipmentLocked()` |
| `index.html` | 3 | Mod dropdown HTML in `#page-pilot` |
| `index.html` | 4 | Remove `ACTION_*` constants, rewrite `awaitCombatAction()`, `battleRound()` attack/defence/regen phases |
| `index.html` | 4 | Add element damage bonus to attack calculation |
| `enemies_*.js` (14 files) | 5 | Add `element` and `defenceType` to every enemy |
| `boss_encounters.js` | 5 | Add `element` and `defenceType` to bosses |
| `encounters_modshop.js` (NEW) | 6 | The Modder encounter definition |
| `index.html` | 6 | `<script>` tag, zone config, modder selector HTML, `showShopPanel`/`purchaseItem`/`hideShopPanel` branches |
| `encounters_oldbattlefield.js` | 6 | Add `Map: The Mod Shop` to Mapmaker's `itemSlot3` |
| `storyitems.js` | 6 | Add map + location map items for The Mod Shop |
