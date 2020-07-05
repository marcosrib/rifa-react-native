import styled from 'styled-components/native'

interface Props {
  altura: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff
`;

export const Form = styled.View<Props>`
  padding: 3%;
  height: ${props => props.altura}px;
`;

export const Ipunt = styled.TextInput.attrs((props: Props) => ({
  placeholderTextColor:"#808080",
  underlineColorAndroid:"transparent",
  numberOfLines: 10,
  multiline: true,
  keyboardType:"web-search",
  returnKeyType:"next",
  blurOnSubmit:false
}))<Props>`
  height: ${props => props.altura}px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: rgba(196, 196, 196, 0.24);
  color: #000
`;

export const TextArea = styled.TextInput.attrs(() => ({
  placeholder:"Descrição:",
  placeholderTextColor:"#808080",
  underlineColorAndroid:"transparent",
  numberOfLines: 10,
  multiline: true,
}))<Props>`
  height:  ${props => props.altura}px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: rgba(196, 196, 196, 0.24);
  color: #000
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

export const CameraContent = styled.View<Props>`
  padding: 3%;
  justify-content: center;
  align-items: center;
  height: ${props => props.altura}px;
`;


export const ButtomCamera = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Textcamera = styled.Text`
  text-align: center
  color: #000;
  font-size: 20px;
  font-weight: 200;
`