/*
form handles the login for the professional user
professional user has elevated privilages
professional user can login with social media account, as this user will need to verified
*/

import React from 'react';
import {View, Text,AsyncStorage} from 'react-native';
import {Button, CardSection, Input,Spinner} from '../../components/common'
import axios from 'axios';
import theme from './../../utils/theme';

class ProfessionalLoginForm extends React.Component{
    constructor(props){
        super(props)
    }

    static navigationOptions={
      header:null
    }

    state={
        email:'',
        password:'',
        errors:'',
        loading:false,
        disableButton:false
    }

    registerBtnClick=()=>{
        this.props.navigation.navigate("ProfessionalRegistration")
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
         axios.post('https://frozen-hamlet-87170.herokuapp.com/professionals/login',
                {
                  email:this.state.email,
                  password:this.state.password
                })
            .then((result)=>{
                console.log(result)
                if(result.status == 200){
                    const profId = result.data.professionalId
                    this.setState({loading:false})
                    AsyncStorage.setItem('professionalId',result.data.professionalId)
                    // AsyncStorage.setItem("userToken",result.data.token)
                    return this.props.navigation.navigate("ProfessionalNav")
                }
                alert("Incorrect credentials")
                this.setState({loading:false})
                return
            })
            .catch((error)=>{
                this.setState({loading:false})
                alert("Error occurred. Confirm you have a valid internet connection ")})    //need feedback
     }

    render(){
        return(
            <View style={style.containerStyle}>
              <Text style={[theme.primaryTheme.headerText,{color:theme.primaryTheme.colors.princessBlue}]}>Self Care</Text>
              <Text style={[theme.primaryTheme.secondaryHeader,{color:theme.primaryTheme.colors.princessBlue}]}>~The App~</Text>
           
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
            <CardSection>
                <Button onPress={()=>this.registerBtnClick() } >Create Professional Account</Button>
             </CardSection>
          
        </View>)
    }
}
const style ={
    containerStyle:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        marginTop:15,
        marginLeft:10,
        marginRight:10

    }
}
export {ProfessionalLoginForm};

