import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight,Dimensions, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Content,Right, Card, CardItem, Thumbnail,  Button,  Left, Body } from 'native-base';
import { Divider, Tile, Icon  } from 'react-native-elements';
import HeaderComponent from './HeaderComponent';



class AboutComponent extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel ='About Us';
        let drawerIcon= () => (
            <Image 
            source= {require('../icons/downloa.png')}
            style={{width:36, height:36}}
            />
        );
        return { drawerLabel,drawerIcon};

    }
    render () {
        return (


<View style={{backgroundColor:'white'}}>
<HeaderComponent {...this.props}/>
               <View >
               <TouchableHighlight style ={{ 
                width: 125,
                margin: 6,
                height: 30,
                backgroundColor: '#59cbbd',
                alignSelf: 'center',
            
            }}
            onPress={() =>{
                const{navigate} = this.props.navigation;
                navigate('Home');

            }}>
            <Text style= {{color:'white', fontSize: 22, alignSelf: 'center',  }}>Go To Home</Text>

            </TouchableHighlight>
            </View>
<ScrollView>
 <View >
<Card style={{height:400, width:400,}}>
<Image source={require('../Images/background.png')}
                  style={{height: 450,width:400, alignSelf:'center',resizeMode:'stretch'}}/>

                  <CardItem style={{marginBottom:20}}>
                      <Left>
                          <Body>
                              <Text style={{fontFamily:'Lato', fontSize:19, }}>Learn more about Soweto Observer terms and policies</Text>
                              <Text style={{color:'blue', fontSize:15}}>Soweto Observer Terms and policy</Text>
                              </Body>
                          </Left>
                      </CardItem>
    </Card>
     
 </View>


</ScrollView>
</View>
  )
}
}


export default AboutComponent;