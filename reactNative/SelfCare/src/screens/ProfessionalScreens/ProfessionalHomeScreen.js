import React, {Component} from 'react';
import {View,Text} from 'react-native'
import {Button, CardSection, Spinner} from './../../components/common'
import {LoginManager, AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk'

class HomeScreen extends Component{
    state ={
        loading:false
    }
    async facebookLogin() {
        // native_only config will fail in the case that the user has
        // not installed in his device the Facebook app. In this case we
        // need to go for webview.
        let result;
        try {
          this.setState({showLoadingModal: true});   
          LoginManager.setLoginBehavior('NATIVE_ONLY');
          result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
        } catch (nativeError) {
          try {
            LoginManager.setLoginBehavior('WEB_ONLY');
            result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
          } catch (webError) {
            // show error message to the user if none of the FB screens
            // did not open
          }
        }
        // handle the case that users clicks cancel button in Login view
        if (result.isCancelled) {
          this.setState({
            showLoadingModal: false
          });
        } else {
          // Create a graph request asking for user information
          this.FBGraphRequest('id, email, picture.type(large)', this.FBLoginCallback);
        }
      }

      async FBGraphRequest(fields, callback) {
        const accessData = await AccessToken.getCurrentAccessToken();
        // Create a graph request asking for user information
        const infoRequest = new GraphRequest('/me', {
          accessToken: accessData.accessToken,
          parameters: {
            fields: {
              string: fields
            }
          }
        }, callback.bind(this));
        // Execute the graph request created above
        new GraphRequestManager().addRequest(infoRequest).start();
      }
      async FBLoginCallback(error, result) {
        if (error) {
          this.setState({
            showLoadingModal: false
          });
        } else {
          // Retrieve and save user details in state. In our case with 
          // Redux and custom action saveUser
        //   this.props.saveUser({
        //     id: result.id,
        //     email: result.email,
        //     image: result.picture.data.url
        //   });
        console.log(result)
        }
      }
    render(){
        if(this.state.loading == false){
            return ( <View style={{flex:1,justifyContent:'flex-end'}}>     
            <CardSection>
            <Button onPress={()=>this.facebookLogin()}>Facebook</Button>  
            </CardSection>
        </View>)
        }
        return <Spinner />
    }
}
export {HomeScreen} //this is passed to index.js