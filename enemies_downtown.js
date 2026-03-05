/**
 * DOWNTOWN - ENEMY CONFIGURATION (Zone 3)
 *
 * Corporate security mechs, street-modded combat rigs, and
 * black-market enforcers patrolling the neon-lit urban sprawl.
 */

const ENEMIES_DOWNTOWN = [
    {
        name: "Street Modder",
        attackName: "Jury-Rigged Blast",
        element: 'flesh',
        defenceType: 'physical',
        attack: 7,
        defence: 1,
        hp: 20,
        xp: 20,
        appearanceRate: 25,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 3
    },
    {
        name: "Corp Security Drone",
        attackName: "Taser Burst",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 10,
        defence: 3,
        hp: 22,
        xp: 22,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 3
    },
    {
        name: "Neon Ronin",
        attackName: "Lightblade Slash",
        element: 'light',
        defenceType: 'physical',
        attack: 14,
        defence: 2,
        hp: 24,
        xp: 24,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 3
    },
    {
        name: "Sentinel",
        attackName: "Railgun Pulse",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 12,
        defence: 4,
        hp: 28,
        xp: 28,
        appearanceRate: 14,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 3
    },
    {
        name: "Corporate Mech Squad",
        attackName: "Suppression Volley",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 10,
        defence: 5,
        hp: 30,
        xp: 30,
        appearanceRate: 10,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 3
    },
    {
        name: "Black Market Enforcer",
        attackName: "Gut Punch",
        element: 'flesh',
        defenceType: 'physical',
        attack: 18,
        defence: 4,
        hp: 26,
        xp: 26,
        appearanceRate: 5,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1,
        scrapChance: 45,
        scrapMin: 2,
        scrapMax: 3
    }
];
