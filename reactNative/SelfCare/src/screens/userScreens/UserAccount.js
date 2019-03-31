import React, {Component} from 'react';
import {AsyncStorage,View, TouchableOpacity,Text} from 'react-native';

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
            <View>
              <TouchableOpacity style={style.buttonStyle}>
                <Text style={style.buttonText}>Edit account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.buttonStyle}>
                <Text style={style.buttonText}>View Services History</Text>
              </TouchableOpacity>
              <CardSection >
                <Button onPress={ this.logoutHandle}>Logout</Button>
              </CardSection>
            </View>
        </View>)
    }
}

export {UserAccount}

const style = {
    buttonStyle:{
        padding:10,
        
    },
    buttonText:{
        textSize:24,
        marginLeft:10,
    }
}