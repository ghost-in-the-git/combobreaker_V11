# Player & Enemy Combat Logic Alignment

## RESOLVED — Changes Implemented

Decided: **Option 1 — full symmetry**. Remove minimum 1 damage, align narration both ways.

---

## What Changed

### 1. Minimum damage floor removed

`calculateDamage()` now returns `Math.max(0, attack - defence)` instead of `Math.max(1, ...)`.

If the enemy's DEF is higher than the player's raw attack, **0 damage is dealt**. The player needs to gear up, level up, or rely on breaker procs (Strikebreaker ignores DEF entirely). This makes enemy DEF stats meaningful and matches how player DEF can fully block enemy attacks.

### 2. Damage formula restructured

Before:
```
finalDamage = Math.max(1, attack - defence) * actionMultiplier
```

After:
```
rawAttack = Math.floor(player.attack * actionMultiplier)  // before defence
rawAttack *= breakerMultiplier                             // combobreaker/warbreaker
finalDamage = Math.max(0, rawAttack - enemy.defence)       // defence reduces it
```

Breaker multipliers now apply to raw attack power (before DEF), not after. This means a combobreaker proc can punch through high-DEF enemies that the player normally can't scratch — feels like it should.

### 3. Combat log now narrates identically both ways

**Player → Enemy (NEW):**
```
MECH attacks ENEMY #1 for 40 DMG        ← raw attack announced
ENEMY #1 DEF absorbs 15 - but 25 DMG is dealt   ← partial block
```
or
```
MECH attacks ENEMY #1 for 5 DMG
ENEMY #1 DEF blocks 5 DMG               ← fully blocked, 0 damage
```
or
```
MECH attacks ENEMY #1 for 40 DMG
ENEMY #1 takes 40 DMG                   ← no defence
```

**Enemy → Player (unchanged):**
```
ENEMY #1 attacks MECH for 15 DMG
MECH DEF blocks 15 DMG
```
or
```
MECH DEF absorbs 10 DMG - but 5 DMG is still taken
```
or
```
MECH takes 15 DMG
```

Both sides now: announce raw attack → show defence interaction → show result.

---

## Previous Analysis (for reference)

### The asymmetries that existed

| Aspect | Player → Enemy (OLD) | Enemy → Player |
|--------|---------------------|----------------|
| **Minimum damage** | Always 1+ (even if def > atk) | Can be fully blocked to 0 |
| **Log detail** | Single line, post-reduction only | Multi-line: raw attack → defence → result |
| **Defence visibility** | Enemy DEF was invisible | Player DEF interaction fully narrated |
| **Breaker multiplier** | Applied after DEF reduction | N/A |

All of these are now aligned.
