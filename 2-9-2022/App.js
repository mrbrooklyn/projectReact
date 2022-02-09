import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DetailScreen from "./screens/DetailScreen";
import ProductScreen from "./screens/ProductScreen";
import MenuScreen from "./screens/MenuScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#3455eb",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  fontWeight: "bold",
              },
          }}
      >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
          />
          <Stack.Screen 
            name="About" 
            component={AboutScreen} 
          />
      </Stack.Navigator>
  );
}

function ProductStack() {
  return (
      <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#7188f5",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  fontWeight: "bold",
              },
          }}
      >
          <Stack.Screen 
            name="Product" 
            component={ProductScreen} 
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailScreen} 
          />
      </Stack.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator
              initialRouteName="HomeStack"
              drawerPosition="left"
              drawerContent={(props) => <MenuScreen {...props} />}
          >
              <Drawer.Screen 
                name="HomeStack" 
                component={HomeStack} 
              />
              <Drawer.Screen 
                name="ProductStack" 
                component={ProductStack} 
              />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;