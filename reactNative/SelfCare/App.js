import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import LoginForm from './src/components/LoginForm';
import RegistrationForm from './src/components/RegistrationForm'
import Navigator from './Navigator';

class App extends Component{
  constructor(props){
     super(props);
     //this.handle is passed down to the Login form
     //this is how the login form mutates the state
     this.handle = this.updateState.bind(this);
  }

    state ={
    authState:"login",   //keeps state of authention status {null, login,regirster}
    loading:null
  }

  updateState(){
    this.setState({authState:"register"})
  }


  authState(){
    switch(this.state.authState){
      case "login": return (<LoginForm handle ={this.handle}/>);
        break;
      case "register": return (<RegistrationForm />);
        break;
      default :
        return <Navigator/>
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
