import {View} from 'react-native';
import React, {Component} from 'react';
import {ProfListItem} from '../../components'
import axios from 'axios';
import theme from '../../utils/theme'

class HomeScreen extends Component{
    static navigationOptions ={
        headerTitle:"Providers Near You", 
        headerStyle:{
            backgroundColor:theme.primaryColor.headerColor
        },
        headerTintColor:"#fff"
    }

    constructor(props){
        super(props)
        this.navigationHandler = this.viewAccount.bind(this);
    }
    state={
        professionals:[]
    }

    componentWillMount(){ 
        axios.get('https://frozen-hamlet-87170.herokuapp.com/professionals')
                    .then((result)=>{
                        this.setState({professionals:result.data});
                    }).catch((err)=>console.log(err));
    }

    viewAccount(profObject){
       //called whe the professional listview element is selected
        return this.props.navigation.navigate("ProfessionalAccount",{professional:profObject})
    }

    render(){
        return(
         <View style={{flex:1, marginTop:10}}>
            {this.state.professionals.map((prof)=>{
            return <ProfListItem key ={prof._id}
                navigator ={()=>this.navigationHandler(prof)}
                firstname={prof.firstName} 
                lastname={prof.lastName}
                title="barber"/>
         })}
         </View>)
    }

}

export {HomeScreen}