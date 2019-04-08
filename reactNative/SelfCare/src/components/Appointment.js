import React,{Component} from 'react';
import {View,Text} from 'react-native';
import theme from '../utils/theme';
import { CardSection } from './common';

const Appointment =(props)=>{
    return(
      <CardSection>
        <View style={style.imageStyle}>
          <Text style={style.imageText}>{props.professionalName.charAt(0)}</Text>
        </View>
        <View style={style.viewContainer}>
          <Text style={style.textHeader}>Date : {props.date}</Text>
          <Text style={style.textHeader}>Time : {props.time}</Text>
          <Text style={style.textHeader}>Professional: {props.professionalName}</Text>
        </View>
      </CardSection>
)
}

export {Appointment}

const style ={
    textHeader:{
      fontSize:20,
      fontFamily:'Arial',
      textAlign:'auto',
      marginLeft:20

    },
    viewContainer:{
      marginTop:15,
      padding:10,      
      // borderColor :theme.primaryColor.headerColor,
      // shadowColor:theme.primaryColor.headerColor,
      // shadowOffset:{width:1, height:5}, //dimensions of the shadow
      // shadowOpacity:0.3,
      // elevation:3,
      
    },
    imageStyle:{
      marginLeft:10,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      backgroundColor: theme.primaryColor.headerColor,
      width:70,
      height:70,
      borderRadius:35,
    },
    imageText:{
      fontSize:30,
      color:'#fff',
      fontFamily:'Times New Roman'
    }
}