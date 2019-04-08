import {View ,FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {SearchBar } from 'react-native-elements'
import axios from 'axios';

import {Header} from '../../components/common'
import {ProfListItem} from '../../components'
import theme from '../../utils/theme';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.navigationHandler = this.viewAccount.bind(this)
    arrayHolder =[]
  }
  
  state={
    loading:false,
    data:[],
    error:null,
    search:''
  }


  componentWillMount(){
    this.makeRemoteRequest();
  }
  
  componentDidMount(){

  }

   makeRemoteRequest(){
      const url = "https://frozen-hamlet-87170.herokuapp.com/professionals";
      this.setState({loading:true})
      axios.get(url)
        .then(
          (result)=>{
            this.setState({
              loading:false,
              data:result.data
            })
          this.arrayHolder = result.data;
          console.log(this.arrayHolder)
        }).catch((error)=>{
                this.setState({loading:false})
                console.log(error)
                }
            )
    }

    filterResults=(text)=>{
      /* this function handles the search filter
         function converts input and retrieved data to uppercase before search, thus making search
         case insensitive
      */
      const newData = this.arrayHolder.filter((item)=>{
        return (item.firstName).toUpperCase().indexOf(text.toUpperCase()) > -1 || (item.lastName).toUpperCase().indexOf(text.toUpperCase()) > -1;
      })
      console.log(`data => ${newData}`)
      this.setState({data:newData,
                     search:text })
    }

    viewAccount=(profObject)=>{
      //called whe the professional listview element is selected
       return this.props.navigation.navigate("ProfessionalAccount",{professional:profObject,userId:this.userId})
   }


    render(){
      return(
        <SafeAreaView style={{backgroundColor: theme.primaryColor.headerColor}}>
          <View><Header headerText="Find Provider"/>
          <SearchBar 
             containerStyle={{backgroundColor:'#3F69AA', borderRadius:2.5,marginTop:0}}
             inputContainerStyle={{backgroundColor:"#fff"}}
             onChangeText={(text)=>this.filterResults(text)}
             value={this.state.search}
             autoCorrect={false}
             placeholder="search by name"
          />
          <FlatList 
            contentContainerStyle={{backgroundColor:'#fff'}}         
            data={this.state.data}          
            renderItem={({ item }) => ( 
              <ProfListItem firstname={item.firstName}
                  lastname={item.lastName}
                  navigator ={()=>this.navigationHandler(item)}
                  title={"Barber"}
                  />       
            )}          
            keyExtractor={item => item._id} 
          />            
        </View>
        </SafeAreaView>
        )
    }
}

export {Search}