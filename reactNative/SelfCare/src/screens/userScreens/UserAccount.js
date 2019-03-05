import React, {Component} from 'react';
import {AsyncStorage,View} from 'react-native';

import { Header ,Button, CardSection} from '../../components/common';

class UserAccount extends Component{
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
            <Header headerText='Profile' />
            <CardSection >
                <Button onPress={ this.logoutHandle}>Logout</Button>
            </CardSection>
        </View>)
    }
}

export {UserAccount}