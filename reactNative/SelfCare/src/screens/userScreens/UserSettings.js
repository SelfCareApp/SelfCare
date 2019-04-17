import React, {Component} from 'react';
import {AsyncStorage,View, SafeAreaView,Text, 
        TextInput,TouchableOpacity,Linking, Modal} from 'react-native';

import {MenuButton,Input, CardSection} from '../../components/common';
import theme from './../../utils/theme'

class UserSettings extends Component{
  
  static navigationOptions ={
     headerTitle:"Account", 
     headerStyle:{
        height:50,
        backgroundColor:theme.primaryColor.headerColor,
    },
    headerTitleStyle:{
      marginBottom:5,
            fontFamily:'Rubik',
            fontWeight:'600',
            fontSize:22,
            color:"#fafafa",
    },
}

    constructor(props){
        super(props)
        this.navigationHandler = this.navigation.bind(this)
        this.logoutHandle = this.logout.bind(this)
    }

    state={
       isVisible:false,   //modal visibility
    }

    navigation(screen){
        return this.props.navigation.navigate(screen)
    }
    logout(){
        AsyncStorage.removeItem('userId')
        .then(()=>this.props.navigation.navigate("Auth"))
        // AsyncStorage.removeItem('userToken').then(()=>this.props.navigation.navigate('Auth'))
    }
    render(){
        return (
        <SafeAreaView style={{flex:1}}>
          <View style={[style.constainerStyle,{backgroundColor:theme.primaryTheme.container.backgroundColor}]}>
             <View style={style.headerContainer}>
                <Text style={style.headerStyle}>ACCOUNT</Text>
             </View>
             <MenuButton onPress={()=>this.navigationHandler("EditProfile")}
                extraStyle={{backgroundColor:"#F0EDE5"}}
                iconName="user-cog"
                title="Edit Account"/>        
              <MenuButton onPress={()=>this.navigationHandler("UserAppointments")}
                extraStyle={{backgroundColor:"#F0EDE5"}}
                iconName="calendar-check"
                title="Past Transactions"/>
              <MenuButton onPress={this.logoutHandle}
                extraStyle={{backgroundColor:"#F0EDE5"}}
                iconName="sign-out-alt"
                title="Signout of Account"/>
                 <View style={style.headerContainer}>
                <Text style={style.headerStyle}>More</Text>
              </View>
              <MenuButton 
                iconName="dollar-sign"
                title="Promotions and discounts"/>
              <View style={style.headerContainer}>
                <Text style={style.headerStyle}>CONTACT US</Text>
              </View>
              <MenuButton onPress={()=>this.setState({isVisible:true})}
                iconName="envelope"
                title="Email Us"/>
            </View>
            <Modal visible={this.state.isVisible}>
              <SafeAreaView style={style.modalContainer}>
               <View style={style.modalHeader}>
                 <View style={style.modalButton}>
                  <TouchableOpacity onPress={()=>this.setState({isVisible:false})}>
                    <Text style={style.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={{flex:2}}>
                    <Text style={style.headerStyle}>Contact Us</Text>
                 </View>
                 <View style={style.modalButton}>
                    <TouchableOpacity>
                     <Text style={style.buttonText}>Send</Text>
                    </TouchableOpacity>
                 </View>
                </View>
              </SafeAreaView>
              <View>
                <CardSection>
                  <Input label="To :"
                      value="the.selfcareapp@gmail.com"
                   />
                </CardSection>
                <CardSection>
                  <Input label="CC :"
                     placeholder="self@gmail.com"
                   />
                </CardSection>
                <CardSection>
                  <Input label="From :"
                     placeholder="Fortune@gmail.com"
                   />
                </CardSection>
                <CardSection>
                  <Input label="Subject"
                     
                  />
                </CardSection>
                <CardSection>
                  <TextInput style={{height:200,justifyContent:'flex-start'}}/>
                </CardSection>
              </View>
            </Modal>
        </SafeAreaView>)
    }
}

export {UserSettings}

const style ={
  headerStyle:{
    fontFamily:'Rubik',
    fontSize:17,
    fontWeight:'500',
    marginBottom:10,
   
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
  }

}
