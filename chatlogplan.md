# Chat Log UI Overhaul Plan

## Goal
Replace the current plain-text message divs with full-width chat bubbles featuring a large square image on the left and left-aligned text on the right. All messages left-aligned — no more centered or right-aligned messages.

## Current State
- `addMessage(text, type)` creates `<div class="message {type}">` with plain `textContent`
- 8 message types: `system`, `systemblue`, `enemy`, `player`, `battle`, `damage`, `victory`, `defeat`, `levelup`
- Player messages right-aligned, system messages centered, others left-aligned
- No images, no avatars, no visual structure beyond colored text + left border
- 800ms delay between messages, simple fadeIn animation

## New Bubble Layout

```
┌─────────────────────────────────────────────────┐
│ ┌────────┐                                      │
│ │        │  [LABEL]  Source Name                 │
│ │  img   │  Message text goes here, wrapping     │
│ │        │  naturally across lines.              │
│ └────────┘                                      │
└─────────────────────────────────────────────────┘
```

- **Full width** — bubble stretches across the chat panel
- **Left-aligned** — every message type, no exceptions
- **Large square image** — on the left side of each bubble (~64x64 or similar)
- **Placeholder image** — `images/IMAGE.gif` for all images initially
- **Label + text** — type label (bold/colored) above or inline with the message text

## CSS Changes

### Remove
- `align-self: center` from `.message.system`
- `align-self: flex-end` from `.message.player`
- `max-width: 80%` / `max-width: 90%` constraints

### Add
- `.message` becomes a flex row container (`display: flex; align-items: flex-start; width: 100%`)
- `.message-avatar` — square image container on the left (e.g. 64x64px)
- `.message-content` — flex-grow text area on the right
- `.message-label` — small bold label line (optional, shows type like "SYSTEM", "ENEMY", etc.)
- Keep existing color schemes per type (border colors, text colors, background colors)
- Borders move from left-border to full border or subtle outline on the bubble

### Bubble Styling Per Type
| Type | Border Color | Text Color | Background | Label |
|------|-------------|------------|------------|-------|
| system | #00ff88 | #00ff88 | #0a0a12 | SYSTEM |
| systemblue | #4488ff | #0000ff | #0a0a12 | SYSTEM |
| enemy | #ff4444 | #ff6666 | #2a1a1a | ENEMY |
| player | #00ff88 | #00ff88 | #1a2a1a | MECH |
| battle | #4488ff | #88aaff | #1a1a2e | BATTLE |
| damage | #ff44aa | #ff88cc | #2a1a2a | DAMAGE |
| victory | #00ffcc | #00ffcc | #1a2a2a | VICTORY |
| defeat | #ff0000 | #ff4444 | #2a1a1a | DEFEAT |
| levelup | #ffdd00 | #ffdd00 | #2a2a1a | LEVEL UP |

## JS Changes

### `addMessage(text, type, options)`
Update to build the new bubble structure:
```
options = {
    image: 'images/IMAGE.gif',  // defaults to placeholder
    label: null,                // auto-derived from type if not provided
    name: null                  // optional source name (enemy name, "Your Mech", etc.)
}
```

The function creates:
```html
<div class="message {type}">
    <div class="message-avatar">
        <img src="images/IMAGE.gif" alt="">
    </div>
    <div class="message-content">
        <div class="message-label">ENEMY</div>
        <div class="message-text">The Rusted KV-8 Grinder attacks for 12 damage.</div>
    </div>
</div>
```

### Callers
- All existing `addMessage(text, type)` calls continue to work — image defaults to placeholder, label auto-derived from type
- Combat messages can pass enemy name/image when available
- Encounter messages can pass NPC name/image
- No need to update every caller immediately — graceful fallback to defaults

## Implementation Order

1. **CSS first** — add new bubble styles, update `.message` base class
2. **Update `addMessage()`** — build new DOM structure with image + label + text
3. **Remove old alignment** — strip center/right alignment from all types
4. **Test all message types** — verify combat, encounters, mining, vendors, bosses all render correctly
5. **Future: real images** — swap `images/IMAGE.gif` for actual enemy/NPC art per encounter
