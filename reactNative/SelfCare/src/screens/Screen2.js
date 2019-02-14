import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../components/common';
import ProfListItem from '../components/ProfListItem'

const users = [{name:'creig',title:'barber'},{name:'elvis',title:'unknown'}]

class Screen2 extends Component{
   state ={
            //component state
            }
    
    componentWillMount(){
        //this will handle the api request
    }
    
    render(){
            return(<View style={{flex:1}}><Header headerText="Services"/>
        {users.map((user)=>{
           return <ProfListItem key={} name={user.name} title={user.title}/>
        })}
    </View>)
    }

}

export {Screen2}