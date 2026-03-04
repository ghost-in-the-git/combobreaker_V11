/**
 * ENEMY CONFIGURATION
 *
 * Edit this file to add, remove, or modify enemy types.
 *
 * Each enemy has the following properties:
 * - name: Display name in battle
 * - attack: Damage dealt to player per hit
 * - defence: Damage blocked from player attacks
 * - hp: Health points (hits needed to destroy)
 * - xp: Experience points gained when killed
 * - appearanceRate: Relative chance to appear (higher = more common)
 * - minLevel: Minimum player level for this enemy to appear
 * - squadMin: Minimum number of enemies in a wave
 * - squadMax: Maximum number of enemies in a wave
 */

/* LEVELS 1-10 */

const ENEMIES = [
    {
        name: "T1 Scout",
        attack: 2,
        defence: 0,
        hp: 1,
        xp: 2,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 4
    },
    {
        name: "T1 Heavy Tank",
        attack: 1,
        defence: 4,
        hp: 10,
        xp: 10,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2
    },
    {
        name: "T1 Enforcer",
        attack: 5,
        defence: 2,
        hp: 5,
        xp: 5,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3
    },
    {
        name: "T1 Sentinel",
        attack: 5,
        defence: 5,
        hp: 25,
        xp: 25,
        appearanceRate: 8,
        minLevel: 1,
        squadMin: 1,
        squadMax: 4
    },
        {
        name: "T1 Nano Swarm",
        attack: 1,
        defence: 0,
        hp: 1,
        xp: 1,
        appearanceRate: 3,
        minLevel: 1,
        squadMin: 5,
        squadMax: 10
    },
          {
        name: "T1 Assassin",
        attack: 30,
        defence: 0,
        hp: 10,
        xp: 30,
        appearanceRate: 3,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1
    }
];
