import React, {Component} from 'react';
import {AsyncStorage,View,Text, SafeAreaView,Modal} from 'react-native';

import {ContactUsForm} from '../../components/modals/ContactUsForm'
import {MenuButton,Header} from '../../components/common';
import theme from './../../utils/theme'
const headerTitleStyle = theme.headerTitleStyle

class Settings extends Component{
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
        this.user = ""    //object. key is type of user

        this._bootstrapAsync()
        //handler passed so as to close modal
        this.closeContactModal = this.hideContactUsModal.bind(this)
    }

    state={
      isVisible:false,
      professionalId:""
    }

    _bootstrapAsync = async () => {
      const professionalId = await AsyncStorage.getItem('professionalId');
      console.log(professionalId)
      professionalId ? this.setState({professionalId:professionalId}) : this.setState({professionalId:""});
    }

    navigation(screen){
        return this.props.navigation.navigate(screen)
    }

    hideContactUsModal=()=>{
      //hides the email modal
      this.setState({isVisible:false})
    }


    logout(){
        AsyncStorage.removeItem('professionalId').then(()=>this.props.navigation.navigate('Auth'))
    }
    render(){
      const user = {professional:this.user}
        return (
          <View style={[{flex:1,backgroundColor: theme.primaryColor.backgroundColor}]}>
            <SafeAreaView style={{backgroundColor:theme.primaryColor.headerColor}}>
              <Header headerText="Settings"/>
            </SafeAreaView>
            <View style={style.constainerStyle}>
              <View style={style.headerContainer}>
                <Text style={style.headerStyle}>ACCOUNT</Text>
               </View>
              <MenuButton 
                extraStyle={{backgroundColor:"#F0EDE5"}}
                iconName="user-cog"
                title="Edit Account"/>        
              <MenuButton 
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

            {/* modals ************************/ }
              <Modal 
                visible={this.state.isVisible}>
                <ContactUsForm 
                  user={{professional:this.state.professionalId}}
                  hide={this.closeContactModal}/>
              </Modal>
            </View>
        )
    }
}

export {Settings}

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
