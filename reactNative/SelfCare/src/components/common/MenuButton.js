import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const MenuButton=(props)=>{
  let {buttonStyle, textStyle} = style
  
  return(         
    <TouchableOpacity style={buttonStyle}
        onPress={props.onPress}
    >
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
        
    },
    textStyle :{
        fontSize :18,
        marginLeft:10,
        // color :'#00539C',
        fontWeight:'400',
        paddingTop: 10,
        paddingBottom:10
    }
  }