/**
 * THE FORGE - ENCOUNTER CONFIGURATION
 *
 * A hidden workshop where The Forger turns refined minerals into
 * powerful mech components. No enemies, no ambushes — just fire and steel.
 *
 * Uses a mineral dropdown instead of fixed item slots.
 * Player selects a mineral, then sees 3 forge slots based on mineral position.
 */

const ENCOUNTERS_FORGE = [
    {
        name: "The Forger",
        characterImage: "images/FORGER.gif",
        type: "shop",
        isForge: true,
        autoEngage: true,
        description: "A heavily augmented smith works at a glowing forge, shaping refined minerals into mech components. One arm is entirely mechanical. So is half her face.",
        engageText: "The Forger stops mid-strike when she sees you. She tilts her head — the mechanical half clicking faintly as the lens in her prosthetic eye adjusts. She looks at you for a long time. Then she looks at your empty cockpit. Then back at you.\n\n'Huh.' She sets down her hammer. 'You need gear or you need to talk?'",
        discoveredDescription: "The Forger's workshop radiates heat. She's at the anvil, sparks cascading with each strike.",
        discoveredEngageText: "The Forger nods when you enter. She doesn't stop working. 'Brought materials?'",
        dialogue: [
            {
                question: "Who are you?",
                response: "'The Forger.' She doesn't elaborate. When you wait, she exhales. 'I make things. Weapons, armor, shields — anything a mech can mount, I can build. Bring me refined minerals and I'll turn them into something that keeps you alive.'\n\nShe goes back to hammering. 'That's all you need to know.'"
            },
            {
                question: "How does forging work?",
                response: "She holds up a chunk of dull ore, then points at a rack of gleaming components. 'Raw minerals are useless to me. Get them refined first — there's a specialist in most zones who can do it. Bring me the refined material and I'll shape it.'\n\nShe runs her mechanical thumb along the edge of a freshly forged blade. 'Every mineral forges different. Harder material, stronger gear. You want the best, you dig deeper into the sector.'"
            },
            {
                question: "You're augmented.",
                response: "She flexes her mechanical arm. The joints hiss softly. 'Forty percent, give or take. Arm, eye, half the ribs, most of the spine.' She says it the way someone else might list groceries.\n\n'Didn't choose it. Took a direct hit during the Fracture Wars — half of me was gone before I hit the ground.' She rolls her mechanical shoulder. 'They put me back together with what they had. Turns out what they had was mostly steel.'\n\nShe glances at you with her prosthetic eye. 'Forge work came after. Figured if I'm half machine, might as well build for them.' A pause. 'You wouldn't understand the problem.'"
            },
            {
                question: "What do you think I am?",
                response: "She shrugs. 'A combobreaker with no pilot. The old man talks about it like it's a miracle. Or a nightmare.'\n\nShe picks up her hammer. 'I've spent my whole life taking things apart and putting them back together. I don't care what's inside you. I care what's on you.' She taps your chassis with the hammer handle. 'And right now? Not enough.'"
            },
            {
                question: "Have you seen others like me?",
                response: "The hammer pauses. 'No.' One word, but something shifts behind her eyes — the real one, not the prosthetic.\n\n'I've worked on a lot of breakers. Repaired them, stripped them, rebuilt them from scrap. They don't walk in here by themselves.'\n\nShe resumes hammering. 'The Monolith out in the graveyard — that's the closest thing I've seen. Still moving, no pilot. But it's stuck. Broken.' A beat. 'You're not stuck.'"
            },
            {
                question: "Tell me about the gear you've made.",
                response: "For the first time, something like warmth crosses her face. 'Every piece is one of a kind. I don't stamp out factory parts — I forge. The mineral determines the base, but the shape, the balance, the edge—' She holds up a gauntlet, turning it in the firelight. 'That's me.'\n\nShe sets it down. 'The deeper zones have rarer materials. Rarer materials make meaner gear. You want something worth having, you earn it.'"
            }
        ],
        appearanceRate: 100,
        minLevel: 1
    }
];
