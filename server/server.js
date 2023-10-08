const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Atlas connection URI
const mongoURI = 'mongodb+srv://rc-balaji:Balaji2003@cluster0.ousbmhk.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Create a schema for your data (e.g., QuizResult)
const quizResultSchema = new mongoose.Schema({
  email: String,
  score: Number,
  timestamp: Date,
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

// POST endpoint to save quiz results
app.post('/api/saveResult', (req, res) => {
  const { email, score, timestamp } = req.body;

  const quizResult = new QuizResult({ email, score, timestamp });

  quizResult
    .save()
    .then(() => res.json({ success: true }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false, error: 'An error occurred while saving the result.' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
