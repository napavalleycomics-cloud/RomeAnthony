// Recipe suggestion engine based on available ingredients

const RECIPES = [
  {
    id: 'tomato-egg-scramble',
    name: 'Tomato & Egg Scramble',
    icon: '🍳',
    difficulty: 'easy',
    time: '10 mins',
    requiredIngredients: ['tomato', 'egg'],
    optionalIngredients: ['onion', 'pepper'],
    instructions: [
      'Beat 2-3 eggs in a bowl',
      'Dice 1 tomato',
      'Heat pan with oil',
      'Cook eggs until nearly done',
      'Add tomatoes and cook for 2 more minutes',
      'Season with salt and pepper'
    ]
  },
  {
    id: 'chicken-sandwich',
    name: 'Chicken Sandwich',
    icon: '🥪',
    difficulty: 'easy',
    time: '15 mins',
    requiredIngredients: ['chicken', 'bread'],
    optionalIngredients: ['tomato', 'lettuce', 'cheese'],
    instructions: [
      'Cook chicken until golden',
      'Toast bread slices',
      'Layer chicken on bread',
      'Add vegetables if available',
      'Top with second slice of bread'
    ]
  },
  {
    id: 'cheese-omelette',
    name: 'Cheese Omelette',
    icon: '🍳',
    difficulty: 'easy',
    time: '8 mins',
    requiredIngredients: ['egg', 'cheese'],
    optionalIngredients: ['onion', 'pepper'],
    instructions: [
      'Beat 2-3 eggs',
      'Heat pan with butter',
      'Pour eggs and let set',
      'Add grated cheese',
      'Fold and serve'
    ]
  },
  {
    id: 'veggie-stir-fry',
    name: 'Veggie Stir Fry',
    icon: '🥗',
    difficulty: 'easy',
    time: '15 mins',
    requiredIngredients: ['cabbage', 'onion'],
    optionalIngredients: ['pepper', 'carrot', 'broccoli'],
    instructions: [
      'Chop all vegetables',
      'Heat oil in pan',
      'Add onions first',
      'Add other vegetables',
      'Stir fry for 5-7 minutes',
      'Season and serve'
    ]
  },
  {
    id: 'chicken-stir-fry',
    name: 'Chicken Stir Fry',
    icon: '🍗',
    difficulty: 'medium',
    time: '20 mins',
    requiredIngredients: ['chicken', 'cabbage'],
    optionalIngredients: ['onion', 'pepper', 'carrot'],
    instructions: [
      'Cut chicken into bite-sized pieces',
      'Chop vegetables',
      'Cook chicken until done',
      'Add vegetables and stir fry',
      'Season with soy sauce',
      'Serve hot'
    ]
  },
  {
    id: 'fruit-salad',
    name: 'Fresh Fruit Salad',
    icon: '🍓',
    difficulty: 'easy',
    time: '5 mins',
    requiredIngredients: ['orange', 'watermelon'],
    optionalIngredients: ['apple', 'banana', 'strawberry', 'grapes'],
    instructions: [
      'Wash all fruits',
      'Cut into bite-sized pieces',
      'Mix in a bowl',
      'Optional: add honey or yogurt',
      'Chill and serve'
    ]
  },
  {
    id: 'ham-cheese-toast',
    name: 'Ham & Cheese Toast',
    icon: '🥪',
    difficulty: 'easy',
    time: '10 mins',
    requiredIngredients: ['bread', 'cheese', 'ham'],
    optionalIngredients: ['tomato', 'butter'],
    instructions: [
      'Butter bread slices',
      'Layer ham and cheese',
      'Add tomato if available',
      'Toast until golden',
      'Serve warm'
    ]
  },
  {
    id: 'watermelon-refresher',
    name: 'Watermelon Refresher',
    icon: '🍉',
    difficulty: 'easy',
    time: '5 mins',
    requiredIngredients: ['watermelon'],
    optionalIngredients: ['lemon', 'ice-cream'],
    instructions: [
      'Cut watermelon into cubes',
      'Blend until smooth',
      'Add ice',
      'Optional: squeeze lemon juice',
      'Serve chilled'
    ]
  }
];

/**
 * Find recipes that can be made with available items
 */
function findMatchingRecipes(fridgeItems) {
  const availableIds = fridgeItems.map(item => item.id);

  return RECIPES.map(recipe => {
    // Check how many required ingredients are available
    const requiredMatches = recipe.requiredIngredients.filter(ingredient =>
      availableIds.includes(ingredient)
    );

    // Check how many optional ingredients are available
    const optionalMatches = recipe.optionalIngredients.filter(ingredient =>
      availableIds.includes(ingredient)
    );

    const matchPercentage = (requiredMatches.length / recipe.requiredIngredients.length) * 100;
    const canMake = matchPercentage === 100;

    return {
      ...recipe,
      canMake,
      matchPercentage,
      requiredMatches: requiredMatches.length,
      totalRequired: recipe.requiredIngredients.length,
      optionalMatches: optionalMatches.length,
      missingIngredients: recipe.requiredIngredients.filter(
        ingredient => !availableIds.includes(ingredient)
      )
    };
  }).sort((a, b) => {
    // Sort by: can make first, then by match percentage
    if (a.canMake && !b.canMake) return -1;
    if (!a.canMake && b.canMake) return 1;
    return b.matchPercentage - a.matchPercentage;
  });
}

/**
 * Get recipe by ID
 */
function getRecipeById(id) {
  return RECIPES.find(recipe => recipe.id === id);
}

/**
 * Get all recipes
 */
function getAllRecipes() {
  return RECIPES;
}

module.exports = {
  RECIPES,
  findMatchingRecipes,
  getRecipeById,
  getAllRecipes
};
