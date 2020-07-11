import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  flex: 1;
  background: #fff;
  border-bottom-color: #C8C8C8;
  border-bottom-width: 1px;
  justify-content: space-between;
  align-items: center;
`;

export const TextHeader = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight:  700;
  margin-left: 4%;
`;

export const ListContent = styled.View`
  flex: 6;
  background: #fff
`;


export const Separator = styled.View`
  height: 0.5px; 
  width: 100%;
  background-color: #C8C8C8;
`;

export const ButtonAdd = styled.TouchableOpacity`
  height: 50px; 
  width: 50px;
  border-radius: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  elevation: 8;
  margin-right: 3%;
`;
