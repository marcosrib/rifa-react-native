import styled from 'styled-components/native'

interface Props {
  altura: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff
`;

export const Form = styled.View<Props>`
  margin-top: 10%;
  padding: 3%;
  height: ${props => props.altura}px;
`;

export const Ipunt = styled.TextInput`
  height: 50px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: rgba(196, 196, 196, 0.24);
`;

export const Buttom = styled.TouchableOpacity<Props>`
  height: ${props => props.altura}px;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  background-color: #000
`;

export const TextButtom = styled.Text`
  text-align: center
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  color: #ff0000
`;

