import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';

import { options } from './options';

import CreateRifa from '../pages/createRifa';
import RifaDetail from '../pages/rifaDetail';
import Tabs from './tabBottom.routes';

const RifaStack = createStackNavigator();

const rifaRoutes: React.FC = () => (
  <RifaStack.Navigator initialRouteName='Tabs'>
    <RifaStack.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
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