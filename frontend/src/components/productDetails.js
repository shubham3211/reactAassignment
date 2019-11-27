import React from 'react';
import axios from 'axios';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    axios.get('http://localhost:5000/products')
      .then((products) => {
        this.setState({
          products: [...this.state.products, ...products.data.result]
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  renderProducts = () => [...this.state.products, ...this.props.products].map((product) => (
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