import { makeAutoObservable, observable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItem = async (item) => {
    this.items.push(item);
    // save to async storage
    await AsyncStorage.setItem('cart', JSON.stringify(this.items));
    console.log(this.items);
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

  fetchCart = async () => {
    const items = await AsyncStorage.getItem('cart');
    this.items = items ? JSON.parse(items) : [];
  };

  clearCart = async () => {
    this.items = [];
    await AsyncStorage.removeItem('cart');
  };

  getItems = () => {
    return this.items;
  };
}

const cartStore = new CartStore();

cartStore.fetchCart();
export default cartStore;
