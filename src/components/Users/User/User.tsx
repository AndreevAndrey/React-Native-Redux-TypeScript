import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type UserType = {
  first_name: string;
  last_name: string;
  email: string;
  id: number;
  avatar: string;
  handlePress: (id: number) => void;
};

const User: React.FC<UserType> = ({
  first_name,
  last_name,
  email,
  id,
  avatar,
  handlePress,
}) => (
  <TouchableOpacity onPress={() => handlePress(id)}>
    <View style={styles.user}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <Text style={styles.text}>First name: {first_name}</Text>
      <Text style={styles.text}>Last name: {last_name}</Text>
      <Text style={styles.text}>Email: {email}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  user: {
    flex: 1,
    backgroundColor: '#f8f7b8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0db7a9',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
});

export default User;
