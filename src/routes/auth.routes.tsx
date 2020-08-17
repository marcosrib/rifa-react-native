import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { options } from './options';

import Login from '../pages/login';
import Initial from '../pages/initial';
import CreateUser from '../pages/createUser';


const AuthStack = createStackNavigator();


const AuthRoutes: React.FC = () => (

  <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
    <AuthStack.Screen
      name="Login"
      component={Login}
    />
    <AuthStack.Screen
      name="Initial"
      component={Initial}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="CreateUser"
      component={CreateUser}
      options={options("Cadastrar usuário", "15%")}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;