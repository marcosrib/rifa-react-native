
import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';


import ItemList from '../../components/ItemList';

import { Container, ListContent } from './styles';


import Header from '../../components/header';
import Separator from '../../components/separator';
import { getRifas } from '../../services/rifa';



const Rifas: React.FC = () => {

  const [data, setData] = useState<object | any>(null);

  useEffect(() => {
    async function getData() {
      const data = await getRifas();
      setData(data.data.content);
    }
    getData()

  }, [])
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
  ];

  return (
    <Container>
      <Header title="Rifas" />

      <ListContent>

        {
          data === null &&
          (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator size="small" color="#EF3F47" />
            </View>
          )
        }
        <FlatList
          data={data}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <ItemList title={item.titulo} id={item.id} />}
          keyExtractor={item => String(item.id)}
        />
      </ListContent >
    </Container>
  );
}

export default Rifas;