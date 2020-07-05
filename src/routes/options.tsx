import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const options = (name: string, ml: string) => {
  const op = {
    headerTitle: name,
    headerTitleStyle: { textAlign: 'left', marginLeft: ml },
    headerLeft: () => (
      <TouchableOpacity style={{ paddingLeft: '30%', width: 60 }}>
        <Icon name="keyboard-backspace" size={30} color="black" />
      </TouchableOpacity>
    ),
  }
  return (
    op
  )
}