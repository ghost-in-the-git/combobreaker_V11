# Breaker System

Every breaker power is gated behind owning the corresponding **decrypted key** (the pilot's soul, released from their sealed key via the Decrypter). Without the key, the breaker never rolls.

## Proc Chance

All breakers share the same proc chance: the player's **breaker stat** (displayed as a percentage). Each breaker rolls independently against this value.

**Skybreaker** (Mapmaker's Skybreaker Key) is the exception — it is not a proc. It is a passive multiplier that **doubles the effective breaker chance** for all other breakers, capped at 100%. A player with 20% breaker and Skybreaker has a 40% chance on every roll.

```
getBreaker() = hasSkybreaker ? min(baseBreaker * 2, 100) : baseBreaker
```

## Combat Breakers

These trigger during the combat round in `combatRound()`.

### Start of Turn (Player Attack Phase)

All four of these roll at the **start of each turn**, before any attacks resolve:

| Breaker | Key | Effect |
|---|---|---|
| **Speedbreaker** | Wire's Speedbreaker Key | Player attacks **twice** this turn instead of once |
| **Combobreaker** | Your Combobreaker Key | Player damage is **doubled** this turn |
| **Strikebreaker** | Fang's Strikebreaker Key | Enemy **defence is ignored** for damage calculation |
| **Crushbreaker** | Anvil's Crushbreaker Key | Player damage hits **all enemies** in the wave (AoE). If damage >= enemy HP, background enemies are instantly killed. Otherwise they each take the damage value |

**Warbreaker** (Rex's Warbreaker Key) rolls only if **Speedbreaker or Combobreaker already triggered** this turn. If it procs:
- Speedbreaker escalates from 2 attacks to **4 attacks**
- Combobreaker escalates from 2x damage to **4x damage**
- Both can escalate simultaneously

```
attackCount = speedTriggered ? (warTriggered ? 4 : 2) : 1
playerDamage = baseDamage * (comboTriggered ? (warTriggered ? 4 : 2) : 1)
```

### Enemy Attack Phase (Per-Enemy)

These roll **once per enemy attack**, inside the enemy attack loop:

| Breaker | Key | Effect |
|---|---|---|
| **Visionbreaker** | Ghost's Visionbreaker Key | Attack is **completely avoided** (the attack misses, no damage taken) |
| **Soulbreaker** | Null's Soulbreaker Key | Attack is **parried** — the enemy's own attack damage is reflected back at them. Can kill the attacker. Only triggers if Visionbreaker did not trigger on this attack |

Priority: Visionbreaker is checked first. If it triggers, the attack is skipped entirely (Soulbreaker never rolls). If Visionbreaker doesn't trigger, Soulbreaker is checked.

### Defence Phase

Rolls **once per turn**, after player attacks resolve and before enemy attacks:

| Breaker | Key | Effect |
|---|---|---|
| **Shieldbreaker** | Sarge's Shieldbreaker Key | Player **defence is doubled** for the entire enemy attack sequence this turn |

### End of Turn

Rolls **once per turn**, after all attacks resolve:

| Breaker | Key | Effect |
|---|---|---|
| **Painbreaker** | Frost's Painbreaker Key | Player regains HP equal to their **regen stat** (bonus heal on top of normal end-of-round regen). Only rolls if player has regen > 0 and HP < max HP |

## Post-Battle Breakers

These trigger in `endBattle()` after a victory.

| Breaker | Key | When | Effect |
|---|---|---|---|
| **Powerbreaker** | Ace's Powerbreaker Key | After all enemies killed | **Doubles total silicon earned** from the entire fight |
| **Steelbreaker** | Chunk's Steelbreaker Key | After scrap drop roll succeeds | **Doubles scrap amount** salvaged from the wreckage |

## Mining Breaker

Triggers during mining in the mining drill loop, after each extraction cycle.

| Breaker | Key | Effect |
|---|---|---|
| **Stonebreaker** | Bolt's Stonebreaker Key | Adds the player's **mining stat to asteroid stability**, counteracting stability loss. Bolt reinforces the rock |

## Ambush Evasion

**Speedbreaker** has a secondary use outside of combat. When ambushed, the player can attempt to evade. Evasion rolls the breaker chance and requires the Speedbreaker key:
- **Success**: Ambush avoided entirely, no combat
- **Failure**: Forced into combat, no escape

Boss encounters can always be evaded (100% evasion, no roll needed).

## Turn Order Summary

```
1. New turn starts
2. Roll: Speedbreaker, Combobreaker, Strikebreaker, Crushbreaker
3. Roll: Warbreaker (only if Speed or Combo triggered)
4. Player attacks (1x, 2x, or 4x) with modified damage
5. Crushbreaker AoE resolves on first attack
6. Roll: Shieldbreaker (defence doubled for enemy phase)
7. Each enemy attacks:
   a. Roll: Visionbreaker (dodge)
   b. Roll: Soulbreaker (parry, only if Vision didn't trigger)
   c. Apply damage against remaining defence
8. Normal end-of-turn regen
9. Roll: Painbreaker (bonus regen)
10. Next turn or battle ends
```

## Post-Victory

```
1. Roll: Powerbreaker (double silicon)
2. Silicon awarded
3. Item drop roll
4. Scrap drop roll
5. Roll: Steelbreaker (double scrap, only if scrap dropped)
```
