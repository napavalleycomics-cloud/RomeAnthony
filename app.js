// app.js
App({
  onLaunch() {
    // Initialize storage
    this.initializeStorage();

    // Check for expiring items
    this.checkExpiringItems();

    // Set up reminder notifications
    this.setupReminders();
  },

  globalData: {
    userInfo: null,
    fridgeItems: [],
    appTheme: {
      primary: '#9B8AC4',      // Lavender
      secondary: '#E6E1F5',    // Light lavender
      background: '#FFFEF9',   // Cream
      surface: '#FFFFFF',      // White
      text: '#333333',         // Dark text
      textLight: '#666666',    // Light text
      success: '#4CAF50',      // Green for fresh items
      warning: '#FFC107',      // Yellow for expiring soon
      error: '#F44336',        // Red for expired
      beige: '#F5F5DC'
    }
  },

  initializeStorage() {
    // Initialize local storage with default data if first time
    const items = wx.getStorageSync('fridgeItems');
    if (!items) {
      wx.setStorageSync('fridgeItems', []);
    }

    const settings = wx.getStorageSync('appSettings');
    if (!settings) {
      wx.setStorageSync('appSettings', {
        notifications: true,
        soundFeedback: true,
        vibrationFeedback: true,
        voiceAnnouncements: false,
        expiryReminderDays: 2,
        tutorialCompleted: false
      });
    }
  },

  checkExpiringItems() {
    const items = wx.getStorageSync('fridgeItems') || [];
    const today = new Date();
    const reminderDays = this.getSettings().expiryReminderDays || 2;

    items.forEach(item => {
      if (item.expiryDate) {
        const expiryDate = new Date(item.expiryDate);
        const daysUntilExpiry = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));

        if (daysUntilExpiry <= reminderDays && daysUntilExpiry >= 0) {
          this.sendExpiryNotification(item, daysUntilExpiry);
        }
      }
    });
  },

  sendExpiryNotification(item, daysUntilExpiry) {
    const settings = this.getSettings();
    if (!settings.notifications) return;

    const message = daysUntilExpiry === 0
      ? `${item.name} expires today!`
      : `${item.name} expires in ${daysUntilExpiry} day${daysUntilExpiry > 1 ? 's' : ''}`;

    wx.showToast({
      title: message,
      icon: 'none',
      duration: 3000
    });

    if (settings.vibrationFeedback) {
      wx.vibrateShort();
    }
  },

  setupReminders() {
    // Set up daily check for expiring items
    // Note: Actual implementation would use background tasks or scheduled notifications
    console.log('Reminders set up');
  },

  getSettings() {
    return wx.getStorageSync('appSettings') || {
      notifications: true,
      soundFeedback: true,
      vibrationFeedback: true,
      voiceAnnouncements: false,
      expiryReminderDays: 2,
      tutorialCompleted: false
    };
  },

  updateSettings(newSettings) {
    const currentSettings = this.getSettings();
    const updatedSettings = { ...currentSettings, ...newSettings };
    wx.setStorageSync('appSettings', updatedSettings);
  }
});
