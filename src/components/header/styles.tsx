import styled from 'styled-components/native';


export const HeaderContent = styled.View`
  flex-direction: row;
  flex: 1;
  background: #fff;
  border-bottom-color: #C8C8C8;
  border-bottom-width: 1px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  height: 50px; 
  width: 50px;
  border-radius: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-right: 3%;
  elevation: 30;

`;

export const TextHeader = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight:  700;
  margin-left: 4%;
`;