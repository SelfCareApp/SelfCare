import React, {Component} from 'react';
import {AsyncStorage,View, TouchableOpacity,Text} from 'react-native';

import { Header ,Button, CardSection, MenuButton} from '../../components/common';

class UserSettings extends Component{
    constructor(props){
        super(props)
        this.navigationHandler = this.navigation.bind(this)
        this.logoutHandle = this.logoutHandle.bind(this)
    }

    navigation(screen){
        return this.props.navigation.navigate(screen)
    }
    logoutHandle(){
        AsyncStorage.removeItem('userToken').then(()=>this.props.navigation.navigate('Auth'))
    }
    render(){
        return (
        <View>
          <Header headerText='Profile'/>
            <View style={{marginTop:30}}>
              <MenuButton onPress={()=>this.navigationHandler("UserAppointments")}
                title="Upcoming Appointments"/>
              <MenuButton onPress={()=>this.navigationHandler("UserAccount")}
                title="Edit Account"/>
              <MenuButton onPress={()=>this.navigationHandler("UserAccount")}
                title="View Service History"/>
              <MenuButton onPress={()=>this.logoutHandle} title="Signout of Account"/>
            </View>
        </View>)
    }
}

export {UserSettings}
