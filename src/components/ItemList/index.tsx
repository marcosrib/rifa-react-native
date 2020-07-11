import React from 'react';
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
  return (
    <Item key={id}>
      <Image source={require('../../images/mel1.jpeg')} />
      <ItemTextContent>
        <TextItem>{title}</TextItem>
        <SubTextItem>testando item</SubTextItem>
        <DetailButtomItem>
          <DetailTextItem>ver detalhes</DetailTextItem>
        </DetailButtomItem>
      </ItemTextContent>
    </Item>
  );
}

export default ItemList;