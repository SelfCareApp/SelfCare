import React from 'react';
import {ActivityIndicator, View} from 'react-native'

const Spinner =(props) =>{
    return(
            <View style={style.spinnerStyle}>
              <ActivityIndicator size={props.size} ></ActivityIndicator>
            </View>
        )

}

const style = {
    spinnerStyle :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}

export {Spinner}