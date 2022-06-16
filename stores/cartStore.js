import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }
  addItem = async (item) => {
    try {
      this.items.push(item);
      const value = this.items;
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@cartItems", jsonValue);
    } catch (e) {
      // saving error
      console.log(error);
    }
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

  fetchItems = async () => {
    try {
      var myItems = await AsyncStorage.getItem("@cartItems");

      myItems != null ? (myItems = JSON.parse(myItems)) : [];
      this.items = myItems;
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  clearCart = async () => {
    try {
      const jsonValue = JSON.stringify([]);
      await AsyncStorage.setItem("@cartItems", jsonValue);
      this.items = [];
    } catch (e) {
      // saving error
      console.log(error);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;
