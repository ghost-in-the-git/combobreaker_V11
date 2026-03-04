/**
 * ORBITAL STATION - ENEMY CONFIGURATION (Zone 4)
 *
 * Rogue drones, hijacked defense turrets, and void-adapted
 * combat platforms prowling the station's derelict corridors.
 */

const ENEMIES_ORBITALSTATION = [
    {
        name: "Micro Drone Cluster",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 10,
        defence: 2,
        hp: 30,
        xp: 30,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 4,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 4
    },
    {
        name: "Station Security Bot",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 14,
        defence: 4,
        hp: 34,
        xp: 34,
        appearanceRate: 20,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 4
    },
    {
        name: "Void Welder",
        element: 'void',
        defenceType: 'magnetic',
        attack: 18,
        defence: 3,
        hp: 32,
        xp: 32,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 4
    },
    {
        name: "Orbital Sentry",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 16,
        defence: 6,
        hp: 38,
        xp: 38,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 4
    },
    {
        name: "Zero-G Interceptor",
        element: 'cryo',
        defenceType: 'magnetic',
        attack: 22,
        defence: 4,
        hp: 36,
        xp: 36,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 4
    },
    {
        name: "Hijacked Defense Turret",
        element: 'fire',
        defenceType: 'magnetic',
        attack: 25,
        defence: 7,
        hp: 40,
        xp: 40,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 4
    }
];
