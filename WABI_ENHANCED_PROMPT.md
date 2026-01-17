# Enhanced Wabi Prompt - Fridge by Otto

## Full Detailed Prompt (Copy & Paste)

```
Build me "Fridge by Otto" - a fridge tracking app for adults with developmental disabilities.

CRITICAL VISUAL REQUIREMENT - THE FRIDGE GRAPHIC:
The main screen MUST show a visual illustration of a refrigerator, not just cards or lists. The fridge should:
- Be a large illustration/graphic taking up 60-70% of the screen height
- Show the fridge from the front (doors open view)
- Have visible shelves: top shelf, middle shelf, bottom shelf, and drawer at bottom
- Display food items INSIDE the fridge on the appropriate shelves
- Use a simple, clean illustration style with rounded corners
- Background color: cream (#FFFEF9)
- Fridge outline: soft gray or light lavender
- Each food item appears as a large emoji ON a shelf in the fridge

EXACT LAYOUT REQUIREMENTS:

TOP SECTION (20% of screen):
- Three rounded rectangles in a row with lavender borders (#9B8AC4):
  [🏆 LEVEL 1] [⭐ STARS 1] [🔥 STREAK 1]
- Background: white with soft lavender border
- Large, easy-to-read numbers

MIDDLE SECTION - THE FRIDGE (60% of screen):
- Large illustrated refrigerator graphic
- Fridge has 4 sections from top to bottom:
  1. FREEZER (top) - ice cream, frozen items
  2. TOP SHELF - milk, juice, leftovers
  3. MIDDLE SHELF - cheese, butter, eggs
  4. BOTTOM DRAWER - vegetables, fruits
- Each food item shows:
  - Large emoji icon (48px+)
  - Border around the emoji indicating freshness:
    * Green border (#A8D5BA) = fresh (3+ days left)
    * Yellow border (#FFE4A3) = eat soon (1-2 days left)
    * Red border (#F5B5B5) = expired
- Items are positioned INSIDE the fridge graphic on their shelves
- Empty shelves show as just the shelf line

ABOVE THE FRIDGE:
- Card with lavender header "Did you know? 💡"
- Daily food fact in friendly italic text
- Examples:
  "Milk lasts about 1 week in the fridge 🥛"
  "Keep raw meat on the bottom shelf 🍗"
- Soft lavender background (#E6E1F5)

BOTTOM SECTION (20% of screen):
- Two LARGE buttons side by side:
  [+ Add Food] [− Remove Food]
- Button styling:
  - Background: Lavender (#9B8AC4)
  - Text: White, bold, 18px
  - Height: 60px minimum
  - Rounded corners: 16px
  - Full width (each takes 45% width with 10% gap)

COLOR PALETTE:
- Primary lavender: #9B8AC4 (buttons, borders, headers)
- Background cream: #FFFEF9
- Card background: #E6E1F5 (soft lavender)
- Fresh border: #A8D5BA (soft green)
- Warning border: #FFE4A3 (soft yellow)
- Expired border: #F5B5B5 (soft red)
- Text: #333333 (dark gray)

FOOD ITEMS DATABASE (20 items):
Create a database with these exact items:

Dairy (put on middle shelf):
🥛 Milk - 7 days
🧀 Cheese - 21 days
🧈 Butter - 30 days
🥚 Eggs - 21 days

Protein (put on top shelf):
🍗 Chicken - 2 days
🥩 Beef - 3 days
🐟 Fish - 1 day

Produce (put in bottom drawer):
🍅 Tomato - 7 days
🥕 Carrot - 21 days
🥬 Lettuce - 7 days
🍎 Apple - 30 days
🍌 Banana - 7 days

Staples (put on top shelf):
🍞 Bread - 5 days
🧃 Juice - 7 days
💧 Water - 365 days

Prepared/Leftovers (top shelf):
🍕 Pizza - 3 days
🥗 Salad - 2 days
🍲 Soup - 3 days
🍦 Ice Cream - 60 days (freezer)

USER FLOW:

1. HOME SCREEN shows the fridge with current items
   - User sees all food visually organized on shelves
   - Color borders show what's fresh vs expiring
   - Can tap any item to see "X days remaining"

2. TAP [+ Add Food]:
   - Show grid of 20 food items (4 columns, 5 rows)
   - Each cell: large emoji (64px) + name below
   - Tap an item → animate it onto the fridge
   - Show success: "You did it! [Food] is in your fridge now. ⭐"
   - Earn +1 star
   - Return to home screen

3. TAP [− Remove Food]:
   - Show ONLY items currently in fridge
   - Display as list: emoji + name + "X days left"
   - Tap item → "Remove [Food]?" confirmation
   - On yes → success message "Great job! ⭐"
   - Earn +1 star
   - Return to home screen

GAMIFICATION LOGIC:

STARS:
- Earn 1 star for: adding item, removing item, opening app daily
- Stars accumulate forever (never decrease)
- Display at top: "⭐ [number]"

LEVELS:
- Level 1: Days 1-3
- Level 2: Days 4-7
- Level 3: Days 8-14
- Level 4: Days 15-21
- Level 5: Days 22-30
- Level 6: Days 31-45
- Level 7: Days 46-60
- Level 8: Days 61-75
- Level 9: Days 76-89
- Level 10: Day 90+
- Show at top: "🏆 LEVEL [number]"

STREAK:
- Count consecutive days app is opened
- Show at top: "🔥 [number] days"
- If streak breaks, start over from 1 (don't show "0")

ACHIEVEMENTS (unlock and display):
- "Getting Started!" - Add first item
- "Week Warrior!" - 7 day streak
- "Fridge Champion!" - Track 10 items total
- "Waste Reducer!" - Remove 5 expired items
- "Food Friend!" - 30 days using app
- "Consistency King/Queen!" - 14 day streak
- "Fresh Food Pro!" - Keep fridge fresh 7 days
- "Fridge Master!" - Reach Level 5
- "Super Organizer!" - Reach Level 10

FRESHNESS CALCULATION:
When an item is added:
- Store: date added + expiry days = expiry date
- Calculate daily:
  - Days left = expiry date - today
  - If days left > 2: green border
  - If days left = 1-2: yellow border
  - If days left ≤ 0: red border

VOICE & TONE (all messages):
✅ Use: "You did it!", "Great job!", "Awesome!", "Way to go!"
❌ Never: "Don't forget", "You missed", "Oops", "Make sure"

Keep language at 3rd grade reading level
Always encouraging, never critical
Celebrate every action with a star

DAILY FOOD FACTS (rotate):
1. "Milk lasts about 1 week in the fridge 🥛"
2. "Keep raw meat on the bottom shelf 🍗"
3. "Eggs can last 3 weeks! 🥚"
4. "Cheese lasts longer than milk 🧀"
5. "Put vegetables in the drawer 🥬"
6. "Bread lasts 5 days on the counter 🍞"
7. "Fish is best eaten within 1 day 🐟"
8. "Butter can last a month! 🧈"
9. "Bananas last about a week 🍌"
10. "Leftover pizza: eat in 3 days 🍕"

ANIMATIONS:
- When item added: gentle bounce animation, sparkle effect
- When item removed: fade out animation
- When level up: confetti celebration
- When achievement unlocked: badge pop-up with shine effect
- All animations should be slow and smooth (calming, not jarring)

ACCESSIBILITY:
- All buttons minimum 60px height
- All emojis minimum 48px
- High contrast text
- No small text under 16px
- Touch targets never overlap

Make the visual fridge the star of the app - it should feel like you're looking into a real fridge and managing what's inside. This is a therapeutic tool for building independence, so every interaction should feel supportive and rewarding.
```

---

## Key Changes from Previous Prompt

1. **MUCH more specific about the fridge visual** - described it as an illustration with shelves, not cards
2. **Exact positioning** - specified where each food type goes (freezer, top shelf, middle shelf, drawer)
3. **Detailed layout percentages** - gave exact screen real estate breakdowns
4. **Specific visual hierarchy** - described the exact order: progress bars → food fact → fridge → buttons
5. **Shelf organization logic** - items appear on appropriate shelves based on food type
6. **More detailed color specs** - exact hex codes for everything
7. **Animation descriptions** - to help Wabi understand the feel

## What to Try

1. **Copy this new prompt** and paste into a fresh Wabi build
2. If Wabi still gives you cards instead of a fridge, try adding:
   - "Create a background image of an open refrigerator"
   - "Items should overlay on the fridge graphic, not appear as separate cards"
3. **Use Wabi's remix feature** to iterate:
   - If it gets the fridge but layout is wrong, describe the fix
   - If colors are off, specify the exact change needed

Let me know what Wabi outputs with this enhanced prompt and we'll keep refining! 🚀
