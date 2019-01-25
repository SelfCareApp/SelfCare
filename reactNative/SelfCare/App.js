import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginForm from './src/components/LoginForm';
import RegistrationForm from './src/components/RegistrationForm'

class App extends Component{
  constructor(props){
     super(props);
     this.handle = this.updateState.bind(this);
  }

  updateState(){
    alert('Updating state')
    this.setState({authState:"register"})
  }
  state ={
    authState:null,   //keeps state of authention status {null, login,regirster}
  }

  authState(){
    switch(this.state.authState){
      case "login": return (<LoginForm handle ={this.handle}/>);
        break;
      case "register": return (<RegistrationForm />);
        break;
      default :
        return <LoginForm handle ={this.handle}/>
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
