import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';

import {MenuButton} from  '../../components/common';
import theme from './../../utils/theme'

class ProfessionalsScreen extends Component{
   constructor(props){
        super(props);
        this.navigationHandler = this.navigation.bind(this)
    }

    static navigationOptions =({navigation})=>{
       const { params= {}} = navigation.state
        return ({headerTitle:`${params.professional.firstName}'s Account`, 
        headerStyle:{
          height:50,
          backgroundColor:theme.primaryColor.headerColor,
      },
      headerTitleStyle:{
        marginBottom:5,
        fontFamily:'Rubik',
        fontWeight:'600',
        fontSize:22,
        color:"#fafafa",
      }
    })
    };

    navigation=(screen,professional)=>{
        //function that handles the navigation
        return this.props.navigation.navigate(screen,{professional:professional})
    };

    render(){
        //getting the professional Id from the previous page(HomeScreen)
        const professional = this.props.navigation.getParam('professional');
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
                    onPress={()=>this.navigationHandler("BookingScreen",professional)}
                  />
                    <MenuButton
                      title="View Account"
                    />
                    <MenuButton
                      onPress={()=>this.navigationHandler("MessageScreen",{professional})}
                      title="Send Message"
                    />                    
                    <MenuButton onPress={()=>this.navigationHandler("ProfessionalPortfolio",{professional})}
                     title="View Portfolio"/>
                </View>
            </View>)
    }
}

const style ={
    containerStyle:{
      backgroundColor: theme.primaryTheme.container.backgroundColor,
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