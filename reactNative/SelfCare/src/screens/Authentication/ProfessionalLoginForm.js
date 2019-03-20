/*
form handles the login for the professional user
professional user has elevated privilages
professional user can login with social media account, as this user will need to verified
*/

import React from 'react';
import {View, Text,AsyncStorage} from 'react-native';
import {Button, CardSection, Input,Spinner} from '../../components/common'
import axios from 'axios';

class ProfessionalLoginForm extends React.Component{
    constructor(props){
        super(props)
    }

    state={
        email:'',
        password:'',
        errors:'',
        loading:false,
        disableButton:false
    }

    renderLoginButton()
      //this renders the login button or the spinner 
     {
         if(this.state.loading){
            return <Spinner />
         }
        return(
            <Button onPress={()=>this.login()}>Login as Professional</Button>
        )
     }

      login=()=>{
          this.setState({loading:true})
         axios.post('http://localhost:3000/professionals/login',
                {
                  email:this.state.email,
                  password:this.state.password
                })
            .then((result)=>{
                console.log(result)
                if(result.status == 200){
                    return this.props.navigation.navigate("ProfessionalNav")
                }
                this.setState({loading:false})
                return
            })
            .catch((error)=>{
                this.setState({loading:false})
                console.log('error occured')})    //need feedback
     }

    render(){
        return(
            <View style={style.containerStyle}>
              <Text style={style.textStyle}>Abantu</Text>
              <Text style={style.smallerText}>The People</Text>
            <CardSection>
                <Input label="Email"
                    placeholder="selface@gmail.com"
                    onChangeText={(email)=>this.setState({email})}
                    />
            </CardSection>
            <CardSection>
              <Input label="password"
                 placeholder="securepassword123"
                 secureTextEntry
                 onChangeText={(password)=>this.setState({password})}
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

