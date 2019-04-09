/* 
    form handles regular user login
*/
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, AsyncStorage,SafeAreaView} from 'react-native';
import { SocialIcon } from 'react-native-elements'
import axios from 'axios';

import { CardSection,Button, Input, Spinner } from '../../components/common'
import theme from './../../utils/theme';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.loginHandle = this.loginClickEvent.bind(this)
        this.changeTextHandle = this.changeText.bind(this)
        // this.btnClick = this.btnClick.bind(this)
    }

    static navigationOptions = {
        header: null
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
        axios.post('https://frozen-hamlet-87170.herokuapp.com/users/login',
                {
                  email:this.state.email,
                  password:this.state.password
                })
            .then((response)=>{
                    console.log(JSON.stringify(response.data.token))
                    // console.log(response.status)
                    console.log(response.data);
                    const userId = AsyncStorage.setItem('userId',response.data.userId);  //store id
                    // const userToken =AsyncStorage.setItem('userToken',response.data.token); //store token

                    this.setState({loading:false});
                    return this.props.navigation.navigate('App',{userId:response.data.userEmail})
                }).catch((err)=>{console.log(err);
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
        <SafeAreaView style={style.container}>
            <Text style={[theme.primaryTheme.headerText,{color:"#00539C"}]}>Self Care</Text>
            <Text style={[theme.primaryTheme.secondaryHeader,{color:"#00539C", marginBottom:10}]}>~The App~</Text>
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
        </SafeAreaView>
        )
    }
}

const style ={
    
    container :{
        alignContent:"center",
        justifyContent:"center",
        flex:1,
        marginLeft:20,
        marginRight:20
    }
}

export {LoginForm};