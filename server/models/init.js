const mongoose = require('mongoose');

function encodePassword(password) {
  return encodeURIComponent(password);
}
const originalPassword = "2fieSrwZkb#xxGD";
const encodedPassword = encodePassword(originalPassword);
const uri = `mongodb+srv://root:${encodedPassword}@cluster0.gz4dr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// mongoose.connect('mongodb://localhost:27017/app');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("connect");
// });
module.exports = mongoose;