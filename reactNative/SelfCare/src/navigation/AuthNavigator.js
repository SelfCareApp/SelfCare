import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';

//importing relevant screens
import {LoginForm,ProfessionalLoginForm, RegistrationForm} from './../screens/Authentication'
import EntryScreen from './../screens/entryScreen';

//switch navigator to allow for navigation between the reg user login screen and registration
const LogStack = createStackNavigator({Login:LoginForm, Register:RegistrationForm})

//this is this handle the switch between authenticating as a regular user or professional
const AuthStack = createStackNavigator({EntryScreen,LogStack,ProfessionalLoginForm})

export {AuthStack}