import {View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react';

import {Header, CardSection, Button} from '../components/common'

class Search extends React.Component{

  render(){
    return(
      <View><Header headerText="Find Provider"/>
        <CardSection>
          <Button>Find Now</Button>
        </CardSection>
      </View>)
  }
  
}

export {Search}