/* 
    form handles regular user login
*/
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import axios from 'axios';

import { CardSection,Button, Input, Spinner } from '../../components/common'


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.loginHandle = this.loginClickEvent.bind(this)
        this.changeTextHandle = this.changeText.bind(this)
        // this.btnClick = this.btnClick.bind(this)
    }

    state ={
        password:'',
        email: '',
        error:'',
        loading:false      //state will be false , true , null
    };

    loginClickEvent = () => {
        //descr: function executed when login button clicked
        //also updates the state in the store
        //params:
        //return:
        this.setState({loading:true});
        axios.post('http://localhost:3000/users/login',
                {
                  email:this.state.email,
                  password:this.state.password
                })
            .then((response)=>{
                    console.log(JSON.stringify(response.data.token))
                    // console.log(response.status)
                    console.log(response.data.userId);
                    const userId = AsyncStorage.setItem('userId',response.data.userEmail);  //store id
                    const userToken =AsyncStorage.setItem('userToken',response.data.token); //store token
                }).then(()=>{
                        this.setState({loading:false});
                        return this.props.navigation.navigate('App')
                      })
                    .catch((err)=>{console.log(err);
                        this.setState({loading:false});
                        alert(err.message)
                        })
    };

    changeText =(updateValue)=>{
        //passes input to state
        //type: refers to the name of input(state)
        //input is the entered value
        this.setState(updateValue)
        
    };

    renderLoginButton(){
        //descr: decides on whether load login button or spinner
        //params:
        //return: button or spinner
        if(this.state.loading){
            return (<Spinner size="large" /> ) 
        }else if(this.state.loading == false){
            // return (<Button onPress={this.loginHandle}>Login</Button>)
            return (<Button onPress={this.loginClickEvent}>Login</Button>)
        }
    }

    registerBtnClick(){
        //handles the click event for register btn
        return this.props.navigation.navigate('Register')
    }
    render(){
        //console.log(this.props.navigation.handler)
        return(
        <View style={style.container}>
            <Text style={style.textStyle}>Abantu</Text>
            <Text style={style.smallerText}>The People</Text>
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
                  onChangeText={(email)=>{this.changeTextHandle({email})}}
                />
            </CardSection>
            <CardSection>
                <Input 
                  label='password'
                  placeholder='password123'
                  secureTextEntry= {true}
                  onChangeText ={(password)=>this.changeTextHandle({password})}
                />
            </CardSection>
            <CardSection>
                {this.renderLoginButton()}
            </CardSection>
             <CardSection>
                <Button onPress={()=>this.registerBtnClick() } >Dont have an account ?</Button>
             </CardSection>
        </View>
        )
    }
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
        
    },
    container :{
        alignContent:"center",
        // justifyContent:"center",
        flex:1,
        marginLeft:10,
        marginRight:10
    }
}

export {LoginForm};