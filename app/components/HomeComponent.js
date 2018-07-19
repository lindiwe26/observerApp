
import React, { Component } from 'react';
import {
  ScrollView, View, Text, TouchableHighlight,
  Image, Dimensions, TouchableOpacity,
  FlatList, ActivityIndicator,
} from 'react-native';

import { Right, Card, CardItem,  Button, Icon, Left, Body, Container } from 'native-base';
// import Button from 'react-native-button';
import HeaderComponent from './HeaderComponent';
import {connect} from 'react-redux';
import * as actions from '../actions';



class HomeComponent extends Component {

    componentDidMount(){
      this.props.fetchArticles();
    }

  render(){
    const {articles} = this.props ;
    console.log(this.props.articles);
  
    
    return(

      <View>
          <HeaderComponent {...this.props}/>
        
          <Card>
            {
              articles.map((data ,index) =>{
                return(
                  <CardItem key={index}>
                    <Img
                        src={{uri:data.picture}}
                        style={{flex: 1 , width:12 , height: 12}}
                    />
                  </CardItem>
                )
              })
            }
          </Card>
         
          </View>    
    )    
  } ;
}




function mapStateToProps({articles}){
  return{
    articles
  }
}


export default connect(mapStateToProps,actions)(HomeComponent);