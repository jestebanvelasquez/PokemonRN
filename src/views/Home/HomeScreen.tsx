import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Icon name="alarm-outline" size={35} color="gray" />
    </View>
  );
};

export default HomeScreen;
