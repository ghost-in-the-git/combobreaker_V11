/**
 * SCRAP YARD - ENEMY CONFIGURATION
 *
 * Junked mechs, rogue drones, and scavenger bots prowling the wreckage.
 * Lower-tier enemies, good for early game.
 */

const ENEMIES_SCRAPYARD = [
    {
        name: "Scout",
        attackName: "Scrap Bolt",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 2,
        defence: 0,
        hp: 2,
        xp: 2,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 4,
        scrapChance: 40,
        scrapMin: 1,
        scrapMax: 1
    },
    {
        name: "Heavy Tank",
        attackName: "Cannon Shot",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 1,
        defence: 2,
        hp: 9,
        xp: 9,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 40,
        scrapMin: 1,
        scrapMax: 1
    },
    {
        name: "Enforcer",
        attackName: "Steel Slug",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 5,
        defence: 1,
        hp: 6,
        xp: 6,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 40,
        scrapMin: 1,
        scrapMax: 1
    },
    {
        name: "Scrap Drone",
        attackName: "Arc Zap",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 3,
        defence: 0,
        hp: 4,
        xp: 4,
        appearanceRate: 25,
        minLevel: 1,
        squadMin: 2,
        squadMax: 5,
        scrapChance: 40,
        scrapMin: 1,
        scrapMax: 1
    },
    {
        name: "Junkyard Golem",
        attackName: "Scrap Slam",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 6,
        defence: 3,
        hp: 8,
        xp: 8,
        appearanceRate: 8,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 40,
        scrapMin: 1,
        scrapMax: 1
    },
    {
        name: "Destroyer",
        attackName: "Incendiary Barrage",
        element: 'fire',
        defenceType: 'magnetic',
        attack: 10,
        defence: 5,
        hp: 10,
        xp: 10,
        appearanceRate: 3,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 40,
        scrapMin: 1,
        scrapMax: 1
    }
];
