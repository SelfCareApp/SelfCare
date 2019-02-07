/*
this component will be used to generate the list view of professionals
this will show the averate rating for the professional
*/
import React from 'react';
import {Card,CardSection} from './common';
import {Text, Image, View} from 'react-native';
import {Rating} from 'react-native-elements'

const ProfList =()=>{
    return(    <Card>
        <CardSection>
            <Image style={styles.imgStyle} source={{uri:"http://www.mdc.edu/massagetherapy/img/massage.jpg"}}/>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>John Doe</Text>
                <Text style={styles.textStyle}>Barber</Text>
                <Rating imageSize={30}/>
            </View>
        </CardSection>
    </Card>)

}

export default ProfList

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