import React from 'react';
import Head from './Head.jsx';
import Subhead from './Subhead.jsx';
import Price from './Price.jsx';
import Logistics from './Logistics.jsx';
import Guarentee from './Guarentee.jsx';
import Seller from './Seller.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      product_name: 'Founders Fresh Metal Golf Clubs Fairway Woods Graphite Shaft Pick Flex & Loft',
      price: '$78099.96',
      seller: 'AmerisourceBergen Corporation (Holding Co)',
      rating: 3,
      shipping: false,
      condition: true,
      availability: 128,
      numRatings: 10,
      numSold: 10,
      sellerRatings: 2831,
      sellerFeedback: 99.5,
    };
  }


  render() {
    return (
      <div className="main">
        <div>{this.state.data}</div>
        <Head
          name = {this.state.product_name}
          rating = {this.state.rating}
          numRatings = {this.state.numRatings}
        />
        <br></br>
        <Subhead
          condition = {this.state.condition}
          sold = {this.state.numSold}
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
          numRatings = {this.state.sellerRatings}
          feedback = {this.state.sellerFeedback}
        />
      </div>
    );
  }
}

export default App;
