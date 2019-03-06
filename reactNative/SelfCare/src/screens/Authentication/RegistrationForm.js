import React from 'react';
import {View,Text} from 'react-native';

import {Card, CardSection,Input,Button} from '../../components/common'

const RegistrationForm =()=>{
    return(
        <View style={{flex:1, justifyContent:'center'}}>
            <View style={{marginBottom:10}}>
            <Text style={style.textStyle}>Abantu</Text>
            <Text style={style.smallerText}>The People</Text>
            </View>
            <CardSection>
                <Input placeholder='John' label='First Name: '/>
            </CardSection>
            <CardSection>
                <Input placeholder='Doe' label='Lastname : '/>
            </CardSection>
            <CardSection>
                <Input placeholder='the.selfcareapp@gmail.com' label='Email: '/>
            </CardSection>
            <CardSection>
                <Input placeholder='selfcare123' label='Password: ' secureTextEntry= {true}/>
            </CardSection>
            <CardSection>
                 <Input placeholder='selfcare123' label='Confirm Password: ' secureTextEntry= {true}/>
            </CardSection>          
            <CardSection>
                <Button onPress={()=>alert('Creating Account')}>Register</Button>
            </CardSection>
        </View>
    )
}
const style ={
    textStyle :{
        fontSize :30,
        textAlign:'center',
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom:10,
        color:'#00539C'
        
    },
    smallerText :{
        fontSize :15,
        textAlign:'center',
        fontWeight:'400',
        paddingBottom:16,
        color:'#00539C'
        
    }
}
export {RegistrationForm};