import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'

const MenuButton=(props)=>{
  let {buttonStyle, textStyle} = style
  
  return(         
    <TouchableOpacity style={[buttonStyle,props.extraStyle]}
        onPress={props.onPress}
    >
      <Icon name={props.iconName} size={24} style={style.iconStyle}/>
      <Text style={style.textStyle}>{props.title}</Text>
    </TouchableOpacity>)
}

export {MenuButton}

const style ={
    buttonStyle :{
        backgroundColor: '#F0EDE5',
        borderBottomWidth :1,
        borderColor:'#dcdcdc',
        marginLeft:5,
        marginRight:5,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        padding:10
        
    },
    textStyle :{
        fontSize :17,
        marginLeft:10,
        fontFamily:'Rubik',
        // color :'#00539C',
        fontWeight:'400',
     
    },
    iconStyle:{
      marginLeft:10,
      marginRight:20
    }
  }