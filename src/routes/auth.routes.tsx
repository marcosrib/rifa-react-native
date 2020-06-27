import React from 'react';
import Login from '../pages/login';
import { TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();




const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{
        headerTitle: 'Entrar',
        headerTitleStyle: { textAlign: 'left', marginLeft: '30%' },
        headerLeft: () => (
          <TouchableOpacity style={{paddingLeft:'30%', width:60}}>
            <Icon name="keyboard-backspace" size={30} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;