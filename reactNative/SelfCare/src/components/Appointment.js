import React,{Component} from 'react';
import {View,Text} from 'react-native';
import theme from '../utils/theme';
import { CardSection } from './common';
import moment from 'moment'

const Appointment =(props)=>{
    return(
      <CardSection>
        <View style={style.imageStyle}>
        <Text style={style.imageText}>{(moment(props.date,"YYY/MM/DD").format("DD")).toUpperCase()}</Text>
          <Text style={style.imageText}>{(moment(props.date,"YYY/MM/DD").format("MMMM")).toUpperCase()}</Text>
        </View>
        <View style={style.viewContainer}>
          {/* <Text style={style.textHeader}>Date : {props.date}</Text> */}
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
      fontFamily:'Rubik',
      marginLeft:20,
      textAlign:'right'

    },
    viewContainer:{
      marginTop:15,
      padding:10, 
      flex:4
      
    },
    imageStyle:{
      marginLeft:10,
      flex:1,
      flexDirection:'column'
    },
    imageText:{
      alignSelf:'center',
      textAlign:'center',
      fontSize:20,
      fontWeight:'400',
      color:'#000',
      fontFamily:'Anton',

    }
}