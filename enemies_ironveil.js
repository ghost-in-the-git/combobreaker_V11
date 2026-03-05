/**
 * THE IRON VEIL - ENEMY CONFIGURATION (Reaper Contract Zone 3)
 *
 * A three-storey barricade of welded wreckage stretching across
 * the corridor. Behind it, a staging ground where enemies mass,
 * regroup, and push forward. Morningstar's orders: go around it.
 */

const ENEMIES_IRONVEIL = [
    {
        name: "Barricade Welder",
        attackName: "Welding Torch",
        element: 'fire',
        defenceType: 'magnetic',
        attack: 55,
        defence: 22,
        hp: 106,
        xp: 106,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Veil Enforcer",
        attackName: "Barricade Slam",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 68,
        defence: 24,
        hp: 110,
        xp: 110,
        appearanceRate: 18,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Staging Ground Raider",
        attackName: "Breach Charge",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 80,
        defence: 16,
        hp: 108,
        xp: 108,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Scrap Wall Titan",
        attackName: "Iron Crush",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 65,
        defence: 34,
        hp: 114,
        xp: 114,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Breach Denial Unit",
        attackName: "Denial Pulse",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 90,
        defence: 28,
        hp: 112,
        xp: 112,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Iron Veil Warden",
        attackName: "Fortification Strike",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 92,
        defence: 38,
        hp: 118,
        xp: 118,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    }
];
