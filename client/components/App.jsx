import React from 'react';
import axios from 'axios';
import Head from './Head.jsx';
import Subhead from './Subhead.jsx';
import Price from './Price.jsx';
import Logistics from './Logistics.jsx';
import Guarentee from './Guarentee.jsx';
import Seller from './Seller.jsx';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line no-undef
      id: 36,
      product_name: '',
      price: '',
      condition: false,
      rating: 0,
      review_count: 0,
      availability: 0,
      sale_count: 0,
      seller: '',
      sellerRating_count: 0,
      seller_feedback: '',
      shipping: false,
    };
  }

  componentDidMount() {
    this.getDataAndUpdateState();
  }

  getDataAndUpdateState() {
    axios.get('/data', {
      params: {
        id: this.state.id,
      },
    })
      .then((response) => {
        const data = response.data[0];
        this.setState({
          product_name: data.product_name,
          price: data.price,
          condition: data.condition,
          rating: data.rating,
          review_count: data.review_count,
          availability: data.availability,
          sale_count: data.sale_count,
          seller: data.seller,
          sellerRating_count: data.sellerRating_count,
          seller_feedback: data.seller_feedback,
          shipping: data.shipping,
        });
      });
  }


  render() {
    return (
      <div className="main">
        <div>{this.state.data}</div>
        <Head
          name = {this.state.product_name}
          rating = {this.state.rating}
          reviewCount = {this.state.review_count}
        />
        <br></br>
        <Subhead
          condition = {this.state.condition}
          sold = {this.state.sale_count}
          availability = {this.state.availability}
        />
        <br></br>
        <Price
          price = {this.state.price}
        />
        <br></br>
        <Logistics
          shipping = {this.state.shipping}
        />
        <br></br>
        <Guarentee />
        <br></br>
        <Seller
          seller = {this.state.seller}
          sellerRatingCount = {this.state.sellerRating_count}
          sellerFeedback = {this.state.seller_feedback}
        />
      </div>
    );
  }
}

export default App;
