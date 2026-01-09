import React, { useState } from 'react';

function TooltipsPopovers() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activePopover, setActivePopover] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const tooltipData = [
    { id: 'save', text: 'Save your work', position: 'top' },
    { id: 'edit', text: 'Edit this item', position: 'right' },
    { id: 'delete', text: 'Delete permanently', position: 'bottom' },
    { id: 'share', text: 'Share with others', position: 'left' },
    { id: 'download', text: 'Download file', position: 'top' }
  ];

  const popoverData = [
    {
      id: 'profile',
      title: 'User Profile',
      content: 'John Doe - Software Engineer',
      avatar: 'https://picsum.photos/seed/john/50/50.jpg',
      actions: ['View Profile', 'Edit Profile', 'Send Message']
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'You have 5 new notifications',
      count: 5,
      actions: ['View All', 'Mark as Read', 'Settings']
    },
    {
      id: 'settings',
      title: 'Quick Settings',
      content: 'Common settings and preferences',
      actions: ['General', 'Privacy', 'Security', 'Advanced']
    }
  ];

  const menuItems = [
    { id: 'file', label: 'File', icon: '📄', shortcut: 'Ctrl+N' },
    { id: 'edit', label: 'Edit', icon: '✏️', shortcut: 'Ctrl+E' },
    { id: 'view', label: 'View', icon: '👁️', shortcut: 'Ctrl+V' },
    { id: 'help', label: 'Help', icon: '❓', shortcut: 'F1' }
  ];

  const showTooltip = (tooltipId) => {
    setActiveTooltip(tooltipId);
    setTimeout(() => setActiveTooltip(null), 3000);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  const showPopover = (popoverId) => {
    setActivePopover(popoverId);
  };

  const hidePopover = () => {
    setActivePopover(null);
  };

  const toggleDropdown = (dropdownId) => {
    setDropdownOpen(dropdownOpen === dropdownId ? null : dropdownId);
  };

  return (
    <div className="tooltips-popovers-container">
      <h2>Tooltips and Popovers</h2>
      
      {/* Tooltip Examples */}
      <section className="tooltip-section">
        <h3>Interactive Tooltips</h3>
        
        <div className="tooltip-examples">
          <div className="tooltip-demo">
            <h4>Button Tooltips</h4>
            <div className="button-group">
              {tooltipData.map(tooltip => (
                <button
                  key={tooltip.id}
                  className={`tooltip-button tooltip-${tooltip.position}`}
                  onMouseEnter={() => showTooltip(tooltip.id)}
                  onMouseLeave={hideTooltip}
                  onFocus={() => showTooltip(tooltip.id)}
                  onBlur={hideTooltip}
                  aria-describedby={`tooltip-${tooltip.id}`}
                >
                  {tooltip.id.charAt(0).toUpperCase() + tooltip.id.slice(1)}
                  {activeTooltip === tooltip.id && (
                    <div className="tooltip" id={`tooltip-${tooltip.id}`} role="tooltip">
                      {tooltip.text}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="tooltip-demo">
            <h4>Icon Tooltips</h4>
            <div className="icon-group">
              {['info', 'warning', 'success', 'error'].map(type => (
                <div
                  key={type}
                  className={`icon-tooltip icon-${type}`}
                  onMouseEnter={() => showTooltip(type)}
                  onMouseLeave={hideTooltip}
                  tabIndex={0}
                  role="button"
                  aria-label={`${type} information`}
                >
                  {type === 'info' && 'ℹ️'}
                  {type === 'warning' && '⚠️'}
                  {type === 'success' && '✅'}
                  {type === 'error' && '❌'}
                  {activeTooltip === type && (
                    <div className="tooltip" role="tooltip">
                      {type === 'info' && 'Information tooltip'}
                      {type === 'warning' && 'Warning message'}
                      {type === 'success' && 'Success notification'}
                      {type === 'error' && 'Error details'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="tooltip-demo">
            <h4>Link Tooltips</h4>
            <div className="link-group">
              <a
                href="#"
                className="tooltip-link"
                onMouseEnter={() => showTooltip('link')}
                onMouseLeave={hideTooltip}
                aria-describedby="tooltip-link"
              >
                Hover over this link
                {activeTooltip === 'link' && (
                  <div className="tooltip" id="tooltip-link" role="tooltip">
                    This link provides additional information
                  </div>
                )}
              </a>
              
              <a
                href="#"
                className="tooltip-link disabled"
                aria-disabled="true"
                title="This link is disabled"
              >
                Disabled link (title attribute)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popover Examples */}
      <section className="popover-section">
        <h3>Popover Menus</h3>
        
        <div className="popover-examples">
          {/* Click Popovers */}
          <div className="popover-demo">
            <h4>Click Popovers</h4>
            <div className="popover-triggers">
              {popoverData.map(popover => (
                <div key={popover.id} className="popover-trigger">
                  <button
                    onClick={() => showPopover(popover.id)}
                    aria-expanded={activePopover === popover.id}
                    aria-haspopup="true"
                    aria-controls={`popover-${popover.id}`}
                  >
                    {popover.title}
                  </button>
                  
                  {activePopover === popover.id && (
                    <div 
                      className="popover" 
                      id={`popover-${popover.id}`}
                      role="dialog"
                      aria-labelledby={`popover-trigger-${popover.id}`}
                    >
                      <div className="popover-header">
                        <h4>{popover.title}</h4>
                        <button 
                          className="close-btn"
                          onClick={hidePopover}
                          aria-label="Close popover"
                        >
                          ×
                        </button>
                      </div>
                      <div className="popover-content">
                        {popover.avatar && (
                          <img src={popover.avatar} alt={popover.title} className="popover-avatar" />
                        )}
                        <p>{popover.content}</p>
                        {popover.count && (
                          <span className="popover-count">{popover.count}</span>
                        )}
                      </div>
                      <div className="popover-actions">
                        {popover.actions.map((action, index) => (
                          <button key={index} className="popover-action">
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              ))}
            </div>
          </div>

          {/* Dropdown Menus */}
          <div className="popover-demo">
            <h4>Dropdown Menus</h4>
            <div className="dropdown-examples">
              <div className="dropdown-container">
                <button
                  onClick={() => toggleDropdown('file')}
                  aria-expanded={dropdownOpen === 'file'}
                  aria-haspopup="true"
                  aria-controls="dropdown-file"
                >
                  File ▼
                </button>
                {dropdownOpen === 'file' && (
                  <div className="dropdown-menu" id="dropdown-file" role="menu">
                    {menuItems.map(item => (
                      <button key={item.id} className="dropdown-item" role="menuitem">
                        <span className="item-icon">{item.icon}</span>
                        <span className="item-label">{item.label}</span>
                        <span className="item-shortcut">{item.shortcut}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="dropdown-container">
                <button
                  onClick={() => toggleDropdown('edit')}
                  aria-expanded={dropdownOpen === 'edit'}
                  aria-haspopup="true"
                  aria-controls="dropdown-edit"
                >
                  Edit ▼
                </button>
                {dropdownOpen === 'edit' && (
                  <div className="dropdown-menu" id="dropdown-edit" role="menu">
                    {['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(action => (
                      <button key={action} className="dropdown-item" role="menuitem">
                        {action}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tooltip Examples */}
      <section className="advanced-tooltip-section">
        <h3>Advanced Tooltip Features</h3>
        
        <div className="advanced-examples">
          {/* Rich Content Tooltip */}
          <div className="rich-tooltip-demo">
            <h4>Rich Content Tooltips</h4>
            <div className="rich-tooltip-trigger">
              <button
                onMouseEnter={() => showTooltip('rich')}
                onMouseLeave={hideTooltip}
                className="rich-button"
              >
                Rich Content Button
                {activeTooltip === 'rich' && (
                  <div className="rich-tooltip" role="tooltip">
                    <div className="rich-header">
                      <strong>Advanced Features</strong>
                    </div>
                    <div className="rich-body">
                      <p>This tooltip contains rich HTML content including:</p>
                      <ul>
                        <li><strong>Bold text</strong></li>
                        <li><em>Italic text</em></li>
                        <li><a href="#">Links</a></li>
                        <li>Lists and more</li>
                      </ul>
                    </div>
                    <div className="rich-footer">
                      <small>Click to learn more</small>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Follow Cursor Tooltip */}
          <div className="follow-tooltip-demo">
            <h4>Follow Cursor Tooltip</h4>
            <div className="follow-cursor-container">
              <div
                className="follow-target"
                onMouseMove={(e) => {
                  const tooltip = document.getElementById('follow-tooltip');
                  if (tooltip) {
                    tooltip.style.left = e.pageX + 10 + 'px';
                    tooltip.style.top = e.pageY + 10 + 'px';
                  }
                }}
                onMouseEnter={() => showTooltip('follow')}
                onMouseLeave={hideTooltip}
              >
                Move cursor here for tooltip
                {activeTooltip === 'follow' && (
                  <div 
                    id="follow-tooltip" 
                    className="follow-tooltip" 
                    role="tooltip"
                    style={{ position: 'fixed', pointerEvents: 'none' }}
                  >
                    Tooltip follows cursor position
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Delayed Tooltip */}
          <div className="delayed-tooltip-demo">
            <h4>Delayed Tooltip</h4>
            <div className="delayed-tooltip-trigger">
              <button
                onMouseEnter={() => {
                  setTimeout(() => showTooltip('delayed'), 1000);
                }}
                onMouseLeave={hideTooltip}
              >
                Hover for delayed tooltip (1s)
                {activeTooltip === 'delayed' && (
                  <div className="delayed-tooltip" role="tooltip">
                    This tooltip appears after 1 second delay
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Status and Controls */}
      <section className="tooltip-status">
        <h3>Component Status</h3>
        <div className="status-grid">
          <div className="status-item">
            <span>Active Tooltip:</span>
            <strong>{activeTooltip || 'None'}</strong>
          </div>
          <div className="status-item">
            <span>Active Popover:</span>
            <strong>{activePopover || 'None'}</strong>
          </div>
          <div className="status-item">
            <span>Open Dropdown:</span>
            <strong>{dropdownOpen || 'None'}</strong>
          </div>
          <div className="status-item">
            <span>Total Components:</span>
            <strong>{tooltipData.length + popoverData.length + menuItems.length}</strong>
          </div>
        </div>
        
        <div className="control-buttons">
          <button onClick={hideTooltip}>Hide All Tooltips</button>
          <button onClick={hidePopover}>Hide All Popovers</button>
          <button onClick={() => setDropdownOpen(null)}>Close All Dropdowns</button>
        </div>
      </section>
    </div>
  );
}

export default TooltipsPopovers;
