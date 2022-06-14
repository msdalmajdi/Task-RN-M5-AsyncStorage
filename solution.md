# Cart AsyncStorage 🛒

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-RN-M5-AsyncStorage) to your `Development` folder.

1. Add AsyncStorage to your project.

```bash
npm install @react-native-async-storage/async-storage
```

2. In your `CartStore` component, in the `addItem` method, save the `this.items` to AsyncStorage.

```js
addItem = (item) => {
  this.items.push(item);
  // save to async storage
  AsyncStorage.setItem('cart', this.items);
};
```

3. But you can't save arrays to AsyncStorage :( Google is your friend!.

```js
addItem = (item) => {
  this.items.push(item);
  // save to async storage
  AsyncStorage.setItem('cart', JSON.stringify(this.items));
};
```

4. Don't forget that all async storage methods are asynchronous.

```js
addItem = async (item) => {
  this.items.push(item);
  // save to async storage
  await AsyncStorage.setItem('cart', JSON.stringify(this.items));
};
```

5. Create a new method in `CartStore` called `fetchItems` that will get the items from AsyncStorage.

```js
fetchCart = async () => {
  const items = await AsyncStorage.getItem('cart');
  this.items = items ? JSON.parse(items) : [];
};
```

6. Call this method before your store export.

```js
const cartStore = new CartStore();

cartStore.fetchCart();
export default cartStore;
```

7. Create another method in `CartStore` called `clearCart` that will remove items from AsyncStorage.

```js
clearCart = async () => {
  this.items = [];
  await AsyncStorage.removeItem('cart');
};
```

8. Bind this method to your `clearCart` button in the `Cart` screen.

```js
<Button title="clear" onPress={() => cartStore.clearCart()} />
```
