import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your SERVER is running on port ${PORT}. Press CTRL + C to terminate the SERVER.`);
});
