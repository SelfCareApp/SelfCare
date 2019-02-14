/*
file handles the routing for the application
dependencies: react-navigator 
peer dependency : react-native-gesture-handler 
*/
import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {MainScreen,Screen2,Screen3,Screen4} from './src/screens';
import theme from './src/utils/theme'

const BottomNav =createBottomTabNavigator({

  Services:{
    screen:Screen2,
    navigationOptions:{
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="cut" size={24} color={tintColor}/>
      }
        }

  },  
  Main:{
      screen:MainScreen,
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="home" size={24} color={tintColor}/>
        }
          }
    },
    Temp:{
      screen:Screen3,
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="cut" size={24} color={tintColor}/>
        }
          }
    },
    Promotions:{
      screen:Screen4,
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="search-dollar" size={24} color={tintColor}/>
        }
          }
    }
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
      },
    }),
    tabBarLabel: {
    },
    tabBarOptions: {
      activeTintColor: theme.primaryColor.selectedIcon,
      inactiveTintColor: theme.primaryColor.iconColor,
      // showLabel: false,
      style: { backgroundColor: theme.primaryColor.backgroundColor},

    },
  }
);

const Navigator = createAppContainer(BottomNav)
export default Navigator;