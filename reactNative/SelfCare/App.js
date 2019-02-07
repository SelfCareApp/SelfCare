import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import LoginForm from './src/screens/LoginForm';
import RegistrationForm from './src/screens/RegistrationForm'
import Navigator from './Navigator';

class App extends Component{
  constructor(props){
     super(props);
     //this.handle is passed down to the Login form
     //this is how the login form mutates the state
     this.registrationHandle = this.updateState.bind(this);
     /*
     handle below is used to change the status of state
     */
     this.loginHandle = this.loginStatusChange.bind(this)
  }

  state ={
    authState:null,   //keeps state of authention status {null, login,regirster}
    loading:null
  };

  componentWillMount(){
  /* This confirms that user is logged in*/
  }

  loginStatusChange(){
    this.setState({
      authState:"success"
    })
  }

  updateState(){
    this.setState({authState:"register"})
  }


  authState(){
    console.log(`*************\n${this.state.authState}`)
    switch(this.state.authState){
      case "success":  return <Navigator/>
        break;
      case "register": return (<RegistrationForm />)
        break;
      default :
        return (<LoginForm loginHandle ={this.loginHandle} registrationHandle ={this.registrationHandle}/>)
       
    }
  }


  render() {
    return (
        this.authState()
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
