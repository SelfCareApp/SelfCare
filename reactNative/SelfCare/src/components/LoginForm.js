import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

import {Card, CardSection,Button, Input, Spinner } from './common'

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.loginHandle = this.loginClickEvent.bind(this)
        
    }

    state ={
        password:'',
        email: '',
        error:'',
        loading:false       //state will be false , true , null
    }

    loginClickEvent(){
        //descr: this handles the login button click event
        //params:
        //return:
        this.setState({loading:true});
        axios.post('http://localhost:3000/api/user/login',{email:this.state.email})
                .then((response)=>{
                        console.log(JSON.stringify(response.data))
                        console.log(response.status)
                    })
                      .then(this.setState({loading:false}))
                         .catch((err)=>{console.log(err);
                            this.setState({loading:false})
                            alert(err)
                            })
    }

    renderLoginButton(){
        //descr: decides on whether load login button or spinner
        //params:
        //return: button or spinner
        if(this.state.loading){
            return (<Spinner size="large"></Spinner> ) 
        }else if(this.state.loading == false){
            return (<Button onPress={this.loginHandle}>Login</Button>)
        }
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
                    {this.renderLoginButton()}
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