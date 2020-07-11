import React from 'react';
import {
  useNavigation
} from '@react-navigation/native';

import { 
  Item,
  TextItem,
  Image,
  ItemTextContent,
  SubTextItem,
  DetailTextItem,
  DetailButtomItem,
} from './styles';


interface ItemProps {
  title: string;
  id: string;
}

const ItemList: React.FC<ItemProps> = ({ title, id }) => {

  const navigation = useNavigation();

  function hendleNavigationDetail() {
    navigation.navigate('RifaDetail');
  }

  return (
    <Item key={id}>
      <Image source={require('../../images/mel1.jpeg')} />
      <ItemTextContent>
        <TextItem>{title}</TextItem>
        <SubTextItem>testando item</SubTextItem>
        <DetailButtomItem onPress={hendleNavigationDetail}>
          <DetailTextItem>ver detalhes</DetailTextItem>
        </DetailButtomItem>
      </ItemTextContent>
    </Item>
  );
}

export default ItemList;