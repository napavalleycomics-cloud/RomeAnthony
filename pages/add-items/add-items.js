// pages/add-items/add-items.js
const { FOOD_DATABASE, getItemsByCategory, searchItems } = require('../../utils/foodData');
const { getFridgeItems, addItemToFridge } = require('../../utils/storage');
const { hapticFeedback, showAccessibleToast } = require('../../utils/accessibility');

Page({
  data: {
    searchQuery: '',
    searchResults: [],
    popularItems: [],
    drinks: [],
    vegetables: [],
    fruits: [],
    meat: [],
    dairy: [],
    other: [],
    itemsAdded: 0
  },

  onLoad() {
    this.loadCategories();
  },

  onShow() {
    // Reload to update "in fridge" status
    this.loadCategories();
  },

  loadCategories() {
    const fridgeItems = getFridgeItems();
    const fridgeIds = fridgeItems.map(item => item.id);

    // Mark items that are already in fridge
    const markInFridge = (items) => items.map(item => ({
      ...item,
      inFridge: fridgeIds.includes(item.id)
    }));

    this.setData({
      popularItems: markInFridge(FOOD_DATABASE.popularItems),
      drinks: markInFridge(FOOD_DATABASE.drinks),
      vegetables: markInFridge(FOOD_DATABASE.vegetables),
      fruits: markInFridge(FOOD_DATABASE.fruits),
      meat: markInFridge(FOOD_DATABASE.meat),
      dairy: markInFridge(FOOD_DATABASE.dairy),
      other: markInFridge(FOOD_DATABASE.other),
      itemsAdded: 0
    });
  },

  onSearchInput(e) {
    const query = e.detail.value;
    this.setData({ searchQuery: query });

    if (query.trim()) {
      this.performSearch(query);
    } else {
      this.setData({ searchResults: [] });
    }
  },

  performSearch(query) {
    const results = searchItems(query);
    const fridgeItems = getFridgeItems();
    const fridgeIds = fridgeItems.map(item => item.id);

    // Mark items that are already in fridge
    const markedResults = results.map(item => ({
      ...item,
      inFridge: fridgeIds.includes(item.id)
    }));

    this.setData({ searchResults: markedResults });
  },

  onClearSearch() {
    hapticFeedback('light');
    this.setData({
      searchQuery: '',
      searchResults: []
    });
  },

  onAddItem(e) {
    const { item } = e.currentTarget.dataset;

    if (item.inFridge) {
      // Item already in fridge, show message
      showAccessibleToast({
        title: `${item.name} is already in your fridge`,
        icon: 'none',
        haptic: true
      });
      return;
    }

    // Add item to fridge
    const success = addItemToFridge(item);

    if (success) {
      // Provide success feedback
      hapticFeedback('success');

      showAccessibleToast({
        title: `${item.name} added to fridge`,
        icon: 'success',
        haptic: false,
        duration: 1500
      });

      // Increment items added counter
      this.setData({
        itemsAdded: this.data.itemsAdded + 1
      });

      // Update the item's inFridge status
      this.updateItemStatus(item.id, true);
    } else {
      showAccessibleToast({
        title: 'Failed to add item',
        icon: 'error',
        haptic: true
      });
    }
  },

  updateItemStatus(itemId, inFridge) {
    const updateArray = (arr) => arr.map(item =>
      item.id === itemId ? { ...item, inFridge } : item
    );

    this.setData({
      popularItems: updateArray(this.data.popularItems),
      drinks: updateArray(this.data.drinks),
      vegetables: updateArray(this.data.vegetables),
      fruits: updateArray(this.data.fruits),
      meat: updateArray(this.data.meat),
      dairy: updateArray(this.data.dairy),
      other: updateArray(this.data.other),
      searchResults: updateArray(this.data.searchResults)
    });
  },

  onViewFridge() {
    hapticFeedback('medium');

    wx.switchTab({
      url: '/pages/home/home'
    });
  }
});
