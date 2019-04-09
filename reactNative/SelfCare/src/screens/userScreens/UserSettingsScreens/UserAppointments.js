//from the screen the user is able to view both past and present bookings
import React from 'react';
import {View, Text,SafeAreaView,AsyncStorage} from 'react-native';
import axios from 'axios';

import theme from '../../../utils/theme';
import {Header} from '../../../components/common'
import { Appointment } from '../../../components';
import { FlatList } from 'react-native-gesture-handler';

class UserAppointments extends React.Component{
    constructor(props){
      super(props)
      this.userId =''
      this._bootStrapAsync(this.getUserAppointments)  //fetching userId from Async Storage
    }

    state ={
      UserAppointments:[]   //array will store the return appointments
    }
   
    componentDidMount(){
      
    }
    _bootStrapAsync=async(cb)=>{
      this.userId = await AsyncStorage.getItem("userId")
      cb()
    }

    getUserAppointments=()=>{
      console.clear()
      console.log(this.userId)
      axios.post("https://frozen-hamlet-87170.herokuapp.com/appointments/findByUser",{
        userId:this.userId
      }).then(result=>{
          this.setState({UserAppointments:result.data})
        }).catch(error=>{
          console.log(error)
        })
    }

    _keyExtract=(index)=>{
      return index._id
    }

    renderItem=({item})=>{
      return(
        <Appointment date={item.date}
          professionalName={item.professionalId.firstName}
          time={item.time}
        />
       )
  }
    render(){
        return (
        <View>
         <SafeAreaView style={style.SafeAreaView}>
            <Header headerText="Upcoming Appointments"/>
         </SafeAreaView>
            <FlatList
               keyExtractor={this._keyExtract}
               renderItem={this.renderItem}
               data={this.state.UserAppointments}
            />
          </View>
        
)
    }
}

export {UserAppointments}

const style = {
    SafeAreaView:{
      backgroundColor: theme.primaryColor.headerColor
    }
}

