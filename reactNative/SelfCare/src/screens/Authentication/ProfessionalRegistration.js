import React,{Component} from 'react';
import {View, Text,SafeAreaView, AsyncStorage, Alert} from 'react-native';
import theme from '../../utils/theme';
import axios from 'axios';

import {CardSection, Input,Button} from './../../components/common';

class ProfessionalRegistration extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.changeTextHandler = this.changeText.bind(this)
        this.regirstrationHandler = this.regirstration.bind(this)
    }

    state={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    regirstration=()=>{
        axios.post('http://localhost:3000/professionals/signup',{
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password,
            latitude:43.653908,
            longitude:-79.384293 
        }).then((response)=>{
            if(response.status == 200){
                const userId = AsyncStorage.setItem('professionalId',response.data.professionalId);  //store id
              this.props.navigation.navigate("ProfessionalNav") 
            }
 
        }).catch((err)=>{
            return alert(err)
        })
     }  

     changeText =(updateValue)=>{
        //passes input to state
        //type: refers to the name of input(state)
        //input is the entered value
        this.setState(updateValue)
        
    }
 
    render(){
       return(
       <SafeAreaView>
            <View>
                <View style={{marginBottom:10}}>
                <Text style={[theme.primaryTheme.headerText,{color:theme.primaryTheme.colors.princessBlue}]}>Self Care</Text>
                <Text style={[theme.primaryTheme.secondaryHeader,{color:theme.primaryTheme.colors.princessBlue}]}>~The People~</Text>
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
                    <Button onPress={this.regirstrationHandler}>
                     Start Making Money</Button>
                </CardSection>
            </View>
       </SafeAreaView>)
   }
}

export {ProfessionalRegistration}