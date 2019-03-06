import React,{Component} from 'react'
import {  ActivityIndicator,  AsyncStorage,StatusBar,StyleSheet, View,} from 'react-native';

class AuthLoadingScreen extends Component {
    constructor() {
      super();
      this._bootstrapAsync();
      this.authenticatedStateChangeHandler = this.authenticatedStateChange.bind(this)
    }
    state ={
      authenticated: null,
    }
    authenticatedStateChange(){
      this.setState({authenticated:true})
    }
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      userToken ? this.setState({authenticated:true}) : this.setState({authenticated:false});
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'App' : 'Auth',this.authenticatedStateChangeHandler);
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }

  export default AuthLoadingScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });