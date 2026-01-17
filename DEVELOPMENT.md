# 🛠 Development Guide

## Quick Start

### Prerequisites
- WeChat Developer Tools (or compatible mini-program IDE)
- Basic JavaScript knowledge
- Understanding of mini-program structure

### Setup
1. Clone the repository
2. Open WeChat Developer Tools
3. Import project from `/home/user/RomeAnthony`
4. Set your App ID
5. Click "Compile"
6. Preview on device or simulator

## Project Structure

```
RomeAnthony/
├── app.js                 # Application entry point
├── app.json               # Global configuration
├── app.wxss              # Global styles
├── sitemap.json          # SEO configuration
├── pages/                # All pages
│   ├── home/
│   │   ├── home.wxml     # Template
│   │   ├── home.js       # Logic
│   │   ├── home.wxss     # Styles
│   │   └── home.json     # Page config
│   ├── add-items/        # Item selection
│   ├── recipes/          # Recipe suggestions
│   └── settings/         # User settings
├── utils/                # Utility modules
│   ├── foodData.js       # Food database
│   ├── storage.js        # Storage utilities
│   ├── recipes.js        # Recipe engine
│   └── accessibility.js  # A11y helpers
└── docs/                 # Documentation
```

## Key Technologies

### Mini-Program Framework
- WXML - Template markup
- WXSS - Styling (CSS-like)
- JavaScript - Logic
- WeChat API - Platform features

### Data Flow
- Local Storage for persistence
- Page state management
- Global app state
- Event-driven updates

## Code Style Guide

### Naming Conventions

#### Files
- `kebab-case.js` for all files
- Match component/page name

#### Variables
```javascript
// camelCase for variables and functions
const fridgeItems = [];
function addItemToFridge() {}

// PascalCase for constructors/classes
class FoodItem {}

// UPPER_CASE for constants
const MAX_ITEMS = 100;
const DEFAULT_EXPIRY_DAYS = 7;
```

#### Components
```javascript
// Page names in kebab-case
pages/add-items/add-items.js

// Event handlers prefixed with 'on'
onAddItem() {}
onRemoveItem() {}

// Data prefixed with 'data'
data: {
  fridgeItems: []
}
```

### Code Organization

#### Page Structure
```javascript
Page({
  // 1. Data
  data: {
    items: []
  },

  // 2. Lifecycle methods
  onLoad() {},
  onShow() {},
  onHide() {},

  // 3. Event handlers
  onButtonTap() {},
  onInputChange() {},

  // 4. Helper methods
  loadData() {},
  formatData() {}
});
```

#### Function Length
- Keep functions short (< 30 lines)
- Extract complex logic to utility functions
- One function, one purpose

#### Comments
```javascript
// ✅ Good: Explain WHY, not WHAT
// Calculate expiry considering timezone offset
const expiryDate = calculateExpiry(item);

// ❌ Bad: Obvious comment
// Get expiry date
const expiryDate = item.expiryDate;
```

## Accessibility Requirements

### MUST HAVE
- [ ] Minimum 44x44px touch targets
- [ ] 4.5:1 color contrast
- [ ] Multi-modal feedback
- [ ] Clear error messages
- [ ] Keyboard navigation
- [ ] Screen reader support

### Implementation Example
```javascript
// Always provide multi-modal feedback
function addItem(item) {
  // Visual
  showToast({ title: `${item.name} added` });

  // Haptic
  hapticFeedback('success');

  // Voice (if enabled)
  announceToScreenReader(`Added ${item.name}`);
}
```

## Storage Management

### Local Storage Keys
```javascript
// fridgeItems - Array of food items
wx.setStorageSync('fridgeItems', items);

// appSettings - User preferences
wx.setStorageSync('appSettings', settings);
```

### Data Persistence
```javascript
// Always wrap storage calls in try-catch
function saveItems(items) {
  try {
    wx.setStorageSync('fridgeItems', items);
    return true;
  } catch (error) {
    console.error('Failed to save:', error);
    return false;
  }
}
```

## Adding New Features

### 1. New Food Item
```javascript
// 1. Add to utils/foodData.js
{
  id: 'mango',
  name: 'Mango',
  icon: '🥭',
  category: 'fruits',
  defaultExpiryDays: 5
}

// 2. Item appears automatically in add-items page
// 3. Test with actual usage
```

### 2. New Recipe
```javascript
// Add to utils/recipes.js
{
  id: 'fruit-smoothie',
  name: 'Fruit Smoothie',
  icon: '🥤',
  difficulty: 'easy',
  time: '5 mins',
  requiredIngredients: ['mango', 'banana'],
  optionalIngredients: ['yogurt', 'milk'],
  instructions: [
    'Peel and chop fruits',
    'Add to blender',
    'Blend until smooth',
    'Enjoy!'
  ]
}
```

### 3. New Page
```bash
# 1. Create page directory
mkdir pages/new-page

# 2. Create files
touch pages/new-page/new-page.wxml
touch pages/new-page/new-page.js
touch pages/new-page/new-page.wxss
touch pages/new-page/new-page.json

# 3. Register in app.json
"pages": [
  "pages/new-page/new-page"
]
```

### 4. New Utility Function
```javascript
// utils/newUtil.js

/**
 * Brief description
 * @param {Type} param - Description
 * @returns {Type} Description
 */
function utilityFunction(param) {
  // Implementation
  return result;
}

module.exports = {
  utilityFunction
};
```

## Testing

### Manual Testing Checklist
- [ ] All touch targets are large enough
- [ ] All text is readable
- [ ] All actions provide feedback
- [ ] No crashes or errors
- [ ] Data persists correctly
- [ ] Navigation works smoothly

### Accessibility Testing
- [ ] Screen reader announces all actions
- [ ] All buttons have labels
- [ ] Color contrast is sufficient
- [ ] Works without color
- [ ] Haptic feedback works
- [ ] Tutorial is helpful

### Device Testing
- [ ] Test on actual devices (not just simulator)
- [ ] Test on different screen sizes
- [ ] Test with different OS versions
- [ ] Test with accessibility features enabled

## Performance Tips

### Optimize Data
```javascript
// ✅ Good: Only store necessary data
const item = {
  id: 'tomato',
  name: 'Tomato',
  quantity: 2
};

// ❌ Bad: Store redundant data
const item = {
  id: 'tomato',
  name: 'Tomato',
  quantity: 2,
  category: 'vegetables', // Can be looked up
  icon: '🍅'              // Can be looked up
};
```

### Optimize Rendering
```javascript
// ✅ Good: Update only changed data
this.setData({
  'items[0].quantity': newQuantity
});

// ❌ Bad: Update entire array
this.setData({
  items: allItems
});
```

### Image Optimization
- Use appropriate emoji sizes
- Lazy load off-screen content
- Cache images when possible

## Debugging

### Console Logging
```javascript
// Development
console.log('Fridge items:', fridgeItems);

// Production - remove or disable
if (DEBUG_MODE) {
  console.log('Debug info:', data);
}
```

### Common Issues

#### Items Not Saving
```javascript
// Check storage quota
const info = wx.getStorageInfoSync();
console.log('Storage used:', info.currentSize);
console.log('Storage limit:', info.limitSize);
```

#### Recipe Not Matching
```javascript
// Check ingredient IDs match exactly
console.log('Available:', fridgeIds);
console.log('Required:', recipe.requiredIngredients);
```

## Deployment

### Pre-deployment Checklist
- [ ] All features tested
- [ ] No console errors
- [ ] Performance is good
- [ ] Accessibility verified
- [ ] Documentation updated
- [ ] Version number bumped

### Version Numbering
- `1.0.0` - Major.Minor.Patch
- Major: Breaking changes
- Minor: New features
- Patch: Bug fixes

### Deployment Steps
1. Test thoroughly
2. Update version in code
3. Update CHANGELOG
4. Submit to platform review
5. Monitor for issues
6. Address feedback

## Contributing

### Pull Request Process
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit PR with description
6. Address review feedback

### Code Review Checklist
- [ ] Follows style guide
- [ ] Maintains accessibility
- [ ] Includes comments
- [ ] Tested on device
- [ ] No performance regressions

## Resources

### Documentation
- WeChat Mini-Program Docs
- JavaScript MDN
- Accessibility Guidelines

### Tools
- WeChat Developer Tools
- Color Contrast Checker
- Screen Reader

### Community
- GitHub Issues
- Developer Forums
- Accessibility Community

---

**Happy Coding! 🚀**

*Remember: Every line of code impacts real users. Code with care.*
