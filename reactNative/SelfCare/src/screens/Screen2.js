import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../components/common';
import ProfListItem from '../components/ProfListItem'

const users = [{name:'creig',title:'barber'},{name:'elvis',title:'unknown'}]

class Screen2 extends Component{
    render(){
            return(<View style={{flex:1}}><Header headerText="Services"/>
        {users.map((user)=>{
           return <ProfListItem name={user.name} title={user.title}/>
        })}
    </View>)
    }

}

export {Screen2}