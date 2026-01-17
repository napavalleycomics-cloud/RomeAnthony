// Complete food database with shelf locations and expiry information
// Based on research-backed food safety and storage practices

export const FOOD_DATABASE = [
  // Dairy (Middle Shelf - optimal temperature zone)
  {
    id: 'milk',
    name: 'Milk',
    emoji: '🥛',
    category: 'dairy',
    shelf: 'middle',
    defaultExpiryDays: 7,
    safetyTip: 'Milk lasts about 1 week in the fridge'
  },
  {
    id: 'cheese',
    name: 'Cheese',
    emoji: '🧀',
    category: 'dairy',
    shelf: 'middle',
    defaultExpiryDays: 21,
    safetyTip: 'Cheese lasts longer than milk - about 3 weeks!'
  },
  {
    id: 'butter',
    name: 'Butter',
    emoji: '🧈',
    category: 'dairy',
    shelf: 'middle',
    defaultExpiryDays: 30,
    safetyTip: 'Butter can last a whole month in the fridge!'
  },
  {
    id: 'eggs',
    name: 'Eggs',
    emoji: '🥚',
    category: 'dairy',
    shelf: 'middle',
    defaultExpiryDays: 21,
    safetyTip: 'Eggs can last 3 weeks! Store in their carton.'
  },

  // Protein (RAW MEAT GOES ON BOTTOM for safety!)
  {
    id: 'chicken',
    name: 'Chicken',
    emoji: '🍗',
    category: 'protein',
    shelf: 'bottom',  // BOTTOM for food safety - prevents dripping
    defaultExpiryDays: 2,
    safetyTip: 'Keep raw chicken on the BOTTOM shelf to stay safe!'
  },
  {
    id: 'beef',
    name: 'Beef',
    emoji: '🥩',
    category: 'protein',
    shelf: 'bottom',  // BOTTOM for food safety
    defaultExpiryDays: 3,
    safetyTip: 'Raw meat goes on the bottom shelf - it stays safe there!'
  },
  {
    id: 'fish',
    name: 'Fish',
    emoji: '🐟',
    category: 'protein',
    shelf: 'bottom',  // BOTTOM for food safety
    defaultExpiryDays: 1,
    safetyTip: 'Fish is best eaten within 1 day. Store on bottom shelf!'
  },

  // Produce (Bottom Drawer - humidity controlled)
  {
    id: 'tomato',
    name: 'Tomato',
    emoji: '🍅',
    category: 'produce',
    shelf: 'drawer',
    defaultExpiryDays: 7,
    safetyTip: 'Tomatoes last about a week in the fridge'
  },
  {
    id: 'carrot',
    name: 'Carrot',
    emoji: '🥕',
    category: 'produce',
    shelf: 'drawer',
    defaultExpiryDays: 21,
    safetyTip: 'Carrots can last 3 weeks in the vegetable drawer!'
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    emoji: '🥬',
    category: 'produce',
    shelf: 'drawer',
    defaultExpiryDays: 7,
    safetyTip: 'Put lettuce in the DRAWER to keep it fresh longer!'
  },
  {
    id: 'apple',
    name: 'Apple',
    emoji: '🍎',
    category: 'produce',
    shelf: 'drawer',
    defaultExpiryDays: 30,
    safetyTip: 'Apples can last a whole month in the fridge!'
  },
  {
    id: 'banana',
    name: 'Banana',
    emoji: '🍌',
    category: 'produce',
    shelf: 'drawer',
    defaultExpiryDays: 7,
    safetyTip: 'Bananas last about a week'
  },

  // Staples (Top Shelf - ready to eat, easy access)
  {
    id: 'bread',
    name: 'Bread',
    emoji: '🍞',
    category: 'staples',
    shelf: 'top',
    defaultExpiryDays: 5,
    safetyTip: 'Bread lasts about 5 days'
  },
  {
    id: 'juice',
    name: 'Juice',
    emoji: '🧃',
    category: 'staples',
    shelf: 'top',
    defaultExpiryDays: 7,
    safetyTip: 'Juice lasts about 1 week after opening'
  },
  {
    id: 'water',
    name: 'Water',
    emoji: '💧',
    category: 'staples',
    shelf: 'top',
    defaultExpiryDays: 365,
    safetyTip: 'Water stays fresh for a very long time!'
  },

  // Prepared/Leftovers (Top Shelf - ready to eat)
  {
    id: 'pizza',
    name: 'Leftover Pizza',
    emoji: '🍕',
    category: 'prepared',
    shelf: 'top',
    defaultExpiryDays: 3,
    safetyTip: 'Leftover pizza: eat within 3 days!'
  },
  {
    id: 'salad',
    name: 'Salad',
    emoji: '🥗',
    category: 'prepared',
    shelf: 'top',
    defaultExpiryDays: 2,
    safetyTip: 'Salad is best eaten within 2 days'
  },
  {
    id: 'soup',
    name: 'Soup',
    emoji: '🍲',
    category: 'prepared',
    shelf: 'top',
    defaultExpiryDays: 3,
    safetyTip: 'Leftover soup lasts about 3 days'
  },

  // Frozen (Freezer - stays fresh longest)
  {
    id: 'icecream',
    name: 'Ice Cream',
    emoji: '🍦',
    category: 'frozen',
    shelf: 'freezer',
    defaultExpiryDays: 60,
    safetyTip: 'Ice cream can last 2 months in the freezer!'
  }
];

// Get food item by ID
export const getFoodById = (id) => {
  return FOOD_DATABASE.find(food => food.id === id);
};

// Get all foods for a specific shelf
export const getFoodsByShelf = (shelf) => {
  return FOOD_DATABASE.filter(food => food.shelf === shelf);
};

// Shelf configuration for visual layout
export const SHELVES = {
  freezer: {
    id: 'freezer',
    name: 'Freezer',
    position: 'top',
    height: '20%'
  },
  top: {
    id: 'top',
    name: 'Top Shelf',
    position: 'upper-middle',
    height: '25%'
  },
  middle: {
    id: 'middle',
    name: 'Middle Shelf',
    position: 'lower-middle',
    height: '25%'
  },
  drawer: {
    id: 'drawer',
    name: 'Bottom Drawer',
    position: 'bottom',
    height: '30%'
  }
};
