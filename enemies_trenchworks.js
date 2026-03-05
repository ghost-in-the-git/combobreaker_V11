/**
 * THE TRENCHWORKS - ENEMY CONFIGURATION (Reaper Contract Zone 1)
 *
 * A fortified trench network dug into the kill corridor floor.
 * Decades of autonomous fortification — layered armour, turret nests,
 * overlapping fields of fire. Morningstar marked it "cleared."
 */

const ENEMIES_TRENCHWORKS = [
    {
        name: "Entrenched Sentry",
        attackName: "Foxhole Burst",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 48,
        defence: 18,
        hp: 95,
        xp: 95,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 4,
        scrapChance: 50,
        scrapMin: 9,
        scrapMax: 11
    },
    {
        name: "Trench Gunner",
        attackName: "Suppressing Fire",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 58,
        defence: 14,
        hp: 98,
        xp: 98,
        appearanceRate: 18,
        minLevel: 1,
        squadMin: 2,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 9,
        scrapMax: 11
    },
    {
        name: "Burrower Frame",
        attackName: "Drill Charge",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 55,
        defence: 20,
        hp: 100,
        xp: 100,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 9,
        scrapMax: 11
    },
    {
        name: "Turret Nest Controller",
        attackName: "Chain Lightning",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 70,
        defence: 12,
        hp: 96,
        xp: 96,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 9,
        scrapMax: 11
    },
    {
        name: "Armoured Dugout Guard",
        attackName: "Fortified Shot",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 60,
        defence: 28,
        hp: 104,
        xp: 104,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 9,
        scrapMax: 11
    },
    {
        name: "Trenchmaster",
        attackName: "Artillery Call",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 82,
        defence: 32,
        hp: 108,
        xp: 108,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 9,
        scrapMax: 11
    }
];
