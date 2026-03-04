# COMBOBREAKER V7 - Codebase Summary

## What Is This?
A roguelike mech pilot browser game (single HTML + JS files). Turn-based combat, asteroid mining, mineral economy, equipment crafting. All client-side, saves to localStorage.

## Branch
- Working branch: `claude/create-combobreaker-v7-branch-stP1D`

## Recent Work
- XP renamed to **Silicon** across all display strings (lore: mechs use silicon to store memories)
- Dialogue system added for The Professor (8 lore/gameplay questions, inline chat buttons)
- `autoEngage` added to The Forge and Abandoned Monolith (skip Engage/Decline buttons)
- Scrap Fields renamed from Scrap Yard
- The Ratpile open world renamed from Mech Graveyard to The Nests
- The Scrapper renamed to Abandoned Monolith
- Salvage yard system: sell unequipped items for scrap
- Forged items have scrap costs (10x mineral count)
- All 30 minerals renamed to fantasy names
- Tier 11 minerals added: Reagent Arcadium, Catalyst MK-II, Anomaly 0x3A

## Key File Map
See [codebase-structure.md](codebase-structure.md) for full details.

| File | Purpose |
|------|---------|
| `index.html` (~4555 lines) | Main game: UI, combat, mining, shops, save/load, dialogue system |
| `items.js` | ~101 equipment items across 9 slot types + services |
| `forger_items.js` | FORGER_TIERS, FORGER_SLOT_GROUPS, FORGER_ITEMS (19 defined) |
| `refined_minerals.js` | 33 refined mineral definitions (tier 1-11) |
| `storyitems.js` | 147 story items, maps, collectibles |
| `enemies.js` | 5 base enemy types |
| `encounters_home.js` | The Professor (starter shop + dialogue) |
| `encounters_forge.js` | The Forger (mineral dropdown forge UI) |
| `encounters_salvageyard.js` | Abandoned Monolith (sell items for scrap) |
| `encounters_[zone].js` | Zone-specific shops + mineral traders (11 zones) |
| `enemies_[zone].js` | Zone-specific enemies (11 zones) |
| `ambush_[zone].js` | Zone-specific ambush encounters (11 zones) |
| `mining_[zone].js` | Zone mining data (10 zones + asteroid belt) |

## Silicon (formerly XP) System
- Mechs use silicon to store memories — Silicon is the progression currency
- Earned by destroying enemies in combat
- Spent to level up stats or purchase items from vendors
- Processor equipment grants bonus Silicon per kill
- Display: "SILICON" in bar UI, "Silicon" in messages and shop buttons

## Mineral Pipeline
1. **Mine** raw minerals from asteroids (zone-specific)
2. **Refine** at Mineral Trader: 5 raw → 1 refined
3. **Forge** at The Forger: 3 refined + scrap → forged equipment

## Mineral Names (11 Tiers, 3 per tier)
| Tier | Pos 0 (body/legs/arms) | Pos 1 (weapon/chip/processor) | Pos 2 (pilot/implant/drill) |
|------|------------------------|-------------------------------|----------------------------|
| 1 | Aetherite | Bronzewisp | Cindergem |
| 2 | Duskquartz | Emberlith | Frostveil |
| 3 | Gloomstone | Hexsilica | Iridionite |
| 4 | Jetspinel | Kryptoglass | Lumenore |
| 5 | Moonshardite | Nightpyre | Obsidryl |
| 6 | Prismalune | Quellium | Riftmarble |
| 7 | Starvitrine | Thorncrystal | Umbracite |
| 8 | Vortexium | Wyrmstone | Xanthryx |
| 9 | Yonderite | Zephyrsalt | Isotope Lace |
| 10 | Archive Shard | Strata-Null | Compound 33 |
| 11 | Reagent Arcadium | Catalyst MK-II | Anomaly 0x3A |

## Equipment Slots (9 total)
body, legs, arms, weapon, chip, processor, pilot, drill, implant

## Game State
- `game.player` — level, xp (silicon), hp, stats, fuel
- `game.inventory` — array of item objects
- `game.equipment` — 9 named slots (body, legs, etc.)
- `game.minerals` — `{ tier1: [...], tier2: [...], refined: [...] }`
- `game.scrap` — integer scrap count
- `game.storyItems` — array of story item names
- 3 save slots via localStorage

## Forging System Details
- `FORGER_TIERS` maps tier → zone + 3 mineral names
- `FORGER_SLOT_GROUPS` maps mineral position → 3 equipment types
- Forge UI: dropdown selects mineral → shows 3 craftable slots
- Items without blueprints show "No Blueprint" placeholder
- Forged items cost: `mineralCost` (refined) + `scrapCost` (10x mineral count)
- Purchase logic in `purchaseItem()`, UI in `updateShopUI()` (index.html)

## Special Encounters
- **The Professor** (Home) — starter shop, 8-option dialogue system, gives Ratpile map on first visit
- **The Forger** (The Forge) — mineral dropdown forge UI, autoEngage
- **Abandoned Monolith** (Mech Graveyard) — salvage yard, sell items for scrap, autoEngage

## Zones (15 total)
home, ratpile, scrapyard, oldbattlefield, downtown, orbitalstation, wasteland, undercity, industrialzone, frozenreach, neonstrip, deadzone, asteroidbelt, forge, salvageyard

| Zone | Display Name | Fuel Cost | Features |
|------|-------------|-----------|----------|
| home | HOME | 0 | The Professor (shop + dialogue) |
| ratpile | THE RATPILE | 0 | Combat only, no mining |
| scrapyard | SCRAP FIELDS | 5 | Combat + mining |
| oldbattlefield | OLD BATTLEFIELD | 10 | Combat + mining |
| downtown | DOWNTOWN | 15 | Combat + mining |
| orbitalstation | ORBITAL STATION | 20 | Combat + mining |
| wasteland | WASTELAND | 25 | Combat + mining |
| undercity | UNDERCITY | 30 | Combat + mining |
| industrialzone | INDUSTRIAL ZONE | 35 | Combat + mining |
| frozenreach | FROZEN REACH | 40 | Combat + mining |
| neonstrip | NEON STRIP | 45 | Combat + mining |
| deadzone | DEAD ZONE | 50 | Combat + mining |
| asteroidbelt | ASTEROID BELT | 30 | Mining only |
| forge | THE FORGE | 10 | Forging only |
| salvageyard | MECH GRAVEYARD | 10 | Salvage only |
