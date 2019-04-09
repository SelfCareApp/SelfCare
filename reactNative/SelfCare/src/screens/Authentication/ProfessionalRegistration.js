import React,{Component} from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import theme from '../../utils/theme';

import {CardSection, Input,Button} from './../../components/common';

class ProfessionalRegistration extends Component{
    static navigationOptions = {
        header: null
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
                    <Button 
                      onPress={()=>alert("to be implemented")}
                    >
                      Start Making Money</Button>
                </CardSection>
            </View>
       </SafeAreaView>)
   }
}

export {ProfessionalRegistration}