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
      id: 2,
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
      shipping: true,
    };
  }

  componentDidMount() {
    this.getDataAndUpdateState();

    window.addEventListener('starAverage', () => {
      this.setState({
        rating: window.starAverage.starAverage,
      });
    });

    window.addEventListener('starAverage', () => {
      this.setState({
        review_count: window.starAverage.totalRatings,
      });
    });

    window.addEventListener('uniqueId', () => {
      this.setState({
        id: window.uniqueId || 2,
      }, () => { this.getDataAndUpdateState(); });
    });
  }

  windowEmit() {
    window.productName = this.state.product_name;
    const productName = new CustomEvent(
      'productName', {
        detail: {
          productName: 'changed',
        },
      },
    );
    window.dispatchEvent(productName);
  }


  getDataAndUpdateState() {
    const CONNECTION_URL = 'http://localhost:3007/data'
    let id = window.uniqueId || 2
    console.log(id);
    axios.get(CONNECTION_URL, {
      params: {
        id: id
      },
    })
      .then((response) => {
        const data = response.data[0];
        this.setState({
          product_name: data.product_name,
          price: data.price,
          condition: data.condition,
          availability: data.availability,
          sale_count: data.sale_count,
          seller: data.seller,
          sellerRating_count: data.sellerRating_count,
          seller_feedback: data.seller_feedback,
          shipping: data.shipping,
        });
      })
      .then(() => {
        this.windowEmit();
      });
  }


  render() {
    return (
      <div className="app">
        <div className="left-col">
          <Head
            name = {this.state.product_name}
            rating = {this.state.rating}
            reviewCount = {this.state.review_count}
          />
          <div className="grey-line"></div>
          <Subhead
            condition = {this.state.condition}
            sold = {this.state.sale_count}
            availability = {this.state.availability}
          />
          <div className= "space-1"></div>
          <Price
            price = {this.state.price}
          />
          <Logistics
            shipping = {this.state.shipping}
          />
        </div>
        <div className="right-col">
          <Guarentee />
          <Seller
            seller = {this.state.seller}
            sellerRatingCount = {this.state.sellerRating_count}
            sellerFeedback = {this.state.seller_feedback}
          />
        </div>
      </div>
    );
  }
}

export default App;
