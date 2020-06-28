import React from 'react';
import { Dimensions } from 'react-native';
import { Container, Logo, Title, Buttom, TextButtom, TextCreateCount, ButtomCreateCount } from './styles';

const { height } = Dimensions.get('window');

const Initial: React.FC = () => {
  return (
    <Container>
      <Title>
        Bem-vindo
      </Title>
      <Logo
        h={height * 0.2}
        source={require('../../images/logo.png')} />
      <Buttom>
        <TextButtom>Login</TextButtom>
      </Buttom>
      <ButtomCreateCount>
        <TextCreateCount>
          Crie uma conta
        </TextCreateCount>
      </ButtomCreateCount>
    </Container>
  )

}

export default Initial;