import RootNavigator from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import CartIcon from "./components/CartIcon";
import Cart from "./components/Cart";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

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
