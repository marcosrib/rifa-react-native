import styled from 'styled-components/native';
import { HeightProps } from './../interface';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2%;
  margin-top: 10%;
`;

export const DateSortition = styled.Text`
  color: #EF3F47;
  font-size: 20px;
  font-weight: 700;
  
`;

export const Description = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: normal;
  margin-top: 5%
`;

export const ImageContent = styled.View`
  margin-top: 10%;
  height: 300px;
  flex: 1;
  border-radius: 10px;
  elevation: 2;
 
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 0% 5% 0 5%
`;

export const Image = styled.Image`
  flex:1;
  width: null;
  height: null;
  resize-mode: cover;
  border-radius: 10px;
`;

export const Text = styled.Text`
margin-top: 3%;
color: #000;
font-size: 20px;
font-weight: bold;
`;

export const NumberArea= styled.View`
 flex-wrap:wrap;
 flex-direction: row;
 margin-top: 5%;
`;

export const NumberContent= styled.TouchableOpacity<HeightProps>`
   background-color: #EF3F47;
   align-items: center;
   justify-content: center;
   height: ${props => props.height}px;
   width: ${props => props.height}px;
   margin: 1%;
   border-radius: 50
`;

export const TextNumber = styled.Text`
color: #fff;
font-size:25px;
font-weight: 200;
`;