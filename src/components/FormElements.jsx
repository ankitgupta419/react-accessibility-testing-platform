import React, { useState } from 'react';

function FormElements() {
  const [formData, setFormData] = useState({
    textInput: '',
    password: '',
    email: '',
    number: '',
    tel: '',
    url: '',
    search: '',
    date: '',
    time: '',
    color: '#000000',
    range: 50,
    checkbox: false,
    radio: 'option1',
    select: '',
    textarea: '',
    file: null,
    switchValue: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateField = (field, value) => {
    let error = '';
    
    switch(field) {
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'password':
        if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      case 'url':
        if (!value.match(/^https?:\/\/.+/)) {
          error = 'Please enter a valid URL starting with http:// or https://';
        }
        break;
    }
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return error === '';
  };

  return (
    <div className="form-elements">
      <h2>Form Elements - Accessibility Test</h2>
      
      {/* Text Inputs */}
      <section className="form-section">
        <h3>Text Input Fields</h3>
        
        <div className="form-group">
          <label htmlFor="text-input">Text Input</label>
          <input
            type="text"
            id="text-input"
            value={formData.textInput}
            onChange={(e) => handleInputChange('textInput', e.target.value)}
            placeholder="Enter text here"
            required
          />
          {errors.textInput && <span className="error">{errors.textInput}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Enter password"
            required
            minLength="8"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter email"
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            id="number"
            value={formData.number}
            onChange={(e) => handleInputChange('number', e.target.value)}
            placeholder="Enter number"
            min="0"
            max="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tel">Phone</label>
          <input
            type="tel"
            id="tel"
            value={formData.tel}
            onChange={(e) => handleInputChange('tel', e.target.value)}
            placeholder="Enter phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            value={formData.url}
            onChange={(e) => handleInputChange('url', e.target.value)}
            placeholder="https://example.com"
          />
          {errors.url && <span className="error">{errors.url}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            id="search"
            value={formData.search}
            onChange={(e) => handleInputChange('search', e.target.value)}
            placeholder="Search..."
          />
        </div>
      </section>

      {/* Date and Time Inputs */}
      <section className="form-section">
        <h3>Date and Time Inputs</h3>
        
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={(e) => handleInputChange('time', e.target.value)}
          />
        </div>
      </section>

      {/* Color and Range Inputs */}
      <section className="form-section">
        <h3>Color and Range Inputs</h3>
        
        <div className="form-group">
          <label htmlFor="color">Color Picker</label>
          <input
            type="color"
            id="color"
            value={formData.color}
            onChange={(e) => handleInputChange('color', e.target.value)}
          />
          <span>Selected: {formData.color}</span>
        </div>

        <div className="form-group">
          <label htmlFor="range">Range Slider</label>
          <input
            type="range"
            id="range"
            value={formData.range}
            onChange={(e) => handleInputChange('range', e.target.value)}
            min="0"
            max="100"
            step="5"
          />
          <span>Value: {formData.range}</span>
        </div>
      </section>

      {/* Checkbox and Radio */}
      <section className="form-section">
        <h3>Selection Inputs</h3>
        
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={formData.checkbox}
              onChange={(e) => handleInputChange('checkbox', e.target.checked)}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <fieldset className="radio-group">
          <legend>Choose an option:</legend>
          
          <label>
            <input
              type="radio"
              name="radio-group"
              value="option1"
              checked={formData.radio === 'option1'}
              onChange={(e) => handleInputChange('radio', e.target.value)}
            />
            Option 1
          </label>
          
          <label>
            <input
              type="radio"
              name="radio-group"
              value="option2"
              checked={formData.radio === 'option2'}
              onChange={(e) => handleInputChange('radio', e.target.value)}
            />
            Option 2
          </label>
          
          <label>
            <input
              type="radio"
              name="radio-group"
              value="option3"
              checked={formData.radio === 'option3'}
              onChange={(e) => handleInputChange('radio', e.target.value)}
            />
            Option 3
          </label>
        </fieldset>
      </section>

      {/* Select and Textarea */}
      <section className="form-section">
        <h3>Select and Textarea</h3>
        
        <div className="form-group">
          <label htmlFor="select">Dropdown Select</label>
          <select
            id="select"
            value={formData.select}
            onChange={(e) => handleInputChange('select', e.target.value)}
          >
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Text Area</label>
          <textarea
            id="textarea"
            value={formData.textarea}
            onChange={(e) => handleInputChange('textarea', e.target.value)}
            placeholder="Enter your message here..."
            rows="4"
            cols="50"
          />
        </div>
      </section>

      {/* File Upload */}
      <section className="form-section">
        <h3>File Upload</h3>
        
        <div className="form-group">
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            onChange={(e) => handleInputChange('file', e.target.files[0])}
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
          />
          {formData.file && <span className="file-info">Selected: {formData.file.name}</span>}
        </div>
      </section>

      {/* Switch/Toggle */}
      <section className="form-section">
        <h3>Switch/Toggle</h3>
        
        <div className="form-group">
          <label className="switch-label">
            <input
              type="checkbox"
              checked={formData.switchValue}
              onChange={(e) => handleInputChange('switchValue', e.target.checked)}
              className="switch-input"
            />
            <span className="switch-slider"></span>
            Enable notifications
          </label>
        </div>
      </section>

      {/* Form Actions */}
      <section className="form-section">
        <h3>Form Actions</h3>
        
        <div className="form-actions">
          <button type="submit" onClick={() => alert('Form submitted!')}>
            Submit Form
          </button>
          
          <button type="button" onClick={() => setFormData({})}>
            Reset Form
          </button>
          
          <button type="button" onClick={() => alert('Form cancelled!')}>
            Cancel
          </button>
        </div>
      </section>

      {/* Form Validation Summary */}
      <section className="form-section">
        <h3>Validation Status</h3>
        <div className="validation-summary">
          <p>Required fields: <span className={formData.textInput && formData.email ? 'valid' : 'invalid'}>
            {formData.textInput && formData.email ? '✓ Complete' : '✗ Incomplete'}
          </span></p>
          <p>Form validity: <span className={Object.keys(errors).length === 0 ? 'valid' : 'invalid'}>
            {Object.keys(errors).length === 0 ? '✓ Valid' : '✗ Has errors'}
          </span></p>
        </div>
      </section>
    </div>
  );
}

export default FormElements;
