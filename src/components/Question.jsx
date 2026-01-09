import React from 'react';
import AnswerOptions from './AnswerOptions';
import DragDropQuestion from './DragDropQuestion';

function Question({ question, selectedAnswer, onAnswerSelect, questionType = 'multiple' }) {
  if (!question) {
    return (
      <div>
        <p>No question available.</p>
      </div>
    );
  }

  const renderMedia = () => {
    if (!question.media) return null;

    switch (question.media.type) {
      case 'image':
        return (
          <div className="question-media">
            <img 
              src={question.media.url} 
              alt={question.media.alt}
              className="question-image"
            />
          </div>
        );
      
      case 'audio':
        return (
          <div className="question-media">
            <audio controls className="question-audio">
              <source src={question.media.url} type="audio/mpeg" />
              <source src={question.media.url.replace('.mp3', '.ogg')} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
            <p className="media-description">{question.media.description}</p>
          </div>
        );
      
      case 'video':
        return (
          <div className="question-media">
            <video controls width="400" height="300" className="question-video">
              <source src={question.media.url} type="video/mp4" />
              <source src={question.media.url.replace('.mp4', '.ogg')} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <p className="media-description">{question.media.description}</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="question">
      <div>
        <h2>{question.question}</h2>
      </div>
      
      {renderMedia()}

      <div className="question-content">
        {questionType === 'dragdrop' ? (
          <DragDropQuestion
            question={question}
            onAnswerSelect={onAnswerSelect}
          />
        ) : (
          <AnswerOptions
            options={question.options}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={onAnswerSelect}
          />
        )}
      </div>

      <div className="question-footer">
        <div className="question-status">
          {selectedAnswer ? (
            <span className="answer-status">Answer selected: {selectedAnswer}</span>
          ) : (
            <span className="no-answer">No answer selected yet</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Question;