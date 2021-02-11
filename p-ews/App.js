// import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, CreateStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import HomeTab from "./src/Navigation/HomeTab";

import CovidStatsScreen from "./src/screens/CovidStatsScreen";
import NewsScreen from "./src/screens/NewsScreen";

const App = ()=>{
  return (
    <NavigationContainer>
      <HomeTab/>
    </NavigationContainer>
  );
}

export default App;