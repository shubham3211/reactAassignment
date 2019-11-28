import React from 'react';
import axios from 'axios';
import Dispatcher from '../dispatcher/productDispatcher';
import * as ProductActions from '../actions/productActions';
import pro from '../store/productStore'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    ProductActions.fetchProduct();
    this.state = {
      products: []
    }
    pro.on("change", this.getProducts);
  }

  getProducts = () => {
    console.log(pro.getAllProducts());
    this.setState({
      products: pro.getAllProducts()
    })
  }

  renderProducts = () => [...this.state.products].map((product) => (
        !product.pid ? (
        <tr key={product._id}>
          <td>{product.proNo}</td>
          <td>{product.proName}</td>
          <td>{product.proPrice}</td>
        </tr>) : (
          <tr key={product._id}>
            <td>{product.pid}</td>
            <td>{product.pname}</td>
            <td>{product.pprice}</td>
          </tr>
        )
      )
    )

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Product Number</th>
                <th>Product Name</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              { this.renderProducts() }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ProductDetails;