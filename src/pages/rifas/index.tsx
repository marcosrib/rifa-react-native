import React from 'react';
import { FlatList } from 'react-native';
import ItemList from '../../components/ItemList';

import { Container, ListContent } from './styles';

import Header from '../../components/header';

import Separator from '../../components/separator';

const Rifas: React.FC = () => {

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



  return (
    <Container>
      <Header title="Rifas"/>
      <ListContent>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <ItemList title={item.title} id={item.id} />}
          keyExtractor={item => item.id}
        />
      </ListContent >
    </Container>
  );
}

export default Rifas;