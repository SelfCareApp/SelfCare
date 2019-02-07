import React from 'react';
import { Text ,View} from 'react-native';

const Header =(props) =>{
    //destructuring

    const { textStyle, viewStyle } = styles;
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
           );
};

    const styles ={
        viewStyle:{
            backgroundColor: '#4F84C4',
            justifyContent:'center',       //moves it along y-axis
            alignItems:'center',
            height:70,
            paddingTop:25,  

            ////////adding a shadow ////
            shadowColor:'#00539C',
            shadowOffset:{width:0, height:5}, //dimensions of the shadow
            shadowOpacity:0.2,
            elevation:3,
            position:'relative'
        },
        textStyle:{
            marginTop:15,
            marginBottom:5,
            fontSize:20,
            color:'#F0EDE5',
            fontWeight:'bold'
        }
    };

export { Header};
