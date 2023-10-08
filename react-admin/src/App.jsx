import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Import App.css for global styling
import Result from './Components/Result';

function App() {
  return (
   
      <div className="app-container">
        
         <h1 style={{textAlign:"center"}} >Survey Analyser</h1>
            <Result />
         
          
     
      </div>
   
  );
}

export default App;
