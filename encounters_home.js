/**
 * HOME - ENCOUNTER CONFIGURATION
 *
 * A quiet place. The Professor is always here, waiting.
 * Spark has set up shop in the next bay over.
 */

const ENCOUNTERS_HOME = [
    {
        name: "The Professor",
        characterImage: "images/professor.gif",
        type: "shop",
        discoverable: true,
        autoEngage: true,
        description: "A cluttered workshop hums with activity. An old man in welding goggles is hunched over a disassembled servo unit, muttering calculations to himself.",
        engageText: "The old man stumbles backward when your optics flare on. He knocks a tray of bolts off his bench and stands there, breathing hard, staring at you.\n\n'That's — that's not possible.' He doesn't move for a long time. Then, very slowly, he picks up the tray. 'You don't have a pilot. There's nobody inside you. I checked. Twice.'\n\nHe swallows. 'I'm the Professor. I dragged you in here three days ago for parts. You were dead.' He sets the tray down with shaking hands. 'You're not dead anymore. And I don't know why.'",
        discoveredDescription: "The Professor's workshop is warm and familiar. He's at his bench, tinkering with something that sparks.",
        discoveredEngageText: "The Professor glances up. 'You're back. Good — means you're still running.' He pushes his goggles up. 'Need something?'",
        deathEngageText: "The Professor is already moving when you come in — tools out, diagnostic scanner humming. He doesn't say anything at first. Just hooks up the cables and starts checking your systems one by one.\n\nWhen he finally speaks, his voice is quiet. 'I felt the uplink drop. Flatline across the board. For about four seconds, you were gone.' He pulls a scorched panel free and sets it aside.\n\n'Four seconds doesn't sound like much. But for a machine that shouldn't be running at all...' He doesn't finish. 'You're patched. Half capacity. Don't do that again.'",
        appearanceRate: 100,
        minLevel: 1,
        itemSlot1: ["Professor's Lesson [+10 Silicon]"],
        itemSlot2: ["Memory Defrag [+150 Silicon]"],
        itemSlot3: ["Combobreaker Firmware [+2000 Silicon]"],
        itemSlot4: ["Silicon Enforcement [+25000 Silicon]"],
        dialogue: [
            {
                question: "Who am I?",
                response: "The Professor sets down his tools and looks at you — really looks. 'You're Combobreaker 72632. That's your serial number. Military chassis, frontline model, neural sync rig built in.'\n\nHe hesitates. 'But combobreakers don't run by themselves. They need a pilot — a human, synced in, driving the thing. Without a pilot, you're just metal.' He gestures at you. 'There's no pilot in you. The cockpit is empty. The sync rig is cold. And yet here you are, walking around and asking me questions.'\n\nHe picks his tools back up, but his hands aren't steady. 'I don't have an answer for that. I've been working on mechs for thirty years and I've never seen one just... turn on.'"
            },
            {
                question: "Who are you?",
                response: "'Nobody important. I was an engineer — sync tech, mostly. Kept the neural rigs calibrated so pilots didn't lose themselves in their machines.' Something flickers across his face when he says that, but it's gone fast.\n\n'When things fell apart, the other techs shipped out or died. I just... didn't leave.' He adjusts his goggles. 'I was stripping you for parts when you powered on. Almost gave me a heart attack.'\n\nA weak laugh. 'The pilots used to call me the Professor because I talked too much. It stuck. Though I suppose you're not exactly a pilot.'"
            },
            {
                question: "How does attack work?",
                response: "'Your ATK stat is raw output — how hard you hit.' He taps a gauge on your chassis. 'Every mod has an attack multiplier. Swift Strike is 1x your ATK. Something like Keen Pierce hits at 1.3x — more focused, more damage. Heavy Blow swings for 1.5x but drops your guard.'\n\nHe holds up a finger. 'But it's not just about the number. The enemy has defence. Your damage gets reduced by their DEF before it lands. So if you're hitting soft, you're hitting for nothing.' He shrugs. 'Upgrade your ATK, pick mods with high multipliers, and hit things that can't take it.'"
            },
            {
                question: "How does defence work?",
                response: "'DEF is your armor value — how much incoming damage gets absorbed before it touches your HP.' He knocks on your plating. 'When something hits you, your DEF subtracts from their damage. Higher DEF, less pain.'\n\nHe picks up a mod casing. 'Some mods boost your DEF multiplier for the round. Iron Wall gives you 3x your DEF stat — nothing's getting through that. But it doesn't attack.' He sets it down. 'Other mods drop your guard. Heavy Blow cuts your DEF in half while you swing. Trade-offs. Always trade-offs.'\n\n'Upgrade your DEF stat and you take less damage across the board. Simple as that.'"
            },
            {
                question: "How does speed work?",
                response: "'Speed determines who goes first each round — you or the enemy.' He snaps his fingers. 'Higher speed, you attack first. And that matters more than you think. If you kill something before it swings, you take zero damage that round.'\n\nHe leans in. 'But here's the thing. Get your speed high enough above the enemy's and you trigger SPEEDBREAKER — a double attack. You hit twice in one round.' He grins. 'That's where speed stops being a nice-to-have and starts being a weapon.'"
            },
            {
                question: "What's a breaker?",
                response: "'Now we're talking.' His eyes light up. 'Your breaker stat is a percentage chance to trigger COMBOBREAKER. When it fires, you get a guaranteed critical hit — big damage spike.'\n\nHe holds up a hand. 'There's also STRIKEBREAKER. That one ignores the enemy's defence entirely. Cuts right through their armour like it isn't there. Devastating against heavily armoured targets.'\n\n'And SPEEDBREAKER — when your speed is high enough above the enemy's, you attack twice.' He counts on his fingers. 'Three breaker types. All of them can turn a losing fight. Upgrade your breaker stat and the crits come more often.'"
            },
            {
                question: "How does regen work?",
                response: "'Regen is your self-repair capacity.' He points to your chassis. 'When you use a repair mod — Quick Repair, Deep Restore — the amount you heal is based on your REGEN stat multiplied by the mod's regen multiplier.'\n\nHe taps the bench. 'Quick Repair is 1x your regen. Deep Restore is 2x — heals more but costs more fuel. No repair mod equipped means no healing in combat. You just take hits until you drop.'\n\n'Upgrade your REGEN stat and every repair mod heals more. Keep yourself alive long enough to win.'"
            },
            {
                question: "How does mining work?",
                response: "'Mining is how you get stronger — permanently.' He gestures broadly. 'After a fight, you collect minerals from the wreck. Your MINING stat determines how much you pull. Higher mining, bigger haul.'\n\nHe picks up a chunk of raw ore. 'You take those minerals to a refiner — there's one in most zones. They process the raw material into refined ore, which you take to the forge. The forge turns refined ore into stat upgrades. ATK, DEF, speed, all of it.'\n\n'Don't neglect mining. A mech that can't harvest can't grow. And out here, if you're not growing, you're dying.'"
            },
            {
                question: "Tell me about HP.",
                response: "'HP is your hull integrity. It hits zero, you're done.' He says it flatly. 'You get dragged back here, I patch you up, and whatever you were fighting is still out there.'\n\nHe taps your chest plate. 'Your max HP goes up when you upgrade it at the forge, same as any other stat. More HP means more room for mistakes. And you're going to make mistakes.'\n\n'In combat, the only way to get HP back is repair mods. Outside of combat, coming back here resets you to full.' He looks at you. 'Don't be proud about retreating. A wrecked mech learns nothing.'"
            },
            {
                question: "How do zones work?",
                response: "'The sector is broken into zones. Each one's different — different enemies, different people, different resources.' He pulls out a battered chart. 'The Ratpile is right underneath us. Free to reach. Past that, the Scrap Fields, Old Battlefield, Downtown — each one further out, each one harder.'\n\nHe taps the chart. 'Travelling costs fuel. The further the zone, the more it burns. And every zone has an open world — the general area where you'll fight whatever's out there — plus specific destinations. Shops, refiners, forges, people worth talking to.'\n\n'You find destinations by buying maps from the Mapmaker. He shows up in most zones. Once you've got a location mapped, you can travel straight to it instead of wandering.' He folds the chart. 'Push as far as you can handle. But don't skip zones — the resources in each one feed into the next.'"
            },
            {
                question: "How do I level up?",
                response: "'Silicon.' He holds up a dull grey chip. 'You earn silicon from fights. It fills your silicon gauge — the bar under your name. When the bar is full, you can spend it to level up.'\n\nHe points to your stat panel. 'When you level, you pick which stat to upgrade — ATK, DEF, speed, breaker, mining, or regen. That stat goes up by one. And your max HP goes up by one automatically, every level, no matter what you pick.'\n\nHe sets the chip down. 'The cost goes up each time. Early levels are cheap. Later on you'll need a lot more silicon per level. That's why mining matters — more minerals means more gear from the forge, and fights in harder zones pay more silicon.' He looks at you. 'There's no shortcut. You grind, you grow, you survive.'"
            }
        ]
    },
    {
        name: "Spark",
        characterImage: "images/spark.png",
        type: "shop",
        discoverable: true,
        autoEngage: true,
        isModder: true,
        requires: "Home: Spark",
        description: "The bay next door is a mess of stripped wiring and mod casings. A girl — sixteen, maybe seventeen — is cross-legged on the floor, soldering something that crackles with blue light.",
        engageText: "She looks up the second you walk in and her eyes go wide. Not afraid. *Fascinated.*\n\n'Oh my god. Oh my *god*.' She's on her feet instantly, circling you, running her hands along your chassis without asking. 'You're the one the Professor dragged in. The combobreaker with no pilot.' She ducks under your arm and peers into the empty cockpit.\n\n'It's really empty. There's nobody in there. That's — that's *insane*.' She pops back out grinning. 'I'm Spark. I do mods. And you —' She taps your chest plate. 'You don't have any. We need to fix that immediately.'",
        discoveredDescription: "Spark's bay is a controlled disaster of mod parts and soldering tools. She's always working on something.",
        discoveredEngageText: "Spark waves a soldering iron at you without looking up. 'Hey! Give me one sec —' A spark, a hiss. She snaps a casing shut. 'OK. What do you need?'",
        deathEngageText: "Spark is already at the door when you come in. She doesn't say anything cute. She just grabs a diagnostic cable and plugs in.\n\n'Your mod bus took damage. Hang on.' Her fingers move fast — reconnecting, rerouting, patching. When she's done she sits back and lets out a breath she'd been holding.\n\n'Don't do that to me. The Professor can handle losing a machine. I can't.' She forces a grin. 'Your mods are back online. Try not to die again.'",
        appearanceRate: 100,
        minLevel: 1,
        dialogue: [
            {
                question: "What are mods?",
                response: "'OK so —' She grabs a small chrome cylinder off her bench. 'This is a mod. Combat module. It plugs into your action bus — right here —' She taps a panel on your side. 'And it gives you a move. An action you can use in a fight.'\n\nShe holds up four fingers. 'You've got four mod slots. Four slots, four moves in combat. Swift Strike hits things. Quick Repair fixes you up. There are attack mods, defence mods, utility mods — all sorts.'\n\nShe slots the cylinder back into a rack. 'Empty slots mean empty buttons. No mod, no action. So don't go out there naked, yeah?'"
            },
            {
                question: "How do I use them?",
                response: "'You equip them on your Pilot panel — the mod slots at the top. Drag a mod into a slot and it shows up as a combat button when you fight.' She mimes pressing buttons.\n\n'Each mod has a fuel cost. Swift Strike is free — zero fuel. Heavier stuff burns fuel every time you use it. Keep an eye on your fuel gauge or you'll be stuck clicking the free stuff.'\n\nShe grins. 'The Modder out in the sector sells the fancy ones. And each zone has its own modder selling elemental mods — fire, cryo, acid, all that. But what I gave you will keep you alive for now.'"
            },
            {
                question: "Who are you?",
                response: "'Spark. Just Spark.' She shrugs. 'I showed up here about a year ago. The Professor let me have the bay next door because I'm good with mods and he's —' She makes a vague gesture. 'Old-school. Sync rigs and chassis work. He doesn't really get the mod bus stuff.'\n\nShe picks up a half-soldered circuit board. 'I used to run with a scav crew. Tore mods out of wrecked mechs, refurbed them, sold them. Got pretty good at it.' A pause. 'Crew's gone now. So it's just me and the old man.'\n\nShe looks at you sideways. 'And now you, I guess.'"
            },
            {
                question: "Why are you so interested in me?",
                response: "She stops what she's doing. For a second she looks almost serious.\n\n'Because you shouldn't exist.' She says it simply. 'I've cracked open dozens of combobreakers. Hundreds. Every single one had a sync rig wired to a pilot seat. The machine doesn't *work* without a brain in the chair. That's the whole point.'\n\nShe leans forward. 'But your sync rig is cold. Your cockpit is empty. And you're standing here talking to me.' Her eyes are bright. 'Do you have any idea how impossible that is? You're not running on a pilot. You're running on *nothing*. Something is in there that nobody built and nobody understands.'\n\nShe catches herself and grins again. 'Sorry. I get excited. It's just — the Professor looks at you and sees a problem. I look at you and see the coolest thing that's ever walked into my shop.'"
            },
            {
                question: "Do you know the Professor well?",
                response: "'He's...' She thinks about it. 'He's the kind of person who knows everything and says half of it. You know? Like he's always carrying something he won't put down.'\n\nShe lowers her voice. 'He was military. Sync tech for the breaker squads before the network went dark. He doesn't talk about it much, but sometimes he says things in his sleep. Names. Serial numbers.'\n\nShe picks at a wire. 'He's good to me. Gave me a roof and a workbench and didn't ask questions. I think he's lonely but he'd rather die than admit it.' A small smile. 'Don't tell him I said that.'"
            },
            {
                question: "What can you tell me about elements?",
                response: "'Oh, this is the good stuff.' She pulls out a diagram covered in arrows and color-coded labels. 'Some mods have elements — steel, fire, cryo, acid, volt, flesh. And some enemies are weak or strong against certain elements.'\n\nShe traces the arrows. 'Steel crushes flesh and cryo but gets eaten by acid and volt. Fire melts flesh and steel but cryo and acid shut it down. It's a whole chart. You'll figure it out.'\n\nShe flips the diagram over. 'There's also light and void. Those two just hate each other. Don't worry about them yet.' She tucks the diagram away. 'The mods I gave you are neutral — no element. But when you start buying from the Modder, you'll want to think about what you're fighting.'"
            }
        ]
    }
];
