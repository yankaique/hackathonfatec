import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


import Home from './src/Home';
import Principal from './src/Principal';
import Dispositivo from './src/Dispositivo';
import Outros from './src/Outros';




const Navegador = createStackNavigator({
 
  Home:{
    screen:Home
  },
  Principal:{
    screen:Principal
  },
  Dispositivo:{
    screen:Dispositivo
  },
  Outros:{
    screen:Outros
  }



});

export default createAppContainer(Navegador);