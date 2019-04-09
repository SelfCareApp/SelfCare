import React from 'react';
import {View,Text, SafeAreaView, TouchableOpacity,AsyncStorage} from 'react-native';

class Messages extends React.Component{
    constructor(props){
        super(props)
    }

    logout=()=>{
        AsyncStorage.multiRemove(["professionalId","userToken"])
            .then(()=>this.props.navigation.navigate("Auth"))
    }
    render(){
        return(
            <SafeAreaView>
              <View>
                <Text>Messages</Text>
                <TouchableOpacity onPress={this.logout} 
                  style={{padding:20, backgroundColor:"blue"}}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          )
    }
}

export {Messages}