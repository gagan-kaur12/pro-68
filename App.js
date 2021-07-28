
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import facebook from './screens/fb';
import instagram from './screens/in';

export default class App extends React.Component {
  render(){
  return (
     <AppContainer/>
  );
}
}
const TabNavigator =createBottomTabNavigator({
  Facebook : {screen:facebook},
  Instagram : {screen:instagram}
});

const AppContainer = createAppContainer(TabNavigator);
