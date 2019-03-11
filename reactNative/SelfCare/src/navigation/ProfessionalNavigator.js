import {createBottomTabNavigator} from 'react-navigation';
import {ProfessionalAccount,HomeScreen} from './../screens/ProfessionalScreens'
//professional in app navigator
const ProfessionalNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Account:ProfessionalAccount,
})

export {ProfessionalNavigator}