/**
 * THE FRONTLINE - ENCOUNTER CONFIGURATION
 *
 * Active military staging ground. The Herald operates from a
 * fortified foxhole, offering a beacon to draw out the Scorched CM-1 Sovereign.
 * The Reaper holds a forward position deeper in the corridor, offering
 * contracts to push past the line and fight what's actually out there.
 */

const ENCOUNTERS_FRONTLINE = [
    {
        name: "The Reaper",
        characterImage: "images/THE_REAPER.gif",
        type: "shop",
        discoverable: true,
        requires: "DNA Tag: Commander Morningstar",
        description: "A heavy combat mech stands in a shallow crater at the edge of the kill corridor, hull scarred black from years of continuous contact. No squad markings. No IFF. Just a single word stencilled across the shoulder plate in faded white paint: REAPER. It turns its head toward you — slow, deliberate — and opens a channel.",
        engageText: "'Morningstar had us burning empty ground. Levelling positions nobody held. Destroying things that didn't matter so the war looked like it was moving.' The voice is calm, tired, human.\n\n'I stopped taking those orders a long time ago.' A targeting overlay appears on your HUD — enemy positions, real ones, deeper in the corridor.\n\n'I'm offering you a contract. Not Morningstar's kind. No scorched earth. No meaningless destruction. There are enemies out here — actual threats holding actual ground. Help me push them back and I'll make it worth your time.'",
        discoveredDescription: "The Reaper holds position in the same crater, hull dark against the scorched earth. The targeting overlay is already queued on your HUD before you open the channel.",
        discoveredEngageText: "'You came back. Good.' The overlay refreshes — new positions, deeper contacts. 'More of them every day. Morningstar never cared about what was actually out here. I do. You ready to work?'",
        appearanceRate: 12,
        minLevel: 1,
        itemSlot1: ["Reaper's Contract: The Trenchworks"],
        itemSlot2: ["Reaper's Contract: Firebase Harrow"],
        itemSlot3: ["Reaper's Contract: The Iron Veil"],
        itemSlot4: ["Reaper's Contract: Signal Point"],
        dialogue: [
            {
                question: "Who is Morningstar to you?",
                response: "'My CO. Once.' A long silence.\n\n'Morningstar gave the orders and we followed them. Burn this sector. Level that outpost. Destroy everything in grid seven. None of it mattered. No enemy there. No strategic value. Just destruction for its own sake so command could mark ground as taken.'\n\nThe Reaper's targeting array sweeps the horizon. 'I stopped following those orders. Started fighting what was actually in front of me.'"
            },
            {
                question: "What's the contract?",
                response: "'Simple. There are hostiles in the corridor that Morningstar never bothered to engage because they weren't on the objective list. Real enemies. Dug in, armed, and holding ground that matters.'\n\nThe overlay pulses with red contacts. 'I can't clear them alone. You help me push the line forward — actually forward, not Morningstar's version of it — and I'll pay you in gear and intel.\n\nNo scorched earth. No burning empty fields. Just the fight that should have been fought eighty years ago.'"
            }
        ]
    },
    {
        name: "The Herald",
        characterImage: "images/THE_HERALD.gif",
        type: "shop",
        discoverable: true,
        description: "A slight woman in battered combat armour crouches in a reinforced foxhole. Same build. Same hands — fast, precise, not quite human. She watches the ridge where the Sovereign stands with an expression you haven't seen on her before. Something like grief.",
        engageText: "'It's a command mech. A Sovereign.' She lowers the scope. 'It's been standing on that ridge since the war. Broadcasting orders on eleven channels. Formation changes, rally points, fire missions — all for a squad that's been dead for eighty years.'\n\nShe holds up a beacon. 'This spoofs a hostile IFF inside its perimeter. A threat to the squad it thinks it still has.'",
        discoveredDescription: "The Herald hunkers in her foxhole, same slight frame. On the ridge, the Sovereign still stands. The uplink still broadcasts. She watches it like she's watching a funeral.",
        discoveredEngageText: "'Still up there. Still commanding. Eleven empty channels and it won't close a single one.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: ["Beacon: Frontline"],
        itemSlot2: ["Map: Morningstar's Destruction"],
        itemSlot3: [],
        itemSlot4: [],
        dialogue: [
            {
                question: "What does the beacon do?",
                response: "'It broadcasts a hostile IFF signature inside the Sovereign's tactical perimeter. A threat to the squad it's still protecting.\n\nIts command protocols will override everything — it will move to intercept. First time it's left that ridge in eighty years.'"
            },
            {
                question: "Who are you?",
                response: "'I was their scout.' She finally looks away from the ridge. Her eyes catch light at the wrong angle — too bright, like silicon behind the iris.\n\n'That's Rex up on the ridge. Our CO. Broadcasting orders to a squad that died eighty years ago.' She looks at the beacon in her hand. 'Last one. After this, there's only Morningstar.'"
            }
        ]
    }
];
