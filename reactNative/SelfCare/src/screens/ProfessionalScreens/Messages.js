import React,{Component} from 'react';
import {View,Text} from 'react-native';
import SocketIOClient from 'socket.io-client';

import theme from './../../utils/theme';
import {Header} from './../../components/common';
import SendMessageComponent from '../../components/sendMessage';

class Messages extends Component {
  constructor(props){
    super(props)
    this.updateMessageDataHandler = this.updateMessageData.bind(this)
    //intializing socket.io
    this.socket = SocketIOClient('localhost:3000');
    this.socket.on("new_message",(data)=>{
      console.log(data)
    })
  }
  state ={
    messageData:[] //handles the messages
  }
  
  updateMessageData(message){
    messages =this.state.messageData;
    messages.push(message)
    this.setState({messageData:messages});
  }

  render(){
    const messageData = this.state.messageData;
    console.log(messageData)
        return(
          <View style={{flex:1}}>
            <Header headerText={"Messages"}/>
            <View style={{flex:1,backgroundColor:'#fafafa'}}>
              <View style={{flex:1}}>
                 { messageData.length != 0 && ( 
                    messageData.map((message,index)=>{
                      return <View key={index} style={{margin:20,height:100, backgroundColor:'#cfd8dc', borderRadius:10}}>
                        <Text>{message}</Text></View>
                     })
                 )}  
              </View>
              {/* send message area */}
               <View style={{flex:1,justifyContent:'flex-end', margin:10,marginBottom:0}}>
                 <SendMessageComponent messageUpdate={this.updateMessageDataHandler} socket={this.socket}/>
               </View>
            </View>
          </View>
        )
    }
}

export {Messages}