/*
this component will be used to generate the list view of professionals
this will show the averate rating for the professional
*/
import React,{Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Image, View} from 'react-native';
import {Rating} from 'react-native-elements'

import {Card,CardSection} from './common';

class ProfListItem extends Component{
    
     listItemDetail(){
        //function will display more details of the selected list item
        console.log();
    }
    render(){
        return(  
            <Card>
                <TouchableOpacity key={this.props.key} onPress={(user)=>{console.log(user)}}>
                    <CardSection>
                            <Image style={styles.imgStyle} source={{uri:"http://www.mdc.edu/massagetherapy/img/massage.jpg"}}/>
                            <View style={styles.viewStyle}>
                            <Text style={styles.textStyle}>{this.props.name}</Text>
                            <Text style={styles.textStyle}>{this.props.title}</Text>
                            <Rating imageSize={30}/>
                        </View>
                    </CardSection>
                </TouchableOpacity>
            </Card>)
    }
   

}

export default ProfListItem

const styles ={
    textStyle :{
        fontSize:20,
        textAlign:"center"
    },
    viewStyle :{
        marginLeft:40,
    },
    imgStyle:{
        marginLeft:30,
        width:60,
        height:60,
        marginTop:10
    }
}