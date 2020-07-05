import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { options } from './options';

import CreateRifa from '../pages/createRifa';
import RifaDetail from '../pages/rifaDetail';

const RifaStack = createStackNavigator();

const rifaRoutes: React.FC = () => (
  <RifaStack.Navigator initialRouteName='RifaDetail'>
    <RifaStack.Screen
      name="CreateRifa"
      component={CreateRifa}
      options={options("Cadastrar rifa", "17%")}
    />
    <RifaStack.Screen
      name="RifaDetail"
      component={RifaDetail}
      options={options("Detalhe", "25%")}
    />
  </RifaStack.Navigator>
);




export default rifaRoutes;