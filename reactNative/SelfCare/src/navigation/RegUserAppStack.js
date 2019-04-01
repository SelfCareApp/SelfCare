import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5'

import {UserSettings, ProfessionalsScreen,PromotionsScreen,
        Search, HomeScreen, BookingScreen, UserMessageScreen,ProfessionalPortfolio
       } from './../screens/userScreens'

       import {UserAppointments} from './../screens/userScreens/UserSettingsScreens'
import theme from './../utils/theme'

//navigation for professionals list and Professional account
const serviceStack = createStackNavigator({HomeScreen:HomeScreen,
                        ProfessionalAccount:ProfessionalsScreen,
                        MessageScreen:UserMessageScreen,
                        BookingScreen,
                        ProfessionalPortfolio,
                        UserAppointments  
                      })

//this is the bottom navigator once in the app
const RegUserAppStack = createBottomTabNavigator({
    Services:{
      screen:serviceStack,  //services stack in a stack navigator allowing for a switch in the pages between the professional list and mainscreen
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="home" size={24} color={tintColor}/>
        }
          }
  
    },  
    Search:{
        screen:Search,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="search" size={24} color={tintColor}/>
          }
            }
      },
      Promotions:{
        screen:PromotionsScreen,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="dollar-sign" size={24} color={tintColor}/>
          }
            }
      },
      Account:{
        screen:UserSettings,
        navigationOptions:{
          tabBarIcon:({focused,tintColor})=>{
            return <Icon name="user-cog" size={24} color={tintColor}/>
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
        showLabel: false,
        style: { backgroundColor: theme.primaryColor.backgroundColor},
  
      },
    }
  );

  export {RegUserAppStack}