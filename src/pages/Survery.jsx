import React, { Component } from 'react';

class Survey extends Component {
  render() {
    const {
      userName,
      currentQuestionIndex,
      selectedAnswer,
      score,
      showResult,
      shuffledQuestions,
      correctAnswer,
      handleAnswerSelect,
      handleNextQuestion,
    } = this.props;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    return (
      <div>
        {showResult ? (
          <div>
            <h2>Quiz Completed, {userName}!</h2>
            <p>Your Score: {score} out of 5</p>
          </div>
        ) : (
          <div>
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
            {selectedAnswer ? (
              <button onClick={handleNextQuestion}>Next</button>
            ) : (
              <p>Please select an answer before moving to the next question.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Survey;
