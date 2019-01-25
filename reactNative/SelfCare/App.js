import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginForm from './src/components/LoginForm';
import RegistrationForm from './src/components/RegistrationForm'

class App extends Component{
  state ={
    authState:null,   //keeps state of authention status {null, login,regirster}
  }

  authState(){
    switch(this.state.authState){
      case "login": return (<LoginForm />);
        break;
      case "register": return (<RegistrationForm />);
        break;
      default:
        return <LoginForm />
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
