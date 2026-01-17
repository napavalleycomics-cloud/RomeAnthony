# Otto Fridge - Smart Fridge Tracking App

A thoughtfully designed fridge tracking mini-app built specifically for adults with developmental disabilities. Otto Fridge helps users track what's in their fridge, get expiry reminders, discover recipes based on available ingredients, and reduce food waste.

## 🎯 Purpose

Otto Fridge addresses a common problem: forgetting what's in your fridge and accidentally buying duplicates or letting food expire. The app provides:

- **Visual fridge tracking** - See what's inside your fridge at a glance
- **Expiry reminders** - Get notified before food goes bad
- **Recipe suggestions** - Discover what you can make with available ingredients
- **Simple, accessible interface** - Large buttons, clear icons, minimal text

## 🌟 Key Features

### 1. Visual Fridge View
- Large, clear food icons
- Color-coded freshness indicators (green = fresh, yellow = expiring soon, red = expired)
- Visual fridge representation showing items in different sections
- Quick remove buttons with haptic feedback

### 2. Easy Item Management
- Browse items by category (Popular, Drinks, Vegetables, Fruits, Meat, Dairy, Other)
- Search functionality with real-time results
- One-tap to add items to fridge
- Automatic expiry date calculation based on food type

### 3. Smart Recipe Suggestions
- Recipes categorized by:
  - ✨ Can make now (all ingredients available)
  - 🔶 Almost there (missing 1-2 ingredients)
  - 💡 More ideas (partial matches)
- Step-by-step instructions
- Ingredient checklist with availability status
- Difficulty and time estimates

### 4. Accessibility Features
- **Large touch targets** (minimum 44x44px)
- **High contrast visuals** with color-coded status
- **Haptic feedback** on all interactions
- **Voice announcements** (optional)
- **Sound effects** (optional)
- **Reduced motion support** for users who prefer it
- **Screen reader compatible**

## 🎨 Design Principles

### Color Scheme
- **Primary:** Lavender (#9B8AC4) - calming, friendly
- **Background:** Cream (#FFFEF9) - warm, easy on eyes
- **Surface:** White (#FFFFFF) - clean, clear
- **Success:** Green (#4CAF50) - fresh items
- **Warning:** Yellow (#FFC107) - expiring soon
- **Error:** Red (#F44336) - expired items

### Typography
- Large, clear fonts (minimum 16px)
- High contrast text
- Simple, friendly language
- Emoji icons for visual recognition

### Interaction Design
- One-tap actions wherever possible
- Clear visual feedback
- Undo options for safety
- Confirmation for destructive actions
- Tutorial mode for first-time users

## 📱 Pages

### Home Page (`/pages/home/`)
- Display items currently in fridge
- Quick access scrollable item list with remove buttons
- Visual fridge representation organized by sections
- Expiring soon alerts
- Quick actions to add items or view recipes

### Add Items Page (`/pages/add-items/`)
- Search bar for finding specific items
- Categories: Popular, Drinks, Vegetables, Fruits, Meat, Dairy, Other
- Visual feedback when items are already in fridge
- Running count of items added

### Recipes Page (`/pages/recipes/`)
- Recipe cards with match percentage
- Detailed recipe view with:
  - Ingredients checklist (available/missing)
  - Step-by-step instructions
  - Difficulty and time estimates
- Quick link to add missing ingredients

### Settings Page (`/pages/settings/`)
- Notification preferences
- Expiry reminder days configuration
- Accessibility options (sound, vibration, voice)
- Tutorial restart option
- Data management (clear fridge)
- App information

## 🛠 Technical Architecture

### File Structure
```
RomeAnthony/
├── app.js                 # App initialization and global logic
├── app.json               # App configuration and routing
├── app.wxss              # Global styles
├── sitemap.json          # SEO configuration
├── pages/
│   ├── home/             # Fridge view page
│   ├── add-items/        # Item selection page
│   ├── recipes/          # Recipe suggestions page
│   └── settings/         # Settings and preferences
└── utils/
    ├── foodData.js       # Food item database
    ├── storage.js        # Storage management utilities
    ├── recipes.js        # Recipe matching engine
    └── accessibility.js  # Accessibility helper functions
```

### Data Models

#### Food Item
```javascript
{
  id: string,           // Unique identifier
  name: string,         // Display name
  icon: string,         // Emoji icon
  category: string,     // Category (vegetables, fruits, etc.)
  defaultExpiryDays: number,  // Default shelf life
  quantity: number,     // Quantity in fridge
  addedDate: string,    // ISO date when added
  expiryDate: string    // ISO date when expires
}
```

#### Recipe
```javascript
{
  id: string,
  name: string,
  icon: string,
  difficulty: 'easy' | 'medium' | 'hard',
  time: string,
  requiredIngredients: string[],    // IDs of required items
  optionalIngredients: string[],    // IDs of optional items
  instructions: string[]
}
```

### Storage
Uses WeChat mini-program's local storage (`wx.getStorageSync`, `wx.setStorageSync`) for:
- `fridgeItems`: Array of items currently in fridge
- `appSettings`: User preferences and settings

### Key Utilities

#### `storage.js`
- `getFridgeItems()` - Retrieve all fridge items
- `addItemToFridge(item)` - Add item (or increment quantity)
- `removeItemFromFridge(id)` - Remove item (or decrement quantity)
- `getItemFreshness(expiryDate)` - Calculate freshness status
- `formatExpiryDate(expiryDate)` - Human-readable expiry text

#### `recipes.js`
- `findMatchingRecipes(fridgeItems)` - Find recipes based on available items
- Returns recipes sorted by match percentage with missing ingredients list

#### `accessibility.js`
- `hapticFeedback(type)` - Provide tactile feedback
- `showAccessibleToast(options)` - Show messages with multi-modal feedback
- `showAccessibleConfirm(options)` - Accessible confirmation dialogs

## 🚀 Getting Started

### Prerequisites
- WeChat Developer Tools or compatible mini-program IDE
- Basic understanding of WeChat mini-program development

### Installation
1. Clone this repository
2. Open in WeChat Developer Tools
3. Set App ID for testing or production
4. Click "Compile" to build and preview

### Development
```bash
# Project structure is ready to go
# No build process needed for mini-programs
# Just open in WeChat Developer Tools and start coding
```

## 🎓 Usage Guide

### For Users

#### Adding Items to Fridge
1. Tap "Add Items" in the bottom navigation
2. Browse categories or use search
3. Tap items to add them
4. See confirmation with checkmark
5. Tap "View Fridge" to go back

#### Removing Items
1. On home page, scroll through items at top
2. Tap the X button on any item
3. Item is removed (or quantity decreases)

#### Finding Recipes
1. Tap "Recipes" in bottom navigation
2. See recipes you can make now at the top
3. Tap any recipe for details
4. Follow step-by-step instructions

#### Managing Settings
1. Tap gear icon on home page
2. Enable/disable notifications
3. Adjust reminder days
4. Toggle accessibility features
5. Clear fridge if needed

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

## 🔄 Future Enhancements

### Planned Features
- [ ] Barcode scanner for quick item addition
- [ ] Shopping list generation from missing ingredients
- [ ] Custom item creation
- [ ] Photo upload for items
- [ ] Meal planning calendar
- [ ] Nutritional information
- [ ] Share recipes with friends
- [ ] Multi-user households
- [ ] Cloud sync across devices
- [ ] Integration with grocery delivery services

### Accessibility Improvements
- [ ] Text-to-speech for all content
- [ ] Adjustable font sizes
- [ ] High contrast theme option
- [ ] Simplified mode with fewer options
- [ ] Video tutorials
- [ ] Picture-based communication for non-readers
- [ ] Caregiver companion app

## 🤝 Contributing

We welcome contributions, especially those that improve accessibility!

### Guidelines
- Maintain large touch targets (44x44px minimum)
- Test with screen readers
- Ensure high color contrast (WCAG AA minimum)
- Provide multiple forms of feedback
- Keep language simple and clear
- Add comments explaining complex logic
- Test on actual devices, not just simulators

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