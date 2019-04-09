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
         <Text style={[theme.primaryTheme.headerText,style.textColor]}>Self Care</Text>
         <Text style={[theme.primaryTheme.secondaryHeader,style.textColor]}>~Connecting you and the services {`\n`} around you~</Text>             
         <View style={style.section}>
         </View>
         <View style={style.section}>
            <Text style={[theme.primaryTheme.secondaryHeader,style.textColor,{fontFamily:'Anton'}]}> Get Started!</Text>
         </View>
         <View style={{marginLeft:20,marginTop:20}}>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("LogStack")}>
               <Text style={[theme.primaryTheme.paragraph,style.linkColor,{textDecorationLine:'underline',}]}>Here as a Customer</Text>
             </TouchableOpacity>
         </View>
         <View style={{marginLeft:20,marginTop:20}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProfessionalAuthStack")}>
              <Text style={[theme.primaryTheme.paragraph,style.linkColor,{textDecorationLine:'underline',}]}>Here as a Professional</Text>
            </TouchableOpacity>
         </View>
       </View>)
   }
}

export default EntryScreen

const style={
    //rest of style utils/theme
    containerStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.primaryColor.textColor
    },
    section:{
        marginTop:30,
    },
    textColor:{
        color:'#F0EDE5'
    },
    linkColor:{
        color:"#E08119"
    }
}