import React, {Component} from 'react';
import {AsyncStorage,View, SafeAreaView} from 'react-native';


import {MenuButton,Header} from '../../components/common';
import theme from './../../utils/theme'
const headerTitleStyle = theme.headerTitleStyle

class UserSettings extends Component{
  
  static navigationOptions ={
     headerTitle:"Account", 
    headerStyle:{
        height:50,
        backgroundColor:theme.primaryColor.headerColor,
    },
    headerTitleStyle:{
      marginBottom:5,
      fontFamily:'Arial',
      fontSize:22,
      color:"#fafafa",
      fontWeight:'normal'
    },
}

    constructor(props){
        super(props)
        this.navigationHandler = this.navigation.bind(this)
        this.logoutHandle = this.logout.bind(this)
    }

    navigation(screen){
        return this.props.navigation.navigate(screen)
    }
    logout(){
        AsyncStorage.removeItem('userToken').then(()=>this.props.navigation.navigate('Auth'))
    }
    render(){
        return (
        <SafeAreaView>
          {/* <Header headerText='Profile'/> */}
            <View style={{marginTop:30}}>
            <MenuButton onPress={()=>this.navigationHandler("EditProfile")}
                iconName="user-circle"
                title="Edit Account"/>
              <MenuButton onPress={()=>this.navigationHandler("UserAppointments")}
                iconName="calendar-check"
                title="Upcoming Appointments"/>
              <MenuButton onPress={()=>this.navigationHandler("UserHistory")}
                iconName="history"
                title="View Service History"/>
              <MenuButton onPress={this.logoutHandle}
                iconName="sign-out-alt"
                title="Signout of Account"/>
            </View>
        </SafeAreaView>)
    }
}

export {UserSettings}
