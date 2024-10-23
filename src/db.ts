const mongoose = require('mongoose');
require('dotenv').config();

const databaseURL = process.env.DATABASE_URL;

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err:Error) => {
    console.error('Error connecting to MongoDB:', err);
  });

mongoose.connection.on('error', (err:Error) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.error('MongoDB disconnected');
});

export default mongoose;