import React, { Props } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ItemList from '../../components/ItemList';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  Header,
  TextHeader,
  ListContent,
  Separator,
  ButtonAdd
} from './styles';


const Rifas: React.FC = () => {

  const navigation = useNavigation();



  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29fff2',
      title: 'teste 5 Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571eggd72',
      title: 'teste 4 Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14557rr29d72',
      title: 'teste 6 Item',
    },


  ];

  function addRifa() {
    navigation.navigate('CreateRifa');
  }

  function FlatListItemSeparator() {
    return (
      //Item Separator
      <Separator />
    );
  };


  return (
    <Container>
      <Header>
        <TextHeader>Rifas</TextHeader>
        <ButtonAdd onPress={addRifa}>
          <Icon name="add" size={30} color="black" />
        </ButtonAdd>
      </Header>
      <ListContent>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item }) => <ItemList title={item.title} id={item.id} />}
          keyExtractor={item => item.id}
        />
      </ListContent >
    </Container>
  );
}

export default Rifas;