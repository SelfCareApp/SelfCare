/* 
    form handles regular user login
*/
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { SocialIcon, Icon } from 'react-native-elements'
import axios from 'axios';

import {Card, CardSection,Button, Input, Spinner } from '../../components/common'

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
    };

    loginClickEvent(){
        //descr: function executed when login button clicked
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
            // return (<Button onPress={this.loginHandle}>Login</Button>)
            return (<Button onPress={this.props.loginHandle}>Login</Button>)
        }
    }

    render(){
        //console.log(this.props.navigation.handler)
        return(
        <View style={style.container}>
            <Text style={style.textStyle}>Self Care App</Text>
                <View style={{marginBottom:20}}>
                <TouchableOpacity>
                    <SocialIcon type="facebook" button title="Sign In With Facebook"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SocialIcon type="google-plus-official" button title="Sign In With Google"/>
                </TouchableOpacity>
                </View>
            <CardSection>
                <Input
                  label='Email'
                  placeholder='selfcare@gmail.com'
                  value={this.state.email}
                  onChangeText={(email)=>{this.setState({email})}}
                />
            </CardSection>
            <CardSection>
                <Input 
                  label='password'
                  placeholder='password123'
                  secureTextEntry= {true}
                />
            </CardSection>
            <CardSection>
                {this.renderLoginButton()}
            </CardSection>
             <CardSection>
                <Button onPress={this.props.registrationHandle}>Dont have an account ?</Button>
             </CardSection>
        </View>
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
        
    },
    container :{
        alignContent:"center",
        justifyContent:"center",
        flex:1
    }
}

export {LoginForm};