import React, { useState } from 'react';

function TabsAccordion() {
  const [activeTab, setActiveTab] = useState('profile');
  const [expandedAccordions, setExpandedAccordions] = useState([]);

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'security', label: 'Security', icon: '🔒' }
  ];

  const accordionData = [
    {
      id: 'personal',
      title: 'Personal Information',
      content: 'Manage your personal details, contact information, and profile preferences. This section includes your name, email, phone number, and other personal data.',
      items: ['Full Name', 'Email Address', 'Phone Number', 'Date of Birth', 'Address']
    },
    {
      id: 'privacy',
      title: 'Privacy Settings',
      content: 'Control your privacy preferences and data sharing settings. Choose who can see your information and how your data is used.',
      items: ['Profile Visibility', 'Data Sharing', 'Ad Preferences', 'Location Services']
    },
    {
      id: 'security',
      title: 'Security Settings',
      content: 'Configure your security settings including password management, two-factor authentication, and login preferences.',
      items: ['Password', 'Two-Factor Auth', 'Login Alerts', 'Session Management']
    },
    {
      id: 'notifications',
      title: 'Notification Preferences',
      content: 'Customize how and when you receive notifications. Manage email alerts, push notifications, and in-app messages.',
      items: ['Email Notifications', 'Push Notifications', 'SMS Alerts', 'In-App Messages']
    }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleAccordion = (accordionId) => {
    setExpandedAccordions(prev => 
      prev.includes(accordionId) 
        ? prev.filter(id => id !== accordionId)
        : [...prev, accordionId]
    );
  };

  const expandAll = () => {
    setExpandedAccordions(accordionData.map(item => item.id));
  };

  const collapseAll = () => {
    setExpandedAccordions([]);
  };

  return (
    <div className="tabs-accordion-container">
      <h2>Tabs and Accordion Components</h2>
      
      {/* Tabs Section */}
      <section className="tabs-section">
        <h3>Interactive Tabs</h3>
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div className="tab-list" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tab-panel-${tab.id}`}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        <div className="tab-panels">
          {tabs.map(tab => (
            <div
              key={tab.id}
              id={`tab-panel-${tab.id}`}
              className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}
              role="tabpanel"
              aria-labelledby={tab.id}
            >
              {tab.id === 'profile' && (
                <div className="tab-content">
                  <h4>Profile Information</h4>
                  <div className="profile-grid">
                    <div className="profile-item">
                      <label>Full Name</label>
                      <input type="text" defaultValue="John Doe" />
                    </div>
                    <div className="profile-item">
                      <label>Email</label>
                      <input type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="profile-item">
                      <label>Department</label>
                      <select defaultValue="engineering">
                        <option value="engineering">Engineering</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="hr">Human Resources</option>
                      </select>
                    </div>
                    <div className="profile-item">
                      <label>Bio</label>
                      <textarea rows="3" defaultValue="Software engineer with 5 years of experience..."></textarea>
                    </div>
                  </div>
                </div>
              )}

              {tab.id === 'settings' && (
                <div className="tab-content">
                  <h4>Application Settings</h4>
                  <div className="settings-grid">
                    <div className="setting-group">
                      <h5>Appearance</h5>
                      <label>
                        <input type="checkbox" defaultChecked />
                        Dark Mode
                      </label>
                      <label>
                        <input type="checkbox" />
                        Compact View
                      </label>
                    </div>
                    <div className="setting-group">
                      <h5>Language</h5>
                      <select defaultValue="en">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </div>
                    <div className="setting-group">
                      <h5>Timezone</h5>
                      <select defaultValue="utc">
                        <option value="utc">UTC</option>
                        <option value="est">EST</option>
                        <option value="pst">PST</option>
                        <option value="cst">CST</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {tab.id === 'notifications' && (
                <div className="tab-content">
                  <h4>Notification Preferences</h4>
                  <div className="notification-settings">
                    <div className="notification-group">
                      <h5>Email Notifications</h5>
                      <label>
                        <input type="checkbox" defaultChecked />
                        Daily Summary
                      </label>
                      <label>
                        <input type="checkbox" defaultChecked />
                        Security Alerts
                      </label>
                      <label>
                        <input type="checkbox" />
                        Product Updates
                      </label>
                    </div>
                    <div className="notification-group">
                      <h5>Push Notifications</h5>
                      <label>
                        <input type="checkbox" defaultChecked />
                        Mentions
                      </label>
                      <label>
                        <input type="checkbox" />
                        Messages
                      </label>
                      <label>
                        <input type="checkbox" />
                        System Updates
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {tab.id === 'security' && (
                <div className="tab-content">
                  <h4>Security Settings</h4>
                  <div className="security-settings">
                    <div className="security-item">
                      <h5>Password Requirements</h5>
                      <ul>
                        <li>Minimum 8 characters</li>
                        <li>At least one uppercase letter</li>
                        <li>At least one number</li>
                        <li>At least one special character</li>
                      </ul>
                    </div>
                    <div className="security-item">
                      <h5>Two-Factor Authentication</h5>
                      <label>
                        <input type="checkbox" />
                        Enable 2FA
                      </label>
                      <button className="btn-secondary">Configure 2FA</button>
                    </div>
                    <div className="security-item">
                      <h5>Login History</h5>
                      <div className="login-history">
                        <div className="login-item">
                          <span className="login-time">2024-01-15 09:30 AM</span>
                          <span className="login-location">New York, NY</span>
                          <span className="login-device">Chrome on Windows</span>
                        </div>
                        <div className="login-item">
                          <span className="login-time">2024-01-14 02:15 PM</span>
                          <span className="login-location">San Francisco, CA</span>
                          <span className="login-device">Safari on iPhone</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Accordion Section */}
      <section className="accordion-section">
        <h3>Accordion Components</h3>
        
        {/* Accordion Controls */}
        <div className="accordion-controls">
          <button onClick={expandAll}>Expand All</button>
          <button onClick={collapseAll}>Collapse All</button>
        </div>

        {/* Accordion Items */}
        <div className="accordion-list">
          {accordionData.map(accordion => (
            <div key={accordion.id} className="accordion-item">
              <button
                className={`accordion-header ${expandedAccordions.includes(accordion.id) ? 'expanded' : ''}`}
                onClick={() => toggleAccordion(accordion.id)}
                aria-expanded={expandedAccordions.includes(accordion.id)}
                aria-controls={`accordion-content-${accordion.id}`}
              >
                <span className="accordion-icon">
                  {expandedAccordions.includes(accordion.id) ? '−' : '+'}
                </span>
                <span className="accordion-title">{accordion.title}</span>
              </button>
              
              <div
                id={`accordion-content-${accordion.id}`}
                className={`accordion-content ${expandedAccordions.includes(accordion.id) ? 'expanded' : ''}`}
                aria-hidden={!expandedAccordions.includes(accordion.id)}
              >
                <p className="accordion-description">{accordion.content}</p>
                
                <div className="accordion-details">
                  <h5>Settings:</h5>
                  <div className="detail-list">
                    {accordion.items.map((item, index) => (
                      <label key={index} className="detail-item">
                        <input type="checkbox" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combined Tabs and Accordion */}
      <section className="combined-section">
        <h3>Tabs with Nested Accordions</h3>
        
        <div className="tab-navigation">
          <div className="tab-list" role="tablist">
            <button
              className={`tab-button ${activeTab === 'nested' ? 'active' : ''}`}
              onClick={() => handleTabChange('nested')}
              role="tab"
              aria-selected={activeTab === 'nested'}
              aria-controls="nested-tab-panel"
            >
              Nested Content
            </button>
          </div>
        </div>

        <div className="tab-panels">
          <div
            id="nested-tab-panel"
            className={`tab-panel ${activeTab === 'nested' ? 'active' : ''}`}
            role="tabpanel"
          >
            <div className="accordion-list">
              {['Getting Started', 'Advanced Features', 'Troubleshooting'].map((section, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className={`accordion-header ${expandedAccordions.includes(`nested-${index}`) ? 'expanded' : ''}`}
                    onClick={() => toggleAccordion(`nested-${index}`)}
                  >
                    <span className="accordion-icon">
                      {expandedAccordions.includes(`nested-${index}`) ? '−' : '+'}
                    </span>
                    <span className="accordion-title">{section}</span>
                  </button>
                  
                  <div className={`accordion-content ${expandedAccordions.includes(`nested-${index}`) ? 'expanded' : ''}`}>
                    <div className="nested-content">
                      {index === 0 && (
                        <div>
                          <h5>Welcome to the Platform</h5>
                          <p>Get started with our comprehensive guide to using all features effectively.</p>
                          <ul>
                            <li>Creating your first project</li>
                            <li>Understanding the dashboard</li>
                            <li>Collaboration tools</li>
                          </ul>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div>
                          <h5>Advanced Features</h5>
                          <p>Explore powerful capabilities for advanced users.</p>
                          <ul>
                            <li>Custom workflows</li>
                            <li>API integrations</li>
                            <li>Advanced analytics</li>
                            <li>Automation rules</li>
                          </ul>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div>
                          <h5>Troubleshooting</h5>
                          <p>Find solutions to common issues and get help when you need it.</p>
                          <ul>
                            <li>Connection problems</li>
                            <li>Performance issues</li>
                            <li>Account access</li>
                            <li>Data synchronization</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Summary */}
      <section className="status-summary">
        <h3>Component Status</h3>
        <div className="status-grid">
          <div className="status-item">
            <span>Active Tab:</span>
            <strong>{tabs.find(tab => tab.id === activeTab)?.label || 'None'}</strong>
          </div>
          <div className="status-item">
            <span>Expanded Accordions:</span>
            <strong>{expandedAccordions.length} of {accordionData.length}</strong>
          </div>
          <div className="status-item">
            <span>Total Components:</span>
            <strong>{tabs.length + accordionData.length}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TabsAccordion;
