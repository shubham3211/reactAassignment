import React from 'react';
import axios from 'axios';

class ProductSubmit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      proNo: 101,
      proName: "table",
      proPrice: 1900
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(...Object.values(this.state));
    let { proName, proNo, proPrice } = this.state;
    axios.post("http://localhost:5000/product", {proNo, proName, proPrice})
      .then((response) => {
        this.props.addProduct(response.data.result);
      })
  }

  handelProductName = (event) => {
    this.setState({
      proName: event.target.value
    })
  }

  handelProductNo = (event) => {
    this.setState({
      proNo: event.target.value
    })
  }

  handelProductPrice = (event) => {
    this.setState({
      proPrice: event.target.value
    })
  }

  render(){
    console.log("form rendered");
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="proName">Product Name</label>
              <input type="text" onChange={this.handelProductName} value={this.state.proName} className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="proNo">Product Number</label>
              <input type="text" onChange={this.handelProductNo} value={this.state.proNo} className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="proPrice">Product price</label>
              <input type="text" onChange={this.handelProductPrice} value={this.state.proPrice} className="form-control"/>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default ProductSubmit;