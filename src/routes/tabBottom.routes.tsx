import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Rifas from '../pages/rifas';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

interface Object {
  color: string
}

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F6474F"
      inactiveColor="#000"
      shifting={true}
      barStyle={{ backgroundColor: '#FFF' }}
    >
       <Tab.Screen
        name="Home"
        component={Rifas}
        options={{
          tabBarLabel:<Text style={{fontSize: 15}}>Home</Text>,
          tabBarIcon: (activeColor: Object ) => {
           const {color} = activeColor;
            return (
              <Icon name="home" color={color } size={26} />
            )
          }
        }}
      />
      <Tab.Screen
        name="MinhasRifas"
        component={Rifas}
        options={{
          tabBarLabel:<Text style={{fontSize: 15}}>Minhas rifas</Text>,
          tabBarIcon: (activeColor: Object ) => {
           const {color} = activeColor;
            return (
              <Icon name="ticket" color={color  } size={26} />
            )
          }
        }}
      />
       <Tab.Screen
        name="Perfil"
        component={Rifas}
        options={{
          tabBarLabel:<Text style={{fontSize: 15}}>Perfil</Text>,
          tabBarIcon: (activeColor: Object ) => {
           const {color} = activeColor;
            return (
              <Icon name="user" color={color  } size={26} />
            )
          }
        }}
      />
    </Tab.Navigator>
  );
}