/**
 * INDUSTRIAL ZONE - ENEMY CONFIGURATION (Zone 7)
 *
 * Malfunctioning factory bots, rogue assembly drones, and
 * overclocked production mechs guarding the refinery lines.
 */

const ENEMIES_INDUSTRIALZONE = [
    {
        name: "Assembly Drone",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 24,
        defence: 6,
        hp: 60,
        xp: 60,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 5,
        scrapMax: 7
    },
    {
        name: "Loader Mech",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 20,
        defence: 10,
        hp: 66,
        xp: 66,
        appearanceRate: 18,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 5,
        scrapMax: 7
    },
    {
        name: "Arc Welder Unit",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 35,
        defence: 6,
        hp: 62,
        xp: 62,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 5,
        scrapMax: 7
    },
    {
        name: "Furnace Guardian",
        element: 'fire',
        defenceType: 'magnetic',
        attack: 30,
        defence: 12,
        hp: 68,
        xp: 68,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 5,
        scrapMax: 7
    },
    {
        name: "Overclocked Foreman",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 40,
        defence: 9,
        hp: 64,
        xp: 64,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 5,
        scrapMax: 7
    },
    {
        name: "Reactor Sentinel",
        element: 'fire',
        defenceType: 'magnetic',
        attack: 45,
        defence: 15,
        hp: 70,
        xp: 70,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 5,
        scrapMax: 7
    }
];
