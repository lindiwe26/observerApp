import React, {Component} from 'react';

import * as actions from './app/actions';
import {connect} from 'react-redux';


import {AppNav} from './app/config/Navigation';


class App extends Component {

    componentDidMount() {
      this.props.fetchArticles();
    }
    
      render() {
        return (
         <AppNav />
        );
      }
    }
    
    function mapStateToProps({articles}){
      return {
        articles,
      }
    }
    
    export default connect(mapStateToProps, actions) (App);
    