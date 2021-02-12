// import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator, CreateStackNavigator } from '@react-navigation/stack';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import HomeTab from "./src/Navigation/HomeTab";
import AuthStackScreen from "./src/Navigation/AuthStack";
import { AuthContext, AuthProvider } from "./src/Provider/AuthProvider";

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZ0U4i8gwkeSN_Ia184ROzcifpfiwGrPg",
  authDomain: "projectauth-68a00.firebaseapp.com",
  projectId: "projectauth-68a00",
  storageBucket: "projectauth-68a00.appspot.com",
  messagingSenderId: "551639822400",
  appId: "1:551639822400:web:6b3419c1eb03213798afa5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = ()=>{
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? < HomeTab /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;