import React from 'react';
import {TouchableOpacity ,Text} from 'react-native';

const Button =({onPress,children})=>{
    const {buttonStyle, textStyle} =styles;
   
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles ={
    buttonStyle :{
        flex:1, // gets it to fill as much content as it can
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth :1,
        borderColor:'#00539C',
        marginLeft:5,
        marginRight:5,

    },
    textStyle :{
        fontSize :14,
        alignSelf:'center',
        color :'#00539C',
        fontWeight:'600',
        paddingTop: 10,
        paddingBottom:10
    }
}

export {Button}