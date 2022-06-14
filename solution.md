### Setup

1. Install `react-navigation`.

   ```bash
   $ npm install @react-navigation/native @react-navigation/stack
   ```

2. Install some dependencies.

   ```bash
   $ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```

#### Root Navigator Component

1. In `components`, create a new folder called `Navigation`.
2. Inside it create a file called `index.js`.
3. Setup your component and call it `RootNavigator`.

```js
const RootNavigator = () => {};
```

4. Import `createStackNavigator`.

```js
import { createStackNavigator } from '@react-navigation/stack';
```

5. Call `createStackNavigator` outside the component, save the returned value in a de-structured object to get `Navigator` and `Screen` components.

```js
const { Navigator, Screen } = createStackNavigator();
```

6. In your `RootNavigator` component, render `Navigator`.

```js
<Navigator></Navigator>
```

7. For each of your screens render a `Screen` component. Give each screen a `name` and pass it a `component`

```js
<Screen name="ProductsList" component={ProductsList} />
<Screen name="ProductDetails" component={ProductDetail} />
```

8. Don't forget to import your components.
9. Pass `Navigator` a `prop` called `initialRouteName` and give it the name of your `ProductList` screen's `Screen`.

```js
<Navigator initialRouteName="ProductsList" />
```

#### Setup in App

1. Import `NavigationContainer`.

   ```js
   import { NavigationContainer } from '@react-navigation/native';
   ```

2. Render `NavigationContainer` inside the `App`.

```js
<NavigationContainer></NavigationContainer>
```

3. Import `RootNavigator` and render it under inside the `NavigationContainer`.

```js
import RootNavigator from './src/Navigation/index';
```

    ```js
    <RootNavigator></RootNavigator>
    ```

4. Check that your application is running and that a header has appeared.

#### Navigation

1. In your `ProductsList` component, receive `navigation` as a `prop`.

```js
const ProductsList = ({ navigation }) => {};
```

2. In the `onPress` method navigate the user to the `ProductDetail` screen.

```js
<Product
  product={product}
  onPress={() => {
    navigation.navigate('ProductDetails');
  }}
/>
```

3. Pass along with it the `id` of the product object.

```js
<Product
  product={product}
  onPress={() => {
    navigation.navigate('ProductDetails', { id: product.id });
  }}
/>
```

4. In your `ProductDetail` component, receive `route` as a `prop`, and capture from it the `id` object you passed from `ProductList`.

```js
const ProductDetail = ({ route }) => {
  const { id } = route.params;
};
```

5. use the `id` to get the product object from the `products` array.

```js
const ProductDetail = ({ route }) => {
  const { id } = route.params;
  const product = productStore.getProductById(route.params.id);
};
```

6. Test it!

#### Customization

In your `RootNavigator`, customize your header.

1. Customize the header for **all** your components in `Navigator`. Give them a background color and change the font if you want.
2. Remove the header from your home screen.
3. Change the title of your `ProductDetail` screen by fetching the product's name from `route.params`.

```js
<Navigator.Screen
  name="ProductsList"
  component={ProductsList}
  options={({ route }) => {
    const { id } = route.params;
    return {
      title: productStore.getProductById(id).name,
    };
  }}
/>
```

#### Cart 🛒

    1. In your `ProductsList` component header, add a `Cart` button at the left side.

```js
    options={{
          headerRight: () => <CartIcon />,
    }}
```

    2. Clicking on this button, navigate the user to the `Cart` screen.

```js
const navigation = useNavigation();
```

```js
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Cart');
      }}
    >
```

hint: [useNavigation hook](https://reactnavigation.org/docs/use-navigation/)

#### DrawerNavigator 🛒

Create a drawer with two screens, the root screen and the cart screen.

[Docs](https://reactnavigation.org/docs/drawer-navigator/)

```js
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={RootNavigator}
        options={{
          headerRight: () => <CartIcon />,
        }}
      />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
}
```

```js
import RootNavigator from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Cart } from './components/Cart';
import 'react-native-gesture-handler';
import CartIcon from './components/CartIcon';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
```
