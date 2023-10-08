// Result.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import axios from 'axios'; // Import Axios for making HTTP requests

import './Result.css'; // Import the CSS file

function Result() {
  const { userEmail, score, setScore, questions } = useContext(QuizContext);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Get the current timestamp when the component mounts
    const now = new Date();
    setTimestamp(now.toISOString());
  }, []);

  const handleRestartQuiz = () => {
    // Send a POST request to your MongoDB Atlas database
    axios.post('http://localhost:5000/api/saveResult', { email: userEmail, score, timestamp })
      .then((response) => {
        // Handle the response if needed
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error sending data:', error);
      });

    // Reset the score
    setScore(0);
  };

  return (
    <div className="result-container">
      <div className="result-content">
        <h2>Quiz Completed, {userEmail}!</h2>
        <p>Your Score: {score} out of {questions.length}</p>
        <Link to="/">
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Result;
