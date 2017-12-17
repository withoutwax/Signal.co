import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AboutWillSchema = new Schema({
  aboutWill: [{
    will: String
  }]

  // Korean Born;
  // Lived in Kuwait;
  // British School;
  // Art School;
  // Jesus Follower;
  // Invely's;
  // withoutwax.me
  // Chicago;
});

module.exports = mongoose.model('Will', AboutWillSchema);
