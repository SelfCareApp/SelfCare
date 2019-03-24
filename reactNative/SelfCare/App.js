/* All app navigation will be held within the App.js file which 
    has the createAppContainer() from react-navigation
*/

//native component imports
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

//component import
import AuthLoadingScreen from './AuthLoadingScreen'

//importing the reg user in app navigator
import {RegUserAppStack, AuthStack,ProfessionalNavigator} from './src/navigation'

import {Provider} from 'react-redux';
import store from './src/store'

//this is what houses the whole application flow
const RootStack = createAppContainer(createSwitchNavigator(
  {
    ProfessionalNav:ProfessionalNavigator,
    AuthLoadingScreen:AuthLoadingScreen,
    Auth:AuthStack,
    App:RegUserAppStack,
  },{
    initialRouteName:'AuthLoadingScreen'
  })
);

import React,{Component} from 'react';

export default class App extends Component{
  render(){
    return (<Provider store = {store}>
              <RootStack />
            </Provider>)
  }
}