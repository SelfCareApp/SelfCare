import {View,AsyncStorage, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {ProfListItem} from '../../components'
import {Spinner} from '../../components/common'
import axios from 'axios';
import theme from '../../utils/theme'

class HomeScreen extends Component{
    static navigationOptions ={
        headerTitle:"Providers Near You", 
        headerStyle:{
            height:50,
            backgroundColor:theme.primaryColor.headerColor,
        },
        headerTitleStyle:{
          marginBottom:5,
          fontFamily:'Rubik',
            fontWeight:'600',
            fontSize:22,
            color:"#fafafa",
        },
    }

    constructor(props){
        super(props)
        this.navigationHandler = this.viewAccount.bind(this);
        this.userId=''
        this._bootstrapAsync()
    }

    state = {
        professionals:[],
        longitude:null,
        latitude:null,
        loading:false   //spinner on and off
    }

    componentWillMount(){

    }

   componentDidMount(){
    this.getUserLocation(this.getNearByProfessionals)

    }

    _bootstrapAsync = async () => {
        this.userId = await AsyncStorage.getItem('userId');
      };

    async getUserLocation (cb){
       await navigator.geolocation.getCurrentPosition(
          position =>{
              const location = JSON.stringify(position)
              this.setState({longitude:position.coords.longitude, latitude:position.coords.latitude})
              cb()
          },
          (error)=>{
              alert(error.messsage)
          },
          {enableHighAccuracy:true, timeout:20000,maximumAge:1000}
      ).then((result)=>{
       this.setState({loading:false})
      }).catch((error)=>this.setState({loading:false}))
      
    }

   getNearByProfessionals =()=>{
    axios.post('https://frozen-hamlet-87170.herokuapp.com/professionals/findByLocation',{
            location:[this.state.longitude,
            this.state.latitude]
        })
        .then((result)=>{
            this.setState({
                professionals:result.data,
            });
        }).catch((err)=>{
            this.setState({loading:false})
        })
        
        //gets a list of all the professionals in the area
    }

    renderProfessionalList=()=>{
        if(this.state.loading === true){
            return <Spinner size="large"/>
        }
        
        return (
          this.state.professionals.map((prof)=>{
             return <ProfListItem key ={prof._id}
                navigator ={()=>this.navigationHandler(prof)}
                firstname={prof.firstName} 
                lastname={prof.lastName}
                title="barber"/>
         }))
    }

    viewAccount=(profObject)=>{
       //called whe the professional listview element is selected
        return this.props.navigation.navigate("ProfessionalAccount",{professional:profObject,userId:this.userId})
    }

    render(){
        return(
         <SafeAreaView style={{flex:1, backgroundColor: theme.primaryTheme.container.backgroundColor}}>
           <View style={{marginTop:10}}>
            {this.renderProfessionalList()}
           </View>  
         </SafeAreaView>
)
    }

}

export {HomeScreen}