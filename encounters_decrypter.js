/**
 * THE DECRYPTER - ENCOUNTER CONFIGURATION
 *
 * A rogue cryptographer operating from a sealed bunker. She can decode
 * the encryption on boss keys, unlocking unique powerups for the mech.
 *
 * Uses a custom key-swap UI: player selects a collected boss key,
 * sees the powerup it unlocks, and trades the key for the powerup.
 */

const ENCOUNTERS_DECRYPTER = [
    {
        name: "The Decrypter",
        characterImage: "images/decrypter.gif",
        type: "shop",
        isDecrypter: true,
        autoEngage: true,
        description: "A sealed blast door hums with power. Behind it, banks of monitors cast pale light on a figure hunched over a terminal. Her fingers move faster than her eyes.",
        engageText: "The blast door grinds open before you knock. Inside, a woman sits surrounded by cracked datapads, gutted security modules, and a wall of blinking cipher machines. She doesn't turn around.\n\n'You have keys. I can feel them — encrypted signals bleeding through your chassis.' She swivels her chair. Half her skull is chrome, wired directly into the terminal behind her.\n\n'I crack codes. You bring keys. I turn them into something useful.' She taps the terminal. 'Show me what you've got.'",
        discoveredDescription: "The Decrypter's bunker hums with the same persistent energy. She's already at her terminal when you arrive.",
        discoveredEngageText: "She doesn't look up. 'I know it's you. Your encryption signature precedes you by about thirty seconds.' A pause. 'Got new keys, or just here to talk?'",
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [
            {
                question: "Who are you?",
                response: "'A ghost in the system.' She taps the chrome plate on her skull. 'I used to crack military encryption for the corporations. Then they encrypted me — neural lock, kill switch, the whole package.'\n\nShe pulls a cable from behind her ear. 'I cracked that too. Took four years and cost me half my brain, but I cracked it.' She plugs the cable back in.\n\n'Now I crack everything else. Keys, codes, signals — if it's locked, I open it. If it's hidden, I find it.'"
            },
            {
                question: "How does this work?",
                response: "'Every boss key carries encrypted data — combat protocols, weapon schematics, system overrides. The bosses don't even know what's stored in them.'\n\nShe pulls up a holographic schematic. 'I extract the data, decode it, and hardwire the result directly into your mech's systems. Permanent upgrade.'\n\nShe closes the schematic. 'The key is consumed in the process. Can't crack the same code twice.'"
            },
            {
                question: "What's behind the chrome?",
                response: "She's quiet for a long time. 'A processor. Three terabytes of decryption algorithms running on wetware.' She touches the metal plate.\n\n'The brain underneath is mostly gone. What's left is... adapted. I think in ciphertext now. Dream in hexadecimal.'\n\nA thin smile. 'The corporations wanted a human decryption engine. They got one. Just not one they could control.'"
            },
            {
                question: "Do you know what I am?",
                response: "She studies you for a long time. 'A combobreaker running without a pilot. No neural link, no command signal, no override codes.' Her eye twitches — the chrome side.\n\n'I've cracked a lot of locks. Yours is the first one I can't even find.'\n\nShe turns back to her terminal. 'Whatever's driving you, it's not encrypted. It's something else entirely.'"
            }
        ]
    }
];
