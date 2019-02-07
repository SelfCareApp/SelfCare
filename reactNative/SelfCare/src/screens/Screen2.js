import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../components/common';
import ProfList from '../components/ProfListItem'

class Screen2 extends Component{
    render(){
            return(<View style={{flex:1}}><Header headerText="Services"/>
        <ProfList />
    </View>)
    }

}

export {Screen2}