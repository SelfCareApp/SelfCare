import React,{Component} from 'react';
import {View,Text, Image} from 'react-native';
import {Header,Button, CardSection} from './../../components/common';
import ImagePicker from 'react-native-image-picker';

class ProfessionalAccount extends Component{
  state={
    avatarSource: null
  }
options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
    choosePic(){
      const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Instagram' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      // ImagePicker has 3 methods launch camera , lauchLibraryPicker and showImagePicker is in the middle
      ImagePicker.showImagePicker(options, (response) => {
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

    render(){
      const photo = this.state.avatarSource

      return(
          <View>
            <Header headerText="My Account"/>
            <View style={{width:'auto',alignSelf:"center"}}>
              {photo && (
                <Image source={{uri:photo.uri}}
                  style={{width:200, height:200}}
                  />
              )}
            </View>
            <CardSection>
              <Button onPress={()=>this.choosePic()}>Choose Pic</Button>
            </CardSection>

          </View>
      )
    }
}

export {ProfessionalAccount}