# Fridge by Otto

**A therapeutic learning tool for adults with developmental disabilities to build independent living skills through fridge management.**

Built on the [Wabi platform](https://wabi.ai) - designed for daily ILS (Independent Living Support) with service coordinators, parents, and care teams.

## 🎯 Purpose

The fridge is one of the most difficult aspects of independent living for neurodivergent adults. **Fridge by Otto** transforms fridge management into a supportive, game-like learning journey that builds confidence and skills over many months.

### The Real Challenge
Adults with developmental disabilities face unique barriers:
- Health issues and dietary restrictions
- Food uncertainties and scarcity concerns
- Questions about storage, preparation, and timing
- A world not designed for neurodivergent needs

### Our Solution
A **therapeutic tool** that:
- Makes fridge management feel like a rewarding game
- Builds understanding gradually through daily use
- Celebrates progress with levels, stars, and achievements
- Uses calming lavender design to reduce cognitive stress
- Focuses ONLY on the fridge visual (no complexity)
- Supports the journey to self-sustaining practices

## 🌟 Core Features

### 1. Visual Fridge Display
- **Large emoji icons** for every food item (🥛🍞🥚🧀)
- **Color-coded borders** show freshness at a glance:
  - 🟢 Green = Fresh and good to eat
  - 🟡 Yellow = Eat soon (1-2 days left)
  - 🔴 Red = Expired (time to remove)
- Simple, calm interface focused on the fridge visual only

### 2. Two Simple Actions
- **Add Food** - Tap + to add items after shopping
- **Remove Food** - Tap − when you eat or discard items
- That's it. No complicated menus or settings.

### 3. Gamification & Growth
- **Levels 1-10** based on days of consistent use
- **Star system** - earn stars for every action (add, remove, check-in)
- **Streak tracking** - celebrate daily use without punishment for missing days
- **Achievements** unlock as you progress:
  - "First Item!"
  - "Week Warrior!" (7 days)
  - "Waste Reducer!" (caught 5 expired items)
  - "Fridge Friend!" (30 days)
  - "Fridge Master!" (90 days)

### 4. Daily Learning
- **Food Fact of the Day** - simple tips about food storage
  - "Milk lasts about 1 week in the fridge 🥛"
  - "Keep raw meat on the bottom shelf 🍗"
  - "Eggs can last 3 weeks! 🥚"
- Gentle reminders to check your fridge
- Success messages: "Great job! You removed the old milk!"

### 5. Accessibility-First Design
- **Extra-large buttons** (60px minimum) for easy tapping
- **Heavy lavender color** throughout for calming effect
- **Simple language** (3rd grade reading level)
- **No time pressure** - work at your own pace
- **Positive reinforcement only** - never critical or judgmental
- **Celebration animations** for every success

## 🎨 Design Principles

### Therapeutic Color Scheme
- **Primary: Lavender (#9B8AC4)** - Used HEAVILY throughout (not just accent)
  - All buttons, headers, progress indicators
  - Calming, reduces anxiety, promotes focus
- **Background: Cream (#FFFEF9)** - Warm, gentle on eyes
- **Soft Lavender (#E6E1F5)** - Secondary elements, cards
- **Status Colors** (soft, never harsh):
  - Fresh: Soft Green (#A8D5BA)
  - Expiring: Gentle Yellow (#FFE4A3)
  - Expired: Soft Red (#F5B5B5)

### Voice & Tone
Every message is:
- **Encouraging**, never critical
- **Patient**, never rushed
- **Celebrating**, never punishing
- **Simple** (3rd grade reading level)
- **Friendly**, like a supportive companion

Examples:
- ✅ "You did it! Milk is in your fridge now."
- ✅ "Way to go! That's 3 days in a row!"
- ❌ "Don't forget..." (too demanding)
- ❌ "You missed..." (discouraging)

### Interaction Philosophy
- **One tap = one action** (no multi-step flows)
- **Instant visual feedback** (animations, color changes)
- **No penalties** (can't fail, only grow)
- **Gentle guidance** (suggest, never command)
- **Celebration-focused** (every small win matters)

## 📱 App Structure (Intentionally Simple)

### Main Screen (Home)
**Top Bar:**
- Level badge (e.g., "Level 3 🏆")
- Star count (e.g., "⭐ 47")
- Streak tracker (e.g., "🔥 5 days")

**Center (70% of screen):**
- Visual fridge display
- All food items shown with emoji icons
- Color-coded borders indicate freshness
- Tap any item to see days remaining

**Bottom Bar:**
- **[+ Add Food]** button (lavender, 60px tall)
- **[− Remove Food]** button (lavender, 60px tall)

### Add Food Flow
1. Tap **[+ Add Food]**
2. See grid of 20 common food items (large emoji + name)
3. Tap item → Success animation → "Added to fridge! ⭐"
4. Auto-return to main screen

### Remove Food Flow
1. Tap **[− Remove Food]**
2. See only items currently in your fridge
3. Tap item → Confirmation → Success animation → "Great job! ⭐"
4. Auto-return to main screen

**That's it.** No other pages, menus, or complexity.

## 🛠 Platform: Wabi.ai

### What is Wabi?
Wabi is an AI-powered mini-app platform where you describe what you want in simple prompts, and the AI builds it for you. No coding required.

[Learn more about Wabi](https://wabi.ai)

### Building Fridge by Otto on Wabi

**See `WABI_SPECIFICATION.md`** for the complete prompt to paste into Wabi.

Key advantages of Wabi for this use case:
- **Rapid iteration** - Test with users, get feedback, rebuild quickly
- **No technical barriers** - Service coordinators can help adjust the app
- **Social sharing** - Easy to share with care teams and other families
- **Remix culture** - Others can adapt for their specific needs
- **AI-generated UI** - Automatically handles design based on specifications

### Data Storage

Wabi will automatically handle:
- **Fridge items database** (name, emoji, date added, expiry date, freshness status)
- **User progress** (level, stars earned, streak days, achievements)
- **Food item library** (default expiry days for each food type)

### Integration with Otto Parent App

**Fridge by Otto** is a standalone mini-app within the larger Otto ecosystem:

- **Otto** (parent app) - Onboarding, chatbot, directories, FAQ, care team tools
- **Fridge by Otto** (this app) - Daily ILS fridge management only
- Future: Other Otto mini-apps for specific ILS skills

The separation keeps each tool focused and non-overwhelming.

## 🚀 Getting Started

### For Developers/Builders

1. **Create a Wabi account** at [wabi.ai](https://wabi.ai)
2. **Copy the prompt** from `WABI_SPECIFICATION.md`
3. **Paste into Wabi** and let AI build the initial version
4. **Test with care team** first (not end users yet)
5. **Iterate based on feedback** - Wabi makes this easy
6. **Test with 2-3 adults with DD** in supervised setting
7. **Refine and simplify** based on observations
8. **Share via Wabi** with service coordinators and families

### For Service Coordinators

1. **Access the app** through Wabi social feed or direct share
2. **Try it yourself** first to understand the flow
3. **Introduce to user** with supervision
4. **Support initial use** for first week
5. **Gradually reduce support** as user builds habit
6. **Monitor progress** through Otto parent app (if integrated)
7. **Celebrate milestones** with user

### For Parents/Caregivers

1. **Learn the app** together with your adult
2. **Don't do it for them** - guide, don't control
3. **Celebrate small wins** - every star earned matters
4. **Check in weekly** - "Show me your fridge!"
5. **Trust the learning process** - it takes months, not days
6. **Share achievements** - show them their growth

## 🎓 Learning Journey (Over Months)

### Month 1: Building Awareness
**Goal:** Learn what's in the fridge and practice using the app

**Activities:**
- Open the app daily (even just to look)
- After shopping, tap **[+ Add Food]** and add new items
- When you eat something, tap **[− Remove Food]**
- Watch your stars grow!

**What You're Learning:**
- What food you have
- How long food lasts
- The habit of checking your fridge

**Milestones to Celebrate:**
- "First Item!" achievement
- First star earned
- "Week Warrior!" (7 days in a row)

---

### Month 2: Building Habits
**Goal:** Make checking the fridge part of your daily routine

**Activities:**
- Check fridge every morning
- Notice the color borders (green, yellow, red)
- Remove yellow/red items before they go bad
- Read the daily Food Fact

**What You're Learning:**
- Food doesn't last forever
- Some foods last longer than others
- It feels good to keep a fresh fridge

**Milestones to Celebrate:**
- 14-day streak!
- Level 2 or 3 reached
- "Waste Reducer!" achievement

---

### Month 3+: Building Mastery
**Goal:** Independently manage your fridge with confidence

**Activities:**
- Before shopping, check what you already have
- Plan to eat foods that expire soon
- Keep your fridge organized and fresh
- Share your progress with family

**What You're Learning:**
- Self-sufficiency
- Planning ahead
- Taking care of your food (and yourself)

**Milestones to Celebrate:**
- "Fridge Friend!" (30 days)
- Level 5 reached
- Consistently keeping fridge fresh

## ♿️ Accessibility Considerations

### For Adults with Developmental Disabilities
- **Large touch targets** - All buttons are minimum 44x44px, easy to tap
- **Clear visual hierarchy** - Important actions are prominent
- **Consistent patterns** - Same actions work the same way throughout
- **Error prevention** - Confirmations before destructive actions
- **Multiple feedback modes** - Visual, haptic, and optional audio
- **No time pressure** - No timed interactions or auto-advancing screens
- **Simple language** - Clear, concise text without jargon
- **Visual aids** - Emoji icons help with recognition
- **Undo options** - Safety net for mistakes
- **Tutorial mode** - Guided introduction for new users

### Testing with Target Users
Recommended testing protocol:
1. Observe first-time user experience
2. Note any confusion or hesitation points
3. Test with various cognitive abilities
4. Gather feedback on:
   - Button size and spacing
   - Icon clarity
   - Text readability
   - Navigation intuitiveness
   - Feature discoverability

## 🔄 Progressive Learning Phases

### Phase 1: Core Fridge Tracking (First 3 Months)
**Current implementation** - Just tracking. Build the habit.
- Add/remove food items
- Color-coded freshness
- Stars and achievements
- Daily food facts
- Streak tracking

**DON'T add complexity until users show consistent Phase 1 mastery.**

---

### Phase 2: Pre-Shopping Check (After 3 Months)
Add only if user has strong daily habit:
- Simple reminder: "Before shopping, check your fridge"
- Expand food library to 30 items
- "Do you have milk?" yes/no questions

---

### Phase 3: Proactive Suggestions (After 6 Months)
Add only if user manages Phase 2 confidently:
- "Your lettuce expires tomorrow"
- Show items expiring soonest at top
- Gentle suggestion: "Maybe have a salad today?"

---

### Phase 4: Very Simple Meals (After 9+ Months)
Add only if user has shown sustained mastery:
- ASSEMBLY only, no cooking
  - "Sandwich" = bread + cheese + meat
  - "Bowl of cereal" = milk + cereal
- Still no recipes with cooking steps
- Keep it extremely simple

---

### Future Ecosystem Integration
- **Care team dashboard** in Otto parent app
- **Progress sharing** with service coordinator
- **Milestone notifications** to support network
- **Data insights** for occupational therapists
- **Family celebration mode** to share achievements

**Philosophy:** Each phase builds on proven success. Never overwhelm. Celebrate growth.

## 🤝 Contributing

We welcome contributions, especially those that enhance the therapeutic learning experience!

### Core Principles (Non-Negotiable)
1. **Simplicity over features** - When in doubt, remove complexity
2. **Positive reinforcement only** - Never critical, never punishing
3. **Therapeutic color scheme** - Heavy lavender, calming tones
4. **No time pressure** - Users work at their own pace
5. **Celebrate small wins** - Every interaction is a success
6. **Test with actual users** - Adults with DD must validate changes

### Design Guidelines
- Extra-large touch targets (60px+ minimum, not 44px)
- Therapeutic lavender as PRIMARY color (not accent)
- Simple language (3rd grade reading level)
- Emoji icons for all food items
- Gentle, encouraging voice
- No multi-step flows
- Instant visual feedback

### Testing Protocol
- Test with service coordinators FIRST
- Then test with 2-3 adults with DD (supervised)
- Observe, don't instruct
- Note confusion points
- Simplify further based on observations
- Validate with occupational therapists if possible

## 📄 License

This project is designed for accessibility and social good. Please respect the target audience and maintain accessibility standards in any derivatives.

## 💬 Support

For questions, feedback, or accessibility concerns, please reach out to the Otto team.

## 🙏 Acknowledgments

Designed with input from:
- Adults with developmental disabilities
- Occupational therapists
- Special education professionals
- Accessibility advocates

---

**Made with ❤️ by Otto**

*Helping everyone live more independently through thoughtful design.*