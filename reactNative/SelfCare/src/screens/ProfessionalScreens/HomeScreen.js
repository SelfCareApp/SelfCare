import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {Header, Spinner} from '../../components/common'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component{
    state ={
        loading:false
    }
    render(){
        return ( <View style={styles.containerStyle}>     
            <Header headerText={"Appointments"}/>
            {/* <View style={styles.headerContainer}>
                <Text style={styles.headingStyle}>Appointments</Text>
            </View> */}
     
            <View style={styles.cardContainer}>
             <TouchableOpacity style={styles.cardHeader}>
                <Icon name="clock" size={24}/>
                <Text style={{fontSize:24, marginLeft:20,textAlign:'center',fontWeight:'bold'}}>Today</Text>
             </TouchableOpacity>
             <View style={styles.cardBody}>
                <Text>Nothing Scheduled for today</Text>
             </View>
            </View>
            <View >
             <TouchableOpacity raised style={styles.cardHeader}>
                <Icon name="calendar" size={24}/>
                <Text style={{fontSize:24, marginLeft:20,textAlign:'center',fontWeight:'bold'}}>Next 5 days</Text>
             </TouchableOpacity>
             <View style={styles.cardBody}>
                <Text>Nothing Scheduled for today</Text>
             </View>
            </View>
        </View>)
    }
}

const styles = {
    containerStyle:{
        flex:1
    },
    headingStyle:{
      fontSize:24
    },
    headerContainer:{
        marginTop:10,
        marginLeft:10
    },
    cardContainer:{
        shadowColor:'#1a237e',
        shadowOffset:{width:2, height:5}, //dimensions of the shadow
        shadowOpacity:0.4,
        elevation:4,
    }
    ,
    cardHeader :{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        marginTop:20,
        backgroundColor:'#e1f5fe',
        position:'relative',
        padding:10,
        width:300
        
    },
    cardBody:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        width:300,
        height:200,
        backgroundColor:"#e1f5fe",
        opacity:0.8,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    }
}

export {HomeScreen} //this is passed to index.js