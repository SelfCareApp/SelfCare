import React,{Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import SocketIOClient from 'socket.io-client';


import {SendMessageComponent,MessageBubble} from '../../components/index';
import theme from '../../utils/theme';

class UserMessageScreen extends Component {
    componentWillMount(){
    }

    constructor(props){
        super(props);
        //passing the handler to update screen to component

        this.updateMessageDataHandler = this.updateMessageData.bind(this)
        this.sendMessageHandler = this.sendMessage.bind(this); //sending message

         this.professional = this.props.navigation.getParam("professional");
        //intializing socket.io
        this._bootstrapAsync().then((result)=>{
            this.setState({userId:result})

          });
        this.socket = SocketIOClient('https://frozen-hamlet-87170.herokuapp.com');
        this.socket.emit('newUser',{userId:this.state.userId})
        console.log("constructor",this.state.userId);
        this.socket.on("incomingMessage",(data)=>{
        this.updateMessageData(data.message)
        });
  }


 componentDidMount(){
    //receiving the professional object that contains the id of professional that will be used to send msg

  }


  state ={
     messageData:[], //handles the messages
     userId:''
   };


  _bootstrapAsync = async () => {
      //gets the userId (email) from the Async storage
        const userId = await AsyncStorage.getItem('userId');
        console.log(`userId => ${this.userId}`);
        return userId;

    };

  updateMessageData(message){
    messages =this.state.messageData;
    messages.push(message)
    this.setState({messageData:messages});
  }

  sendMessage=(message)=>{
      console.log("send message===",this.userId)
    this.socket.emit("message",{message:message, receiver:this.professional._id,sender:this.state.userId})
  };

  render(){
    const messageData = this.state.messageData;
    console.log(messageData)
        return(
          <View style={{flex:1,backgroundColor: theme.primaryTheme.container.backgroundColor}}>
            {/* <Header headerText={"Messages"}/> */}
            <View style={{flex:1,backgroundColor:'#fafafa'}}>
              <View style={{flex:1}}>
                {/* message bubble */}
                {messageData.length != 0 && (
                  //first confirm that messageData has no messages
                  //only shows the bubble when state changes
                  messageData.map((message,index)=>{
                   return <MessageBubble message={message} key={index}/>
                  })
                )}
                
              </View>
              {/* send message area */}
               <View style={style.sendMessageContainer}>
                 <SendMessageComponent messageUpdate={this.sendMessageHandler} socket={this.socket}/>
               </View>
            </View>
          </View>
        )
    }
}

export {UserMessageScreen}

const style ={
  sendMessageContainer:{
    //style for the send message component's area
    flex:1,
    justifyContent:'flex-end',
    margin:10,
    marginBottom:0
  }
}