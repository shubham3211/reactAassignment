import Dispatcher from '../dispatcher/productDispatcher';

export const fetchProduct = () => {
  Dispatcher.dispatch({
    type: 'FETCH_PRODUCTS'
  })
}

export const postProducts = (product) => {
  Dispatcher.dispatch({
    type: 'POST_PRODUCTS',
    product
  })
}