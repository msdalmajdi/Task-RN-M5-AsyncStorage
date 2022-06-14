# Cart AsyncStorage 🛒

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-RN-M5-AsyncStorage) to your `Development` folder.

1. Add AsyncStorage to your project.

```bash
npm install @react-native-async-storage/async-storage
```

2. In your `CartStore` component, in the `addItem` method, save the `this.items` to AsyncStorage.
3. But you can't save arrays to AsyncStorage :( Google is your friend!.
4. Don't forget that all async storage methods are asynchronous.
5. Create a new method in `CartStore` called `fetchItems` that will get the items from AsyncStorage.
6. Call this method before your store export.
7. Create another method in `CartStore` called `clearCart` that will remove items from AsyncStorage.
8. Bind this method to your `clearCart` button in the `Cart` screen.
