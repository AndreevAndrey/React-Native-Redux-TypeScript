import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Users from './src/components/Users/Users';
import store from './src/redux/redux';
import Header from './src/components/Header/Header';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header title='React Native + TypeScript' />
        <Users />
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0db7a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
