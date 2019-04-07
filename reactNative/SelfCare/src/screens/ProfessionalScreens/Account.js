import React,{Component} from 'react';
import {View,Text, Image, Platform} from 'react-native';
import {Header,Button, CardSection} from './../../components/common';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Account extends Component{
  state={
    avatarSource: null
  }
  
  options = {
      title: 'Select Image',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    choosePic =()=>
   {
    //function handles the click event for both android and ios click events.
    //created based on react-native-image-picker documentation
 
      // ImagePicker has 3 methods launch camera , lauchLibraryPicker and showImagePicker is in the middle
      ImagePicker.showImagePicker(this.options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            avatarSource: source,
          });
        }
      });
    }

    createFormData = (photo, body)=>{
      const data = new FormData();

      data.append("photo",{
        name:photo.fileName,
        type:photo.type,
        //checking if running on IOS, if removing the "file://" before name
        //Platform.OS is a react-native element
        uri:
          Platform.OS === "android" ? photo.uri : photo.uri.replace("file://","")
      });

      Object.keys(body).forEach(key=>{
        data.append(key,body[key])
      });
      return data;
    }

    upholdHandle=()=>{
      fetch("http://localhost:3000/api/imageupload",{
        method:"post",
        body:this.createFormData(this.state.avatarSource,{userId:123}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
       }).then(response=>{
            console.log(`*******\n${response.body}`)
            return response.json()})
         .then(response=>{
            console.log("upload success", response)
            alert("image uploaded");
            this.setState({photo:null})
           })
           .catch(err=>{
             console.log(err);
             alert("Upload failed")
           })
    }

    render(){
      const photo = this.state.avatarSource

      return(
          <View style={{flex:1}}>
            <Header headerText="My Account"/>
            <View style={style.viewStyle}>
              <TouchableOpacity style={style.imageContainer} onPress={this.choosePic}>
                <Image source={this.state.avatarSource ? {uri:photo.uri} :require("./../../assets/placeholder.png")}
                  style={{width:100, height:100,borderRadius:4}}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={style.imageContainer} onPress={this.choosePic}>
                <Image source={this.state.avatarSource ? {uri:photo.uri} :require("./../../assets/placeholder.png")}
                  style={{width:100, height:100,borderRadius:4}}
                  />
              </TouchableOpacity>
              {/* section only renders when photo val aint null */}
              {photo  && (<CardSection><Button onPress={this.upholdHandle}>Upload Image</Button></CardSection>)}
            </View>
            
          </View>
      )
    }
}

const style ={
  imageContainer :{
    marginLeft:5,
    marginBottom:5

  },
  viewStyle:{
    justfyContent:'center',
    height:200,
    alignContent:"center",
    flexDirection:"row"
  }
}

export {Account}