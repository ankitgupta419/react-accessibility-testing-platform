import React, { useState } from 'react';
import FormElements from './FormElements';
import DataTable from './DataTable';
import ModalDialogs from './ModalDialogs';
import TabsAccordion from './TabsAccordion';
import CarouselSlider from './CarouselSlider';
import TooltipsPopovers from './TooltipsPopoversFixed';
import FileUpload from './FileUpload';
import Notifications from './Notifications';
import QuizContainer from './QuizContainer';

function AccessibilityShowcase() {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({});

  const sections = [
    { id: 'overview', label: 'Overview', icon: '🏠', description: 'Application overview and navigation' },
    { id: 'forms', label: 'Form Elements', icon: '📝', description: 'Various input types and form controls' },
    { id: 'tables', label: 'Data Tables', icon: '📊', description: 'Sortable and filterable data tables' },
    { id: 'modals', label: 'Modal Dialogs', icon: '🪟', description: 'Popups, overlays, and dialog boxes' },
    { id: 'tabs', label: 'Tabs & Accordions', icon: '📑', description: 'Tab navigation and accordion panels' },
    { id: 'carousel', label: 'Carousels & Sliders', icon: '🎠', description: 'Image carousels and range sliders' },
    { id: 'tooltips', label: 'Tooltips & Popovers', icon: '💬', description: 'Hover tooltips and popup menus' },
    { id: 'upload', label: 'File Upload', icon: '📁', description: 'Drag-drop and file upload interfaces' },
    { id: 'notifications', label: 'Notifications', icon: '🔔', description: 'Alerts, toasts, and notification systems' },
    { id: 'quiz', label: 'Quiz Application', icon: '🎯', description: 'Interactive quiz with media elements' }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="overview-section">
            <h2>React Accessibility Testing Platform</h2>
            <p>
              This comprehensive testing platform contains various React components that commonly require accessibility enhancements.
              Each section demonstrates different UI patterns and interaction models that need proper ARIA attributes,
              keyboard navigation, and screen reader support.
            </p>
            
            <div className="feature-grid">
              {sections.map(section => (
                <div 
                  key={section.id} 
                  className="feature-card"
                  onClick={() => setActiveSection(section.id)}
                >
                  <div className="feature-icon">{section.icon}</div>
                  <h3>{section.label}</h3>
                  <p>{section.description}</p>
                </div>
              ))}
            </div>
            
            <div className="accessibility-info">
              <h3>Accessibility Areas to Test</h3>
              <div className="info-grid">
                <div className="info-item">
                  <h4>🎯 Focus Management</h4>
                  <ul>
                    <li>Tab navigation order</li>
                    <li>Focus indicators</li>
                    <li>Focus trapping in modals</li>
                    <li>Skip links</li>
                  </ul>
                </div>
                
                <div className="info-item">
                  <h4>📢 Screen Readers</h4>
                  <ul>
                    <li>ARIA labels and descriptions</li>
                    <li>Semantic HTML structure</li>
                    <li>Live regions</li>
                    <li>Alternative text for images</li>
                  </ul>
                </div>
                
                <div className="info-item">
                  <h4>⌨️ Keyboard Navigation</h4>
                  <ul>
                    <li>All interactive elements reachable</li>
                    <li>Keyboard shortcuts</li>
                    <li>Escape key handling</li>
                    <li>Arrow key navigation</li>
                  </ul>
                </div>
                
                <div className="info-item">
                  <h4>🎨 Visual Design</h4>
                  <ul>
                    <li>Color contrast ratios</li>
                    <li>Text resizing support</li>
                    <li>High contrast mode</li>
                    <li>Reduced motion preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'forms':
        return <FormElements />;
      case 'tables':
        return <DataTable />;
      case 'modals':
        return <ModalDialogs />;
      case 'tabs':
        return <TabsAccordion />;
      case 'carousel':
        return <CarouselSlider />;
      case 'tooltips':
        return <TooltipsPopovers />;
      case 'upload':
        return <FileUpload />;
      case 'notifications':
        return <Notifications />;
      case 'quiz':
        return <QuizContainer onGoHome={() => setActiveSection('overview')} />;
        
      default:
        return <div className="section-not-found">Section not found</div>;
    }
  };

  return (
    <div className="accessibility-showcase">
      {/* Navigation Header */}
      <header className="showcase-header">
        <h1>Component Testing Suite</h1>
        <p>Navigate through different accessibility testing components</p>
        <nav className="showcase-nav">
          <div className="nav-tabs">
            {sections.map(section => (
              <button
                key={section.id}
                className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
                title={section.description}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-label">{section.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="showcase-main">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>{sections.find(s => s.id === activeSection)?.label}</h2>
            <p className="section-description">
              {sections.find(s => s.id === activeSection)?.description}
            </p>
          </div>
          
          <div className="section-content">
            {renderSection()}
          </div>
        </div>
      </main>

      {/* Footer with Quick Actions */}
      <footer className="showcase-footer">
        <div className="quick-actions">
          <h3>Quick Navigation</h3>
          <div className="action-buttons">
            <button onClick={() => setActiveSection('forms')}>
              📝 Form Elements
            </button>
            <button onClick={() => setActiveSection('modals')}>
              🪟 Modal Dialogs
            </button>
            <button onClick={() => setActiveSection('tables')}>
              📊 Data Tables
            </button>
            <button onClick={() => setActiveSection('notifications')}>
              🔔 Notifications
            </button>
            <button onClick={() => setActiveSection('quiz')}>
              🎯 Quiz App
            </button>
          </div>
        </div>
        
        <div className="status-info">
          <p>Current Section: <strong>{sections.find(s => s.id === activeSection)?.label}</strong></p>
          <p>Total Components: <strong>{sections.length} testing areas</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default AccessibilityShowcase;
