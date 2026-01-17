// Food items database with categories and default expiry times
const FOOD_DATABASE = {
  popularItems: [
    { id: 'tomato', name: 'Tomato', icon: '🍅', category: 'vegetables', defaultExpiryDays: 7 },
    { id: 'pepper', name: 'Pepper', icon: '🫑', category: 'vegetables', defaultExpiryDays: 10 },
    { id: 'egg', name: 'Egg', icon: '🥚', category: 'dairy', defaultExpiryDays: 21 },
    { id: 'bread', name: 'Bread', icon: '🍞', category: 'bakery', defaultExpiryDays: 5 },
    { id: 'ice-cream', name: 'Ice cream', icon: '🍦', category: 'frozen', defaultExpiryDays: 90 },
    { id: 'butter', name: 'Butter', icon: '🧈', category: 'dairy', defaultExpiryDays: 30 },
    { id: 'cheese', name: 'Cheese', icon: '🧀', category: 'dairy', defaultExpiryDays: 21 },
    { id: 'cabbage', name: 'Cabbage', icon: '🥬', category: 'vegetables', defaultExpiryDays: 14 },
    { id: 'onion', name: 'Onion', icon: '🧅', category: 'vegetables', defaultExpiryDays: 30 },
    { id: 'steak', name: 'Steak', icon: '🥩', category: 'meat', defaultExpiryDays: 3 },
    { id: 'chicken', name: 'Chicken', icon: '🍗', category: 'meat', defaultExpiryDays: 2 },
    { id: 'orange', name: 'Orange', icon: '🍊', category: 'fruits', defaultExpiryDays: 14 },
    { id: 'watermelon', name: 'Watermelon', icon: '🍉', category: 'fruits', defaultExpiryDays: 7 },
    { id: 'ham-leg', name: 'Ham leg', icon: '🍖', category: 'meat', defaultExpiryDays: 5 },
    { id: 'water', name: 'Water', icon: '💧', category: 'drinks', defaultExpiryDays: 365 }
  ],

  drinks: [
    { id: 'wine', name: 'Wine', icon: '🍷', category: 'drinks', defaultExpiryDays: 1825 },
    { id: 'orange-juice', name: 'Orange juice', icon: '🧃', category: 'drinks', defaultExpiryDays: 7 },
    { id: 'energy-drink', name: 'Energy drink', icon: '🥤', category: 'drinks', defaultExpiryDays: 365 },
    { id: 'water-bottle', name: 'Water', icon: '💧', category: 'drinks', defaultExpiryDays: 365 },
    { id: 'ice-cream-drink', name: 'Ice cream', icon: '🍦', category: 'drinks', defaultExpiryDays: 90 },
    { id: 'milk', name: 'Milk', icon: '🥛', category: 'drinks', defaultExpiryDays: 7 },
    { id: 'coffee', name: 'Coffee', icon: '☕', category: 'drinks', defaultExpiryDays: 14 },
    { id: 'tea', name: 'Tea', icon: '🍵', category: 'drinks', defaultExpiryDays: 14 }
  ],

  vegetables: [
    { id: 'broccoli', name: 'Broccoli', icon: '🥦', category: 'vegetables', defaultExpiryDays: 7 },
    { id: 'cabbage-veg', name: 'Cabbage', icon: '🥬', category: 'vegetables', defaultExpiryDays: 14 },
    { id: 'tomato-veg', name: 'Tomato', icon: '🍅', category: 'vegetables', defaultExpiryDays: 7 },
    { id: 'onion-veg', name: 'Onion', icon: '🧅', category: 'vegetables', defaultExpiryDays: 30 },
    { id: 'carrot', name: 'Carrot', icon: '🥕', category: 'vegetables', defaultExpiryDays: 21 },
    { id: 'potato', name: 'Potato', icon: '🥔', category: 'vegetables', defaultExpiryDays: 30 },
    { id: 'eggplant', name: 'Eggplant', icon: '🍆', category: 'vegetables', defaultExpiryDays: 7 },
    { id: 'corn', name: 'Corn', icon: '🌽', category: 'vegetables', defaultExpiryDays: 5 },
    { id: 'lettuce', name: 'Lettuce', icon: '🥗', category: 'vegetables', defaultExpiryDays: 7 },
    { id: 'mushroom', name: 'Mushroom', icon: '🍄', category: 'vegetables', defaultExpiryDays: 5 }
  ],

  fruits: [
    { id: 'apple', name: 'Apple', icon: '🍎', category: 'fruits', defaultExpiryDays: 21 },
    { id: 'banana', name: 'Banana', icon: '🍌', category: 'fruits', defaultExpiryDays: 5 },
    { id: 'orange-fruit', name: 'Orange', icon: '🍊', category: 'fruits', defaultExpiryDays: 14 },
    { id: 'strawberry', name: 'Strawberry', icon: '🍓', category: 'fruits', defaultExpiryDays: 3 },
    { id: 'watermelon-fruit', name: 'Watermelon', icon: '🍉', category: 'fruits', defaultExpiryDays: 7 },
    { id: 'grapes', name: 'Grapes', icon: '🍇', category: 'fruits', defaultExpiryDays: 7 },
    { id: 'lemon', name: 'Lemon', icon: '🍋', category: 'fruits', defaultExpiryDays: 21 },
    { id: 'peach', name: 'Peach', icon: '🍑', category: 'fruits', defaultExpiryDays: 5 }
  ],

  meat: [
    { id: 'chicken-meat', name: 'Chicken', icon: '🍗', category: 'meat', defaultExpiryDays: 2 },
    { id: 'steak-meat', name: 'Steak', icon: '🥩', category: 'meat', defaultExpiryDays: 3 },
    { id: 'bacon', name: 'Bacon', icon: '🥓', category: 'meat', defaultExpiryDays: 7 },
    { id: 'sausage', name: 'Sausage', icon: '🌭', category: 'meat', defaultExpiryDays: 7 },
    { id: 'ham', name: 'Ham', icon: '🍖', category: 'meat', defaultExpiryDays: 5 },
    { id: 'turkey', name: 'Turkey', icon: '🦃', category: 'meat', defaultExpiryDays: 2 }
  ],

  dairy: [
    { id: 'milk-dairy', name: 'Milk', icon: '🥛', category: 'dairy', defaultExpiryDays: 7 },
    { id: 'cheese-dairy', name: 'Cheese', icon: '🧀', category: 'dairy', defaultExpiryDays: 21 },
    { id: 'butter-dairy', name: 'Butter', icon: '🧈', category: 'dairy', defaultExpiryDays: 30 },
    { id: 'yogurt', name: 'Yogurt', icon: '🥣', category: 'dairy', defaultExpiryDays: 14 },
    { id: 'egg-dairy', name: 'Egg', icon: '🥚', category: 'dairy', defaultExpiryDays: 21 },
    { id: 'cream', name: 'Cream', icon: '🍶', category: 'dairy', defaultExpiryDays: 7 }
  ],

  other: [
    { id: 'bread-other', name: 'Bread', icon: '🍞', category: 'bakery', defaultExpiryDays: 5 },
    { id: 'pizza', name: 'Pizza', icon: '🍕', category: 'prepared', defaultExpiryDays: 3 },
    { id: 'sandwich', name: 'Sandwich', icon: '🥪', category: 'prepared', defaultExpiryDays: 2 },
    { id: 'rice', name: 'Rice', icon: '🍚', category: 'grains', defaultExpiryDays: 365 },
    { id: 'pasta', name: 'Pasta', icon: '🍝', category: 'grains', defaultExpiryDays: 365 }
  ]
};

// Get all items in a category
function getItemsByCategory(category) {
  return FOOD_DATABASE[category] || [];
}

// Get all items
function getAllItems() {
  return Object.values(FOOD_DATABASE).flat();
}

// Search items by name
function searchItems(query) {
  const allItems = getAllItems();
  const lowerQuery = query.toLowerCase();
  return allItems.filter(item =>
    item.name.toLowerCase().includes(lowerQuery)
  );
}

// Get item by ID
function getItemById(id) {
  const allItems = getAllItems();
  return allItems.find(item => item.id === id);
}

module.exports = {
  FOOD_DATABASE,
  getItemsByCategory,
  getAllItems,
  searchItems,
  getItemById
};
