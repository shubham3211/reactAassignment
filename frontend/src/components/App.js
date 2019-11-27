import React from 'react';
import ProductSubmit from './productSubmit';
import ProductDetails from './productDetails';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  addProduct = (product) => {
    console.log(product)
    this.setState({
      products: [...this.state.products, product]
    }, () => {
      console.log(this.state.products);
    })
  }

  render() {
    return (
      <div className="container">
        <ProductSubmit addProduct={this.addProduct} />
        <ProductDetails products={this.state.products} />
      </div>
    )
  }
}

export default App;