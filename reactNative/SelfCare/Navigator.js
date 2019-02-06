/*
file handles the routing for the application
dependencies: react-navigator 
peer dependency : react-native-gesture-handler 
*/
import {Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'

import {MainScreen,Screen2} from './src/screens';

const BottomNav =createBottomTabNavigator({
    Main:MainScreen,
    Screen2:Screen2,
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        // return <Image style={{
        //   width: 24,
        //   height: 24,
        // }} source={IC_MASK}/>;
      },
    }),
    tabBarLabel: {
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      // showLabel: false,
    },
  }
);

const Navigator = createAppContainer(BottomNav)
export default Navigator;