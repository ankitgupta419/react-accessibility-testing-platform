import React, { useState } from 'react';

function DragDropQuestion({ question, onAnswerSelect }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem) {
      const newDroppedItems = [...droppedItems, draggedItem];
      setDroppedItems(newDroppedItems);
      onAnswerSelect(newDroppedItems);
      setDraggedItem(null);
    }
  };

  const handleRemoveItem = (index) => {
    const newDroppedItems = droppedItems.filter((_, i) => i !== index);
    setDroppedItems(newDroppedItems);
    onAnswerSelect(newDroppedItems);
  };

  return (
    <div className="drag-drop-question">
      <h3>{question.text}</h3>
      <p className="instruction">Drag and drop the correct answers in order:</p>
      
      <div className="drag-drop-container">
        <div 
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h4>Answer Area</h4>
          {droppedItems.length === 0 ? (
            <p className="placeholder">Drop answers here</p>
          ) : (
            <ul className="dropped-items">
              {droppedItems.map((item, index) => (
                <li key={index} className="dropped-item">
                  {item}
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="remove-btn"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="drag-source">
          <h4>Available Options</h4>
          <ul className="draggable-items">
            {question.options.map((option, index) => (
              <li
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, option)}
                className="draggable-item"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DragDropQuestion;
