import React, { useState } from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { QuizContext } from './pages/QuizContext';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyper Transfer Markup Language", "High Text Markup Language", "Hypertext Transfer Markup Language"],
      answer: "Hypertext Markup Language",
    },
    {
      question: "What is CSS used for in web development?",
      options: ["Styling and formatting web content", "Creating server-side logic", "Managing databases", "Handling user authentication"],
      answer: "Styling and formatting web content",
    },
    {
      question: "What is the primary purpose of JavaScript in web development?",
      options: ["Defining the structure of a web page", "Adding interactivity and functionality to web pages", "Styling web pages", "Creating databases"],
      answer: "Adding interactivity and functionality to web pages",
    },
    {
      question: "What does the acronym 'HTTP' stand for in the context of web communication?",
      options: ["Hypertext Text Transfer Protocol", "Hypertext Transfer Technology Protocol", "Hypertext Transfer Text Protocol", "Hypertext Transfer Protocol"],
      answer: "Hypertext Transfer Protocol",
    },
    {
      question: "What is the purpose of a CSS selector?",
      options: ["Selecting HTML elements to apply styles to", "Defining JavaScript functions", "Creating HTML tables", "Handling server requests"],
      answer: "Selecting HTML elements to apply styles to",
    },
    {
      question: "What is the difference between 'let,' 'const,' and 'var' in JavaScript when declaring variables?",
      options: ["'let' and 'const' have block scope, while 'var' has function scope", "'let' and 'const' have function scope, while 'var' has block scope", "'let' and 'const' have global scope, while 'var' has block scope", "'let' and 'const' have block scope, while 'var' has global scope"],
      answer: "'let' and 'const' have block scope, while 'var' has function scope",
    },
    {
      question: "What is a function in programming?",
      options: ["A reusable block of code that performs a specific task", "A comment in the code", "A data structure that stores multiple values", "A variable that stores a single value"],
      answer: "A reusable block of code that performs a specific task",
    },
    {
      question: "What is the purpose of a 'for' loop in programming?",
      options: ["To repeatedly execute a block of code a specific number of times", "To define a function", "To create an HTML form", "To define a conditional statement"],
      answer: "To repeatedly execute a block of code a specific number of times",
    },
    {
      question: "What is an 'array' in programming?",
      options: ["A data structure that stores a collection of values", "A conditional statement", "A type of variable", "A mathematical operation"],
      answer: "A data structure that stores a collection of values",
    },
    {
      question: "What is the purpose of the 'if' statement in programming?",
      options: ["To declare a variable", "To create a function", "To control the flow of code based on a condition", "To define a loop"],
      answer: "To control the flow of code based on a condition",
    },
    {
      question: "What is the extension of JavaScript files?",
      options: [".js", ".html", ".css", ".txt"],
      answer: ".js",
    },
    {
      question: "What is the DOM in web development?",
      options: ["Document Object Model, a programming interface for HTML and XML documents", "A style of web design", "A web hosting service", "A server-side scripting language"],
      answer: "Document Object Model, a programming interface for HTML and XML documents",
    },
    {
      question: "What is Git used for in software development?",
      options: ["Version control and collaborative software development", "Creating web pages", "Database management", "Server hosting"],
      answer: "Version control and collaborative software development",
    },
    {
      question: "What is the purpose of the 'console.log()' function in JavaScript?",
      options: ["To log errors in the console", "To create pop-up messages", "To display output in the browser console", "To define a function"],
      answer: "To display output in the browser console",
    },
    {
      question: "What is the purpose of a 'while' loop in programming?",
      options: ["To define a function", "To repeatedly execute a block of code while a condition is true", "To declare variables", "To style web pages"],
      answer: "To repeatedly execute a block of code while a condition is true",
    },
    {
      question: "What is an API in programming?",
      options: ["Application Programming Interface, a set of rules for building and interacting with software applications", "A type of database", "A JavaScript library", "A web server"],
      answer: "Application Programming Interface, a set of rules for building and interacting with software applications",
    },
    {
      question: "What is the purpose of the 'return' statement in a JavaScript function?",
      options: ["To exit the function", "To define a loop", "To create a comment", "To declare a variable"],
      answer: "To exit the function",
    },
    {
      question: "What is a database in software development?",
      options: ["A collection of code files", "A data structure for storing and retrieving information", "A type of programming language", "A web server"],
      answer: "A data structure for storing and retrieving information",
    },
    {
      question: "What is a CSS framework used for?",
      options: ["Providing pre-designed styles and layout templates for web development", "Creating animations", "Storing data", "Defining server routes"],
      answer: "Providing pre-designed styles and layout templates for web development",
    },
    {
      question: "What is the purpose of the 'constructor' in JavaScript?",
      options: ["To construct HTML elements", "To create an array", "To initialize an object", "To define a CSS rule"],
      answer: "To initialize an object",
    },
    {
      question: "What is a variable in programming?",
      options: ["A container for storing data", "A function", "A type of loop", "A database"],
      answer: "A container for storing data",
    },
    {
      question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
      options: ["To create a new HTML element", "To change the document title", "To add event handlers to HTML elements", "To create a CSS animation"],
      answer: "To add event handlers to HTML elements",
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["To refer to the current HTML document", "To access the global scope", "To refer to the current object or context", "To define a loop"],
      answer: "To refer to the current object or context",
    },
    {
      question: "What is a callback function in JavaScript?",
      options: ["A function that is passed as an argument to another function and is executed later", "A type of loop", "A database query", "A way to define variables"],
      answer: "A function that is passed as an argument to another function and is executed later",
    },
    {
      question: "What is responsive web design?",
      options: ["Designing websites that adapt to different screen sizes and devices", "Creating web animations", "Managing server databases", "Styling web pages"],
      answer: "Designing websites that adapt to different screen sizes and devices",
    },
  ];

  return (
    <Router>
      <QuizContext.Provider value={{ userEmail, setUserEmail, score, setScore,questions }}>
        <div className="App">
          <h1>Quiz App</h1>
          <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/result" element={<Result/>} />
          </Routes>
        </div>
      </QuizContext.Provider>
    </Router>
  );
}

export default App;
