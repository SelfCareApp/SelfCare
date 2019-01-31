import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection,Header} from  '../components/common';
import {Button} from 'react-native-elements';


class MainScreen extends Component{
    render(){
        return (<View style={style.containerStyle}>
                        <Header headerText="Main Screen"/>
        </View>)
    }
}

const style ={
    containerStyle:{
        marginTop:10
    }
}
export default MainScreen;