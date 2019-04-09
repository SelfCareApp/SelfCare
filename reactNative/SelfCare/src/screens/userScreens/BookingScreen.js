//from this screen the user is able to make a booking
import React,{Component} from 'react';
import {View, Text, ScrollView,FlatList, TouchableOpacity, AsyncStorage} from 'react-native';
import {Calendar} from 'react-native-calendars'
import moment from 'moment';
import axios from 'axios'

import theme from '../../utils/theme'
import { Overlay} from 'react-native-elements';


class BookingScreen extends Component{
    static navigationOptions =({navigation})=>{
        const { params= {}} = navigation.state
         return ({
        headerTitle:`Schedule Appointment with ${params.professional.firstName}`,
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
         })
     };

     constructor(props){
       super(props)
       this.renderItemHandler = this.renderItem.bind(this)
       this.professional = this.props.navigation.getParam('professional');
       this.userId ='',
       this.times = ['9-9:30am','9:30-10am','10-10:30am','10:30-11am','11-11:30am','11:30-12pm','12-12:30pm','12:30-1pm']
       this._bootstrapAsync()
     }

     componentWillMount=()=>{
      let markedDates = this.state.markedDates
      //
      let date=moment().format("YYYY-MM-DD")
      markedDates[date] = {marked:true,selected:true,selectedColor: '#5f9ea0' }
      this.setState({
        professionalId:this.professional._id,
        markedDates:markedDates,
        selectedDay:date
      })
     }
    
     state={
       markedDates:{},
       selectedDay: '',
       selectedTime:'',
       professionalId:'',
       userId:'',
       overlayVisible:false
     }

     _bootstrapAsync= async()=>{
       //called by constructor to get the UserId that set by successful login
        this.userId = await AsyncStorage.getItem("userId")
     }

     scheduleAppointment=()=>{
      const {professionalId, selectedDay, selectedTime} = this.state
      //handle for confirming appointment
      axios.post('https://frozen-hamlet-87170.herokuapp.com/appointments',{
        professionalId:professionalId,
        userId:this.userId,   //class variable
        date:selectedDay,
        time:selectedTime
      }).then(result=>{
        console.log(result)
      }).catch(error=>{
        console.log(error)
      })
    }

     renderItem=({item})=>{
         return(
           <TouchableOpacity onPress={()=>{
              this.setState({
                overlayVisible:true,
                selectedTime:item
              })}
              }>
             <View style={style.listContainer}>
               <Text style={style.textStyle}>{item}</Text>
             </View>
            </TouchableOpacity>
          )
     }

     _keyExtractor(item,index){
       return index
     }

    render(){
        return(
              <ScrollView style={{flex:1}}>
                <Overlay isVisible={this.state.overlayVisible}
                  onBackdropPress={()=>this.setState({overlayVisible:false})}
                  windowBackgroundColor="#e0e0e0"
                  overlayBackgroundColor="#F0EDE5"
                >
                 <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{fontSize:24, fontFamily:'Times New Roman',textAlign:'center'}}>Appointment Confirmation</Text>
                    <View style={{marginTop:30,alignContent:'flex-start'}}>
                      <Text style={{fontSize:20,fontFamily:'Times New Roman'}}>Date: {this.state.selectedDay}</Text> 
                      <Text style={{fontSize:20,fontFamily:'Times New Roman'}}>Time: {this.state.selectedTime}</Text>  
                      <Text style={{fontSize:20,fontFamily:'Times New Roman'}}>Barber: {this.professional.firstName}</Text>  
                    </View>
                    <View style={{flex:1,flexDirection:'row', alignItems:'flex-end', marginBottom:10}}>
                    <TouchableOpacity style={style.cancelButton}
                      onPress={()=>this.setState({overlayVisible:false})}
                    >
                      <Text style={style.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.confirmButton}
                      onPress={this.scheduleAppointment}
                    >
                      <Text style={style.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </Overlay>
                <Calendar
                 style={{
                   borderWidth:0.4,
                   margin:5,
                   borderColor:'#b0bec5'
                 }}
                 theme={{
                   calendarBackground: '#f5f5f5',
                   todayTextColor: '#00adf5',
                   dayTextColor: '#2d4150',
                   textMonthFontFamily: 'Arial',
                   textMonthFontWeight: 'bold',
                   arrowColor:theme.primaryColor.headerColor  //matches the color of the header
                 }}

                  onDayPress={(day)=>{
                      this.setState({selectedDay:day.dateString,
                      })}
                    }
                  markingType={'default'}
                  current={{selected: true, marked: true, selectedColor: 'blue'}}
                  markedDates={this.state.markedDates}
                />
                <Text style={style.textHeader}>Available times </Text>
                <FlatList
                  contentContainerStyle={style.flatList}
                  keyExtractor={this._keyExtractor}
                  data={this.times}
                  renderItem={this.renderItemHandler}
                  numColumns={2}
                />
                </ScrollView> 
        )
    }
}

const style ={
    listContainer:{
        marginTop: 14,
        alignSelf: "stretch",
    },
    textHeader:{
        fontFamily:"Times New Roman",
        fontSize:20,
        marginBottom:15,
        marginTop:15,
        textAlign:'center',
        fontWeight:'bold'
    }
    ,
    listContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        width:150,
        height:70,
        borderRadius: 10,
        backgroundColor: "#2A4B7C",
        paddingTop: 12,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 0,
        marginBottom: 10
    }, 
    textSyle:{
        fontWeight:'400',
        fontSize:20,
        fontFamily:"Arial"
    }, 
    flatList:{
      alignSelf:'center'
    },
    confirmButton:{
      backgroundColor:'#4caf50',
      padding:20,
      borderRadius:5,
      alignItems:'center'
    },
    cancelButton:{
      backgroundColor:'#E08119',
      padding:20,
      marginRight:20,
      borderRadius:5,
    },
    buttonText:{
      textAlign:'center',
      fontFamily:'Times New Roman',
      fontWeight:'400',
      fontSize:16
    }
    ,
    overlay: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: 'black',
    },
}

export {BookingScreen}