
import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import AuthContext from '../contexts/AuthContext'

const Login: React.FC = () => {
  const { signIn, user } = useContext(AuthContext);

  function handleSignIn() {
    signIn('marcos.rib.sousa@gmail.com', '1234');
  }
  return (
    <View>
      <Button title="Login" onPress={handleSignIn} />
    </View>
  );
};

export default Login;
