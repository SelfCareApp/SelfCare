import React,{Component} from 'react'
import {  ActivityIndicator,  AsyncStorage,StatusBar,StyleSheet, View, PermissionsAndroid} from 'react-native';

class AuthLoadingScreen extends Component {
    constructor(props) {
      super(props);
      this.requestLocation(),
      this._bootstrapAsync();
      this.authenticatedStateChangeHandler = this.authenticatedStateChange.bind(this)
    };

    state ={
      authenticated: null,
    };
    authenticatedStateChange(){
      this.setState({authenticated:true})
    }
    
    async requestLocation(){
      //requesting permisssions
      try{
         this.granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                  title:'Abantu Location Request',
                  message:'Abantu the app needs access to your location to show professional within your proximity',
                  buttonNeutral:'Ask Me Later',
                  buttonPositive:'Ok',
                  buttonNegative:'Cancel'
              }
          )
      }catch(err){
          if(err){
              console.log(err)
          }
      }finally{
          if(this.granted === PermissionsAndroid.RESULTS.GRANTED){
              console.log('You can now use the location')
          }else{
              console.log('Location not granted')
          }
      }
  }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      const userId = await AsyncStorage.getItem('userId');
      userToken ? this.setState({authenticated:true}) : this.setState({authenticated:false});
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      if(userToken){
        console.log(`Auth loading ${userId}`)
        console.log("Auth Loading Screen")
        this.props.navigation.navigate('App');
      }else{
        this.props.navigation.navigate('Auth');
      }
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default AuthLoadingScreen;
  
