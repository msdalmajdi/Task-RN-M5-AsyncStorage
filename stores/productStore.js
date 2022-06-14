import { makeAutoObservable, observable } from 'mobx';
import products from '../products';

class ProductsStore {
  constructor() {
    makeAutoObservable(this);
  }
  products = products;
  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  getProducts() {
    return this.products;
  }
}

export default new ProductsStore();
