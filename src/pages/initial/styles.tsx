import styled from 'styled-components/native'

interface Props {
  h: number;
}


export const Container = styled.SafeAreaView`
  flex: 1; 
  align-items: center;
  padding-top: 20%;
`;

export const Logo = styled.Image<Props>`
  height: ${props => props.h}px;
  width: ${props => props.h}px;
`;

export const Title = styled.Text`
  color: #00000A;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 10%;
`;

export const Buttom = styled.TouchableOpacity`
  height: 10%;
  justify-content: center;
  width: 90%;
  margin-top: 15%;
  background-color: #000;
  border-radius: 10px;
`;

export const TextButtom = styled.Text`
  text-align: center
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const ButtomCreateCount = styled.TouchableOpacity`
  margin-top: 10%;
`;
export const TextCreateCount = styled.Text`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;