import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/productDispatcher';
import axios from 'axios';

class Product extends EventEmitter {
  constructor(){
    super();
    this.products = [];
  }

  getAllProducts(){
    return this.products;
  }

  fetchProducts(){
    axios.get('http://localhost:5000/products')
      .then((response) => {
        this.products = response.data.result;
        this.emit("change");
      })
      .catch((err) => {
        console.error(err);
      })
  }

  postProducts(product){
    let {proNo, proName, proPrice} = product;
    axios.post("http://localhost:5000/product", { proNo, proName, proPrice })
      .then((response) => {
        this.products.push(response.data.result);
        this.emit("change");
      })
  }

  handelActions(action){
    switch(action.type){
      case 'FETCH_PRODUCTS':
        this.fetchProducts();
        break;
      case 'POST_PRODUCTS':
        this.postProducts(action.product);
        break;
      default:
        console.log('WRONG CHOICE');
    }
  }
}

let pro = new Product();
Dispatcher.register(pro.handelActions.bind(pro));
export default pro;