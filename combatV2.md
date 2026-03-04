# Combat V2 — Player Action System

## Overview

Each combat round, **before breakers roll**, the player picks one of four actions:

```
[HEAVY]  [LIGHT]  [RANGED]  [REGEN]
```

The choice shapes the round — what the player does, what stats matter, and what they sacrifice. Every action costs fuel, so the player is always spending a resource to fight.

---

## Current Round Flow (V1)

```
1. TURN X announced
2. Breaker procs roll (speed, combo, strike, crush, war)
3. Player attacks (ATK vs enemy DEF, breaker modifiers apply)
4. Enemy attacks back (all remaining enemies, DEF absorbs → HP)
5. Defensive breakers roll per hit (vision, soul, shield)
6. End-of-round regen + painbreaker
7. DEF restores
```

Everything is automatic. Player has no input once combat starts.

---

## Proposed Round Flow (V2)

```
1.  TURN X announced
2.  [HEAVY] [LIGHT] [RANGED] [REGEN] buttons appear — player picks (fuel deducted)
3.  Action resolves (modifies ATK, DEF, hits, regen for this round)
4.  Breaker procs roll (same as before — action choice doesn't replace breakers)
5.  Player attacks with action modifiers applied
6.  Enemies attack back with action modifiers applied
7.  Defensive breakers roll per hit (same)
8.  End-of-round HP regen + painbreaker
9.  DEF restores
10. Fuel regen: +level fuel recovered (capped at max)
```

The key change: **the player makes a tactical choice each round** that feeds into the existing combat math.

---

## Fuel Economy Context

Fuel is the player's core resource. It governs everything:

- **Max fuel:** 100
- **Out-of-combat regen:** +1 per second (full tank in ~100 seconds)
- **In-combat regen:** +level per round (at end of round, after DEF restores)
- **Travel:** 0–100 fuel depending on zone distance
- **Evade (pre-combat):** 50 fuel to dodge a wave entirely

### Out-of-combat fuel regen

Changed from +1 per 3 seconds to **+1 per second**. Faster recovery between fights means the player spends less time waiting and more time making decisions. Travel and evade still drain the tank — the player just refills quicker.

### In-combat fuel regen

At the end of each combat round, the player recovers fuel equal to their **level**. This replaces the old real-time regen (which is paused during combat).

- **Level 1:** +1 fuel per round — barely anything, every action costs real fuel
- **Level 5:** +5 fuel per round — HEAVY costs net 0, RANGED is free, REGEN profits
- **Level 10:** +10 fuel per round — comfortable, can sustain HEAVY indefinitely
- **Level 20+:** +20 fuel per round — fuel surplus, player is rewarded for progression

This means **early game combat is expensive** — a new player picking HEAVY every round will drain fast. But as the player levels up, fuel becomes less punishing and the action system becomes about tactics, not scarcity. High-level players can focus on which action is *best* rather than which one they can *afford*.

The level-based regen also gives levelling a tangible combat reward beyond raw stats. Every level-up makes every fight a little cheaper.

Combat actions now **burn fuel every round**. A 5-round fight isn't free anymore — it's an investment. The player has to weigh whether the silicon/drops are worth the fuel they'll burn getting them, and whether to spend big on HEAVY/RANGED or conserve with LIGHT/REGEN.

Running dry mid-fight means you're stuck on LIGHT (free but vanilla). Running dry after a fight means you can't travel or evade — you're pinned down. But the higher your level, the more fuel you recover each round — so progression naturally eases the pressure.

---

## The Four Actions

### [HEAVY] — All-in power strike

- **Fuel cost:** 5
- **ATK multiplier:** 1.5x base damage
- **DEF penalty:** DEF halved this round
- **Hits:** 1 (single target)
- **Regen:** None (same as LIGHT/RANGED — only REGEN mods heal)
- **Flavour:** "You drop your guard and swing with everything."

Best for: Finishing off a tough enemy, high-risk burst. Expensive — 5 rounds of HEAVY costs 25 fuel (a quarter of your tank).

### [LIGHT] — Fast, balanced attack

- **Fuel cost:** 0
- **ATK multiplier:** 1x base damage
- **DEF penalty:** None
- **Hits:** 1 (single target)
- **Regen:** None (must use REGEN mod to heal in combat)
- **Flavour:** "Quick strike. Keep your guard up."

Best for: Default safe option, consistent damage with full defence. Free — the only action you can always afford. Also the auto-pick if you don't choose in time.

### [RANGED] — Suppressive spread

- **Fuel cost:** 3
- **ATK multiplier:** 0.5x base damage
- **DEF penalty:** None
- **Hits:** All enemies (AoE — each enemy takes the reduced damage)
- **Regen:** None (must use REGEN mod to heal in combat)
- **Flavour:** "Weapons free. Hit everything that moves."

Best for: Softening up or finishing groups, works like a manual crushbreaker. Cheaper than HEAVY — you can sustain it longer, but you're paying for spread, not power.

### [LIGHT] vs [RANGED] scaling note

Light rewards single-target focus (full damage, no fuel cost). Ranged sacrifices per-target damage and spends fuel for AoE spread. Against 1 enemy, Light is strictly better. Against 4+, Ranged can outperform in total damage dealt across the wave — but it'll cost you.

### [REGEN] — Hunker down and repair

- **Fuel cost:** 2
- **ATK multiplier:** 0x (no attack this round)
- **DEF bonus:** DEF doubled this round
- **Hits:** 0 (no attack)
- **Regen:** 2x regen stat (only way to heal HP in combat)
- **Flavour:** "You pull back and reroute power to repair systems."

Best for: Surviving a bad round, recovering HP against a large squad. Cheap — you're paying for survival, not damage. Still costs something because free healing with zero risk would be broken.

---

## Action Summary Table

| Action   | Fuel | ATK     | DEF         | Hits       | Regen              |
|----------|------|---------|-------------|------------|--------------------|
| HEAVY    | 5    | 1.5x   | 0.5x        | 1 (single) | None               |
| LIGHT    | 0    | 1.0x   | 1.0x        | 1 (single) | None               |
| RANGED   | 3    | 0.5x   | 1.0x        | All (AoE)  | None               |
| REGEN    | 2    | 0x     | 2.0x        | 0 (none)   | 2x regen stat      |

### Fuel Budget Examples

A typical fight is 3–8 rounds. Net fuel = cost - (level × rounds recovered).

**Level 1 player** (recovers +1/round — fuel is tight):

| Strategy | Rounds | Gross cost | Recovered | Net cost | Notes |
|----------|--------|------------|-----------|----------|-------|
| All LIGHT | 6 | 0 | 6 | +6 gain | Free + small regen bonus |
| All HEAVY | 4 | 20 | 4 | 16 | Expensive early — real commitment |
| HEAVY opener → LIGHT | 6 | 5–10 | 6 | ~0–4 | Efficient burst + coast |
| RANGED spam vs 4-squad | 5 | 15 | 5 | 10 | AoE works but burns fuel |

**Level 5 player** (recovers +5/round — fuel pressure eases):

| Strategy | Rounds | Gross cost | Recovered | Net cost | Notes |
|----------|--------|------------|-----------|----------|-------|
| All LIGHT | 6 | 0 | 30 | +30 gain | Fuel-positive — prints fuel |
| All HEAVY | 4 | 20 | 20 | 0 | HEAVY is now free at level 5 |
| RANGED spam vs 4-squad | 5 | 15 | 25 | +10 gain | AoE is profitable |

**Level 10+ player** (recovers +10/round — fuel is abundant):

Every strategy is fuel-positive. The action system becomes purely tactical — pick the *best* action, not the cheapest.

**Post-fight recovery:** Out-of-combat regen is +1/sec, so a 20-fuel deficit refills in 20 seconds. Fast enough that the player isn't waiting around, but still noticeable after a costly fight.

---

## How Actions Interact With Breakers

Actions apply **before** breaker rolls. Breakers still multiply on top of the action modifiers:

- **HEAVY + Combobreaker:** 1.5x × 2 = 3x damage (devastating)
- **HEAVY + Warbreaker escalation:** 1.5x × 4 = 6x damage (4 strikes)
- **RANGED + Crushbreaker:** Both AoE — crushbreaker still fires on top, stacking AoE
- **REGEN + Shieldbreaker:** 2x DEF doubled again = 4x DEF (fortress mode)
- **REGEN + Painbreaker:** 2x regen + painbreaker heal = massive recovery turn
- **LIGHT + Speedbreaker:** 2 attacks at full damage — best sustained DPS
- **Strikebreaker** ignores enemy DEF regardless of action — works with all four

The breaker system rewards every action type. No choice is a dead-end.

---

## UI Implementation

### Button Layout

Four buttons appear in the chat flow (same pattern as current Engage/Evade buttons):

```html
<div class="action-btn-container combat-actions">
    <button class="action-btn heavy">[HEAVY]</button>
    <button class="action-btn light">[LIGHT]</button>
    <button class="action-btn ranged">[RANGED]</button>
    <button class="action-btn regen">[REGEN]</button>
</div>
```

### Button Styling

Each action gets its own colour from the existing palette:

- **HEAVY:** Red/orange (`#ff4444` border) — danger, aggression
- **LIGHT:** Green (`#00ff88` border) — same as current Engage
- **RANGED:** Blue (`#4488ff` border) — ranged/tactical
- **REGEN:** Yellow/gold (`#ffcc00` border) — recovery/shield

Each button shows its fuel cost inline: `[HEAVY -5]`, `[LIGHT]`, `[RANGED -3]`, `[REGEN -2]`. Buttons that cost more fuel than the player currently has are **disabled** (greyed out, unclickable). LIGHT is always available since it's free.

### Flow

1. `battleRound()` pauses at the top and shows the 4 buttons
2. Buttons whose fuel cost exceeds `game.player.fuel` are disabled
3. Player clicks one → fuel deducted immediately → stored as `wave.chosenAction`
4. Buttons disappear, round proceeds with modifiers applied
5. Next round, buttons reappear (re-check fuel for disable state)

### Timeout / Auto-pick

If the player doesn't choose within **60 seconds**, auto-select `[LIGHT]` (safe default, zero fuel cost). Show countdown on the buttons or a small timer. Fuel regen is **paused** for the entire duration of combat — including while waiting for action selection — so the player can't stall to recover fuel between rounds. Auto-pick is always LIGHT because it's the only action guaranteed to be affordable.

---

## Implementation Notes

### What changes in `battleRound()`

1. **Top of function:** await player action choice (show buttons, return a Promise that resolves on click)
2. **Fuel deduction:** immediately subtract fuel cost on click, call `updateStats()` to refresh fuel bar
3. **Button disable check:** before showing buttons, disable any action where `fuelCost > game.player.fuel`
4. **Damage calc:** multiply `playerDamage` by action ATK modifier before breakers
5. **Attack loop:** if RANGED, loop over all enemies instead of single target. If REGEN, skip attack entirely
6. **Defence phase:** apply DEF modifier from action before shieldbreaker
7. **Regen phase:** if REGEN mod, apply 2x regen before painbreaker check. All other actions skip regen
8. **DEF restore:** no changes
9. **Fuel regen:** after DEF restore, add `game.player.level` fuel (capped at `maxFuel`), show message: `+N FUEL [REACTOR]`, call `updateStats()`

### What changes in `startFuelRegen()`

Change the interval from 3000ms to **1000ms** (+1 fuel per second instead of +1 per 3 seconds). Single line change.

### What stays the same

- Breaker proc logic (unchanged — rolls after action, multiplies on top)
- Enemy attack sequence (unchanged — all enemies still attack each round)
- Visionbreaker / Soulbreaker (unchanged — per-hit defensive rolls)
- End-of-battle rewards, mission tracking, scrap drops
- The Engage/Evade pre-combat buttons (unchanged)

### Action cost constants

```javascript
const ACTION_FUEL_COST = { heavy: 5, light: 0, ranged: 3, regen: 2 };
```

### New state

- `wave.chosenAction` — string: "heavy" | "light" | "ranged" | "regen"
- No persistent state needed — choice resets each round
- Fuel is already tracked in `game.player.fuel` — no new state needed for costs

---

## Open Questions

1. **Should RANGED damage split or duplicate?** Current plan: each enemy takes 0.5x damage individually (not split across count). So 4 enemies each take half damage = 2x total damage dealt. This makes RANGED scale with enemy count.

2. **Should HEAVY crit?** Could add a flat crit chance (e.g. 20%) on HEAVY that deals 2x instead of 1.5x. Adds gambling element. Or keep it clean at 1.5x.

3. **Boss fights:** Single enemy — RANGED becomes pointless (0.5x to one target for 3 fuel). Should bosses get a bonus for RANGED? Or is it fine that LIGHT/HEAVY are the boss picks and RANGED is the wave pick?

4. **Speed stat interaction:** Currently speed only affects wave spawn timer. Should speed reduce the action timeout? e.g. base 10s, -0.5s per speed point? Or should speed give a bonus hit on LIGHT?

5. **Flavour messages:** Each action should have 3-5 random combat messages. e.g. HEAVY: "You swing with everything — sparks fly as the impact lands." Keep them short.

6. **Fuel regen during combat?** DECIDED: Real-time fuel regen (the 1/sec interval) is paused during combat. Instead, the player recovers **+level fuel at end of each round**. This means early levels feel fuel-tight, mid levels break even, and high levels are fuel-abundant. `startFuelRegen()` is already cleared in `engageBattle()` and restarted in `endBattle()`, so the pause works out of the box — just add the per-round regen step.

7. **Speed stat reduces fuel costs?** Could make speed reduce action fuel costs by a flat amount (e.g. -1 per 5 speed). So a fully geared speed build (10 SPD) would pay 3 for HEAVY instead of 5, 1 for RANGED instead of 3. Rewards speed investment with fuel efficiency. Or keep it simple — flat costs for everyone.
