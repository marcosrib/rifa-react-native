import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Initial from '../pages/initial';
import CreateUser from '../pages/createUser';


const AuthStack = createStackNavigator();


const options = (name: string, ml: string) => {
  const op = {
    headerTitle: name,
    headerTitleStyle: { textAlign: 'left', marginLeft: ml },
    headerLeft: () => (
      <TouchableOpacity style={{ paddingLeft: '30%', width: 60 }}>
        <Icon name="keyboard-backspace" size={30} color="black" />
      </TouchableOpacity>
    ),
  }
  return (
    op
  )
}

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator initialRouteName='CreateUser'>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={options("Entrar", "30%")}
    />
    <AuthStack.Screen
      name="Initial"
      component={Initial}
      options={{headerShown: false}}
    />
     <AuthStack.Screen
      name="CreateUser"
      component={CreateUser}
      options={options("Cadastrar usuário", "15%")}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;