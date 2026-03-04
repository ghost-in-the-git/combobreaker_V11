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
                question: "What am I?",
                response: "'A combobreaker. Combat mech — the real thing, not the mass-produced frames the corporations stamp out.' He leans back.\n\n'Combobreakers were built for the frontline. Military-grade chassis, hardened armor, heavy weapons integration. But what made them special was the sync. A neural rig that wired a pilot's nervous system directly into the machine. Reflexes, instinct, decision-making — all running through human wetware at machine speed.'\n\nHe pauses. 'The pilot didn't drive a combobreaker. The pilot *became* it. That was the point.' He looks at you for a long, uncomfortable moment. 'Of course, that's supposed to require a pilot.'"
            },
            {
                question: "What is this place?",
                response: "He gestures around the workshop. 'This is Home. Used to be a forward operating base — refueling depot for breaker squads on deep-space rotation.'\n\nHe picks up a bolt and rolls it between his fingers. 'When the network went down, the squads stopped coming. Supply drops stopped. Comms went to static. Everyone who could leave, left.'\n\nHe sets the bolt down carefully. 'I stayed. Somebody had to keep the lights on.' He glances at you sideways. 'Didn't expect to have company.'"
            },
            {
                question: "Who are you?",
                response: "'Nobody important. I was an engineer — sync tech, mostly. Kept the neural rigs calibrated so pilots didn't lose themselves in their machines.' Something flickers across his face when he says that, but it's gone fast.\n\n'When things fell apart, the other techs shipped out or died. I just... didn't leave.' He adjusts his goggles. 'I was stripping you for parts when you powered on. Almost gave me a heart attack.'\n\nA weak laugh. 'The pilots used to call me the Professor because I talked too much. It stuck. Though I suppose you're not exactly a pilot.'"
            },
            {
                question: "What happened here?",
                response: "The Professor's hands go still. 'War happened. We were winning — or we thought we were. Breaker squads pushing past the belt, taking ground, the new models performing beyond expectations—' He stops himself. Starts again, more carefully.\n\n'Then one day the comms went dead. Every channel, all at once. No orders, no signals, nothing. Just silence.'\n\nHe picks up a charred circuit board. 'Most of the squads went dark that same night. The ones that made it back were...' He trails off and sets the board down. 'The ones that made it back didn't make it back right.'"
            },
            {
                question: "What's out there?",
                response: "'Depends how far you go.' He counts on his fingers. 'Close in, it's scavengers and vermin. Rats in the tunnels, junker bots picking through scrap. Further out, war machines still running combat protocols, corporate kill squads, things in the pipes that don't have names.'\n\nHe lowers his hand. 'And past all that, the Dead Zone. Toxic. Corrupted. The machines in there aren't just hostile — they're *wrong*. Something happened to their code.'\n\nHe looks at you steadily. 'Past the Dead Zone is the asteroid belt. Past the belt is the frontline. Nobody I know has made it that far and come back.'"
            },
            {
                question: "Tell me about the frontline.",
                response: "He doesn't answer right away. His jaw tightens. 'The frontline is where the breaker squads were sent. Past the belt, deep space, edge of the sector. That's where the new sync models were being tested. The latest generation.'\n\nHe turns back to his workbench. You wait. When he speaks again his voice is flat. 'The last signal from beyond the belt was years ago. It wasn't a report. It wasn't even words. Just—' He waves a hand. 'Noise. Like machines screaming.'\n\nHe busies himself with something on his bench. 'You're not ready for the belt. Not yet. Not even close. Don't ask me about it again.'"
            },
            {
                question: "Where do I start?",
                response: "'Go see Spark. Next bay over.' He waves a hand. 'She does mods — combat modules, the things that let you actually fight. She'll get you set up and point you somewhere safe to test them.'\n\nHe clears his throat. 'Once you're moving, push further out. Each zone's got its own problems and its own people. Find the shops, find the refiners. And if you see a hooded figure selling maps — buy one. Don't ask me how he gets around. Just buy the map.'"
            },
            {
                question: "What's worth collecting?",
                response: "'Everything.' No hesitation. 'Minerals are the backbone — raw ore from the asteroids, refined by the specialists in each zone, forged into gear. That's how you get stronger. Scrap is always worth carrying.'\n\nHe pauses. 'And silicon. Silicon is what makes everything run — it's currency out here, but it's also...' He looks at you and doesn't finish the thought. 'Just collect it. You need it more than most.'\n\nHe lowers his voice. 'And anything strange — old logs, DNA tags, encrypted fragments — don't throw those away. This sector is full of things people buried on purpose.'"
            },
            {
                question: "You're not telling me everything.",
                response: "The Professor goes very still. He puts both hands flat on the bench. 'No,' he says quietly. 'I'm not.' He doesn't look at you.\n\n'You're a combobreaker with no pilot, no memory, and no silicon, and you woke up on my workbench. I've worked on these machines my entire life and what you are shouldn't exist.'\n\nA long silence. 'There are things I suspect. Things I've seen in old reports, things that happened on the frontline with the newer models. But if I told you now — if I told you what I think you might be—' He shakes his head. 'You'd go looking. And what's out there would kill you before you found anything.'\n\nHe turns back to his bench. 'Get stronger. Push further out. Find what's buried in this sector. And when you've seen enough... come back and ask me again.'"
            }
        ]
    },
    {
        name: "Spark",
        characterImage: "images/spark.gif",
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
