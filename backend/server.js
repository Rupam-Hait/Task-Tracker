const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task-tracker';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected to: ' + mongoURI))
  .catch(err => {
    console.error('MongoDB connection error details:', err.message);
    console.log('Running backend in offline mode or waiting for connection...');
  });

app.use('/api/tasks', require('./routes/tasks'));

app.get('/', (req, res) => {
  res.send('MERN Task Tracker API is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
