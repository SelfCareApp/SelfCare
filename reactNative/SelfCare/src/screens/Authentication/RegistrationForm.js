import React,{Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import axios from 'axios';

import { CardSection,Input,Button} from '../../components/common'
import theme from '../../utils/theme';

class RegistrationForm extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.changeTextHandler = this.changeText.bind(this)
        this.regirstrationButtonClickedHandler = this.regirstrationButtonClicked.bind(this)
    }

    state ={
      firstName:'',
      password:'',
      lastName:'',
      confirmPassword:'',
      email:''
    }

    changeText =(updateValue)=>{
        //passes input to state
        //type: refers to the name of input(state)
        //input is the entered value
        this.setState(updateValue)
        
    }

    regirstrationButtonClicked =()=>{
       axios.post('https://frozen-hamlet-87170.herokuapp.com/users/signup',{
           firstName:this.state.firstName,
           lastName:this.state.lastName,
           email:this.state.email,
           password:this.state.password
       }).then((result)=>{
           if(result.status == 200){
             //const userToken =AsyncStorage.setItem('userToken',response.data.token)
             alert('Account created. lets get started')
             this.props.navigation.navigate("App") 
           }

       }).catch((err)=>{
           return alert(err)
       })
    }

    render()
        {return(
            <View style={{flex:1, justifyContent:'center'}}>
                <View style={{marginBottom:10}}>
                <Text style={[theme.primaryTheme.headerText,{color:theme.primaryTheme.colors.princessBlue}]}>Self Care</Text>
                <Text style={[theme.primaryTheme.secondaryHeader,{color:theme.primaryTheme.colors.princessBlue}]}>~The App~</Text>
                </View>
                <CardSection>
                    <Input placeholder='John'
                       label='First Name:'
                        onChangeText={(input)=>this.changeTextHandler({firstName:input})}/>
                </CardSection>
                <CardSection>
                    <Input 
                    placeholder='Doe'
                    label='Lastname : '
                    onChangeText = {(input)=>this.changeTextHandler({lastName:input})}
                    />
                </CardSection>
                <CardSection>
                    <Input placeholder='the.selfcareapp@gmail.com'
                     label='Email: '
                     onChangeText={(input)=>this.changeTextHandler({email:input})}/>
                </CardSection>
                <CardSection>
                    <Input placeholder='selfcare123'
                       label='Password: '
                       secureTextEntry= {true}
                       onChangeText ={(input)=>this.changeTextHandler({password:input})}
                       />
                </CardSection>
                <CardSection>
                    <Input placeholder='selfcare123'
                     label='Confirm Password: '
                     secureTextEntry= {true}
                     onChangeText={(input)=>this.changeTextHandler({confirmPassword:input})}
                     />
                </CardSection>          
                <CardSection>
                    <Button 
                      onPress={this.regirstrationButtonClickedHandler}
                    >
                      Register</Button>
                </CardSection>
            </View>
        )}
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