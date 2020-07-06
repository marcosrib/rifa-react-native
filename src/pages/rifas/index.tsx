import React, { Props } from 'react';
import { FlatList, View } from 'react-native';

import { Container, Header, TextHeader, ListContent, Item, TextItem } from './styles';
import { Title } from '../initial/styles';

interface ItemProps {
  title: string;
}

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
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const ItemList = ({ title } : ItemProps) => {
    return (
      <Item>
        <TextItem>{title}</TextItem>
      </Item>
    );
  }

  const FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };


  return (
    <Container>
      <Header>
        <TextHeader></TextHeader>
      </Header>
      <ListContent>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item }) => <ItemList title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ListContent>
    </Container>
  );
}

export default Rifas;