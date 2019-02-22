import React, {Component} from 'react';
import {RegistrationForm, LoginForm} from './src/screens/Authentication'
import Navigator from './Navigator';
import WelcomeNavigator from './WelcomeNavigator';

class App extends Component{
  constructor(props){
     super(props);
     //this.handle is passed down to the Login form
     //this is how the login form mutates the state
     this.registrationHandle = this.updateState.bind(this);
     /*
     handler below is used to change the status of state
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
        //<WelcomeNavigator handler="my handler"/>
    );
  }
}

export default App;


