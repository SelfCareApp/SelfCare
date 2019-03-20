import React,{Component} from 'react';
import {View,Text} from 'react-native';
import SocketIOClient from 'socket.io-client';

import theme from './../../utils/theme';
import {Header} from './../../components/common';
import {SendMessageComponent,MessageBubble} from '../../components';

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
                {/* message bubble */}
                {messageData.length != 0 && (
                  //first confirm that messageData has no messages
                  //only shows the bubble when state changes
                  messageData.map((message,index)=>{
                   return <MessageBubble message={message} index={index}/>
                  })
                )}
                
              </View>
              {/* send message area */}
               <View style={style.sendMessageContainer}>
                 <SendMessageComponent messageUpdate={this.updateMessageDataHandler} socket={this.socket}/>
               </View>
            </View>
          </View>
        )
    }
}

export {Messages}

const style ={
  sendMessageContainer:{
    //style for the send message component's area
    flex:1,
    justifyContent:'flex-end',
    margin:10,
    marginBottom:0
  }
}