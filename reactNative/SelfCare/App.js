import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import {  ActivityIndicator,  AsyncStorage,StatusBar,StyleSheet, View,} from 'react-native';

import {UserAccount, ProfessionalList,PromotionsScreen,Search, MainScreen} from './src/screens/userScreens'
import {LoginForm,ProfessionalLoginForm} from './src/screens/Authentication'
import theme from './src/utils/theme'
import Icon from 'react-native-vector-icons/FontAwesome5'

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AppStack = createBottomTabNavigator({

  Services:{
    screen:ProfessionalList,
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

const AuthStack = createBottomTabNavigator({RegularLogin:LoginForm, ProfessionalLogin:ProfessionalLoginForm})
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen:AuthLoadingScreen,
    Auth:AuthStack,
    App:AppStack,
    // InnerAppStack:InnerAppStack
  },{
    initialRouteName:'AuthLoadingScreen'
  })
);