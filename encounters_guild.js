/**
 * THE GUILD - ENCOUNTER CONFIGURATION
 *
 * A beat-up bar in the deep Undercity tunnels, run by a woman
 * who pours drinks and quietly brokers pilot contracts on the side.
 * The regulars are ex-military — broken, drinking, and for hire.
 *
 * Uses a tier-based dropdown (like the Forger) to browse pilots by tier.
 */

const ENCOUNTERS_GUILD = [
    {
        name: "The Broker",
        characterImage: "images/GUILD.gif",
        type: "shop",
        autoEngage: true,
        description: "A narrow stairwell leads down to a dented steel door. Behind it, the low hum of conversation and the clink of glasses. A hand-painted sign above the frame reads 'THE LAST ROUND'.",
        engageText: "The bar is dim and crowded. Pilots line the counter — some nursing drinks, some staring at nothing. A woman behind the bar wipes a glass with a rag that's seen better days.\n\nShe clocks you immediately. 'Autonomous rig. No pilot.' She sets the glass down. 'You're not here for a drink.'\n\nShe reaches under the counter and pulls out a battered logbook. 'Everyone in here flew something, once. Most of them would rather forget. But they'll sync with your frame if the money's right.' She flips the book open. 'Pick your poison.'",
        discoveredDescription: "The stairwell to The Last Round. You can hear muffled voices and someone arguing about thruster calibration.",
        discoveredEngageText: "She sees you come in and reaches for the logbook before you're halfway across the room. 'Same deal as last time. Let's see who's sober enough.'",
        isBroker: true,
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [
            {
                question: "How do I hire a pilot?",
                response: "'Not that simple.' She leans on the counter. 'You're an autonomous rig. No heartbeat in the cockpit. That makes people nervous.'\n\nShe glances at the room — pilots hunched over drinks, a few playing cards in the back, one asleep with his head on the bar. 'Even the drunk ones have standards. They won't sync with a frame that hasn't proven it can keep them alive.'\n\nShe pulls out a mission dossier and sets it on the bar. 'You want a pilot? Do the work first. Each tier has a job attached — clear it, and those pilots know you're worth strapping into.'\n\nShe taps the logbook. 'Once you've got the clearance, I'll make the introductions. They jack into your neural sync rig, your frame gets the benefit of a real pilot's reflexes. Better sync, better stats across the board.'\n\nShe takes the book back. 'You're not buying loyalty. You're renting a nervous system. But first you earn the right to rent it.'"
            },
            {
                question: "What is this place?",
                response: "She looks around the bar like she's seeing it for the first time. 'A place where people who used to matter come to stop thinking about it.'\n\nShe pours a drink for a pilot at the end of the counter without being asked. He doesn't look up. 'Half of them flew in the Ashfall campaigns. The other half won't tell you what they flew in, which usually means it was worse.'\n\nShe sets the bottle down. 'I keep the lights on, I keep the tabs open, and when someone needs a pilot who won't ask questions, I make introductions.'\n\nA pause. 'The military doesn't want them back. The corporations pretend they don't exist. But they can still fly.' She picks up another glass. 'So I put them to work.'"
            }
        ]
    }
];
