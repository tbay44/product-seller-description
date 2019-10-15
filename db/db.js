// Import the mongoose module
const mongoose = require('mongoose');
// const data = require('./data.js');

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017/product-description-data';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('DB is connected!');
// });

// Define schema
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  product_name: String,
  prime_pic: String,
  price: String,
  seller: String,
  rating: Number,
  shipping: Boolean,
  condition: Boolean,
  availability: Number,
});
// Compile model from schema
const Model = mongoose.model('product', productSchema);

// Model.insertMany(data);

function getAllData() {
  return new Promise((resolve, reject) => {
    Model.find({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { getAllData };
