import {createBottomTabNavigator} from 'react-navigation';
import {Account,HomeScreen,Messages,Settings, Portfolio,Booking} from './../screens/ProfessionalScreens'

import React from 'react';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Badge} from 'react-native-elements';

import theme from './../utils/theme'
//professional in app navigator
const ProfessionalNavigator = createBottomTabNavigator({
    Home: {
        screen:Booking,
        navigationOptions:{
            tabBarIcon:({focused,tintColor})=>{
              return (<View style={{flexDirection:'row'}}><Icon name="calendar-alt" size={24}/><Badge value="5" status="success" containerStyle={{top:-10}}/></View>)
            }
              }
    },
    // Messages:{
    //     screen:Messages,
    //     navigationOptions:{
    //         tabBarIcon:({focused,tintColor})=>{
    //             return (<View style={{flexDirection:'row'}}><Icon name="envelope" size={24} /><Badge value="2" status="success" containerStyle={{top:-10}}/></View>)
    //         }
    //     }
    // }, 
    Portfolio: {
      screen:Portfolio,
      navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="image" size={24}/>
          }
            }
  },
    Settings:{
      screen:Settings,
      navigationOptions:{
          tabBarIcon:()=>{
             return <Icon name="user" size={24}/>
          }
      }
  }
},
//navigation options
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
      showLabel: false,
     //style: { backgroundColor: theme.primaryColor.backgroundColor},

    },
  }
)

export {ProfessionalNavigator}