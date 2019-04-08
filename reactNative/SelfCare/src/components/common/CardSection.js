import React from 'react';
import {View} from 'react-native';

const CardSection =(props) => {
    const additionalStyle = props.additionalStyle ? props.additionalStyle : {}
    return(
        <View style={[styles.containerStyle,additionalStyle]}>
            {props.children}
        </View>

    )
}

export {CardSection};

const styles ={
    containerStyle: {
        borderBottomWidth: 1,
        padding:5,
        backgroundColor :'#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor :'#ddd',
        position :'relative'
    },
    textContainer :{
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}