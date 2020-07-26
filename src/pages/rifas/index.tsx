
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import ItemList from '../../components/ItemList';
import Loading from '../../components/loading';
import Header from '../../components/header';
import Separator from '../../components/separator';
import { getRifas } from '../../services/rifa';

import { Container, ListContent } from './styles';



const Rifas: React.FC = () => {

  const [data, setData] = useState<object | any>([]);
  const [page, setPage] = useState<number>(1);
  const [totalItem, setTotalItem] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false)
  const [refresh, setRefresh] = useState<boolean>(false)


  async function loadPage(pageNumber = page, shouldRefresh= false): Promise<void> {

    if (totalItem && pageNumber > totalItem) return;
    setLoading(true);
  
    
    const response = await getRifas(pageNumber);

    const { content, totalElements } = response.data;

    setData([...data, ...content]);

    setTotalItem(Math.floor(totalElements / 10));


    setPage(page + 1);
    setLoading(false)


  }

  useEffect(() => {
    loadPage();
  }, [])

  async function refreshList() {
    setRefresh(true);
    await loadPage(1,true);
    setRefresh(false);
   
  }

  return (
    <Container>
      <Header title="Rifas" />

      <ListContent>
        <FlatList
          data={data}

          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => <ItemList title={item.id} id={item.id} />}
          keyExtractor={(item, index) => String(index)}
          onEndReached={() =>loadPage()}
          onEndReachedThreshold={0.1}
         // onRefresh={refreshList}
         // refreshing={refresh}
          ListFooterComponent={<Loading loading={loading} />}
        />
      </ListContent >
    </Container>
  );
}

export default Rifas;