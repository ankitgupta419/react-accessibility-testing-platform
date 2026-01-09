import React, { useState, useEffect } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [toastMessages, setToastMessages] = useState([]);
  const [notificationSettings, setNotificationSettings] = useState({
    enableSound: true,
    enableDesktop: false,
    enableEmail: false,
    position: 'top-right',
    duration: 5000
  });

  // Auto-remove notifications after duration
  useEffect(() => {
    const timer = setInterval(() => {
      setNotifications(prev => prev.filter(n => 
        Date.now() - n.timestamp < notificationSettings.duration
      ));
      setToastMessages(prev => prev.filter(t => 
        Date.now() - t.timestamp < notificationSettings.duration
      ));
    }, 1000);

    return () => clearInterval(timer);
  }, [notificationSettings.duration]);

  const addNotification = (type, title, message) => {
    const notification = {
      id: Date.now(),
      type, // success, error, warning, info
      title,
      message,
      timestamp: Date.now(),
      read: false
    };
    setNotifications(prev => [notification, ...prev]);
  };

  const addAlert = (severity, title, message, persistent = false) => {
    const alert = {
      id: Date.now(),
      severity, // critical, high, medium, low
      title,
      message,
      timestamp: Date.now(),
      persistent,
      dismissed: false
    };
    setAlerts(prev => [alert, ...prev]);
  };

  const addToast = (type, message) => {
    const toast = {
      id: Date.now(),
      type, // success, error, warning, info
      message,
      timestamp: Date.now()
    };
    setToastMessages(prev => [toast, ...prev]);
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const dismissAlert = (id) => {
    setAlerts(prev => prev.map(a => 
      a.id === id ? { ...a, dismissed: true } : a
    ));
  };

  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type) => {
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };
    return icons[type] || 'ℹ️';
  };

  const getAlertIcon = (severity) => {
    const icons = {
      critical: '🚨',
      high: '⚠️',
      medium: '⚡',
      low: 'ℹ️'
    };
    return icons[severity] || 'ℹ️';
  };

  const getAlertColor = (severity) => {
    const colors = {
      critical: 'red',
      high: 'orange',
      medium: 'yellow',
      low: 'blue'
    };
    return colors[severity] || 'blue';
  };

  return (
    <div className="notifications-container">
      <h2>Notification and Alert System</h2>
      
      {/* Notification Triggers */}
      <section className="notification-triggers">
        <h3>Trigger Notifications</h3>
        
        <div className="trigger-buttons">
          <button onClick={() => addNotification('success', 'Success!', 'Your action was completed successfully.')}>
            Add Success Notification
          </button>
          <button onClick={() => addNotification('error', 'Error!', 'Something went wrong with your request.')}>
            Add Error Notification
          </button>
          <button onClick={() => addNotification('warning', 'Warning!', 'Please review your settings.')}>
            Add Warning Notification
          </button>
          <button onClick={() => addNotification('info', 'Info', 'Here is some useful information.')}>
            Add Info Notification
          </button>
        </div>
      </section>

      {/* Alert Triggers */}
      <section className="alert-triggers">
        <h3>Trigger Alerts</h3>
        
        <div className="trigger-buttons">
          <button onClick={() => addAlert('critical', 'Critical Alert', 'System security breach detected!', true)}>
            Critical Alert
          </button>
          <button onClick={() => addAlert('high', 'High Priority', 'Server performance issues detected.')}>
            High Priority Alert
          </button>
          <button onClick={() => addAlert('medium', 'Medium Priority', 'Scheduled maintenance upcoming.')}>
            Medium Priority Alert
          </button>
          <button onClick={() => addAlert('low', 'Low Priority', 'New features available.')}>
            Low Priority Alert
          </button>
        </div>
      </section>

      {/* Toast Triggers */}
      <section className="toast-triggers">
        <h3>Trigger Toast Messages</h3>
        
        <div className="trigger-buttons">
          <button onClick={() => addToast('success', 'Operation completed successfully!')}>
            Success Toast
          </button>
          <button onClick={() => addToast('error', 'Failed to complete operation!')}>
            Error Toast
          </button>
          <button onClick={() => addToast('warning', 'Please check your input!')}>
            Warning Toast
          </button>
          <button onClick={() => addToast('info', 'Loading your data...')}>
            Info Toast
          </button>
        </div>
      </section>

      {/* Notifications Panel */}
      <section className="notifications-panel">
        <h3>Notifications</h3>
        
        <div className="panel-header">
          <span className="notification-count">
            {notifications.filter(n => !n.read).length} unread
          </span>
          <div className="panel-actions">
            <button onClick={markAllAsRead}>Mark All Read</button>
            <button onClick={clearAllNotifications}>Clear All</button>
          </div>
        </div>
        
        <div className="notifications-list">
          {notifications.length === 0 ? (
            <div className="empty-state">
              <p>No notifications</p>
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}
              >
                <div className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-message">{notification.message}</div>
                  <div className="notification-time">
                    {new Date(notification.timestamp).toLocaleTimeString()}
                  </div>
                </div>
                <div className="notification-actions">
                  {!notification.read && (
                    <button 
                      onClick={() => dismissNotification(notification.id)}
                      className="mark-read-btn"
                    >
                      ✓
                    </button>
                  )}
                  <button 
                    onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                    className="remove-btn"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Alerts Panel */}
      <section className="alerts-panel">
        <h3>System Alerts</h3>
        
        <div className="panel-header">
          <span className="alert-count">
            {alerts.filter(a => !a.dismissed).length} active alerts
          </span>
          <div className="panel-actions">
            <button onClick={clearAllAlerts}>Clear All</button>
          </div>
        </div>
        
        <div className="alerts-list">
          {alerts.length === 0 ? (
            <div className="empty-state">
              <p>No system alerts</p>
            </div>
          ) : (
            alerts.map(alert => (
              <div 
                key={alert.id} 
                className={`alert-item ${alert.severity} ${alert.dismissed ? 'dismissed' : 'active'}`}
                style={{ borderLeftColor: getAlertColor(alert.severity) }}
              >
                <div className="alert-icon">
                  {getAlertIcon(alert.severity)}
                </div>
                <div className="alert-content">
                  <div className="alert-title">{alert.title}</div>
                  <div className="alert-message">{alert.message}</div>
                  <div className="alert-time">
                    {new Date(alert.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="alert-actions">
                  {alert.persistent && !alert.dismissed && (
                    <button 
                      onClick={() => dismissAlert(alert.id)}
                      className="dismiss-btn"
                    >
                      Dismiss
                    </button>
                  )}
                  {!alert.persistent && (
                    <button 
                      onClick={() => removeAlert(alert.id)}
                      className="remove-btn"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Toast Messages */}
      <section className="toast-container">
        <h3>Toast Messages</h3>
        
        <div className="toast-list">
          {toastMessages.length === 0 ? (
            <div className="empty-state">
              <p>No toast messages</p>
            </div>
          ) : (
            toastMessages.map(toast => (
              <div 
                key={toast.id} 
                className={`toast-item ${toast.type}`}
              >
                <div className="toast-icon">
                  {getNotificationIcon(toast.type)}
                </div>
                <div className="toast-message">{toast.message}</div>
                <div className="toast-progress"></div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Notification Settings */}
      <section className="notification-settings">
        <h3>Notification Settings</h3>
        
        <div className="settings-grid">
          <div className="setting-group">
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.enableSound}
                onChange={(e) => setNotificationSettings(prev => ({
                  ...prev,
                  enableSound: e.target.checked
                }))}
              />
              Enable Sound
            </label>
          </div>
          
          <div className="setting-group">
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.enableDesktop}
                onChange={(e) => setNotificationSettings(prev => ({
                  ...prev,
                  enableDesktop: e.target.checked
                }))}
              />
              Desktop Notifications
            </label>
          </div>
          
          <div className="setting-group">
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.enableEmail}
                onChange={(e) => setNotificationSettings(prev => ({
                  ...prev,
                  enableEmail: e.target.checked
                }))}
              />
              Email Notifications
            </label>
          </div>
          
          <div className="setting-group">
            <label>Position</label>
            <select
              value={notificationSettings.position}
              onChange={(e) => setNotificationSettings(prev => ({
                ...prev,
                position: e.target.value
              }))}
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
            </select>
          </div>
          
          <div className="setting-group">
            <label>Duration (ms)</label>
            <input
              type="number"
              value={notificationSettings.duration}
              onChange={(e) => setNotificationSettings(prev => ({
                ...prev,
                duration: Number(e.target.value)
              }))}
              min="1000"
              max="10000"
              step="1000"
            />
          </div>
        </div>
      </section>

      {/* Status Summary */}
      <section className="status-summary">
        <h3>System Status</h3>
        
        <div className="status-grid">
          <div className="status-item">
            <span>Active Notifications:</span>
            <strong>{notifications.filter(n => !n.read).length}</strong>
          </div>
          <div className="status-item">
            <span>Total Notifications:</span>
            <strong>{notifications.length}</strong>
          </div>
          <div className="status-item">
            <span>Active Alerts:</span>
            <strong>{alerts.filter(a => !a.dismissed).length}</strong>
          </div>
          <div className="status-item">
            <span>Active Toasts:</span>
            <strong>{toastMessages.length}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notifications;
