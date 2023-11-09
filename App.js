import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from "react";
import Database from "./Database";
import DetailScreen from "./screens/DetailScreen";
import EntryScreen from "./screens/EntryScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  

  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'lightgray', // Màu nền của tab bar
      },
      labelStyle: {
        fontSize: 16, // Kích thước font cho label
      },
      activeTintColor: 'blue', // Màu cho tab được chọn
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const App = () => {

  useEffect(() => {
    Database.initDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false }}/>
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />    
      </Stack.Navigator>    
    </NavigationContainer>
  );
}

export default App;
