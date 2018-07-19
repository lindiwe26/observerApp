import { AppRegistry } from 'react-native';
import React , {Component} from 'react';
import App from './App';


import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './app/reducers';

const store = createStore(reducers,{}, applyMiddleware(reduxThunk));

export default class Index extends Component {
        render() {
        return(
            <Provider store={store}>
            <App />
        </Provider>
        )
    }
}

AppRegistry.registerComponent('sowetoNewz', () => Index);
