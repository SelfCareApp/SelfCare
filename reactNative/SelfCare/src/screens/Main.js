import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button,CardSection,Header} from  '../components/common';

import {Card,Icon, ButtonGroup} from 'react-native-elements';

class MainScreen extends Component{
    constructor(props){
        super(props);
        this.changeDisplayHandle = this.changeDisplayArea.bind(this)
    }

    component1 = () => <Icon type='MaterialIcons' name="person" />
    component2 = () => <Icon type="MaterialIcons" name="message" />
    component3 = () => <Icon type="MaterialIcons" name="picture-in-picture"/>

    state ={
        activeArea :"bio"   //this handles the area below handling the content rendered
    };

    renderArea(){
        //this handles the which section is active on screen
        //this component changes the active area state
        if(this.state.activeArea == "bio"){
            return (<CardSection><Text>This is the bio area</Text></CardSection>);
        }else if(this.state.activeArea == "portfolio"){
            return (<CardSection><Text>This is the gallery area</Text></CardSection>);
        }
    }

    changeDisplayArea (btnId){
        //this handles the click event for the changing the area displayed on the page
        /* params: btnId is param thats passed as a result of the button group element,
                    this is courtesy of the button group element which takes an array of buttons to display
                    this then allows use of array index system
        */
        switch(btnId){
            case 0:
                this.setState({activeArea:"bio"});
                break;
            case  1:
                this.setState({activeArea:"messages"});
                break;
            case 2:
            this.setState({activeArea:"portfolio"});
                break;

        }
        console.log("changed area to: "+ this.state.activeArea)
    }


    render(){
        buttons =[{element:this.component1},{element:this.component2},{element:this.component3}]
        return (
            <View style={style.containerStyle}>
                <Header headerText="Professionals" />
                 <Card title="@realSlim"
                    style={style.cardStyle}
                     image={{uri:'https://d95vll9kevyvb.cloudfront.net/5pikaXYBvt4hQ-t3Br7PwpuCnr0=/13x0:787x533/580x0/https%3A//smallslivestatic.s3.amazonaws.com/artist_images/jonathan-barber.jpg'}} >
                      <Text style={{marginBottom: 20}}>
                         Real Barbers are born not made.! #masterBarber#mikeHair
                      </Text>
                 </Card>
                <CardSection>
                    <Button >Book</Button>
                </CardSection>
                <ButtonGroup buttons={buttons} onPress={this.changeDisplayHandle}
                 containerStyle={{height:50}}
                />
                <Card>
                 {this.renderArea()}
                </Card>
            </View>)
    }
}

const style ={
    containerStyle:{
        marginTop:15
    },

};
export default MainScreen;