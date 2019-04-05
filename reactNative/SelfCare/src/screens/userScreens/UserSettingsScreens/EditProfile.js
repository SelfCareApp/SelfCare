import React,{Component} from 'react';
import {View,Text, AsyncStorage} from 'react-native';
import axios from 'axios'

import {Input, CardSection, Button,Spinner} from './../../../components/common'
class EditProfile extends Component{
    constructor(props){
        super(props)
        //constructor gets the userEmail from AsyncStorage
        //user info fetched from db and filled into labels and then
        
        this.updateAccountHandle = this.updateAccount.bind(this)
        this.fetchUserDataHandler = this.fetchUserData.bind(this)
        console.log("constructor")
    }

    state ={
        userId:'',
        email:'',
        lastName:'',
        firstName:'',
        password:'',    //password validated before db update
        loading:null,
        userData:{}
    }

    componentWillMount(){
      this._bootstrapAsync(this.setUserId,this.fetchUserDataHandler)
    }

    componentDidMount(){
     console.log(this.state.userData)
    }

    fetchUserData=()=>{
        this.setState({loading:true})
        console.log(this.state.email)
        //called before page loads to populate current form fields
       axios.post("http:/localhost:3000/users/findByEmail",{
            email:this.state.email
        }).then((result)=>{
            console.log(result)
            this.setState({
              userData:result.data})
        }).then((response)=>{
            this.setState({loading:false})
        })
        .catch((error)=>{
            this.setState({loading:false})
            console.log(error)
        })
 
    }

    setUserId=(userId,fetchUserData)=>{
        //sets the logged in userinfo in state
        this.setState({email:userId})
        fetchUserData()

    }

    _bootstrapAsync = async (getAuthenticatedUser, fetchUserData) => {
        //gets the userId (email) from the Async storage
        //accepts to parameters, both callbacks
          const userId = await AsyncStorage.getItem('userId');
          getAuthenticatedUser(userId,fetchUserData)
          return userId;
      };
  
    onChangeTextHandler(value){
        //handles input and updating the state
        this.setState({value})
        console.log(this.state.value)
    }

    updateAccount=()=>{
        //function executed by the click event
        data = {
           firstName:this.state.firstName,
           lastName:this.state.lastName,
           email: this.state.email,
           password:this.state.password
        }
      axios.post("http://localhost:3000/users/updateUser",{
        data
      })
    }

    render(){
        if(this.state.loading == true){
            return <Spinner />
        }
        return(
            <View>
            <CardSection>
                <Input label="First Name"
                    value={this.state.userData.firstName}
                    onChangeText={(firstName)=>this.onChangeTextHandler(firstName)}
                    />
            </CardSection>
            <CardSection>
                <Input label="Last Name"
                    value={this.state.userData.lastName}
                    placeholder="creig"
                    onChangeText={(lastName)=>this.onChangeTextHandler(lastName)}
                    />
            </CardSection>
            <CardSection>
                <Input label="Email"
                    placeholder=""
                    value={this.state.email}
                    onChangeText={(email)=>this.onChangeTextHandler(email)}
                    />
            </CardSection>
            <CardSection>
            <Input label="Password"
                    placeholder="confirm password"
                    secureTextEntry
                    onChangeText={(password)=>this.onChangeTextHandler(password)}
                    />
            </CardSection>
            <CardSection>
                <Button onPress={this.updateAccountHandle}>Submit</Button>
            </CardSection>
            </View>
                )
    }
}

export {EditProfile}