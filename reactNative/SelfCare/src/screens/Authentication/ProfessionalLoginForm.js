/*
form handles the login for the professional user
professional user has elevated privilages
professional user can login with social media account, as this user will need to verified
*/

import React from 'react';
import {View, Text} from 'react-native';

class ProfessionalLoginForm extends React.Component{
    render(){
        return(<View>
            <Text>This is the Professional Login Form</Text>
        </View>)
    }
}

export {ProfessionalLoginForm};