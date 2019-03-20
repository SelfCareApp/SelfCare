import React,{Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

class SendMessageComponent extends Component{
    constructor(props){
        super(props)
        this.messageUpdate = this.props.messageUpdate;
        this.socket = this.props.socket;
    }

    //this is the input box and the send button
    state ={
        messageText:""
      }
    
      click=(messageText)=>{
          this.messageUpdate(messageText);
        //this.socket.emit("new_message",{message:messageText})
      }
    
      onTextChange=(text)=>{
        this.setState({messageText:text})
      }
    render(){
        return (
           <View style={{flexDirection:'row',padding:5 }}>
              <TextInput autoCorrect={false} onChangeText={(text)=>{this.onTextChange(text)}} placeholder={"send message"} style={{fontSize:20, flex:4,borderRadius:10,backgroundColor:'#dcdcdc',padding:5}}/>
              <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>this.click(this.state.messageText)}>
                <Text style={{textAlign:'center'}} style={{padding:5}}><Icon name='arrow-circle-right' size={20} color={"#2196f3"}/></Text>
              </TouchableOpacity>
           </View>
        )
    }
}

export default SendMessageComponent