/*
this component will be used to generate the list view of professionals
this will show the averate rating for the professional
*/
import React,{Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, Image, View} from 'react-native';
import {Rating} from 'react-native-elements'

import {CardSection} from './common';

class ProfListItem extends Component{
    constructor(props){
      super(props)
    }
    listItemDetail(){
        //function will display more details of the selected list item
        console.log();
    }

    render(){
        return(  
                <TouchableOpacity onPress={this.props.navigator} key>
                    <CardSection>
                        <View style={styles.imgView}>
                         <Image style={styles.imgStyle} source={{uri:"https://i.cbc.ca/1.4509398.1517262943!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/dwight.jpg"}}/>
                        </View>
                        <View style={styles.viewStyle}>
                            <Text style={styles.username}>{this.props.firstname} {this.props.lastname}</Text>
                             <Text style={styles.textStyle}>{this.props.title}   >2km away</Text>
                            <Rating imageSize={24}/>
                        </View>
                    </CardSection>
                </TouchableOpacity>
            )
    }
   

}

export {ProfListItem}

const styles ={
    textStyle :{
        fontSize:14,
        color:"#B8B8B8",
        textAlign:"center"
    },
    username:{
        padding:5,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    viewStyle :{
        marginLeft:20,
        shadowColor:'#D1DFFA',
        alignItems:'center'
    },
    imgStyle:{
        marginLeft:30,
        width:60,
        height:60,
        borderRadius:30,

    },
    imgView:{
      shadowOffset:{width:0, height:5}, //dimensions of the shadow
      shadowOpacity:0.7,
      elevation:1,
      justifyContent:'center'
    }
}