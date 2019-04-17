import React,{Component} from 'react';
import {View,Text,TouchableOpacity,TextInput, SafeAreaView,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios';

import {CardSection,Input} from './../common'
import theme from '../../utils/theme';
class ContactUsForm extends Component{
    constructor(props){
        super(props);
        this.user = ""
        //user is an object where key is type of user
      }

      componentDidMount(){
         this.user = this.props.user
      }
    //this is the input box and the send button
    state ={
        subject:"",
        cc:"",
        from:"",  //send userId/profId
        to:"the.selfcareapp@gmail.com",
        feedback:""
      };
      
      sendMessage=()=>{
        const {subject, cc ,to, feedback} = this.state
        console.log(subject)
          if(this.user.professional){
              axios.post("http://localhost:3000/professionals/contactUs",{
                subject:subject,
                cc:cc,
                from: this.user.professional,
                to:to,
                feedback:feedback
              }).then((response)=>{
                   this.props.hide()
              }).catch(error=>{
                console.log('something went wrong')
              })
          }
      }
      changeText=(input)=>{
        this.setState(input)
      };
    render(){
        return (
      <View>
          <SafeAreaView style={style.modalContainer}>
          <View style={style.modalHeader}>
            <View style={style.modalButton}>
             <TouchableOpacity onPress={()=>this.props.hide()}>
               <Text style={style.buttonText}>Cancel</Text>
             </TouchableOpacity>
            </View>
            <View style={{flex:2}}>
               <Text style={style.headerStyle}>Contact Us</Text>
            </View>
            <View style={style.modalButton}>
               <TouchableOpacity onPress={this.sendMessage}>
                <Text style={[style.buttonText,{color:theme.primaryTheme.colors.princessBlue}]}>Send</Text>
               </TouchableOpacity>
            </View>
           </View>
         </SafeAreaView>
         <View>
           <CardSection>
             <Input label="To: "
                 editable={false}
                 value="the.selfcareapp@gmail.com"
              />
           </CardSection>
           <CardSection>
             <Input label="CC: "
                placeholder="self@gmail.com"
                onChangeText={(input)=>this.changeText({cc:input})}
              />
           </CardSection>
           <CardSection>
             <Input label="Subject:"
                placeholder="attention ..."
                onChangeText={(input)=>this.changeText({subject:input})}
             />
           </CardSection>
           <CardSection>
             <TextInput
             onChangeText={(input)=>this.changeText({feedback:input})}
             style={style.inputStyle}
             label="Feedback:"
             multiline = {true}
             autoCapitalize={"none"}
             autoCorrect={false}
             numberOfLines={10}
             placeholder={"Feed back"}
             height={200}
             />
           </CardSection>
         </View>
      </View>
        )
    }
}

export {ContactUsForm}

const style ={
  headerStyle:{
    fontFamily:'Rubik',
    fontSize:17,
    fontWeight:'500',
    marginBottom:10,
    textAlign:'center'
   
  },
  constainerStyle:{
    // paddingTop:10,
    paddingLeft:30,
    paddingRight:30,
    flex:1
  },
  headerContainer:{
    paddingTop:20,
    paddingLeft:5,
  },
  modalContainer:{
    backgroundColor: "#fafafa"
  },
  modalHeader:{
    // flex:4,
    flexDirection:'row',
    margin:10,
    paddingLeft:10,
    height:30,
    backgroundColor:"#fafafa"
  },
  modalButton:{
    flex:1,
    width:50
  },
  buttonText:{
    fontFamily:'rubik',
    fontSize:17,
    fontWeight:'300'
  },
  inputStyle: {
    color:'#000',
    paddingRight:5,
    paddingLeft:10,
    fontSize:18,
    lineHeight:23,   //how much space is between each line
    flex:2
},
}