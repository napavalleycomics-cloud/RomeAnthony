# Fridge by Otto - Research-Backed Design Specification

## 📚 Research Foundation

Based on evidence-based resources for adults with developmental disabilities:
- **Let's Cook!** - "What I Need / What I Use / What I Do" visual step framework
- **Teaching Authentic Cooking Skills** - Life skills teaching program, not just recipes
- **The Neurodivergent-Friendly Cookbook** - Executive function support, cognitive load reduction
- **Crip Up the Kitchen** - Energy preservation, adaptive strategies
- **Accessible Chef** - Visual task analysis, breaking tasks into manageable steps

---

## 🎯 Core Principles from Research

### 1. Visual Task Analysis
Break every interaction into **visible, manageable micro-steps**
- Not just "add milk" but show the journey: shop → bring home → put in fridge
- Make invisible tasks visible (planning, checking, organizing)

### 2. Executive Function Support
Reduce cognitive load through:
- **Sequencing** - One step at a time, clear "what's next"
- **Planning support** - Visual checklists, pre-decision tools
- **Memory aids** - Visual inventory, photo-based reminders
- **Time management** - No pressure, but gentle structure

### 3. Real-Life Skill Building (Not Just App Usage)
Gamify actual life skills:
- Planning before shopping
- Organizing the fridge space
- Making decisions about food
- Building routines and habits
- Energy-efficient practices

### 4. Scaffolding Independence
- Start with awareness (Phase 1)
- Build to planning (Phase 2)
- Progress to organizing (Phase 3)
- Eventually: meal assembly (Phase 4)
- Turn reading into action

---

## 🏗️ Enhanced Backend Architecture

### Database Schema (Expanded)

**1. Food Items Table**
```
food_items:
  - id (unique)
  - name (string)
  - emoji (string)
  - category (dairy, protein, produce, staples, prepared)
  - shelf_location (freezer, top, middle, drawer)
  - default_expiry_days (integer)
  - storage_tip (string) - "Keep on bottom shelf", "Store in drawer"
  - safety_level (string) - "high risk" (fish, meat), "medium", "low"
```

**2. User Fridge Items Table**
```
user_fridge_items:
  - id (unique)
  - user_id (foreign key)
  - food_item_id (foreign key)
  - quantity (integer)
  - date_added (timestamp)
  - expiry_date (timestamp)
  - freshness_status (fresh, expiring, expired)
  - source (shopping_trip_id or manual) - track WHERE it came from
  - location_correct (boolean) - is it on the right shelf?
```

**3. User Progress Table**
```
user_progress:
  - user_id (unique)
  - current_level (1-10)
  - total_stars (integer)
  - current_streak (integer)
  - longest_streak (integer)
  - life_skills_unlocked (array) - which real-world skills achieved
  - phase (1-4) - which learning phase user is in
```

**4. Achievements Table** (Life Skills Focused)
```
achievements:
  - id (unique)
  - name (string)
  - description (string)
  - icon (string)
  - category (awareness, planning, organizing, decision_making, safety)
  - unlock_criteria (JSON) - conditions to unlock
  - life_skill_tie (string) - which real skill this represents
```

**5. Shopping Trips Table** (Future Phase 2)
```
shopping_trips:
  - id (unique)
  - user_id (foreign key)
  - date (timestamp)
  - checked_fridge_first (boolean) - did they check app before shopping?
  - items_bought (array)
  - duplicates_avoided (integer) - items they already had
```

**6. Daily Activities Table** (Track Real Behaviors)
```
daily_activities:
  - id (unique)
  - user_id (foreign key)
  - date (timestamp)
  - opened_app (boolean)
  - checked_fridge (boolean)
  - added_items (integer)
  - removed_items (integer)
  - removed_expired (integer)
  - organized_shelf (boolean) - future: did they organize by location?
```

**7. Life Skills Milestones Table**
```
life_skills_milestones:
  - id (unique)
  - user_id (foreign key)
  - skill_name (string)
  - date_achieved (timestamp)
  - evidence (string) - what behavior showed this skill
  - care_team_notified (boolean)
```

---

## 🎮 Research-Backed Gamification

### Achievement Categories (Based on Real Life Skills)

**AWARENESS SKILLS** (Phase 1 - First Month)
- "I Know What I Have!" - Checked fridge 7 days in a row
- "Food Detective" - Correctly identified expired item 5 times
- "Fresh Keeper" - Kept all items fresh for 1 week
- "Streak Starter" - 3 days of daily check-ins

**PLANNING SKILLS** (Phase 2 - Month 2-3)
- "Smart Shopper" - Checked fridge before shopping trip
- "No Duplicates!" - Avoided buying something already in fridge
- "List Maker" - Created shopping list from fridge gaps (future feature)
- "Weekly Planner" - Planned meals based on what's expiring

**ORGANIZING SKILLS** (Phase 3 - Month 3-6)
- "Shelf Master" - Organized fridge by proper storage zones
- "Safety First" - Kept raw meat on bottom shelf consistently
- "Veggie Pro" - Stored all vegetables in drawer correctly
- "FIFO Champion" - Ate oldest food first (first in, first out)

**DECISION MAKING SKILLS** (Phase 3-4 - Month 6+)
- "Quick Thinker" - Decided what to eat based on expiry dates
- "Waste Warrior" - Reduced food waste by 50% over 30 days
- "Meal Assembler" - Created 10 simple meals from fridge items
- "Independence Champion" - Managed fridge solo for 90 days

**SAFETY SKILLS** (Ongoing)
- "Temperature Keeper" - Refrigerated food within 2 hours
- "Cross-Contamination Avoider" - Stored raw/cooked separately
- "Expiry Expert" - Never ate expired high-risk food (meat, fish)

---

## 💫 Enhanced Features (Informed by Research)

### Visual Task Breakdowns

**Adding Food (Full Journey View)**
Instead of just "Add milk":

```
Phase 1 (Current):
[Shopping] → [Bring Home] → [Add to Fridge]

Phase 2 (After 3 months):
[Check Fridge] → [Make List] → [Shop] → [Bring Home] → [Put Away]

Phase 3 (After 6 months):
[Check What's Expiring] → [Plan Meals] → [Check Fridge] → [Shop for Gaps] → [Organize Properly]
```

### Executive Function Support Tools

**1. Visual Inventory (Phase 2)**
- Photo-based fridge view
- "What I Have" quick glance
- Color-coded zones (dairy section, produce section, etc.)
- Visual reminder: "Check me before shopping!"

**2. Pre-Shopping Checklist (Phase 2)**
```
Before You Shop:
☐ Open Fridge app
☐ Look at what you have
☐ Check what's yellow (expiring)
☐ Think: "Do I need milk?"
☐ Make your list
```

**3. Simple Decision Tree (Phase 3)**
```
"What should I eat today?"
→ Show items expiring soonest (yellow border)
→ Suggest: "Your lettuce expires tomorrow! Have a salad?"
→ Mark as "eaten" when used
```

**4. Energy-Efficient Design**
- Minimize steps to complete tasks
- Save common patterns ("I always buy milk")
- Quick add from history
- Batch operations (add multiple items at once)

---

## 🎨 Enhanced Wabi Prompt (Research-Based)

```
Build "Fridge by Otto" - a therapeutic life skills app for adults with developmental disabilities.

RESEARCH-BACKED DESIGN PRINCIPLES:
This app is based on proven methods from teaching cooking and kitchen skills to adults with developmental disabilities. Use visual task analysis, executive function support, and scaffolded independence building.

CORE FEATURES (Phase 1 - First 3 Months):

VISUAL FRIDGE DISPLAY:
- Large illustrated fridge graphic (60-70% of screen)
- Shows open fridge with 4 visible shelves:
  * Freezer (top) - frozen items
  * Top shelf - milk, juice, leftovers
  * Middle shelf - dairy, proteins, eggs
  * Bottom drawer - vegetables, fruits
- Each food item displays as large emoji (48px+) positioned ON its proper shelf
- Color-coded borders show freshness:
  * Green (#A8D5BA) = Fresh (3+ days)
  * Yellow (#FFE4A3) = Eat soon (1-2 days)
  * Red (#F5B5B5) = Expired (remove now)
- Items placed on CORRECT shelf for food safety (meat on bottom, dairy in middle)

LIFE SKILLS PROGRESS TRACKING:
- Top bar shows: [🏆 LEVEL X] [⭐ X STARS] [🔥 X DAY STREAK]
- Track REAL behaviors, not just app usage:
  * Daily fridge checks
  * Removing expired items (safety skill)
  * Keeping items on correct shelves (organization skill)
  * Building consistent habits (independence skill)

ACHIEVEMENTS (Life Skills Based):
Not just "used app 7 days" but real-world skills:
- "I Know What I Have!" - Shows awareness of fridge contents
- "Food Detective!" - Caught 5 expired items before eating them (safety)
- "Fresh Keeper!" - Kept all items fresh for 1 week (planning)
- "Shelf Master!" - Stored items on correct shelves consistently (organization)
- "Smart Checker!" - Checked fridge before shopping (decision making)

VISUAL TASK SUPPORT:
- "Did you know?" daily tips teach real kitchen skills:
  "Keep raw meat on the BOTTOM shelf to stay safe 🍗"
  "Put vegetables in the DRAWER to keep them fresh 🥬"
  "Check your fridge BEFORE shopping to save money 💰"
  "Food that expires soon goes in FRONT 📅"

TWO MAIN ACTIONS:
Bottom bar has two large lavender buttons (60px tall):
- [+ Add Food] - After shopping, add what you bought
- [− Remove Food] - When you eat or throw away items

EXECUTIVE FUNCTION FRIENDLY:
- ONE step at a time (never multi-step flows)
- Clear visual progression (what's next is always obvious)
- No hidden menus or complex navigation
- Memory support (shows what you added, when)
- Decision support (suggests what to eat based on expiry)
- Energy efficient (minimize taps to accomplish tasks)

COLOR SCHEME (Calming, Therapeutic):
- Primary: Lavender #9B8AC4 (all buttons, headers, borders)
- Background: Cream #FFFEF9 (gentle, warm)
- Cards: Soft Lavender #E6E1F5
- Fresh: Soft Green #A8D5BA
- Warning: Gentle Yellow #FFE4A3
- Expired: Soft Red #F5B5B5

FOOD SAFETY BUILT IN:
Items automatically go to correct shelf:
- Raw meat → Bottom shelf (safety)
- Dairy → Middle shelf (organization)
- Vegetables → Bottom drawer (freshness)
- Prepared food → Top shelf (accessibility)

DATABASE STRUCTURE:
Store for each food item:
- Name, emoji, category
- Default expiry days
- Correct shelf location
- Storage tip (educational)
- Safety level (high risk like fish, low risk like butter)

Store for each user:
- Current fridge items
- Progress (level, stars, streak)
- Life skills achieved (not just app achievements)
- Learning phase (1-4)
- Real behaviors tracked:
  * Days checked fridge
  * Expired items removed
  * Items placed correctly
  * Checked before shopping (future)

SCAFFOLDED LEARNING (Unlock Over Time):
Phase 1 (First 3 months): Just awareness
- Add items, remove items
- Learn what's in fridge
- Build daily habit
- Understand expiry colors

Phase 2 (Month 3-6): Add planning
- "Before you shop, check your fridge!"
- Show what you already have
- Avoid buying duplicates
- Build shopping list (future)

Phase 3 (Month 6-9): Add organizing
- Visual zones (dairy section, produce section)
- Proper shelf placement feedback
- FIFO principle (eat oldest first)
- Meal suggestions from expiring items

Phase 4 (Month 9+): Simple meal assembly
- "You have bread + cheese = Sandwich!"
- No cooking, just putting together
- Based on what's available and expiring
- Builds decision-making skills

VOICE & TONE (Research-Based):
Use "What I Need / What I Use / What I Do" framework:
✅ "Great job! You added milk to your fridge."
✅ "You did it! You removed the old chicken." (safety!)
✅ "Way to go! You put the lettuce in the drawer!" (organization!)
✅ "Smart thinking! You checked before shopping." (planning!)

❌ Never: "Don't forget", "You missed", "Oops", "Try again"

ACCESSIBILITY:
- Large touch targets (60px minimum)
- Simple language (3rd grade level)
- Visual + text for everything
- No time pressure
- Positive reinforcement only
- Reduce cognitive load at every step

CORE GOAL:
This is a therapeutic tool to build real-world independence through scaffolded life skills practice. Every interaction should teach something useful about food storage, safety, planning, or organization. The fridge becomes a safe practice space for skills that transfer to real life.

Make it feel supportive, educational, and empowering - not just a tracker, but a teacher.
```

---

## 📊 Care Team Dashboard (Backend Support)

### Data Points to Track & Share

**Skill Progression Metrics:**
- Awareness skills demonstrated (knows what's in fridge)
- Planning behaviors (checks before shopping)
- Organization skills (correct shelf placement rate)
- Safety behaviors (expired item removal rate)
- Decision-making growth (meal choices based on inventory)
- Independence level (decreasing need for prompts)

**Red Flags for Support:**
- No activity for 7+ days
- High rate of expired items not removed (safety concern)
- Only adding, never removing (doesn't understand flow)
- Always buying duplicates (not checking first)
- Items consistently on wrong shelves (needs organization support)

**Celebration Moments:**
- First week streak
- First safety achievement (removed expired meat)
- First planning achievement (checked before shopping)
- Sustained independence (30/60/90 day milestones)
- Life skill transfer (care team reports real-world improvement)

---

## 🔄 Progressive Feature Rollout

### Phase 1: Awareness (Current - First 3 Months)
**Focus:** "What do I have?"
- Visual fridge display
- Add/remove items
- Color-coded freshness
- Daily food facts (safety & storage tips)
- Streak tracking
- Life skills achievements (awareness category)

### Phase 2: Planning (Month 3-6)
**Focus:** "What do I need?"
**Unlock when:** 30-day streak OR Level 5 reached
- Pre-shopping checklist
- "Check your fridge first!" reminder
- Duplicate detection ("You already have milk!")
- Shopping list builder (based on fridge gaps)
- Planning achievements unlock

### Phase 3: Organizing (Month 6-9)
**Focus:** "Where should it go?"
**Unlock when:** Consistent Phase 2 success
- Visual shelf zones (dairy section, produce section)
- Correct placement feedback ("Meat goes on bottom shelf!")
- FIFO guidance (eat oldest first)
- Organization achievements
- Safety achievements (proper storage)

### Phase 4: Decision Making (Month 9+)
**Focus:** "What should I eat?"
**Unlock when:** Strong organization skills shown
- Meal suggestions from available items
- "Eat this soon!" gentle prompts
- Simple assembly ideas (sandwich = bread + cheese + meat)
- Decision-making achievements
- Independence milestones

---

## 🎯 Success Metrics (Research-Aligned)

**App Metrics:**
- Daily active use
- Streak length
- Items tracked
- Achievements earned

**Life Skills Metrics (More Important):**
- Food waste reduction (expired items removed promptly)
- Safety behaviors (high-risk items managed correctly)
- Planning behaviors (checking before shopping)
- Organization skills (correct shelf placement)
- Decision making (eating expiring food first)
- Independence level (self-sufficiency over time)

**Real-World Impact (Care Team Reports):**
- Increased kitchen confidence
- Better meal planning
- Reduced food waste
- Improved safety practices
- Greater independence in daily living
- Skills transfer beyond the app

---

## 💡 Adaptive Strategies (From Research)

### Energy Preservation
- Batch operations (add multiple items at once)
- Quick add from recent items
- Visual scan (no typing needed)
- Minimal taps to complete tasks

### Cognitive Load Reduction
- One clear task at a time
- No multi-step hidden flows
- Visual cues for everything
- Consistent patterns throughout
- Never more than 2 choices on screen

### Memory Support
- Show purchase date on items
- Visual history ("Added 3 days ago")
- Photo-based recognition
- Familiar emoji icons (not abstract)

### Executive Function Scaffolding
- Clear sequencing (step 1, step 2, step 3)
- Planning support (checklists, reminders)
- Organization tools (zones, categories)
- Decision trees (if this, then that)

---

## 📚 Integration with Larger Life Skills Journey

**Fridge by Otto is one tool in the Otto ecosystem:**

- **Otto Chatbot** - Answers questions about food storage, safety, etc.
- **Otto Fridge** (this app) - Hands-on practice of fridge management
- **Otto Recipes** (future) - Step-by-step visual cooking
- **Otto Shopping** (future) - List making, store navigation
- **Otto Meal Planner** (future) - Weekly planning support

**Each app teaches discrete skills that build toward kitchen independence.**

---

**This is evidence-based design for real-world impact.**
**Every feature should answer: "What life skill does this teach?"**

---

**Made with 💜 by Otto**
*Research-backed tools for meaningful independence*
