import React,{useRef} from 'react';
import { Dimensions } from 'react-native';
import { Formik } from 'formik';
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
const title = useRef(null);



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
        <Formik
          initialValues={{
             title:''
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            console.log(actions);
           }}
        >
        {({values, handleSubmit, handleChange}) => (

            <Form altura={formHeight}>
              <Ipunt
               ref={title}
                placeholder="titulo:"
                altura={ipuntHeight}
                onChangeText={handleChange('title')}
                value={values.title}
              />
              <Ipunt
                placeholder="valor:"
                altura={ipuntHeight}
                onChangeText={handleChange('valor')}
              />
              <Ipunt
                placeholder="data sorteio:"
                altura={ipuntHeight}
                onChangeText={handleChange('data')}
              />
              <TextArea
                altura={textAreaHeight}
                onChangeText={handleChange('descricao')}
              />
              <Buttom
                altura={height * 0.08}
                onPress={handleSubmit}
              >
                <TextButtom>Salvar</TextButtom>
              </Buttom>
            </Form>
            )}
        </Formik>
      </KeyboardAwareScrollView>
    </Container>

  );
}

export default CreateRifa;