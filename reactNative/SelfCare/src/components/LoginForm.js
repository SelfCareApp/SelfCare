import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

import {Card, CardSection,Button, Input} from './common'

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.loginHandle = this.login.bind(this)
    }

    state ={
        password:'',
        email: '',
        error:'',
        loading:false
    }


    login(){
        //params:
        //return:
        axios.post('http://localhost:3000',{email:this.state.email}).then(
            function(response){
                return response;
            }).catch((err)=>{console.log(err);
                    alert("failed to connect")
                })
    }

    render(){
        return(
            <Card>
                <View style={{"marginTop":100}}>
                    <Text style={style.textStyle}>Self Care App</Text>
                </View>
                <CardSection>
                    <Input label='Email'
                            placeholder='selfcare@gmail.com'
                            value={this.state.email}
                            onChangeText={(email)=>{this.setState({email})}}
                            />
                </CardSection>
                 <CardSection>
                    <Input label='password'
                      placeholder='password123'
                      secureTextEntry= {true}
                      />
                 </CardSection>
                <CardSection>
                    <Button onPress={this.loginHandle}>Login</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.props.handle}>Dont have an account ?</Button>
                </CardSection>
            </Card>
        )
    }
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

export default LoginForm;