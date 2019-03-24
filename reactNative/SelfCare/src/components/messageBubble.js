import React,{Component} from 'react';
import {View,Text} from 'react-native';
import theme from '../utils/theme';

class MessageBubble extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {message, index} =this.props
         return ( 
           <View key={index}>
               <View style={style.containerStyle}>
                  <Text style={style.textStyle}>{message}</Text></View> 
           </View>)
    }
}

export {MessageBubble}

const style ={
    textStyle:{
      fontSize:20,
      padding:10

    },
    containerStyle:{
      margin:20,
      minHeight:60,
      backgroundColor:theme.primaryColor.messageBubble,
      borderRadius:10,
      marginRight:40,
      marginLeft:10
    }
}