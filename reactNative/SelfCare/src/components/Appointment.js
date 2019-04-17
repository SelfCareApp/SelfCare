import React,{Component} from 'react';
import {View,Text} from 'react-native';
import theme from '../utils/theme';
import moment from 'moment'

const Appointment =(props)=>{
    return(
      <View style={{flex:1,paddingTop:10, flexDirection:"row"}}>
        <View style={style.dateContainer}>
        <Text style={style.dateText}>{(moment(props.date,"YYY/MM/DD").format("DD")).toUpperCase()}</Text>
          <Text style={style.dateText}>{(moment(props.date,"YYY/MM/DD").format("MMMM")).toUpperCase()}</Text>
        </View>
        <View style={style.viewContainer}>
          {/* <Text style={style.textHeader}>Date : {props.date}</Text> */}
          <Text style={style.textHeader}>Time : {props.time}</Text>
          <Text style={style.textHeader}>With: {props.professionalName}</Text>
        </View>
      </View>
)
}

export {Appointment}

const style ={
    textHeader:{
      fontSize:20,
      fontFamily:'Rubik',
      marginLeft:20,
      textAlign:'center'

    },
    viewContainer:{
      marginTop:15,
      // padding:10, 
      flex:3,
      alignSelf:'center',
      justifyContent:'center'
      
    },
    dateContainer:{
      paddingLeft:20,
      flex:1,
      alignSelf:'center',
      justifyContent:'center',
      flexDirection:'column'
    },
    dateText:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'400',
      color:'#000',
      fontFamily:'Anton',

    }
}