import React from 'react';

function AnswerOptions({ options, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="answer-options">
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} className="option-item">
            <label className={`option-label ${selectedAnswer === option ? 'selected' : ''}`}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onAnswerSelect(option)}
              />
              <span className="option-indicator"></span>
              <span className="option-text">{option}</span>
            </label>
          </li>
        ))}
      </ul>
      
      <div className="selection-status">
        {selectedAnswer && (
          <span className="selected-announcement">
            Selected: {selectedAnswer}
          </span>
        )}
      </div>
    </div>
  );
}

export default AnswerOptions;