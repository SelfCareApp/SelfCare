/*
form handles the login for the professional user
professional user has elevated privilages
professional user can login with social media account, as this user will need to verified
*/

import React from 'react';
import {View, Text} from 'react-native';
import {Button, CardSection, Input} from '../../components/common'

class ProfessionalLoginForm extends React.Component{
    state={
        email:'',
        password:'',
        errors:'',
        loading:false,
    }

    renderLoginButton()
      //this renders the login button or the spinner 
     {
        return(
            <Button onPress={()=>this.props.navigation.navigate("ProfessionalNav")}>Login as Professional</Button>
        )
     }
    render(){
        return(
            <View style={style.containerStyle}>
              <Text style={style.textStyle}>Abantu</Text>
              <Text style={style.smallerText}>The People</Text>
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
            <CardSection>
                {this.renderLoginButton()}
            </CardSection>
        </View>)
    }
}
const style ={
    containerStyle:{
        alignItems:'center',
        // justifyContent:'center',
        flex:1,
        marginTop:15,
        marginLeft:10,
        marginRight:10

    },
    textStyle :{
        fontSize :35,
        textAlign:'center',
        fontWeight:'bold',
        paddingTop: 10,
        paddingBottom:10,
        color:'#00539C'
        
    },
    smallerText :{
        fontSize :12,
        textAlign:'center',
        fontWeight:'400',
        paddingBottom:16,
        color:'#00539C'
        
    }
}
export {ProfessionalLoginForm};

