// Import the mongoose module
const mongoose = require('mongoose');
// const data = require('./data.js');

// Set up default mongoose connection
const mongoDB = 'mongodb+srv://ethanhogan:gotigers225@cluster0-obkqw.mongodb.net/product-description-data?retryWrites=true&w=majority';
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
  id: Number,
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

// Model.insertMany(data);

function getData(id) {
  return new Promise((resolve, reject) => {
    Model.find({ id }, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { getData };
