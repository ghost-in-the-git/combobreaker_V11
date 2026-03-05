/**
 * UNDERCITY - ENEMY CONFIGURATION (Zone 6)
 *
 * Tunnel rats, sewer drones, and black-ops units lurking
 * in the labyrinth beneath the streets.
 */

const ENEMIES_UNDERCITY = [
    {
        name: "Tunnel Rat",
        attackName: "Feral Lunge",
        element: 'flesh',
        defenceType: 'physical',
        attack: 18,
        defence: 4,
        hp: 50,
        xp: 50,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 4,
        scrapChance: 50,
        scrapMin: 4,
        scrapMax: 6
    },
    {
        name: "Sewer Drone",
        attackName: "Toxic Jet",
        element: 'acid',
        defenceType: 'magnetic',
        attack: 22,
        defence: 6,
        hp: 56,
        xp: 56,
        appearanceRate: 18,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 4,
        scrapMax: 6
    },
    {
        name: "Pipe Lurker",
        attackName: "Shadow Grab",
        element: 'void',
        defenceType: 'physical',
        attack: 28,
        defence: 5,
        hp: 54,
        xp: 54,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 4,
        scrapMax: 6
    },
    {
        name: "Black-Ops Infiltrator",
        attackName: "EMP Spike",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 35,
        defence: 4,
        hp: 52,
        xp: 52,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 4,
        scrapMax: 6
    },
    {
        name: "Chem Sprayer",
        attackName: "Acid Flood",
        element: 'acid',
        defenceType: 'magnetic',
        attack: 25,
        defence: 9,
        hp: 58,
        xp: 58,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 4,
        scrapMax: 6
    },
    {
        name: "Subterranean Warden",
        attackName: "Crushing Lockdown",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 38,
        defence: 12,
        hp: 60,
        xp: 60,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 4,
        scrapMax: 6
    }
];
