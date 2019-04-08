import React, {Component} from 'react';
import {SafeAreaView,View, Text, Dimensions,Modal} from 'react-native';
import theme from '../utils/theme';
import { TouchableOpacity} from 'react-native-gesture-handler';

const {width,height} = Dimensions.get("window")


class EntryScreen extends Component{
    constructor(props){
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    state={
        
    }

    render(){
       return(
       <View style={style.containerStyle}>
         <Text style={style.headerText}>Abantu-the people</Text>
         <Text style={style.secondaryText}>Connecting you and the services {`\n`} around you</Text>
         <View style={style.section}>
            <Text style={[style.secondaryText,{color:'blue',fontSize:22}]}> Get Started!</Text>
         </View>
         <View style={{marginLeft:20,marginTop:20}}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("LogStack")}>
               <Text style={style.sectionText}>Here as a Customer</Text>
             </TouchableOpacity>
         </View>
         <View style={{marginLeft:20,marginTop:20}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProfessionalLoginForm")}>
              <Text style={style.sectionText}>Here as a Professional</Text>
            </TouchableOpacity>
         </View>
       </View>)
   }
}

export default EntryScreen

const style={
    containerStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.primaryColor.textColor
    },
    headerText:{
        marginTop:50,
        fontSize:30,
        textAlign:'center',
        color:"#fff"
    },
    secondaryText:{
        color:"#fff",
        fontSize:18,
        marginLeft:10,
        width:width - 20,
        marginTop:20,
        textAlign:'center'
    },
    section:{
        marginTop:40,
        alignItems:'center'
    },
    sectionText:{
        color:"#fff",
        fontSize:20,
        textAlign:'center'
        
    }
}