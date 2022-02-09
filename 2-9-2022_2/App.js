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
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#5a80d1",
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
            options={{ title: 'หน้าหลัก' }}
          />
          <Stack.Screen 
            name="About" 
            component={AboutScreen} 
            options={{ title: 'เกี่ยวกับเรา' }}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ title: 'ลงทะเบียน' }}
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
            options={{ title: 'สินค้า' }}
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailScreen} 
            options={{ title: 'รายละเอียด' }}
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