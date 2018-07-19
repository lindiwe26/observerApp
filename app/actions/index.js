//import {FETCH_ARTICLES} from './types';
//import {FETCH_VIDEO} from '.types';




export const fetchArticles = () => async dispatch =>{
    const res = await fetch ('/api/articles')
    const data = await res.json();
    dispatch({type: FETCH_ARTICLES, payload: data});

};

export const fetchVideo = () => async dispatch => {
        const res = await fetch('https://sowetoobserver.herokuapp.com/api/articles');
        const data = await res.json();
        dispatch({type:FETCH_VIDEO , payload : data})
};