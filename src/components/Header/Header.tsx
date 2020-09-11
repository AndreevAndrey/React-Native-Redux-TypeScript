import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderType = {
  title: string;
};

const Header: React.FC<HeaderType> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#39cdab',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
});

export default Header;
