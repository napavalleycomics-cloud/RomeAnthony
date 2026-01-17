# Fridge by Otto - Final Research-Backed Wabi Prompt

## Copy This Entire Prompt Into Wabi

```
Build "Fridge by Otto" - a therapeutic life skills learning app for adults with developmental disabilities.

RESEARCH FOUNDATION:
This app is based on proven teaching methods from "Let's Cook!", "Teaching Authentic Cooking Skills to Adults With IDD", "The Neurodivergent-Friendly Cookbook", and "Crip Up the Kitchen". It uses visual task analysis, executive function support, and scaffolded independence building - not just food tracking.

THE VISUAL FRIDGE (60-70% of screen):
Create a large illustrated refrigerator graphic showing an open fridge from the front with 4 visible shelves:
- FREEZER (top section) - for ice cream, frozen items
- TOP SHELF (upper middle) - for milk, juice, leftovers, bread
- MIDDLE SHELF (lower middle) - for cheese, butter, eggs, proteins
- BOTTOM DRAWER (bottom) - for vegetables, fruits

Food items appear as large emojis (48px+) positioned ON the appropriate shelf.
Empty shelves show as just shelf lines.
The fridge should feel like a real fridge you're looking into.

FOOD PLACEMENT (Built-In Safety Education):
When items are added, they automatically go to the CORRECT shelf for food safety:
- Raw meat/fish → BOTTOM shelf (prevents dripping on other food)
- Dairy/eggs → MIDDLE shelf (optimal temperature zone)
- Vegetables/fruits → BOTTOM DRAWER (humidity controlled)
- Prepared food/leftovers → TOP shelf (ready to eat)
- Frozen items → FREEZER (obvious)

This teaches proper food storage through use.

COLOR-CODED FRESHNESS BORDERS:
Each food item has a colored border indicating freshness:
- Green border (#A8D5BA) = FRESH (3+ days left) - safe to eat anytime
- Yellow border (#FFE4A3) = EAT SOON (1-2 days left) - plan to use today/tomorrow
- Red border (#F5B5B5) = EXPIRED (0 or fewer days) - remove for safety

Colors are soft/pastel (therapeutic, not alarming).

TOP SECTION (Progress Tracking):
Three rounded cards showing real-life skill progress:
- [🏆 LEVEL X] - Based on days of consistent use
- [⭐ X STARS] - Earned from completing real tasks
- [🔥 X DAY STREAK] - Consecutive days checking fridge

Background: white cards with soft lavender borders (#9B8AC4)

DAILY LEARNING CARD (Above fridge):
Card with lavender header "Did you know? 💡"
Displays rotating educational tips about REAL kitchen skills:
- "Keep raw meat on the BOTTOM shelf to stay safe 🍗"
- "Put vegetables in the DRAWER to keep them fresh 🥬"
- "Check your fridge BEFORE shopping to save money 💰"
- "Food that expires soon should be eaten first 📅"
- "Milk lasts about 1 week in the fridge 🥛"
- "Eggs can last 3 weeks! 🥚"
- "Put leftovers away within 2 hours ⏰"
- "The coldest part is the back of the middle shelf ❄️"

Changes daily. Teaches food safety, storage, and planning.

BOTTOM SECTION (Actions):
Two large buttons side by side:
[+ Add Food] [− Remove Food]
- Height: 60px minimum (very easy to tap)
- Background: Lavender (#9B8AC4)
- Text: White, bold, 18px
- Rounded corners: 16px
- Each button takes 45% width with 10% gap between

COLOR PALETTE (Therapeutic & Calming):
- Primary lavender: #9B8AC4 (buttons, borders, headers)
- Background cream: #FFFEF9 (warm, gentle)
- Soft lavender: #E6E1F5 (cards, secondary elements)
- Fresh green: #A8D5BA (calm, positive)
- Warning yellow: #FFE4A3 (gentle alert)
- Expired red: #F5B5B5 (soft, not harsh)
- Text: #333333 (high contrast but not pure black)

FOOD DATABASE (20 Items):
Each item includes: name, emoji, category, default expiry days, correct shelf location

Dairy (middle shelf):
- 🥛 Milk - 7 days
- 🧀 Cheese - 21 days
- 🧈 Butter - 30 days
- 🥚 Eggs - 21 days

Protein (middle shelf, but raw meat on BOTTOM):
- 🍗 Chicken (raw) - 2 days - BOTTOM SHELF
- 🥩 Beef (raw) - 3 days - BOTTOM SHELF
- 🐟 Fish (raw) - 1 day - BOTTOM SHELF

Produce (bottom drawer):
- 🍅 Tomato - 7 days
- 🥕 Carrot - 21 days
- 🥬 Lettuce - 7 days
- 🍎 Apple - 30 days
- 🍌 Banana - 7 days

Staples (top shelf):
- 🍞 Bread - 5 days
- 🧃 Juice - 7 days
- 💧 Water - 365 days

Prepared/Leftovers (top shelf):
- 🍕 Leftover Pizza - 3 days
- 🥗 Salad - 2 days
- 🍲 Soup - 3 days

Frozen (freezer):
- 🍦 Ice Cream - 60 days

USER FLOWS:

HOME SCREEN:
User sees the visual fridge with all current items on their shelves.
Progress tracking at top.
Daily tip above fridge.
Two action buttons at bottom.

TAP [+ Add Food]:
1. Show grid of 20 food items (4 columns, 5 rows)
2. Each cell: Large emoji (64px) + name below
3. User taps an item
4. Animate item appearing on the CORRECT shelf in fridge
5. Success message: "You did it! [Food] is in your fridge now! ⭐"
   - If it's meat: "Great! Chicken goes on the bottom shelf for safety! ⭐"
   - If it's produce: "Perfect! Lettuce goes in the drawer to stay fresh! ⭐"
6. Earn +1 star
7. Auto-return to home screen showing item on its shelf

TAP [− Remove Food]:
1. Show list of items currently in fridge
2. Display: emoji + name + days left + freshness status
3. User taps an item to remove
4. Confirmation: "Remove [Food]?"
5. On confirm: Success message
   - If expired: "Great job! You removed the old [Food]! That's being safe! ⭐"
   - If fresh: "You did it! Enjoy your [Food]! ⭐"
6. Earn +1 star
7. Item disappears from fridge with gentle fade animation
8. Auto-return to home screen

GAMIFICATION (Life Skills Based):

STARS:
Earn 1 star for:
- Adding an item (building awareness)
- Removing an item (maintaining fridge)
- Removing an EXPIRED item (safety behavior!)
- Opening app daily (building habit)

Stars accumulate forever (never decrease).
Purpose: Reward real behaviors, not just clicks.

LEVELS (Based on Consistent Use):
- Level 1: Days 1-3 (Getting started)
- Level 2: Days 4-7 (First week!)
- Level 3: Days 8-14 (Building habit)
- Level 4: Days 15-21 (Three weeks!)
- Level 5: Days 22-30 (One month!)
- Level 6: Days 31-45
- Level 7: Days 46-60 (Two months!)
- Level 8: Days 61-75
- Level 9: Days 76-89
- Level 10: Day 90+ (Three months - Independence!)

Each level up triggers celebration animation.

STREAKS:
Count consecutive days the app is opened.
If streak breaks, start over from 1 (don't show 0).
No punishment for missing days.
Celebrate milestones: 7, 14, 30, 60, 90 days.

ACHIEVEMENTS (Life Skills Categories):

AWARENESS SKILLS:
- "I Know What I Have!" - Checked fridge 7 days in a row
- "Food Detective!" - Correctly identified 5 expired items
- "Fresh Keeper!" - Kept all items fresh for 7 days straight

SAFETY SKILLS:
- "Safety First!" - Removed 5 expired items before eating (prevented food poisoning)
- "Meat Master!" - Stored raw meat on bottom shelf 5 times correctly
- "Quick Cooler!" - Refrigerated items same day (within 2 hours concept)

ORGANIZATION SKILLS:
- "Shelf Star!" - Placed 10 items on correct shelves
- "Drawer Pro!" - Stored all vegetables in drawer correctly
- "Zone Champion!" - Organized fridge by food type zones

HABIT BUILDING:
- "Week Warrior!" - 7 day streak
- "Consistency King/Queen!" - 14 day streak
- "Fridge Friend!" - 30 day streak (one month!)
- "Super Organizer!" - 90 day streak (independence!)

WASTE REDUCTION:
- "Waste Warrior!" - Reduced food waste by removing expired items promptly
- "FIFO Pro!" - Ate oldest food first (first in, first out)
- "Smart Eater!" - Used all expiring items before they went bad

Each achievement unlocks with celebratory animation and badge display.

VOICE & TONE:

Use encouraging, educational language based on "What I Did" framework:
✅ "You did it! Milk is in your fridge now!" (simple confirmation)
✅ "Great job! You put the lettuce in the drawer! That keeps it fresh longer!" (educational)
✅ "Smart thinking! You removed the old chicken before it could make you sick!" (safety)
✅ "Way to go! That's 7 days in a row! You're building a great habit!" (skill recognition)

❌ NEVER use: "Don't forget", "You missed", "Oops", "Try again", "Make sure"

Keep all language at 3rd grade reading level.
Always be encouraging, never critical.
Connect actions to real-world skills when possible.

EXECUTIVE FUNCTION SUPPORT:

ONE STEP AT A TIME:
- Never show multi-step flows
- Each action completes before next begins
- Clear "what's next" is always visible
- No hidden menus or navigation

VISUAL + TEXT:
- Every concept has an icon AND words
- Color coding supplements text
- Emoji make items recognizable without reading

MEMORY SUPPORT:
- Show when items were added ("Added 3 days ago")
- Visual history of recent actions
- Consistent layout (buttons always in same place)

DECISION SUPPORT:
- Color borders show "eat now" vs "save for later"
- Shelf placement teaches organization
- Daily tips provide just-in-time learning

ENERGY EFFICIENT:
- Minimize taps needed
- Large touch targets (no precision required)
- Quick actions (add/remove in 2 taps)
- No typing needed (emoji selection)

ANIMATIONS (Gentle & Slow):

Item added:
- Gentle bounce onto shelf
- Small sparkle effect
- "+1 ⭐" floats up

Item removed:
- Gentle fade out
- Success checkmark
- "+1 ⭐" floats up

Level up:
- Soft confetti (not overwhelming)
- New level badge appears
- Encouraging message

Achievement unlocked:
- Badge pops in with gentle shine
- Achievement name displays
- Option to share with care team

All animations should be SLOW and SMOOTH (calming, never jarring).

ACCESSIBILITY:

- All buttons: minimum 60px height
- All emojis: minimum 48px size
- All text: minimum 16px size
- Touch targets: never overlap, clear spacing
- High contrast: all text readable
- Simple language: 3rd grade level
- No time pressure: work at your own pace
- Positive only: never critical or punishing

PHASE 1 FOCUS (First 3 Months):

This initial version focuses on AWARENESS:
- What food do I have?
- How long does food last?
- Where should food go?
- When should I remove old food?
- Building a daily habit

Later phases will add:
- Planning (check before shopping)
- Advanced organization (visual zones)
- Simple meal assembly (sandwich = bread + cheese)

But for now: keep it SIMPLE. Build the foundation.

CORE GOAL:

This is not a food tracker. This is a therapeutic tool that teaches life skills through scaffolded practice.

Every interaction should:
1. Build awareness (what's in my fridge)
2. Teach safety (proper storage, expiry)
3. Encourage organization (correct shelves)
4. Reward consistency (daily habits)
5. Build toward independence (self-management)

The fridge becomes a safe practice space for real-world skills.

Make it supportive, educational, and empowering.
Not just tracking food - teaching life skills.
```

---

## After Building in Wabi

### Test These Key Features:

1. **Visual fridge appears** with shelves (not just cards)
2. **Items go to correct shelves** automatically (safety education)
3. **Color borders work** (green/yellow/red freshness)
4. **Achievements are life skills focused** (not just "used app X days")
5. **Success messages are educational** (explain WHY something is good)
6. **Daily tips rotate** and teach real kitchen skills

### If Something's Missing:

Use Wabi's **remix** feature to add:
- "Make the fridge graphic larger and more prominent"
- "Add educational messages when items are added to shelves"
- "Include food safety tips in success messages"
- "Emphasize life skills in achievement descriptions"

---

## Key Differences from Previous Versions

### 1. Educational Focus
Every interaction teaches something about food safety, storage, or planning.

### 2. Proper Shelf Placement
Items automatically go to correct shelves - this teaches through use.

### 3. Life Skills Achievements
Not "used app 7 days" but "demonstrated safety awareness by removing expired meat"

### 4. Executive Function Support
Designed specifically to reduce cognitive load and support planning.

### 5. Research-Backed Language
Uses "What I Did" framework proven effective for adults with DD.

### 6. Real-World Transfer
Everything connects to actual kitchen skills, not just app usage.

---

**This is the research-backed, therapeutically sound version.**
**It teaches independence through supportive, scaffolded practice.**

