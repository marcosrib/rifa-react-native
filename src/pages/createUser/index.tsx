import React from 'react';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Container, Buttom, Form, Ipunt, TextButtom } from './styles';
const { height } = Dimensions.get('window');

const CreateUser: React.FC = () => {
  return (
    <Container>
      <KeyboardAwareScrollView>
        <Form altura={height * 0.6}>
          <Ipunt
            placeholder="Nome:"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
          />
          <Ipunt
            placeholder="Email:"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
          />
          <Ipunt
            placeholder="Senha:"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
          />
          <Ipunt
            placeholder="Confirma senha:"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
          />
          <Buttom altura={height * 0.08}>
            <TextButtom>Salvar</TextButtom>
          </Buttom>
        </Form>

      </KeyboardAwareScrollView>
    </Container>
  );
}

export default CreateUser;