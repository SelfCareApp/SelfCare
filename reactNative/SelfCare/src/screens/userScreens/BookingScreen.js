//from this screen the user is able to make a booking
import React,{Component} from 'react';
import {View, Text, ScrollView,FlatList, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars'

import theme from '../../utils/theme'
import { Overlay } from 'react-native-elements';


class BookingScreen extends Component{
    static navigationOptions =({navigation})=>{
        const { params= {}} = navigation.state
         return ({headerTitle:`Schedule Appointment with ${params.professional.firstName}`, 
         headerStyle:{
             backgroundColor:theme.primaryColor.headerColor
         },
         headerTintColor:"#fff"})
     };
     constructor(props){
       super(props)
       this.renderItemHandler = this.renderItem.bind(this)
     }
     state={
       seletedDay:'',
       overlayVisible:false
     }

     renderItem({item}){
         return(
           <TouchableOpacity onPress={()=>this.setState({overlayVisible:true})}>
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
     times = ['9-9:30am','9:30-10am','10-10:30am','10:30-11am','11-11:30am','11:30-12pm','12-12:30pm','12:30-1pm']
        return(
              <ScrollView style={{flex:1}}>
                <Overlay isVisible={this.state.overlayVisible}
                  onBackdropPress={()=>this.setState({overlayVisible:false})}
                  windowBackgroundColor="rgba(00, 00, 99, .5)"
                >
                  <Text style={{fontSize:18, fontFamily:'arial',textAlign:'center'}}>Appointment Confirmation</Text>
                  <View style={{flex:1,flexDirection:'row', alignItems:'flex-end'}}>
                    <Text style={{ height:50,width:100, backgroundColor:'orange'}}>Cancel</Text>
                    <Text style={{ height:50,width:100, backgroundColor:"green", marginLeft:20}}>Confirm Booking</Text>
                  </View>
                </Overlay>
                <Calendar
                  onDayPress={(day)=>{
                      this.setState({seletedDay:day})}
                    }
                  current={{selected: true, marked: true, selectedColor: 'blue'}}
                  markingType={'default'}
                  markedDates={{"2019-03-14":{periods:[ {startingDay: false, endingDay: true, color: '#5f9ea0' }]}}}
                />
                <Text style={style.textHeader}>Available times </Text>
                <FlatList
                  contentContainerStyle={style.flatList}
                  keyExtractor={this._keyExtractor}
                  data={times}
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
        fontSize:20,
        marginBottom:15,
        marginTop:15,
        textAlign:'center',
        fontWeight:'bold'
    }
    ,
    listContainer:{
        marginLeft:10,
        width:150,
        height:70,
        elevation: 1,
        borderRadius: 2,
        backgroundColor: "#cdcdcd",
        paddingTop: 12,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 0,
        marginBottom: 6,
    }, 
    textSyle:{
        fontSize:20,
        marginLeft:20
    }, 
    flatList:{
      alignSelf:'center'
    },
    overlay: {
      flex: 1,
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: 'black',
    } 
}

export {BookingScreen}