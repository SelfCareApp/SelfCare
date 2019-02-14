import React from 'react';
import {View,Text} from 'react-native';

import {Card, CardSection,Input,Button} from '../../components/common'

const RegistrationForm =()=>{
    return(
        <Card>
            <View style={{"marginTop":100}}>
                <Text style={style.textStyle}>Self-Care the app</Text>
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
        </Card>
    )
}
const style ={
    textStyle :{
        fontSize :20,
        textAlign:'center',
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom:20,
        color:'#00539C'
        
    }
}
export {RegistrationForm};