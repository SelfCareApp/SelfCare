import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

const MenuButton=(props)=>{
  let {buttonStyle, textStyle} = style
  
  return(         
    <TouchableOpacity style={buttonStyle}
        onPress={props.onPress}
    >
      <Icon name={props.iconName} size={24} style={style.iconStyle}/>
      <Text style={style.textStyle}>{props.title}</Text>
    </TouchableOpacity>)
}

export {MenuButton}

const style ={
    buttonStyle :{
        backgroundColor: '#fff',
        borderBottomWidth :0.3,
        borderColor:'#dcdcdc',
        marginLeft:5,
        marginRight:5,
        height:50,
        flexDirection:'row',
        alignItems:'center'
        
    },
    textStyle :{
        fontSize :18,
        marginLeft:10,
        // color :'#00539C',
        fontWeight:'400',
     
    },
    iconStyle:{
      marginLeft:10,
      marginRight:20
    }
  }