import React, {Component} from 'react';
import {AsyncStorage,View, TouchableOpacity,Text} from 'react-native';

import { Header ,Button, CardSection, MenuButton} from '../../components/common';

class UserSettings extends Component{
    constructor(props){
        super(props)
        this.logoutHandle = this.logoutHandle.bind(this)
    }

    logoutHandle(){
        AsyncStorage.removeItem('userToken').then(()=>this.props.navigation.navigate('Auth'))
    }
    render(){
        return (
        <View>
          <Header headerText='Profile'/>
            <View style={{marginTop:30}}>
              <MenuButton title="Upcoming Appointments"/>
              <MenuButton title="Edit Account"/>
              <MenuButton title="View Service History"/>
              <MenuButton onPress={()=>this.logoutHandle} title="Signout of Account"/>
            </View>
        </View>)
    }
}

export {UserSettings}
