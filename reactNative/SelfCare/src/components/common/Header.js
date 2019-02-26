import React from 'react';
import { Text ,View} from 'react-native';
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
            height:70,
            paddingTop:25,
            marginBottom:5, 

            ////////adding a shadow ////
            shadowColor:'#D1DFFA',
            shadowOffset:{width:0, height:5}, //dimensions of the shadow
            shadowOpacity:0.2,
            elevation:3,
            position:'relative'
        },
        textStyle:{
            marginTop:15,
            marginBottom:5,
            fontSize:20,
            color:"#fafafa",
        }
    };

export { Header};
