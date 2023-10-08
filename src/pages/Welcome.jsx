// Welcome.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from './QuizContext';
import './Welcome.css'; // Import the CSS file

function Welcome() {
  const { userEmail, setUserEmail } = useContext(QuizContext);

  const handleInputChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to the Online Survey</h1>
        <p>Please enter your email:</p>
        <input type="email" value={userEmail} onChange={handleInputChange} />
        <Link to="/quiz">
          <button className="start-quiz-button">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
