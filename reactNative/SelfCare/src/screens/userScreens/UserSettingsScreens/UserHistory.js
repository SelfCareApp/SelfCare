import React, {Component} from 'react';
import {View,Text} from 'react-native';

class UserHistory extends Component{
    render(){
        return(<View>
           <Text style={style.textStyle}>Past Transactions</Text> 
        </View>)
    }
}

export {UserHistory}

const style ={
    textStyle:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'400',
        fontFamily:'Arial'
    }
}