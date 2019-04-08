import React from 'react';
import {Text ,View} from 'react-native';
import theme from '../../utils/theme';

const Header =(props) =>{
    const { textStyle, viewStyle } = styles;
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
           );
};

    const styles ={
        viewStyle:{
            backgroundColor: theme.primaryColor.headerColor,
            justifyContent:'center',       //moves it along y-axis
            alignItems:'center',
            height:50,
            shadowColor:'#D1DFFA',
            shadowOffset:{width:0, height:5}, //dimensions of the shadow
            shadowOpacity:0.2,
            elevation:3,
            position:'relative'
        },
        textStyle:{
            marginBottom:5,
            fontFamily:'Arial',
            fontSize:22,
            color:"#fafafa",
        }
    };

export { Header};
