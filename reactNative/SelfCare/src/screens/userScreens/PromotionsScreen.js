import {View, Text} from 'react-native';
import React from 'react';
import {Header} from '../../components/common'

const PromotionsScreen = ()=>{
    return(
    <View style={{flex:1}}>
        <Header headerText="Promotions"/>
        <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>
                Currently no promotions in your area. Check again soon
            </Text>
        </View>
    </View>)
}

export {PromotionsScreen}