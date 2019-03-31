import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card,Icon} from 'react-native-elements';

import { Button,CardSection,MenuButton} from  '../../components/common';
import theme from './../../utils/theme'
import { TouchableOpacity } from 'react-native-gesture-handler';

class ProfessionalsScreen extends Component{
   constructor(props){
        super(props);
        this.contactProfessionalHandler = this.contactProfessional.bind(this)
    }

    static navigationOptions =({navigation})=>{
       const { params= {}} = navigation.state
        return ({headerTitle:`${params.professional.firstName}'s Account`, 
        headerStyle:{
            backgroundColor:theme.primaryColor.headerColor
        },
        headerTintColor:"#fff"})
    };
 

    component1 = () => <Icon type='MaterialIcons' name="person" />
    component2 = () => <Icon type="MaterialIcons" name="message" />
    component3 = () => <Icon type="MaterialIcons" name="photo-library" />
    component4 = () => <Icon type="MaterialIcons" name="map" />


    contactProfessional=(professional)=>{
        //message button used to switch to prof message screen
        return this.props.navigation.navigate("MessageScreen",{professional:professional})
    };

    render(){
        //getting the professional Id from the previous page(HomeScreen)
        const professional = this.props.navigation.getParam('professional');
        console.log(`Professional => ${JSON.stringify(professional)}`)
        buttons =[{element:this.component1},{element:this.component2},{element:this.component3},{element:this.component4}]
        return (
            <View style={style.containerStyle}>
                {/* <Header headerText="Professionals" /> */}
                 <Card title={this.props.navigation.getParam("professional").firstName}
                     
                     image={{uri:'https://i.cbc.ca/1.4948998.1545062510!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/black-barber-blood-pressure.jpg'}} >
                      <Text style={{marginBottom: 20, textAlign:"center"}}>
                         Im like a Doctor, but for your hair.
                      </Text>
                 </Card>
                {/* <Card style={{height:40}}>
                    <Button onPress={()=>this.props.navigation.navigate("BookingScreen",{professional})}>Book</Button>
                </Card> */}
                <View style={{marginTop:20}}>
                  <MenuButton title="Schedule Appointment"
                    onPress={()=>this.props.navigation.navigate("BookingScreen",{professional})}
                  />
                    <MenuButton
                      title="View Account"
                    />
                    <MenuButton
                      onPress={()=>this.contactProfessionalHandler(professional)}
                      title="Send Message"
                    />                    
                    <MenuButton title="View Portfolio"/>
                </View>
            </View>)
    }
}

const style ={
    containerStyle:{
      // backgroundColor:"#fffffa",
      flex:1
    },
    professionalButtons:{
      margin:10,
      marginTop:10,
      paddingBottom:5,
      borderBottomWidth:0.5,
      borderColor :'#ddd',
      backgroundColor :'#fff',


    },
    textStyle:{
      fontSize:16,
      marginLeft:20,
      fontWeight:'400'
    }

};
export {ProfessionalsScreen};