import { makeAutoObservable } from 'mobx';

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItem = (item) => {
    this.items.push(item);
  };

  getItemsCount() {
    return this.items.length;
  }
  getTotalPrice() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getItems = () => {
    return this.items;
  };
}

const cartStore = new CartStore();

export default cartStore;
