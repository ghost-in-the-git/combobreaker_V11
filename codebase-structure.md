# Codebase Structure - Detailed

## Game Systems

### Combat
- Waves spawn every 5s, 30s to engage/decline
- Turn-based: player attacks all enemies, then enemies attack back
- Damage = attack - defence (min 1)
- Combo stat = % chance for bonus hits
- Regen stat = HP recovered per combat turn
- Speed stat affects turn order
- Defeat: deaths++, respawn at half HP

### Mining
- 15% chance per wave to get mining event
- Asteroid has: mineral, depth (feet), stability (HP), stabilityLoss (per turn)
- Player mines `mining` stat feet per turn
- Reach depth before stability hits 0 = success (collect mineral)
- Failure = asteroid collapses, player takes damage

### Encounters/Shops
- 20% chance per wave for shop encounter
- 3 item slots per shop
- Items cost Silicon or minerals
- First encounter with named vendor unlocks its location as a destination
- The Forger uses mineral dropdown instead of fixed slots
- Abandoned Monolith uses salvage UI (sell items for scrap)
- Encounters with `autoEngage: true` skip the Engage/Decline buttons

### Dialogue System
- Encounters can have a `dialogue` array of `{ question, response }` objects
- Dialogue buttons render inline in chat alongside the shop panel
- Clicking a question shows it as a player message, then the NPC response
- Buttons re-render after each answer (always available, not one-time)
- Buttons cleaned up on encounter end
- Currently used by The Professor (8 dialogue options: lore + gameplay hints)

### Leveling
- Spend Silicon = xpToLevel to upgrade ONE stat by +1
- Also: level++, maxHp++, xpToLevel *= 1.5
- Starting xpToLevel = 10

### Salvage System
- Abandoned Monolith encounter (`isSalvageYard: true`)
- Player selects unequipped items from inventory to sell
- Items sold for scrap currency
- Scrap used for forging costs and some shop purchases

## File Naming Conventions
- `enemies_[zone].js` — ENEMIES_[ZONE] constant (e.g., ENEMIES_SCRAPYARD)
- `encounters_[zone].js` — ENCOUNTERS_[ZONE] constant
- `ambush_[zone].js` — AMBUSH_[ZONE] constant
- `mining_[zone].js` — MINING_[ZONE] constant

## Key Functions in index.html
- `purchaseItem(index)` — handles shop purchases (Silicon, minerals, scrap)
- `updateShopUI()` — renders shop slots with affordability checks
- `updateStats()` — recalculates all player stats from base + equipment
- `getForgerSlotsForMineral(name)` — maps mineral to equipment types
- `getForgerItem(mineral, slotType)` — finds forger item by mineral + type
- `updateForgeDropdown()` — populates forge mineral selector
- `onForgeMineralChange()` — handles forge dropdown selection
- `generateShopItems(encounter)` — creates shop inventory from encounter config
- `findShopItem(name)` — searches ITEMS, STORY_ITEMS, REFINED_MINERALS, FORGER_ITEMS
- `getMineralCount(mineral, category)` — counts minerals in inventory
- `removeMinerals(mineral, category, count)` — removes minerals from inventory
- `addMineral(name, category)` — adds mineral to inventory
- `showDialogueButtons(encounter)` — renders dialogue option buttons in chat
- `engageEncounter()` — opens shop, triggers dialogue if available
- `endShopEncounter()` — cleans up shop, dialogue buttons, resets state
- `upgradeStat(stat)` — spend Silicon to level up and increase a stat
- `getXpBonus()` — calculates Silicon bonus from equipped processor

## Encounter Config Properties
| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Display name |
| `type` | string | Always "shop" for encounters |
| `discoverable` | bool | Can be found as a destination |
| `autoEngage` | bool | Skip Engage/Decline, open shop immediately |
| `isForge` | bool | Uses forge mineral dropdown UI |
| `isSalvageYard` | bool | Uses salvage sell UI |
| `description` | string | First-time encounter text |
| `engageText` | string | First-time engage text |
| `discoveredDescription` | string | Return visit encounter text |
| `discoveredEngageText` | string | Return visit engage text |
| `dialogue` | array | `[{ question, response }]` for dialogue buttons |
| `appearanceRate` | number | Spawn weight (100 = guaranteed) |
| `minLevel` | number | Minimum player level to appear |
| `itemSlot1/2/3` | array | Item names available in shop |
