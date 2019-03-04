import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../../components/common';
import ProfListItem from '../../components/ProfListItem'
import axios from 'axios';


class ProfessionalList extends Component{
    state={
        professionals:[]
    }

    componentWillMount(){ 
        console.log('mounting.....');
        axios.get('https://frozen-hamlet-87170.herokuapp.com/professionals')
                    .then((result)=>{
                        this.setState({professionals:result.data});
                    }).catch((err)=>console.log(err));
    }

    render(){
        return(
         <View style={{flex:1}}><Header headerText="Providers Near You"/>
            {this.state.professionals.map((prof)=>{
            return <ProfListItem key ={prof._id} 
                name={prof.name.first} title="barber"/>
         })}
         </View>)
    }

}

export {ProfessionalList}