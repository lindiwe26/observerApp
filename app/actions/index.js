import {FETCH_ARTICLES} from './types';

export const fetchArticles = () => async dispatch =>{
    const res = await fetch ('/api/articles')
    const data = await res.json();
    dispatch({type: FETCH_ARTICLES, payload: data});

};