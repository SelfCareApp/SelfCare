import React, {Component} from 'react';
import {View,ScrollView,FlatList, AsyncStorage, SafeAreaView,Modal} from 'react-native';
import {Calendar} from 'react-native-calendars';

import moment from 'moment';
import axios from 'axios'

import {Header} from './../../components/common';
import {Appointment} from '../../components';
import theme from '../../utils/theme';

class Booking extends Component {

  constructor(props) {
      super(props);
      this.state = {items: {} };
      this._bootstrapAsync(this.fetchAppointments)
      this.professionalId =""
    }
    
    state ={
      modalVisible:false,
      appointments:{} //holds the fetched appointment data
    }

    _bootstrapAsync= async(fetchData)=>{
      //fetch logged in user
      this.professionalId = await AsyncStorage.getItem("professionalId")
      fetchData()
    }

    fetchAppointments=()=>{
      //fetches the appointment for professional and sets the state
      axios.post("https://frozen-hamlet-87170.herokuapp.com/appointments/findByProfessional",{
        professionalId:this.professionalId
      }).then(result=>{
           appointments= []
          result.data.map((appointment)=>{
            //pulling out time, date, firstName , lastName, appointmentId
            let temp ={}
            let date = appointment.date
            temp = { 
                                    firstName: appointment.userId.firstName,
                                    lastName:appointment.userId.lastName,
                                    time:appointment.time,
                                    date:appointment.date,
                                    bookingCode: appointment._id
                                     }
           appointments.push(temp)
          })
          this.setState({appointments:appointments})
      }).catch(error=>{
        console.log(error)
      })
    }

    viewCalendar=(visible)=>{
      this.setState({ modalVisible: visible})
    }

    _keyExtract=(item,index)=>{
      return item.bookingCode
    }

    renderItem=({item})=>{
      return(
        <Appointment date={item.date}
          professionalName={item.firstName}  
          time={item.time}
        />
       )
  }

    render() {
      return (<View style={{flex:1,backgroundColor: theme.primaryColor.backgroundColor}}>
        <SafeAreaView style={{backgroundColor:theme.primaryColor.headerColor}}>
          <Header headerText="Upcoming appointments"/>
        </SafeAreaView>
        <ScrollView>
        <Calendar />
        <View style={{paddingTop:10}}>
          <FlatList
                keyExtractor={this._keyExtract}
                renderItem={this.renderItem}
                data={this.state.appointments}
              />
        </View>
        </ScrollView>
  

        </View>

      )}
  }
  

export {Booking}