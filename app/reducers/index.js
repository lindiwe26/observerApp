import {combineReducers} from 'redux';

import ARTICLESReducer from './articleReducer';

export default combineReducers ({
    articles: articlesReducer,
});