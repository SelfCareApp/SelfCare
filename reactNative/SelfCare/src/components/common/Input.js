import React from 'react';
import {TextInput, View , Text} from 'react-native';


const Input =({label, placeholder, secureTextEntry, onChangeText}) =>{
    return (
        <View style={style.containerStyle}>
            <Text style={style.labelStyle}>{label}</Text>
            <TextInput placeholder={placeholder}
                       style={style.inputStyle}
                       autoCorrect = {false}
                       secureTextEntry ={secureTextEntry}   //this is to hide the enter data
                       onChangeText ={onChangeText}
            />
        </View>
    )
}

const style = {
    //flex -> is used to proportion available space in a container
    inputStyle: {
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,   //how much space is between each line
        flex:2
    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',    //creates row in the container to 
        alignItems:'center'
    }
    
};
export {Input}