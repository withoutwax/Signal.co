import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Will from './src/models/aboutWillModel';

const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AboutWilldb', {
  useMongoClient: true
});

//body-parser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({Will: ['Will', 'Chicago']});
});

app.listen(PORT, () => {
  console.log(`Your SERVER is running on port ${PORT}. Press CTRL + C to terminate the SERVER.`);
});
