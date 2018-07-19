import { Dimensions } from 'react-native';
import {DrawerNavigator, TabNavigator,StackNavigator} from 'react-navigation';
import HomeComponent from '../components/HeaderComponent';
import TrendingComponent from '../components/InfoComponent';
import SportsComponent from '../components/SettingsComponent';
import VideosComponent from '../components/CloudComponent';
import AboutComponent from '../components/AboutComponent';
import ContactComponent from '../components/ContactComponent';
import MortalityComp from '../components/mortality';
import BaxterComp from '../components/Baxter';
import KhuzwayoComp from '../components/khuzwayo';
import JobComp from '../components/job';
import FranceComp from '../components/France';




//screen names
import { Home,Trending,Sports,Videos, About,Contact} from '../../screenNames';
//screen size
var {height,width} = Dimensions.get('window');
let routeConfigs2 = {
    
    Home: {
        screen: HomeComponent,
    },
    Trending: {
        screen: TrendingComponent,
    },
    Sports: {
        screen: SportsComponent,
    },
    Videos: {
        screen: VideosComponent,
    },
};
let tabNavigatorConfig = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: '#59cbbd',
            padding: -10
        },    
        // showLabel: false    
    },    
    order: [ Home,Trending,Sports, Videos, ],
};
const Stabs = TabNavigator(routeConfigs2, tabNavigatorConfig);

let routeConfigs3 ={
    
    Home: {
        path: '/home',
        screen: Stabs,
    },
    
    mortality:{
        screen: MortalityComp,
        navigationOptions:{
            title:'mortality'
        }
    },
    Baxter:{
        screen: BaxterComp,
        navigationOptions:{
            title:'Baxter'
        }
    },
    khuzwayo:{
        screen: KhuzwayoComp,
        navigationOptions:{
            title:'khuzwayo'
        }
    },
    job:{
        screen: JobComp,
        navigationOptions:{
            title:'job'
        }
    },
    France:{
        screen: FranceComp,
        navigationOptions:{
            title:'France'
        }
    },
    Rugby:{
        screen: FranceComp,
        navigationOptions:{
            title:'Rugby'
        }
    },
    
};
let stackNavigatorConfig = {
    headerMode: 'none'
}
const Stacks = StackNavigator(routeConfigs3, stackNavigatorConfig);
let routeConfigs = {
    
  
    Home: {
        path: '/home',
        screen: Stacks,
    },

    About: {
        path: '/info',
        screen: AboutComponent,
    },
    Contact: {
        path: '/settings',
        screen: ContactComponent,
    },
   

};
let drawerNavigatorConfig ={
    initialRouteName : Home,
    drawerWidth : width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: '#ff8000',
    color:'red',
    contentOptions:{
        activeTintColor: 'red'
        
    },
    order: [Home,About,Contact]

};
export const AppNav = DrawerNavigator(routeConfigs,drawerNavigatorConfig);