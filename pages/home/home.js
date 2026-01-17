// pages/home/home.js
const { getFridgeItems, removeItemFromFridge, getItemFreshness, formatExpiryDate, sortItemsByExpiry } = require('../../utils/storage');
const { hapticFeedback, showAccessibleToast, needsTutorial, showTutorial } = require('../../utils/accessibility');

Page({
  data: {
    fridgeItems: [],
    expiringItems: [],
    freezerItems: [],
    topShelfItems: [],
    middleShelfItems: [],
    bottomShelfItems: [],
    drawerItems: []
  },

  onLoad() {
    this.loadFridgeItems();
    this.checkTutorial();
  },

  onShow() {
    // Reload items when page is shown (in case items were added)
    this.loadFridgeItems();
  },

  checkTutorial() {
    if (needsTutorial()) {
      showTutorial([
        {
          title: 'Welcome to Otto Fridge!',
          message: 'Let me show you around',
          icon: '👋'
        },
        {
          title: 'Add Items',
          message: 'Tap the + button to add food to your fridge',
          icon: '➕'
        },
        {
          title: 'Remove Items',
          message: 'Tap the X on any item to remove it',
          icon: '✕'
        },
        {
          title: 'Get Recipe Ideas',
          message: 'See what you can make with your ingredients',
          icon: '👨‍🍳'
        }
      ]);
    }
  },

  loadFridgeItems() {
    const items = getFridgeItems();

    // Add freshness status to each item
    const itemsWithStatus = items.map(item => ({
      ...item,
      freshness: getItemFreshness(item.expiryDate),
      expiryText: formatExpiryDate(item.expiryDate)
    }));

    // Find expiring items (expires in 2 days or less)
    const expiring = itemsWithStatus.filter(item =>
      item.freshness === 'expiring' || item.freshness === 'expired'
    );

    // Sort by expiry date
    const sortedItems = sortItemsByExpiry(itemsWithStatus);

    // Organize items by fridge section
    this.organizeItemsBySection(sortedItems);

    this.setData({
      fridgeItems: sortedItems,
      expiringItems: expiring
    });
  },

  organizeItemsBySection(items) {
    // Distribute items across fridge sections based on category
    const freezer = [];
    const topShelf = [];
    const middleShelf = [];
    const bottomShelf = [];
    const drawer = [];

    items.forEach(item => {
      switch (item.category) {
        case 'frozen':
          freezer.push(item);
          break;
        case 'drinks':
          topShelf.push(item);
          break;
        case 'dairy':
          middleShelf.push(item);
          break;
        case 'meat':
          bottomShelf.push(item);
          break;
        case 'vegetables':
        case 'fruits':
          drawer.push(item);
          break;
        default:
          middleShelf.push(item);
      }
    });

    this.setData({
      freezerItems: freezer,
      topShelfItems: topShelf,
      middleShelfItems: middleShelf,
      bottomShelfItems: bottomShelf,
      drawerItems: drawer
    });
  },

  onRemoveItem(e) {
    const { id } = e.currentTarget.dataset;
    const item = this.data.fridgeItems.find(i => i.id === id);

    if (!item) return;

    // Provide haptic feedback
    hapticFeedback('medium');

    // Remove item
    const success = removeItemFromFridge(id);

    if (success) {
      showAccessibleToast({
        title: `${item.name} removed`,
        icon: 'success',
        haptic: true
      });

      // Reload items
      this.loadFridgeItems();
    } else {
      showAccessibleToast({
        title: 'Failed to remove item',
        icon: 'error',
        haptic: true
      });
    }
  },

  onQuickItemTap(e) {
    const { item } = e.currentTarget.dataset;

    hapticFeedback('light');

    // Show item details
    wx.showModal({
      title: item.name,
      content: `Quantity: ${item.quantity}\nExpiry: ${item.expiryText}\nAdded: ${this.formatDate(item.addedDate)}`,
      showCancel: false,
      confirmText: 'OK'
    });
  },

  onAddItemsTap() {
    hapticFeedback('medium');

    wx.switchTab({
      url: '/pages/add-items/add-items'
    });
  },

  onRecipesTap() {
    hapticFeedback('medium');

    wx.switchTab({
      url: '/pages/recipes/recipes'
    });
  },

  onSettingsTap() {
    hapticFeedback('light');

    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  },

  formatDate(dateString) {
    if (!dateString) return 'Unknown';

    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;

    return date.toLocaleDateString();
  },

  onPullDownRefresh() {
    this.loadFridgeItems();
    wx.stopPullDownRefresh();
  }
});
