import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card,Icon} from 'react-native-elements';

import { Button,CardSection} from  '../../components/common';
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
                 <Card title="@realSlim"
                    style={style.cardStyle}
                     image={{uri:'https://i.cbc.ca/1.4948998.1545062510!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/black-barber-blood-pressure.jpg'}} >
                      <Text style={{marginBottom: 20, textAlign:"center"}}>
                         Im like a Doctor, but for your hair.
                      </Text>
                 </Card>
                <CardSection>
                    <Button onPress={()=>this.props.navigation.navigate("BookingScreen",{professional})}>Book</Button>
                </CardSection>
                  <TouchableOpacity style={style.professionalActionView}>
                    <Text style={style.professionalActionText}>View Bio</Text>
                  </TouchableOpacity >
                  <TouchableOpacity style={style.professionalActionView}
                     onPress={()=>this.contactProfessionalHandler(professional)}
                  >
                    <Text style={style.professionalActionText}>Send Message</Text>
                  </TouchableOpacity >
                  <TouchableOpacity style={style.professionalActionView}>
                    <Text style={style.professionalActionText}>View Portfolio</Text>
                  </TouchableOpacity>
            </View>)
    }
}

const style ={
    containerStyle:{
        // marginTop:15
        
    },
    bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1
    },
    footerText: {
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:18,
    },
    professionalActionText:{
      fontSize:16,
      margin:5,
      padding:5,
      

    },
    professionalActionView:{
      backgroundColor:'#fafafa',
      marginLeft:10,
    }

};
export {ProfessionalsScreen};