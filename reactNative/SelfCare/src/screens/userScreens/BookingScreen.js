//from this screen the user is able to make a booking
import React,{Component} from 'react';
import {View, Text, ScrollView,FlatList, TouchableOpacity, AsyncStorage} from 'react-native';
import {Calendar} from 'react-native-calendars'

import theme from '../../utils/theme'
import { Overlay} from 'react-native-elements';


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
       this.professional = this.props.navigation.getParam('professional');
       this.userId ='',
       this._bootstrapAsync()
     }

     componentWillMount=()=>{
      this.setState({
        professionalId:this.professional._id,
        userId:this.userId
      })
     }

     componentDidMount(){
     }
     state={
       seletedDay: '',
       selecetedTime:'',
       professionalId:'',
       userId:'',
       overlayVisible:false
     }

     _bootstrapAsync= async()=>{
        this.userId = await AsyncStorage.getItem("userId")
        this.setState({userId:this.userId})
     }

     renderItem=({item})=>{
         return(
           <TouchableOpacity onPress={()=>{
              this.setState({
                overlayVisible:true,
                selecetedTime:item
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
     times = ['9-9:30am','9:30-10am','10-10:30am','10:30-11am','11-11:30am','11:30-12pm','12-12:30pm','12:30-1pm']
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
                      <Text style={{fontSize:20,fontFamily:'Times New Roman'}}>Date: {this.state.seletedDay}</Text> 
                      <Text style={{fontSize:20,fontFamily:'Times New Roman'}}>Time: {this.state.selecetedTime}</Text>  
                      <Text style={{fontSize:20,fontFamily:'Times New Roman'}}>Barber: {this.professional.firstName}</Text>  
                    </View>
                    <View style={{flex:1,flexDirection:'row', alignItems:'flex-end', marginBottom:10}}>
                    <TouchableOpacity style={style.cancelButton}
                      onPress={()=>this.setState({overlayVisible:false})}
                    >
                      <Text style={style.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.confirmButton}>
                      <Text style={style.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                </Overlay>
                <Calendar
                  onDayPress={(day)=>{
                      this.setState({seletedDay:day.dateString})}
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
        fontFamily:"Times New Roman",
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
        marginBottom: 6
    }, 
    textSyle:{
        fontSize:20,
        marginLeft:20,
        fontFamily:"Times New Roman"
    }, 
    flatList:{
      alignSelf:'center'
    },
    confirmButton:{
      backgroundColor:'#4caf50',
      padding:15,
      borderRadius:2,
      alignItems:'center'
    },
    cancelButton:{
      backgroundColor:'#f57c00',
      padding:15,
      marginRight:20,
      borderRadius:2,
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
    } 
}

export {BookingScreen}