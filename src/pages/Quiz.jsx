// Quiz.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import './Quiz.css'; // Import the CSS file

function Quiz() {
  const { userEmail, setScore, questions } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const [quizQuestions, setQuestions] = useState([]);

  useEffect(() => {
    // Shuffle the questions array and select 5 random questions
    const shuffledQuestions = shuffleArray(questions).slice(0, 5);
    setQuestions(shuffledQuestions);
  }, []);

  // Check if quizQuestions is populated
  if (quizQuestions.length === 0) {
    return <div>Loading...</div>; // Render loading indicator
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);
    setCorrectAnswer(currentQuestion.answer);
  };

  const handleNextQuestion = () => {
    if (isAnswered) {
      if (selectedAnswer === currentQuestion.answer) {
        setScore((prevScore) => prevScore + 1);
      }

      setSelectedAnswer('');
      setCorrectAnswer('');
      setIsAnswered(false);

      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // Handle quiz completion here
      }
    } else {
      alert('Please select an answer before moving to the next question.');
    }
  };

  // Calculate the progress percentage
  const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2>Question {currentQuestionIndex + 1}</h2>
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`${
                selectedAnswer === option
                  ? option === correctAnswer
                    ? 'correct-answer'
                    : 'wrong-answer'
                  : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
        <p>Progress: {progressPercentage.toFixed(2)}%</p>
        {currentQuestionIndex < quizQuestions.length - 1 ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <Link to="/result">Finish Quiz</Link>
        )}
      </div>
    </div>
  );
}

// Function to shuffle an array
function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default Quiz;
