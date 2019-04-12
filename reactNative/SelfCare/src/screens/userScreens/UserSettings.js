import React, {Component} from 'react';
import {AsyncStorage,View, SafeAreaView,Text} from 'react-native';


import {MenuButton,Header} from '../../components/common';
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
      fontFamily:'Arial',
      fontSize:22,
      color:"#fafafa",
      fontWeight:'normal'
    },
}

    constructor(props){
        super(props)
        this.navigationHandler = this.navigation.bind(this)
        this.logoutHandle = this.logout.bind(this)
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
                <Text style={style.headerStyle}>CONTACT US</Text>
              </View>
              <MenuButton onPress={()=>this.navigationHandler("UserHistory")}
                iconName="envelope"
                title="Email Us"/>

            </View>
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
  }
}
