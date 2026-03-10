# Globe Nightclub — Site Management SOP

## Overview

The Globe Nightclub website is managed entirely through Claude Code using your Claude Max subscription. No Google Sheets, no API keys, no coding knowledge needed. Just open a terminal and talk.

**Live site:** https://imaginative-cuchufli-0a71b8.netlify.app/
**Source files:** `C:\Users\suppo\globe-nightclub`

---

## Getting Started

1. Open a terminal
2. Run `claude` (or open Claude Code in your IDE)
3. Navigate to the project: `cd C:\Users\suppo\globe-nightclub`
4. Tell Claude what you want to change in plain English

That's it. Claude reads the `CLAUDE.md` file in the project and knows the entire site structure.

---

## Common Tasks

### Add an Event

**Say:** *"Add a new event: [name], [date], [time], [genre]. Here's the flyer: [drag image or paste path]"*

**Example:**
> Add DJ Snake to Saturday March 21st, 8PM-2AM, EDM/House. Tag it as Special Event. Here's the flyer: C:\Users\suppo\Downloads\dj-snake-flyer.jpg

Claude will:
- Copy the flyer image to the `images/` folder
- Add the event entry to `fallback-data.js`
- Past events are automatically hidden on the site

### Remove an Event

**Say:** *"Remove the DJ Snake event"*

### Add Gallery Photos

**Say:** *"Add these photos to the gallery"* then provide the image paths or drag them in.

**Example:**
> Add these 3 photos to the gallery:
> C:\Users\suppo\Downloads\photo1.jpg
> C:\Users\suppo\Downloads\photo2.jpg
> C:\Users\suppo\Downloads\photo3.jpg

### Update a Bottle Price

**Say:** *"Change Grey Goose to $450"* or *"Update Casamigos to $550"*

### Add a New Bottle

**Say:** *"Add Bumbu rum at $350"*

### Remove a Bottle

**Say:** *"Remove Malibu from the menu"*

### Update VIP Packages

**Say:** *"Change the Rainmaker package to $900"* or *"Add a new package called The Globe Experience - $2,000 - 2 Ace of Spades, 1 Clase Azul, 1 1942"*

### Update Food Menu

**Say:** *"Add a new food item: Gold Drip Wings - crispy wings drizzled in 24k honey gold glaze, $18"*

**Say:** *"Remove Board & Boujee from the menu"*

### Change Schedule

**Say:** *"We're opening on Wednesdays now, call it Industry Night, 9PM-2AM"*

**Say:** *"Change Thursday's theme from Ladies Night to College Night"*

### Toggle a Promotion

**Say:** *"Turn off the Friday half-off special"* or *"Turn it back on"*

**Say:** *"Add a new promo: Spring Break Special - $50 off all packages, show it in the VIP section"*

### Update Site Text

**Say:** *"Change the hero subtitle to 'Spokane's Premier Nightlife'"*

**Say:** *"Update the about section paragraph to: [new text]"*

**Say:** *"Change the phone number to (509) 555-1234"*

### Update Social Links

**Say:** *"Update the Instagram handle to @globenightclub"*

---

## Deploying Changes

After Claude makes the edits, you have two options:

### Option A: Let Claude Deploy
**Say:** *"Deploy it"* or *"Push it live"*

Claude will commit the changes and push to git. Netlify auto-builds in ~30 seconds.

### Option B: Review First
**Say:** *"Show me what changed"*

Claude will show you a diff of the changes. Then say *"Looks good, deploy"* or *"Actually, change X instead"*.

---

## Bulk Updates

You can make multiple changes in one message:

> Update the site:
> - Add DJ Snake event March 21st, EDM, here's the flyer: [path]
> - Change Grey Goose to $450
> - Remove Velvet Swine from the food menu
> - Add 2 new gallery photos: [path1] [path2]
> - Turn off the bottle discount promo

Claude handles all of it in one pass.

---

## Reverting Changes

If something goes wrong:

**Say:** *"Undo the last change"* or *"Revert the last commit"*

Claude can roll back using git.

---

## Tips

- **Image files:** JPEG works best. Drop them into the chat or paste the file path.
- **Dates:** Use any natural format — "next Friday", "March 21st", "3/21/2026" all work.
- **Prices:** Include the dollar sign or don't — "$450" and "450" both work.
- **Proofing:** Say *"Show me the current bottle menu"* or *"What events are listed?"* to review what's on the site before making changes.
- **Cache:** If the live site looks stale after deploy, visit the URL with `?refresh=1` appended.
- **Reservation forms:** VIP booth reservations are handled by Netlify Forms. Check submissions at https://app.netlify.com under Forms.

---

## What NOT to Change via Claude Code

These require Netlify dashboard access:
- **Domain/DNS settings** — Netlify dashboard
- **Form submission notifications** — Netlify dashboard > Forms
- **Deploy settings** — Netlify dashboard > Site configuration
- **SSL certificate** — Managed automatically by Netlify

---

## File Reference

| What | File |
|------|------|
| All content data | `js/fallback-data.js` |
| Site images | `images/` folder |
| Page structure | `index.html` |
| Styles | `css/styles.css` |
| AI instructions | `CLAUDE.md` |
| This document | `SOP.md` |
