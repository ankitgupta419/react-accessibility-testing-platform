import React, { useState } from 'react';

function ModalDialogs() {
  const [modals, setModals] = useState({
    alert: false,
    confirm: false,
    info: false,
    form: false,
    image: false,
    video: false,
    loading: false,
    multiStep: false,
    fullscreen: false
  });

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (modalType) => {
    setModals(prev => ({ ...prev, [modalType]: true }));
  };

  const closeModal = (modalType) => {
    setModals(prev => ({ ...prev, [modalType]: false }));
  };

  const closeAllModals = () => {
    setModals({
      alert: false,
      confirm: false,
      info: false,
      form: false,
      image: false,
      video: false,
      loading: false,
      multiStep: false,
      fullscreen: false
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal('form');
  };

  const handleConfirm = () => {
    console.log('Confirmed action');
    closeModal('confirm');
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="modal-demos">
      <h2>Modal Dialogs and Overlays</h2>
      
      {/* Modal Triggers */}
      <section className="modal-triggers">
        <h3>Modal Triggers</h3>
        <div className="trigger-buttons">
          <button onClick={() => openModal('alert')}>Alert Modal</button>
          <button onClick={() => openModal('confirm')}>Confirm Modal</button>
          <button onClick={() => openModal('info')}>Info Modal</button>
          <button onClick={() => openModal('form')}>Form Modal</button>
          <button onClick={() => openModal('image')}>Image Modal</button>
          <button onClick={() => openModal('video')}>Video Modal</button>
          <button onClick={() => openModal('loading')}>Loading Modal</button>
          <button onClick={() => openModal('multiStep')}>Multi-Step Modal</button>
          <button onClick={() => openModal('fullscreen')}>Fullscreen Modal</button>
        </div>
      </section>

      {/* Alert Modal */}
      {modals.alert && (
        <div className="modal-overlay" onClick={() => closeModal('alert')}>
          <div className="modal alert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Alert</h3>
              <button className="close-btn" onClick={() => closeModal('alert')}>×</button>
            </div>
            <div className="modal-body">
              <div className="alert-icon">⚠️</div>
              <p>This is an alert message that requires user attention!</p>
            </div>
            <div className="modal-footer">
              <button onClick={() => closeModal('alert')}>OK</button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {modals.confirm && (
        <div className="modal-overlay" onClick={() => closeModal('confirm')}>
          <div className="modal confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Confirm Action</h3>
              <button className="close-btn" onClick={() => closeModal('confirm')}>×</button>
            </div>
            <div className="modal-body">
              <div className="confirm-icon">❓</div>
              <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => closeModal('confirm')}>Cancel</button>
              <button className="btn-danger" onClick={handleConfirm}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {modals.info && (
        <div className="modal-overlay" onClick={() => closeModal('info')}>
          <div className="modal info-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Information</h3>
              <button className="close-btn" onClick={() => closeModal('info')}>×</button>
            </div>
            <div className="modal-body">
              <div className="info-icon">ℹ️</div>
              <h4>Application Details</h4>
              <ul>
                <li>Version: 2.0.1</li>
                <li>Last Updated: 2024-01-15</li>
                <li>License: MIT</li>
                <li>Size: 45.2 MB</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button onClick={() => closeModal('info')}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {modals.form && (
        <div className="modal-overlay" onClick={() => closeModal('form')}>
          <div className="modal form-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>User Registration</h3>
              <button className="close-btn" onClick={() => closeModal('form')}>×</button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows="4"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => closeModal('form')}>Cancel</button>
              <button type="submit" className="btn-primary">Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modals.image && (
        <div className="modal-overlay" onClick={() => closeModal('image')}>
          <div className="modal image-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Image Gallery</h3>
              <button className="close-btn" onClick={() => closeModal('image')}>×</button>
            </div>
            <div className="modal-body">
              <div className="image-gallery">
                {['image1.jpg', 'image2.jpg', 'image3.jpg'].map((img, index) => (
                  <div 
                    key={index}
                    className={`image-item ${selectedImage === img ? 'selected' : ''}`}
                    onClick={() => handleImageSelect(img)}
                  >
                    <img src={`https://picsum.photos/seed/${img}/150/150.jpg`} alt={`Gallery image ${index + 1}`} />
                    <span>Image {index + 1}</span>
                  </div>
                ))}
              </div>
              {selectedImage && (
                <div className="selected-image-info">
                  <p>Selected: {selectedImage}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => closeModal('image')}>Close</button>
              <button className="btn-primary" disabled={!selectedImage}>Select Image</button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {modals.video && (
        <div className="modal-overlay" onClick={() => closeModal('video')}>
          <div className="modal video-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Video Player</h3>
              <button className="close-btn" onClick={() => closeModal('video')}>×</button>
            </div>
            <div className="modal-body">
              <video controls width="100%" height="300">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-info">
                <p>This is a sample video for demonstration purposes.</p>
                <p>Duration: 10 seconds</p>
                <p>Format: MP4</p>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => closeModal('video')}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Loading Modal */}
      {modals.loading && (
        <div className="modal-overlay loading-overlay">
          <div className="modal loading-modal">
            <div className="modal-body">
              <div className="loading-spinner"></div>
              <p>Please wait while we process your request...</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Step Modal */}
      {modals.multiStep && (
        <div className="modal-overlay" onClick={() => closeModal('multiStep')}>
          <div className="modal multi-step-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Multi-Step Wizard</h3>
              <button className="close-btn" onClick={() => closeModal('multiStep')}>×</button>
            </div>
            <div className="modal-body">
              <div className="step-indicator">
                {[1, 2, 3].map(step => (
                  <div 
                    key={step}
                    className={`step ${step <= currentStep ? 'completed' : ''} ${step === currentStep ? 'active' : ''}`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              
              {currentStep === 1 && (
                <div className="step-content">
                  <h4>Step 1: Personal Information</h4>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="step-content">
                  <h4>Step 2: Account Details</h4>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" placeholder="Choose a username" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" />
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="step-content">
                  <h4>Step 3: Preferences</h4>
                  <div className="form-group">
                    <label>Newsletter Subscription</label>
                    <select>
                      <option>Yes, I'd like to receive updates</option>
                      <option>No, thank you</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Theme Preference</label>
                    <div className="radio-group">
                      <label>
                        <input type="radio" name="theme" value="light" defaultChecked />
                        Light Theme
                      </label>
                      <label>
                        <input type="radio" name="theme" value="dark" />
                        Dark Theme
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button 
                onClick={handlePrevStep} 
                disabled={currentStep === 1}
                className="btn-secondary"
              >
                Previous
              </button>
              <button 
                onClick={handleNextStep} 
                disabled={currentStep === 3}
                className="btn-primary"
              >
                {currentStep === 3 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {modals.fullscreen && (
        <div className="modal-overlay fullscreen-overlay">
          <div className="modal fullscreen-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Fullscreen Content</h3>
              <button className="close-btn" onClick={() => closeModal('fullscreen')}>×</button>
            </div>
            <div className="modal-body">
              <div className="fullscreen-content">
                <h2>Welcome to the Application</h2>
                <p>This is a fullscreen modal that takes up the entire viewport.</p>
                <div className="content-grid">
                  <div className="content-item">
                    <h3>Feature 1</h3>
                    <p>Advanced dashboard with real-time analytics</p>
                  </div>
                  <div className="content-item">
                    <h3>Feature 2</h3>
                    <p>Collaborative tools for team productivity</p>
                  </div>
                  <div className="content-item">
                    <h3>Feature 3</h3>
                    <p>Customizable workflows and automation</p>
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="btn-primary">Get Started</button>
                  <button className="btn-secondary" onClick={() => closeModal('fullscreen')}>Skip Tour</button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => closeModal('fullscreen')}>Exit</button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for when any modal is open */}
      {(Object.values(modals).some(Boolean)) && (
        <div className="backdrop" onClick={closeAllModals}></div>
      )}
    </div>
  );
}

export default ModalDialogs;
