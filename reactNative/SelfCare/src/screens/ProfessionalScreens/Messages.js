import React,{Component} from 'react';
import {View, Text} from 'react-native';
import theme from './../../utils/theme'

import {Header} from './../../components/common'
class Messages extends Component {
    render(){
        return(
          <View>
            <Header headerText={"Messages"}/>

          </View>
        )
    }
}

export {Messages}