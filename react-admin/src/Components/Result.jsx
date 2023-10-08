// jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Result.css';

function Result() {
 const [results, setResults] = useState([]);

 useEffect(() => {
    axios.get('http://localhost:5001/api/results')
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
 }, []);

 const data = results.reduce((acc, result) => {
    const score = result.score;
    if (!acc[score]) {
      acc[score] = { name: `Score ${score}`, value: 0 };
    }
    acc[score].value++;
    return acc;
 }, {});

 const dataArray = Object.values(data);

 return (
    <div className="result-container">
      <h2 className="result-heading">Quiz Results</h2>
      <BarChart width={730} height={250} data={dataArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <table className="result-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Date</th>
            <th>Email</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={result._id}>
              <td>{index + 1}</td>
              <td>{new Date(result.timestamp).toLocaleString()}</td>
              <td>{result.email}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
}

export default Result;