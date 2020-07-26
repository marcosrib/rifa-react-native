
import React, { useContext, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { Container, Form, Buttom, ResetPasswordContent, Text, Footer, Ipunt, TextButtom } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthContext from '../../contexts/AuthContext'

const { height } = Dimensions.get('window');

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setSenha] = useState<string>();

  const { signIn, user } = useContext(AuthContext);

  function handleSignIn() {
    if (!email || !password) return;
    Keyboard.dismiss();
    signIn(email, password);
  }

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Form altura={height * 0.35}>
          <Ipunt
            placeholder=" Digite o e-mail"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <Ipunt
            placeholder=" Digite a senha"
            placeholderTextColor="#808080"
            style={{ fontSize: 15 }}
            onChangeText={pass => setSenha(pass)}
            value={password}
          />
          <ResetPasswordContent>
            <Text>
              Esqueci minha senha
            </Text>
          </ResetPasswordContent>
          <Buttom
            onPress={handleSignIn}
            altura={height * 0.08}
          >
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
