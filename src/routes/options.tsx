import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

 
const ButtomBack: React.FC = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.goBack } style={{ paddingLeft: '30%', width: 60 }}>
      <Icon name="keyboard-backspace" size={30} color="black" />
    </TouchableOpacity>
  )
}


export const options = (name: string, ml: string) => {
  const op = {
    headerTitle: name,
    headerTitleStyle: { textAlign: 'left', marginLeft: ml },
    headerLeft: () => (
      <ButtomBack />
    ),
  }
  return (
    op
  )
}

