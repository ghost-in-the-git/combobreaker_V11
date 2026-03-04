/**
 * MECH GRAVEYARD - ENCOUNTER CONFIGURATION
 *
 * A colossal mech sits motionless among the dead, slowly cannibalising
 * fallen machines to rebuild its shattered legs. It will trade scrap
 * for any parts you no longer need.
 *
 * Uses a custom salvage UI instead of fixed item slots.
 * Player selects unequipped installations to sell for scrap.
 */

const ENCOUNTERS_SALVAGEYARD = [
    {
        name: "Abandoned Monolith",
        characterImage: "images/THE_MONOLITH.gif",
        type: "shop",
        isSalvageYard: true,
        discoverable: true,
        autoEngage: true,
        description: "A towering mech looms above the graveyard, half-buried in wreckage. Its upper body still moves — one massive arm dragging scrap toward its shattered legs in an endless, patient repair cycle.",
        engageText: "The Monolith's head turns as you approach. One cracked optic tracks you — dim, flickering, but focused. A deep resonance builds in its chest, low enough to feel in your own frame.\n\nIts cargo bay grinds open slowly. It doesn't speak. It doesn't need to.",
        discoveredDescription: "The Monolith is where you left it. Still dragging. Still building. Its optic finds you the moment you enter the graveyard.",
        discoveredEngageText: "The Monolith's arm pauses mid-drag when it detects you. That low hum starts again — the one you feel in your chassis before you hear it. The cargo bay is already open.",
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [
            {
                question: "Watch it work.",
                response: "You stand and observe. The Monolith's massive arm sweeps across the graveyard floor, dragging a twisted hull plate toward its shattered legs. It holds the piece against the stump of its left knee, tries to align it. It doesn't fit. It never fits.\n\nThe arm drops the plate, reaches for another piece, and starts again. The same motion. The same result. Over and over, patient as gravity.\n\nIt has been doing this for a very long time."
            },
            {
                question: "Check the cockpit.",
                response: "You climb the wreckage to get a look at the Monolith's cockpit. The hatch is gone — torn off or rusted away. Inside, the seat is empty. The neural sync rig is dark, its connectors corroded and still. No pilot. No remains. Just an empty chair and a dead interface.\n\nThe same as yours.\n\nThe Monolith's optic swivels to track you as you look inside, and for a moment the hum in its chest changes pitch — higher, almost urgent. Then it fades, and the arm goes back to dragging scrap."
            },
            {
                question: "Reach toward it.",
                response: "You extend your arm toward the Monolith. It stops. Everything stops — the dragging arm, the grinding servos, the low mechanical breathing. Its head turns toward you. The cracked optic brightens, just slightly, and locks onto your hand.\n\nYou hold still. Seconds pass.\n\nThen the Monolith's free hand — the one not dragging scrap — rises from the wreckage. Slowly. It reaches toward you, fingers the size of your torso, and stops just short of contact. It holds there, trembling.\n\nThen the hand drops. The arm goes back to dragging. But it saw you. Whatever is left inside that frame, it saw you."
            },
            {
                question: "Listen.",
                response: "You cut your external audio filters and listen. Under the grinding of metal and the groan of failing servos, there's something else. A low, rhythmic pulse buried in the noise — almost tonal, almost structured. It rises and falls in patterns that repeat every few seconds.\n\nIt's not language. It's not a distress signal. But it's not random either. Something inside the Monolith is producing a pattern it can't stop producing.\n\nYou don't know what it means. But something in your own systems responds to it — a faint vibration in your chest plate that matches the rhythm exactly."
            },
            {
                question: "Look at the legs.",
                response: "The Monolith's legs are destroyed below the waist. Not battle damage — something cleaner than that. The severance points are precise, almost surgical. Whatever took the legs did it deliberately.\n\nThe scrap the Monolith drags toward itself is wrong — hull plates, piping, shattered armor. None of it is the right material. None of it will ever fit.\n\nThe Monolith knows this. It must know this. But the arm keeps dragging, keeps trying, keeps failing. You wonder if it can't stop. Or if stopping is worse."
            },
            {
                question: "Touch the chassis.",
                response: "You press your hand flat against the Monolith's torso plating. The metal is warm. Not from the sun — warm from inside, the way a reactor runs hot even when everything else is dead.\n\nThe moment you make contact, something happens in your own frame. A resonance. A frequency that hums through your hand, up your arm, into your chest. It's familiar. You don't know how, but it's familiar — like hearing a voice you've forgotten call a name you can't remember.\n\nThe Monolith's arm stops dragging. Its optic dims. For three seconds, the graveyard is completely silent.\n\nThen the arm moves again, and the moment is gone."
            }
        ]
    }
];
