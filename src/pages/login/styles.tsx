import styled from 'styled-components/native'

import { heightPercentageToDP } from '../../utils/resize';


interface Props {
  altura: number;
}

interface PropsSelected {
  isSelected: boolean;
}

interface PropsFocused {
  isFocused: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${heightPercentageToDP('40%')} ;
  align-items: center;
  background-color: #f9684f;
  justify-content: center;
  padding: 20px;
`;

export const InputContent = styled.View`
  border-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-color: #E6E6F0;
  padding-top: ${heightPercentageToDP('3%')};
  background-color: #FAFAFC;
  height: ${heightPercentageToDP('9%')};
`;

export const IpuntText = styled.Text<PropsFocused>`
  position: absolute;
  left: 5%;
  margin-top:${props => !props.isFocused ?  '2%' : '3.5%' };
  top: ${props => !props.isFocused ?  heightPercentageToDP('2%'): 0}px;
  font-size: ${props => !props.isFocused  ? 14 : 10}px;
  font-family: 'Poppins-Regular';
  color: ${props => !props.isFocused ? '#9C98A6' : '#C1BCCC'} ;

`;

export const BorderLeft = styled.View`
  border-left-color: #f9684f;
  border-left-width: 3;
  height: 70%;
  position: absolute;
  margin-top: 4%;
  left: -1
`;

export const Input = styled.TextInput`
  color: #6A6180;
  fontFamily: 'Poppins-Regular';
  fontSize: 14;
  line-height: 24;
  height: 40;
  left: 3.5%
`;

export const Content = styled.View`
  flex: 2;
  background-color: red;
  padding: 50px 34px 0px  34px  ;
`;


export const TitleContent = styled.View`
  flex-direction: row;
  justify-content: space-between
  height: 10%;
  margin-top: 10%;
  margin-bottom: 5%;
  align-items: center
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  line-height: 34px;
  color: #32264D;
`;


export const CheckContainer = styled.View`
  flex-direction: row;
  justify-content: space-between
  align-items: center
  height: 8%;
  margin-top: 8%;
`;

export const CheckContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 32%;

`;

export const CheckButton = styled.TouchableOpacity<PropsSelected>`
  background-color: ${props => props.isSelected ?  '#04D361' : '#fff' }  ;
  height: 100%
  border-color: #E6E6F0;
  border-width: 1px;
  width: 28%;
  border-radius: 10;
  justify-content: center;
  align-items: center
`;

export const TextCreateAcount = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  line-height: 24px;
  color: #f9684f;
`;

export const Form = styled.View<Props>`
  margin-top: 10%;
  padding: 3%;
`;



export const ResetPasswordContent = styled.TouchableOpacity`

`;

export const Text = styled.Text`
  text-align: center
  color: #9C98A6;
  font-size: 12px;
  line-height: 24px;
`;

export const Buttom = styled.TouchableOpacity<Props>`
  height: ${props => props.altura}px;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  background-color: #f9684f
`;

export const TextButton = styled.Text`
  text-align: center;
  font-family: Poppins-SemiBold;
  color: #fff;
  font-size: 16px;

`;

export const Footer = styled.View`

  padding-bottom: 50px
`;

