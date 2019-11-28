import React from 'react';
import ProductSubmit from './productSubmit';
import ProductDetails from './productDetails';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ProductSubmit />
        <ProductDetails />
      </div>
    )
  }
}

export default App;