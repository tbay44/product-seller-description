// Import the mongoose module
const mongoose = require('mongoose');
// Uncomment line 4 below and line 44 below to insert data from ./data.js into the database
// const data = require('./data.js');

// change DB_CONNECTION below to connect to your local mongo database or atlas database
const DB_CONNECTION = 'mongodb+srv://ethanhogan:TODO@cluster0-obkqw.mongodb.net/product-description-data?retryWrites=true&w=majority'

// Set up default mongoose connection
const mongoDB = DB_CONNECTION;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database connection established!');
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

// Define schema
const { Schema } = mongoose;

const productSchema = new Schema({
  _id: Number,
  product_name: String,
  prime_pic: String,
  price: String,
  seller: String,
  rating: Number,
  shipping: Boolean,
  condition: Boolean,
  availability: Number,
  review_count: Number,
  sale_count: Number,
  sellerRating_count: Number,
  seller_feedback: String,
});
// Compile model from schema
const Model = mongoose.model('product', productSchema);

// Uncomment line 44 below and line 4 above to insert data from ./data.js into the database
// Model.insertMany(data);

function getData(id) {
  console.log(id)
  return new Promise((resolve, reject) => {
    Model.find({ _id: id }, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { getData };
