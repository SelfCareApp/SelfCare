/*
form handles the login for the professional user
professional user has elevated privilages
professional user can login with social media account, as this user will need to verified
*/

import React from 'react';
import {View, Text} from 'react-native';
import {Header, CardSection, Input} from '../../components/common'

class ProfessionalLoginForm extends React.Component{
    render(){
        return(
        <View>
            <Header headerText="Professional Login"></Header>
            <View style={style.containerStyle}>
            <CardSection>
                <Input label="Email"
                    placeholder="selface@gmail.com"
                    />
            </CardSection>
            <CardSection>
                <Input label="password"
                    placeholder="securepassword123"
                    secureTextEntry
                    />
            </CardSection>
        </View>
        </View>)
    }
}
const style ={
    constainerStyle:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    }
}
export {ProfessionalLoginForm};

