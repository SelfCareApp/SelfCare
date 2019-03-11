import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

//importing relevant screens
import {LoginForm,ProfessionalLoginForm, RegistrationForm} from './../screens/Authentication'

//switch navigator to allow for navigation between the reg user login screen and registration
const LogStack = createStackNavigator({Login:LoginForm, Register:RegistrationForm})

//this is this handle the switch between authenticating as a regular user or professional
const AuthStack = createBottomTabNavigator({"Client Login" :LogStack, "Login as Professional":ProfessionalLoginForm})

export {AuthStack}