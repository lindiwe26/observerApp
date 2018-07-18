
import React, { Component } from 'react';
import {
  ScrollView, View, Text, TouchableHighlight,
  Image, Dimensions, TouchableOpacity,
  Alert,
  FlatList, ActivityIndicator,
} from 'react-native';
import { Info } from '../../screenNames';
import { Container, Header, Content, Right, Card, CardItem, Thumbnail, Button, Icon, Left, Body } from 'native-base';
// import Button from 'react-native-button';
import HeaderComponent from './HeaderComponent';
import SplashScreen from './SplashScreen';
import NavTab from './NavTab';


export default class HomeComponent extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let response = await fetch("https://sowetoobserver.herokuapp.com/api/articles");
    let json = await response.json();
    console.log(json);
    let a = json.map((a, i) => {
      return {
        title: a.title,
        picture: a.picture,
        key: a._id,
        id: a._id
      }
    })
    this.setState({ data: a });
  }

  _renderItem(item) {

    return (
      <CardItem style={{ margin: 7, borderBottomColor: '#ff8000', borderBottomWidth: 1, }}>
        <Left>
          <Image source={{ uri: item.picture }}
            style={{ height: 75, width: 75 }} />
          <Body>
            <TouchableOpacity onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('khuzwayo');
            }}>
              <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 16, fontFamily: "vincHand", }}>{item.title}</Text>
            </TouchableOpacity>
          </Body>
        </Left>
      </CardItem>
    )
  }



  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Top Stories';
    let drawerIcon = () => (
      <Image
        source={require('../icons/orangehome-icon.png')}
        style={{ width: 26, height: 26 }}
      />
    );
    return { drawerLabel, drawerIcon };

  }
  render() {
    let scroller = null;
    if(this.state.data > 0){
      scroller = this.state.data.map((a, i) => {
        return (
          <Card key={i} style={{ borderBottomColor: '#ff8000', width: Dimensions.get('window').width }}>
            <CardItem>
              <Body>
                <TouchableOpacity onPress={() => {
                  const { navigate } = this.props.navigation;
                  navigate('mortality');
                }}>
                  <Image source={{ uri: a.picture }}
                    style={{ height: 250, width: Dimensions.get('window').width, flex: 0 }} />
                  <Text style={{ fontStyle: 'normal', color: 'black', fontSize: 19, fontFamily: "vincHand", }}>
                    {a.title}
                  </Text>
                </TouchableOpacity>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>  12 Likes  </Text>

                  <Icon active name="chatbubbles" />
                  <Text>  4 Comments </Text>
                  <Right>
                    <Text>just now</Text>
                  </Right>
                </Button>

              </Body>

            </CardItem>
          </Card>
        )
      })
    }else{
      scroller = <ActivityIndicator />
    }
    return (
      <View style={{ backgroundColor: 'white' }} >
        <HeaderComponent {...this.props} />
        <View >
          {/* <NavTab  {...this.props}/> */}
          <View >
            <TouchableHighlight style={{
              width: 125,
              margin: 6,
              height: 30,
              backgroundColor: '#59cbbd',
              alignSelf: 'center',

            }}
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('Home');

              }}>
              <Text style={{ color: 'white', fontSize: 22, alignSelf: 'center', }}> Top Stories</Text>

            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row', flex: 1, width: Dimensions.get('window').width }}>
            <ScrollView horizontal={true}>
                {scroller}
            </ScrollView>
          </View>
          <View>
            {
              this.state.data.length > 0 ?
                <FlatList
                  data={this.state.data}
                  renderItem={({ item, separators }) => (
                    this._renderItem(item)
                  )}
                />
                :
                <ActivityIndicator />
            }
          </View>
        </View>
      </View>);
  }
}
