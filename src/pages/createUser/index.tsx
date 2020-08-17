import React from 'react';
import { Dimensions, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container, Buttom, Form, Ipunt, TextButtom, TextError } from './styles';

import { createUserApi } from '../../services/auth';

const { height } = Dimensions.get('window');

const CreateUser: React.FC = () => {


  function handleCreateUser({ name, email, password }: any) {
    createUserApi(name, email, password);
  }


  const validateForm = yup.object().shape({
    name: yup.string()
      .label('name')
      .required('O campo nome não pode ser vazio'),
    email: yup.string()
      .label('email')
      .email('Digite um e-mail válido')
      .required('O campo email não pode ser vazio'),
    password: yup.string()
      .label('password')
      .min(6, 'A senha tem que ter no mínimo caracteres')
      .required('O campo senha não pode ser vazio'),
    confirmPassword: yup.string()
      .label('confirmPassword')
      .oneOf([yup.ref('password'), undefined], 'As senhas não são iguais')
      .required('O campo não pode ser vazio')
  });

  function messageError(errors: string | undefined) {
    return errors ? errors : null;
  }


  return (
    <Container>
      <KeyboardAwareScrollView >
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={values => {
            handleCreateUser(values)
          }}
          validationSchema={validateForm}
        >
          {({ values, handleSubmit, handleChange, errors }) => {

            return (
              <Form altura={height * 0.8}>
                <TextError >{messageError(errors.name)}</TextError>
                <Ipunt
                  placeholder="Nome:"
                  placeholderTextColor="#808080"
                  style={{ fontSize: 15 }}
                  onChangeText={handleChange('name')}
                  value={values.name}
                />
                <TextError >{messageError(errors.email)}</TextError>
                <Ipunt
                  placeholder="Email:"
                  placeholderTextColor="#808080"
                  style={{ fontSize: 15 }}
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                <TextError >{messageError(errors.password)}</TextError>
                <Ipunt
                  placeholder="Senha:"
                  placeholderTextColor="#808080"
                  style={{ fontSize: 15 }}
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                <TextError >{messageError(errors.confirmPassword)}</TextError>
                <Ipunt
                  placeholder="Confirma senha:"
                  placeholderTextColor="#808080"
                  style={{ fontSize: 15 }}
                  onChangeText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                />

                <Buttom
                  altura={height * 0.08}
                  onPress={handleSubmit}
                >
                  <TextButtom>Salvar</TextButtom>
                </Buttom>
              </Form>
            )
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default CreateUser;