/*
* this will handle the start screen navigator
*/
import React from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import {LoginForm, ProfessionalLoginForm }from './src/screens/Authentication';

const nav = createBottomTabNavigator({
   reguser: {screen:LoginForm},
    profUser:{screen:ProfessionalLoginForm}
})
const WelcomeNavigator =createAppContainer(nav)
export default WelcomeNavigator;