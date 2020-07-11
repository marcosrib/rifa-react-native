import styled from 'styled-components/native';

export const TextItem = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight:  600;
`;

export const SubTextItem = styled.Text`
  color: #2E2E2E;
  font-size: 14px;
  margin-top: 4%;
`;

export const DetailTextItem = styled.Text`
  color: #EF3F47;
  font-size: 18px;
  margin: 8% 0 0 10%;
`;

export const DetailButtomItem = styled.TouchableOpacity`
`;

export const Item = styled.View`
  flex-direction: row;
  height: 120px;
  padding: 2%;
`;

export const ItemTextContent = styled.View`
  flex: 2;
  margin-left: 10%; 
`;

export const Image = styled.Image`
  flex:1;
  width: null;
  height: null;
  resize-mode: cover;
  border-radius: 10px;
`;
