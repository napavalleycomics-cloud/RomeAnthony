// Storage utility functions for managing fridge items

/**
 * Get all fridge items from storage
 */
function getFridgeItems() {
  try {
    return wx.getStorageSync('fridgeItems') || [];
  } catch (error) {
    console.error('Error getting fridge items:', error);
    return [];
  }
}

/**
 * Save fridge items to storage
 */
function saveFridgeItems(items) {
  try {
    wx.setStorageSync('fridgeItems', items);
    return true;
  } catch (error) {
    console.error('Error saving fridge items:', error);
    return false;
  }
}

/**
 * Add item to fridge
 */
function addItemToFridge(item) {
  const items = getFridgeItems();

  // Check if item already exists
  const existingIndex = items.findIndex(i => i.id === item.id);

  if (existingIndex >= 0) {
    // Increase quantity
    items[existingIndex].quantity = (items[existingIndex].quantity || 1) + 1;
  } else {
    // Add new item with timestamp and expiry date
    const newItem = {
      ...item,
      quantity: 1,
      addedDate: new Date().toISOString(),
      expiryDate: calculateExpiryDate(item.defaultExpiryDays)
    };
    items.push(newItem);
  }

  return saveFridgeItems(items);
}

/**
 * Remove item from fridge
 */
function removeItemFromFridge(itemId) {
  const items = getFridgeItems();
  const itemIndex = items.findIndex(i => i.id === itemId);

  if (itemIndex >= 0) {
    const item = items[itemIndex];

    if (item.quantity > 1) {
      // Decrease quantity
      items[itemIndex].quantity = item.quantity - 1;
    } else {
      // Remove item completely
      items.splice(itemIndex, 1);
    }

    return saveFridgeItems(items);
  }

  return false;
}

/**
 * Clear all items from fridge
 */
function clearFridge() {
  return saveFridgeItems([]);
}

/**
 * Calculate expiry date based on default days
 */
function calculateExpiryDate(defaultExpiryDays) {
  const date = new Date();
  date.setDate(date.getDate() + defaultExpiryDays);
  return date.toISOString();
}

/**
 * Get item freshness status
 */
function getItemFreshness(expiryDate) {
  if (!expiryDate) return 'unknown';

  const today = new Date();
  const expiry = new Date(expiryDate);
  const daysUntilExpiry = Math.floor((expiry - today) / (1000 * 60 * 60 * 24));

  if (daysUntilExpiry < 0) return 'expired';
  if (daysUntilExpiry <= 2) return 'expiring';
  return 'fresh';
}

/**
 * Get days until expiry
 */
function getDaysUntilExpiry(expiryDate) {
  if (!expiryDate) return null;

  const today = new Date();
  const expiry = new Date(expiryDate);
  return Math.floor((expiry - today) / (1000 * 60 * 60 * 24));
}

/**
 * Format expiry date for display
 */
function formatExpiryDate(expiryDate) {
  if (!expiryDate) return 'No expiry date';

  const days = getDaysUntilExpiry(expiryDate);

  if (days < 0) return 'Expired';
  if (days === 0) return 'Expires today';
  if (days === 1) return 'Expires tomorrow';
  return `${days} days left`;
}

/**
 * Sort items by expiry date (soonest first)
 */
function sortItemsByExpiry(items) {
  return items.sort((a, b) => {
    if (!a.expiryDate) return 1;
    if (!b.expiryDate) return -1;
    return new Date(a.expiryDate) - new Date(b.expiryDate);
  });
}

/**
 * Group items by category
 */
function groupItemsByCategory(items) {
  return items.reduce((groups, item) => {
    const category = item.category || 'other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});
}

module.exports = {
  getFridgeItems,
  saveFridgeItems,
  addItemToFridge,
  removeItemFromFridge,
  clearFridge,
  calculateExpiryDate,
  getItemFreshness,
  getDaysUntilExpiry,
  formatExpiryDate,
  sortItemsByExpiry,
  groupItemsByCategory
};
