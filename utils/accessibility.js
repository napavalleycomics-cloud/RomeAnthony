// Accessibility utility functions

/**
 * Provide haptic feedback for user actions
 */
function hapticFeedback(type = 'light') {
  const app = getApp();
  const settings = app.getSettings();

  if (!settings.vibrationFeedback) return;

  try {
    switch (type) {
      case 'light':
        wx.vibrateShort({ type: 'light' });
        break;
      case 'medium':
        wx.vibrateShort({ type: 'medium' });
        break;
      case 'heavy':
        wx.vibrateShort({ type: 'heavy' });
        break;
      case 'success':
        wx.vibrateShort({ type: 'light' });
        setTimeout(() => wx.vibrateShort({ type: 'light' }), 100);
        break;
      case 'error':
        wx.vibrateShort({ type: 'heavy' });
        break;
      default:
        wx.vibrateShort({ type: 'light' });
    }
  } catch (error) {
    console.error('Haptic feedback error:', error);
  }
}

/**
 * Provide audio feedback
 */
function audioFeedback(type = 'tap') {
  const app = getApp();
  const settings = app.getSettings();

  if (!settings.soundFeedback) return;

  // Note: In a real implementation, you would play audio files
  // For now, we'll just log the intent
  console.log(`Audio feedback: ${type}`);
}

/**
 * Voice announcement for screen readers
 */
function announceToScreenReader(message, priority = 'polite') {
  const app = getApp();
  const settings = app.getSettings();

  if (!settings.voiceAnnouncements) return;

  // Use aria-live regions or platform-specific screen reader APIs
  // For WeChat mini-programs, this might be handled differently
  console.log(`Screen reader announcement (${priority}): ${message}`);
}

/**
 * Show accessible toast message
 */
function showAccessibleToast(options) {
  const {
    title,
    icon = 'none',
    duration = 2000,
    haptic = true,
    announce = true
  } = options;

  // Show toast
  wx.showToast({
    title,
    icon,
    duration
  });

  // Provide haptic feedback
  if (haptic) {
    hapticFeedback(icon === 'success' ? 'success' : 'light');
  }

  // Announce to screen reader
  if (announce) {
    announceToScreenReader(title);
  }
}

/**
 * Confirm action with accessible dialog
 */
function showAccessibleConfirm(options) {
  return new Promise((resolve) => {
    const {
      title,
      content,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      haptic = true
    } = options;

    wx.showModal({
      title,
      content,
      confirmText,
      cancelText,
      success: (res) => {
        if (haptic) {
          hapticFeedback(res.confirm ? 'success' : 'light');
        }
        resolve(res.confirm);
      }
    });
  });
}

/**
 * Show tutorial overlay for first-time users
 */
function showTutorial(steps) {
  const app = getApp();
  const settings = app.getSettings();

  if (settings.tutorialCompleted) return;

  // This would show an interactive tutorial
  // For now, we'll just mark it as completed
  console.log('Tutorial steps:', steps);

  // After tutorial is completed
  app.updateSettings({ tutorialCompleted: true });
}

/**
 * Check if user needs tutorial
 */
function needsTutorial() {
  const app = getApp();
  const settings = app.getSettings();
  return !settings.tutorialCompleted;
}

/**
 * Format text for better readability
 */
function formatForReadability(text, options = {}) {
  const {
    maxLength = 50,
    addSpaces = false
  } = options;

  let formatted = text;

  // Add spaces between numbers and text if needed
  if (addSpaces) {
    formatted = formatted.replace(/(\d)([a-zA-Z])/g, '$1 $2');
  }

  // Truncate if too long
  if (formatted.length > maxLength) {
    formatted = formatted.substring(0, maxLength - 3) + '...';
  }

  return formatted;
}

/**
 * Get appropriate font size based on settings
 */
function getAccessibleFontSize(baseSize = 16) {
  const app = getApp();
  const settings = app.getSettings();
  const multiplier = settings.fontSizeMultiplier || 1.0;

  return baseSize * multiplier;
}

module.exports = {
  hapticFeedback,
  audioFeedback,
  announceToScreenReader,
  showAccessibleToast,
  showAccessibleConfirm,
  showTutorial,
  needsTutorial,
  formatForReadability,
  getAccessibleFontSize
};
