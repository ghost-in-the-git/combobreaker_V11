/**
 * THE FRONTLINE - ENEMY CONFIGURATION (Zone 12)
 *
 * Active military staging ground. Piloted combobreakers patrol
 * in formation — the same forces that killed you. They remember.
 */

const ENEMIES_FRONTLINE = [
    {
        name: "Patrol Frame",
        attackName: "Gatling Burst",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 55,
        defence: 15,
        hp: 110,
        xp: 110,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Enforcer Mech",
        attackName: "Heavy Slug",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 65,
        defence: 20,
        hp: 114,
        xp: 114,
        appearanceRate: 18,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Shock Lancer",
        attackName: "Volt Spear",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 85,
        defence: 16,
        hp: 112,
        xp: 112,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Siege Breaker",
        attackName: "Siege Round",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 70,
        defence: 30,
        hp: 116,
        xp: 116,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Black Ops Frame",
        attackName: "Shadow Strike",
        element: 'void',
        defenceType: 'magnetic',
        attack: 100,
        defence: 35,
        hp: 118,
        xp: 118,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Squadron Commander",
        attackName: "Command Salvo",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 90,
        defence: 40,
        hp: 120,
        xp: 120,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    }
];
