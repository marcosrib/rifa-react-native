import React, {memo} from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderContent, TextHeader, ButtonAdd } from './styles';

interface Props {
  title: string
}

const Header: React.FC<Props> = ({title}) => {

  const navigation = useNavigation();

  
  function addRifa() {
    navigation.navigate('CreateRifa');
  }

  return (
    <HeaderContent>
      <TextHeader>{title}</TextHeader>
      <ButtonAdd activeOpacity={1} onPress={addRifa}>
        <Icon name="add" size={30} color="black" />
      </ButtonAdd>
    </HeaderContent>

  );
}

export default Header;