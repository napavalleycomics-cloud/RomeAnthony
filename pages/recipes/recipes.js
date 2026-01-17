// pages/recipes/recipes.js
const { getFridgeItems } = require('../../utils/storage');
const { findMatchingRecipes, getRecipeById } = require('../../utils/recipes');
const { getItemById } = require('../../utils/foodData');
const { hapticFeedback } = require('../../utils/accessibility');

Page({
  data: {
    fridgeItems: [],
    canMakeRecipes: [],
    almostRecipes: [],
    otherRecipes: [],
    showRecipeDetail: false,
    selectedRecipe: null
  },

  onLoad() {
    this.loadRecipes();
  },

  onShow() {
    // Reload in case fridge items changed
    this.loadRecipes();
  },

  loadRecipes() {
    const fridgeItems = getFridgeItems();

    if (fridgeItems.length === 0) {
      this.setData({ fridgeItems: [] });
      return;
    }

    const recipes = findMatchingRecipes(fridgeItems);

    // Categorize recipes
    const canMake = recipes.filter(r => r.canMake);
    const almost = recipes.filter(r => !r.canMake && r.matchPercentage >= 50);
    const other = recipes.filter(r => !r.canMake && r.matchPercentage < 50);

    // Add missing text to almost recipes
    const almostWithText = almost.map(recipe => ({
      ...recipe,
      missingText: recipe.missingIngredients
        .map(id => {
          const item = getItemById(id);
          return item ? item.name : id;
        })
        .join(', ')
    }));

    this.setData({
      fridgeItems,
      canMakeRecipes: canMake,
      almostRecipes: almostWithText,
      otherRecipes: other
    });
  },

  onRecipeTap(e) {
    const { recipe } = e.currentTarget.dataset;

    hapticFeedback('medium');

    // Get ingredient details
    const fridgeItems = getFridgeItems();
    const fridgeIds = fridgeItems.map(item => item.id);

    const requiredIngredientsList = recipe.requiredIngredients.map(id => {
      const item = getItemById(id);
      return {
        id,
        name: item ? item.name : id,
        icon: item ? item.icon : '❓',
        available: fridgeIds.includes(id)
      };
    });

    const optionalIngredientsList = recipe.optionalIngredients.map(id => {
      const item = getItemById(id);
      return {
        id,
        name: item ? item.name : id,
        icon: item ? item.icon : '❓',
        available: fridgeIds.includes(id)
      };
    });

    this.setData({
      showRecipeDetail: true,
      selectedRecipe: {
        ...recipe,
        requiredIngredientsList,
        optionalIngredientsList
      }
    });
  },

  onCloseModal() {
    hapticFeedback('light');
    this.setData({ showRecipeDetail: false });
  },

  preventClose() {
    // Prevent modal from closing when clicking content
  },

  onAddMissingItems() {
    hapticFeedback('medium');

    // Close modal
    this.setData({ showRecipeDetail: false });

    // Navigate to add items page
    wx.switchTab({
      url: '/pages/add-items/add-items'
    });
  },

  onAddItemsTap() {
    hapticFeedback('medium');

    wx.switchTab({
      url: '/pages/add-items/add-items'
    });
  }
});
