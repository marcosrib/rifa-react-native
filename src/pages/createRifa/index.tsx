import React from 'react';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Buttom,
  Form,
  Ipunt,
  TextButtom,
  TextArea,
  CameraContent,
  ButtomCamera,
  Textcamera
} from './styles';

const { height } = Dimensions.get('window');

const ipuntHeight = height * 0.08;
const textAreaHeight = height * 0.2;
const formHeight = height * 0.7;
const cameraHeight = height * 0.15;

const CreateRifa: React.FC = () => {




  return (

    <Container>
      <KeyboardAwareScrollView>
        <CameraContent
          altura={cameraHeight}
        >
          <ButtomCamera>
            <Icon name="camera-alt" size={50} color="black" />
            <Textcamera>Adicionar Imagem</Textcamera>
          </ButtomCamera>

        </CameraContent>
        <Form altura={formHeight}>
          <Ipunt
            placeholder="titulo:"
            altura={ipuntHeight}
          />
          <Ipunt
            placeholder="valor:"
            altura={ipuntHeight}
          />
          <Ipunt
            placeholder="data sorteio:"
            altura={ipuntHeight}
          />
          <TextArea
            altura={textAreaHeight}
          />
          <Buttom altura={height * 0.08}>
            <TextButtom>Salvar</TextButtom>
          </Buttom>
        </Form>

      </KeyboardAwareScrollView>
    </Container>

  );
}

export default CreateRifa;