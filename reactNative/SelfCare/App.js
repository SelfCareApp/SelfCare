/* All app navigation will be held within the App.js file which 
    has the createAppContainer() from react-navigation
*/

//native component imports
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'

//component import
import {UserAccount, ProfessionalsScreen,PromotionsScreen,Search, MainScreen} from './src/screens/userScreens'
import {LoginForm,ProfessionalLoginForm, RegistrationForm} from './src/screens/Authentication'
import AuthLoadingScreen from './AuthLoadingScreen'

//stylesheet import
import theme from './src/utils/theme'



//navigation for professionals list and Professional account
const serviceStack = createSwitchNavigator({services:ProfessionalsScreen,main:MainScreen})

// this is the bottom tab once inside the app
const AppStack = createBottomTabNavigator({
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
          return <Icon name="hand-holding-usd" size={24} color={tintColor}/>
        }
          }
    },
    Account:{
      screen:UserAccount,
      navigationOptions:{
        tabBarIcon:({focused,tintColor})=>{
          return <Icon name="user" size={24} color={tintColor}/>
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

//this handles the switch from login screen to registration
const LogStack = createStackNavigator({Login:LoginForm, Register:RegistrationForm})
//this is this handle the switch between authenticating as a regular user or professional
const AuthStack = createBottomTabNavigator({RegularLogin:LogStack, ProfessionalLogin:ProfessionalLoginForm})

//this is what houses the whole application flow
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen:AuthLoadingScreen,
    Auth:AuthStack,
    App:AppStack,
  },{
    initialRouteName:'AuthLoadingScreen'
  })
);