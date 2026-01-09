// QuizContainer.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import NavigationButtons from './NavigationButtons';
import ScoreDisplay from './ScoreDisplay';
import QuizSettings from './QuizSettings';
import ProgressBar from './ProgressBar';

function QuizContainer({ onGoHome }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const [questionType, setQuestionType] = useState('multiple'); // 'multiple' or 'dragdrop'
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(9);
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium');

  useEffect(() => {
    let timer;
    if (quizStarted && !loading && !quizCompleted && timeRemaining > 0) {
      timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
    } else if (quizStarted && timeRemaining === 0) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [loading, quizCompleted, timeRemaining, quizStarted]);

  function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  const fetchQuestions = async (category, difficulty) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      const formattedQuestions = data.results.map((q, index) => {
        const mediaType = index % 4; // 0: image, 1: audio, 2: video, 3: no media
        let media = null;
        
        switch(mediaType) {
          case 0:
            media = {
              type: 'image',
              url: `https://picsum.photos/seed/quiz${index}/400/300.jpg`,
              alt: `Quiz question image ${index + 1}`
            };
            break;
          case 1:
            media = {
              type: 'audio',
              url: 'https://www.w3schools.com/html/horse.mp3',
              description: 'Audio clip for this question'
            };
            break;
          case 2:
            media = {
              type: 'video',
              url: 'https://www.w3schools.com/html/mov_bbb.mp4',
              description: 'Video clip for this question'
            };
            break;
          default:
            media = null;
        }
        
        return {
          id: index + 1,
          question: decodeHTML(q.question),
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correctAnswer: q.correct_answer,
          media: media,
          type: index % 3 === 0 ? 'dragdrop' : 'multiple'
        };
      });
      
      setQuestions(formattedQuestions);
      setQuizStarted(true);
      setTimeRemaining(60);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(60);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeRemaining(60);
    }
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleRestartQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setLoading(false);
    setError(null);
    setTimeRemaining(60);
    setShowCorrectAnswers(false);
    setQuizStarted(false);
  };

  const handleStartQuiz = (category, difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    fetchQuestions(category, difficulty);
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <QuizSettings onStartQuiz={handleStartQuiz} />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="quiz-container">
        <div className="loading-container">
          <p>Loading questions...</p>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-container">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => setError(null)}>Try Again</button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="loading-container">
          <p>Ready to start quiz. Please select category and difficulty.</p>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <div className="quiz-completed">
          <h2>Quiz Completed!</h2>
          <div className="score-section">
            <ScoreDisplay score={score} total={questions.length} />
          </div>
          
          <div className="answers-section">
            <h3>Review Your Answers</h3>
            {questions.map((question, index) => (
              <div key={question.id} className="answer-review">
                <h4>Question {index + 1}</h4>
                <p>{question.question}</p>
                <div className="answer-comparison">
                  <div className="user-answer">
                    <strong>Your Answer:</strong> {userAnswers[index] || 'Not answered'}
                  </div>
                  <div className="correct-answer">
                    <strong>Correct Answer:</strong> {question.correctAnswer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="quiz-actions">
            <button onClick={handleRestartQuiz} className="restart-btn">
              Restart Quiz
            </button>
            <button onClick={onGoHome} className="home-btn">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="timer">Time: {timeRemaining}s</div>
        <div className="question-type-indicator">
          {currentQuestion.type === 'dragdrop' ? 'Drag & Drop' : 'Multiple Choice'}
        </div>
      </div>
      
      <ProgressBar 
        current={currentQuestionIndex + 1} 
        total={questions.length} 
      />
      
      <Question 
        question={currentQuestion}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={userAnswers[currentQuestionIndex]}
        questionType={currentQuestion.type}
      />
      
      <NavigationButtons
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onNextQuestion={handleNextQuestion}
        onPreviousQuestion={handlePreviousQuestion}
      />
      
      <div className="quiz-actions">
        <button onClick={onGoHome} className="home-btn">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default QuizContainer;