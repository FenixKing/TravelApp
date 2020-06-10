import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import { Routes } from './src/routes/route'
import { Provider } from 'react-redux'
import store from './src/store'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}