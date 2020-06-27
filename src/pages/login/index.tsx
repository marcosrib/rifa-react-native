
import React, { useContext } from 'react';
import { TextInput, Dimensions } from 'react-native';
import { Container, Form, Title, Buttom, ResetSenhaContent, Text, Footer, Ipunt, TextButtom } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthContext from '../../contexts/AuthContext'

const { width, height } = Dimensions.get('window');

const Login: React.FC = () => {
  const { signIn, user } = useContext(AuthContext);

  function handleSignIn() {
    signIn('marcos.rib.sousa@gmail.com', '1234');
  }

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Form altura={height * 0.35}>
          <Ipunt
            placeholder=" Digite o e-mail"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
          />
          <Ipunt
            placeholder=" Digite a senha"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
          />
          <ResetSenhaContent>
            <Text>
              Esqueci minha senha
            </Text>
          </ResetSenhaContent>
          <Buttom altura={height * 0.08}>
            <TextButtom>
              Logar
            </TextButtom>
          </Buttom>
        </Form>
        <Footer>

        </Footer>
      </KeyboardAwareScrollView>
    </Container>

  );
};

export default Login;
