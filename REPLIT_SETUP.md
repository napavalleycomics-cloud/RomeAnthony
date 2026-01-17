# Fridge by Otto - Replit Setup Guide

## 🚀 Quick Start on Replit

### 1. Create New Repl
- Go to [replit.com](https://replit.com)
- Click "Create Repl"
- Choose **"React (Vite)"** template
- Name it: `fridge-by-otto`

### 2. Replace All Files
Copy all files from this repository into your Repl, replacing the defaults.

### 3. Install & Run
Replit will auto-install dependencies. Just click "Run" and your app will start!

---

## 📁 Project Structure

```
fridge-by-otto/
├── public/
│   └── fridge-background.svg          # Custom fridge illustration
├── src/
│   ├── components/
│   │   ├── Fridge.jsx                 # Main visual fridge component
│   │   ├── FoodItem.jsx               # Individual food item with borders
│   │   ├── ProgressBar.jsx            # Level/Stars/Streak display
│   │   ├── DailyTip.jsx               # "Did you know?" card
│   │   ├── AddFoodModal.jsx           # Food selection grid
│   │   ├── RemoveFoodModal.jsx        # Remove food interface
│   │   └── AchievementPopup.jsx       # Achievement unlock animations
│   ├── data/
│   │   ├── foodDatabase.js            # 20 food items with shelf locations
│   │   ├── achievements.js            # Life skills achievements
│   │   └── dailyTips.js               # Educational food facts
│   ├── hooks/
│   │   ├── useFridge.js               # Fridge state management
│   │   ├── useProgress.js             # Gamification logic
│   │   └── useAchievements.js         # Achievement tracking
│   ├── utils/
│   │   ├── calculations.js            # Expiry, freshness calculations
│   │   ├── storage.js                 # LocalStorage wrapper
│   │   └── animations.js              # Celebration effects
│   ├── styles/
│   │   ├── global.css                 # Global styles, color palette
│   │   └── animations.css             # Animation keyframes
│   ├── App.jsx                        # Main app component
│   └── main.jsx                       # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Tech Stack

**Frontend:**
- React 18 (with hooks)
- Vite (fast dev server)
- CSS Modules (scoped styling)
- Framer Motion (smooth animations)

**State Management:**
- React Context API (simple, built-in)
- LocalStorage (data persistence)

**No Backend Needed (Phase 1)**
- Everything runs client-side
- Data stored in browser
- Can add backend later for care team dashboard

---

## 🎯 Key Features Implemented

### 1. Visual Fridge Component
- Custom SVG fridge illustration
- 4 visible shelves (freezer, top, middle, drawer)
- Food items positioned on correct shelves
- Color-coded freshness borders
- Responsive to all screen sizes

### 2. Gamification System
- Real-time star counter
- Level progression (1-10)
- Streak tracking
- Achievement system with unlock animations
- Progress persistence

### 3. Life Skills Focus
- Educational success messages
- Proper shelf placement teaching
- Food safety tips
- Daily rotating facts

### 4. Accessibility
- Large touch targets (60px buttons)
- High contrast colors
- Simple language
- Keyboard navigation
- Screen reader support

---

## 🔧 Development Workflow

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy from Replit
Click "Deploy" button → Choose "Static Site" → Done!

---

## 📱 Mobile Responsive

The app is built mobile-first and works perfectly on:
- iPhone (Safari, Chrome)
- Android (Chrome, Samsung Internet)
- iPad/Tablets
- Desktop browsers

Uses CSS Grid and Flexbox for fluid layouts.

---

## 🎮 How It Works

### Data Flow
```
User Action → Component → Hook → Update State → LocalStorage → Re-render
```

### Example: Adding Food
```javascript
1. User taps [+ Add Food] button
2. AddFoodModal opens with 20 food items
3. User taps "Milk"
4. useFridge hook adds milk to state
5. Calculates expiry date (today + 7 days)
6. Assigns to correct shelf (middle)
7. Updates LocalStorage
8. Triggers success animation
9. Awards star via useProgress hook
10. Checks for achievement unlocks
11. Returns to home screen
12. Milk appears on middle shelf with green border
```

---

## 🔐 Data Persistence

**LocalStorage Keys:**
- `otto_fridge_items` - Array of current fridge items
- `otto_user_progress` - Level, stars, streak data
- `otto_achievements` - Unlocked achievements
- `otto_last_check_date` - For streak calculation

**Data is preserved:**
- Between app sessions
- After browser refresh
- Across days/weeks

**Data is lost only if:**
- User clears browser data
- Uses incognito/private mode

---

## 🎨 Design System

### Colors (from research-backed spec)
```css
--color-lavender: #9B8AC4;        /* Primary buttons, headers */
--color-lavender-soft: #E6E1F5;   /* Cards, secondary */
--color-lavender-deep: #7B6AA4;   /* Active states */
--color-cream: #FFFEF9;           /* Background */
--color-fresh: #A8D5BA;           /* Fresh food border */
--color-expiring: #FFE4A3;        /* Expiring soon border */
--color-expired: #F5B5B5;         /* Expired border */
```

### Typography
```css
--font-size-large: 28px;          /* Headings */
--font-size-medium: 22px;         /* Subheadings */
--font-size-base: 16px;           /* Body text */
--font-size-small: 14px;          /* Captions */
```

### Spacing
```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
```

---

## 📊 Future Enhancements (After Phase 1)

### Phase 2 Features (Month 3-6)
- Shopping list builder
- Pre-shopping reminder
- Duplicate detection

### Phase 3 Features (Month 6-9)
- Visual zone organization
- FIFO suggestions
- Meal planning hints

### Backend Integration
- Care team dashboard
- Progress sharing
- Cloud data sync
- Multi-device support

---

## 🧪 Testing Checklist

**Visual:**
- [ ] Fridge graphic displays correctly
- [ ] Items appear on correct shelves
- [ ] Color borders change based on freshness
- [ ] Animations are smooth and calming
- [ ] Works on mobile (test on actual device)

**Functional:**
- [ ] Can add all 20 food items
- [ ] Items go to correct shelves automatically
- [ ] Can remove items
- [ ] Stars increase on actions
- [ ] Level progresses with days
- [ ] Streak counts consecutive days
- [ ] Achievements unlock at milestones

**Accessibility:**
- [ ] All buttons are 60px+ tall
- [ ] Text is readable (high contrast)
- [ ] Works with keyboard (tab navigation)
- [ ] Screen reader announces actions
- [ ] No time pressure or auto-advancing

**Data Persistence:**
- [ ] Fridge items persist after refresh
- [ ] Progress saves correctly
- [ ] Streak continues across days
- [ ] Achievements stay unlocked

---

## 🐛 Common Issues & Fixes

**Issue: Fridge doesn't display**
- Check browser console for errors
- Verify SVG file is in public/ folder
- Check CSS path imports

**Issue: Items don't save**
- Check LocalStorage is enabled
- Not in incognito mode
- Check browser storage quota

**Issue: Animations laggy**
- Reduce animation complexity
- Use CSS transforms (not position)
- Test on actual device, not just emulator

**Issue: Mobile layout broken**
- Check viewport meta tag
- Test responsive breakpoints
- Verify touch target sizes

---

## 📚 Resources

**React Docs:** [react.dev](https://react.dev)
**Vite Docs:** [vitejs.dev](https://vitejs.dev)
**Framer Motion:** [framer.com/motion](https://framer.com/motion)
**SVG Tutorial:** [css-tricks.com/svg](https://css-tricks.com/svg)

---

## 🤝 Contributing

See main README.md for contribution guidelines.

Key principles:
- Keep code simple and readable
- Comment complex logic
- Test on real devices
- Maintain accessibility standards

---

**Ready to build in Replit!** 🚀

All code files are in this repository - just copy to your Repl and run.
