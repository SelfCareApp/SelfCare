/*
file handles the routing for the application
dependencies: react-navigator 
peer dependency : react-native-gesture-handler 
*/
import React,{Component} from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {MainScreen,Screen2,Screen3,Screen4} from './src/screens';
import LoginForm from './src/components/LoginForm';


const BottomNav =createBottomTabNavigator({
  Screen2:{
    screen:LoginForm,
    navigationOptions:{
      tabBarIcon:({focused,tintColor})=>{
        return <Icon name="info" size={24} color={tintColor}/>
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
    Screen3:{
      screen:Screen3,
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="info" size={24} color={tintColor}/>
        }
          }
    },
    Screen4:{
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
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      // showLabel: false,
      style: { backgroundColor: '#F8F8F8'},

    },
  }
);

const Navigator = createAppContainer(BottomNav)
export default Navigator;