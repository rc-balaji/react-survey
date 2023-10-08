// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://rc-balaji:Balaji2003@cluster0.ousbmhk.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    
    // Start the server after successfully connecting to MongoDB
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// Create a schema for your data (e.g., QuizResult)
const quizResultSchema = new mongoose.Schema({
  email: String,
  score: Number,
  timestamp: Date,
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

// Create an API endpoint to retrieve results ordered by timestamp
app.get('/api/results', async (req, res) => {
  try {
    const results = await QuizResult.find().sort({ timestamp: 1 }).exec();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'An error occurred while fetching results.' });
  }
});
