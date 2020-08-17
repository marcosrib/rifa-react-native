
import React, { useContext, useState } from 'react';
import { Dimensions, Keyboard, TextInput, KeyboardAvoidingView, View, Platform, Button, Image } from 'react-native';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

import AuthContext from '../../contexts/AuthContext'
import { heightPercentageToDP } from '../../utils/resize';


import {
  Container,
  Form,
  Buttom,
  ResetPasswordContent,
  InputContent,
  Footer,
  IpuntText,
  TextButton,
  Header,
  BorderLeft,
  Content,
  Input,
  TitleContent,
  Title,
  TextCreateAcount,
  CheckContent,
  CheckButton,
  Text,
  CheckContainer
} from './styles';



const { height } = Dimensions.get('window');

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [isFocusedEmail, setFocusedEmail] = useState<boolean>(false);
  const [isFocusedPassword, setFocusedPassword] = useState<boolean>(false);
  const [isSelected, setSelected] = useState(false);
  const { signIn, user } = useContext(AuthContext);

  function handleSignIn() {
    console.log();

    if (!email || !password) return;
    Keyboard.dismiss();
    // signIn(email, password);
  }



  function handleFocusEmail() {
    setFocusedEmail(true);
  }

  function handleBlurEmail() {
    if (!email) setFocusedEmail(false);
  }

  function handleFocusPassword() {
    setFocusedPassword(true);
  }

  function handleBlurPassword() {
    if (!email) setFocusedPassword(false);
  }

  function handleSelected() {
    setSelected(!isSelected)
  }

  return (

    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={-20}
      >
        <Header>
          <Text style={{ fontSize: heightPercentageToDP('2%'), color: '#FFF', }}>TrevoRifas</Text>
        </Header>


        <View style={{ height: heightPercentageToDP('60%'), padding: '10%', backgroundColor: '#E5E5E5' }}>

          <TitleContent>
            <Title>Fazer login</Title>
            <TextCreateAcount>Criar uma conta</TextCreateAcount>
          </TitleContent>
          <InputContent>
            {isFocusedEmail && <BorderLeft />}
            <IpuntText isFocused={isFocusedEmail} >
              E-mail
            </IpuntText>
            <Input
              onChangeText={text => setEmail(text)}
              onFocus={handleFocusEmail}
              onBlur={handleBlurEmail}
              underlineColorAndroid="transparent"
            />
          </InputContent>
          <InputContent>
            {isFocusedPassword && <BorderLeft />}
            <IpuntText isFocused={isFocusedPassword} >
              Senha
            </IpuntText>
            <Input
              onChangeText={text => setPassword(text)}
              onFocus={handleFocusPassword}
              onBlur={handleBlurPassword}
              underlineColorAndroid="transparent"
            />
          </InputContent>
          <CheckContainer>
            <CheckContent >
              <CheckButton isSelected={isSelected} onPress={handleSelected} >
                <Icon name="check" size={12} color="#FFF" />
              </CheckButton>
              <Text>Lembra-me</Text>
            </CheckContent>
            <Text>Esqueci minha senha</Text>
          </CheckContainer>
          <View style={{ height: heightPercentageToDP('20%') }}>
            <RectButton style={{
              marginTop: '7%',
              borderRadius: 8,
              height:  heightPercentageToDP('7.5%') ,
              backgroundColor: '#f9684f',
              justifyContent: 'center'
            }}
              onPress={handleSignIn} >
                <TextButton>Entrar</TextButton>
              </RectButton>
          </View>
        </View>




      </KeyboardAvoidingView>
    </Container>





  );
};

export default Login;
