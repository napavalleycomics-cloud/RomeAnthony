// pages/settings/settings.js
const { getFridgeItems, clearFridge } = require('../../utils/storage');
const { hapticFeedback, showAccessibleToast, showAccessibleConfirm } = require('../../utils/accessibility');

Page({
  data: {
    settings: {},
    itemCount: 0,
    reminderDaysOptions: [1, 2, 3, 5, 7],
    reminderDaysIndex: 1
  },

  onLoad() {
    this.loadSettings();
    this.loadItemCount();
  },

  onShow() {
    this.loadItemCount();
  },

  loadSettings() {
    const app = getApp();
    const settings = app.getSettings();

    // Find index for reminder days
    const reminderDaysIndex = this.data.reminderDaysOptions.indexOf(settings.expiryReminderDays) || 1;

    this.setData({
      settings,
      reminderDaysIndex
    });
  },

  loadItemCount() {
    const items = getFridgeItems();
    this.setData({ itemCount: items.length });
  },

  updateSetting(key, value) {
    const app = getApp();
    app.updateSettings({ [key]: value });

    this.setData({
      [`settings.${key}`]: value
    });

    hapticFeedback('light');
  },

  onNotificationsChange(e) {
    this.updateSetting('notifications', e.detail.value);

    showAccessibleToast({
      title: e.detail.value ? 'Notifications enabled' : 'Notifications disabled',
      icon: 'success',
      haptic: false
    });
  },

  onSoundChange(e) {
    this.updateSetting('soundFeedback', e.detail.value);
  },

  onVibrationChange(e) {
    this.updateSetting('vibrationFeedback', e.detail.value);

    if (e.detail.value) {
      hapticFeedback('medium');
    }
  },

  onVoiceChange(e) {
    this.updateSetting('voiceAnnouncements', e.detail.value);

    showAccessibleToast({
      title: e.detail.value ? 'Voice enabled' : 'Voice disabled',
      icon: 'success',
      haptic: false
    });
  },

  onReminderDaysChange(e) {
    const index = parseInt(e.detail.value);
    const days = this.data.reminderDaysOptions[index];

    this.updateSetting('expiryReminderDays', days);

    this.setData({
      reminderDaysIndex: index
    });

    showAccessibleToast({
      title: `Reminder set to ${days} days`,
      icon: 'success',
      haptic: true
    });
  },

  async onRestartTutorial() {
    hapticFeedback('medium');

    const confirmed = await showAccessibleConfirm({
      title: 'Restart Tutorial',
      content: 'This will show you the app guide again.',
      confirmText: 'Show Tutorial',
      cancelText: 'Cancel'
    });

    if (confirmed) {
      const app = getApp();
      app.updateSettings({ tutorialCompleted: false });

      showAccessibleToast({
        title: 'Tutorial will show on next launch',
        icon: 'success',
        haptic: true
      });

      // Go to home page
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/home/home'
        });
      }, 1500);
    }
  },

  async onClearFridge() {
    hapticFeedback('heavy');

    const confirmed = await showAccessibleConfirm({
      title: 'Clear Fridge?',
      content: 'This will remove all items from your fridge. This cannot be undone.',
      confirmText: 'Clear All',
      cancelText: 'Cancel',
      haptic: true
    });

    if (confirmed) {
      const success = clearFridge();

      if (success) {
        showAccessibleToast({
          title: 'Fridge cleared',
          icon: 'success',
          haptic: true
        });

        this.loadItemCount();
      } else {
        showAccessibleToast({
          title: 'Failed to clear fridge',
          icon: 'error',
          haptic: true
        });
      }
    }
  }
});
