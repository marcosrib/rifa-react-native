import React from 'react';
import { FlatList } from 'react-native';
import ItemList from '../../components/ItemList';

import { Container, ListContent } from './styles';

import Header from '../../components/header';
import Separator from '../../components/separator';

const MyRifas: React.FC = () => {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
  ];

  return (
    <Container>
      <Header title="Minhas rifas"/>
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

export default MyRifas;