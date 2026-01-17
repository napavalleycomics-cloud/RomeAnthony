# Fridge by Otto - Wabi Mini-App Specification

## 🎯 Core Purpose
A therapeutic learning tool for adults with developmental disabilities to build independent living skills around fridge management over many months through gamification, rewards, and gradual learning.

---

## 📝 Wabi Prompt (Copy & Paste This)

```
Build me a fridge tracking app called "Fridge by Otto" for adults with developmental disabilities.

CORE FEATURES:
- Visual fridge display showing food items with large emoji icons
- Simple tap to add food (milk, eggs, bread, etc.)
- Simple tap to remove food when eaten
- Food items have color borders: green = fresh, yellow = eat soon, red = expired
- Progress tracking with levels, stars, and achievements
- Calming lavender and cream color scheme throughout
- Extremely large buttons (minimum 60px) for easy tapping
- Celebration animations when items are added/removed correctly
- Daily streak counter to encourage habit building
- Simple rewards: earn stars for checking fridge daily, adding items, removing old food

LEARNING FEATURES:
- "Food Fact of the Day" - simple tip about food storage
- Gentle reminders: "Check your fridge!" (not pushy)
- Success messages: "Great job! You removed the old milk!"
- Progress badges: "1 week streak!", "10 items tracked!", "Fridge Master!"

INTERFACE:
- Main screen: Visual fridge with all current items
- Bottom bar: "Add Food" and "Remove Food" buttons only
- Top: Show current level, stars earned, and streak
- Lavender (#9B8AC4) primary color everywhere
- Cream (#FFFEF9) background
- No complicated menus or settings
- Food list: common items only (milk, eggs, bread, cheese, chicken, vegetables, etc.)

SIMPLICITY RULES:
- No recipes or cooking instructions
- No shopping lists
- No manual expiry date entry (auto-calculate based on food type)
- No search function needed
- One food category at a time
- Maximum 20 food items to choose from at once

DATABASE NEEDED:
- User's current fridge items (name, emoji, date added, expiry date, freshness status)
- User progress (level, total stars, streak days, achievements earned)
- Simple food database (just name, emoji, default expiry days)

Make it feel like a gentle, supportive game that teaches food management skills over time.
```

---

## 🎨 Design Principles for Wabi Implementation

### Visual Hierarchy
1. **Most Important:** The fridge visual (70% of screen)
2. **Secondary:** Progress indicators (level, stars, streak)
3. **Actions:** Add/Remove buttons (always visible, never hidden)

### Calming Design Elements
- **Heavy lavender** throughout (not as accent, but primary)
- Soft rounded corners on everything (24px radius minimum)
- Gentle animations (slow, smooth, never jarring)
- Pastel color palette only
- Minimal text, maximum visual communication
- No red except for expired food warnings (and even then, soft red)

### Gamification Without Stress
- **Levels:** 1-10, based on days of use (not perfection)
  - Level 1: Just started
  - Level 5: 2 weeks of use
  - Level 10: 3 months of consistent use
- **Stars:** Earn 1 star for each action (add item, remove item, check fridge)
  - Stars accumulate forever (never taken away)
- **Streaks:** Count consecutive days of opening the app
  - No punishment for breaking streak
  - Just celebration when reaching milestones (7, 14, 30, 90 days)
- **Achievements:**
  - "First Item!" - Added first food
  - "Week Warrior" - 7 day streak
  - "Waste Reducer" - Removed 5 expired items
  - "Fridge Friend" - 30 days of use
  - "Food Expert" - 100 items tracked total

### Learning Journey (Over Months)

**Month 1: Awareness**
- Learn what's in the fridge
- Practice adding items when shopping
- Practice removing items when eating
- Daily fact: "Milk lasts 7 days in the fridge"

**Month 2: Habits**
- Build daily check-in habit
- Start noticing expiry colors
- Remove old food before it expires
- Daily fact: "Put raw meat on bottom shelf"

**Month 3+: Mastery**
- Independently manage fridge
- Understand expiry patterns
- Reduce waste naturally
- Daily fact: "Eggs can last 3 weeks!"

---

## 🎮 Game Mechanics

### Positive Reinforcement Only
- ✅ "Awesome! You added milk to your fridge!"
- ✅ "Great job checking in today! Day 3 streak!"
- ✅ "You earned a star! ⭐"
- ❌ NO: "You forgot to check in" or "Streak broken"

### Visual Feedback
- **Item Added:** Gentle bounce animation, sparkle effect, "+1 ⭐"
- **Item Removed:** Gentle fade out, success checkmark, "+1 ⭐"
- **Level Up:** Full screen celebration, confetti, new badge
- **Achievement Unlocked:** Special animation, share-worthy moment

### Progress Visibility
- Progress bar to next level (always visible)
- Star count that only goes up
- Achievement gallery (collection to view anytime)
- Streak calendar (shows last 30 days with check marks)

---

## 🍎 Food Item Database (Simplified)

### Everyday Essentials (20 items max at once)
**Dairy & Eggs:**
- 🥛 Milk (7 days)
- 🧀 Cheese (21 days)
- 🧈 Butter (30 days)
- 🥚 Eggs (21 days)

**Proteins:**
- 🍗 Chicken (2 days)
- 🥩 Beef (3 days)
- 🐟 Fish (1 day)

**Produce:**
- 🍅 Tomato (7 days)
- 🥕 Carrot (21 days)
- 🥬 Lettuce (7 days)
- 🍎 Apple (30 days)
- 🍌 Banana (7 days)

**Staples:**
- 🍞 Bread (5 days)
- 🧃 Juice (7 days)
- 💧 Water (365 days)

**Simple Prepared:**
- 🍕 Leftover Pizza (3 days)
- 🥗 Salad (2 days)
- 🍲 Soup (3 days)

---

## 🎯 Success Metrics (For Care Team Dashboard)

### If Otto parent app has analytics, track:
- Days active per week
- Items added vs removed (balance)
- Streak milestones reached
- Food waste reduction (expired items caught in time)
- Level progression over time
- Engagement with "Food Facts"

### Red Flags to Alert Care Team:
- No activity for 7+ days (gentle check-in needed)
- Many expired items not being removed (may need support)
- Only adding, never removing (may not understand the flow)

---

## 🔄 Progressive Complexity (Optional Future Phases)

### Phase 1 (First 3 Months): CURRENT SPEC ABOVE
Just tracking. Build the habit. Learn the interface.

### Phase 2 (After 3 Months):
- Introduce 5 more food items
- Add "Before I go shopping, check my fridge" reminder
- Simple yes/no questions: "Do you have milk?" (if yes, don't buy)

### Phase 3 (After 6 Months):
- Introduce concept of "What can I eat today?"
- Show which items expire soonest
- Suggestion: "Your lettuce expires tomorrow. Have a salad!"

### Phase 4 (After 9 Months):
- VERY simple recipes (only if user has shown mastery)
- "Sandwich" = bread + cheese + meat
- "Bowl of cereal" = milk + cereal
- Still no cooking, just assembly

**IMPORTANT:** Don't implement Phase 2-4 until user demonstrates consistent Phase 1 success.

---

## 🎨 Color Palette (Wabi Implementation)

### Primary Colors
- **Lavender:** `#9B8AC4` - All buttons, headers, highlights
- **Soft Lavender:** `#E6E1F5` - Secondary elements, cards
- **Deep Lavender:** `#7B6AA4` - Active states, emphasis

### Background Colors
- **Cream:** `#FFFEF9` - Main background
- **Off-White:** `#F5F5F0` - Card backgrounds
- **Pure White:** `#FFFFFF` - Pop-up overlays

### Status Colors (Soft, Not Harsh)
- **Fresh Green:** `#A8D5BA` - Fresh food borders
- **Warning Yellow:** `#FFE4A3` - Expiring soon borders
- **Gentle Red:** `#F5B5B5` - Expired borders

### Accent Colors
- **Gold Star:** `#FFD700` - Achievement stars
- **Celebration:** `#DDA0DD` - Level up effects

---

## 💬 Voice & Tone

### All Messages Should Be:
- Encouraging, never critical
- Simple language (3rd grade reading level)
- Friendly, like a supportive friend
- Patient and non-judgmental
- Celebrating small wins

### Examples:
- ✅ "You did it! Milk is in your fridge now."
- ✅ "Way to go! That's 3 days in a row!"
- ✅ "Your fridge looks great! 5 fresh items!"
- ❌ "Don't forget to check your fridge" (too pushy)
- ❌ "Oops! You missed a day" (discouraging)
- ❌ "Make sure you..." (commanding)

---

## 📱 Screen Flow (Keep It Simple)

```
HOME SCREEN (Main Fridge View)
├── Top Bar: Level Badge | ⭐ Star Count | 🔥 Streak Days
├── Middle: VISUAL FRIDGE with all items (scrollable if many)
│   └── Each item shows: emoji, name, colored border
└── Bottom: [+ Add Food] [− Remove Food]

TAP "+ Add Food"
├── Shows: 20 common food items in grid
├── Each item: Large emoji + name
└── Tap item → Confirmation → Success animation → Back to home

TAP "− Remove Food"
├── Shows: Only items currently in fridge
├── Each item: Large emoji + name + days left
└── Tap item → Confirmation → Success animation → Back to home

TAP Achievement Badge (Optional)
├── Shows: All earned achievements
├── Gray out unearned ones with "???"
└── Motivates continued use

TAP "Food Fact" (Daily, top of screen)
├── Shows: Simple tip about food storage
├── One sentence + emoji
└── Changes each day automatically
```

---

## 🧩 Wabi-Specific Implementation Notes

### Let Wabi Handle:
- Auto-generate food item icons (use emojis)
- Database structure for items and progress
- Basic UI layout with your color specifications
- Achievement tracking logic
- Streak calculation

### You May Need to Specify:
- Exact expiry calculations (e.g., "milk = added date + 7 days")
- Color border logic based on days remaining
- Achievement unlock conditions
- Gentle reminder notifications (if Wabi supports)

### Test & Iterate:
1. Build initial version in Wabi
2. Test with a care coordinator first
3. Observe with 2-3 adults with DD
4. Note confusion points
5. Simplify further based on feedback
6. Remix and republish

---

## ✅ Minimum Viable Product (MVP) Checklist

For initial Wabi build, must have:
- [ ] Visual fridge display
- [ ] Add food functionality (20 items)
- [ ] Remove food functionality
- [ ] Color-coded freshness (green/yellow/red borders)
- [ ] Star counter that increases
- [ ] Level display (even if just "Level 1")
- [ ] Success messages on actions
- [ ] Lavender color scheme throughout
- [ ] Large, tappable buttons (60px+)

Can add later:
- Streak tracking
- Achievement system
- Food facts
- Notifications
- Progress dashboard for care team

---

## 🎓 Educational Content Examples

### Daily Food Facts (Rotate):
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

### Achievement Names (Self-Esteem Building):
- "Getting Started!" - First item added
- "Fridge Champion!" - 10 items tracked
- "Week Warrior!" - 7 day streak
- "Waste Reducer!" - Removed 5 expired items
- "Food Friend!" - 30 days using app
- "Consistency King/Queen!" - 14 day streak
- "Fresh Food Pro!" - Kept fridge fresh for 7 days
- "Fridge Master!" - Level 5 reached
- "Super Organizer!" - Level 10 reached

---

## 🤝 Integration with Otto Parent App

### Data Otto Should Receive (If Applicable):
- Daily activity: yes/no
- Current level
- Total stars earned
- Longest streak
- Items in fridge count
- Waste reduction metric (expired items caught)

### What Otto Should NOT Do:
- Override Fridge app settings
- Show negative metrics to user
- Punish or restrict for non-use
- Make it complicated

### Care Team View (In Otto):
- Weekly summary: "Used 5/7 days this week"
- Milestone alerts: "Reached 30 day streak!"
- Gentle flags: "No activity for 10 days - may need support"
- Progress visualization over months

---

**This is a tool for dignity, independence, and growth.**
**Every interaction should build confidence, not create anxiety.**

---

**Made with 💜 by Otto**
*Empowering independence through thoughtful design*
