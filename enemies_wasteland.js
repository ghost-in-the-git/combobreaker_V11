/**
 * WASTELAND - ENEMY CONFIGURATION (Zone 5)
 *
 * Irradiated scavenger mechs, mutated war machines, and feral
 * drones drifting through the scorched badlands.
 */

const ENEMIES_WASTELAND = [
    {
        name: "Rad Roach Swarm",
        attackName: "Acid Spray",
        element: 'acid',
        defenceType: 'physical',
        attack: 14,
        defence: 2,
        hp: 40,
        xp: 40,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 4,
        scrapChance: 50,
        scrapMin: 3,
        scrapMax: 5
    },
    {
        name: "Dust Crawler",
        attackName: "Crushing Maw",
        element: 'flesh',
        defenceType: 'physical',
        attack: 18,
        defence: 5,
        hp: 46,
        xp: 46,
        appearanceRate: 20,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 3,
        scrapMax: 5
    },
    {
        name: "Irradiated Scavenger",
        attackName: "Corrosive Slash",
        element: 'acid',
        defenceType: 'physical',
        attack: 22,
        defence: 4,
        hp: 44,
        xp: 44,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 3,
        scrapMax: 5
    },
    {
        name: "Sand Stalker",
        attackName: "Phase Lunge",
        element: 'void',
        defenceType: 'physical',
        attack: 28,
        defence: 3,
        hp: 42,
        xp: 42,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 3,
        scrapMax: 5
    },
    {
        name: "Wasteland Brute",
        attackName: "Bone Hammer",
        element: 'flesh',
        defenceType: 'physical',
        attack: 20,
        defence: 9,
        hp: 48,
        xp: 48,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 3,
        scrapMax: 5
    },
    {
        name: "Irradiated Colossus",
        attackName: "Meltdown Slam",
        element: 'acid',
        defenceType: 'physical',
        attack: 30,
        defence: 7,
        hp: 50,
        xp: 50,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 3,
        scrapMax: 5
    }
];
