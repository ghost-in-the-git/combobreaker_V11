/**
 * THE MOD SHOP - ENCOUNTER CONFIGURATION
 *
 * A hidden workshop where The Modder sells combat mods.
 * No enemies, no ambushes — just circuits and chrome.
 *
 * Uses a category dropdown to filter mods by type.
 * Player selects a category, then sees available mods in the 4 shop slots.
 */

const ENCOUNTERS_MODSHOP = [
    {
        name: "The Modder",
        characterImage: "images/MODDER.gif",
        type: "shop",
        isModder: true,
        autoEngage: true,
        description: "A cluttered workshop buried under cables and circuit boards. Mod casings line every wall. Someone is soldering in the back.",
        engageText: "The Modder doesn't look up when you enter. She's wrist-deep in a disassembled combat module, tweaking something with a pair of micro-pliers.\n\n'Hold on.' A spark. A hiss. She snaps the casing shut and finally turns around. She looks at your mech, then at your empty mod slots.\n\n'You're running stock? That's... brave.' She gestures at the racks behind her. 'Pick a category. I'll show you what I've got.'",
        discoveredDescription: "The Modder's workshop hums with activity. Racks of combat mods line the walls.",
        discoveredEngageText: "The Modder nods when you walk in. 'Back for more? Pick a category.'",
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [
            {
                question: "What are mods?",
                response: "'Combat modules.' She holds up a small chrome cylinder. 'Each one plugs into your mech's action bus. Gives you a new move in combat — attack, defence, utility, whatever you need.'\n\nShe slots it back into the rack. 'You've got four mod slots. Fill them up and you've got four combat actions. Leave them empty and you've got...' She pauses. '...problems.'"
            },
            {
                question: "What do you have?",
                response: "'Three categories.' She ticks them off on grease-stained fingers. 'Attack mods hit things. Defence mods stop things from hitting you. Utility mods do everything else — repairs, buffs, weird stuff.'\n\nShe shrugs. 'I stock the neutral stuff — no element, works on anything. If you want elemental mods — fire, cryo, acid, all that — you'll need to find the zone modders. Each zone's got one. They specialise.'"
            },
            {
                question: "Where do you get these?",
                response: "She gives you a look. 'I make them. Every single one.' She holds up a half-finished circuit board. 'Strip the parts, design the logic, solder the connections, test under combat load. Most of them blow up the first three times.'\n\nShe puts it down carefully. 'The ones on the rack are the ones that didn't.'"
            },
            {
                question: "You seem... focused.",
                response: "'I like things that work.' She says it flatly. 'People are complicated. Machines are honest. A mod either fires or it doesn't. No ambiguity.'\n\nShe picks up a screwdriver and starts working on something else. 'I was an engineer before the wars. Military R&D. Weapon systems, targeting arrays, the works.' A pause. 'Now I freelance. Better hours. Fewer war crimes.'"
            }
        ]
    }
];
