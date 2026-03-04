/**
 * SIGNAL POINT - ENEMY CONFIGURATION (Reaper Contract Zone 4)
 *
 * A relay tower at the far end of the kill corridor. Broadcasts
 * formation data, target priorities, and reinforcement schedules
 * for every hostile on the frontline. Morningstar said "monitor,
 * do not engage." The Reaper said otherwise.
 */

const ENEMIES_SIGNALPOINT = [
    {
        name: "Relay Guard",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 58,
        defence: 20,
        hp: 112,
        xp: 112,
        appearanceRate: 22,
        minLevel: 1,
        squadMin: 2,
        squadMax: 3,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Signal Scrambler",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 72,
        defence: 18,
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
        name: "Frequency Hunter",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 88,
        defence: 16,
        hp: 110,
        xp: 110,
        appearanceRate: 16,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2,
        scrapChance: 50,
        scrapMin: 10,
        scrapMax: 12
    },
    {
        name: "Uplink Sentinel",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 75,
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
        name: "Broadcast Override",
        element: 'volt',
        defenceType: 'magnetic',
        attack: 95,
        defence: 32,
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
        name: "Signal Point Commander",
        element: 'steel',
        defenceType: 'magnetic',
        attack: 98,
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
